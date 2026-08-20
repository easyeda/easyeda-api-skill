# ILIB\_SymbolSearchItem interface

Searched symbol properties

## Signature

```typescript
export interface ILIB_SymbolSearchItem 
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

[ascription](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

Ownership


</td></tr>
<tr><td>

[classification?](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

[description?](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[lastModifiedBy](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

Last modifier


</td></tr>
<tr><td>

[libraryUuid](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[name](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

Symbol name


</td></tr>
<tr><td>

[ordinal](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

number


</td><td>

Sorting


</td></tr>
<tr><td>

[type](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

Symbol type


</td></tr>
<tr><td>

[updateTimestamp](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

number


</td><td>

Update timestamp


</td></tr>
<tr><td>

[uuid](./ILIB_SymbolSearchItem.md)


</td><td>


</td><td>

string


</td><td>

Symbol UUID


</td></tr>
</tbody></table>

---

## 属性详情

### ascription

# ILIB\_SymbolSearchItem.ascription property

Ownership

## Signature

```typescript
ascription: string;
```

### classification

# ILIB\_SymbolSearchItem.classification property

Classification

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_SymbolSearchItem.description property

Description

## Signature

```typescript
description?: string;
```

### lastmodifiedby

# ILIB\_SymbolSearchItem.lastModifiedBy property

Last modifier

## Signature

```typescript
lastModifiedBy: string;
```

### libraryuuid

# ILIB\_SymbolSearchItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### name

# ILIB\_SymbolSearchItem.name property

Symbol name

## Signature

```typescript
name: string;
```

### ordinal

# ILIB\_SymbolSearchItem.ordinal property

Sorting

## Signature

```typescript
ordinal: number;
```

### type

# ILIB\_SymbolSearchItem.type property

Symbol type

## Signature

```typescript
type: ELIB_SymbolType;
```

### updatetimestamp

# ILIB\_SymbolSearchItem.updateTimestamp property

Update timestamp

## Signature

```typescript
updateTimestamp: number;
```

### uuid

# ILIB\_SymbolSearchItem.uuid property

Symbol UUID

## Signature

```typescript
uuid: string;
```
