# For AI: Extension Project Initialization Guide <Badge type="info" text="AI" />

This document is an automated initialization guide aimed at **AI coding assistants (agents)** such as Claude Code, OpenCode, QwenCode, GitHub Copilot, etc. When you are asked to "initialize / create / scaffold a new EasyEDA Pro extension project", follow this document strictly.

If you are a human developer, please read the human-oriented [How to Get Started](./how-to-start) section instead; this document removes GUI steps and assumes the executor can run terminal commands and read/write the file system.

::: warning Default Prerequisite: Install the easyeda-api Skill

When running the full workflow in this document, you should **install the [easyeda-api](https://clawhub.ai/yanranxiaoxi/easyeda-api) Skill for the current AI coding tool by default** (unless the user explicitly refuses during the confirmation step). This Skill bundles complete extension development documentation, API references, and usage examples, so the AI can look up APIs locally instead of crawling the entire documentation website, which significantly reduces development difficulty and token consumption. See §3.5 below for the installation steps.

:::

## When to Use

Read this document and follow its workflow when the user request matches one of the following intents:

- "Initialize an EasyEDA Pro extension project"
- "Create a new extension using easyeda-api-sdk"
- "Set up an extension development environment and produce an importable extension package (.eext)"
- Any other request to generate a buildable, importable extension project from scratch

## 1. Core Background and Hard Constraints

Remember the following facts first — they determine how you should implement things:

| Constraint | Description |
| --- | --- |
| Nature of an extension | Every extension is an independent JavaScript script running under its own scope chain |
| Language | Just follow the [ECMAScript Next](https://262.ecma-international.org/) specification; TypeScript is recommended (default entry `/src/index.ts`), with type definitions from `@jlceda/pro-api-types` |
| Browser API limitations | Extensions run in the main thread, where calls to DOM, external requests, local file system, and other browser APIs are restricted; use the predefined interfaces provided by the extension API for such needs |
| Node.js version | Must be no lower than `20.17.0` (per the `engines.node` declaration in the SDK's `package.json`; if any other document shows a different value, defer to the SDK declaration) |
| UUID | Each extension needs a unique identifier in the form of a 32-character string. With easyeda-api-sdk, the first `npm run build` **automatically generates and backfills** the `uuid` in `extension.json` when it is empty or invalid — no manual generation needed |
| Relationship between `name` and UUID | When an extension is not listed in the Extension Store and has no `uuid` filled in, `name` temporarily acts as the extension identifier. `name` can change at any time and may collide, so do not rely on it as a stable, unique identifier |
| Artifact | Each build produces an `<name>_v<version>.eext` package under `build/dist/`, for importing into EasyEDA Pro |

## 2. Information to Confirm with the User Before Executing

Before starting, confirm the following with the user **all at once**. Do not make up or guess these values:

1. Target directory for the project (if unspecified, default to the current directory; if the current directory is not empty, create a subdirectory for the project)
2. `name`: extension name; may only contain lowercase letters `a-z`, digits `0-9`, and hyphens `-`; `5-30` characters long
3. `displayName`: display name; may contain non-ASCII characters
4. `description`: a short text describing the extension's purpose
5. `publisher`: developer information
6. `license`: open-source license; default to `Apache-2.0` if unspecified
7. Project purpose / initial features to implement (to decide whether anything beyond the sample code is needed in the entry file)
8. Consent to install the easyeda-api Skill: by default it will be installed for the AI coding tool you are currently using ([easyeda-api](https://clawhub.ai/yanranxiaoxi/easyeda-api); this modifies your AI tool's configuration directory) to look up API documentation locally and reduce token consumption during later development and debugging; **if you do not want it installed, say so explicitly here**. Also tell me which AI coding tool you are using (Claude Code / OpenCode / QwenCode / Codex, etc.) so I can pick the correct installation method.

Only after the user confirms should you proceed to the workflow below.

## 3. Execution Workflow

### 3.1 Check the Node.js Environment

Run the following commands and verify the versions:

```shell
node -v
npm -v
```

- If `node -v` reports a version lower than `20.17.0`, **stop and ask the user to install or switch Node.js first**; do not attempt to install or upgrade it yourself (it may require administrator privileges).
- If the command does not exist (`command not found`), ask the user to install Node.js and then retry.

### 3.2 Fetch the SDK Project

Run one of the following in the target directory:

```shell
# Option A: git clone (recommended, deterministic result)
git clone --depth=1 https://github.com/easyeda/easyeda-api-sdk.git my-extension
```

```shell
# Option B: npx initialization
npx github:easyeda/easyeda-api-sdk my-extension
```

Notes:

- The project directory name must not contain `spaces` or `non-ASCII characters`, to avoid unexpected problems later.
- After it finishes, **verify** that key files such as `extension.json`, `package.json`, and `src/index.ts` exist under `my-extension`; otherwise treat it as a failure and investigate.

### 3.3 Install Dependencies

```shell
cd my-extension
npm install
```

`npm install` installs dependencies and initializes automated settings such as runtime hooks. If it fails, troubleshoot as follows:

| Symptom | How to handle |
| --- | --- |
| Network timeout / cannot fetch packages (common on mainland China networks) | Edit the `.npmrc` inside the project, uncomment `registry=https://registry.npmmirror.com`, and retry. **Only edit the project-level `.npmrc`; never modify the global npm configuration without consent** |
| On Windows: `...ps1 cannot be loaded because running scripts is disabled on this system` (wording may be localized) | First try `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (affects only the current user, no administrator privileges needed); if that still fails, ask the user to run `Set-ExecutionPolicy RemoteSigned` in an administrator PowerShell themselves. The AI must not attempt to elevate privileges on its own |

### 3.4 Configure `extension.json`

Open `extension.json` in the project root and, after confirming with the user, fill in the following fields:

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| name | `string` | `run-api-gateway` | Extension name; may only contain lowercase letters `a-z`, digits `0-9`, and hyphens `-`; `5-30` characters long |
| displayName | `string` | `Run API Gateway` | Display name; may contain non-ASCII characters |
| description | `string` | `Provides WebSocket gateway bridging for AI coding tools` | Description |
| publisher | `string` | `JLCEDA` | Developer information |
| license | `string` | `Apache-2.0` | Open-source license |
| version | `string` | `1.0.0` | Semantic version, formatted as `major.minor.patch` |

About the `uuid` field:

- Leave it empty or invalid — the first `npm run build` will automatically generate a valid 32-character UUID and backfill it into `extension.json`.
- If the developer plans to publish the extension to the Extension Store, they must later apply for and use the official UUID issued by the store, replacing the auto-generated local one.

### 3.5 Install the easyeda-api Skill (Default)

Before writing code, **by default** install the [easyeda-api](https://clawhub.ai/yanranxiaoxi/easyeda-api) Skill ([source repository](https://github.com/easyeda/easyeda-api-skill)) for the current AI coding tool. Unless the user explicitly refuses during the §2 confirmation step, **do not skip this step**.

Installing the Skill provides the following benefits:

- Bundles **structured API documentation (with a hierarchical index), type information, usage examples, and bridge debugging capabilities** for EasyEDA Pro extension development, which the AI can look up locally;
- Without it, the AI can only crawl the whole documentation site or generate API calls from memory, resulting in **high token consumption, low accuracy, and lots of rework**;
- Once installed, it enables an integrated loop of "API lookup → code generation → integration debugging", significantly reducing development difficulty and token consumption.

Installation methods (run the one matching the tool you are currently in; if you cannot tell, ask the user):

```shell
# OpenCode: install into OpenCode's global skills directory
npx clawhub@latest install easyeda-api --workdir "$HOME/.config/opencode" --dir skills
```

For other tools supporting Agent Skills (Claude Code / Codex / QwenCode, etc.), follow the [official easyeda-api instructions](https://github.com/easyeda/easyeda-api-skill) to install the Skill into the tool's skills directory (Claude Code: `~/.claude/skills/`; OpenCode: `~/.config/opencode/skills/`).

Manual fallback: download [https://image.lceda.cn/files/easyeda-api.zip](https://image.lceda.cn/files/easyeda-api.zip) and extract it into the skills directory of the current AI tool (after extraction you should see `SKILL.md` directly; do not create an extra nested directory).

Verify after installation:

1. Files such as `SKILL.md` exist in the Skill directory;
2. If the tool provides a skills list command (e.g., OpenCode's `/skills`), confirm that `easyeda-api` appears in the list.

Notes:

- This installation changes the user-level configuration of the user's AI tool, so it requires the user's consent from §2; skip it if the user refuses, and let them know that skipping it will cost more tokens in later API development and debugging.
- If the current environment cannot install Skills at all (e.g., a web-based chat), explain the downside and suggest switching to a tool that supports Agent Skills; if installation is impossible, fall back to "look up the official API documentation online on demand".
- **If the user later wants to debug while linked to the EDA** (i.e., let the AI directly operate/debug a running EasyEDA Pro), the user must also install the [Run API Gateway](https://jlc-ext.com/item/oshwhub/run-api-gateway) extension on the EDA side in addition to this Skill. That is a GUI step; see [§3.9 Linking EDA for Live Debugging (Optional)](#39-linking-eda-for-live-debugging-optional).

### 3.6 Write the Entry Code

The SDK's default entry file is `/src/index.ts`. If the user asks for specific features, implement them in this file (or in modules split from it); if the user only wants a buildable, importable skeleton project, keep the SDK's default template.

- If the user explicitly wants plain JavaScript, rename `/src/index.ts` to `/src/index.js` and remove anything that is not valid JavaScript syntax (e.g., type annotations).

### 3.7 Build

```shell
npm run build
```

After the build finishes, verify each of the following:

1. The command exits with code `0`, with no compile / type / ESLint errors (if there are errors, run `npm run lint` to inspect and `npm run fix` to auto-fix).
2. An `<name>_v<version>.eext` artifact exists under `build/dist/`.
3. The `uuid` in `extension.json` has been backfilled with a 32-character hexadecimal string.

> The build reads the `.edaignore` file in the project root, whose syntax is the same as `.gitignore` and which controls what is excluded from the extension package during the build.

### 3.8 Import the Extension (GUI Steps the User Must Perform)

The AI cannot perform GUI operations on the user's behalf. Relay the **absolute path** of the `.eext` file and the following import instructions to the user, then wait for their feedback on the import result:

::: details

**Top Menu Bar** -\> **Advanced** -\> **Extension Manager...** -\> **Import**

Select the `.eext` file generated in the previous step.

:::

### 3.9 Linking EDA for Live Debugging (Optional)

When the user later asks to "let the AI directly operate/debug the currently open EDA window", the following chain must be established:

```text
AI coding tool → easyeda-api Skill → Bridge Server → Run API Gateway extension → EasyEDA Pro
```

The **AI-side component is already installed in §3.5** (the easyeda-api Skill, which provides API documentation, starts the bridge service, and guides AI calls), while the **EDA-side component [Run API Gateway](https://jlc-ext.com/item/oshwhub/run-api-gateway) must be installed inside EasyEDA Pro** (it runs inside the EDA and receives bridge requests to execute code). This step **can only be completed by the user in the EDA GUI**; the AI provides the instructions and waits for the result.

Relay the following steps to the user and wait for their feedback:

1. Obtain the extension: Run API Gateway is a published extension — no need to build it yourself, just get it from the Extension Store:
   - Marketplace: [https://jlc-ext.com/item/oshwhub/run-api-gateway](https://jlc-ext.com/item/oshwhub/run-api-gateway) (or [https://ext.lceda.cn/item/oshwhub/run-api-gateway](https://ext.lceda.cn/item/oshwhub/run-api-gateway))
   - Source repository (for viewing/derivative development only): [https://github.com/easyeda/eext-run-api-gateway](https://github.com/easyeda/eext-run-api-gateway)
2. Find and install/import the Run API Gateway extension in the EDA's **Extension Manager**.
3. In the Extension Manager, check **Allow External Interaction** and **Show in Top Menu**.
4. Confirm that an **API Gateway** menu appears in the EDA's top menu (with items such as "Reconnect", "Stop Connection", "Toggle Auto-Connect Status", "About..."), which means the extension has loaded correctly.

Once installed, follow the easyeda-api Skill's workflow instructions to start the bridge and complete connection verification (e.g., health check, handshake) before executing debugging tasks; on the first run, have the user open the EDA with the extension loaded. When the connection fails, check in order: whether the AI tool (e.g., OpenCode) and the Skill are available (`/skills`), whether the EDA extension is loaded, whether the EDA is running, and if necessary click "Reconnect" in the API Gateway menu.

## 4. Iterative Development Workflow

For later change requests from the user, follow this loop:

1. Modify the source code (default entry `/src/index.ts`).
2. Bump the `version` in `extension.json` (increment `patch` each time; increment `minor` / `major` for significant changes).
3. Re-run `npm run build`.
4. Ask the user to re-import the newly generated `.eext` file (import path in §3.8).

> During iterative debugging, keep the easyeda-api Skill available (see §3.5) so APIs can be looked up locally and token consumption stays low.

## 5. Behavioral Boundaries (Must Follow)

- **Do not elevate privileges on your own**: never run commands that require `sudo` / administrator privileges; if truly necessary, hand the exact command to the user to run themselves.
- **Do not modify global configuration on your own**: includes the global npm registry, user-level `.npmrc`, system environment variables, etc.
- **Do not make up information**: values that require user decisions — `name`, `displayName`, `description`, `publisher`, `license`, version number, etc. — must be confirmed with the user before being written.
- **Do not skip verification**: after key commands such as build and dependency installation, check the exit code and whether the artifacts exist before moving on or declaring completion.
- **Announce network and long-running operations** to the user before running them.

## 6. What You Must Report When Done

After the task finishes, report the following to the user:

1. The project directory and key files (`extension.json`, `src/index.ts`).
2. The absolute path of the built `.eext` artifact.
3. The menu path for importing into EasyEDA Pro.
4. The `uuid` backfilled in `extension.json` (if backfilling occurred).
5. The installation status of the easyeda-api Skill; if installed, remind the user that if they later want to debug linked to the EDA, they must additionally install the Run API Gateway extension in the EDA per [§3.9](#39-linking-eda-for-live-debugging-optional) (a GUI step the AI cannot do for them).
6. Further development suggestions, such as extension examples ([https://github.com/easyeda](https://github.com/easyeda)) and the marketplace ([https://jlc-ext.com/](https://jlc-ext.com/)).

## 7. Further Reading

After initialization, recommend the relevant sections of this guide based on the user's needs:

- [How to Get Started](./how-to-start): the complete illustrated tutorial for humans
- [Extension Configuration File](./extension-json): full field reference for `extension.json`
- [Invoking the Extension API](./invoke-apis): how to call editor APIs
- [Multi-language Support](./i18n), [Inline Frame Support](./inline-frame), [Error Handling](./error-handling), [Interface Stabilization](./stability)
- [Ancillary Projects](./ancillary-projects): easyeda-api-sdk, pro-api-types, Run API Gateway, easyeda-api-skill, etc.
