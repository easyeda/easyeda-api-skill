# IDMT\_BoardItem interface

板子属性

## 签名

```typescript
interface IDMT_BoardItem 
```

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


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

## 签名

```typescript
readonly itemType: EDMT_ItemType.BOARD;
```

### name

# IDMT\_BoardItem.name property

板子名称

## 签名

```typescript
name: string;
```

### parentprojectuuid

# IDMT\_BoardItem.parentProjectUuid property

所属工程 UUID

## 签名

```typescript
parentProjectUuid: string;
```

### pcb

# IDMT\_BoardItem.pcb property

下属 PCB

## 签名

```typescript
pcb: IDMT_PcbItem;
```

### schematic

# IDMT\_BoardItem.schematic property

下属原理图

## 签名

```typescript
schematic: IDMT_SchematicItem;
```
