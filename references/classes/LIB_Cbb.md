# LIB\_Cbb class

综合库 / 复用模块类

## Signature

```typescript
declare class LIB_Cbb 
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

[copy(cbbUuid, libraryUuid, targetLibraryUuid, targetClassification, newCbbName)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 复制复用模块


</td></tr>
<tr><td>

[create(libraryUuid, cbbName, classification, description)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 创建复用模块


</td></tr>
<tr><td>

[delete(cbbUuid, libraryUuid)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 删除复用模块


</td></tr>
<tr><td>

[get(cbbUuid, libraryUuid)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 获取复用模块的所有属性


</td></tr>
<tr><td>

[modify(cbbUuid, libraryUuid, cbbName, classification, description)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 修改复用模块


</td></tr>
<tr><td>

[openProjectInEditor(cbbUuid, libraryUuid)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 在编辑器打开复用模块工程


</td></tr>
<tr><td>

[openSymbolInEditor(cbbUuid, libraryUuid, splitScreenId)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 在编辑器打开复用模块符号


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, itemsOfPage, page)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** 搜索复用模块


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_Cbb.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制复用模块

## Signature

```typescript
copy(cbbUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newCbbName?: string): Promise<string | undefined>;
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

cbbUuid


</td><td>

string


</td><td>

复用模块 UUID


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

newCbbName


</td><td>

string


</td><td>

_(Optional)_ 新复用模块名称，如若目标库内存在重名复用模块将导致复制失败


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

目标库内新复用模块的 UUID

### create

# LIB\_Cbb.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建复用模块

## Signature

```typescript
create(libraryUuid: string, cbbName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;
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

cbbName


</td><td>

string


</td><td>

复用模块名称


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

复用模块 UUID

### delete

# LIB\_Cbb.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除复用模块

## Signature

```typescript
delete(cbbUuid: string, libraryUuid: string): Promise<boolean>;
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

cbbUuid


</td><td>

string


</td><td>

复用模块 UUID


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

# LIB\_Cbb.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取复用模块的所有属性

## Signature

```typescript
get(cbbUuid: string, libraryUuid?: string): Promise<ILIB_CbbItem | undefined>;
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

cbbUuid


</td><td>

string


</td><td>

复用模块 UUID


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

Promise&lt;[ILIB\_CbbItem](../interfaces/ILIB_CbbItem.md) \| undefined&gt;

复用模块属性

### modify

# LIB\_Cbb.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改复用模块

## Signature

```typescript
modify(cbbUuid: string, libraryUuid: string, cbbName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
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

cbbUuid


</td><td>

string


</td><td>

复用模块 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

cbbName


</td><td>

string


</td><td>

_(Optional)_ 复用模块名称


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

### openprojectineditor

# LIB\_Cbb.openProjectInEditor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

在编辑器打开复用模块工程

## Signature

```typescript
openProjectInEditor(cbbUuid: string, libraryUuid: string): Promise<boolean>;
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

cbbUuid


</td><td>

string


</td><td>

复用模块 UUID


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

## Remarks

本操作将会在 EDA 前端打开模块工程，如若原先已打开其它工程且有未保存的变更，执行本操作将直接丢失所有未保存的数据

### opensymbolineditor

# LIB\_Cbb.openSymbolInEditor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

在编辑器打开复用模块符号

## Signature

```typescript
openSymbolInEditor(cbbUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

cbbUuid


</td><td>

string


</td><td>

复用模块 UUID


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

# LIB\_Cbb.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

搜索复用模块

## Signature

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_CbbSearchItem>>;
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

Promise&lt;Array&lt;[ILIB\_CbbSearchItem](../interfaces/ILIB_CbbSearchItem.md)<!-- -->&gt;&gt;

搜索到的复用模块属性列表
