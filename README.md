# easyeda-api-skill

> 嘉立创EDA专业版 AI Skill — 让AI直接操控嘉立创EDA。EasyEDA Pro AI Skill - Enable AI to directly control EasyEDA.

[![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)](_meta.json)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](SKILL.md)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](package.json)

---

## 📑 目录 / Table of Contents

- [🇨🇳 中文版](#-中文)
- [🇬🇧 English Version](#-english)

---

# 🇨🇳 中文

嘉立创EDA专业版AI SKILL，为AI编程工具提供完整的EasyEDA Pro API接口和WebSocket桥接能力。

## ✨ 特性

- 📚 **完整API参考** — 120+ 类、62+ 枚举、70+ 接口、19+ 类型别名
- 🔌 **WebSocket桥接** — 在运行的EasyEDA Pro客户端中执行代码
- 🛠️ **代码模式** — PCB、原理图、库、项目管理的常用操作
- 🌐 **多窗口支持** — 同时连接多个EasyEDA窗口
- 🔍 **自动端口发现** — 自动扫描并连接可用端口(49620-49629)

## 📦 安装

### 方法一：直接下载

1. 下载本仓库并解压
2. 放入AI编程工具的SKILL目录

### 方法二：Git克隆

```bash
git clone https://github.com/easyeda/easyeda-api-skill.git
cd easyeda-api-skill
npm install
```

## 🚀 快速开始

### 1. 启动桥接服务

```bash
cd easyeda-api-skill
npm run server
```

桥接服务将在端口范围 49620-49629 中自动选择可用端口启动。

### 2. 安装EasyEDA扩展

在EasyEDA Pro中安装 `run-api-gateway.eext` 扩展：

👉 [下载扩展](https://ext.lceda.cn/item/oshwhub/run-api-gateway)

扩展加载后将自动连接桥接服务。

### 3. 验证连接

```bash
# 检查桥接服务状态
curl http://localhost:49620/health

# 查看已连接的EDA窗口
curl http://localhost:49620/eda-windows
```

### 4. 执行代码

```bash
curl -X POST http://localhost:49620/execute \
  -H "Content-Type: application/json" \
  -d '{"code": "return await eda.dmt_Project.getCurrentProjectInfo();"}'
```

## 🏗️ 架构

```
┌──────────┐   HTTP/WS     ┌────────────────┐   WebSocket    ┌──────────┐
│ AI Agent  │ ◄───────────► │  Bridge Server  │ ◄───────────► │  EasyEDA  │
│           │  Port Range   │  (Node.js)      │  Port Range   │  (Client) │
└──────────┘  49620-49629   └────────────────┘  49620-49629   └──────────┘
```

## 📖 文档

### API参考

完整的API文档位于 [references/](references/) 目录：

- [📑 API索引](references/_index.md) — 所有类、枚举、接口的完整列表
- [⚡ 快速参考](references/_quick-reference.md) — 所有方法签名快速查找
- [📁 类文档](references/classes/) — 120个类的详细文档
  - `DMT_*` — 文档管理 (Board, Project, Schematic, Pcb...)
  - `PCB_*` — PCB与封装操作
  - `SCH_*` — 原理图操作
  - `LIB_*` — 库管理 (Symbol, Footprint, Device...)
  - `SYS_*` — 系统功能 (Dialog, FileSystem, Message...)
- [📁 枚举文档](references/enums/) — 62个枚举
- [📁 接口文档](references/interfaces/) — 70个接口定义
- [📁 类型文档](references/types/) — 19个类型别名

### 开发指南

- [🚀 如何开始](guide/how-to-start.md)
- [📝 扩展JSON配置](guide/extension-json.md)
- [🔗 调用API](guide/invoke-apis.md)
- [🌍 国际化](guide/i18n.md)
- [⚠️ 错误处理](guide/error-handling.md)
- [🔒 稳定性](guide/stability.md)
- [🖼️ 内嵌框架](guide/inline-frame.md)
- [📦 扩展市场](guide/extensions-marketplace.md)
- [🔧 辅助项目](guide/ancillary-projects.md)

### 文件格式规范

当需要直接读写或解析嘉立创EDA工程文件时，可参考 [format/](format/) 目录中的格式文档：

- [📑 格式总览](format/index.md) — V2.2 与 V3 格式说明及基础约定
- [📁 工程格式](format/project/index.md) — 工程配置、实例属性、变体等
- [📁 原理图格式](format/schematic/index.md) — 元件、导线、引脚、文本等图元格式
- [📁 PCB格式](format/pcb/index.md) — 焊盘、过孔、走线、3D模型等图元格式

> V3格式（嘉立创EDA 3.0）采用日志增量存储，每行由两个JSON对象拼接（`||`分隔），外层用于一致性框架，内层为图元原子数据。

### 用户指南

- [📖 使用扩展](user-guide/using-extension.md)

## 💡 使用示例

### 项目操作

```javascript
// 获取当前项目信息
return await eda.dmt_Project.getCurrentProjectInfo();

// 列出所有电路板
return await eda.dmt_Board.getAllBoardsInfo();

// 创建新电路板
return await eda.dmt_Board.createBoard();
```

### PCB操作

```javascript
// 在铜膜层创建导线
await eda.pcb_PrimitiveLine.create(
  "GND",   // 网络
  1,       // 层 (顶层铜膜)
  0,       // 起点X (单位: 1mil)
  0,       // 起点Y
  1000,    // 终点X
  0,       // 终点Y
  10,      // 线宽
  false    // 是否锁定
);

// 修改图元 (异步模式)
const prim = await eda.pcb_PrimitiveComponent.get([id]);
const asyncPrim = prim.toAsync();
asyncPrim.setState_X(newX);
asyncPrim.setState_Y(newY);
asyncPrim.done();
```

### 原理图操作

```javascript
// 获取所有页面
return await eda.dmt_Schematic.getAllSchematicDocumentsInfo();

// 创建元件
await eda.sch_PrimitiveComponent.create(
  "device-uuid",  // 元件UUID
  5000,           // X坐标 (单位: 0.01inch)
  5000,           // Y坐标
  "",             // 子部件名称
  0,              // 旋转角度
  false,          // 镜像
  true,           // 加入BOM
  true            // 加入PCB
);
```

### 系统功能

```javascript
// 显示提示消息
eda.sys_Message.showToastMessage("操作完成!");

// 显示确认对话框
const confirmed = await eda.sys_Dialog.showConfirmationMessage("确认继续?");

// 运行DRC检查
const passed = await eda.pcb_Drc.check(true, true, false);
```

## ⚠️ 重要提示

### 坐标单位

**不同域使用不同的坐标单位：**

| 域 | 单位 | 换算 |
|--------|------|------------|
| **PCB** | 1mil | 1mm ≈ 39.37 units |
| **原理图** | 0.01inch (10mil) | 1mm ≈ 3.937 units |

**这是AI最常犯的错误！** 单位错误会导致元件放置位置偏差10倍。

### 文档状态

**操作前必须验证：**

1. ✅ 项目已打开 — 使用 `eda.dmt_Project.getCurrentProjectInfo()` 验证
2. ✅ 文档类型匹配 — PCB API需要活动PCB文档，SCH API需要活动原理图文档
3. ✅ 正确的文档已激活 — 使用 `eda.dmt_SelectControl.getCurrentDocumentInfo()` 检查

### 产品名称

- 中文名：**嘉立创EDA**
- 英文名：**EasyEDA**

## 🔌 相关项目

- [Run API Gateway](https://github.com/easyeda/eext-run-api-gateway) — EasyEDA扩展，用于连接桥接服务
- [extension-dev-skill](https://github.com/easyeda/extension-dev-skill) — EasyEDA扩展开发Skill
- [extension-dev-mcp-tools](https://github.com/easyeda/extension-dev-mcp-tools) — EasyEDA扩展开发MCP工具

---

# 🇬🇧 English

EasyEDA Pro AI Skill for AI programming tools, providing complete API reference and WebSocket bridge capabilities.

## ✨ Features

- 📚 **Complete API Reference** — 120+ classes, 62+ enums, 70+ interfaces, 19+ type aliases
- 🔌 **WebSocket Bridge** — Execute code in the running EasyEDA Pro client
- 🛠️ **Code Patterns** — Common operations for PCB, schematic, library, and project management
- 🌐 **Multi-Window Support** — Connect multiple EasyEDA windows simultaneously
- 🔍 **Auto Port Discovery** — Automatically scan and connect to available ports (49620-49629)

## 📦 Installation

### Method 1: Direct Download

1. Download this repository and extract
2. Place it in your AI programming tool's SKILL directory

### Method 2: Git Clone

```bash
git clone https://github.com/easyeda/easyeda-api-skill.git
cd easyeda-api-skill
npm install
```

## 🚀 Quick Start

### 1. Start Bridge Server

```bash
cd easyeda-api-skill
npm run server
```

The bridge server will automatically start on an available port in the range 49620-49629.

### 2. Install EasyEDA Extension

Install the `run-api-gateway.eext` extension in EasyEDA Pro:

👉 [Download Extension](https://ext.lceda.cn/item/oshwhub/run-api-gateway)

The extension will automatically connect to the bridge service after loading.

### 3. Verify Connection

```bash
# Check bridge service status
curl http://localhost:49620/health

# List connected EDA windows
curl http://localhost:49620/eda-windows
```

### 4. Execute Code

```bash
curl -X POST http://localhost:49620/execute \
  -H "Content-Type: application/json" \
  -d '{"code": "return await eda.dmt_Project.getCurrentProjectInfo();"}'
```

## 🏗️ Architecture

```
┌──────────┐   HTTP/WS     ┌────────────────┐   WebSocket    ┌──────────┐
│ AI Agent  │ ◄───────────► │  Bridge Server  │ ◄───────────► │  EasyEDA  │
│           │  Port Range   │  (Node.js)      │  Port Range   │  (Client) │
└──────────┘  49620-49629   └────────────────┘  49620-49629   └──────────┘
```

## 📖 Documentation

### API Reference

Complete API documentation is located in the [references/](references/) directory:

- [📑 API Index](references/_index.md) — Complete list of all classes, enums, and interfaces
- [⚡ Quick Reference](references/_quick-reference.md) — Quick lookup for all method signatures
- [📁 Class Docs](references/classes/) — Detailed documentation for 120 classes
  - `DMT_*` — Document Management (Board, Project, Schematic, Pcb...)
  - `PCB_*` — PCB & Footprint Operations
  - `SCH_*` — Schematic Operations
  - `LIB_*` — Library Management (Symbol, Footprint, Device...)
  - `SYS_*` — System Functions (Dialog, FileSystem, Message...)
- [📁 Enum Docs](references/enums/) — 62 enums
- [📁 Interface Docs](references/interfaces/) — 70 interface definitions
- [📁 Type Docs](references/types/) — 19 type aliases

### Development Guide

- [🚀 How to Start](guide/how-to-start.md)
- [📝 Extension JSON Configuration](guide/extension-json.md)
- [🔗 Invoke APIs](guide/invoke-apis.md)
- [🌍 Internationalization](guide/i18n.md)
- [⚠️ Error Handling](guide/error-handling.md)
- [🔒 Stability](guide/stability.md)
- [🖼️ Inline Frame](guide/inline-frame.md)
- [📦 Extensions Marketplace](guide/extensions-marketplace.md)
- [🔧 Ancillary Projects](guide/ancillary-projects.md)

### File Format Specifications

When you need to directly read, write, or parse EasyEDA project files, refer to the format documentation in [format/](format/):

- [📑 Format Overview](format/index.md) — V2.2 & V3 format descriptions and basic conventions
- [📁 Project Format](format/project/index.md) — Project config, instance attributes, variants, etc.
- [📁 Schematic Format](format/schematic/index.md) — Component, wire, pin, text primitives
- [📁 PCB Format](format/pcb/index.md) — Pad, via, track, 3D model primitives

> V3 format (EasyEDA 3.0) uses incremental log storage. Each line contains two JSON objects separated by `||`: outer layer for consistency framework, inner layer for primitive atomic data.

### User Guide

- [📖 Using Extensions](user-guide/using-extension.md)

## 💡 Usage Examples

### Project Operations

```javascript
// Get current project info
return await eda.dmt_Project.getCurrentProjectInfo();

// List all boards
return await eda.dmt_Board.getAllBoardsInfo();

// Create a new board
return await eda.dmt_Board.createBoard();
```

### PCB Operations

```javascript
// Create a trace on copper layer
await eda.pcb_PrimitiveLine.create(
  "GND",   // net
  1,       // layer (top copper)
  0,       // startX (unit: 1mil)
  0,       // startY
  1000,    // endX
  0,       // endY
  10,      // lineWidth
  false    // primitiveLock
);

// Modify primitive (async mode)
const prim = await eda.pcb_PrimitiveComponent.get([id]);
const asyncPrim = prim.toAsync();
asyncPrim.setState_X(newX);
asyncPrim.setState_Y(newY);
asyncPrim.done();
```

### Schematic Operations

```javascript
// Get all pages
return await eda.dmt_Schematic.getAllSchematicDocumentsInfo();

// Create a component
await eda.sch_PrimitiveComponent.create(
  "device-uuid",  // component UUID
  5000,           // X coordinate (unit: 0.01inch)
  5000,           // Y coordinate
  "",             // subPartName
  0,              // rotation
  false,          // mirror
  true,           // addIntoBom
  true            // addIntoPcb
);
```

### System Functions

```javascript
// Show toast message
eda.sys_Message.showToastMessage("Operation complete!");

// Show confirmation dialog
const confirmed = await eda.sys_Dialog.showConfirmationMessage("Proceed?");

// Run DRC check
const passed = await eda.pcb_Drc.check(true, true, false);
```

## ⚠️ Important Notes

### Coordinate Units

**Different domains use different coordinate units:**

| Domain | Unit | Conversion |
|--------|------|------------|
| **PCB** | 1mil | 1mm ≈ 39.37 units |
| **Schematic** | 0.01inch (10mil) | 1mm ≈ 3.937 units |

**This is the most common mistake made by AI!** Unit errors will cause components to be placed 10x off position.

### Document State

**Must verify before operations:**

1. ✅ Project is opened — Use `eda.dmt_Project.getCurrentProjectInfo()` to verify
2. ✅ Document type matches — PCB APIs require active PCB document, SCH APIs require active Schematic document
3. ✅ Correct document is active — Use `eda.dmt_SelectControl.getCurrentDocumentInfo()` to check

### Product Naming

- Chinese: **嘉立创EDA**
- English: **EasyEDA**

## 🔌 Related Projects

- [Run API Gateway](https://github.com/easyeda/eext-run-api-gateway) — EasyEDA extension for connecting to bridge service
- [extension-dev-skill](https://github.com/easyeda/extension-dev-skill) — EasyEDA extension development Skill
- [extension-dev-mcp-tools](https://github.com/easyeda/extension-dev-mcp-tools) — EasyEDA extension development MCP tools

---

**Version**: 1.0.3  
**Author**: JLCEDA  
**Compatibility**: Node.js 18+, EasyEDA Pro desktop client (extension support required)
