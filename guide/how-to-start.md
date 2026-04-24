# How to Get Started <Badge type="tip" text="Intro" />

In the EasyEDA Professional extension engine, all extensions are independent JavaScript scripts running under their own scope chains.

Each extension requires a UUID as the uniquely identifiable name of the extension, and this UUID exists in two cases:

1. the extension has been included and referenced from the EasyEDA Pro Extension Store, or the extension developer has requested a UUID for the extension and filled in the `uuid` field in `extension.json`, in this case, the UUID is an auto-generated 32-bit string, and you can find it on the Extension Store page for the extension;
2. if the extension is not included and does not fill in the `uuid` field, then the UUID is the `name` field defined by the extension developer in `extension.json`, please be careful about using this field as the name of the extension's interdependent references as it is always variable and may be renamed.

::: info

If you are using [pro-api-sdk](./ancillary-projects/pro-api-sdk), a new UUID will be automatically generated for you the first time you run `npm run build`.

If you wish to build the full development environment manually, you can also safely use <code id="generatedUuid"></code> as the UUID for the new extension, which is randomly generated when you visit the current page.

:::

All user extensions run locally on the client, which means you can write them in JavaScript according to the [ECMAScript Next](https://262.ecma-international.org/) specification, but note that in the main thread, there are limitations on accessing the DOM, external requests, local file system, and other browser APIs. However, it should be noted that in the main thread, calls to the DOM, external requests, local filesystem, and other browser APIs will be limited, and we will provide predefined interfaces in the extension APIs to address the need for this type of access.

::: tip

EasyEDA offers a wide range of extension examples, allowing users to view the source code and compile it for use:
Extensions source code: [https://github.com/easyeda](https://github.com/easyeda)
Extensions marketplace (China Site, the global site is under developing): [https://ext.lceda.cn/](https://ext.lceda.cn/)

:::

## Development Environment (Computer)

In order to facilitate the environment configuration, we provide [pro-api-sdk](https://gitee.com/jlceda/pro-api-sdk), and we recommend all developers to use this SDK for development, and this document will be based on this SDK to explain. You can get and configure the SDK environment in the following ways:

### I. Install Visual Studio Code

Visual Studio Code is the most recommended IDE for novice developers, hereafter referred to as **VSCode**, and you can download it from its [official website](https://code.visualstudio.com/#alt-downloads).

If you don't understand the difference between the versions, please download the version indicated in the figure below (Windows System Installer x64):

![VS Code Windows System Installer x64](/storage/images/cn/api/guide/how-to-start/how-to-start_20240729_170651.png)

### II. Install Git

Git is the recommended tool for pulling SDKs, and you can download it from its [official website](https://git-scm.com/download).

On the right side of the official download page, click `Download for Windows`:

![Git Download for Windows](/storage/images/cn/api/guide/how-to-start/how-to-start_20240729_170746.png)

### III. Install Node.js

Node.js is the runtime software necessary to build TypeScript natively, and you can download it from its [official website](https://nodejs.org/en/download/prebuilt-installer).

The official download page is a guided interactive page, so if you don't need it, just follow the instructions below:

I want `Current` version of Node.js for `Windows` running `x64`

Then click the `Download Node.js` button to download the Node.js installer.

::: warning

If you wish to use a customized version of Node.js, make sure it is no lower than `20.5.0`, which is the minimum version required for this project.

:::

::: tip

You can check the version of Node.js you have installed by typing `node -v` in the console, if the version is lower than `20.5.0`, follow the steps above to install Node.js.

:::

### IV. Pulling SDK Repository Locally

1. Before you start pulling, you need to first create a subfolder on your local disc where you will keep all your development materials. For example, you can create a subfolder named `easyeda-extension` under the `D:` disc.

    ::: warning

    Please try not to include `spaces` `non-ASCII characters` in the path to avoid surprises in subsequent operations.

    :::

2. Once created, open the Windows PowerShell tool (right-click on the `Windows Logo Key` and select the `Windows PowerShell (Administrator)` option).

3. Navigate within Windows PowerShell to the folder you just created, in this case the `D:\easyeda-extension` folder, and execute `cd "D:\easyeda-extension"`:

    ![PowerShell cd](/storage/images/en/api/guide/how-to-start/how-to-start_20240802_154933.png)

    ::: tip

    The double quotes `""` here cannot be omitted when the path contains `spaces`.

    :::

4. Depending on your network environment, execute one of the following commands:

    ```shell
    git clone --depth=1 https://github.com/easyeda/pro-api-sdk.git
    ```

### V. Get VS Code Extension

1. First you need to start VS Code and open the folder of the project you pulled in the previous stage inside it (e.g. `D:\easyeda-extension\pro-api-sdk`).

    ![VS Code Open Folder](/storage/images/en/api/guide/how-to-start/how-to-start_20240802_155144.png)

2. Then switch to the Extensions page (shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>) and search for and install the following apps in the search box at the top:

    1. `Code Spell Checker` by Street Side Software
    2. `ESLint` by Microsoft
    3. `EditorConfig for VS Code` by EditorConfig

    ![VS Code Search Extensions](/storage/images/en/api/guide/how-to-start/how-to-start_20240802_155249.png)

3. All extensions are pre-configured within the SDK and saved in their corresponding configuration files, and you don't need to do any additional configuration on them unless you understand what you're doing.

## Build the First EasyEDA Professional Extension

### I. List of Files

The SDK comes pre-configured with all the necessary components of the development environment, so you can refer to the following list of files to see what each one does:

```
├───.husky              Auto Script Directory
├───.vscode             VS Code Configuration File Directory
│   ├───extensions.json Recommended Extensions
│   └───settings.json   Extension Configuration
├───build               Extension Pack Compilation Directory
│   ├───dist            Extension Pack Compilation Result Directory
│   └───packaged.ts     Compile Scripts
├───config              ESBuild Configuration Directory
├───dist                Compilation Results Directory
├───iframe              IFrame Inline Frame Directory
├───images              Extension Preview Image Directory
│   ├───banner.png      Extension Banner Image
│   └───logo.png        Extension Logo Image
├───locales             Extended Multilingual Directory
│   ├───en.json         English Language Translation File
│   └───zh-Hans.json    Simplified Chinese Language Translation File
├───node_modules        NPM Dependency Module Directory
├───src                 Extension's Main Source Code Directory
├───.edaignore          EDA Ignore File Configuration
├───.editorconfig       Editor Base Format Configuration
├───.eslintrc.js        ESLint Automatic Code Constraint Configuration
├───.gitattributes      Git Attribute Configuration
├───.gitignore          Git Ignores File Configuration
├───.prettierignore     Prettier Ignores File Configuration
├───.prettierrc.js      Prettier Auto Format Configuration
├───LICENSE             Open Source License
├───README.md           Project Introduction
├───extension.json      EasyEDA Professional Extension Configuration
├───package.json        NPM Package Configuration
├───package-lock.json   NPM Package Dependency Locking Configuration
└───tsconfig.json       TypeScript Compilation Configuration
```

### II. Extension Configuration

EasyEDA Professional has a custom configuration file, i.e. `extension.json` file in the root directory of the SDK, the contents of which will be fully read by EasyEDA Professional and will be shown in the display and running process of the extension package, the following is the default contents of this file:

<<< @/private/pro-api-sdk/extension.json{2,4-5,7,11 json}

Now, we only need to change a few of the key values:

| Property    | Type     | Example                                                 | Description                                                                                 |
| ----------- | -------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| name        | `string` | `run-api-gateway`                                       | Extension name. It can only contain lowercase English letters `a-z`, digits `0-9`, and hyphens `-`, and must be `5-30` characters long. |
| displayName | `string` | `Run API Gateway`                                       | Display name. It can be in Chinese.                                                        |
| description | `string` | `Provides WebSocket gateway bridging for AI coding tools` | Description.                                                                                |
| publisher   | `string` | `JLCEDA`                                                | Developer information.                                                                      |
| license     | `string` | `Apache-2.0`                                            | Open-source licensing terms. It is recommended to go to [Choose a License](https://choosealicense.com/) to select the appropriate open source license for your project. |

### III. Initialization Environment

Initializing the environment and starting the build are very simple single commands, in order to execute these commands you first need to start a VS Code terminal:

![New VS Code Terminal](/storage/images/en/api/guide/how-to-start/how-to-start_20240802_155359.png)

The terminal will appear below by default, and you can execute all the next commands from within the terminal. Now, we need to initialize the environment for the SDK project, including installing all the dependent libraries, initializing the runtime hooks, and more things that can be automated, and you'll need to execute the following commands from within the terminal:

```shell
npm install
```

::: tip

If you encounter an error like this:

```
File C:\example.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
```

You need to run the following command in PowerShell with administrator privileges:

```powershell
Set-ExecutionPolicy RemoteSigned
```

This changes the execution policy to allow script execution. It is required to run NPM via Node.js on the device, but be aware that changing the execution policy may affect the security of the system.

If you are developing within an organization, you may need to consult your IT department, because the organization may have its own security policies.

:::

### IV. Modify the Code File

In the default environment provided by the SDK, your entry code file is `/src/index.ts`.

If the file has the same suffix, we highly recommend and support writing EasyEDA Pro extensions in TypeScript by default, relying on the type system provided by TypeScript and our [pro-api-types](https://www.npmjs.com/package/@jlceda/pro-api-types) type definition file, you can easily get complete support for type inference and syntax hints.

::: info

If you still want to code in native JavaScript, you can rename `/src/index.ts` to `/src/index.js` and remove anything inside that doesn't conform to JavaScript syntax.

:::

### V. Build

After each code change, you should perform a build to get the latest extension package, and you may need to change the version number within the `extension.json` file before doing the build:

| Property | Type     | Description                                      |
| -------- | -------- | ------------------------------------------------ |
| version  | `string` | Semantic version number in `major.minor.patch` format |

Then, execute the following command in the terminal to build the extension package:

```shell
npm run build
```

The extension packages you build will be generated in the `/build/dist/` directory.

::: tip

The build will read the `.edaignore` file in the root directory, which controls what will be excluded from the package at build time, and has the same syntax as `.gitignore`.

:::

## Import Extensions to EasyEDA Pro

The import operation currently has a different location:

### EasyEDA Pro V2

**Top Menu Bar** -\> **Settings** -\> **Extensions** -\> **Extension Manager...** -\> **Import Extensions**

![](/storage/images/cn/api/guide/how-to-start/how-to-start_20260209_133454.png)

Import the `.eext` file you generated in the `/build/dist/` directory during the last build.

### EasyEDA Pro V3

**Top Menu Bar** -\> **Advanced** -\> **Extension Manager...** -\> **Import**

![](/storage/images/cn/api/guide/how-to-start/how-to-start_20260209_133418.png)

Import the `.eext` file you generated in the `/build/dist/` directory during the last build.

<script setup>
    import { onMounted } from 'vue'
    onMounted(() => {
        document.getElementById('generatedUuid').innerHTML = crypto.randomUUID().replaceAll('-', '');
    })
</script>
