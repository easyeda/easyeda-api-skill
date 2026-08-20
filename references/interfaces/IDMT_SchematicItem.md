# IDMT\_SchematicItem interface

Schematic property

## Signature

```typescript
export interface IDMT_SchematicItem 
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

[cbbSymbol?](./IDMT_SchematicItem.md)


</td><td>


</td><td>

[ILIB\_SymbolItem](./ILIB_SymbolItem.md)


</td><td>

_(Optional)_ The module symbol associated with the reuse block schematic


</td></tr>
<tr><td>

[itemType](./IDMT_SchematicItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.SCHEMATIC](../enums/EDMT_ItemType.md) \| [EDMT\_ItemType.CBB\_SCHEMATIC](../enums/EDMT_ItemType.md)


</td><td>

Project type


</td></tr>
<tr><td>

[name](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

Schematic name


</td></tr>
<tr><td>

[page](./IDMT_SchematicItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_SchematicPageItem](./IDMT_SchematicPageItem.md)<!-- -->&gt;


</td><td>

Subordinate schematic sheet


</td></tr>
<tr><td>

[parentBoardName?](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Name of the board it belongs to


</td></tr>
<tr><td>

[parentProjectUuid](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the project it belongs to


</td></tr>
<tr><td>

[uuid](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

Schematic UUID


</td></tr>
</tbody></table>

---

## 属性详情

### cbbsymbol

# IDMT\_SchematicItem.cbbSymbol property

The module symbol associated with the reuse block schematic

## Signature

```typescript
cbbSymbol?: ILIB_SymbolItem;
```

### itemtype

# IDMT\_SchematicItem.itemType property

Project type

## Signature

```typescript
readonly itemType: EDMT_ItemType.SCHEMATIC | EDMT_ItemType.CBB_SCHEMATIC;
```

### name

# IDMT\_SchematicItem.name property

Schematic name

## Signature

```typescript
name: string;
```

### page

# IDMT\_SchematicItem.page property

Subordinate schematic sheet

## Signature

```typescript
page: Array<IDMT_SchematicPageItem>;
```

### parentboardname

# IDMT\_SchematicItem.parentBoardName property

Name of the board it belongs to

## Signature

```typescript
parentBoardName?: string;
```

### parentprojectuuid

# IDMT\_SchematicItem.parentProjectUuid property

UUID of the project it belongs to

## Signature

```typescript
parentProjectUuid: string;
```

### uuid

# IDMT\_SchematicItem.uuid property

Schematic UUID

## Signature

```typescript
uuid: string;
```
