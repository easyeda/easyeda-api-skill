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
  version: "1.1.2"
  openclaw:
    requires:
      bins:
        - node
      env:
        - CLAUDE_SKILL_DIR
---

# EasyEDA Pro API Skill

Control EasyEDA Pro (嘉立创EDA专业版) programmatically through AI. This skill provides:

1. **Complete API reference** — 120 classes, 62 enums, 70 interfaces, 19 type aliases
2. **WebSocket bridge** — Execute code in the running EasyEDA Pro client
3. **Code patterns** — Common operations for PCB, schematic, library, and project management
4. **Document source format reference** — File format specifications for project, schematic, and PCB sources when users need to analyze or modify EasyEDA document source directly instead of using the API

This skill supports not only live debugging in EasyEDA, but also EasyEDA extension development.
During EasyEDA extension development, AI agents can use the extension-related documentation, API references, type information, usage examples, and bridge-based debugging capabilities provided by this skill to look up APIs, write code, and validate behavior during integration and debugging.

## Architecture

```
┌───────────┐   HTTP/WS     ┌─────────────────┐   WebSocket   ┌───────────┐
│ AI Agent  │ ◄───────────► │  Bridge Server  │ ◄───────────► │  EasyEDA  │
│           │  Port Range   │  (Node.js)      │  Port Range   │  (Client) │
└───────────┘  49620-49629  └─────────────────┘  49620-49629  └───────────┘
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

### Document Source Format Documentation

If the user needs to analyze or modify EasyEDA document source directly instead of using the API, use the documents in the [format/](format/) directory.

- [format/index.md](format/index.md) — Overview of the EasyEDA document source format references and version notes
- `format/project/` — Project source structure, metadata, blobs, variants, and grouping data
- `format/schematic/` — Schematic source format, including structure, wires, shapes, pins, components, and tables
- `format/pcb/` — PCB source format, including primitives, pads and vias, shapes, text, attributes, rules, and panel data

Use these files when the task is about understanding source layout, generating compatible document source, or editing source data that will later be imported back into EasyEDA.

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
  // Do not add comments to the generated code, as the code is typically executed as a single line
}
```

**Critical rules:**
- The `eda` object provides access to all API modules (e.g., `eda.dmt_Board`, `eda.pcb_Primitive`).
- Always refer to the API documentation for correct usage.
- Do not add comments to the generated code, as the code is typically executed as a single line.
- Always use `return` to get results — `console.log` output is NOT captured.
- All API methods returning promises must be `await`ed.
- Code runs in browser context — no Node.js APIs (fs, path, etc.) available.
- Use `eda.sys_Message.showToastMessage(msg)` for user-visible notifications.
- When reviewing API documentation and encountering enumerations, do not guess the enumeration values. You must use the enumeration members, for example: `EPCB_LayerId.TOP` instead of `1` for the layer parameter in PCB primitive creation.

### Extension Runtime Constraints

When writing EasyEDA extensions, standard browser APIs are **forbidden** in the main process. Use EDA-provided alternatives:

| Purpose | ❌ Forbidden | ✅ Use Instead |
|---------|-------------|----------------|
| Get user input | — | `eda.sys_Dialog.showInputDialog()` |
| User selection | — | `eda.sys_Dialog.showSelectDialog()` |
| Show message | `alert()` | `eda.sys_Dialog.showInformationMessage()` |
| Confirm action | `confirm()` | `eda.sys_Dialog.showConfirmationMessage()` |
| Toast notification | DOM manipulation | `eda.sys_Message.showToastMessage()` |
| Store data | `localStorage` (main process) | `eda.sys_Storage.setExtensionUserConfig(key, value)` |
| Custom UI | Manipulate host DOM | `eda.sys_IFrame.openIFrame()` |
| Show HTML | `showInformationMessage(html)` | Must use iframe |
| Open link | `window.open()` | `eda.sys_Window.open()` |
| Browser hardware API | Use in main process | Available in iframe (`navigator.serial`, etc.) |

**Note:** `localStorage`, `window`, `document` etc. are available **inside `sys_IFrame`** but NOT in the main extension process.

### Extension ↔ IFrame Data Passing

The main extension process and `sys_IFrame` iframe are **isolated contexts**. To pass data between them:

**Option A (Recommended):** Use `eda.sys_Storage` as a bridge
```javascript
// In main extension process:
await eda.sys_Storage.setExtensionUserConfig('myKey', JSON.stringify(data));

// In iframe:
const data = JSON.parse(await eda.sys_Storage.getExtensionUserConfig('myKey'));
```

