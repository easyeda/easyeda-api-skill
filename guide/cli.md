# Command-Line Client <Badge type="tip" text="CLI" />

::: tip For AI coding assistants: the command-line client

If you are using an AI coding assistant (such as Claude Code, OpenCode, QwenCode, GitHub Copilot, etc.) to drive EasyEDA Pro, ask the AI to follow the [For AI command-line client document](https://prodocs.easyeda.com/storage/texts/api/guide/cli-for-ai.md). That document is written for AI coding assistants: it drops redundant prose and provides directly executable commands, hard constraints, and verification steps.

You can also copy the prompt below directly to your AI coding assistant:

```text
Please help me complete a design task through the EasyEDA Pro desktop client command line (easyeda-pro), as follows:
1. Strictly follow the steps in https://prodocs.easyeda.com/storage/texts/api/guide/cli-for-ai.md;
2. Before starting, confirm the endpoint connection state with easyeda-pro doctor, and confirm the project name and other details with me;
3. After each key command, check the ok field of the response and the on-disk artifacts, then report the project directory, the paths of the exported artifacts, and the session shutdown result.
```

:::

Besides the graphical interface, the EasyEDA Pro desktop client ships with a command-line client (CLI) and a local bridge service. They let you control a running editor from a script, or let an AI coding assistant drive the editor directly to complete design work.

The command-line client provides the following capabilities:

- Opening and creating projects, and managing multiple editor windows (sessions);
- Executing JavaScript inside the editor, and therefore calling any [extension API](./index);
- Querying the extension API reference and the design file format reference;
- Returning results as uniform JSON, which is convenient for scripts and AI to parse;
- Running as an [MCP](https://modelcontextprotocol.io/) server, and therefore serving directly as a tool for an AI coding assistant.

## Basic Concepts

The command-line client treats a running editor as a programmable backend. There are three layers between the client and the editor:

| Concept | Description |
| --- | --- |
| Session | One editor window corresponds to one session, created by `open`, which returns the session ID |
| Invocation | A piece of JavaScript executed inside a given session through `invoke` |
| Bridge service | The local service provided by the client process. The `easyeda-pro` command communicates with the editor through it |

Both the command-line client and the service are provided by the `easyeda-pro` executable, so the same executable is used to start the graphical interface and to run command-line operations.

## Preparation

### I. Obtaining the Client

The command-line client is built into the EasyEDA Pro desktop client and does not need a separate installation. Download and install the EasyEDA Pro client for your system from the [client download page](https://easyeda.com/page/download).

After installation, the `easyeda-pro` executable is usually located at the following path (Windows x64 shown here):

```
C:\Program Files (x86)\EasyEDA-Pro\easyeda-pro.exe
```

The installer adds that directory to the system `PATH` during installation, so you can normally use the `easyeda-pro` command directly in a terminal. If the command is reported as not found, check whether the installation directory has been added to `PATH`, or use the full path to the executable instead.

You can also get installation packages for specific versions from the [client release history](../../faq/client-version) page.

::: warning

The command-line client requires the desktop client edition of EasyEDA Pro. The browser / online edition does not support the session and bridge features described in this document.

:::

### II. Verifying the Runtime Environment

Run the following command in a terminal. The client probes the local editor endpoint and reports its state:

```shell
easyeda-pro doctor
```

```json
{
	"ok": true,
	"value": {
		"endpoint": "EasyEDAProf126dbc1",
		"connected": false,
		"bridgeVersion": null,
		"versionMatch": null,
		"resultChannel": null
	},
	"logs": [],
	"durationMs": 207
}
```

A `connected` value of `false` means no editor is currently running. Open any editor window and the field becomes `true`.

You can likewise query the attributes of the current runtime environment from inside a script:

```javascript
return {
	isClient: eda.sys_Environment.isClient(),
	isHalfOfflineMode: eda.sys_Environment.isHalfOfflineMode(),
	version: eda.sys_Environment.getEditorCurrentVersion()
};
```

Here [SYS_Environment.isClient()](../reference/pro-api.sys_environment.isclient) determines whether the current environment is the desktop client, [SYS_Environment.isHalfOfflineMode()](../reference/pro-api.sys_environment.ishalfofflinemode) determines whether it is semi-offline mode, and [SYS_Environment.getEditorCurrentVersion()](../reference/pro-api.sys_environment.geteditorcurrentversion) returns the current editor version.

### III. Project Storage Directory

In semi-offline / fully-offline mode, the client data directory is located at:

```
%USERPROFILE%\Documents\EasyEDA-Pro
```

The `config.json` file in that directory records the various path settings, among which `APP_PROJECT_DIR` is the project directory list:

```json
"APP_PROJECT_DIR": [
	"C:\\Users\\username\\Documents\\EasyEDA-Pro\\projects",
	"C:\\Users\\username\\Documents\\EasyEDA-Pro\\example-projects"
]
```

The read/write range of the [SYS_FileSystem](../reference/pro-api.sys_filesystem) APIs is exactly those directories and their subdirectories. You can also obtain the path list inside a script through [SYS_FileSystem.getProjectsPaths()](../reference/pro-api.sys_filesystem.getprojectspaths). Writing exported artifacts into the `projects\<project name>\` directory is the least troublesome approach.

### IV. Response Structure

All command-line client commands return the same JSON structure:

```json
{
	"ok": true,
	"value": {},
	"logs": [],
	"durationMs": 12
}
```

On failure, the structure is as follows:

```json
{
	"ok": false,
	"error": {
		"code": "EXECUTION_ERROR",
		"message": "..."
	}
}
```

When processing the result inside a script, only the outermost `ok` field needs to be checked.

## Command Overview

### I. Viewing Help

Run `--help` to see all commands of the command-line client:

```shell
easyeda-pro --help
```

```
EasyEDA Pro 4.1.x.abcdef01

Usage:
  easyeda-pro <command> [options]
  easyeda-pro [global flags]

Commands:
  activate          Bring the server window up and focus it
  open              Open a project and return its session id; .eprj3 folder projects
                    stay in two-way sync with the editor; without --path open a bare editor
  stop              Gracefully stop the server
  doctor            Probe the endpoint and report its identity

  session/          Manage sessions
    list            List sessions (origin cli/user, project path, window title)
    close           Close a session this CLI opened
    abort           Force-kill a session (last resort)

  invoke            Invoke a registered function by extension id + name
  functions         List extensions known to the session

  doc/              Query the editor API reference (eda / external / format)
    api             Query the eda namespace (static editor API)
    external        Query the external namespace (extension-injected API)
    format          Query the format namespace (design format reference)

Global flags:
  --help              Show help for any command:  easyeda-pro <command> --help
  --search <query>    Fuzzy-search commands when unsure of the name
  --mcp stdio|http    Start MCP server
```

### II. Searching for Commands

If you are not sure of a command name, use `--search` for a fuzzy search:

```shell
easyeda-pro --search session
```

```
Matches:
  session.list    List sessions (each with origin cli/user, the project path and the window title)
  session.close   Close a session this CLI opened ...
  session.abort   Force-kill a session ...
  open            Open a project and return its session id ...
```

Search keywords are English words such as `session` `invoke` `doc` `permission` `BoardOutline`.

### III. Viewing Subcommand Help

Any command documents its usage through `--help`:

```shell
easyeda-pro open --help
```

```
open

Open a project and return its session id; .eprj3 folder projects stay in two-way sync
with the editor (disk edits reload automatically, editor saves land on disk automatically);
without --path open a bare editor (visible window; --headless for a hidden render)

Usage:
  easyeda-pro open [--path <undefined>] [--headless <boolean>]

Options:
  --path       Project file path (.eprj/.eprj2/.eprj3/.elib); omit to open a bare editor
  --headless   Open without a visible window (hidden render); default opens a GUI window
```

```shell
easyeda-pro invoke --help
```

```
invoke

Invoke a registered function by extension id + name (source runs on the editor command
space; omit extUuid to run with independent script permission)

Usage:
  easyeda-pro invoke --session <undefined> [--code <undefined>] [--fn <undefined>]
                   [--args <undefined>] [--ext-uuid <undefined>] [--timeout <undefined>]

Options:
  --session   Session id (string, or positive integer)
  --code      Source snippet (string; async function body), reads args via __CLI__.args
  --fn        Function name (default: run)
  --args      Call arguments as JSON text, exposed to the source as __CLI__.args
  --ext-uuid  Extension id (optional; omit to run with independent script permission)
  --timeout   Invocation budget in ms (integer, 1-1800000; default 60000)
```

The remaining subcommands can be inspected in the same way, for example `easyeda-pro session list --help`, `easyeda-pro doc api --help`, or `easyeda-pro --mcp --help`.

### IV. Managing Sessions

Running `open` opens a new editor window and returns its session ID:

```shell
easyeda-pro open
```

```json
{
	"ok": true,
	"value": {
		"sessionId": "9aca2242-79bb-4e2b-9d03-754316927f96",
		"renderId": 1,
		"path": "",
		"headless": false
	},
	"logs": [],
	"durationMs": 1381
}
```

You can also specify a project path when opening, or use `--headless` to open with a hidden window:

```shell
# Open a specific project (.eprj3 folder projects sync in both directions automatically)
easyeda-pro open --path "C:\Users\username\Documents\EasyEDA-Pro\projects\MyBoard\MyBoard.eprj3"
```

```shell
# Hidden window (no GUI rendering)
easyeda-pro open --headless true
```

Use `session list` to see all currently existing sessions:

```shell
easyeda-pro session list
```

```json
{
	"ok": true,
	"value": [
		{
			"sessionId": "9aca…",
			"renderId": 1,
			"status": "alive",
			"headless": false,
			"origin": "cli",
			"path": null,
			"title": "EasyEDA Pro - V4.1.x"
		},
		{
			"sessionId": "3c66…",
			"renderId": 4,
			"status": "alive",
			"headless": false,
			"origin": "cli",
			"path": "C:\\…\\FMT_Test\\FMT_Test.eprj3",
			"title": "FMT_Test | EasyEDA Pro"
		}
	]
}
```

Use `session close` to close a session opened by the command-line client. Adding the `--destroy` parameter closes the window along with it:

```shell
easyeda-pro session close --session 9aca2242-79bb-4e2b-9d03-754316927f96 --destroy
```

::: tip

When a session created by `open` inside a script is no longer needed, close it with `session close --destroy`, so that windows do not pile up.

:::

### V. Running as an MCP Server

The command-line client can run in MCP server mode, and therefore serve directly as a tool for an AI coding assistant:

```shell
# Local client (Claude Code / Cursor, etc.)
easyeda-pro --mcp stdio
```

```shell
# Remote / browser-based agent
easyeda-pro --mcp http --port 3030 --token <token>
```

## Executing JavaScript

The `invoke` command executes a piece of JavaScript inside a given session. This is the core capability of the command-line client: through it, the entire extension API is reachable.

### I. Basic Usage

The simplest invocation is shown below. The return value of the code is serialized to JSON and sent back:

```shell
easyeda-pro invoke --session <SESSION_ID> --code "return 1 + 1"
```

```json
{
	"ok": true,
	"value": 2,
	"logs": [],
	"durationMs": 4
}
```

### II. Using Code Files

When the code is long, writing it directly on the command line becomes hard to maintain. It is recommended to save it as a `.js` file and pass it in through a pipe:

```shell
cat > probe.js <<'EOF'
const out = {};
out.client = eda.sys_Environment.isClient();
out.version = eda.sys_Environment.getEditorCurrentVersion();
out.projectCount = (await eda.dmt_Project.getAllProjectsUuid()).length;
return out;
EOF

easyeda-pro invoke --session $S --ext-uuid eda --code "$(cat probe.js)"
```

### III. Commonly Used Options

| Option | Description |
| --- | --- |
| `--ext-uuid eda` | Runs with the identity of the editor's built-in extension, granting full external-interaction permissions (reading and writing local files, accessing system interfaces). Recommended to always attach it |
| `--timeout <ms>` | Timeout of a single invocation. Defaults to `60000`, maximum `1800000`. Increase it appropriately for time-consuming tasks such as batch operations and autorouting |

### IV. Passing Arguments

`--args` passes JSON arguments into the code, where they are accessible through `__CLI__.args`:

```shell
easyeda-pro invoke --session $S --ext-uuid eda \
  --args '{"designator":"R1","x":1000,"y":800}' \
  --code 'const a = __CLI__.args; return a.designator + "@" + a.x + "," + a.y;'
```

```json
{
	"ok": true,
	"value": "R1@1000,800",
	"logs": [],
	"durationMs": 6
}
```

### V. Code Conventions

The supplied code is treated as an async function body, so the following conventions apply:

- Use `return` to produce a result; the value is serialized to JSON;
- `await` can be used directly;
- It is recommended to use forward slashes in paths (`C:/Users/...`), to avoid escaping problems when passing through different terminals.

```javascript
// Recommended path style
const DIR = 'C:/Users/username/Documents/EasyEDA-Pro/projects/MyBoard/';
```

### VI. Retrieving Files

Some export APIs return `File` or `Blob` objects, for example screenshots, BOMs, STEP files, and netlists. If such content needs to be sent back through JSON, it can first be converted to a Base64 string:

```javascript
const toB64 = (b) => new Promise((res) => {
	const fr = new FileReader();
	fr.onload = () => res(String(fr.result).split(',')[1] || '');
	fr.readAsDataURL(b);
});
```

The example below gets a schematic PNG file and converts it to Base64:

```javascript
const f = await eda.sch_ManufactureData.getPngFile('MySchematic', { width: 1400 });
return { name: f.name, size: f.size, b64: await toB64(f) };
```

### VII. Writing Files

A simpler approach is to write files straight into the project directory with the [SYS_FileSystem](../reference/pro-api.sys_filesystem) APIs:

```javascript
const f = await eda.pcb_ManufactureData.get3DFile('MyBoard', 'step', ['Component Model'], 'Outfit', true);
await eda.sys_FileSystem.saveFileToFileSystem(
	'C:/Users/username/Documents/EasyEDA-Pro/projects/MyBoard/MyBoard.step',
	f,
	undefined,
	true
); // the 4th argument, force = true, means overwrite
```

Frequently used file-system APIs:

| API | Description |
| --- | --- |
| [saveFileToFileSystem(uri, file, fileName?, force?)](../reference/pro-api.sys_filesystem.savefiletofilesystem) | Writes a file. If `uri` ends with `/` it is treated as a directory, otherwise as a complete file name |
| [readFileFromFileSystem(uri)](../reference/pro-api.sys_filesystem.readfilefromfilesystem) | Reads a file, returning a `File` object |
| [listFilesOfFileSystem(folderPath, recursive?)](../reference/pro-api.sys_filesystem.listfilesoffilesystem) | Lists a directory |
| [deleteFileInFileSystem(uri, force?)](../reference/pro-api.sys_filesystem.deletefileinfilesystem) | Deletes a file |
| [getProjectsPaths()](../reference/pro-api.sys_filesystem.getprojectspaths) / [getEdaPath()](../reference/pro-api.sys_filesystem.getedapath) / [getLibrariesPaths()](../reference/pro-api.sys_filesystem.getlibrariespaths) | Returns the various root directories |

## Querying API Documentation

The extension API has several hundred classes. Its documentation is organized by progressive disclosure: first list all classes, then view the methods of a class, then view the full signature of a single method.

### I. Listing All Classes

```shell
easyeda-pro doc api
```

The command returns an array of the form `{ name, comment }`. Class names are grouped by domain prefix:

| Prefix | Domain |
| --- | --- |
| `DMT_` | Document tree / project / board / schematic / PCB / editor control |
| `SCH_` | Schematic primitives (Component / Wire / Pin / Text / Drc / Netlist / ManufactureData) |
| `PCB_` | PCB primitives (Component / Pad / Line / Via / Polyline / Pour / Drc / ManufactureData / Layer / Net) |
| `LIB_` | Device library (Device / Symbol / Footprint / Classification) |
| `SYS_` | System (FileSystem / Dialog / Window / Setting / Environment / MessageBus) |
| `E*_` | Enumerations |

### II. Viewing the Methods of a Class

```shell
easyeda-pro doc api --class-name DMT_Project
```

```json
{
	"ok": true,
	"value": {
		"title": "Document tree / Project management class",
		"methods": [
			{ "name": "createProject", "comment": "Create Project" },
			{ "name": "openProject", "comment": "Open project" },
			{ "name": "getCurrentProjectInfo", "comment": "Get detailed properties of Current project" }
		],
		"callPath": "dmt_Project"
	}
}
```

The `callPath` field in the return value is the property name of the class on the `eda` object, so methods of the `DMT_Project` class are called as `eda.dmt_Project.createProject(...)`.

### III. Viewing the Full Signature of a Method

```shell
easyeda-pro doc api --class-name DMT_Project --method-name createProject
```

```json
{
	"ok": true,
	"value": {
		"title": "Create Project",
		"params": [
			{ "name": "projectFriendlyName", "type": "string", "description": "Project friendly name", "required": true },
			{ "name": "projectName", "type": "string", "description": "Project name; must be unique; only letters, digits, and hyphens are allowed", "required": false },
			{ "name": "teamUuid", "type": "string" },
			{ "name": "fileFormat", "type": "EDMT_ProjectFileFormat", "description": "Project file format, EPRJ3 by default; only effective in the client's semi-offline / fully-offline mode" }
		],
		"returns": { "type": "string | undefined", "description": "Project UUID, if it is undefined creation fails" },
		"isAsync": true,
		"example": "...(a directly runnable example)..."
	}
}
```

Every method ships with a directly runnable example. That is the most efficient way to learn how a method is used.

### IV. Inspecting an Enumeration

```shell
easyeda-pro doc api --class-name EPCB_LayerId
```

```json
{
	"ok": true,
	"value": {
		"name": "EPCB_LayerId",
		"comment": "Layer ID",
		"values": [
			{ "name": "TOP", "value": 1, "description": "Top layer" },
			{ "name": "BOARD_OUTLINE", "value": 11, "description": "Board Outline layer" }
		]
	}
}
```

### V. Querying the Design File Format

The design file format reference is queried through the `doc format` subcommand. Its usage is described in the [Generating Project Files Directly](#generating-project-files-directly) section:

```shell
easyeda-pro doc format
```

```shell
easyeda-pro doc format --class-name TMSchComponent
```

## Drawing a Schematic with the Extension API

The example below draws a voltage-divider and filter circuit from scratch through the extension API, and exports the netlist, the BOM, and a screenshot.

```text
VCC ──┬── R1(1kΩ) ──┬── MID ── R2(10kΩ) ──┬── GND
      │             │                     │
      └── R3(1kΩ) ──┘        C1(100nF) ───┘   (C1 in parallel with R2)
```

### I. Creating a Session

```shell
easyeda-pro open
export S=9aca2242-79bb-4e2b-9d03-754316927f96
```

### II. Creating a Project

[`DMT_Project.createProject()`](../reference/pro-api.dmt_project.createproject) creates a project, and [`DMT_Project.openProject()`](../reference/pro-api.dmt_project.openproject) then opens it:

```javascript
// step1_create_proj.js
const uuid = await eda.dmt_Project.createProject(
	'MyBoard', // friendly name
	'my-board', // project name (letters / digits / hyphens)
	undefined, // team, empty means personal
	undefined, // folder, empty means root
	'Tutorial sample project', // description
	undefined, // collaboration mode
	EDMT_ProjectFileFormat.EPRJ3 // folder project format
);
await eda.dmt_Project.openProject(uuid);
await new Promise((r) => setTimeout(r, 3000));

const p = await eda.dmt_Project.getCurrentProjectInfo();
return {
	uuid: p.uuid,
	board: p.data[0].name,
	schematic: p.data[0].schematic.name,
	page: p.data[0].schematic.page[0].uuid,
	pcb: p.data[0].pcb.uuid
};
```

```shell
easyeda-pro invoke --session $S --ext-uuid eda --code "$(cat step1_create_proj.js)"
```

```json
{
	"ok": true,
	"value": {
		"uuid": "5d3ca5e2…",
		"board": "Board1",
		"schematic": "Schematic1",
		"page": "429e4af1f4a665c3",
		"pcb": "509258b8ebfffb42"
	},
	"logs": [],
	"durationMs": 2611
}
```

Once the project is created, the following files appear on disk:

```
projects/MyBoard/
├── MyBoard.eprj3
├── sch/Schematic1/P1.esch2
├── sch/Schematic1/Schematic1.ecfg
├── pcb/PCB1.epcb2
└── panel/Panel1.epan2
```

### III. Searching for Devices

[`LIB_LibrariesList.getSystemLibraryUuid()`](../reference/pro-api.lib_librarieslist.getsystemlibraryuuid) returns the system library UUID, and [`LIB_Device.search()`](../reference/pro-api.lib_device.search) searches for devices inside a library:

```javascript
// step2_search.js
const sysLib = await eda.lib_LibrariesList.getSystemLibraryUuid();
const items = await eda.lib_Device.search('0603WAF1001T5E');
return {
	systemLibrary: sysLib,
	first: {
		name: items[0].name,
		uuid: items[0].uuid,
		lcsc: items[0].supplierId,
		libraryUuid: items[0].libraryUuid
	}
};
```

```json
{
	"ok": true,
	"value": {
		"systemLibrary": "0819f05c4eef4c71ace90d822a990e87",
		"first": {
			"name": "0603WAF1001T5E",
			"uuid": "18db11499a04403ba8c98e2f7a687fbc",
			"lcsc": "C21190",
			"libraryUuid": "0819f05c4eef4c71ace90d822a990e87"
		}
	},
	"durationMs": 7282
}
```

::: tip

In semi-offline mode the system library is fully available. It contains a large number of real devices with LCSC part numbers, footprints, and 3D models, and the return value of `search()` can be fed directly into the placement APIs.

:::

The devices used in this example are:

| Device | LCSC part number | Description |
| --- | --- | --- |
| `0603WAF1001T5E` | C21190 | 1kΩ 0603 |
| `0603WAF1002T5E` | C25804 | 10kΩ 0603 |
| `CC0603KRX7R9BB104` | C14663 | 100nF 0603 |

### IV. Placing Components

First open the schematic page with [`DMT_EditorControl.openDocument()`](../reference/pro-api.dmt_editorcontrol.opendocument), then place components with [`SCH_PrimitiveComponent.create()`](../reference/pro-api.sch_primitivecomponent.create).

The recommended approach is to read a snapshot of the component properties right after `create()`, then write `designator` and `otherProperty` back together in a single [`SCH_PrimitiveComponent.modify()`](../reference/pro-api.sch_primitivecomponent.modify) call. That way the designator and all device properties are set in one pass:

```javascript
// step3_place.js
const pageUuid = '429e4af1f4a665c3'; // the page returned by the previous step
await eda.dmt_EditorControl.openDocument(pageUuid);
await new Promise((r) => setTimeout(r, 2500));

const LIB = '0819f05c4eef4c71ace90d822a990e87';
const R1K = { libraryType: '3', libraryUuid: LIB, uuid: '18db11499a04403ba8c98e2f7a687fbc' };
const R10K = { libraryType: '3', libraryUuid: LIB, uuid: 'b948db94476e4027ac8953235755ec96' };
const C100 = { libraryType: '3', libraryUuid: LIB, uuid: '96b39256cc3f4d80bd3b503deb4f3328' };

const out = [];
for (const [ref, lib, x, y] of [
	['R1', R1K, 400, 610],
	['R2', R10K, 400, 510],
	['C1', C100, 650, 510],
	['R3', R1K, 150, 610]
]) {
	// 1. Place the component (coordinates are in 10mil; rotation is the API angle)
	const c = await eda.sch_PrimitiveComponent.create(lib, x, y, undefined, 90, false, true, true);
	const id = c.getState_PrimitiveId();

	// 2. Read the property snapshot first
	const pre = (await eda.sch_PrimitiveComponent.get(id)).getState_OtherProperty();

	// 3. Write the designator and properties back in one call
	await eda.sch_PrimitiveComponent.modify(id, { designator: ref, otherProperty: pre });

	// 4. Read the absolute pin coordinates for later wiring
	const pins = await eda.sch_PrimitiveComponent.getAllPinsByPrimitiveId(id);
	out.push({
		ref,
		id,
		value: pre.Value,
		pins: pins.map((p) => ({ n: p.pinNumber, x: p.x, y: p.y }))
	});
}
return out;
```

```json
{
	"ok": true,
	"value": [
		{
			"ref": "R1",
			"id": "4dc7d7c4967a383f",
			"value": "1kΩ",
			"pins": [
				{ "n": "2", "x": 400, "y": 590 },
				{ "n": "1", "x": 400, "y": 630 }
			]
		},
		{
			"ref": "R2",
			"id": "054e84ce1932ae79",
			"value": "10kΩ",
			"pins": [
				{ "n": "2", "x": 400, "y": 490 },
				{ "n": "1", "x": 400, "y": 530 }
			]
		},
		{
			"ref": "C1",
			"id": "6942169cfa200a6f",
			"value": "100nF",
			"pins": [
				{ "n": "1", "x": 650, "y": 530 },
				{ "n": "2", "x": 650, "y": 490 }
			]
		},
		{
			"ref": "R3",
			"id": "3acfabe56d603ec8",
			"value": "1kΩ",
			"pins": [
				{ "n": "2", "x": 150, "y": 590 },
				{ "n": "1", "x": 150, "y": 630 }
			]
		}
	]
}
```

::: tip

Each component should be `create()`d first and then have its pin coordinates read back with [`SCH_PrimitiveComponent.getAllPinsByPrimitiveId()`](../reference/pro-api.sch_primitivecomponent.getallpinsbyprimitiveid). Do not compute them yourself; the pin coordinates are the only basis for the wiring that follows.

:::

### V. Placing Net Flags

[`SCH_PrimitiveComponent.createNetFlag()`](../reference/pro-api.sch_primitivecomponent.createnetflag) places net flags. The supported types are `Power` `Ground` `AnalogGround` `ProtectGround`:

```javascript
// step4_flags.js
const vcc = await eda.sch_PrimitiveComponent.createNetFlag('Power', 'VCC', 400, 660, 0, false);
const gnd = await eda.sch_PrimitiveComponent.createNetFlag('Ground', 'GND', 650, 410, 0, false);
return {
	vcc: vcc.getState_PrimitiveId(),
	gnd: gnd.getState_PrimitiveId(),
	vccNet: vcc.getState_Net(),
	gndNet: gnd.getState_Net()
};
```

```json
{
	"ok": true,
	"value": {
		"vcc": "e6fc4f9698692111",
		"gnd": "2535215168c2bb20",
		"vccNet": "VCC",
		"gndNet": "GND"
	}
}
```

### VI. Drawing Wires

[`SCH_PrimitiveWire.create()`](../reference/pro-api.sch_primitivewire.create) draws wires. A wire is an orthogonal polyline; a single `create()` call can draw several segments, but consecutive segments must meet end to end and each segment must be horizontal or vertical:

```javascript
// step5_wire.js
const plan = [
	['VCC->R1.1', [[400, 660, 400, 630]]],
	['R1.2->R2.1', [[400, 590, 400, 530]]],
	['C1.1->MID', [[650, 530, 400, 530]]],
	['C1.2->GND', [[650, 490, 650, 410]]],
	['R2.2->GND', [[400, 490, 400, 410, 650, 410]]],
	['R3.1->VCC', [[150, 630, 150, 660, 400, 660]]],
	['R3.2->GND', [[150, 590, 150, 410, 400, 410]]]
];
const made = [];
for (const [tag, line] of plan) {
	const w = await eda.sch_PrimitiveWire.create(line);
	made.push({ tag, net: w.getState_Net(), id: w.getState_PrimitiveId() });
}
return made;
```

```json
{
	"ok": true,
	"value": [
		{ "tag": "VCC->R1.1", "id": "11b3075f364b1790" },
		{ "tag": "R1.2->R2.1", "id": "2d6fcb2792dae43f" },
		{ "tag": "C1.1->MID", "id": "2d6fcb2792dae43f" }
	]
}
```

::: tip

Adjacent segments are merged by the editor into a single `WIRE` primitive group. This is normal behavior. As long as the coordinates land exactly on the pins, the connection is correct.

:::

### VII. Running a DRC Check

[`SCH_Drc.check()`](../reference/pro-api.sch_drc.check) runs the design rule check. Its parameters are:

| Parameter | Description |
| --- | --- |
| `strict` | Strict mode; currently always pass `true` |
| `userInterface` | Whether to open the bottom DRC panel; pass `false` in scripts |
| `includeVerboseError` | Pass `true` to get an array of violation details, `false` to get only a pass/fail boolean |

```javascript
// step6_drc.js
await eda.sch_Document.save();
await new Promise((r) => setTimeout(r, 8000)); // wait for the editor to refresh

const verbose = await eda.sch_Drc.check(true, false, true); // array of violation details
const passed = await eda.sch_Drc.check(true, false, false); // pass/fail boolean
return {
	violationCount: verbose.length,
	passed,
	violations: verbose.map((v) => v.rule + '(' + v.type + '):' + v.primitives.map((p) => p.name).join('|'))
};
```

```json
{
	"ok": true,
	"value": {
		"violationCount": 0,
		"passed": true,
		"violations": []
	}
}
```

::: tip

Wait 8 to 10 seconds after `save()` before running the DRC check, so the editor can finish its topology computation. That yields the most accurate result.

:::

### VIII. Exporting the Netlist

[`SCH_ManufactureData.getNetlistFile()`](../reference/pro-api.sch_manufacturedata.getnetlistfile) exports a netlist file:

```javascript
// step7_netlist.js
const f = await eda.sch_ManufactureData.getNetlistFile('MyBoard_NET', 'Protel2');
const txt = await f.text();
return { name: f.name, size: f.size, nets: txt.split('\n').slice(-24).join('\n') };
```

```json
{
	"ok": true,
	"value": {
		"name": "MyBoard_NET.net",
		"size": 4206,
		"nets": "(\nGND \nR2-2 0603WAF1002T5E-2 Input   \nC1-2 CC0603KRX7R9BB104-2 Passive \nR3-2 0603WAF1001T5E-2 Input   \n)\n(\n$1N2 \nR2-1 …\n)\n(\nVCC \nR3-1 …\nR1-1 …\n)"
	}
}
```

The exported netlist matches the design intent exactly, so the connections can be asserted programmatically.

### IX. Exporting the BOM

[`SCH_ManufactureData.getBomFile()`](../reference/pro-api.sch_manufacturedata.getbomfile) exports the BOM, in `csv` or `xlsx` format:

```javascript
// step8_bom.js
const DIR = 'C:/Users/username/Documents/EasyEDA-Pro/projects/MyBoard/';

// CSV (text, can be read back and verified directly)
const csv = await eda.sch_ManufactureData.getBomFile('BOM', 'csv');
const csvText = await csv.text();
await eda.sys_FileSystem.saveFileToFileSystem(DIR + 'BOM.csv', new Blob([csvText], { type: 'text/csv' }), undefined, true);

// XLSX (binary, written straight to disk)
const xlsx = await eda.sch_ManufactureData.getBomFile('BOM', 'xlsx');
const saved = await eda.sys_FileSystem.saveFileToFileSystem(DIR + 'BOM.xlsx', xlsx, undefined, true);

return { csvText, xlsxSize: xlsx.size, saved };
```

```json
{
	"ok": true,
	"value": {
		"csvText": "No.\tQuantity\tComment\tDesignator\tFootprint\tValue\tManufacturer Part\tManufacturer\tSupplier Part\tSupplier\n1\t1\t100nF\tC1\tC0603\t100nF\tCC0603KRX7R9BB104\tYAGEO\tC14663\tLCSC\n2\t2\t1kΩ\tR1,R3\tR0603\t1kΩ\t0603WAF1001T5E\tUNI-ROYAL\tC21190\tLCSC\n3\t1\t10kΩ\tR2\tR0603\t10kΩ\t0603WAF1002T5E\tUNI-ROYAL\tC25804\tLCSC\n",
		"xlsxSize": 6893,
		"saved": true
	}
}
```

R1 and R3, which share the same part number, are merged into one row with a quantity of 2.

### X. Exporting a Screenshot

[`DMT_EditorControl.getCurrentRenderedAreaImage()`](../reference/pro-api.dmt_editorcontrol.getcurrentrenderedareaimage) returns an image of the currently rendered area:

```javascript
// step9_shot.js
const tabId = await eda.dmt_EditorControl.openDocument('429e4af1f4a665c3');
await eda.dmt_EditorControl.zoomToAllPrimitives();
await new Promise((r) => setTimeout(r, 2000));

const blob = await eda.dmt_EditorControl.getCurrentRenderedAreaImage(tabId);
await eda.sys_FileSystem.saveFileToFileSystem('C:/Users/username/Documents/EasyEDA-Pro/projects/MyBoard/sch.png', blob, undefined, true);
return { saved: true, size: blob.size };
```

To export the whole page instead, use [`SCH_ManufactureData.getPngFile()`](../reference/pro-api.sch_manufacturedata.getpngfile) and specify a resolution:

```javascript
const png = await eda.sch_ManufactureData.getPngFile('MySchematic', { width: 1400 });
await eda.sys_FileSystem.saveFileToFileSystem(DIR + png.name, png, undefined, true);
```

### XI. Saving Documents

Schematic and PCB documents are saved through their respective `Document` classes:

```javascript
await eda.sch_Document.save(); // schematic
await eda.pcb_Document.save(); // PCB
```

`.eprj3` is a folder project format that stays in two-way sync with the editor: once the editor saves, the `.esch2` / `.epcb2` files on disk are updated immediately; conversely, if the files on disk are modified directly, the editor re-reads them shortly afterwards.

### XII. Designing the PCB

The PCB side follows a flow similar to the schematic: draw the board outline, import changes from the schematic, auto-place, and autoroute.

```javascript
// step10_pcb.js
const pcbUuid = '509258b8ebfffb42';

// 1. Open the PCB
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise((r) => setTimeout(r, 2500));

// 2. Draw the board outline: EPCB_LayerId.BOARD_OUTLINE = 11
//    Using a polyline primitive with explicit vertices is the least error-prone option
const poly = eda.pcb_MathPolygon.createPolygon([40, -340, 'L', 400, -340, 400, -120, 40, -120, 40, -340]);
const outline = await eda.pcb_PrimitivePolyline.create('', 11, poly, 10, false);

// 3. Import changes from the schematic (the GUI equivalent of "Design - Import Changes")
await eda.pcb_Document.importChanges();
await new Promise((r) => setTimeout(r, 5000));

// 4. Auto-place
const layout = await eda.pcb_Document.autoLayout();

// 5. Autoroute
const route = await eda.pcb_Document.autoRouting();

// 6. Zoom to the board outline and take a screenshot
await eda.pcb_Document.zoomToBoardOutline();
const tabId = '509258b8ebfffb42@<project uuid>';
const img = await eda.dmt_EditorControl.getCurrentRenderedAreaImage(tabId);
await eda.sys_FileSystem.saveFileToFileSystem(DIR + 'pcb.png', img, undefined, true);

await eda.pcb_Document.save();
return { outline: outline.getState_PrimitiveId(), layout, route, imgSize: img.size };
```

```json
{
	"ok": true,
	"value": {
		"outline": "24275a39b9fc526f",
		"layout": {
			"success": true,
			"totalComponentsCount": 4,
			"successComponentsCount": 4,
			"failedComponents": [],
			"duration": 974
		},
		"route": {
			"success": true,
			"totalNetsCount": 3,
			"successNetsCount": 3,
			"failedNets": [],
			"duration": 1405
		},
		"imgSize": 124914
	}
}
```

[`PCB_Document.autoRouting()`](../reference/pro-api.pcb_document.autorouting) accepts parameters that specify which nets to route:

```javascript
await eda.pcb_Document.autoRouting({ RoutingNets: ['VCC'], optimization: 1 });
```

After routing, run [`PCB_Drc.check()`](../reference/pro-api.pcb_drc.check) to confirm connectivity:

```javascript
const passed = await eda.pcb_Drc.check(true, false, false); // true means everything passed
```

Many more capabilities live in classes such as `DMT_Board`, `PCB_Drc`, and `PCB_ManufactureData`: net classes, differential pairs, equal-length groups, copper pours, Gerber, coordinate files, IPC-2581, ODB++, and interactive BOM export. Browse them one by one with `doc api`.

### XIII. Practical Recommendations

1. Always attach `--ext-uuid eda` to `invoke`, so that the full permission set is granted;
2. Use forward slashes in paths uniformly, and confirm the target is inside the `APP_PROJECT_DIR` directory before writing;
3. When placing components, follow the sequence "`create()` → read the property snapshot → `modify(designator + otherProperty)`", so that the designator and properties are set in one pass;
4. Read pin coordinates with `getAllPinsByPrimitiveId()`; do not compute them yourself;
5. When there are many components, invoke in batches of 20 to 25 and leave headroom in the timeout;
6. After a change, wait 5 to 10 seconds before querying state (DRC / netlist / rendering), to get the final result;
7. Persist the key return value of each step as JSON evidence;
8. On completion, call `save()` and verify the artifacts on disk;
9. Close sessions with `session close --destroy` when they are no longer needed.

## Generating Project Files Directly

Besides operating the editor through the extension API, you can also write `.eprj3` project files directly. The two approaches can be mixed: create the project skeleton with the API, then generate content through files.

### I. Project File Structure

`.eprj3` is a folder-based project format, consisting of one directory plus a number of JSON / plain-text files. It is friendly to Git and to scripts.

```
MyBoard/
├── MyBoard.eprj3                 # Project index and metadata (the only file created with the project)
├── sch/                          # Schematics, one folder per schematic
│   └── <schematic name>/
│       ├── <page name>.esch2      # Page source
│       ├── <schematic name>.ecfg  # Design rules and configuration of that schematic
│       └── <schematic name>.evar  # Assembly variants
├── pcb/
│   └── <PCB name>.epcb2          # PCB source
└── panel/
    └── <panel name>.epan2        # Panel source
```

The file name is the document name.

### II. Record Format

`.esch2`, `.epcb2`, and `.epan2` share one record format. Each file consists of multiple lines, one JSON record per line:

```
{"type":"<type>","ticket":<logical clock>,"id":"<16 lowercase hex chars>"}||{<payload>}|
```

- The shell and the payload are separated by `||`;
- The line must end with `|` plus a line feed (`LF`, not `CRLF`);
- `type` determines the meaning of the record.

Common types:

| File | Types |
| --- | --- |
| Schematic | `DOCHEAD` `META` `COMPONENT` `ATTR` `WIRE` `LINE` `TEXT` |
| PCB | `DOCHEAD` `META` `COMPONENT` `ATTR` `PAD_NET` `NET` `POLY` `LINE` `LAYER` `RULE` |

### III. Multi-Document Structure

An `.esch2` file does not correspond to a single page. It is a sequence of documents, each starting with a `DOCHEAD`:

```
DOCHEAD  docType=SYMBOL    uuid=<sheet symbol>        ← the sheet (Drawing-Symbol_A4)
DOCHEAD  docType=SYMBOL    uuid=<device symbol 1>     ← the 1kΩ resistor symbol
DOCHEAD  docType=SYMBOL    uuid=<device symbol 2>
DOCHEAD  docType=FOOTPRINT uuid=<footprint 1>         ← R0603
DOCHEAD  docType=DEVICE    uuid=<device 1>            ← contains only DOCHEAD and META
...
DOCHEAD  docType=BLOB      uuid=BLOB
DOCHEAD  docType=SCH_PAGE  uuid=<page uuid>           ← the actual page content
```

The device library (symbols, footprints, devices) is embedded in the same file. `.eprj3` has no separate project library; every device is an independent document inside the file.

It is recommended to keep the write order identical to the order the editor itself emits: `SYMBOL` → `FOOTPRINT` → `DEVICE` → `BLOB` → `SCH_PAGE`.

### IV. Querying the Format Reference

Use `doc format` to query the field definitions of the various design-file records:

```shell
easyeda-pro doc format
easyeda-pro doc format --class-name TMSchComponent
easyeda-pro doc format --class-name TSchAttr
easyeda-pro doc format --class-name TWire
easyeda-pro doc format --class-name TSchLine
```

```json
{
	"ok": true,
	"value": {
		"name": "TMSchComponent",
		"comment": "Component (line format of the COMPONENT primitive)",
		"fields": [
			{ "name": "partId", "type": "TPartId", "required": true },
			{ "name": "x", "type": "number", "required": true },
			{ "name": "y", "type": "number", "required": true },
			{ "name": "rotation", "type": "number", "required": true },
			{ "name": "isMirror", "type": "boolean", "required": true },
			{
				"name": "attrs",
				"type": "{ DeviceName: string; Devices: string; FootprintName: string; Footprints: string; SymbolName: string; Symbols: string }",
				"required": true
			},
			{ "name": "zIndex", "type": "null | number", "required": true }
		]
	}
}
```

::: tip

The field descriptions of `doc format` are quite detailed. Read them field by field before writing a file; that is more reliable than reverse-engineering from a real sample.

:::

Common type mapping:

| What you want to write | Type |
| --- | --- |
| Schematic component instance | `TMSchComponent` |
| Schematic attributes (designator / value / net name, ...) | `TSchAttr` |
| Schematic wire group / single segment | `TWire` / `TSchLine` |
| PCB component instance | `TMPcbComponent` |
| PCB attributes | `TPcbAttr` |
| PCB pad-to-net mapping | `TPadNetWire` |
| PCB trace / board outline polyline | `TPcbLine` / `TPcbPoly` + `TPcbBoard` |
| The various forms of primitive id | `TElementId` / `TSingletonElementId` / `TKeyedElementId` / `TCompositeElementId` |
| PART id | `TPartId` |

### V. Writing Page Content

The example below writes the previously described voltage-divider circuit directly into `P1.esch2`.

#### 1. Creating the Project Skeleton with the API

First create and open the project through the API, to obtain the correct directory structure and avoid writing the index file by hand:

```shell
easyeda-pro open
easyeda-pro invoke --session $S --ext-uuid eda --code "$(cat step1_create_proj.js)"
```

At this point `P1.esch2` contains the A4 sheet `SYMBOL` document, the `DEVICE` documents, the `BLOB` document, and an empty `SCH_PAGE` document.

#### 2. Collecting Library Documents

A symbol document contains a whole set of graphical definitions (`PART` `PIN` `LINE` `POLY` `ATTR`), which is not practical to write by hand. It must come from an actual editor export.

The recommended approach is: place the components once through the API and save, then read the `.esch2` file from disk and take the `SYMBOL` `FOOTPRINT` `DEVICE` document sections verbatim for reuse.

```shell
# Place components through the API and save
easyeda-pro invoke --session $S --ext-uuid eda --code "$(cat place_and_save.js)"
# The file is updated immediately after saving and can be read straight from disk
```

#### 3. Writing the SCH_PAGE Document Section

Only business records are written into the `SCH_PAGE` document section: component instances, attributes, and wires.

```python
# COMPONENT: partId points at the id of the PART row in the SYMBOL document
#            the ATTR "Symbol" points at the SYMBOL document uuid, "Device" at the DEVICE document uuid
comp = {
    "type": "COMPONENT", "ticket": tk, "id": cid,
    "body": {
        "partId": "0603WAF1001T5E.1",           # id of the PART row in the symbol document
        "x": 400, "y": 610,
        "rotation": 270,                         # file angle = (360 - API angle) % 360
        "isMirror": False,
        "attrs": {"Footprints": "[]", "Devices": "[]", "DeviceName": None,
                  "FootprintName": None, "pinClass": {}, "differentialPairClass": {},
                  "Symbols": "[]"},
        "zIndex": 4, "yAxisDirection": "up"
    }
}

# ATTR: one key-value pair per record, parentId points back at the component
def attr(cid, key, value, x=None, y=None, z=0):
    return {"type": "ATTR", "ticket": tk, "id": new_id(), "body": {
        "x": x, "y": y, "rotation": 0, "color": None, "fontFamily": None,
        "fontSize": None, "fontWeight": None, "italic": None, "underline": None,
        "align": None, "value": value, "keyVisible": None, "valueVisible": None,
        "key": key, "fillColor": None, "parentId": cid, "zIndex": z,
        "yAxisDirection": "up"}}

attrs = [
    attr(cid, "Symbol", "c828663d1111a8cf"),          # -> SYMBOL document uuid
    attr(cid, "Device", "e16440afb3ce936d"),          # -> DEVICE document uuid
    attr(cid, "Designator", "R1", x=410, y=610, z=2),
    attr(cid, "Name", "={Value}", x=410, y=600, z=30),
    attr(cid, "Manufacturer", "UNI-ROYAL"),
    attr(cid, "Manufacturer Part", "0603WAF1001T5E"),
    attr(cid, "Supplier", "LCSC"),
    attr(cid, "Supplier Part", "C21190"),
    attr(cid, "Value", "1kΩ"),
    # remaining attributes omitted
]

# WIRE (wire group) + LINE (single segment)
wire = {"type": "WIRE", "ticket": tk, "id": wid, "body": {"zIndex": 10}}
line = {"type": "LINE", "ticket": tk, "id": new_id(), "body": {
    "fillColor": None, "fillStyle": None, "strokeColor": None, "strokeStyle": None,
    "strokeWidth": None, "startX": 400, "startY": 630, "endX": 400, "endY": 660,
    "lineGroup": wid, "yAxisDirection": "up"}}
```

Three rules apply when writing:

1. `partId` must be the id of the `PART` row in the `SYMBOL` document it references (of the form `0603WAF1001T5E.1`);
2. `id` is a random 16-character lowercase hexadecimal string, unique within the document;
3. `ticket` is unique within the document, and a component's `ticket` must be smaller than the `ticket` of its own attributes.

#### 4. Validating Reference Integrity

Run a static validation before writing to disk:

```python
# every COMPONENT partId must exist as a PART row in some SYMBOL document
part_ids = {rec.id for doc in docs if doc.docType == 'SYMBOL'
            for rec in doc.recs if rec.type == 'PART'}
doc_uuids = {d.uuid for d in docs}

for c in components:
    assert c.partId in part_ids or c.partId.startswith('pid'), c
    a = attrs_of(c)
    assert a['Symbol'] in doc_uuids
    assert a['Device'] in doc_uuids

# wires: every segment must be orthogonal and lineGroup must point at an existing WIRE
for l in lines:
    assert l.startX == l.endX or l.startY == l.endY
    assert l.lineGroup in wire_ids
```

#### 5. Writing and Re-verifying

After writing the file into the project directory, wait for the editor to reload, then verify:

```shell
cp build/P1.esch2 "C:\Users\username\Documents\EasyEDA-Pro\projects\MyBoard\sch\Schematic1\P1.esch2"
```

```javascript
// Verification script: object counts + DRC + screenshot
const comps = (await eda.sch_PrimitiveComponent.getAll()).map((c) => c.getState_Designator() || c.getState_ComponentType());
const wires = await eda.sch_PrimitiveWire.getAllPrimitiveId();
const drc = await eda.sch_Drc.check(true, false, false);
await eda.sch_ManufactureData.getPngFile('check', { width: 1400 }); // also export an image
return { comps, wireCount: wires.length, drcPassed: drc };
```

```json
{
	"ok": true,
	"value": {
		"comps": ["sheet", "netflag", "netflag", "R2", "R3", "C1", "R1"],
		"wireCount": 3,
		"drcPassed": true
	}
}
```

The write is only considered complete when the object counts match expectations, the DRC passes, and the screenshot looks correct.

::: tip

Always re-verify the object counts after writing a file by hand. If the count does not match, write the file again; the editor reloads it completely.

:::

### VI. Writing PCB Files

Compared with `.esch2`, `.epcb2` adds one layer: the pad-to-net mapping. Its structure is as follows:

```
SYMBOL × N        ← device symbols (for rendering)
FOOTPRINT × N     ← footprints (pads are defined here)
DEVICE × N        ← devices
PCB               ← the board document
   ├─ board template records: LAYER(60) / LAYER_PHYS / RULE / PREFERENCE / PRIMITIVE / PANELIZE / D3_ATTRIBUTE ...
   └─ business records: NET / COMPONENT / ATTR / PAD_NET / POLY (board outline) / LINE (trace)
```

Business records are written like this:

```python
# NET: one record per net
{"type": "NET", "id": '["NET","VCC"]', "body": {"netType": None, "specialColor": None,
  "retLine": True, "differentialName": None, "isPositiveNet": False, "equalLengthGroupName": None}}

# COMPONENT: component instance (angles follow the PCB convention)
{"type": "COMPONENT", "id": cid, "body": {
  "partitionId": "", "groupId": 0, "layerId": 1,            # layerId 1 = top layer
  "x": 307.15, "y": -222.71, "angle": 270,
  "attrs": {"Reuse Block": "", "Group ID": "", "Channel ID": "$1I5", "Unique ID": "gge1",
           "DeviceName": '{"name":"0603WAF1001T5E","source":"","uuid":"<DEVICE uuid>"}'},
  "locked": False, "zIndex": -1, "pinSwap": False,
  "pinSwapInfo": {cid + "e7": {"pinClass": "", "differentialPairClass": ""},
                  cid + "e8": {"pinClass": "", "differentialPairClass": ""}},
  "footprintPrimitives": True}}

# ATTR: composite id = component id + local id
{"type": "ATTR", "id": cid + "e15", "body": {"parentId": cid, "layerId": 3, "key": "Footprint",
  "value": "<FOOTPRINT uuid>"}}
{"type": "ATTR", "id": cid + "e16", "body": {"parentId": cid, "layerId": 3, "key": "Designator",
  "value": "R1", "x": 341.16, "y": -165.18, "angle": 270}}

# PAD_NET: pad-to-net mapping (the id is an array literal)
{"type": "PAD_NET", "id": '["PAD_NET","<cid>","2","e7"]',
 "body": {"partitionId": "", "padNet": "VCC", "padLen": None, "propagationDelay": None, "attrsMap": {}}}

# POLY: board outline (layerId = 11 = BOARD_OUTLINE)
{"type": "POLY", "id": pid, "body": {"partitionId": "", "groupId": 0, "netName": "",
  "layerId": 11, "width": 10, "path": [40, -340, "L", 400, -340, 400, -120, 40, -120, 40, -340],
  "locked": False, "zIndex": -1, "polyType": "NORMAL"}}

# LINE: trace
{"type": "LINE", "id": lid, "body": {"partitionId": "", "groupId": 0, "netName": "VCC",
  "layerId": 1, "startX": 307.15, "startY": -193.05, "endX": 339.49, "endY": -225.39,
  "width": 10, "locked": False, "zIndex": -1}}
```

The relationships between the various ids are as follows:

- The `PAD_NET` id is `["PAD_NET", <component id>, <pad number>, <pad local id>]`, where the last field must match the id of the corresponding `PAD` row in the `FOOTPRINT` document;
- A `pinSwapInfo` key is `<component id><pad local id>`;
- An `ATTR` id is `<component id><local id>`, where the local id reuses the editor's naming such as `e0` `e15` `e16`;
- The board outline `POLY` uses `layerId: 11`.

Recommendations for writing PCB files:

1. Reuse board template records (`LAYER` `RULE` `PREFERENCE` `PRIMITIVE`, ...) exactly as the editor generates them; do not write them by hand;
2. Collect library documents (`SYMBOL` `FOOTPRINT` `DEVICE`) from an editor export;
3. Write business records (`NET` `COMPONENT` `ATTR` `PAD_NET` `POLY` `LINE`) by hand, and validate reference integrity;
4. After writing, verify the component count, the trace count, [`PCB_Net.getAllNetsName()`](../reference/pro-api.pcb_net.getallnetsname), the PCB DRC, and a rendered screenshot.

Besides geometric rules, [`PCB_Drc.check()`](../reference/pro-api.pcb_drc.check) also compares the schematic netlist with the PCB netlist. As long as the components and pad nets on the PCB match the schematic, the comparison passes.

### VII. Practical Recommendations

1. Create the project skeleton through the API (`createProject()` + `openProject()`) to avoid writing the index file by hand;
2. Collect library documents from an editor export, and write business records by hand;
3. Read the relevant types field by field with `doc format` before writing the file;
4. Follow the three writing rules: `partId` points at the `PART` row, `id` is random 16-character hexadecimal, `ticket` is unique within the document;
5. Terminate lines with `|` plus `LF`, and separate the shell from the payload with `||`;
6. Run static validation first (reference integrity, orthogonality, id and ticket uniqueness), then write to disk;
7. Wait 10 to 15 seconds after writing, then verify object counts, DRC, and the screenshot. If the count does not match, write the file again;
8. The two-way sync of `.eprj3` is immediate: once the editor saves, the disk files are updated at once, and they can be read back as the reference answer for a diff.

## Comparison of the Two Approaches

| | Operating through the extension API | Writing `.eprj3` files directly |
| --- | --- | --- |
| Learning curve | Low | Medium (the format reference must be read first) |
| Best suited for | Interactive operation, validation, exports, automated testing | Bulk project generation, code review, Git management, and AI generating projects directly |
| Library documents | Built into the editor, searchable directly | Must be collected from an export |
| Version control | Binary / SQLite formats are unfriendly | Plain text, easy to diff |

The two approaches can be mixed. The recommended flow:

```text
create project (API) → collect library documents (API + read disk) → generate business records (script / program) → write to disk
      ↓                                                                                                       ↓
   verify (API: DRC / netlist / BOM / screenshot)  ←─────────────────────────────────────────────────  wait for reload
```

## Cheat Sheet

### Commands

| Purpose | Command |
| --- | --- |
| Overview | `easyeda-pro --help` |
| Fuzzy search commands | `easyeda-pro --search <keyword>` |
| Usage of a command | `easyeda-pro <command> --help` |
| Probe the endpoint | `easyeda-pro doctor` |
| Open a window | `easyeda-pro open [--path <project>] [--headless <bool>]` |
| List sessions | `easyeda-pro session list` |
| Close a session | `easyeda-pro session close --session <id> --destroy` |
| List classes | `easyeda-pro doc api` |
| List methods | `easyeda-pro doc api --class-name <class>` |
| Read a method | `easyeda-pro doc api --class-name <class> --method-name <method>` |
| Inspect an enum | `easyeda-pro doc api --class-name <EEnum>` |
| Inspect a format | `easyeda-pro doc format [--class-name <type>]` |
| Execute JS | `easyeda-pro invoke --session <id> --ext-uuid eda --code "…" [--args '<json>'] [--timeout <ms>]` |
| Run as MCP | `easyeda-pro --mcp stdio` / `--mcp http --port 3030` |

### Frequently Used APIs

| Domain | Class | Frequently used methods |
| --- | --- | --- |
| Project | [DMT_Project](../reference/pro-api.dmt_project) | `createProject` `openProject` `getCurrentProjectInfo` |
| Board / drawing | [DMT_Board](../reference/pro-api.dmt_board) [DMT_Schematic](../reference/pro-api.dmt_schematic) [DMT_Pcb](../reference/pro-api.dmt_pcb) | `createBoard` `createSchematic` `getAllBoardsInfo` |
| Editor | [DMT_EditorControl](../reference/pro-api.dmt_editorcontrol) | `openDocument` `zoomToAllPrimitives` `getCurrentRenderedAreaImage` |
| Device library | [LIB_LibrariesList](../reference/pro-api.lib_librarieslist) [LIB_Device](../reference/pro-api.lib_device) | `getSystemLibraryUuid` `search` |
| Schematic primitives | [SCH_PrimitiveComponent](../reference/pro-api.sch_primitivecomponent) | `create` `createNetFlag` `modify` `getAllPinsByPrimitiveId` |
| | [SCH_PrimitiveWire](../reference/pro-api.sch_primitivewire) | `create` `getAll` |
| Schematic checks | [SCH_Drc](../reference/pro-api.sch_drc) [SCH_Netlist](../reference/pro-api.sch_netlist) [SCH_ManufactureData](../reference/pro-api.sch_manufacturedata) | `check` `getNetlistFile` `getBomFile` `getPngFile` |
| Schematic documents | [SCH_Document](../reference/pro-api.sch_document) | `save` `getPrimitiveAtPoint` `getPrimitivesInRegion` |
| PCB primitives | [PCB_PrimitiveComponent](../reference/pro-api.pcb_primitivecomponent) [PCB_PrimitiveLine](../reference/pro-api.pcb_primitiveline) [PCB_PrimitivePolyline](../reference/pro-api.pcb_primitivepolyline) | `create` and others |
| PCB documents | [PCB_Document](../reference/pro-api.pcb_document) | `save` `importChanges` `autoLayout` `autoRouting` `zoomToBoardOutline` |
| PCB checks / exports | [PCB_Drc](../reference/pro-api.pcb_drc) [PCB_ManufactureData](../reference/pro-api.pcb_manufacturedata) [PCB_Net](../reference/pro-api.pcb_net) | `check` `getGerberFile` `get3DFile` `getAllNetsName` |
| Files | [SYS_FileSystem](../reference/pro-api.sys_filesystem) | `saveFileToFileSystem` `readFileFromFileSystem` `listFilesOfFileSystem` |
| Environment | [SYS_Environment](../reference/pro-api.sys_environment) | `isClient` `getEditorCurrentVersion` `getUserInfo` |

### Coordinate Systems and Units

| Domain | Convention |
| --- | --- |
| Schematic | Unit is 10mil; the origin is at the bottom-left corner of the sheet with Y pointing up; A4 is 1170 × 825 |
| PCB | Unit is mil; `layerId` `1` is the top layer and `11` is the board outline layer |
| Angles | The API uses counter-clockwise as positive; in schematic files `COMPONENT.rotation` is `(360 - API angle) % 360`, while on the PCB side `COMPONENT.angle` follows the API angle |

## Full Script Example

The script below chains the procedure above into a complete, runnable example:

```bash
#!/usr/bin/env bash
set -e
L="easyeda-pro"

# 1. Create a session
S=$($L open | python -c "import sys,json;print(json.load(sys.stdin)['value']['sessionId'])")
echo "session = $S"

# 2. Create a project
$L invoke --session $S --ext-uuid eda --code "$(cat step1_create_proj.js)"

# 3. Place components, net flags, and wires
$L invoke --session $S --ext-uuid eda --code "$(cat step3_place.js)"
$L invoke --session $S --ext-uuid eda --code "$(cat step4_flags.js)"
$L invoke --session $S --ext-uuid eda --code "$(cat step5_wire.js)"

# 4. Save, wait for the refresh, run the DRC
$L invoke --session $S --ext-uuid eda --code "await eda.sch_Document.save(); return true;"
sleep 10
$L invoke --session $S --ext-uuid eda --code "$(cat step6_drc.js)"

# 5. Export the netlist, the BOM, and a screenshot
$L invoke --session $S --ext-uuid eda --code "$(cat step7_netlist.js)"
$L invoke --session $S --ext-uuid eda --code "$(cat step8_bom.js)"
$L invoke --session $S --ext-uuid eda --code "$(cat step9_shot.js)"

# 6. Close the session
$L session close --session $S --destroy
```
