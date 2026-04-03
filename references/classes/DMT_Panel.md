# DMT\_Panel class

文档树 / 面板管理类

## 签名

```typescript
declare class DMT_Panel 
```

## 备注

在当前打开的工程内进行面板管理的相关操作

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[copyPanel(panelUuid)](./DMT_Panel.md)


</td><td>


</td><td>

复制面板


</td></tr>
<tr><td>

[createPanel()](./DMT_Panel.md)


</td><td>


</td><td>

**_(BETA)_** 创建面板


</td></tr>
<tr><td>

[deletePanel(panelUuid)](./DMT_Panel.md)


</td><td>


</td><td>

删除面板


</td></tr>
<tr><td>

[getAllPanelsInfo()](./DMT_Panel.md)


</td><td>


</td><td>

获取工程内所有面板的详细属性


</td></tr>
<tr><td>

[getCurrentPanelInfo()](./DMT_Panel.md)


</td><td>


</td><td>

获取当前面板的详细属性


</td></tr>
<tr><td>

[getPanelInfo(panelUuid)](./DMT_Panel.md)


</td><td>


</td><td>

获取面板的详细属性


</td></tr>
<tr><td>

[modifyPanelName(panelUuid, panelName)](./DMT_Panel.md)


</td><td>


</td><td>

修改面板名称


</td></tr>
</tbody></table>

---

## 方法详情

### copypanel

# DMT\_Panel.copyPanel() method

复制面板

## 签名

```typescript
copyPanel(panelUuid: string): Promise<string | undefined>;
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

panelUuid


</td><td>

string


</td><td>

源面板 UUID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

新面板 UUID，如若为 `undefined` 则复制失败

### createpanel

# DMT\_Panel.createPanel() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建面板

## 签名

```typescript
createPanel(): Promise<string | undefined>;
```


## 返回值

Promise&lt;string \| undefined&gt;

面板 UUID，如若为 `undefined` 则创建失败

### deletepanel

# DMT\_Panel.deletePanel() method

删除面板

## 签名

```typescript
deletePanel(panelUuid: string): Promise<boolean>;
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

panelUuid


</td><td>

string


</td><td>

面板 UUID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

### getallpanelsinfo

# DMT\_Panel.getAllPanelsInfo() method

获取工程内所有面板的详细属性

## 签名

```typescript
getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>;
```


## 返回值

Promise&lt;Array&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md)<!-- -->&gt;&gt;

所有面板的详细属性的数组

### getcurrentpanelinfo

# DMT\_Panel.getCurrentPanelInfo() method

获取当前面板的详细属性

## 签名

```typescript
getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;
```


## 返回值

Promise&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md) \| undefined&gt;

面板的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的面板的详细属性

### getpanelinfo

# DMT\_Panel.getPanelInfo() method

获取面板的详细属性

## 签名

```typescript
getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>;
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

panelUuid


</td><td>

string


</td><td>

面板 UUID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md) \| undefined&gt;

面板的详细属性，如若为 `undefined` 则获取失败

### modifypanelname

# DMT\_Panel.modifyPanelName() method

修改面板名称

## 签名

```typescript
modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>;
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

panelUuid


</td><td>

string


</td><td>

面板 UUID


</td></tr>
<tr><td>

panelName


</td><td>

string


</td><td>

面板名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

是否修改成功
