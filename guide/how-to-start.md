# 如何开始 <Badge type="tip" text="Intro" />

在嘉立创 EDA 专业版的扩展引擎当中，所有的扩展都是一个独立的 JavaScript 脚本，运行在其独立的作用域链下。

每个扩展都需要一个 UUID 作为扩展的唯一识别名称，这个 UUID 存在两种情况：

1. 扩展已被收录并从嘉立创 EDA 专业版扩展商店中引用，或扩展开发者已为扩展申请了 UUID 并填写了 `extension.json` 的 `uuid` 字段，此时 UUID 为自动生成的 32 位字符串，可以在该扩展对应的扩展商店页面找到它；
2. 扩展并未被收录且并未填写 `uuid` 字段，此时 UUID 为扩展开发者在 `extension.json` 中定义的 `name` 字段，请小心使用此字段作为扩展间互相依赖引用的名称，因为其随时可变且可能存在重名。

::: info
如果你使用 [pro-api-sdk](./ancillary-projects/pro-api-sdk) 进行开发，在你首次执行 `npm run build` 时，将会自动为你生成新的 UUID。

如果你希望手动搭建完整的开发环境，也可以安全地使用 <code id="generatedUuid"></code> 作为新的扩展的 UUID，这是在你访问当前页面时随机生成的。
:::

