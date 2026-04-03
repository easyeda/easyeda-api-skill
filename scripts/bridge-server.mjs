/**
 * EasyEDA WebSocket Bridge Server
 *
 * 这是一个 Node.js WebSocket 服务端，用于桥接 AI 编程工具和 EasyEDA Pro 客户端。
 * 支持所有兼容 Agent Skills 标准的工具（Claude Code、OpenCode、QwenCode 等）。
 *
 * 架构：
 *   ┌──────────────┐   HTTP/WS     ┌────────────────┐   WebSocket    ┌──────────┐
 *   │   AI Agent    │ ◄───────────► │  Bridge Server  │ ◄───────────► │  EasyEDA  │
 *   │  (Skill Tool) │  Port Range   │  (This Server)  │  Port Range   │  (Client) │
 *   └──────────────┘  49620-49629   └────────────────┘  49620-49629   └──────────┘
 *
 * 端口范围 49620-49629，启动时自动检测可用端口。
 * EasyEDA 扩展通过 eda.sys_WebSocket.register() 连接到此服务。
 * AI 通过 HTTP API 或直接 WebSocket 发送代码执行请求。
 *
 * 握手验证协议：
 * - GET /health 返回 { service: "easyeda-bridge", ... }
 * - WebSocket 连接后服务端发送 { type: "handshake", service: "easyeda-bridge" }
 * - 客户端需验证 service 字段匹配后才确认连接有效
 *
 * 协议格式（JSON）：
 * {
 *   "type": "execute" | "result" | "error" | "ping" | "pong" | "handshake",
 *   "id": "<request-uuid>",
 *   "code": "<js code string>",           // execute 时
 *   "result": <any>,                       // result 时
 *   "error": "<error message>",            // error 时
 *   "timestamp": <unix ms>
 * }
 */

import { WebSocketServer } from 'ws';
import { randomUUID } from 'node:crypto';
import { createServer, get as httpGet } from 'node:http';
import { createConnection } from 'node:net';

// ─── Port Configuration ─────────────────────────────────────────────
const PORT_START = 49620;
const PORT_END = 49629;
const SERVICE_ID = 'easyeda-bridge';

// ─── State ──────────────────────────────────────────────────────────
/** @type {Map<string, import('ws').WebSocket>} EDA window ID -> WebSocket */
const edaClients = new Map();

/** @type {Map<string, {resolve: Function, reject: Function, timer: NodeJS.Timeout}>} */
const pendingRequests = new Map();

/** @type {string | null} 当前AI端选中的EDA窗口ID */
let activeEdaWindowId = null;

const REQUEST_TIMEOUT_MS = 30_000;

// ─── Port Detection ─────────────────────────────────────────────────

/**
 * Check if a TCP port is already in use.
 * @param {number} port
 * @returns {Promise<boolean>} true if port is in use
 */
function isPortInUse(port) {
  return new Promise((resolve) => {
    const socket = createConnection({ port, host: '127.0.0.1' });
    socket.setTimeout(300);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => {
      socket.destroy();
      resolve(false);
    });
  });
}

/**
 * Check if a port is already running our bridge service.
 * Sends HTTP GET /health and verifies { service: "easyeda-bridge" }.
 * @param {number} port
 * @returns {Promise<boolean>}
 */
function isBridgeRunning(port) {
  return new Promise((resolve) => {
    const req = httpGet(`http://127.0.0.1:${port}/health`, { timeout: 800 }, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.service === SERVICE_ID);
        } catch {
          resolve(false);
        }
      });
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

/**
 * Detect if an existing bridge instance is already running in the port range.
 * @returns {Promise<number|null>} The port of the existing instance, or null
 */
async function findExistingInstance() {
  for (let port = PORT_START; port <= PORT_END; port++) {
    if (await isBridgeRunning(port)) return port;
  }
  return null;
}

/**
 * Find the first available port in range.
 * @returns {Promise<number>}
 */
async function findAvailablePort() {
  for (let port = PORT_START; port <= PORT_END; port++) {
    const inUse = await isPortInUse(port);
    if (!inUse) return port;
  }
  throw new Error(`All ports in range ${PORT_START}-${PORT_END} are in use`);
}

