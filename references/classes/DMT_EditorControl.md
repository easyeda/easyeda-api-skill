# DMT\_EditorControl class

文档树 / 编辑器控制类

## 签名

```typescript
declare class DMT_EditorControl 
```

## 备注

此处编辑器控制基于当前已打开的工程设计下的图页，其它任何 `documentUuid` 都将被认为是不存在的文档页

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[activateDocument(tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

激活文档


</td></tr>
<tr><td>

[activateSplitScreen(splitScreenId)](./DMT_EditorControl.md)


</td><td>


</td><td>

激活分屏


</td></tr>
<tr><td>

[closeDocument(tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

关闭文档


</td></tr>
<tr><td>

[createSplitScreen(splitScreenType, tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

创建分屏


</td></tr>
<tr><td>

[generateIndicatorMarkers(markers, color, lineWidth, zoom, tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 生成指示标记


</td></tr>
<tr><td>

[getCurrentRenderedAreaImage(tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 获取画布渲染区域图像


</td></tr>
<tr><td>

[getSplitScreenIdByTabId(tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

使用标签页 ID 获取分屏 ID


</td></tr>
<tr><td>

[getSplitScreenTree()](./DMT_EditorControl.md)


</td><td>


</td><td>

获取编辑器分屏属性树


</td></tr>
<tr><td>

[getTabsBySplitScreenId(splitScreenId)](./DMT_EditorControl.md)


</td><td>


</td><td>

获取指定分屏 ID 下的所有标签页


</td></tr>
<tr><td>

[mergeAllDocumentFromSplitScreen()](./DMT_EditorControl.md)


</td><td>


</td><td>

合并所有分屏


</td></tr>
<tr><td>

[moveDocumentToSplitScreen(tabId, splitScreenId)](./DMT_EditorControl.md)


</td><td>


</td><td>

将文档移动到指定分屏


</td></tr>
<tr><td>

[openDocument(documentUuid, splitScreenId)](./DMT_EditorControl.md)


</td><td>


</td><td>

打开文档


</td></tr>
<tr><td>

[openLibraryDocument(libraryUuid, libraryType, uuid, splitScreenId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 打开库符号、封装文档


</td></tr>
<tr><td>

[removeIndicatorMarkers(tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 移除指示标记


</td></tr>
<tr><td>

[tileAllDocumentToSplitScreen()](./DMT_EditorControl.md)


</td><td>


</td><td>

平铺所有文档


</td></tr>
<tr><td>

[zoomTo(x, y, scaleRatio, tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 缩放到坐标


</td></tr>
<tr><td>

[zoomToAllPrimitives(tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 缩放到所有图元（适应全部）


</td></tr>
<tr><td>

[zoomToRegion(left, right, top, bottom, tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 缩放到区域


</td></tr>
<tr><td>

[zoomToSelectedPrimitives(tabId)](./DMT_EditorControl.md)


</td><td>


</td><td>

**_(BETA)_** 缩放到已选中图元（适应选中）


</td></tr>
</tbody></table>

---

## 方法详情

### activatedocument

# DMT\_EditorControl.activateDocument() method

激活文档

## 签名

```typescript
activateDocument(tabId: string): Promise<boolean>;
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

tabId


</td><td>

string


</td><td>

标签页 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

切换到指定文档的标签页，并将输入焦点置于其中

### activatesplitscreen

# DMT\_EditorControl.activateSplitScreen() method

激活分屏

## 签名

```typescript
activateSplitScreen(splitScreenId: string): Promise<boolean>;
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

splitScreenId


</td><td>

string


</td><td>

分屏 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

使输入焦点

### closedocument

# DMT\_EditorControl.closeDocument() method

关闭文档

## 签名

```typescript
closeDocument(tabId: string): Promise<boolean>;
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

tabId


</td><td>

string


</td><td>

标签页 ID，此处支持 [IDMT\_SchematicPageItem.uuid](../interfaces/IDMT_SchematicPageItem.md)<!-- -->、[IDMT\_PcbItem.uuid](../interfaces/IDMT_PcbItem.md)<!-- -->、[IDMT\_PanelItem.uuid](../interfaces/IDMT_PanelItem.md) 作为输入


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

如若文档尚未保存，执行此操作将会直接丢失所有未保存的数据，请在修改操作完成后首先执行 [SCH\_Document.save()](./SCH_Document.md)<!-- -->、[PCB\_Document.save()](./PCB_Document.md)<!-- -->、[PNL\_Document.save()](./PNL_Document.md) 保存数据

### createsplitscreen

# DMT\_EditorControl.createSplitScreen() method

创建分屏

## 签名

```typescript
createSplitScreen(splitScreenType: EDMT_EditorSplitScreenDirection, tabId: string): Promise<{
        sourceSplitScreenId: string;
        newSplitScreenId: string;
    } | undefined>;
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

splitScreenType


</td><td>

[EDMT\_EditorSplitScreenDirection](../enums/EDMT_EditorSplitScreenDirection.md)


</td><td>

分屏类型，`horizontal` 水平、`vertical` 垂直


</td></tr>
<tr><td>

tabId


</td><td>

string


</td><td>

标签页 ID，该标签页将会被移入新的分屏中


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ sourceSplitScreenId: string; newSplitScreenId: string; } \| undefined&gt;

分屏 ID，`sourceSplitScreenId` 代表源分屏，`newSplitScreenId` 代表新分屏

## 备注

请确认 [tabId](./DMT_EditorControl.md) 对应的分屏存在两个以上的标签页，否则分屏将不会执行，并返回 `undefined`

### generateindicatormarkers

# DMT\_EditorControl.generateIndicatorMarkers() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

生成指示标记

## 签名

```typescript
generateIndicatorMarkers(markers: Array<IDMT_IndicatorMarkerShape>, color?: {
        r: number;
        g: number;
        b: number;
        alpha: number;
    }, lineWidth?: number, zoom?: boolean, tabId?: string): Promise<boolean>;
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

markers


</td><td>

Array&lt;[IDMT\_IndicatorMarkerShape](../interfaces/IDMT_IndicatorMarkerShape.md)<!-- -->&gt;


</td><td>

指示标记外形对象数组


</td></tr>
<tr><td>

color


</td><td>

\{ r: number; g: number; b: number; alpha: number; \}


</td><td>

_（可选）_ 指示标记颜色


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

_（可选）_ 线宽


</td></tr>
<tr><td>

zoom


</td><td>

boolean


</td><td>

_（可选）_ 是否定位并缩放


</td></tr>
<tr><td>

tabId


</td><td>

string


</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

指示标记生成是否成功，`false` 表示画布不支持该操作或 `tabId` 不存在

## 备注

指示标记外形数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil

### getcurrentrenderedareaimage

# DMT\_EditorControl.getCurrentRenderedAreaImage() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取画布渲染区域图像

## 签名

```typescript
getCurrentRenderedAreaImage(tabId?: string): Promise<Blob | undefined>;
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

tabId


</td><td>

string


</td><td>

_（可选）_ 标签页 ID，如若未传入，则获取最后输入焦点的画布


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Blob \| undefined&gt;

- 画布渲染区域的 Blob 格式图像数据

### getsplitscreenidbytabid

# DMT\_EditorControl.getSplitScreenIdByTabId() method

使用标签页 ID 获取分屏 ID

## 签名

```typescript
getSplitScreenIdByTabId(tabId: string): Promise<string | undefined>;
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

tabId


</td><td>

string


</td><td>

标签页 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

分屏 ID

### getsplitscreentree

# DMT\_EditorControl.getSplitScreenTree() method

获取编辑器分屏属性树

## 签名

```typescript
getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>;
```


## 返回值

Promise&lt;[IDMT\_EditorSplitScreenItem](../interfaces/IDMT_EditorSplitScreenItem.md) \| undefined&gt;

编辑器分屏属性树，如若为 `undefined`<!-- -->，则数据获取失败

### gettabsbysplitscreenid

# DMT\_EditorControl.getTabsBySplitScreenId() method

获取指定分屏 ID 下的所有标签页

## 签名

```typescript
getTabsBySplitScreenId(splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>;
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

splitScreenId


</td><td>

string


</td><td>

分屏 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IDMT\_EditorTabItem](../interfaces/IDMT_EditorTabItem.md)<!-- -->&gt;&gt;

标签页列表

## 备注

如果指定分屏下不存在直接标签页（即它属下还存在 [children](../interfaces/IDMT_EditorSplitScreenItem.md)<!-- -->），则返回空数组

### mergealldocumentfromsplitscreen

# DMT\_EditorControl.mergeAllDocumentFromSplitScreen() method

合并所有分屏

## 签名

```typescript
mergeAllDocumentFromSplitScreen(): Promise<boolean>;
```


## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

仅当存在子分屏时可用，将会取消所有子分屏，并将所有文档标签页合并到初始分屏内

### movedocumenttosplitscreen

# DMT\_EditorControl.moveDocumentToSplitScreen() method

将文档移动到指定分屏

## 签名

```typescript
moveDocumentToSplitScreen(tabId: string, splitScreenId: string): Promise<boolean>;
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

tabId


</td><td>

string


</td><td>

标签页 ID


</td></tr>
<tr><td>

splitScreenId


</td><td>

string


</td><td>

[分屏 ID](../interfaces/IDMT_EditorSplitScreenItem.md)


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

移动文档后，编辑器分屏属性树可能会出现变化

### opendocument

# DMT\_EditorControl.openDocument() method

打开文档

## 签名

```typescript
openDocument(documentUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

documentUuid


</td><td>

string


</td><td>

文档 UUID，此处支持 [IDMT\_SchematicItem.uuid](../interfaces/IDMT_SchematicItem.md)<!-- -->、[IDMT\_SchematicPageItem.uuid](../interfaces/IDMT_SchematicPageItem.md)<!-- -->、[IDMT\_PcbItem.uuid](../interfaces/IDMT_PcbItem.md)<!-- -->、[IDMT\_PanelItem.uuid](../interfaces/IDMT_PanelItem.md) 作为输入


</td></tr>
<tr><td>

splitScreenId


</td><td>

string


</td><td>

_（可选）_ 分屏 ID，即 [DMT\_EditorControl.getSplitScreenTree()](./DMT_EditorControl.md) 方法获取到的 [IDMT\_EditorSplitScreenItem.id](../interfaces/IDMT_EditorSplitScreenItem.md)


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

标签页 ID，如若为 `undefined`<!-- -->，则打开文档失败

### openlibrarydocument

# DMT\_EditorControl.openLibraryDocument() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

打开库符号、封装文档

## 签名

```typescript
openLibraryDocument(libraryUuid: string, libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT, uuid: string, splitScreenId?: string): Promise<string | undefined>;
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

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

libraryType


</td><td>

[ELIB\_LibraryType.SYMBOL](../enums/ELIB_LibraryType.md) \| [ELIB\_LibraryType.FOOTPRINT](../enums/ELIB_LibraryType.md)


</td><td>

库类型，支持符号和封装


</td></tr>
<tr><td>

uuid


</td><td>

string


</td><td>

符号、封装 UUID


</td></tr>
<tr><td>

splitScreenId


</td><td>

string


</td><td>

_（可选）_ 分屏 ID，即 [DMT\_EditorControl.getSplitScreenTree()](./DMT_EditorControl.md) 方法获取到的 [IDMT\_EditorSplitScreenItem.id](../interfaces/IDMT_EditorSplitScreenItem.md)


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

标签页 ID，如若为 `undefined`<!-- -->，则打开文档失败

### removeindicatormarkers

# DMT\_EditorControl.removeIndicatorMarkers() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

移除指示标记

## 签名

```typescript
removeIndicatorMarkers(tabId?: string): Promise<boolean>;
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

tabId


</td><td>

string


</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

指示标记移除是否成功，`false` 表示画布不支持该操作或 `tabId` 不存在

## 备注

本接口会移除所有已生成的指示标记

### tilealldocumenttosplitscreen

# DMT\_EditorControl.tileAllDocumentToSplitScreen() method

平铺所有文档

## 签名

```typescript
tileAllDocumentToSplitScreen(): Promise<boolean>;
```


## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

仅当不存在子分屏时可用，将会自动为所有已打开的文档标签页创建分屏

### zoomto

# DMT\_EditorControl.zoomTo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

缩放到坐标

## 签名

```typescript
zoomTo(x?: number, y?: number, scaleRatio?: number, tabId?: string): Promise<{
        left: number;
        right: number;
        top: number;
        bottom: number;
    } | false>;
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

x


</td><td>

number


</td><td>

_（可选）_ 中心坐标 X，如若不传入则不改变当前 X 坐标


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

_（可选）_ 中心坐标 Y，如若不传入则不改变当前 Y 坐标


</td></tr>
<tr><td>

scaleRatio


</td><td>

number


</td><td>

_（可选）_ 缩放比，如若不传入则不改变当前缩放比，单位跨度为 `1/100`<!-- -->，如若传入 `200`<!-- -->，则表示缩放比为 `200%`


</td></tr>
<tr><td>

tabId


</td><td>

string


</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ left: number; right: number; top: number; bottom: number; } \| false&gt;

缩放到的区域数据，`false` 表示画布不支持该缩放操作或 `tabId` 不存在

## 备注

在原理图、符号画布坐标单位跨度为 0.01inch，在 PCB、封装画布坐标单位跨度为 mil

### zoomtoallprimitives

# DMT\_EditorControl.zoomToAllPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

缩放到所有图元（适应全部）

## 签名

```typescript
zoomToAllPrimitives(tabId?: string): Promise<{
        left: number;
        right: number;
        top: number;
        bottom: number;
    } | false>;
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

tabId


</td><td>

string


</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ left: number; right: number; top: number; bottom: number; } \| false&gt;

缩放到的区域数据，`false` 表示画布不支持该缩放操作或 `tabId` 不存在

## 备注

在返回数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil

### zoomtoregion

# DMT\_EditorControl.zoomToRegion() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

缩放到区域

## 签名

```typescript
zoomToRegion(left: number, right: number, top: number, bottom: number, tabId?: string): Promise<boolean>;
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

left


</td><td>

number


</td><td>

矩形框第一 X 坐标


</td></tr>
<tr><td>

right


</td><td>

number


</td><td>

矩形框第二 X 坐标


</td></tr>
<tr><td>

top


</td><td>

number


</td><td>

矩形框第一 Y 坐标


</td></tr>
<tr><td>

bottom


</td><td>

number


</td><td>

矩形框第二 Y 坐标


</td></tr>
<tr><td>

tabId


</td><td>

string


</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

在原理图、符号画布坐标单位跨度为 0.01inch，在 PCB、封装画布坐标单位跨度为 mil

### zoomtoselectedprimitives

# DMT\_EditorControl.zoomToSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

缩放到已选中图元（适应选中）

## 签名

```typescript
zoomToSelectedPrimitives(tabId?: string): Promise<{
        left: number;
        right: number;
        top: number;
        bottom: number;
    } | false>;
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

tabId


</td><td>

string


</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ left: number; right: number; top: number; bottom: number; } \| false&gt;

缩放到的区域数据，`false` 表示画布不支持该缩放操作或 `tabId` 不存在

## 备注

在返回数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil
