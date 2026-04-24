# DMT\_Project class

文档树 / 工程管理类

## Signature

```typescript
declare class DMT_Project 
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

[createProject(projectFriendlyName, projectName, teamUuid, folderUuid, description, collaborationMode)](./DMT_Project.md)


</td><td>


</td><td>

**_(BETA)_** 创建工程


</td></tr>
<tr><td>

[getAllProjectsUuid(teamUuid, folderUuid, workspaceUuid)](./DMT_Project.md)


</td><td>


</td><td>

获取所有工程的 UUID


</td></tr>
<tr><td>

[getCurrentProjectInfo()](./DMT_Project.md)


</td><td>


</td><td>

获取当前工程的详细属性


</td></tr>
<tr><td>

[getProjectInfo(projectUuid)](./DMT_Project.md)


</td><td>


</td><td>

获取工程属性


</td></tr>
<tr><td>

[moveProjectToFolder(projectUuid, folderUuid)](./DMT_Project.md)


</td><td>


</td><td>

移动工程到文件夹


</td></tr>
<tr><td>

[openProject(projectUuid)](./DMT_Project.md)


</td><td>


</td><td>

打开工程


</td></tr>
</tbody></table>

---

## 方法详情

### createproject

# DMT\_Project.createProject() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建工程

## Signature

```typescript
createProject(projectFriendlyName: string, projectName?: string, teamUuid?: string, folderUuid?: string, description?: string, collaborationMode?: EDMT_ProjectCollaborationMode): Promise<string | undefined>;
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

工程友好名称


</td></tr>
<tr><td>

projectName


</td><td>

string


</td><td>

_(Optional)_ 工程名称，不可重复，仅支持字母 `a-zA-Z`<!-- -->、数字 `0-9`<!-- -->、中划线 `-`<!-- -->，如若不指定，则根据工程友好名称自动生成


</td></tr>
<tr><td>

teamUuid


</td><td>

string


</td><td>

_(Optional)_ 团队 UUID，如若不指定，则默认为个人；在不存在个人工程的环境下必须指定团队 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

_(Optional)_ 文件夹 UUID，如若不指定，则为根文件夹


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ 工程描述


</td></tr>
<tr><td>

collaborationMode


</td><td>

[EDMT\_ProjectCollaborationMode](../enums/EDMT_ProjectCollaborationMode.md)


</td><td>

_(Optional)_ 工程协作模式，如若团队权限无需工程设置协作模式，则该参数将被忽略


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

工程 UUID，如若为 `undefined` 则创建失败

### getallprojectsuuid

# DMT\_Project.getAllProjectsUuid() method

获取所有工程的 UUID

## Signature

```typescript
getAllProjectsUuid(teamUuid?: string, folderUuid?: string, workspaceUuid?: string): Promise<Array<string>>;
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

_(Optional)_ 团队 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

_(Optional)_ 文件夹 UUID，如若不指定，则默认为团队的根文件夹


</td></tr>
<tr><td>

workspaceUuid


</td><td>

string


</td><td>

_(Optional)_ 工作区 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

工程 UUID 数组

## Remarks

如若指定 `teamUuid`<!-- -->，则获取指定团队下的所有工程；

如若指定 `folderUuid`<!-- -->，则获取指定文件夹下的所有工程；

`teamUuid`<!-- -->、`folderUuid` 需要且仅允许指定其一，如若都指定则只取 `folderUuid`<!-- -->；

如若指定 `workspaceUuid`<!-- -->，则在指定 Workspace 下获取指定团队/文件夹下的所有工程

### getcurrentprojectinfo

# DMT\_Project.getCurrentProjectInfo() method

获取当前工程的详细属性

## Signature

```typescript
getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_ProjectItem](../interfaces/IDMT_ProjectItem.md) \| undefined&gt;

工程属性，如若为 `undefined` 则获取失败

## Remarks

将会获取当前打开且拥有最后输入焦点的原理图、PCB、面板所关联的工程的详细属性

### getprojectinfo

# DMT\_Project.getProjectInfo() method

获取工程属性

## Signature

```typescript
getProjectInfo(projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>;
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

工程 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_BriefProjectItem](../interfaces/IDMT_BriefProjectItem.md) \| undefined&gt;

简略的工程属性，如若为 `undefined` 则获取失败

## Remarks

本接口只能读取简略的工程属性，如需详细的工程树，请使用 [getCurrentProjectInfo](./DMT_Project.md) 接口

### moveprojecttofolder

# DMT\_Project.moveProjectToFolder() method

移动工程到文件夹

## Signature

```typescript
moveProjectToFolder(projectUuid: string, folderUuid?: string): Promise<boolean>;
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

工程 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

_(Optional)_ 文件夹 UUID，只能为当前工程所在团队或个人下的文件夹，如若为 `undefined` 则移动到当前团队的根文件夹


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否移动成功

### openproject

# DMT\_Project.openProject() method

打开工程

## Signature

```typescript
openProject(projectUuid: string): Promise<boolean>;
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

工程 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否成功打开工程

## Remarks

本操作将会在 EDA 前端打开指定工程，如若原先已打开其它工程且有未保存的变更，执行本操作将直接丢失所有未保存的数据
