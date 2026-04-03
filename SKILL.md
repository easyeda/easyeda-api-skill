---
name: easyeda-api
description: >-
  EasyEDA Pro API skill for AI agents. Use when working with EasyEDA Pro EDA software,
  including PCB design, schematic editing, footprint/symbol management, and project operations.
  Supports live debugging in EasyEDA and EasyEDA extension development. Provides complete API
  reference (120+ classes, 62 enums, 70 interfaces), extension-development documentation, and a
  WebSocket bridge server to execute code in the running EasyEDA Pro client.
  Trigger on: "嘉立创EDA，启动！", "立创EDA，启动！", "EDA，启动！",
  "EasyEDA", "PCB", "schematic", "footprint", "EDA", "circuit board",
  "嘉立创EDA", "原理图", "PCB设计".
  **IMPORTANT**: 嘉立创EDA's English name is **EasyEDA**. They are the SAME product.
  Never use other transliterations like "EasyEDA Pro" (unless specifically versioned), "EASYEDA", "easyeda", etc. Always use "EasyEDA" for English references and "嘉立创EDA" for Chinese references.
license: MIT
compatibility: Requires Node.js 18+, EasyEDA Pro desktop client with extension support
metadata:
  author: JLCEDA
  version: "1.0.3"
  openclaw:
    requires:
      bins:
        - node
---

# EasyEDA Pro API Skill

> **⚠️ Product Naming**: 嘉立创EDA's English name is **EasyEDA** — they are the SAME product. Always use "EasyEDA" for English and "嘉立创EDA" for Chinese. Never use other variants like "EasyEDA Pro" (unless versioned), "EASYEDA", "easyeda", etc.

Control EasyEDA Pro (嘉立创EDA专业版) programmatically through AI. This skill provides:

1. **Complete API reference** — 120 classes, 62 enums, 70 interfaces, 19 type aliases
2. **WebSocket bridge** — Execute code in the running EasyEDA Pro client
3. **Code patterns** — Common operations for PCB, schematic, library, and project management

This skill supports not only live debugging in EasyEDA, but also EasyEDA extension development.
During EasyEDA extension development, AI agents can use the extension-related documentation, API references, type information, usage examples, and bridge-based debugging capabilities provided by this skill to look up APIs, write code, and validate behavior during integration and debugging.

## Architecture

```
┌──────────┐   HTTP/WS     ┌────────────────┐   WebSocket    ┌──────────┐
│ AI Agent  │ ◄───────────► │  Bridge Server  │ ◄───────────► │  EasyEDA  │
│           │  Port Range   │  (Node.js)      │  Port Range   │  (Client) │
└──────────┘  49620-49629   └────────────────┘  49620-49629   └──────────┘
```

The server auto-selects an available port from 49620-49629 on startup.
Both AI and EDA clients auto-discover the server by scanning the port range
and verifying a handshake (`service: "easyeda-bridge"`).

## Quick Start

### 1. Command Triggers

When user says **"嘉立创EDA，启动！"**, **"立创EDA，启动！"**, or **"EDA，启动！"**:

**IMPORTANT: Session initialization** — Reply immediately with this exact text to set the correct session title:

```
📋 EasyEDA Session
```

Then proceed with the setup steps below.

### 2. Install dependencies (if needed)

```bash
cd ${CLAUDE_SKILL_DIR} && npm install
```

### 3. Start bridge server

> **⚠️ IMPORTANT**: The bridge server must run in the background. Do NOT run it in the foreground, or the AI will block waiting for the server to exit.

```bash
# Check if bridge is already running
for port in $(seq 49620 49629); do
  resp=$(curl -s http://localhost:$port/health 2>/dev/null)
  if echo "$resp" | grep -q '"easyeda-bridge"'; then
    echo "Bridge already running on port $port"
    BRIDGE_PORT=$port
    break
  fi
done

# Start bridge if not running
if [ -z "$BRIDGE_PORT" ]; then
  node ${CLAUDE_SKILL_DIR}/scripts/bridge-server.mjs &
  sleep 2
  # Find the port bridge is running on
  for port in $(seq 49620 49629); do
    resp=$(curl -s http://localhost:$port/health 2>/dev/null)
    if echo "$resp" | grep -q '"easyeda-bridge"'; then
      BRIDGE_PORT=$port
      break
    fi
  done
fi

echo "Bridge running on port: ${BRIDGE_PORT:-unknown}"
```

### 4. Connect EasyEDA

Install the `run-api-gateway.eext` extension in EasyEDA Pro. Download link:

- https://ext.lceda.cn/item/oshwhub/run-api-gateway

After the extension is loaded, it will automatically establish the WebSocket connection.

### 5. Verify connection and select EDA window

```bash
# Check bridge and EDA connection status
curl http://localhost:${BRIDGE_PORT:-49620}/health

# List all connected EDA windows
curl http://localhost:${BRIDGE_PORT:-49620}/eda-windows
```

The `/eda-windows` response looks like:
```json
{
  "windows": [
    { "windowId": "abc-123", "connected": true, "active": true },
    { "windowId": "def-456", "connected": true, "active": false }
  ],
  "activeWindowId": "abc-123",
  "count": 2
}
```

**Handle based on window count**:
- **0 windows**: Tell user "No EasyEDA window is connected. Please ensure the EasyEDA extension (run-api-gateway.eext) is installed and loaded in EasyEDA. Download: https://ext.lceda.cn/item/oshwhub/run-api-gateway"
- **1 window**: Auto-selected as active. Tell user: "✅ Connected! Active EDA window: abc-123. Ready to work."
- **2+ windows**: Show the available windows and ask user to select:
  ```
  Multiple EDA windows detected:
  - abc-123 (active)
  - def-456
  
  Which EDA window should I use?
  ```

**Select a window**:
```bash
curl -X POST http://localhost:${BRIDGE_PORT}/eda-windows/select \
  -H "Content-Type: application/json" \
  -d '{"windowId": "abc-123"}'
```

After selection, confirm: "✅ Active EDA window: abc-123. Ready to work."

### 6. Execute code on EDA

```bash
curl -X POST http://localhost:${BRIDGE_PORT:-49620}/execute \
  -H "Content-Type: application/json" \
  -d '{"code": "return await eda.dmt_Project.getCurrentProjectInfo();"}'
```

## API Documentation

The full API reference is in the [references/](references/) directory:

- [references/_index.md](references/_index.md) — Master index of all classes, enums, interfaces, and types
- [references/_quick-reference.md](references/_quick-reference.md) — All method signatures for rapid lookup
- `references/classes/` — 120 class docs (DMT_*, PCB_*, SCH_*, LIB_*, SYS_*, IPCB_*, ISCH_*)
- `references/enums/` — 62 enum docs
- `references/interfaces/` — 70 interface docs
- `references/types/` — 19 type alias docs

### How to look up API

1. **Start with `_index.md`** to find the right class/module for the task
2. **Read the class doc** (e.g., `references/classes/DMT_Board.md`) for all methods and signatures
3. **Use `_quick-reference.md`** for fast method signature lookup across all classes
4. **Check enums/interfaces** for parameter types and return types

### API Module Overview

| Prefix | Domain | Key Classes |
|--------|--------|-------------|
| `DMT_` | Document management | Board, EditorControl, Folder, Panel, Pcb, Project, Schematic, SelectControl, Team, Workspace |
| `PCB_` | PCB & Footprint | Document, Drc, Event, Layer, Net, Primitive, PrimitiveComponent, PrimitiveLine, PrimitivePad, PrimitivePour, PrimitiveVia, SelectControl |
| `SCH_` | Schematic | Document, Event, Primitive, PrimitiveComponent, PrimitiveWire, SelectControl |
| `LIB_` | Library | 3DModel, Cbb, Classification, Device, Footprint, LibrariesList, PanelLibrary, SelectControl, Symbol |
| `SYS_` | System | Dialog, Environment, FileManager, FileSystem, FontManager, HeaderMenu, I18n, IFrame, LoadingAndProgressBar, Log, Message, MessageBox, MessageBus, PanelControl, Setting, ShortcutKey, Storage, Timer, ToastMessage, WebSocket, Window |
| `IPCB_` | PCB interfaces (图元) | PrimitiveArc, PrimitiveComponent, PrimitivePad, PrimitiveFill, PrimitivePour, PrimitiveRegion, PrimitiveVia, ... |
| `ISCH_` | Schematic interfaces (图元) | PrimitiveArc, PrimitiveComponent, PrimitiveWire, PrimitiveText, PrimitiveRectangle, ... |
| `EPCB_` / `ESCH_` | Enums | PrimitiveType, Layer, PadType, ... |

## Code Execution Context

All code runs inside EasyEDA Pro's browser runtime as:

```javascript
async function(eda) {
  // Your code here — `eda` is the global EDA API object
  // You MUST use `return` to send results back
}
```

