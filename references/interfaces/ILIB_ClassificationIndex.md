# ILIB\_ClassificationIndex interface

> Warning: This API is now obsolete.
>
> - since EDA v3.2; dropped EDA v3.3

分类索引

## Signature

```typescript
interface ILIB_ClassificationIndex 
```

## Remarks

本分类索引用于索引指定库内的分类，其中库 UUID 和库类型仅作针对于本索引的识别用途，防止将不同库内的索引互相引用从而引发错误

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[libraryType](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

[ELIB\_LibraryType](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

[libraryUuid](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

库 UUID


</td></tr>
<tr><td>

[primaryClassificationUuid](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

一级分类 UUID


</td></tr>
<tr><td>

[secondaryClassificationUuid?](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 二级分类 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### librarytype

# ILIB\_ClassificationIndex.libraryType property

库类型

## Signature

```typescript
libraryType: ELIB_LibraryType;
```

### libraryuuid

# ILIB\_ClassificationIndex.libraryUuid property

库 UUID

## Signature

```typescript
libraryUuid: string;
```

### primaryclassificationuuid

# ILIB\_ClassificationIndex.primaryClassificationUuid property

一级分类 UUID

## Signature

```typescript
primaryClassificationUuid: string;
```

### secondaryclassificationuuid

# ILIB\_ClassificationIndex.secondaryClassificationUuid property

二级分类 UUID

## Signature

```typescript
secondaryClassificationUuid?: string;
```
