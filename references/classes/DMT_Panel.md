# DMT\_Panel class

Document tree / Panel management class

## Signature

```typescript
class DMT_Panel
```

## Remarks

Operations related to panel management in the currently open project

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

Copy Panel

</td></tr>
<tr><td>

[createPanel()](./DMT_Panel.md)

</td><td>

</td><td>

**_(BETA)_** Create Panel

</td></tr>
<tr><td>

[deletePanel(panelUuid)](./DMT_Panel.md)

</td><td>

</td><td>

Delete Panel

</td></tr>
<tr><td>

[getAllPanelsInfo()](./DMT_Panel.md)

</td><td>

</td><td>

Get all in the project panel detailed properties of

</td></tr>
<tr><td>

[getCurrentPanelInfo()](./DMT_Panel.md)

</td><td>

</td><td>

Get detailed properties of Current panel

</td></tr>
<tr><td>

[getPanelInfo(panelUuid)](./DMT_Panel.md)

</td><td>

</td><td>

Get detailed properties of Panel

</td></tr>
<tr><td>

[modifyPanelName(panelUuid, panelName)](./DMT_Panel.md)

</td><td>

</td><td>

Modify Panel name

</td></tr>
</tbody></table>

---

## 方法详情

### copypanel

# DMT\_Panel.copyPanel() method

Copy Panel

## Signature

```typescript
function copyPanel(panelUuid: string): Promise<string | undefined>;
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

Source panel UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

New panel UUID. If it is `undefined`<!-- -->, the copy failed

## Example

```javascript
// 1. 创建一个专用源面板并等 1.5s 同步（复制前源面板必须已在工作区落地）
const sourceUuid = await eda.dmt_Panel.createPanel();
await new Promise(r => setTimeout(r, 1500));

// 2. 复制源面板，返回副本 UUID
const copiedUuid = await eda.dmt_Panel.copyPanel(sourceUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 回读副本，确认名称与所属工程
const copyInfo = await eda.dmt_Panel.getPanelInfo(copiedUuid);
console.log('copiedUuid:', copiedUuid);
console.log('copyName:', copyInfo?.name);

// 4. 清理本例创建的两个面板（先删副本再删源），保持工程整洁
const deletedCopy = await eda.dmt_Panel.deletePanel(copiedUuid);
console.log('deleted:', deletedCopy);
const deletedSource = await eda.dmt_Panel.deletePanel(sourceUuid);
console.log('deleted:', deletedSource);
```

### createpanel

# DMT\_Panel.createPanel() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Panel

## Signature

```typescript
function createPanel(): Promise<string | undefined>;
```

## Returns

Promise&lt;string \| undefined&gt;

Panel UUID, if it is `undefined` creation fails

## Example

```javascript
// 1. 创建面板，返回新面板 UUID
const panelUuid = await eda.dmt_Panel.createPanel();
console.log('panelUuid:', panelUuid);

// 2. 等 1.5s 让面板在工作区落地，回读确认
await new Promise(r => setTimeout(r, 1500));
const panelInfo = await eda.dmt_Panel.getPanelInfo(panelUuid);
console.log('name:', panelInfo?.name);

// 3. 删除本例创建的面板，保持工程整洁
const deleted = await eda.dmt_Panel.deletePanel(panelUuid);
console.log('deleted:', deleted);
```

### deletepanel

# DMT\_Panel.deletePanel() method

Delete Panel

## Signature

```typescript
function deletePanel(panelUuid: string): Promise<boolean>;
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

Panel UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example

```javascript
// 1. 创建专用测试面板（避免误删工程里的现有面板），等 1.5s 同步
const panelUuid = await eda.dmt_Panel.createPanel();
await new Promise(r => setTimeout(r, 1500));

// 2. 删除该面板
const deleted = await eda.dmt_Panel.deletePanel(panelUuid);
console.log('deleted:', deleted);

// 3. 回读确认已删除（返回 undefined 说明面板已不存在）
const info = await eda.dmt_Panel.getPanelInfo(panelUuid);
console.log('info after delete:', info === undefined ? '已不存在' : info.name);
```

### getallpanelsinfo

# DMT\_Panel.getAllPanelsInfo() method

Get all in the project panel detailed properties of

## Signature

```typescript
function getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>;
```

## Returns

Promise&lt;Array&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md)<!-- -->&gt;&gt;

Array of detailed properties of all panels

