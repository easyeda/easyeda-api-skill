# LIB\_Footprint class

综合库 / 封装类

## Signature

```typescript
declare class LIB_Footprint 
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

[copy(footprintUuid, libraryUuid, targetLibraryUuid, targetClassification, newFootprintName)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 复制封装


</td></tr>
<tr><td>

[create(libraryUuid, footprintName, classification, description)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 创建封装


</td></tr>
<tr><td>

[delete(footprintUuid, libraryUuid)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 删除封装


</td></tr>
<tr><td>

[get(footprintUuid, libraryUuid)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 获取封装的所有属性


</td></tr>
<tr><td>

[getRenderImage(source)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 获取封装渲染图


</td></tr>
<tr><td>

[modify(footprintUuid, libraryUuid, footprintName, classification, description)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 修改封装


</td></tr>
<tr><td>

[openInEditor(footprintUuid, libraryUuid, splitScreenId)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 在编辑器打开文档


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, itemsOfPage, page)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 搜索封装


</td></tr>
<tr><td>

[updateDocumentSource(footprintUuid, libraryUuid, documentSource)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** 更新封装的文档源码


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_Footprint.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制封装

## Signature

```typescript
copy(footprintUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newFootprintName?: string): Promise<string | undefined>;
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

footprintUuid


</td><td>

string


</td><td>

封装 UUID


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

newFootprintName


</td><td>

string


</td><td>

_(Optional)_ 新封装名称，如若目标库内存在重名封装将导致复制失败


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

目标库内新封装的 UUID

### create

# LIB\_Footprint.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建封装

## Signature

```typescript
create(libraryUuid: string, footprintName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;
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

footprintName


</td><td>

string


</td><td>

封装名称


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

封装 UUID

### delete

# LIB\_Footprint.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除封装

## Signature

```typescript
delete(footprintUuid: string, libraryUuid: string): Promise<boolean>;
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

footprintUuid


</td><td>

string


</td><td>

封装 UUID


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

# LIB\_Footprint.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取封装的所有属性

## Signature

```typescript
get(footprintUuid: string, libraryUuid?: string): Promise<ILIB_FootprintItem | undefined>;
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

footprintUuid


</td><td>

string


</td><td>

封装 UUID


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

Promise&lt;[ILIB\_FootprintItem](../interfaces/ILIB_FootprintItem.md) \| undefined&gt;

封装属性

### getrenderimage

# LIB\_Footprint.getRenderImage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取封装渲染图

## Signature

```typescript
getRenderImage(source: {
        footprintUuid: string;
        libraryUuid: string;
    }): Promise<Blob | undefined>;
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

source


</td><td>

\{ footprintUuid: string; libraryUuid: string; \}


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;Blob \| undefined&gt;

封装渲染图

### modify

# LIB\_Footprint.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改封装

## Signature

```typescript
modify(footprintUuid: string, libraryUuid: string, footprintName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
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

footprintUuid


</td><td>

string


</td><td>

封装 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

footprintName


</td><td>

string


</td><td>

_(Optional)_ 封装名称


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

# LIB\_Footprint.openInEditor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

在编辑器打开文档

## Signature

```typescript
openInEditor(footprintUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

footprintUuid


</td><td>

string


</td><td>

封装 UUID


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

# LIB\_Footprint.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

搜索封装

## Signature

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_FootprintSearchItem>>;
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

Promise&lt;Array&lt;[ILIB\_FootprintSearchItem](../interfaces/ILIB_FootprintSearchItem.md)<!-- -->&gt;&gt;

搜索到的封装属性列表

### updatedocumentsource

# LIB\_Footprint.updateDocumentSource() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

更新封装的文档源码

## Signature

```typescript
updateDocumentSource(footprintUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;
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

footprintUuid


</td><td>

string


</td><td>

封装 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

documentSource


</td><td>

string


</td><td>

文档源码


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean \| undefined&gt;

是否更新成功
