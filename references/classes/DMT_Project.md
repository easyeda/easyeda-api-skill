# DMT\_Project class

Document tree / Project management class

## Signature

```typescript
class DMT_Project
```

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[createProject(projectFriendlyName, projectName, teamUuid, folderUuid, description, collaborationMode, fileFormat)](./DMT_Project.md)

</td><td>

</td><td>

**_(BETA)_** Create Project

</td></tr>
<tr><td>

[getAllProjectsUuid(teamUuid, folderUuid, workspaceUuid)](./DMT_Project.md)

</td><td>

</td><td>

Get the UUIDs of all projects

</td></tr>
<tr><td>

[getCurrentProjectInfo()](./DMT_Project.md)

</td><td>

</td><td>

Get detailed properties of Current project

</td></tr>
<tr><td>

[getProjectInfo(projectUuid)](./DMT_Project.md)

</td><td>

</td><td>

Get Project property

</td></tr>
<tr><td>

[getReadyState(projectUuid)](./DMT_Project.md)

</td><td>

</td><td>

获取工程的就绪状态

</td></tr>
<tr><td>

[moveProjectToFolder(projectUuid, folderUuid)](./DMT_Project.md)

</td><td>

</td><td>

Move a project to a folder

</td></tr>
<tr><td>

[openProject(projectUuid)](./DMT_Project.md)

</td><td>

</td><td>

Open project

</td></tr>
<tr><td>

[waitForReady(projectUuid, timeoutMs)](./DMT_Project.md)

</td><td>

</td><td>

等待工程就绪

</td></tr>
</tbody></table>

---

## 方法详情

### createproject

# DMT\_Project.createProject() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Project

## Signature

```typescript
function createProject(
	projectFriendlyName: string,
	projectName?: string,
	teamUuid?: string,
	folderUuid?: string,
	description?: string,
	collaborationMode?: EDMT_ProjectCollaborationMode,
	fileFormat?: EDMT_ProjectFileFormat,
): Promise<string | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

projectFriendlyName

</td><td>

string

</td><td>

Project friendly name

</td></tr>
<tr><td>

projectName

</td><td>

string

</td><td>

_(Optional)_ Project name, which cannot be duplicated. Only letters `a-zA-Z`<!-- -->, digits `0-9`<!-- -->, and hyphens `-` are supported. If not specified, it is automatically generated based on the project friendly name

</td></tr>
<tr><td>

teamUuid

</td><td>

string

</td><td>

_(Optional)_ Team UUID. If not specified, it defaults to personal. In an environment where personal projects do not exist, a team UUID must be specified

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

_(Optional)_ Folder UUID. If not specified, it is the root folder

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_(Optional)_ Project description

</td></tr>
<tr><td>

collaborationMode

</td><td>

[EDMT\_ProjectCollaborationMode](../enums/EDMT_ProjectCollaborationMode.md)

</td><td>

_(Optional)_ Project collaboration mode. If the team permission does not require the project to set a collaboration mode, this parameter will be ignored

</td></tr>
<tr><td>

fileFormat

</td><td>

[EDMT\_ProjectFileFormat](../enums/EDMT_ProjectFileFormat.md)

</td><td>

_(Optional)_ 工程文件格式，缺省为 `EPRJ3`<!-- -->；仅在客户端半离线 / 全离线模式生效，在线环境将忽略该参数

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

Project UUID, if it is `undefined` creation fails

## Remarks

新建工程 \*\*不初始化任何文档\*\*（[getAllBoardsInfo](./DMT_Board.md) 等返回空数组）， 需显式创建 schematic / pcb / board / 首页后再使用

\*\*工程树异步更新\*\*：创建、修改、删除、复制或移动文档后读取得到旧数据时，先调用 [waitForReady](./DMT_Project.md) 等待后重试

## Example

```javascript
// 1. 创建测试工程（友好名带时间戳避免重名，名称与团队留空走默认）
const projectUuid = await eda.dmt_Project.createProject(
	`嘉立创示例_工程 ${Date.now()}`,
	undefined,
	undefined,
	undefined,
	'嘉立创示例：工程创建演示',
);

// 2. 等待工作区同步后回读，确认工程已落地
await new Promise(r => setTimeout(r, 1500));
const brief = await eda.dmt_Project.getProjectInfo(projectUuid);

