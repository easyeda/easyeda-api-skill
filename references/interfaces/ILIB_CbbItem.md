# ILIB\_CbbItem interface

复用模块属性

## 签名

```typescript
interface ILIB_CbbItem 
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

[boards](./ILIB_CbbItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_BoardItem](./IDMT_BoardItem.md)<!-- -->&gt;


</td><td>

下属板子


</td></tr>
<tr><td>

[classification?](./ILIB_CbbItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 分类


</td></tr>
<tr><td>

[description?](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
<tr><td>

[libraryType](./ILIB_CbbItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.CBB](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

[libraryUuid](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[name](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

复用模块名称


</td></tr>
<tr><td>

[uuid](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

复用模块 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### boards

# ILIB\_CbbItem.boards property

下属板子

## 签名

```typescript
boards: Array<IDMT_BoardItem>;
```

### classification

# ILIB\_CbbItem.classification property

分类

## 签名

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_CbbItem.description property

描述

## 签名

```typescript
description?: string;
```

### librarytype

# ILIB\_CbbItem.libraryType property

库类型

## 签名

```typescript
readonly libraryType: ELIB_LibraryType.CBB;
```

### libraryuuid

# ILIB\_CbbItem.libraryUuid property

所属库 UUID

## 签名

```typescript
libraryUuid: string;
```

### name

# ILIB\_CbbItem.name property

复用模块名称

## 签名

```typescript
name: string;
```

### uuid

# ILIB\_CbbItem.uuid property

复用模块 UUID

## 签名

```typescript
uuid: string;
```
