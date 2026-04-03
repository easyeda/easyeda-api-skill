# DMT\_Workspace class

文档树 / 工作区类

## 签名

```typescript
declare class DMT_Workspace 
```

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

## 签名

```typescript
getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>;
```


## 返回值

Promise&lt;Array&lt;[IDMT\_WorkspaceItem](../interfaces/IDMT_WorkspaceItem.md)<!-- -->&gt;&gt;

所有工作区的详细属性

### getcurrentworkspaceinfo

# DMT\_Workspace.getCurrentWorkspaceInfo() method

获取当前工作区的详细属性

## 签名

```typescript
getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;
```


## 返回值

Promise&lt;[IDMT\_WorkspaceItem](../interfaces/IDMT_WorkspaceItem.md) \| undefined&gt;

工作区的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前工作区的详细属性

### toggletoworkspace

# DMT\_Workspace.toggleToWorkspace() method

切换到工作区

## 签名

```typescript
toggleToWorkspace(workspaceUuid?: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

workspaceUuid


</td><td>

string


</td><td>

_（可选）_ 工作区 UUID，如若不指定，则将切换到个人工作区


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

切换操作是否成功
