# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

An AI Skill that enables programmatic control of EasyEDA Pro (嘉立创EDA专业版) via a WebSocket bridge. It consists of:
- A Node.js bridge server that relays code execution between AI agents and the EasyEDA Pro desktop client
- Comprehensive API reference documentation for the EasyEDA Pro JavaScript API

## Running the Bridge Server

```bash
npm run server
# or directly:
node scripts/bridge-server.mjs
```

The server auto-discovers an available port in the range **49620–49629** and exits if a bridge is already running on one of those ports.

## Architecture

```
AI Agent (Claude Code)
    ↓ HTTP POST /execute  or  WebSocket
Bridge Server  (scripts/bridge-server.mjs, port 49620-49629)
    ↓ WebSocket
EasyEDA Pro desktop client  (run-api-gateway.eext extension must be installed)
```

**Bridge server endpoints:**
- `GET /health` — service identity + connection status
- `GET /eda-windows` — list connected EDA windows
- `POST /eda-windows/select` — set active window
- `POST /execute` — run JavaScript in EasyEDA's browser runtime

**Execution context:** All code sent to `/execute` runs inside EasyEDA's browser as:
```javascript
async function(eda) {
  // `eda` is the global EDA API object
  return result; // must use return — console.log is NOT captured
}
```

No Node.js APIs (`fs`, `path`, etc.) are available inside the execution context.

## API Documentation Layout (`references/`)

| Prefix | Domain |
|--------|--------|
| `DMT_*` | Document / project management |
| `PCB_*` | PCB board operations |
| `SCH_*` | Schematic operations |
| `LIB_*` | Library (symbols & footprints) |
| `SYS_*` | System / UI utilities |
| `IPCB_*` | PCB primitive interfaces |
| `ISCH_*` | Schematic primitive interfaces |

Start with `references/_index.md` for a full API map, or `references/_quick-reference.md` for method signatures.

## Critical Gotchas

- **Coordinate units differ by domain**: PCB uses **1 mil** units; Schematic uses **0.01 inch (10 mil)** units. Never mix them.
- **Validate document state first**: Confirm the correct project and document type (PCB vs. schematic) is active before calling domain-specific APIs.
- **Async primitive pattern**: Modifying PCB/SCH primitives requires `.toAsync()` → `.setState_*()` → `.done()` — not direct property assignment.
- **Return values, don't log**: The execution bridge captures only the `return` value of the injected function.

## Guides

`guide/` contains development guides covering API invocation patterns, error handling, stability, i18n, and extension configuration. Start with `guide/how-to-start.md` for initial setup.
