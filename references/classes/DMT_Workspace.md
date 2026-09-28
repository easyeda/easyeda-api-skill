# DMT\_Workspace class

Document tree / Workspace class

## Signature

```typescript
class DMT_Workspace
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

[getAllWorkspacesInfo()](./DMT_Workspace.md)

</td><td>

</td><td>

Get the detailed properties of all workspaces

</td></tr>
<tr><td>

[getCurrentWorkspaceInfo()](./DMT_Workspace.md)

</td><td>

</td><td>

Get the detailed properties of the current workspace

</td></tr>
<tr><td>

[toggleToWorkspace(workspaceUuid)](./DMT_Workspace.md)

</td><td>

</td><td>

Switch to workspace

</td></tr>
</tbody></table>

---

## 方法详情

### getallworkspacesinfo

# DMT\_Workspace.getAllWorkspacesInfo() method

Get the detailed properties of all workspaces

## Signature

```typescript
function getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>;
```

## Returns

Promise&lt;Array&lt;[IDMT\_WorkspaceItem](../interfaces/IDMT_WorkspaceItem.md)<!-- -->&gt;&gt;

Detailed properties of all workspaces

## Example

```javascript
// 1. 获取所有工作区
const workspaces = await eda.dmt_Workspace.getAllWorkspacesInfo();

// 2. 输出工作区数量与每个工作区的属性（name/uuid/itemType）
console.log('工作区数量：', workspaces.length);
workspaces.forEach((ws, i) => {
	console.log(`工作区${i + 1}：`, ws.name, 'uuid:', ws.uuid);
});
```

### getcurrentworkspaceinfo

# DMT\_Workspace.getCurrentWorkspaceInfo() method

Get the detailed properties of the current workspace

## Signature

```typescript
function getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_WorkspaceItem](../interfaces/IDMT_WorkspaceItem.md) \| undefined&gt;

Detailed properties of the workspace. If it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the current workspace

## Example

```javascript
// 1. 获取当前工作区属性
const workspace = await eda.dmt_Workspace.getCurrentWorkspaceInfo();

// 2. 输出当前工作区属性（uuid 可直接用作 toggleToWorkspace 的切换参数）
console.log('当前工作区名称：', workspace?.name);
console.log('当前工作区 uuid：', workspace?.uuid);
```

### toggletoworkspace

# DMT\_Workspace.toggleToWorkspace() method

Switch to workspace

## Signature

```typescript
function toggleToWorkspace(workspaceUuid?: string): Promise<boolean>;
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

workspaceUuid

</td><td>

string

</td><td>

_(Optional)_ Workspace UUID. If not specified, it will switch to the personal workspace

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the switch operation was successful

## Example

```javascript
// 1. 记录切换前的工作区（演示结束后切回，恢复现场）
const before = await eda.dmt_Workspace.getCurrentWorkspaceInfo();

// 2. 获取所有工作区，选一个非当前的作为切换目标；只有当前一个时切换自身
const workspaces = await eda.dmt_Workspace.getAllWorkspacesInfo();
const target = workspaces.find(ws => ws.uuid !== before.uuid) || before;

// 3. 切换到目标工作区
const toggled = await eda.dmt_Workspace.toggleToWorkspace(target.uuid);
console.log('切换是否成功：', toggled);

// 4. 回读当前工作区，确认已切换到目标
const now = await eda.dmt_Workspace.getCurrentWorkspaceInfo();
console.log('切换后工作区：', now.name, 'uuid:', now.uuid);

// 5. 切回原工作区，恢复现场
const restored = await eda.dmt_Workspace.toggleToWorkspace(before.uuid);
console.log('切回是否成功：', restored);
```
