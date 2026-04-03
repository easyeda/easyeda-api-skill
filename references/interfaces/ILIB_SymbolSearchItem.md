# ILIB\_SymbolSearchItem interface

搜索到的符号属性

## 签名

```typescript
interface ILIB_SymbolSearchItem 
```

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

[ascription](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

归属


</td></tr>
<tr><td>

[classification?](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 分类


</td></tr>
<tr><td>

[description?](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
<tr><td>

[lastModifiedBy](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

前次修改者


</td></tr>
<tr><td>

[libraryUuid](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[name](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

符号名称


</td></tr>
<tr><td>

[ordinal](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

number


</td><td>

排序


</td></tr>
<tr><td>

[type](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

符号类型


</td></tr>
<tr><td>

[updateTimestamp](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

number


</td><td>

更新时间戳


</td></tr>
<tr><td>

[uuid](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

符号 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### ascription

# ILIB\_SymbolSearchItem.ascription property

归属

## 签名

```typescript
ascription: string;
```

### classification

# ILIB\_SymbolSearchItem.classification property

分类

## 签名

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_SymbolSearchItem.description property

描述

## 签名

```typescript
description?: string;
```

### lastmodifiedby

# ILIB\_SymbolSearchItem.lastModifiedBy property

前次修改者

## 签名

```typescript
lastModifiedBy: string;
```

### libraryuuid

# ILIB\_SymbolSearchItem.libraryUuid property

所属库 UUID

## 签名

```typescript
libraryUuid: string;
```

### name

# ILIB\_SymbolSearchItem.name property

符号名称

## 签名

```typescript
name: string;
```

### ordinal

# ILIB\_SymbolSearchItem.ordinal property

排序

## 签名

```typescript
ordinal: number;
```

### type

# ILIB\_SymbolSearchItem.type property

符号类型

## 签名

```typescript
type: ELIB_SymbolType;
```

### updatetimestamp

# ILIB\_SymbolSearchItem.updateTimestamp property

更新时间戳

## 签名

```typescript
updateTimestamp: number;
```

### uuid

# ILIB\_SymbolSearchItem.uuid property

符号 UUID

## 签名

```typescript
uuid: string;
```
