# LIB\_PanelLibrary class

综合库 / 面板库类

## Signature

```typescript
declare class LIB_PanelLibrary 
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

[copy(panelLibraryUuid, libraryUuid, targetLibraryUuid, targetClassification, newPanelLibraryName)](./LIB_PanelLibrary.md)


</td><td>


</td><td>

**_(BETA)_** 复制面板库


</td></tr>
<tr><td>

[create(libraryUuid, panelLibraryName, classification, description)](./LIB_PanelLibrary.md)


</td><td>


</td><td>

**_(BETA)_** 创建面板库


</td></tr>
<tr><td>

[delete(panelLibraryUuid, libraryUuid)](./LIB_PanelLibrary.md)


</td><td>


</td><td>

**_(BETA)_** 删除面板库


</td></tr>
<tr><td>

[get(panelLibraryUuid, libraryUuid)](./LIB_PanelLibrary.md)


</td><td>


</td><td>

**_(BETA)_** 获取面板库的所有属性


</td></tr>
<tr><td>

[modify(panelLibraryUuid, libraryUuid, panelLibraryName, classification, description)](./LIB_PanelLibrary.md)


</td><td>


</td><td>

**_(BETA)_** 修改面板库


</td></tr>
<tr><td>

[openInEditor(panelLibraryUuid, libraryUuid, splitScreenId)](./LIB_PanelLibrary.md)


</td><td>


</td><td>

**_(BETA)_** 在编辑器打开文档


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, itemsOfPage, page)](./LIB_PanelLibrary.md)


</td><td>


</td><td>

**_(BETA)_** 搜索面板库


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_PanelLibrary.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制面板库

## Signature

```typescript
copy(panelLibraryUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newPanelLibraryName?: string): Promise<string | undefined>;
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

panelLibraryUuid


</td><td>

string


</td><td>

面板库 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

targetLibraryUuid


</td><td>

string


</td><td>

目标库 UUID


</td></tr>
<tr><td>

targetClassification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 目标库内的分类


</td></tr>
<tr><td>

newPanelLibraryName


</td><td>

string


</td><td>

_(Optional)_ 新面板库名称，如若目标库内存在重名面板库将导致复制失败


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

目标库内新面板库的 UUID

### create

# LIB\_PanelLibrary.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建面板库

## Signature

```typescript
create(libraryUuid: string, panelLibraryName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;
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

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

panelLibraryName


</td><td>

string


</td><td>

面板库名称


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ 描述


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

面板库 UUID

### delete

# LIB\_PanelLibrary.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除面板库

## Signature

```typescript
delete(panelLibraryUuid: string, libraryUuid: string): Promise<boolean>;
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

panelLibraryUuid


</td><td>

string


</td><td>

面板库 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### get

# LIB\_PanelLibrary.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取面板库的所有属性

## Signature

```typescript
get(panelLibraryUuid: string, libraryUuid?: string): Promise<ILIB_PanelLibraryItem | undefined>;
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

panelLibraryUuid


</td><td>

string


</td><td>

面板库 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ILIB\_PanelLibraryItem](../interfaces/ILIB_PanelLibraryItem.md) \| undefined&gt;

面板库属性

### modify

# LIB\_PanelLibrary.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改面板库

## Signature

```typescript
modify(panelLibraryUuid: string, libraryUuid: string, panelLibraryName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
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

panelLibraryUuid


</td><td>

string


</td><td>

面板库 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

panelLibraryName


</td><td>

string


</td><td>

_(Optional)_ 面板库名称


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt; \| null


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

description


</td><td>

string \| null


</td><td>

_(Optional)_ 描述


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

如希望清除某些属性，则将其的值设置为 `null`

### openineditor

# LIB\_PanelLibrary.openInEditor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

在编辑器打开文档

## Signature

```typescript
openInEditor(panelLibraryUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

panelLibraryUuid


</td><td>

string


</td><td>

面板库 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

splitScreenId


</td><td>

string


</td><td>

_(Optional)_ 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 [DMT\_EditorControl](./DMT_EditorControl.md) 内的接口获取


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

标签页 ID，对应 [IDMT\_EditorTabItem.tabId](../interfaces/IDMT_EditorTabItem.md)<!-- -->，可使用 [DMT\_EditorControl.getSplitScreenIdByTabId()](./DMT_EditorControl.md) 获取到分屏 ID

### search

# LIB\_PanelLibrary.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

搜索面板库

## Signature

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_PanelLibrarySearchItem>>;
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

key


</td><td>

string


</td><td>

搜索关键字


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 分类，默认为全部


</td></tr>
<tr><td>

itemsOfPage


</td><td>

number


</td><td>

_(Optional)_ 一页搜索结果的数量


</td></tr>
<tr><td>

page


</td><td>

number


</td><td>

_(Optional)_ 页数


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_PanelLibrarySearchItem](../interfaces/ILIB_PanelLibrarySearchItem.md)<!-- -->&gt;&gt;

搜索到的面板库属性列表