**Critical rules:**
- The `eda` object provides access to all API modules (e.g., `eda.dmt_Board`, `eda.pcb_Primitive`)
- Always use `return` to get results — `console.log` output is NOT captured
- All API methods returning promises must be `await`ed
- Code runs in browser context — no Node.js APIs (fs, path, etc.) available
- Use `eda.sys_Message.showToastMessage(msg)` for user-visible notifications

## Communication Protocol

### Port Discovery

The bridge server listens on the first available port in **49620-49629**.
To find the server, scan the range and verify the service identity:

```bash
for port in $(seq 49620 49629); do
  resp=$(curl -s http://127.0.0.1:$port/health 2>/dev/null)
  if echo "$resp" | grep -q '"easyeda-bridge"'; then
    BRIDGE_PORT=$port; break
  fi
done
```

### Handshake

- **HTTP**: `GET /health` returns `{ "service": "easyeda-bridge", "edaConnected": bool, ... }`
- **WebSocket**: On connect, server sends `{ "type": "handshake", "service": "easyeda-bridge" }`
- Clients MUST verify `service === "easyeda-bridge"` before using the connection

### Message Format

JSON messages over WebSocket / HTTP:

| Field | Type | Description |
|-------|------|-------------|
| `type` | `"execute"` \| `"result"` \| `"error"` \| `"ping"` \| `"pong"` \| `"handshake"` | Message type |
| `id` | `string` | Request UUID for matching request/response |
| `code` | `string` | JavaScript code to execute (for `execute` type) |
| `result` | `any` | Execution result (for `result` type) |
| `error` | `string` | Error message (for `error` type) |
| `service` | `string` | Service identifier (for `handshake` type) |
| `timestamp` | `number` | Unix milliseconds |

## Common Patterns

### Project & Board Operations

```javascript
// Get current project info
return await eda.dmt_Project.getCurrentProjectInfo();

// List all boards in project
return await eda.dmt_Board.getAllBoardsInfo();

// Create a new board (optionally link to schematic/PCB)
return await eda.dmt_Board.createBoard();

// Switch to a document tab
await eda.dmt_EditorControl.activateDocument(tabId);
```

### Example: Open a project by name and open its first schematic page

```javascript
const targetProjectName = 'NE555 Circuit';

// 1. Enumerate projects by team/folder and find the target by name
const teams = await eda.dmt_Team.getAllTeamsInfo();
const seenProjectUuid = new Set();
let targetProjectUuid = null;

for (const team of teams || []) {
  const teamProjects = await eda.dmt_Project.getAllProjectsUuid(team.uuid);
  for (const projectUuid of teamProjects || []) {
    if (seenProjectUuid.has(projectUuid)) continue;
    seenProjectUuid.add(projectUuid);

    const info = await eda.dmt_Project.getProjectInfo(projectUuid);
    const name = info?.friendlyName || info?.name || '';
    if (name === targetProjectName) {
      targetProjectUuid = projectUuid;
      break;
    }
  }
  if (targetProjectUuid) break;

  const folderUuids = await eda.dmt_Folder.getAllFoldersUuid(team.uuid);
  for (const folderUuid of folderUuids || []) {
    const folderProjects = await eda.dmt_Project.getAllProjectsUuid(team.uuid, folderUuid);
    for (const projectUuid of folderProjects || []) {
      if (seenProjectUuid.has(projectUuid)) continue;
      seenProjectUuid.add(projectUuid);

      const info = await eda.dmt_Project.getProjectInfo(projectUuid);
      const name = info?.friendlyName || info?.name || '';
      if (name === targetProjectName) {
        targetProjectUuid = projectUuid;
        break;
      }
    }
    if (targetProjectUuid) break;
  }
  if (targetProjectUuid) break;
}

if (!targetProjectUuid) {
  throw new Error(`Project not found: ${targetProjectName}`);
}

// 2. Open the project
const opened = await eda.dmt_Project.openProject(targetProjectUuid);
if (!opened) {
  throw new Error(`Failed to open project: ${targetProjectName}`);
}

// 3. Get the first schematic page and open it
const schematics = await eda.dmt_Schematic.getAllSchematicsInfo();
if (!Array.isArray(schematics) || schematics.length === 0) {
  throw new Error(`No schematics found in project: ${targetProjectName}`);
}

const firstSchematic = schematics[0];
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const firstPage = (pages || []).find((page) => page.parentSchematicUuid === firstSchematic.uuid)
  || firstSchematic.page?.[0];

if (!firstPage) {
  throw new Error(`No schematic page found in: ${firstSchematic.name}`);
}

const tabId = await eda.dmt_EditorControl.openDocument(firstPage.uuid);

return {
  projectUuid: targetProjectUuid,
  schematicUuid: firstSchematic.uuid,
  pageUuid: firstPage.uuid,
  tabId,
};
```

