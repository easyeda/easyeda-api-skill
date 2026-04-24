# DMT\_Panel class

文档树 / 面板管理类

## Signature

```typescript
declare class DMT_Panel 
```

## Remarks

在当前打开的工程内进行面板管理的相关操作

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


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

## Signature

```typescript
copyPanel(panelUuid: string): Promise<string | undefined>;
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

panelUuid


</td><td>

string


</td><td>

源面板 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

新面板 UUID，如若为 `undefined` 则复制失败

### createpanel

# DMT\_Panel.createPanel() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建面板

## Signature

```typescript
createPanel(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

面板 UUID，如若为 `undefined` 则创建失败

### deletepanel

# DMT\_Panel.deletePanel() method

删除面板

## Signature

```typescript
deletePanel(panelUuid: string): Promise<boolean>;
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

panelUuid


</td><td>

string


</td><td>

面板 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### getallpanelsinfo

# DMT\_Panel.getAllPanelsInfo() method

获取工程内所有面板的详细属性

## Signature

```typescript
getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md)<!-- -->&gt;&gt;

所有面板的详细属性的数组

### getcurrentpanelinfo

# DMT\_Panel.getCurrentPanelInfo() method

获取当前面板的详细属性

## Signature

```typescript
getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md) \| undefined&gt;

面板的详细属性，如若为 `undefined` 则获取失败

## Remarks

将会获取当前打开且拥有最后输入焦点的面板的详细属性

### getpanelinfo

# DMT\_Panel.getPanelInfo() method

获取面板的详细属性

## Signature

```typescript
getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>;
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

panelUuid


</td><td>

string


</td><td>

面板 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md) \| undefined&gt;

面板的详细属性，如若为 `undefined` 则获取失败

### modifypanelname

# DMT\_Panel.modifyPanelName() method

修改面板名称

## Signature

```typescript
modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>;
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



## Returns

Promise&lt;boolean&gt;

是否修改成功
