# ILIB\_ExtendLibraryClassificationIndex interface

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

外部库分类索引

## 签名

```typescript
interface ILIB_ExtendLibraryClassificationIndex 
```

## 备注

支持外部库使用名称或 UUID 作为分类的唯一 ID 索引

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[primaryClassificationName?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 一级分类名称


</td></tr>
<tr><td>

[primaryClassificationUuid?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 一级分类 UUID


</td></tr>
<tr><td>

[secondaryClassificationName?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 二级分类名称


</td></tr>
<tr><td>

[secondaryClassificationUuid?](./ILIB_ExtendLibraryClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 二级分类 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### primaryclassificationname

# ILIB\_ExtendLibraryClassificationIndex.primaryClassificationName property

一级分类名称

## 签名

```typescript
primaryClassificationName?: string;
```

### primaryclassificationuuid

# ILIB\_ExtendLibraryClassificationIndex.primaryClassificationUuid property

一级分类 UUID

## 签名

```typescript
primaryClassificationUuid?: string;
```

### secondaryclassificationname

# ILIB\_ExtendLibraryClassificationIndex.secondaryClassificationName property

二级分类名称

## 签名

```typescript
secondaryClassificationName?: string;
```

### secondaryclassificationuuid

# ILIB\_ExtendLibraryClassificationIndex.secondaryClassificationUuid property

二级分类 UUID

## 签名

```typescript
secondaryClassificationUuid?: string;
```
