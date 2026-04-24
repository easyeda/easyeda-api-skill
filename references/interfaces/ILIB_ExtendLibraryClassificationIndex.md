# ILIB\_ExtendLibraryClassificationIndex interface

> Warning: This API is now obsolete.
>
> - since EDA v3.2; dropped EDA v3.3

外部库分类索引

## Signature

```typescript
interface ILIB_ExtendLibraryClassificationIndex 
```

## Remarks

支持外部库使用名称或 UUID 作为分类的唯一 ID 索引

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

[primaryClassificationName?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 一级分类名称


</td></tr>
<tr><td>

[primaryClassificationUuid?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 一级分类 UUID


</td></tr>
<tr><td>

[secondaryClassificationName?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 二级分类名称


</td></tr>
<tr><td>

[secondaryClassificationUuid?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 二级分类 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### primaryclassificationname

# ILIB\_ExtendLibraryClassificationIndex.primaryClassificationName property

一级分类名称

## Signature

```typescript
primaryClassificationName?: string;
```

### primaryclassificationuuid

# ILIB\_ExtendLibraryClassificationIndex.primaryClassificationUuid property

一级分类 UUID

## Signature

```typescript
primaryClassificationUuid?: string;
```

### secondaryclassificationname

# ILIB\_ExtendLibraryClassificationIndex.secondaryClassificationName property

二级分类名称

## Signature

```typescript
secondaryClassificationName?: string;
```

### secondaryclassificationuuid

# ILIB\_ExtendLibraryClassificationIndex.secondaryClassificationUuid property

二级分类 UUID

## Signature

```typescript
secondaryClassificationUuid?: string;
```
