# ILIB\_SymbolItem interface

Symbol property

## Signature

```typescript
export interface ILIB_SymbolItem 
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

[cbbUuid?](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ UUID of the reuse block it belongs to. Only the reuse block symbol has this property


</td></tr>
<tr><td>

[classification?](./ILIB_SymbolItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

[description?](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[libraryType](./ILIB_SymbolItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.SYMBOL](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[name](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

Symbol name


</td></tr>
<tr><td>

[subPartNames](./ILIB_SymbolItem.md)


</td><td>


</td><td>

\[\]


</td><td>

Sub-part name array


</td></tr>
<tr><td>

[type](./ILIB_SymbolItem.md)


</td><td>


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

Symbol type


</td></tr>
<tr><td>

[uuid](./ILIB_SymbolItem.md)


</td><td>


</td><td>

string


</td><td>

Symbol UUID


</td></tr>
</tbody></table>

---

## 属性详情

### cbbuuid

# ILIB\_SymbolItem.cbbUuid property

UUID of the reuse block it belongs to. Only the reuse block symbol has this property

## Signature

```typescript
cbbUuid?: string;
```

### classification

# ILIB\_SymbolItem.classification property

Classification

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_SymbolItem.description property

Description

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_SymbolItem.libraryType property

Library type

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.SYMBOL;
```

### libraryuuid

# ILIB\_SymbolItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_SymbolItem.name property

Symbol name

## Signature

```typescript
name: string;
```

### subpartnames

# ILIB\_SymbolItem.subPartNames property

Sub-part name array

## Signature

```typescript
subPartNames: [];
```

### type

# ILIB\_SymbolItem.type property

Symbol type

## Signature

```typescript
type: ELIB_SymbolType;
```

### uuid

# ILIB\_SymbolItem.uuid property

Symbol UUID

## Signature

```typescript
uuid: string;
```
