# DMT\_EditorControl class

Document tree / Editor control class

## Signature

```typescript
class DMT_EditorControl
```

## Remarks

Here the editor control is based on the sheets under the currently open engineering design. Any other `documentUuid` will be considered a non-existent document page

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[activateDocument(tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Activate a document

</td></tr>
<tr><td>

[activateSplitScreen(splitScreenId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Activate a split screen

</td></tr>
<tr><td>

[closeDocument(tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Close document

</td></tr>
<tr><td>

[createSplitScreen(splitScreenType, tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Create Split screen

</td></tr>
<tr><td>

[generateIndicatorMarkers(markers, color, lineWidth, zoom, tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Generate indicator markers

</td></tr>
<tr><td>

[getCurrentRenderedAreaImage(tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Get the canvas rendering region image

</td></tr>
<tr><td>

[getSplitScreenIdByTabId(tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Use tab ID get split screen ID

</td></tr>
<tr><td>

[getSplitScreenTree()](./DMT_EditorControl.md)

</td><td>

</td><td>

Get the editor split screen property tree

</td></tr>
<tr><td>

[getTabsBySplitScreenId(splitScreenId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Get all tabs under the specified split screen ID

</td></tr>
<tr><td>

[mergeAllDocumentFromSplitScreen()](./DMT_EditorControl.md)

</td><td>

</td><td>

Merge all split screens

</td></tr>
<tr><td>

[moveDocumentToSplitScreen(tabId, splitScreenId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Move a document to the specified split screen

</td></tr>
<tr><td>

[openDocument(documentUuid, splitScreenId)](./DMT_EditorControl.md)

</td><td>

</td><td>

Open document

</td></tr>
<tr><td>

[openLibraryDocument(libraryUuid, libraryType, uuid, splitScreenId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Open library symbol, footprint document

</td></tr>
<tr><td>

[removeIndicatorMarkers(tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Remove indicator markers

</td></tr>
<tr><td>

[tileAllDocumentToSplitScreen()](./DMT_EditorControl.md)

</td><td>

</td><td>

Tile all documents

</td></tr>
<tr><td>

[zoomTo(x, y, scaleRatio, tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Zoom to coordinates

</td></tr>
<tr><td>

[zoomToAllPrimitives(tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Zoom to all primitives (fit all)

</td></tr>
<tr><td>

[zoomToRegion(left, right, top, bottom, tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Zoom to region

</td></tr>
<tr><td>

[zoomToSelectedPrimitives(tabId)](./DMT_EditorControl.md)

</td><td>

</td><td>

**_(BETA)_** Zoom to the selected primitives (fit selection)

</td></tr>
</tbody></table>

---

## 方法详情

### activatedocument

# DMT\_EditorControl.activateDocument() method

Activate a document

## Signature

```typescript
function activateDocument(tabId: string): Promise<boolean>;
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

tabId

</td><td>

string

</td><td>

Tab ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Switch to the tab of the specified document and place the input focus in it

## Example

```javascript
// 1. 先后打开原理图页与 PCB，此时焦点在最后打开的 PCB 上
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();
const tabSch = await eda.dmt_EditorControl.openDocument(pages[0].uuid);
await eda.dmt_EditorControl.openDocument(pcbs[0].uuid);

// 2. 激活原理图标签页（真实切换回原理图画布）
const activated = await eda.dmt_EditorControl.activateDocument(tabSch);
console.log('activated:', activated);
```

### activatesplitscreen

# DMT\_EditorControl.activateSplitScreen() method

Activate a split screen

## Signature

```typescript
function activateSplitScreen(splitScreenId: string): Promise<boolean>;
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

splitScreenId

</td><td>

string

</td><td>

Split screen ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Give input focus

## Example

```javascript
// 1. 归一化布局后打开两个文档，并拆出一个新分屏
await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);
const tabPcb = await eda.dmt_EditorControl.openDocument(pcbs[0].uuid);
const split = await eda.dmt_EditorControl.createSplitScreen('vertical', tabPcb);

// 2. 激活新分屏（输入焦点移到该分屏）
const activated = await eda.dmt_EditorControl.activateSplitScreen(split.newSplitScreenId);
console.log('activated:', activated);

// 3. 合并所有分屏，恢复单屏布局
const merged = await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
console.log('merged:', merged);
```

### closedocument

# DMT\_EditorControl.closeDocument() method

Close document

## Signature

```typescript
function closeDocument(tabId: string): Promise<boolean>;
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

tabId

</td><td>

string

</td><td>

Tab ID. Here [IDMT\_SchematicPageItem.uuid](../interfaces/IDMT_SchematicPageItem.md)<!-- -->, [IDMT\_PcbItem.uuid](../interfaces/IDMT_PcbItem.md)<!-- -->, and [IDMT\_PanelItem.uuid](../interfaces/IDMT_PanelItem.md) are supported as input

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

If the document has not been saved, executing this operation will directly lose all unsaved data. After completing modification operations, first execute [SCH\_Document.save()](./SCH_Document.md)<!-- -->, [PCB\_Document.save()](./PCB_Document.md)<!-- -->, and [PNL\_Document.save()](./PNL_Document.md) to save the data

## Example

```javascript
// 1. 创建临时原理图并给它加一页（新建的原理图没有页面，需显式创建）
const schematicUuid = await eda.dmt_Schematic.createSchematic('嘉立创示例_关闭文档');
const pageUuid = await eda.dmt_Schematic.createSchematicPage(schematicUuid);

// 2. 打开该页面作为关闭目标
const tabId = await eda.dmt_EditorControl.openDocument(pageUuid);
console.log('opened tab:', tabId);

// 3. 关闭该标签页（空白文档，无未保存内容）
const closed = await eda.dmt_EditorControl.closeDocument(tabId);
console.log('closed:', closed);

// 4. 删除临时原理图，保持工程整洁
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### createsplitscreen

# DMT\_EditorControl.createSplitScreen() method

Create Split screen

## Signature

```typescript
function createSplitScreen(
	splitScreenType: EDMT_EditorSplitScreenDirection,
	tabId: string,
): Promise<{ sourceSplitScreenId: string; newSplitScreenId: string } | undefined>;
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

splitScreenType

</td><td>

[EDMT\_EditorSplitScreenDirection](../enums/EDMT_EditorSplitScreenDirection.md)

</td><td>

Split screen type, `horizontal` horizontal, `vertical` vertical

</td></tr>
<tr><td>

tabId

</td><td>

string

</td><td>

Tab ID. This tab will be moved into the new split screen

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ sourceSplitScreenId: string; newSplitScreenId: string } \| undefined&gt;

Split screen ID. `sourceSplitScreenId` represents the source split screen, and `newSplitScreenId` represents the new split screen

## Remarks

Please make sure the split screen corresponding to [tabId](./DMT_EditorControl.md) has more than two tabs; otherwise the split screen will not be executed and `undefined` will be returned

## Example

```javascript
// 1. 归一化布局：先合并既有分屏，保证两个标签页落在同一分屏
await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();

// 2. 打开两个文档，让当前分屏持有两个标签页
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);
const tabPcb = await eda.dmt_EditorControl.openDocument(pcbs[0].uuid);

// 3. 把 PCB 标签页拆到一个新的水平分屏
const split = await eda.dmt_EditorControl.createSplitScreen('horizontal', tabPcb);
console.log('source split:', split?.sourceSplitScreenId);
console.log('new split:', split?.newSplitScreenId);

// 4. 回读新分屏的标签页，确认 PCB 已在其中
const tabs = await eda.dmt_EditorControl.getTabsBySplitScreenId(split.newSplitScreenId);
console.log('tabs in new split:', tabs.map(t => t.title));

// 5. 合并所有分屏，恢复单屏布局
const merged = await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
console.log('merged:', merged);
```

### generateindicatormarkers

# DMT\_EditorControl.generateIndicatorMarkers() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Generate indicator markers

## Signature

```typescript
function generateIndicatorMarkers(
	markers: Array<IDMT_IndicatorMarkerShape>,
	color?: { r: number; g: number; b: number; alpha: number },
	lineWidth?: number,
	zoom?: boolean,
	tabId?: string,
): Promise<boolean>;
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

markers

</td><td>

Array&lt;[IDMT\_IndicatorMarkerShape](../interfaces/IDMT_IndicatorMarkerShape.md)<!-- -->&gt;

</td><td>

Array of indicator marker shape objects

</td></tr>
<tr><td>

color

</td><td>

\{ r: number; g: number; b: number; alpha: number \}

</td><td>

_(Optional)_ Indicator marker color

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_(Optional)_ Line width

</td></tr>
<tr><td>

zoom

</td><td>

boolean

</td><td>

_(Optional)_ Whether to locate and zoom

</td></tr>
<tr><td>

tabId

</td><td>

string

</td><td>

_(Optional)_ Tab ID. If not passed in, the canvas with the last input focus will be used

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the indicator markers were generated successfully, `false` indicates that the canvas does not support this operation or `tabId` does not exist

## Remarks

In the indicator marker shape data, the coordinate unit span of the schematic and symbol canvases is 0.01inch, and that of the PCB and footprint canvases is mil

## Example

```javascript
// 1. 打开一个原理图页，确定标记作用的画布
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 生成一组标记：点 + 圆 + 矩形（原理图画布坐标单位 0.01inch）
const generated = await eda.dmt_EditorControl.generateIndicatorMarkers(
	[
		{ type: 'point', x: 100, y: 100 },
		{ type: 'circle', x: 250, y: 150, r: 50 },
		{ type: 'rectangle', left: 350, right: 550, top: 100, bottom: 250 },
	],
	{ r: 255, g: 60, b: 60, alpha: 1 }, // 标记颜色
	2, // 线宽
	false, // 不自动缩放定位到标记
	tabId,
);
console.log('generated:', generated);

// 3. 用完即清，保持画布干净
const removed = await eda.dmt_EditorControl.removeIndicatorMarkers(tabId);
console.log('removed:', removed);
```

### getcurrentrenderedareaimage

# DMT\_EditorControl.getCurrentRenderedAreaImage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the canvas rendering region image

## Signature

```typescript
function getCurrentRenderedAreaImage(tabId?: string): Promise<Blob | undefined>;
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

tabId

</td><td>

string

</td><td>

_(Optional)_ Tab ID. If not passed in, the canvas with the last input focus will be obtained

</td></tr>
</tbody></table>

## Returns

Promise&lt;Blob \| undefined&gt;

- Blob-format image data of the canvas rendering region

## Example

```javascript
// 1. 打开一个原理图页，确定截图的画布
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 获取该画布当前渲染区域的图像
const image = await eda.dmt_EditorControl.getCurrentRenderedAreaImage(tabId);

// 3. 读取 Blob 的基本信息（字节数与 MIME 类型）
console.log('isBlob:', image instanceof Blob);
console.log('size:', image.size);
console.log('mimeType:', image.type);
```

### getsplitscreenidbytabid

# DMT\_EditorControl.getSplitScreenIdByTabId() method

Use tab ID get split screen ID

## Signature

```typescript
function getSplitScreenIdByTabId(tabId: string): Promise<string | undefined>;
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

tabId

</td><td>

string

</td><td>

Tab ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

Split screen ID

## Example

```javascript
// 1. 打开一个原理图页，拿到它的标签页 ID
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 查询该标签页所在的分屏
const splitScreenId = await eda.dmt_EditorControl.getSplitScreenIdByTabId(tabId);
console.log('tabId:', tabId);
console.log('splitScreenId:', splitScreenId);
```

### getsplitscreentree

# DMT\_EditorControl.getSplitScreenTree() method

Get the editor split screen property tree

## Signature

```typescript
function getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_EditorSplitScreenItem](../interfaces/IDMT_EditorSplitScreenItem.md) \| undefined&gt;

The editor split screen property tree. If it is `undefined`<!-- -->, the data retrieval failed

## Example

```javascript
// 1. 打开一个原理图页，保证分屏树里有标签页可读
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 读取分屏树
const tree = await eda.dmt_EditorControl.getSplitScreenTree();

// 3. 递归遍历，收集所有分屏 ID 与标签页标题
const splitIds = [];
const tabTitles = [];
(function walk(node) {
	splitIds.push(node.id);
	if (node.tabs)
		tabTitles.push(...node.tabs.map(t => t.title));
	(node.children || []).forEach(walk);
})(tree);
console.log('split count:', splitIds.length);
console.log('tab titles:', tabTitles);
```

### gettabsbysplitscreenid

# DMT\_EditorControl.getTabsBySplitScreenId() method

Get all tabs under the specified split screen ID

## Signature

```typescript
function getTabsBySplitScreenId(splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>;
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

splitScreenId

</td><td>

string

</td><td>

Split screen ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IDMT\_EditorTabItem](../interfaces/IDMT_EditorTabItem.md)<!-- -->&gt;&gt;

Tab list

## Remarks

If there are no direct tabs under the specified split screen (that is, it still has [children](../interfaces/IDMT_EditorSplitScreenItem.md) under it), an empty array will be returned

## Example

```javascript
// 1. 打开一个原理图页并读取分屏树，定位一个直接持有标签页的分屏
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);
const tree = await eda.dmt_EditorControl.getSplitScreenTree();
let leaf = null;
(function find(node) {
	if (node.tabs?.length) { leaf = node; return; }
	(node.children || []).forEach(find);
})(tree);

// 2. 查询该分屏下的所有标签页
const tabs = await eda.dmt_EditorControl.getTabsBySplitScreenId(leaf.id);
console.log('splitScreenId:', leaf.id);
console.log('tab count:', tabs.length);
console.log('titles:', tabs.map(t => t.title));
```

### mergealldocumentfromsplitscreen

# DMT\_EditorControl.mergeAllDocumentFromSplitScreen() method

Merge all split screens

## Signature

```typescript
function mergeAllDocumentFromSplitScreen(): Promise<boolean>;
```

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Only available when child split screens exist. It will cancel all child split screens and merge all document tabs into the initial split screen

## Example

```javascript
// 1. 制造"存在子分屏"的前提：归一化布局后打开两个文档并拆出一个分屏
await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);
const tabPcb = await eda.dmt_EditorControl.openDocument(pcbs[0].uuid);
await eda.dmt_EditorControl.createSplitScreen('vertical', tabPcb);

// 2. 合并所有分屏，标签页全部回到初始分屏
const merged = await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
console.log('merged:', merged);

// 3. 回读分屏树，确认已无子分屏
const tree = await eda.dmt_EditorControl.getSplitScreenTree();
console.log('child splits left:', tree.children?.length ?? 0);
```

### movedocumenttosplitscreen

# DMT\_EditorControl.moveDocumentToSplitScreen() method

Move a document to the specified split screen

## Signature

```typescript
function moveDocumentToSplitScreen(tabId: string, splitScreenId: string): Promise<boolean>;
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

tabId

</td><td>

string

</td><td>

Tab ID

</td></tr>
<tr><td>

splitScreenId

</td><td>

string

</td><td>

[Split screen ID](../interfaces/IDMT_EditorSplitScreenItem.md)

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

After moving the document, the editor split screen property tree may change

## Example

```javascript
// 1. 归一化布局后打开两个文档，把 PCB 拆到新分屏
await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);
const tabPcb = await eda.dmt_EditorControl.openDocument(pcbs[0].uuid);
const split = await eda.dmt_EditorControl.createSplitScreen('vertical', tabPcb);

// 2. 把 PCB 标签页移回源分屏
const moved = await eda.dmt_EditorControl.moveDocumentToSplitScreen(tabPcb, split.sourceSplitScreenId);
console.log('moved:', moved);

// 3. 回读源分屏标签页，确认两个标签页又同处一个分屏
const tabs = await eda.dmt_EditorControl.getTabsBySplitScreenId(split.sourceSplitScreenId);
console.log('source split tabs:', tabs.map(t => t.title));

// 4. 清理：合并残余分屏，恢复单屏布局
const mergedBack = await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
console.log('mergedBack:', mergedBack);
```

### opendocument

# DMT\_EditorControl.openDocument() method

Open document

## Signature

```typescript
function openDocument(documentUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

documentUuid

</td><td>

string

</td><td>

Document UUID. Here [IDMT\_SchematicItem.uuid](../interfaces/IDMT_SchematicItem.md)<!-- -->, [IDMT\_SchematicPageItem.uuid](../interfaces/IDMT_SchematicPageItem.md)<!-- -->, [IDMT\_PcbItem.uuid](../interfaces/IDMT_PcbItem.md)<!-- -->, and [IDMT\_PanelItem.uuid](../interfaces/IDMT_PanelItem.md) are supported as input

</td></tr>
<tr><td>

splitScreenId

</td><td>

string

</td><td>

_(Optional)_ Split screen ID, which is the [IDMT\_EditorSplitScreenItem.id](../interfaces/IDMT_EditorSplitScreenItem.md) obtained by the [DMT\_EditorControl.getSplitScreenTree()](./DMT_EditorControl.md) method

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

Tab ID, if it is `undefined`<!-- -->, then open document failed

## Example

```javascript
// 1. 取工程里第一个原理图页作为打开目标
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
console.log('target:', pages[0].name);

// 2. 打开该页面，返回标签页 ID
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);
console.log('tabId:', tabId);
```

### openlibrarydocument

# DMT\_EditorControl.openLibraryDocument() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open library symbol, footprint document

## Signature

```typescript
function openLibraryDocument(
	libraryUuid: string,
	libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT,
	uuid: string,
	splitScreenId?: string,
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

libraryUuid

</td><td>

string

</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in

</td></tr>
<tr><td>

libraryType

</td><td>

[ELIB\_LibraryType.SYMBOL](../enums/ELIB_LibraryType.md) \| [ELIB\_LibraryType.FOOTPRINT](../enums/ELIB_LibraryType.md)

</td><td>

Library type, support symbol and footprint

</td></tr>
<tr><td>

uuid

</td><td>

string

</td><td>

Symbol, footprint UUID

</td></tr>
<tr><td>

splitScreenId

</td><td>

string

</td><td>

_(Optional)_ Split screen ID, which is the [IDMT\_EditorSplitScreenItem.id](../interfaces/IDMT_EditorSplitScreenItem.md) obtained by the [DMT\_EditorControl.getSplitScreenTree()](./DMT_EditorControl.md) method

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

Tab ID, if it is `undefined`<!-- -->, then open document failed

## Example

```javascript
// 1. 搜索库符号，拿到其所在库 UUID 与符号 UUID
const results = await eda.lib_Symbol.search('0603');
console.log('symbol:', results[0].name);

// 2. 打开该符号的编辑画布，返回标签页 ID（'2' = ELIB_LibraryType.SYMBOL）
const tabId = await eda.dmt_EditorControl.openLibraryDocument(results[0].libraryUuid, '2', results[0].uuid);
console.log('tabId:', tabId);

// 3. 看完关闭标签页
const closed = await eda.dmt_EditorControl.closeDocument(tabId);
console.log('closed:', closed);
```

### removeindicatormarkers

# DMT\_EditorControl.removeIndicatorMarkers() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Remove indicator markers

## Signature

```typescript
function removeIndicatorMarkers(tabId?: string): Promise<boolean>;
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

tabId

</td><td>

string

</td><td>

_(Optional)_ Tab ID. If not passed in, the canvas with the last input focus will be used

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the indicator markers were removed successfully, `false` indicates that the canvas does not support this operation or `tabId` does not exist

## Remarks

This API will remove all generated indicator markers

## Example

```javascript
// 1. 打开一个原理图页，并先生成一个指示标记作为清理对象
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);
const generated = await eda.dmt_EditorControl.generateIndicatorMarkers(
	[{ type: 'circle', x: 150, y: 150, r: 60 }],
	{ r: 0, g: 128, b: 255, alpha: 1 },
	2,
	false,
	tabId,
);
console.log('generated:', generated);

// 2. 移除该画布上全部指示标记
const removed = await eda.dmt_EditorControl.removeIndicatorMarkers(tabId);
console.log('removed:', removed);
```

### tilealldocumenttosplitscreen

# DMT\_EditorControl.tileAllDocumentToSplitScreen() method

Tile all documents

## Signature

```typescript
function tileAllDocumentToSplitScreen(): Promise<boolean>;
```

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Only available when no child split screens exist. It will automatically create split screens for all opened document tabs

## Example

```javascript
// 1. 归一化布局：先合并既有子分屏，满足"无子分屏"前提
await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();

// 2. 打开两个文档，给平铺提供素材
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);
await eda.dmt_EditorControl.openDocument(pcbs[0].uuid);

// 3. 平铺：每个标签页各占一个分屏
const tiled = await eda.dmt_EditorControl.tileAllDocumentToSplitScreen();
console.log('tiled:', tiled);

// 4. 合并所有分屏，恢复单屏布局
const merged = await eda.dmt_EditorControl.mergeAllDocumentFromSplitScreen();
console.log('merged:', merged);
```

### zoomto

# DMT\_EditorControl.zoomTo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Zoom to coordinates

## Signature

```typescript
function zoomTo(
	x?: number,
	y?: number,
	scaleRatio?: number,
	tabId?: string,
): Promise<{ left: number; right: number; top: number; bottom: number } | false>;
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

x

</td><td>

number

</td><td>

_(Optional)_ Center X coordinate. If not passed in, the current X coordinate will not be changed

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

_(Optional)_ Center Y coordinate. If not passed in, the current Y coordinate will not be changed

</td></tr>
<tr><td>

scaleRatio

</td><td>

number

</td><td>

_(Optional)_ Zoom ratio. If not passed in, the current zoom ratio will not be changed. The unit span is `1/100`<!-- -->. If `200` is passed in, it means a zoom ratio of `200%`

</td></tr>
<tr><td>

tabId

</td><td>

string

</td><td>

_(Optional)_ Tab ID. If not passed in, the canvas with the last input focus will be used

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ left: number; right: number; top: number; bottom: number } \| false&gt;

Region data after zooming. `false` indicates that the canvas does not support the zoom operation or the `tabId` does not exist

## Remarks

In the schematic and symbol canvases, the coordinate unit span is 0.01inch; in the PCB and footprint canvases, it is mil

## Example

```javascript
// 1. 打开一个原理图页，确定缩放的画布
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 视口中心移到 (100, 100)，缩放比 200%（单位跨度 1/100）
const bounds = await eda.dmt_EditorControl.zoomTo(100, 100, 200, tabId);
console.log('bounds:', bounds);
```

### zoomtoallprimitives

# DMT\_EditorControl.zoomToAllPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Zoom to all primitives (fit all)

## Signature

```typescript
function zoomToAllPrimitives(
	tabId?: string,
): Promise<{ left: number; right: number; top: number; bottom: number } | false>;
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

tabId

</td><td>

string

</td><td>

_(Optional)_ Tab ID. If not passed in, the canvas with the last input focus will be used

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ left: number; right: number; top: number; bottom: number } \| false&gt;

Region data after zooming. `false` indicates that the canvas does not support the zoom operation or the `tabId` does not exist

## Remarks

In the returned data, the coordinate unit span of the schematic and symbol canvases is 0.01inch, and that of the PCB and footprint canvases is mil

## Example

```javascript
// 1. 打开一个原理图页，确定缩放的画布
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 适应全部图元，返回缩放后的可视区域边界
const bounds = await eda.dmt_EditorControl.zoomToAllPrimitives(tabId);
console.log('bounds:', bounds);
```

### zoomtoregion

# DMT\_EditorControl.zoomToRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Zoom to region

## Signature

```typescript
function zoomToRegion(
	left: number,
	right: number,
	top: number,
	bottom: number,
	tabId?: string,
): Promise<boolean>;
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

left

</td><td>

number

</td><td>

First X coordinate of the rectangle

</td></tr>
<tr><td>

right

</td><td>

number

</td><td>

Second X coordinate of the rectangle

</td></tr>
<tr><td>

top

</td><td>

number

</td><td>

First Y coordinate of the rectangle

</td></tr>
<tr><td>

bottom

</td><td>

number

</td><td>

Second Y coordinate of the rectangle

</td></tr>
<tr><td>

tabId

</td><td>

string

</td><td>

_(Optional)_ Tab ID. If not passed in, the canvas with the last input focus will be used

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

In the schematic and symbol canvases, the coordinate unit span is 0.01inch; in the PCB and footprint canvases, it is mil

## Example

```javascript
// 1. 打开一个原理图页，确定缩放的画布
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 缩放到 (0,0)-(400,300) 的矩形区域
const zoomed = await eda.dmt_EditorControl.zoomToRegion(0, 400, 0, 300, tabId);
console.log('zoomed:', zoomed);
```

### zoomtoselectedprimitives

# DMT\_EditorControl.zoomToSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Zoom to the selected primitives (fit selection)

## Signature

```typescript
function zoomToSelectedPrimitives(
	tabId?: string,
): Promise<{ left: number; right: number; top: number; bottom: number } | false>;
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

tabId

</td><td>

string

</td><td>

_(Optional)_ Tab ID. If not passed in, the canvas with the last input focus will be used

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ left: number; right: number; top: number; bottom: number } \| false&gt;

Region data after zooming. `false` indicates that the canvas does not support the zoom operation or the `tabId` does not exist

## Remarks

In the returned data, the coordinate unit span of the schematic and symbol canvases is 0.01inch, and that of the PCB and footprint canvases is mil

## Example

```javascript
// 1. 打开原理图页，创建一个文本图元作为选中目标
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const tabId = await eda.dmt_EditorControl.openDocument(pages[0].uuid);
const text = await eda.sch_PrimitiveText.create(100, 80, '嘉立创示例_缩放目标');

// 2. 以图元 ID 建立选中状态
const selected = await eda.sch_SelectControl.doSelectPrimitives([text.getState_PrimitiveId()]);
console.log('selected:', selected);

// 3. 缩放到选中的图元，返回可视区域边界
const bounds = await eda.dmt_EditorControl.zoomToSelectedPrimitives(tabId);
console.log('bounds:', bounds);

// 4. 清理：取消选中并删除测试图元
await eda.sch_SelectControl.clearSelected();
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);
console.log('cleaned');
```