// ─── HTTP Server (for AI to submit code via HTTP POST) ─────────────
const httpServer = createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check — includes service identifier for client handshake verification
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      service: SERVICE_ID,
      status: 'ok',
      edaConnected: edaClients.size > 0,
      edaWindowCount: edaClients.size,
      activeWindowId: activeEdaWindowId,
      pendingRequests: pendingRequests.size,
      timestamp: Date.now(),
    }));
    return;
  }

  // List all connected EDA windows
  if (req.method === 'GET' && req.url === '/eda-windows') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const windows = [];
    for (const [windowId, ws] of edaClients) {
      windows.push({
        windowId,
        connected: ws.readyState === 1,
        active: windowId === activeEdaWindowId,
      });
    }
    res.end(JSON.stringify({
      windows,
      activeWindowId: activeEdaWindowId,
      count: edaClients.size,
    }));
    return;
  }

  // Set active EDA window
  if (req.method === 'POST' && req.url === '/eda-windows/select') {
    let body = '';
    for await (const chunk of req) body += chunk;
    try {
      const payload = JSON.parse(body);
      const { windowId } = payload;
      if (!edaClients.has(windowId)) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `EDA window "${windowId}" not found` }));
        return;
      }
      activeEdaWindowId = windowId;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, activeWindowId }));
    }
    catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid request body' }));
    }
    return;
  }

  // Execute code on EDA
  if (req.method === 'POST' && req.url === '/execute') {
    let body = '';
    for await (const chunk of req) body += chunk;

    try {
      const payload = JSON.parse(body);
      const code = payload.code;
      const windowId = payload.windowId; // optional, uses active window if not specified
      if (!code || typeof code !== 'string') {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing "code" field (string)' }));
        return;
      }

      const result = await executeOnEda(code, windowId);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, result, windowId: windowId || activeEdaWindowId }));
    } catch (err) {
      const status = err.message?.includes('not connected') ? 503 : 500;
      res.writeHead(status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

// ─── WebSocket Server ───────────────────────────────────────────────
const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws, req) => {
  const clientType = req.url === '/eda' ? 'eda' : 'agent';
  console.log(`[WS] New ${clientType} connection from ${req.socket.remoteAddress}`);

  // Send handshake message for client verification
  ws.send(JSON.stringify({
    type: 'handshake',
    service: SERVICE_ID,
    clientType,
    timestamp: Date.now(),
  }));

  if (clientType === 'eda') {
    let registeredWindowId = null;

    ws.on('message', (raw) => {
      try {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'register' && msg.windowId) {
          // EDA client registering with window ID
          registeredWindowId = msg.windowId;
          edaClients.set(registeredWindowId, ws);
          // Auto-select if first window or if no active window
          if (edaClients.size === 1 || !activeEdaWindowId) {
            activeEdaWindowId = registeredWindowId;
          }
          console.log(`[WS] EDA window registered: ${registeredWindowId}, total: ${edaClients.size}`);
          return;
        }
        // Always pass a valid windowId (use registeredWindowId if available, otherwise log warning)
        const effectiveWindowId = registeredWindowId || 'unregistered';
        handleEdaMessage(msg, effectiveWindowId);
      } catch (err) {
        console.error('[WS] Failed to parse EDA message:', err.message);
      }
    });

    ws.on('close', (code, reason) => {
      console.log(`[WS] EDA window disconnected: ${registeredWindowId} (${code} ${reason})`);
      if (registeredWindowId) {
        edaClients.delete(registeredWindowId);
        if (activeEdaWindowId === registeredWindowId) {
          // Select another window if available
          activeEdaWindowId = edaClients.keys().next().value || null;
        }
        // Reject pending requests for this window
        for (const [id, req] of pendingRequests) {
          if (req.windowId === registeredWindowId) {
            clearTimeout(req.timer);
            req.reject(new Error(`EDA window "${registeredWindowId}" disconnected`));
            pendingRequests.delete(id);
          }
        }
      }
    });

    ws.on('error', (err) => {
      console.error('[WS] EDA client error:', err.message);
    });
  } else {
    // Agent / AI client connection
    ws.on('message', async (raw) => {
      try {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'execute') {
          try {
            const result = await executeOnEda(msg.code, msg.windowId);
            ws.send(JSON.stringify({
              type: 'result',
              id: msg.id,
              result,
              timestamp: Date.now(),
            }));
          } catch (err) {
            ws.send(JSON.stringify({
              type: 'error',
              id: msg.id,
              error: err.message,
              timestamp: Date.now(),
            }));
          }
        } else if (msg.type === 'ping') {
          ws.send(JSON.stringify({ type: 'pong', id: msg.id, timestamp: Date.now() }));
        }
      } catch (err) {
        console.error('[WS] Failed to parse agent message:', err.message);
      }
    });

    ws.on('close', () => {
      console.log('[WS] Agent client disconnected');
    });
  }
});

// ─── Core logic ─────────────────────────────────────────────────────

/**
 * Send a message to the connected EDA client
 * @param {string} windowId - Target EDA window ID
 * @param {object} msg - Message to send
 */
