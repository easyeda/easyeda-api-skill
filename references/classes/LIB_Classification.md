# LIB\_Classification class

综合库 / 库分类索引类

## Signature

```typescript
declare class LIB_Classification 
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

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> - since EDA v3.2; dropped EDA v3.3

创建一级分类

## Signature

```typescript
createPrimary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
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



## Returns

Promise&lt;[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| undefined&gt;

分类索引

### createsecondary

# LIB\_Classification.createSecondary() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> - since EDA v3.2; dropped EDA v3.3

创建二级分类

## Signature

```typescript
createSecondary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
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



## Returns

Promise&lt;[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| undefined&gt;

分类索引

### deletebyindex

# LIB\_Classification.deleteByIndex() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> - since EDA v3.2; dropped EDA v3.3

删除指定索引的分类

## Signature

```typescript
deleteByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<boolean>;
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

classificationIndex


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md)


</td><td>

分类索引


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### deletebyuuid

# LIB\_Classification.deleteByUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除指定 UUID 的分类

## Signature

```typescript
deleteByUuid(libraryUuid: string, classificationUuid: string): Promise<boolean>;
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

库 UUID


</td></tr>
<tr><td>

classificationUuid


</td><td>

string


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### getallclassificationtree

# LIB\_Classification.getAllClassificationTree() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有分类信息组成的树

## Signature

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



## Returns

Promise&lt;Array&lt;{ name: string; uuid: string; children?: Array&lt;{ name: string; uuid: string; }&gt; \| undefined; }&gt;&gt;

分类信息组成的树结构数据

### getindexbyname

# LIB\_Classification.getIndexByName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> - since EDA v3.2; dropped EDA v3.3

获取指定名称的分类的分类索引

## Signature

```typescript
getIndexByName(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string, secondaryClassificationName?: string): Promise<ILIB_ClassificationIndex | undefined>;
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

_(Optional)_ 二级分类名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| undefined&gt;

分类索引

## Remarks

分类索引内包含分类的 UUID，具体可查阅 [ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md)

### getnamebyindex

# LIB\_Classification.getNameByIndex() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> - since EDA v3.2; dropped EDA v3.3

获取指定索引的分类的名称

## Signature

```typescript
getNameByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<{
        primaryClassificationName: string;
        secondaryClassificationName?: string | undefined;
    } | undefined>;
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

classificationIndex


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md)


</td><td>

分类索引


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ primaryClassificationName: string; secondaryClassificationName?: string \| undefined; } \| undefined&gt;

两级分类的名称

### getnamebyuuid

# LIB\_Classification.getNameByUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取指定 UUID 的分类的名称

## Signature

```typescript
getNameByUuid(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationUuid?: string): Promise<{
        primaryClassificationName: string;
        secondaryClassificationName?: string | undefined;
    } | undefined>;
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

_(Optional)_ 二级分类 UUID，如若不指定，则只获取一级分类的信息


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ primaryClassificationName: string; secondaryClassificationName?: string \| undefined; } \| undefined&gt;

两级分类的名称
