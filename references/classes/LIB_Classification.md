# LIB\_Classification class

综合库 / 库分类索引类

## 签名

```typescript
declare class LIB_Classification 
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

[createPrimary(libraryUuid, libraryType, primaryClassificationName)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 创建一级分类


</td></tr>
<tr><td>

[createSecondary(libraryUuid, libraryType, primaryClassificationUuid, secondaryClassificationName)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 创建二级分类


</td></tr>
<tr><td>

[deleteByIndex(classificationIndex)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 删除指定索引的分类


</td></tr>
<tr><td>

[deleteByUuid(libraryUuid, classificationUuid)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 删除指定 UUID 的分类


</td></tr>
<tr><td>

[getAllClassificationTree(libraryUuid, libraryType)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有分类信息组成的树


</td></tr>
<tr><td>

[getIndexByName(libraryUuid, libraryType, primaryClassificationName, secondaryClassificationName)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定名称的分类的分类索引


</td></tr>
<tr><td>

[getNameByIndex(classificationIndex)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定索引的分类的名称


</td></tr>
<tr><td>

[getNameByUuid(libraryUuid, libraryType, primaryClassificationUuid, secondaryClassificationUuid)](./LIB_Classification.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定 UUID 的分类的名称


</td></tr>
</tbody></table>

---

## 方法详情

### createprimary

# LIB\_Classification.createPrimary() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

创建一级分类

## 签名

```typescript
createPrimary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
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

库 UUID


</td></tr>
<tr><td>

libraryType


</td><td>

[ELIB\_LibraryType](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

primaryClassificationName


</td><td>

string


</td><td>

一级分类名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| undefined&gt;

分类索引

### createsecondary

# LIB\_Classification.createSecondary() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

创建二级分类

## 签名

```typescript
createSecondary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
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

库 UUID


</td></tr>
<tr><td>

libraryType


</td><td>

[ELIB\_LibraryType](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

primaryClassificationUuid


</td><td>

string


</td><td>

一级分类 UUID


</td></tr>
<tr><td>

secondaryClassificationName


</td><td>

string


</td><td>

二级分类名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| undefined&gt;

分类索引

### deletebyindex

# LIB\_Classification.deleteByIndex() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

删除指定索引的分类

## 签名

```typescript
deleteByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<boolean>;
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

classificationIndex


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md)


</td><td>

分类索引


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

### deletebyuuid

# LIB\_Classification.deleteByUuid() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除指定 UUID 的分类

## 签名

```typescript
deleteByUuid(libraryUuid: string, classificationUuid: string): Promise<boolean>;
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

库 UUID


</td></tr>
<tr><td>

classificationUuid


</td><td>

string


</td><td>


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

### getallclassificationtree

# LIB\_Classification.getAllClassificationTree() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有分类信息组成的树

## 签名

```typescript
getAllClassificationTree(libraryUuid: string, libraryType: ELIB_LibraryType): Promise<Array<{
        name: string;
        uuid: string;
        children?: Array<{
            name: string;
            uuid: string;
        }> | undefined;
    }>>;
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

库 UUID


</td></tr>
<tr><td>

libraryType


</td><td>

[ELIB\_LibraryType](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;{ name: string; uuid: string; children?: Array&lt;{ name: string; uuid: string; }&gt; \| undefined; }&gt;&gt;

分类信息组成的树结构数据

### getindexbyname

# LIB\_Classification.getIndexByName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

获取指定名称的分类的分类索引

## 签名

```typescript
getIndexByName(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string, secondaryClassificationName?: string): Promise<ILIB_ClassificationIndex | undefined>;
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

库 UUID


</td></tr>
<tr><td>

libraryType


</td><td>

[ELIB\_LibraryType](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

primaryClassificationName


</td><td>

string


</td><td>

一级分类名称


</td></tr>
<tr><td>

secondaryClassificationName


</td><td>

string


</td><td>

_（可选）_ 二级分类名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| undefined&gt;

分类索引

## 备注

分类索引内包含分类的 UUID，具体可查阅 [ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md)

### getnamebyindex

# LIB\_Classification.getNameByIndex() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

获取指定索引的分类的名称

## 签名

```typescript
getNameByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<{
        primaryClassificationName: string;
        secondaryClassificationName?: string | undefined;
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

classificationIndex


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md)


</td><td>

分类索引


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ primaryClassificationName: string; secondaryClassificationName?: string \| undefined; } \| undefined&gt;

两级分类的名称

### getnamebyuuid

# LIB\_Classification.getNameByUuid() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取指定 UUID 的分类的名称

## 签名

```typescript
getNameByUuid(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationUuid?: string): Promise<{
        primaryClassificationName: string;
        secondaryClassificationName?: string | undefined;
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

libraryUuid


</td><td>

string


</td><td>

库 UUID


</td></tr>
<tr><td>

libraryType


</td><td>

[ELIB\_LibraryType](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

primaryClassificationUuid


</td><td>

string


</td><td>

一级分类 UUID


</td></tr>
<tr><td>

secondaryClassificationUuid


</td><td>

string


</td><td>

_（可选）_ 二级分类 UUID，如若不指定，则只获取一级分类的信息


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ primaryClassificationName: string; secondaryClassificationName?: string \| undefined; } \| undefined&gt;

两级分类的名称
