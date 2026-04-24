# ILIB\_3DModelItem interface

3D 模型属性

## Signature

```typescript
interface ILIB_3DModelItem 
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

[classification?](./ILIB_3DModelItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

[description?](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 描述


</td></tr>
<tr><td>

[libraryType](./ILIB_3DModelItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.MODEL](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

[libraryUuid](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[name](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

3D 模型名称


</td></tr>
<tr><td>

[uuid](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

3D 模型 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_3DModelItem.classification property

分类

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_3DModelItem.description property

描述

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_3DModelItem.libraryType property

库类型

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.MODEL;
```

### libraryuuid

# ILIB\_3DModelItem.libraryUuid property

所属库 UUID

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_3DModelItem.name property

3D 模型名称

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_3DModelItem.uuid property

3D 模型 UUID

## Signature

```typescript
uuid: string;
```
