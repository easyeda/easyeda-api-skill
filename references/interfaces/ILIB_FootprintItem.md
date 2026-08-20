# ILIB\_FootprintItem interface

Footprint property

## Signature

```typescript
export interface ILIB_FootprintItem 
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

[classification?](./ILIB_FootprintItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

[description?](./ILIB_FootprintItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[libraryType](./ILIB_FootprintItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.FOOTPRINT](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_FootprintItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[name](./ILIB_FootprintItem.md)


</td><td>


</td><td>

string


</td><td>

Footprint name


</td></tr>
<tr><td>

[uuid](./ILIB_FootprintItem.md)


</td><td>


</td><td>

string


</td><td>

Footprint UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_FootprintItem.classification property

Classification

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_FootprintItem.description property

Description

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_FootprintItem.libraryType property

Library type

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.FOOTPRINT;
```

### libraryuuid

# ILIB\_FootprintItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_FootprintItem.name property

Footprint name

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_FootprintItem.uuid property

Footprint UUID

## Signature

```typescript
uuid: string;
```
