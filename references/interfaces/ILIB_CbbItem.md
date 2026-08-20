# ILIB\_CbbItem interface

Reuse block property

## Signature

```typescript
export interface ILIB_CbbItem 
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

Subordinate boards


</td></tr>
<tr><td>

[classification?](./ILIB_CbbItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

[description?](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[libraryType](./ILIB_CbbItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.CBB](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[name](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

Reuse block name


</td></tr>
<tr><td>

[uuid](./ILIB_CbbItem.md)


</td><td>


</td><td>

string


</td><td>

Reuse block UUID


</td></tr>
</tbody></table>

---

## 属性详情

### boards

# ILIB\_CbbItem.boards property

Subordinate boards

## Signature

```typescript
boards: Array<IDMT_BoardItem>;
```

### classification

# ILIB\_CbbItem.classification property

Classification

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_CbbItem.description property

Description

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_CbbItem.libraryType property

Library type

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.CBB;
```

### libraryuuid

# ILIB\_CbbItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_CbbItem.name property

Reuse block name

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_CbbItem.uuid property

Reuse block UUID

## Signature

```typescript
uuid: string;
```