function sendToEda(windowId, msg) {
  const edaClient = edaClients.get(windowId);
  if (!edaClient) {
    throw new Error(`EDA window "${windowId}" not found in connected clients`);
  }
  if (edaClient.readyState !== 1) {
    throw new Error(`EDA window "${windowId}" is not in connected state (readyState: ${edaClient.readyState})`);
  }
  try {
    edaClient.send(JSON.stringify(msg));
  } catch (err) {
    throw new Error(`Failed to send to EDA window "${windowId}": ${err.message}`);
  }
}

/**
 * Execute JavaScript code on the EDA client and return the result
 * @param {string} code - JavaScript code to execute in EDA context
 * @param {string} [windowId] - Specific EDA window ID (uses active window if not specified)
 * @returns {Promise<any>}
 */
function executeOnEda(code, windowId) {
  return new Promise((resolve, reject) => {
    const targetWindowId = windowId || activeEdaWindowId;

    if (!targetWindowId) {
      reject(new Error('No EDA window connected. Please connect an EDA window first.'));
      return;
    }

    if (!edaClients.has(targetWindowId) || edaClients.get(targetWindowId).readyState !== 1) {
      reject(new Error(`EDA window "${targetWindowId}" is no longer connected. Please select another window.`));
      return;
    }

    const id = randomUUID();
    const timer = setTimeout(() => {
      pendingRequests.delete(id);
      reject(new Error(`Request ${id} timed out after ${REQUEST_TIMEOUT_MS}ms`));
    }, REQUEST_TIMEOUT_MS);

    pendingRequests.set(id, { resolve, reject, timer, windowId: targetWindowId });

    try {
      sendToEda(targetWindowId, {
        type: 'execute',
        id,
        code,
        windowId: targetWindowId,
        timestamp: Date.now(),
      });
    } catch (err) {
      clearTimeout(timer);
      pendingRequests.delete(id);
      reject(err);
    }
  });
}

/**
 * Handle messages received from EDA client
 * @param {object} msg - Message from EDA
 * @param {string} windowId - EDA window ID that sent the message
 */
function handleEdaMessage(msg, windowId) {
  if (msg.type === 'ping') {
    console.log(`[WS] Ping received from ${windowId}, sending pong`);
    const edaClient = edaClients.get(windowId);
    if (edaClient && edaClient.readyState === 1) {
      try {
        edaClient.send(JSON.stringify({
          type: 'pong',
          id: msg.id,
          timestamp: Date.now(),
        }));
      } catch (err) {
        console.error(`[WS] Failed to send pong to ${windowId}:`, err.message);
      }
    } else {
      console.warn(`[WS] Cannot send pong: window ${windowId} not found or disconnected`);
    }
    return;
  }

  if (msg.type === 'pong') {
    console.log('[EDA] Pong received from window', windowId, '- connection healthy');
    return;
  }

  if (msg.type === 'result' || msg.type === 'error') {
    const pending = pendingRequests.get(msg.id);
    if (pending) {
      clearTimeout(pending.timer);
      pendingRequests.delete(msg.id);
      if (msg.type === 'result') {
        pending.resolve(msg.result);
      } else {
        pending.reject(new Error(msg.error || 'Unknown EDA error'));
      }
    }
    return;
  }

  console.log('[EDA] Unknown message type:', msg.type, 'from window:', windowId);
}

// ─── Start ──────────────────────────────────────────────────────────
async function start() {
  try {
    // ── Singleton check: exit if an identical bridge is already running ──
    const existingPort = await findExistingInstance();
    if (existingPort) {
      console.log(`✅ Bridge server is already running on port ${existingPort}, no need to start another instance.`);
      process.exit(0);
    }

    const port = await findAvailablePort();

    httpServer.listen(port, () => {
      console.log(`
╔══════════════════════════════════════════════════════════════╗
║         EasyEDA WebSocket Bridge Server                      ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Port:        ${port}                                          ║
║  Port Range:  ${PORT_START}-${PORT_END}                                  ║
║  Service ID:  ${SERVICE_ID}                              ║
║                                                              ║
║  HTTP API:    http://localhost:${port}                         ║
║  WS (EDA):   ws://localhost:${port}/eda                       ║
║  WS (Agent): ws://localhost:${port}/agent                     ║
║                                                              ║
║  Endpoints:                                                  ║
║    GET  /health     - 健康检查 & EDA 连接状态                ║
║    POST /execute    - 执行代码 {"code": "..."}               ║
║                                                              ║
║  Handshake:                                                  ║
║    /health returns { service: "${SERVICE_ID}" }       ║
║    WS sends { type: "handshake", service: "..." }            ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
      `);
    });

    httpServer.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${port} became occupied. Restarting...`);
        httpServer.close();
        start(); // Retry
      } else {
        throw err;
      }
    });
  } catch (err) {
    console.error(`❌ ${err.message}`);
    process.exit(1);
  }
}

start();
