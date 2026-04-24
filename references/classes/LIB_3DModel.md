# LIB\_3DModel class

综合库 / 3D 模型类

## Signature

```typescript
declare class LIB_3DModel 
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

[copy(modelUuid, libraryUuid, targetLibraryUuid, targetClassification, newModelName)](./LIB_3DModel.md)


</td><td>


</td><td>

**_(BETA)_** 复制 3D 模型


</td></tr>
<tr><td>

[create(libraryUuid, modelFile, classification, unit)](./LIB_3DModel.md)


</td><td>


</td><td>

**_(BETA)_** 创建 3D 模型


</td></tr>
<tr><td>

[delete(modelUuid, libraryUuid)](./LIB_3DModel.md)


</td><td>


</td><td>

**_(BETA)_** 删除 3D 模型


</td></tr>
<tr><td>

[get(modelUuid, libraryUuid)](./LIB_3DModel.md)


</td><td>


</td><td>

**_(BETA)_** 获取 3D 模型的所有属性


</td></tr>
<tr><td>

[modify(modelUuid, libraryUuid, modelName, classification, description)](./LIB_3DModel.md)


</td><td>


</td><td>

**_(BETA)_** 修改 3D 模型


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, itemsOfPage, page)](./LIB_3DModel.md)


</td><td>


</td><td>

**_(BETA)_** 搜索 3D 模型


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_3DModel.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制 3D 模型

## Signature

```typescript
copy(modelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newModelName?: string): Promise<string | undefined>;
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

modelUuid


</td><td>

string


</td><td>

3D 模型 UUID


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

newModelName


</td><td>

string


</td><td>

_(Optional)_ 新 3D 模型名称，如若目标库内存在重名 3D 模型将导致复制失败


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

目标库内新 3D 模型的 UUID

### create

# LIB\_3DModel.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建 3D 模型

## Signature

```typescript
create(libraryUuid: string, modelFile: Blob, classification?: ILIB_ClassificationIndex | Array<string>, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.METER | ESYS_Unit.MIL | ESYS_Unit.INCH): Promise<string[] | undefined>;
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

modelFile


</td><td>

Blob


</td><td>

3D 模型文件数据


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.METER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;string\[\] \| undefined&gt;

3D 模型 UUID

### delete

# LIB\_3DModel.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除 3D 模型

## Signature

```typescript
delete(modelUuid: string, libraryUuid: string): Promise<boolean>;
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

modelUuid


</td><td>

string


</td><td>

3D 模型 UUID


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

# LIB\_3DModel.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 3D 模型的所有属性

## Signature

```typescript
get(modelUuid: string, libraryUuid?: string): Promise<ILIB_3DModelItem | undefined>;
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

modelUuid


</td><td>

string


</td><td>

3D 模型 UUID


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

Promise&lt;[ILIB\_3DModelItem](../interfaces/ILIB_3DModelItem.md) \| undefined&gt;

3D 模型属性

### modify

# LIB\_3DModel.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改 3D 模型

## Signature

```typescript
modify(modelUuid: string, libraryUuid: string, modelName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
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

modelUuid


</td><td>

string


</td><td>

3D 模型 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

modelName


</td><td>

string


</td><td>

_(Optional)_ 3D 模型名称


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

### search

# LIB\_3DModel.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

搜索 3D 模型

## Signature

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_3DModelSearchItem>>;
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

Promise&lt;Array&lt;[ILIB\_3DModelSearchItem](../interfaces/ILIB_3DModelSearchItem.md)<!-- -->&gt;&gt;

搜索到的 3D 模型属性列表
