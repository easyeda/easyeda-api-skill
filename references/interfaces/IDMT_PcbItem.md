# IDMT\_PcbItem interface

PCB property

## Signature

```typescript
export interface IDMT_PcbItem 
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

[itemType](./IDMT_PcbItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.PCB](../enums/EDMT_ItemType.md) \| [EDMT\_ItemType.CBB\_PCB](../enums/EDMT_ItemType.md)


</td><td>

Project type


</td></tr>
<tr><td>

[name](./IDMT_PcbItem.md)


</td><td>


</td><td>

string


</td><td>

PCB name


</td></tr>
<tr><td>

[parentBoardName?](./IDMT_PcbItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Name of the board it belongs to


</td></tr>
<tr><td>

[parentProjectUuid](./IDMT_PcbItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the project it belongs to


</td></tr>
<tr><td>

[uuid](./IDMT_PcbItem.md)


</td><td>


</td><td>

string


</td><td>

PCB UUID


</td></tr>
</tbody></table>

---

## 属性详情

### itemtype

# IDMT\_PcbItem.itemType property

Project type

## Signature

```typescript
readonly itemType: EDMT_ItemType.PCB | EDMT_ItemType.CBB_PCB;
```

### name

# IDMT\_PcbItem.name property

PCB name

## Signature

```typescript
name: string;
```

### parentboardname

# IDMT\_PcbItem.parentBoardName property

Name of the board it belongs to

## Signature

```typescript
parentBoardName?: string;
```

### parentprojectuuid

# IDMT\_PcbItem.parentProjectUuid property

UUID of the project it belongs to

## Signature

```typescript
parentProjectUuid: string;
```

### uuid

# IDMT\_PcbItem.uuid property

PCB UUID

## Signature

```typescript
uuid: string;
```
