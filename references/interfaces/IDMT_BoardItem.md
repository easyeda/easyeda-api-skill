# IDMT\_BoardItem interface

板子属性

## Signature

```typescript
interface IDMT_BoardItem 
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

项目类型


</td></tr>
<tr><td>

[name](./IDMT_BoardItem.md)


</td><td>


</td><td>

string


</td><td>

板子名称


</td></tr>
<tr><td>

[parentProjectUuid](./IDMT_BoardItem.md)


</td><td>


</td><td>

string


</td><td>

所属工程 UUID


</td></tr>
<tr><td>

[pcb](./IDMT_BoardItem.md)


</td><td>


</td><td>

[IDMT\_PcbItem](./IDMT_PcbItem.md)


</td><td>

下属 PCB


</td></tr>
<tr><td>

[schematic](./IDMT_BoardItem.md)


</td><td>


</td><td>

[IDMT\_SchematicItem](./IDMT_SchematicItem.md)


</td><td>

下属原理图


</td></tr>
</tbody></table>

---

## 属性详情

### itemtype

# IDMT\_BoardItem.itemType property

项目类型

## Signature

```typescript
readonly itemType: EDMT_ItemType.BOARD;
```

### name

# IDMT\_BoardItem.name property

板子名称

## Signature

```typescript
name: string;
```

### parentprojectuuid

# IDMT\_BoardItem.parentProjectUuid property

所属工程 UUID

## Signature

```typescript
parentProjectUuid: string;
```

### pcb

# IDMT\_BoardItem.pcb property

下属 PCB

## Signature

```typescript
pcb: IDMT_PcbItem;
```

### schematic

# IDMT\_BoardItem.schematic property

下属原理图

## Signature

```typescript
schematic: IDMT_SchematicItem;
```
