# LIB\_3DModel class

综合库 / 3D 模型类

## 签名

```typescript
declare class LIB_3DModel 
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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

复制 3D 模型

## 签名

```typescript
copy(modelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newModelName?: string): Promise<string | undefined>;
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

_（可选）_ 目标库内的分类


</td></tr>
<tr><td>

newModelName


</td><td>

string


</td><td>

_（可选）_ 新 3D 模型名称，如若目标库内存在重名 3D 模型将导致复制失败


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

目标库内新 3D 模型的 UUID

### create

# LIB\_3DModel.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建 3D 模型

## 签名

```typescript
create(libraryUuid: string, modelFile: Blob, classification?: ILIB_ClassificationIndex | Array<string>, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.METER | ESYS_Unit.MIL | ESYS_Unit.INCH): Promise<string[] | undefined>;
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

_（可选）_ 分类


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.METER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string\[\] \| undefined&gt;

3D 模型 UUID

### delete

# LIB\_3DModel.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除 3D 模型

## 签名

```typescript
delete(modelUuid: string, libraryUuid: string): Promise<boolean>;
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



## 返回值

Promise&lt;boolean&gt;

操作是否成功

### get

# LIB\_3DModel.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 3D 模型的所有属性

## 签名

```typescript
get(modelUuid: string, libraryUuid?: string): Promise<ILIB_3DModelItem | undefined>;
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

_（可选）_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ILIB\_3DModelItem](../interfaces/ILIB_3DModelItem.md) \| undefined&gt;

3D 模型属性

### modify

# LIB\_3DModel.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改 3D 模型

## 签名

```typescript
modify(modelUuid: string, libraryUuid: string, modelName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
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

_（可选）_ 3D 模型名称


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt; \| null


</td><td>

_（可选）_ 分类


</td></tr>
<tr><td>

description


</td><td>

string \| null


</td><td>

_（可选）_ 描述


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

如希望清除某些属性，则将其的值设置为 `null`

### search

# LIB\_3DModel.search() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

搜索 3D 模型

## 签名

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_3DModelSearchItem>>;
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

_（可选）_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 分类，默认为全部


</td></tr>
<tr><td>

itemsOfPage


</td><td>

number


</td><td>

_（可选）_ 一页搜索结果的数量


</td></tr>
<tr><td>

page


</td><td>

number


</td><td>

_（可选）_ 页数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ILIB\_3DModelSearchItem](../interfaces/ILIB_3DModelSearchItem.md)<!-- -->&gt;&gt;

搜索到的 3D 模型属性列表