const folderLabel = !brief?.folderUuid ? '(根目录)' : brief.folderUuid;

console.log('projectUuid:', projectUuid);
console.log('friendlyName:', brief?.friendlyName);
console.log('folderUuid:', folderLabel);
```

### getallprojectsuuid

# DMT\_Project.getAllProjectsUuid() method

Get the UUIDs of all projects

## Signature

```typescript
function getAllProjectsUuid(
	teamUuid?: string,
	folderUuid?: string,
	workspaceUuid?: string,
): Promise<Array<string>>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

teamUuid

</td><td>

string

</td><td>

_(Optional)_ Team UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

_(Optional)_ Folder UUID. If not specified, it defaults to the root folder of the team

</td></tr>
<tr><td>

workspaceUuid

</td><td>

string

</td><td>

_(Optional)_ Workspace UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Project UUID array

## Remarks

If `teamUuid` is specified, all projects under the specified team are obtained;

If `folderUuid` is specified, all projects under the specified folder are obtained;

`teamUuid`<!-- -->, `folderUuid` only one of them may be specified, if both are specified, only `folderUuid`<!-- -->;

If `workspaceUuid` is specified, all projects under the specified team/folder are obtained in the specified Workspace

\*\*工程树异步更新\*\*：创建、修改、删除、复制或移动文档后读取得到旧数据时，先调用 [waitForReady](./DMT_Project.md) 等待后重试

## Example

```javascript
// 1. 取当前工程所属团队
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 获取该团队下所有工程的 UUID
const projectUuids = await eda.dmt_Project.getAllProjectsUuid(teamUuid);

console.log('projectCount:', projectUuids.length);
console.log('projectUuids:', projectUuids.join(', '));
```

### getcurrentprojectinfo

# DMT\_Project.getCurrentProjectInfo() method

Get detailed properties of Current project

## Signature

```typescript
function getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_ProjectItem](../interfaces/IDMT_ProjectItem.md) \| undefined&gt;

Project property; if it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the project associated with the currently open schematic, PCB, or panel that has the last input focus

\*\*工程树异步更新\*\*：创建、修改、删除、复制或移动文档后读取得到旧数据时，先调用 [waitForReady](./DMT_Project.md) 等待后重试

### getprojectinfo

# DMT\_Project.getProjectInfo() method

Get Project property

## Signature

```typescript
function getProjectInfo(projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

projectUuid

</td><td>

string

</td><td>

Project UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IDMT\_BriefProjectItem](../interfaces/IDMT_BriefProjectItem.md) \| undefined&gt;

Brief project properties. If it is `undefined`<!-- -->, the retrieval failed

## Remarks

This API can only read brief project properties. For the detailed project tree, use the [getCurrentProjectInfo](./DMT_Project.md) API

\*\*工程树异步更新\*\*：创建、修改、删除、复制或移动文档后读取得到旧数据时，先调用 [waitForReady](./DMT_Project.md) 等待后重试

### getreadystate

# DMT\_Project.getReadyState() method

获取工程的就绪状态

## Signature

```typescript
function getReadyState(projectUuid?: string): Promise<EDMT_ProjectReadyState>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

projectUuid

</td><td>

string

</td><td>

_(Optional)_ 工程 UUID 或客户端工程文件路径，如若不指定，则默认为当前工程

</td></tr>
</tbody></table>

## Returns

Promise&lt;[EDMT\_ProjectReadyState](../enums/EDMT_ProjectReadyState.md)<!-- -->&gt;

目标工程的就绪状态

## Remarks

返回工程数据层的就绪阶段（未加载 / 加载中 / 就绪 / 失败），无需依赖业务数据推断； 不含工程树构建状态，等待工程树请使用 [waitForReady](./DMT_Project.md) ADD since EDA v4.1.79

### moveprojecttofolder

# DMT\_Project.moveProjectToFolder() method

Move a project to a folder

## Signature

```typescript
function moveProjectToFolder(projectUuid: string, folderUuid?: string): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

projectUuid

</td><td>

string

</td><td>

Project UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

_(Optional)_ Folder UUID, which can only be a folder under the team or personal space where the current project is located. If it is `undefined`<!-- -->, it is moved to the root folder of the current team

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the move is successful