**Notes:**
- `dmt_Project.getAllProjectsUuid()` is **not** a global no-arg enumerator in practice. To reliably find a project by name, iterate teams first, then folders.
- `openProject(projectUuid)` may discard unsaved changes in the currently opened project. Be careful before calling it.

### PCB Primitive Operations

```javascript
// Get selected primitives
const selected = eda.pcb_SelectControl.getAllSelectedPrimitives_PrimitiveId();

// Create a line on copper layer
await eda.pcb_PrimitiveLine.create(
  "GND",   // net
  1,       // layer (top copper)
  0,       // startX
  0,       // startY
  1000,    // endX (unit: 1mil, PCB uses 1mil)
  0,       // endY (unit: 1mil, PCB uses 1mil)
  10,      // lineWidth
  false    // primitiveLock
);

// Modify an existing primitive (async pattern)
const prim = await eda.pcb_PrimitiveComponent.get([id]);
const asyncPrim = prim.toAsync();
asyncPrim.setState_X(newX);
asyncPrim.setState_Y(newY);
asyncPrim.done();
```

### PCB Async Primitive Pattern (IMPORTANT)

For **modifying** PCB/SCH primitives, you must use the async pattern:

```javascript
// 1. Get the primitive
const prim = await eda.pcb_PrimitiveVia.get([viaId]);
// 2. Convert to async mode
const asyncPrim = prim.toAsync();
// 3. Set new values
asyncPrim.setState_X(newX);
asyncPrim.setState_Y(newY);
asyncPrim.setState_Diameter(diameter);
// 4. Apply changes
asyncPrim.done();
```

### Schematic Operations

```javascript
// Get all pages
return await eda.dmt_Schematic.getAllSchematicDocumentsInfo();

// Create a schematic component
await eda.sch_PrimitiveComponent.create(
  "device-uuid-from-library",  // component (device UUID)
  5000,                        // x (unit: 0.01inch = 10mil)
  5000,                        // y (unit: 0.01inch = 10mil)
  "",                          // subPartName
  0,                           // rotation
  false,                       // mirror
  true,                        // addIntoBom
  true                         // addIntoPcb
);

// Get selected schematic primitives
const ids = eda.sch_SelectControl.getAllSelectedPrimitives_PrimitiveId();
```

### Library Operations

```javascript
// List all libraries in workspace
return await eda.lib_LibrariesList.getAllLibrariesList();

// Search devices
return await eda.lib_Device.search("STM32");

// Get symbol info
return await eda.lib_Symbol.get(symbolUuid);
```

### System Functions

```javascript
// Show toast message
eda.sys_Message.showToastMessage("Operation complete!");

// Show confirm dialog
const confirmed = await eda.sys_Dialog.showConfirmationMessage("Proceed?");

// File system (limited to extension sandbox)
const content = await eda.sys_FileSystem.readFileFromFileSystem(path);
await eda.sys_FileSystem.saveFileToFileSystem(path, content);
```

### DRC (Design Rule Check)

```javascript
// Run DRC check
const passed = await eda.pcb_Drc.check(true, true, false);
// passed is boolean: true if DRC passed, false if errors found
```

## Common Mistakes

### Coordinate Unit (CRITICAL)

**Different domains use different coordinate units:**

| Domain | Unit | Conversion |
|--------|------|------------|
| **PCB** | 1mil | 1mm ≈ 39.37 units |
| **Schematic** | 0.01inch (10mil) | 1mm ≈ 3.937 units |

**This is the #1 mistake AI agents make.** Mixing up the units will place components incorrectly.

- PCB: 1 unit = 1mil = 0.001 inch = 0.0254 mm
- Schematic: 1 unit = 0.01inch = 10mil = 0.254 mm

If you use the wrong unit, components will be placed **10x too far** from their intended position.

```javascript
// Schematic example:
// WRONG: thinking unit is 1mil (it's actually 0.01inch = 10mil)
await eda.sch_PrimitiveComponent.create("device-uuid", 500, 0, "", 0, false, true, true);
// CORRECT: 500 units = 5000mil = 127mm (in 0.01inch)
await eda.sch_PrimitiveComponent.create("device-uuid", 500, 0, "", 0, false, true, true);
```