**Option B:** Both contexts can access `eda` directly — call the same API from either side
```javascript
// In iframe HTML (NOT window.parent.eda):
const info = await eda.dmt_Project.getCurrentProjectInfo();
```

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
// Layer parameter uses EPCB_LayerId enum — see references/enums/EPCB_LayerId.md
await eda.pcb_PrimitiveLine.create(
  "GND",                       // net (string)
  EPCB_LayerId.TOP,            // layer — use enum, NOT raw number
  0,                           // startX (unit: 1mil)
  0,                           // startY (unit: 1mil)
  1000,                        // endX (unit: 1mil)
  0,                           // endY (unit: 1mil)
  10,                          // lineWidth
  false                        // primitiveLock
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
// component parameter requires {libraryUuid, uuid} object — NOT a plain string
await eda.sch_PrimitiveComponent.create(
  { libraryUuid: "...", uuid: "device-uuid-from-library" },  // component object
  5000,                        // x (unit: 0.01inch = 10mil)
  5000,                        // y (unit: 0.01inch = 10mil)
  "",                          // subPartName
  0,                           // rotation (degrees, plain number)
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

### Read API Signatures Carefully (CRITICAL)

**Before calling ANY API method, you MUST read the full signature from `references/` — including parameter types, return type, and remarks.**

AI agents frequently make these errors due to skimming documentation:

**Error 1: Not `await`ing Promise-returning methods**

Almost all EDA API methods return `Promise<T>`. If you forget `await`, you get a Promise object instead of the actual result.

```javascript
// WRONG: Missing await — result is a Promise, not the project info
const project = eda.dmt_Project.getCurrentProjectInfo();
console.log(project); // Promise { <pending> }

// CORRECT: Always await async methods
const project = await eda.dmt_Project.getCurrentProjectInfo();
console.log(project); // { uuid: "...", name: "...", ... }
```

**How to know if a method needs `await`:** Check the return type in the signature. If it says `Promise<...>`, you MUST `await` it.

```typescript
// From references/classes/DMT_Project.md:
getCurrentProjectInfo(): Promise<IDMT_ProjectItem | null>
//                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                       This is a Promise — you MUST await it
```

**Error 2: Using raw numbers instead of enum values**

Many parameters expect specific enum values. Using wrong numbers silently produces incorrect behavior.

```javascript
// WRONG: What does layer "1" mean? Which copper layer? Signal? Mask?
await eda.pcb_PrimitiveLine.create("GND", 1, 0, 0, 1000, 0, 10, false);

// CORRECT: Use the enum — EPCB_LayerId.TOP is clear and type-safe
// Check references/enums/EPCB_LayerId.md for the correct value
await eda.pcb_PrimitiveLine.create("GND", EPCB_LayerId.TOP, 0, 0, 1000, 0, 10, false);
```

**Always look up enums in `references/enums/` before using numeric constants.**

**Error 3: Assuming parameter types without checking**

Different APIs use different units, different ID formats, and different optional parameter conventions. Never assume.

```javascript
// WRONG: Assuming create() parameters match modify() parameters
// create() and modify() often have DIFFERENT parameter orders/types

// CORRECT: Always read the exact signature for the method you're calling
// Check references/classes/<ClassName>.md for each method's specific signature
```

**Summary — Before every API call:**
1. **Read the signature** — parameter types, return type, all in `references/classes/`
2. **`await` if `Promise`** — check return type for `Promise<...>`
3. **Use enums** — look up in `references/enums/` instead of guessing numbers/strings
4. **Check remarks** — the "备注" section often has critical usage notes

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
// WRONG: thinking unit is 1mil (it's actually 0.01inch = 10mil)
// Placing at x=500 thinking it's 500mil = 0.5inch — but 500 units = 5000mil = 5inch!
await eda.sch_PrimitiveComponent.create({libraryUuid: "...", uuid: "dev-uuid"}, 500, 0, "", 0, false, true, true);

// CORRECT: 50 units = 500mil = 0.5inch (in 0.01inch units)
await eda.sch_PrimitiveComponent.create({libraryUuid: "...", uuid: "dev-uuid"}, 50, 0, "", 0, false, true, true);
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
if (doc?.documentType !== EDMT_EditorDocumentType.PCB) {
  return "Error: No PCB document is currently active. Please open a PCB document first.";
}

// Now safe to perform PCB operations
await eda.pcb_PrimitiveLine.create(...);
```

**Operating on the wrong document type will return errors or null results.** For example:
- Executing `PCB_*` APIs without an active PCB document (`documentType !== EDMT_EditorDocumentType.PCB`) → error/null
- Executing `SCH_*` APIs without an active Schematic document (`documentType !== EDMT_EditorDocumentType.SCHEMATIC_PAGE`) → error/null

### IFrame Context — Always Use `eda` Directly (CRITICAL)

When writing extension code that creates an iframe via `sys_IFrame.openIFrame()`, the JavaScript code inside the iframe's HTML can access the `eda` global **directly**. Do NOT use `window.parent.eda`.

**Why this matters:**
EasyEDA injects the `eda` object into the iframe's execution context automatically. Standard browser cross-frame patterns (`window.parent`, `parentWindow`, etc.) do NOT apply here and will fail.

```javascript
// WRONG: Using window.parent to reach parent frame's eda object
// This is a common mistake made by AI agents familiar with web iframe patterns
const project = await window.parent.eda.dmt_Project.getCurrentProjectInfo();

// CORRECT: eda is available directly in the iframe context
const project = await eda.dmt_Project.getCurrentProjectInfo();
```

**This applies to ALL code inside `sys_IFrame` iframes:**
- Extension UI panels loaded via `openIFrame()`
- Any HTML file inside the extension package displayed in an iframe

**Rule:** In EasyEDA extensions, whether code runs in the main context or inside an iframe created by `sys_IFrame`, always access the API through `eda.xxx` — never through `window.parent.eda` or any other parent frame accessor.

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

## Debugging Tips & Failure Strategies

### Troubleshooting

1. **Always check health first**: Scan ports 49620-49629 for `{"service":"easyeda-bridge"}`
2. **EDA not connected?**: Ensure bridge extension is loaded in EasyEDA. Download: https://ext.lceda.cn/item/oshwhub/run-api-gateway
3. **Timeout errors**: Default 30s timeout. If timeout occurs:
   - Check if the correct project and document are opened (use `dmt_Project.getCurrentProjectInfo()`)
   - If no project is opened, use `dmt_Project.openProject(projectPath)` to open one
   - If no document is active, use `dmt_EditorControl.openDocument(docId)` to open the correct document type (PCB/Schematic)
   - If the document type is wrong (e.g., running PCB APIs on Schematic), switch to the correct document first
   - Complex operations may need code splitting
4. **Check return values**: Many methods return `null` on failure — always validate
5. **Layer numbers**: Use enums from `references/enums/` docs (e.g., `EPCB_LayerId`)
6. **EDA window disconnected**: If you get an error about a window being disconnected, use `GET /eda-windows` to check available windows and `POST /eda-windows/select` to switch to another window
7. **Permission errors**: All API interfaces are controlled by EDA's permission system. If a specific API consistently fails to execute (returns error or null) while other APIs work fine, and you've confirmed the call matches the documentation exactly, it may be **blocked by permissions** — not a code bug. The EDA client may restrict certain operations based on user license, project settings, or document state. Inform the user that the operation may require elevated permissions or a different EDA edition.
8. **Persistent errors?**: If you've verified the API call matches the documentation exactly, ruled out permission issues, and still encounter unexpected errors, consider reporting the issue through official EasyEDA support channels

### Failure Handling Rules

When developing extensions, follow these rules:

| Situation | Action |
|-----------|--------|
| API method does not exist in docs | **Stop immediately** — inform the user the API doesn't exist |
| Signature uncertain after reading docs | **Stop generation** — return to query step and re-read |
| Forbidden browser API detected | **Auto-replace** with `eda.sys_*` alternative |
| Menu ID conflict | Add prefix to differentiate (e.g., `my-plugin-home`, `my-plugin-sch`) |
| Permission blocked | Inform user — may require different EDA edition or license |

**Critical:** Never guess an API signature. If `references/classes/` doesn't document it, it doesn't exist for your use case.

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

## Session Management

### Detecting Topic Changes

The Bridge server consumes system resources while running. If the user has switched to a completely different topic (not related to EasyEDA/EDA/PCB/schematic) **3 consecutive times**, proactively ask if they want to close the Bridge:

> "I notice we've moved on from EasyEDA. The Bridge server is still running in the background. Would you like me to stop it to free up resources?"

**Do NOT close the Bridge automatically** — the user may switch back to EDA work later. Only ask, and close if they confirm.

### Closing the Bridge

If the user confirms they want to stop the Bridge:

```bash
# Find and stop the bridge process
for port in $(seq 49620 49629); do
  pid=$(lsof -ti :$port 2>/dev/null)
  if [ -n "$pid" ]; then
    kill $pid
    echo "Bridge stopped (PID: $pid, Port: $port)"
    break
  fi
done
```
