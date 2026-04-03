# ILIB\_SymbolItem interface

符号属性

## 签名

```typescript
interface ILIB_SymbolItem 
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

[cbbUuid?](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 所属复用模块 UUID，仅复用模块符号存在该属性


</td></tr>
<tr><td>

[classification?](./ILIB_SymbolItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 分类


</td></tr>
<tr><td>

[description?](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
<tr><td>

[libraryType](./ILIB_SymbolItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.SYMBOL](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

[libraryUuid](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[name](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

符号名称


</td></tr>
<tr><td>

[type](./ILIB_SymbolItem.md)


</td><td>


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

符号类型


</td></tr>
<tr><td>

[uuid](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

符号 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### cbbuuid

# ILIB\_SymbolItem.cbbUuid property

所属复用模块 UUID，仅复用模块符号存在该属性

## 签名

```typescript
cbbUuid?: string;
```

### classification

# ILIB\_SymbolItem.classification property

分类

## 签名

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_SymbolItem.description property

描述

## 签名

```typescript
description?: string;
```

### librarytype

# ILIB\_SymbolItem.libraryType property

库类型

## 签名

```typescript
readonly libraryType: ELIB_LibraryType.SYMBOL;
```

### libraryuuid

# ILIB\_SymbolItem.libraryUuid property

所属库 UUID

## 签名

```typescript
libraryUuid: string;
```

### name

# ILIB\_SymbolItem.name property

符号名称

## 签名

```typescript
name: string;
```

### type

# ILIB\_SymbolItem.type property

符号类型

## 签名

```typescript
type: ELIB_SymbolType;
```

### uuid

# ILIB\_SymbolItem.uuid property

符号 UUID

## 签名

```typescript
uuid: string;
```
