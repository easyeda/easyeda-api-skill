# ILIB\_DeviceItem interface

Device property

## Signature

```typescript
export interface ILIB_DeviceItem 
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

[association](./ILIB_DeviceItem.md)


</td><td>


</td><td>

[ILIB\_DeviceAssociationItem](./ILIB_DeviceAssociationItem.md)


</td><td>

Associate


</td></tr>
<tr><td>

[classification?](./ILIB_DeviceItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Device classification


</td></tr>
<tr><td>

[description?](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[libraryType](./ILIB_DeviceItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.DEVICE](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[name](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

Device name


</td></tr>
<tr><td>

[property](./ILIB_DeviceItem.md)


</td><td>


</td><td>

[ILIB\_DeviceExtendPropertyItem](./ILIB_DeviceExtendPropertyItem.md)


</td><td>

Extension property


</td></tr>
<tr><td>

[subPartNames](./ILIB_DeviceItem.md)


</td><td>


</td><td>

\[\]


</td><td>

Sub-part name array


</td></tr>
<tr><td>

[uuid](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

Device UUID


</td></tr>
</tbody></table>

---

## 属性详情

### association

# ILIB\_DeviceItem.association property

Associate

## Signature

```typescript
association: ILIB_DeviceAssociationItem;
```

### classification

# ILIB\_DeviceItem.classification property

Device classification

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_DeviceItem.description property

Description

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_DeviceItem.libraryType property

Library type

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.DEVICE;
```

### libraryuuid

# ILIB\_DeviceItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_DeviceItem.name property

Device name

## Signature

```typescript
name: string;
```

### property

# ILIB\_DeviceItem.property property

Extension property

## Signature

```typescript
property: ILIB_DeviceExtendPropertyItem;
```

### subpartnames

# ILIB\_DeviceItem.subPartNames property

Sub-part name array

## Signature

```typescript
subPartNames: [];
```

### uuid

# ILIB\_DeviceItem.uuid property

Device UUID

## Signature

```typescript
uuid: string;
```
