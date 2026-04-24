# IDMT\_PcbItem interface

PCB 属性

## Signature

```typescript
interface IDMT_PcbItem 
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

项目类型


</td></tr>
<tr><td>

[name](./IDMT_PcbItem.md)


</td><td>


</td><td>

string


</td><td>

PCB 名称


</td></tr>
<tr><td>

[parentBoardName?](./IDMT_PcbItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 所属板子名称


</td></tr>
<tr><td>

[parentProjectUuid](./IDMT_PcbItem.md)


</td><td>


</td><td>

string


</td><td>

所属工程 UUID


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

项目类型

## Signature

```typescript
readonly itemType: EDMT_ItemType.PCB | EDMT_ItemType.CBB_PCB;
```

### name

# IDMT\_PcbItem.name property

PCB 名称

## Signature

```typescript
name: string;
```

### parentboardname

# IDMT\_PcbItem.parentBoardName property

所属板子名称

## Signature

```typescript
parentBoardName?: string;
```

### parentprojectuuid

# IDMT\_PcbItem.parentProjectUuid property

所属工程 UUID

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
