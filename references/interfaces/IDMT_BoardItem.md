# IDMT\_BoardItem interface

Board property

## Signature

```typescript
export interface IDMT_BoardItem 
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

[itemType](./IDMT_BoardItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.BOARD](../enums/EDMT_ItemType.md)


</td><td>

Project type


</td></tr>
<tr><td>

[name](./IDMT_BoardItem.md)


</td><td>


</td><td>

string


</td><td>

Board name


</td></tr>
<tr><td>

[parentProjectUuid](./IDMT_BoardItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the project it belongs to


</td></tr>
<tr><td>

[pcb](./IDMT_BoardItem.md)


</td><td>


</td><td>

[IDMT\_PcbItem](./IDMT_PcbItem.md)


</td><td>

Subordinate PCB


</td></tr>
<tr><td>

[schematic](./IDMT_BoardItem.md)


</td><td>


</td><td>

[IDMT\_SchematicItem](./IDMT_SchematicItem.md)


</td><td>

Subordinate schematic


</td></tr>
</tbody></table>

---

## 属性详情

### itemtype

# IDMT\_BoardItem.itemType property

Project type

## Signature

```typescript
readonly itemType: EDMT_ItemType.BOARD;
```

### name

# IDMT\_BoardItem.name property

Board name

## Signature

```typescript
name: string;
```

### parentprojectuuid

# IDMT\_BoardItem.parentProjectUuid property

UUID of the project it belongs to

## Signature

```typescript
parentProjectUuid: string;
```

### pcb

# IDMT\_BoardItem.pcb property

Subordinate PCB

## Signature

```typescript
pcb: IDMT_PcbItem;
```

### schematic

# IDMT\_BoardItem.schematic property

Subordinate schematic

## Signature

```typescript
schematic: IDMT_SchematicItem;
```