## Remarks

\*\*工程树异步更新\*\*：创建、修改、删除、复制或移动文档后读取得到旧数据时，先调用 [waitForReady](./DMT_Project.md) 等待后重试

## Example

```javascript
// 1. 记录当前工程的位置，作为移动后恢复的锚点
const info = await eda.dmt_Project.getCurrentProjectInfo();
const projectUuid = info.uuid;
const teamUuid = info.teamUuid;
const originalFolderUuid = info.folderUuid; // 可能为 undefined（团队根目录）

// 2. 创建目标文件夹，等待 1.5s 让工作区同步
const targetFolderUuid = await eda.dmt_Folder.createFolder('嘉立创示例_目标文件夹', teamUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 把当前工程移到目标文件夹下
const moved = await eda.dmt_Project.moveProjectToFolder(projectUuid, targetFolderUuid);
await new Promise(r => setTimeout(r, 1000));

// 4. 回读验证工程已落到目标文件夹
const after = await eda.dmt_Project.getCurrentProjectInfo();
const folderChanged = after?.folderUuid === targetFolderUuid;

// 5. 恢复：移回原位置（原为根目录时传 undefined）
const restored = await eda.dmt_Project.moveProjectToFolder(projectUuid, originalFolderUuid);
await new Promise(r => setTimeout(r, 1000));

console.log('moved:', moved);
console.log('folderChanged:', folderChanged);
console.log('restored:', restored);
```

### openproject

# DMT\_Project.openProject() method

Open project

## Signature

```typescript
function openProject(projectUuid: string): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

projectUuid

</td><td>

string

</td><td>

Project UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether Successful open project

## Remarks

This operation will open the specified project in the EDA front end. If another project was previously opened with unsaved changes, executing this operation will directly lose all unsaved data

\*\*画布 API 前置条件\*\*：仅打开工程不会激活任何文档

调用 [SCH\_Netlist.getNetlist()](./SCH_Netlist.md)<!-- -->、[SCH\_PrimitiveComponent.getAllPrimitiveId()](./SCH_PrimitiveComponent.md)<!-- -->、<!-- -->、[PCB\_Drc](./PCB_Drc.md)<!-- -->、[PCB\_Document](./PCB_Document.md) 等画布 API 前，必须先通过 [openDocument](./DMT_EditorControl.md) 打开目标文档，并等待 [waitForDocumentReady](./DMT_EditorControl.md) 完成

Source 系列接口不要求打开文档，但仍需遵守其异步落盘时序

\*\*工程树异步更新\*\*：[openProject](./DMT_Project.md) 返回后工程树可能仍在刷新；读取列表或按名称访问得到旧数据时，先调用 [waitForReady](./DMT_Project.md) 等待后重试

## Example

```javascript
// 1. 取当前工程 UUID（打开自身，避免切换到其它工程）
const info = await eda.dmt_Project.getCurrentProjectInfo();
const projectUuid = info.uuid;

// 2. 打开该工程
const opened = await eda.dmt_Project.openProject(projectUuid);

console.log('opened:', opened);
```

### waitforready

# DMT\_Project.waitForReady() method

等待工程就绪

## Signature

```typescript
function waitForReady(projectUuid?: string, timeoutMs?: number): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

projectUuid

</td><td>

string

</td><td>

_(Optional)_ 工程 UUID 或客户端工程文件路径，如若不指定，则默认为当前工程

</td></tr>
<tr><td>

timeoutMs

</td><td>

number

</td><td>

_(Optional)_ 最长等待时间（毫秒），缺省为 60000

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

工程是否已在超时前就绪

## Remarks

阻塞等待目标工程数据加载完成，且工程树（左侧树）数据构建完成（不含界面渲染）

工程树刷新为异步过程；创建、修改、删除、复制或移动文档后读取得到旧数据时，应调用本接口等待工程树就绪后重试

接口不可用时按工程数据就绪返回；超过 `timeoutMs` 仍未就绪，或显式指定的工程不再是当前工程时返回 `false`

未指定 `projectUuid` 时以当前工程为准，工程切换过程中应显式传入目标工程 UUID  cli - 工程树相关读写得到旧数据时，先等待本接口再重试