## Example

```javascript
// 1. 创建一个测试面板并等 1.5s 同步，保证列表里有新近创建的对象
const panelUuid = await eda.dmt_Panel.createPanel();
await new Promise(r => setTimeout(r, 1500));

// 2. 获取所有面板的详细属性
const panels = await eda.dmt_Panel.getAllPanelsInfo();

// 3. 输出每个面板的名称与 UUID，确认测试面板在列
panels.forEach((p, i) => {
	console.log(`panel[${i}]:`, p.name, p.uuid);
});
console.log('total:', panels.length);
console.log('test panel included:', panels.some(p => p.uuid === panelUuid));

// 4. 清理测试面板（查询类案例不留测试对象）
await eda.dmt_Panel.deletePanel(panelUuid);
```

### getcurrentpanelinfo

# DMT\_Panel.getCurrentPanelInfo() method

Get detailed properties of Current panel

## Signature

```typescript
function getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md) \| undefined&gt;

Panel detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the currently open panel that has the last input focus

## Example

```javascript
// 1. 创建测试面板并打开它，让焦点落到面板文档上（原理图/PCB 焦点下返回 undefined）
const panelUuid = await eda.dmt_Panel.createPanel();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(panelUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 获取当前焦点面板的详细属性
const panel = await eda.dmt_Panel.getCurrentPanelInfo();

// 3. 输出面板的名称、UUID 与所属工程
console.log('name:', panel?.name);
console.log('panelUuid:', panel?.uuid);
console.log('parentProjectUuid:', panel?.parentProjectUuid);

// 4. 清理测试面板（面板处于打开状态也可以直接删除）
await eda.dmt_Panel.deletePanel(panelUuid);
```

### getpanelinfo

# DMT\_Panel.getPanelInfo() method

Get detailed properties of Panel

## Signature

```typescript
function getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>;
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

Panel UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md) \| undefined&gt;

Panel detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Example

```javascript
// 1. 创建测试面板并等 1.5s 同步
const panelUuid = await eda.dmt_Panel.createPanel();
await new Promise(r => setTimeout(r, 1500));

// 2. 按 UUID 查询面板详细属性
const panelInfo = await eda.dmt_Panel.getPanelInfo(panelUuid);

// 3. 输出属性
console.log('name:', panelInfo?.name);
console.log('itemType:', panelInfo?.itemType);
console.log('parentProjectUuid:', panelInfo?.parentProjectUuid);

// 4. 清理测试面板（查询类案例不留测试对象）
await eda.dmt_Panel.deletePanel(panelUuid);
```

### modifypanelname

# DMT\_Panel.modifyPanelName() method

Modify Panel name

## Signature

```typescript
function modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>;
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

Panel UUID

</td></tr>
<tr><td>

panelName

</td><td>

string

</td><td>

Panel name

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether Modify Successful

## Example

```javascript
// 1. 改名目标优先用当前面板（它必然已打开），其次用列表里的现有面板，都没有时创建一个
let target = await eda.dmt_Panel.getCurrentPanelInfo();
if (!target) {
	const panels = await eda.dmt_Panel.getAllPanelsInfo();
	target = panels[0];
}
let createdHere = false;
if (!target) {
	createdHere = true;
	const uuid = await eda.dmt_Panel.createPanel();
	await new Promise(r => setTimeout(r, 1500));
	target = await eda.dmt_Panel.getPanelInfo(uuid);
}

// 2. 打开目标面板（改名只对已打开的面板生效）
await eda.dmt_EditorControl.openDocument(target.uuid);
await new Promise(r => setTimeout(r, 1000));

// 3. 修改面板名称
const newName = '嘉立创示例_面板新名称';
const renamed = await eda.dmt_Panel.modifyPanelName(target.uuid, newName);
console.log('renamed:', renamed);

// 4. 等 1s 让改名同步，回读验证（英文名可能被归一化为小写，按不区分大小写比较）
await new Promise(r => setTimeout(r, 1000));
const info = await eda.dmt_Panel.getPanelInfo(target.uuid);
console.log('renamedTo:', info?.name);
console.log('renameVerified:', (info?.name ?? '').toLowerCase() === newName.toLowerCase());

// 5. 本例创建的测试面板验证后删除清理；现有面板保留改名现场，人工验收后可改回原名
if (createdHere) {
	await eda.dmt_Panel.deletePanel(target.uuid);
}
```
