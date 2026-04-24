# DMT\_Workspace class

文档树 / 工作区类

## Signature

```typescript
declare class DMT_Workspace 
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

获取所有工作区的详细属性


</td></tr>
<tr><td>

[getCurrentWorkspaceInfo()](./DMT_Workspace.md)


</td><td>


</td><td>

获取当前工作区的详细属性


</td></tr>
<tr><td>

[toggleToWorkspace(workspaceUuid)](./DMT_Workspace.md)


</td><td>


</td><td>

切换到工作区


</td></tr>
</tbody></table>

---

## 方法详情

### getallworkspacesinfo

# DMT\_Workspace.getAllWorkspacesInfo() method

获取所有工作区的详细属性

## Signature

```typescript
getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_WorkspaceItem](../interfaces/IDMT_WorkspaceItem.md)<!-- -->&gt;&gt;

所有工作区的详细属性

### getcurrentworkspaceinfo

# DMT\_Workspace.getCurrentWorkspaceInfo() method

获取当前工作区的详细属性

## Signature

```typescript
getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_WorkspaceItem](../interfaces/IDMT_WorkspaceItem.md) \| undefined&gt;

工作区的详细属性，如若为 `undefined` 则获取失败

## Remarks

将会获取当前工作区的详细属性

### toggletoworkspace

# DMT\_Workspace.toggleToWorkspace() method

切换到工作区

## Signature

```typescript
toggleToWorkspace(workspaceUuid?: string): Promise<boolean>;
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

_(Optional)_ 工作区 UUID，如若不指定，则将切换到个人工作区


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

切换操作是否成功
