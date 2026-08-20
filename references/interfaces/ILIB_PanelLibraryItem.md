# ILIB\_PanelLibraryItem interface

Panel library property

## Signature

```typescript
export interface ILIB_PanelLibraryItem 
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

[classification?](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

[description?](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[libraryType](./ILIB_PanelLibraryItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.PANEL\_LIBRARY](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[name](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

Panel library name


</td></tr>
<tr><td>

[uuid](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

Panel library UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_PanelLibraryItem.classification property

Classification

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_PanelLibraryItem.description property

Description

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_PanelLibraryItem.libraryType property

Library type

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.PANEL_LIBRARY;
```

### libraryuuid

# ILIB\_PanelLibraryItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_PanelLibraryItem.name property

Panel library name

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_PanelLibraryItem.uuid property

Panel library UUID

## Signature

```typescript
uuid: string;
```