### Document State (CRITICAL)

**After creating a project, you MUST open it before operating on documents within it.**

When operating on documents, always verify:
1. **Project is opened** — Use `eda.dmt_Project.getCurrentProjectInfo()` to verify
2. **Correct document is active** — Use `eda.dmt_SelectControl.getCurrentDocumentInfo()` to check document type
3. **Document type matches API domain** — PCB APIs require active PCB document, SCH APIs require active Schematic document

```javascript
// WRONG: Assuming operation will work without checking document state
await eda.pcb_PrimitiveLine.create(...); // May fail if no PCB document is open

// CORRECT: Always verify document state first
const project = await eda.dmt_Project.getCurrentProjectInfo();
if (!project) {
  // If you just created a project, you MUST open it before any operations!
  return "Error: No project is currently opened. If you just created a project using dmt_Project.createProject(), you MUST call dmt_Project.openProject(projectPath) to open it first. You cannot operate on documents until a project is opened.";
}

const doc = await eda.dmt_SelectControl.getCurrentDocumentInfo();
if (doc?.type !== "PCB") {
  return "Error: No PCB document is currently active. Please open a PCB document first.";
}

// Now safe to perform PCB operations
await eda.pcb_PrimitiveLine.create(...);
```

**Operating on the wrong document type will return errors or null results.** For example:
- Executing `PCB_*` APIs without an active PCB document → error/null
- Executing `SCH_*` APIs without an active Schematic document → error/null

### Multi-Window Support

When multiple EasyEDA windows are connected to the bridge, you do NOT need to check window selection on every EDA operation. Only check when:
1. **First EDA operation** — Verify which window is active and tell the user
2. **EDA disconnected error** — If bridge returns an error about EDA being disconnected, ask user to select a new window

**Multi-window operations:**
```bash
# List all connected EDA windows
curl http://localhost:49620/eda-windows

# Select a specific window
curl -X POST http://localhost:49620/eda-windows/select \
  -H "Content-Type: application/json" \
  -d '{"windowId": "abc-123-def"}'

# Execute on specific window
curl -X POST http://localhost:49620/execute \
  -H "Content-Type: application/json" \
  -d '{"code": "return await eda.dmt_Project.getCurrentProjectInfo();", "windowId": "abc-123-def"}'
```

If only one EDA window is connected, it's automatically selected as active.

## Debugging Tips

1. **Always check health first**: Scan ports 49620-49629 for `{"service":"easyeda-bridge"}`
2. **EDA not connected?**: Ensure bridge extension is loaded in EasyEDA. Download: https://ext.lceda.cn/item/oshwhub/run-api-gateway
3. **Timeout errors**: Default 30s timeout. If timeout occurs:
   - Check if the correct project and document are opened (use `dmt_Project.getCurrentProjectInfo()`)
   - If no project is opened, use `dmt_Project.openProject(projectPath)` to open one
   - If no document is active, use `dmt_EditorControl.openDocument(docId)` to open the correct document type (PCB/Schematic)
   - If the document type is wrong (e.g., running PCB APIs on Schematic), switch to the correct document first
   - Complex operations may need code splitting
4. **Check return values**: Many methods return `null` on failure — always validate
5. **Layer numbers**: Use enums from `references/enums/` docs (e.g., `EPCB_Layer`)
6. **EDA window disconnected**: If you get an error about a window being disconnected, use `GET /eda-windows` to check available windows and `POST /eda-windows/select` to switch to another window
7. **Persistent errors?**: If you've verified the API call matches the documentation exactly but still encounter unexpected errors, consider reporting the issue through official EasyEDA support channels

## Workflow for AI Agent

When the user asks you to perform EDA operations:

1. **Understand the task** — What domain? (PCB/SCH/LIB/Project)
2. **Verify document state** — Check `eda.dmt_Project.getCurrentProjectInfo()` and `eda.dmt_SelectControl.getCurrentDocumentInfo()`
3. **Confirm correct document type** — PCB operations need active PCB, SCH operations need active Schematic
4. **Look up API** — Read relevant class docs from `references/`
5. **Check types** — Read enum/interface docs for parameter types
6. **Write code** — Follow the execution context rules above
7. **Execute** — Send via `POST /execute` and check the result
8. **Iterate** — If errors occur, read error messages and adjust

When unsure about an API:
- Search `_quick-reference.md` for method names
- Read the specific class doc for detailed signatures and remarks
- Check interface docs for complex parameter types