所有的用户扩展都运行在客户端本地，这意味着你可以依据 [ECMAScript Next](https://262.ecma-international.org/) 规范使用 JavaScript 语言来撰写扩展，不过需要注意的是，在主线程中，对于 DOM、外部请求、本地文件系统等浏览器 API 的调用会受到限制，针对于这部分访问的需求，我们会在扩展 API 中提供对应的预定义接口。

::: tip
嘉立创 EDA 提供了大量的扩展案例，可以查看源码并编译使用：
- 扩展源码：[https://github.com/easyeda](https://github.com/easyeda)
- 扩展广场：[https://ext.lceda.cn/](https://ext.lceda.cn/)
:::

## 开发环境

为了方便环境配置，我们提供了 [pro-api-sdk](https://gitee.com/jlceda/pro-api-sdk)，并推荐所有开发者都使用该 SDK 进行开发，本文档也将基于该 SDK 进行讲解。你可以通过以下方式获取并配置 SDK 环境：

### I. 安装 Visual Studio Code

Visual Studio Code 是新手开发最为推荐的 IDE 软件，以下将其简称为 **VSCode**，你可以在它的 [官方网站](https://code.visualstudio.com/#alt-downloads) 下载到它。

如若不理解各个版本之间的区别，请下载下图中指示的版本（Windows System Installer x64）：

![VS Code Windows System Installer x64](/storage/images/cn/api/guide/how-to-start/how-to-start_20240729_170651.png)

### II. 安装 Git

Git 是拉取 SDK 所推荐的工具，你可以在它的 [官方网站](https://git-scm.com/download) 下载到它。

在官方下载页面的右侧，点击 `Download for Windows` 即可下载：

![Git Download for Windows](/storage/images/cn/api/guide/how-to-start/how-to-start_20240729_170746.png)

### III. 安装 Node.js

Node.js 是本地编译 TypeScript 所必要的运行环境软件，你同样可以在它的 [官方网站](https://nodejs.org/en/download/prebuilt-installer) 下载到它。

官方下载页是一个引导式的交互页面，如无特殊需求，按照如下选择即可：

I want `Current` version of Node.js for `Windows` running `x64`

然后点击 `Download Node.js` 按钮下载 Node.js 安装程序。

::: warning

如果你希望使用自定义版本的 Node.js，请确定其版本不低于 `20.5.0`，这是本项目要求的最低版本。

:::

::: tip

你可以在控制台输入 `node -v` 来查看你已经安装的 Node.js 版本，如果版本低于 `20.5.0`，请按照上述步骤安装 Node.js。

:::

### IV. 拉取 SDK 仓库到本地

1. 在开始拉取之前，需要首先在自己的本地磁盘内创建一个用于保存所有开发资料的子文件夹。例如，你可以在 `D:` 盘下创建一个名为 `jlceda-extension` 的子文件夹。

    ::: warning
    请尽量不要在路径内包含 `空格` `非 ASCII 字符`，以免在后续操作中引发意外情况。
    :::

2. 创建完成后，打开 Windows PowerShell 工具（右键点击 `Windows 徽标键` 并选择 `Windows PowerShell (管理员)` 选项）。

3. 在 Windows PowerShell 内导航到刚才创建的文件夹下，本例中为 `D:\jlceda-extension` 文件夹，则执行 `cd "D:\jlceda-extension"`：

    ![PowerShell cd](/storage/images/cn/api/guide/how-to-start/how-to-start_20240729_171221.png)

    ::: tip
    此处的双引号 `""` 为英文半角字符，如果路径内包含 `空格`，则双引号不能省略。
    :::

4. 根据你所在的网络环境，执行以下命令之一：

    ::: code-group

    ```shell [Gitee]
    git clone --depth=1 https://gitee.com/jlceda/pro-api-sdk.git
    ```

    ```shell [GitHub]
    git clone --depth=1 https://github.com/easyeda/pro-api-sdk.git
    ```

    :::

### V. 获取 VS Code 扩展

1. 首先需要启动 VS Code，并在其内部打开在上一阶段拉取到的项目的文件夹（例如 `D:\jlceda-extension\pro-api-sdk`）。

    ![VS Code Open Folder](/storage/images/cn/api/guide/how-to-start/how-to-start_20240729_171717.png)

    ::: tip
    你的 VS Code 如果是全新安装的，页面显示语言将为英语，在这步操作中，你可以导航到 `File` -> `Open Folder...`。
    :::

2. 然后切换到扩展页面（快捷键 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>），在顶部搜索框搜索并安装以下应用程序：

    1. `Code Spell Checker` by Street Side Software
    2. `Prettier` by Prettier
    3. `ESLint` by Microsoft
    4. `EditorConfig for VS Code` by EditorConfig

    ![VS Code Search Extensions](/storage/images/cn/api/guide/how-to-start/how-to-start_20240729_171828.png)

3. 所有的扩展均已在 SDK 内预配并保存在其对应的配置文件内，你不需要对它们进行任何额外的配置，除非你明白自己在做些什么。

## 构建第一个嘉立创 EDA 专业版扩展

### I. 文件列表

SDK 内已经预配了开发环境所有必要的内容，你可以参考以下文件列表以了解各文件的作用：

```
├───.husky              自动脚本目录
├───.vscode             VS Code 配置文件目录
│   ├───extensions.json 推荐安装的扩展配置
│   └───settings.json   扩展配置
├───build               扩展包编译目录
│   ├───dist            扩展包编译结果目录
│   └───packaged.ts     编译脚本
├───config              ESBuild 配置目录
├───dist                扩展主代码编译结果目录
├───iframe              IFrame 内联框架目录
├───images              扩展预览图目录
│   ├───banner.png      扩展条幅展示图
│   └───logo.png        扩展 Logo 图
├───locales             扩展多语言目录
│   ├───en.json         英语语言翻译文件
│   └───zh-Hans.json    简体中文语言翻译文件
├───node_modules        NPM 依赖模块目录
├───src                 扩展主要源代码目录
├───.edaignore          EDA 忽略文件配置
├───.editorconfig       编辑器基础格式配置
├───.eslintrc.js        ESLint 自动代码约束配置
├───.gitattributes      Git 属性配置
├───.gitignore          Git 忽略文件配置
├───.prettierignore     Prettier 忽略文件配置
├───.prettierrc.js      Prettier 自动格式化配置
├───LICENSE             开源授权协议
├───README.md           项目简介
├───extension.json      嘉立创 EDA 专业版扩展配置
├───package.json        NPM 软件包配置
├───package-lock.json   NPM 软件包依赖锁定配置
└───tsconfig.json       TypeScript 编译配置
```

### II. 扩展配置文件

嘉立创 EDA 专业版扩展包拥有一个自定义配置文件，即 SDK 根目录下的 `extension.json` 文件，这里面的内容会被嘉立创 EDA 专业版完全读取并表现在具体的扩展包展示、运行过程中，以下为该文件的默认内容：

<<< @/private/pro-api-sdk/extension.json{2,4-5,7,11 json}

现在，我们仅需要修改其中的几个键值：

| 属性        | 类型     | 描述                 |
| ----------- | -------- | -------------------- |
| name        | `string` | 扩展名称             |
| displayName | `string` | 展示名称，可以为中文 |
| description | `string` | 描述                 |
| publisher   | `string` | 发布者               |
| license     | `string` | 开源授权协议         |

### III. 初始化环境

初始化环境和启动构建都是非常简单的单个指令，为了执行这些命令，你首先需要启动一个 VS Code 终端：

![New VS Code Terminal](/storage/images/cn/api/guide/how-to-start/how-to-start_20240730_141542.png)

终端默认将会出现在下方，你可以在终端内执行接下来的所有命令，现在，我们需要初始化 SDK 项目的环境，包括安装所有依赖的库、初始化运行时钩子、以及更多可以自动化完成的事情，你需要在终端执行以下命令：

```shell
npm install
```

::: tip
位于中国大陆网络环境的用户，在访问 NPM 获取软件包时可能遇到网络连接问题，可以在 `.npmrc` 内取消注释 `registry=https://registry.npmmirror.com`，以从国内镜像拉取软件包。
:::

### IV. 修改代码文件

在 SDK 所提供的默认环境下，你的入口代码文件为 `/src/index.ts`。

如该文件的后缀名一致，我们十分推荐且默认支持使用 TypeScript 编写嘉立创 EDA 专业版扩展，依赖于 TypeScript 提供的类型系统及我们发布的 [pro-api-types](https://www.npmjs.com/package/@jlceda/pro-api-types) 类型定义文件，你可以非常方便地获得完善的类型推断和语法提示支持。

::: info
如若你仍然希望使用原生 JavaScript 编写代码，你可以将 `/src/index.ts` 重命名为 `/src/index.js`，并删除内部的所有不符合 JavaScript 语法的内容。
:::

### V. 构建

每次修改代码后，你都应该执行构建操作以获得最新的扩展包，在进行构建之前，你可能需要在 `extension.json` 文件内修改版本号：

| 属性    | 类型     | 描述         |
| ------- | -------- | ------------ |
| version | `string` | 语义化版本号 |

然后，在终端执行以下命令以构建扩展包：

```shell
npm run build
```

你构建的扩展包将会生成在 `/build/dist/` 目录下。

::: tip
构建时将会读取根目录下的 `.edaignore` 文件，该文件控制了在构建时将会被排除在包外的内容，文件语法和 `.gitignore` 一致。
:::

## 导入扩展到嘉立创 EDA 专业版

导入操作在当前拥有不同的位置：

### 嘉立创 EDA 专业版 V2

**顶部菜单栏** -\> **设置** -\> **扩展** -\> **扩展管理器...** -\> **导入扩展**

![图 1](/storage/images/cn/api/guide/how-to-start/how-to-start_20260209_133454.png)

导入你在上一阶段构建时生成在 `/build/dist/` 目录下的 `.eext` 文件。

### 嘉立创 EDA 专业版 V3

**顶部菜单栏** -\> **高级** -\> **扩展管理器...** -\> **导入**

![图 0](/storage/images/cn/api/guide/how-to-start/how-to-start_20260209_133418.png)

导入你在上一阶段构建时生成在 `/build/dist/` 目录下的 `.eext` 文件。

<script setup>
    import { onMounted } from 'vue'
    onMounted(() => {
        document.getElementById('generatedUuid').innerHTML = crypto.randomUUID().replaceAll('-', '');
    })
</script>
