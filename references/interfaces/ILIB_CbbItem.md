# ILIB\_CbbItem interface

复用模块属性

## Signature

```typescript
interface ILIB_CbbItem 
```

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

_(Optional)_ 分类


</td></tr>
<tr><td>

[description?](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 描述


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

## Signature

```typescript
boards: Array<IDMT_BoardItem>;
```

### classification

# ILIB\_CbbItem.classification property

分类

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_CbbItem.description property

描述

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_CbbItem.libraryType property

库类型

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.CBB;
```

### libraryuuid

# ILIB\_CbbItem.libraryUuid property

所属库 UUID

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_CbbItem.name property

复用模块名称

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_CbbItem.uuid property

复用模块 UUID

## Signature

```typescript
uuid: string;
```
