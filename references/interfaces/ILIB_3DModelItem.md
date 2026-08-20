# ILIB\_3DModelItem interface

3D model property

## Signature

```typescript
export interface ILIB_3DModelItem 
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

_(Optional)_ Classification


</td></tr>
<tr><td>

[description?](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[libraryType](./ILIB_3DModelItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.MODEL](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[name](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

3D model name


</td></tr>
<tr><td>

[uuid](./ILIB_3DModelItem.md)


</td><td>


</td><td>

string


</td><td>

3D model UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_3DModelItem.classification property

Classification

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_3DModelItem.description property

Description

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_3DModelItem.libraryType property

Library type

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.MODEL;
```

### libraryuuid

# ILIB\_3DModelItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_3DModelItem.name property

3D model name

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_3DModelItem.uuid property

3D model UUID

## Signature

```typescript
uuid: string;
```
