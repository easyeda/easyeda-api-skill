# IDMT\_SchematicPageItem interface

Schematic sheet property

## Signature

```typescript
interface IDMT_SchematicPageItem
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

[itemType](./IDMT_SchematicPageItem.md)

</td><td>

`readonly`

</td><td>

[EDMT\_ItemType.SCHEMATIC\_PAGE](../enums/EDMT_ItemType.md)

</td><td>

Project type

</td></tr>
<tr><td>

[name](./IDMT_SchematicPageItem.md)

</td><td>

</td><td>

string

</td><td>

Schematic sheet name

</td></tr>
<tr><td>

[parentSchematicUuid](./IDMT_SchematicPageItem.md)

</td><td>

</td><td>

string

</td><td>

UUID of the schematic it belongs to

</td></tr>
<tr><td>

[showTitleBlock](./IDMT_SchematicPageItem.md)

</td><td>

</td><td>

boolean

</td><td>

Whether to show the title block

</td></tr>
<tr><td>

[titleBlockData](./IDMT_SchematicPageItem.md)

</td><td>

</td><td>

Record&lt;string, { showTitle: boolean; showValue: boolean; value: any }&gt;

</td><td>

Title block data

</td></tr>
<tr><td>

[uuid](./IDMT_SchematicPageItem.md)

</td><td>

</td><td>

string

</td><td>

Schematic sheet UUID

</td></tr>
</tbody></table>

---

## 属性详情

### itemtype

# IDMT\_SchematicPageItem.itemType property

Project type

## Signature

```typescript
readonly itemType: EDMT_ItemType.SCHEMATIC_PAGE;
```

### name

# IDMT\_SchematicPageItem.name property

Schematic sheet name

## Signature

```typescript
name: string;
```

### parentschematicuuid

# IDMT\_SchematicPageItem.parentSchematicUuid property

UUID of the schematic it belongs to

## Signature

```typescript
parentSchematicUuid: string;
```

### showtitleblock

# IDMT\_SchematicPageItem.showTitleBlock property

Whether to show the title block

## Signature

```typescript
showTitleBlock: boolean;
```

### titleblockdata

# IDMT\_SchematicPageItem.titleBlockData property

Title block data

## Signature

```typescript
titleBlockData: Record<string, { showTitle: boolean; showValue: boolean; value: any }>;
```

### uuid

# IDMT\_SchematicPageItem.uuid property

Schematic sheet UUID

## Signature

```typescript
uuid: string;
```
