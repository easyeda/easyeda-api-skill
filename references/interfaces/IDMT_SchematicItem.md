# IDMT\_SchematicItem interface

原理图属性

## 签名

```typescript
interface IDMT_SchematicItem 
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

[cbbSymbol?](./IDMT_SchematicItem.md)


</td><td>


</td><td>

[ILIB\_SymbolItem](./ILIB_SymbolItem.md)


</td><td>

_（可选）_ 复用模块原理图关联的模块符号


</td></tr>
<tr><td>

[itemType](./IDMT_SchematicItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.SCHEMATIC](../enums/EDMT_ItemType.md) \| [EDMT\_ItemType.CBB\_SCHEMATIC](../enums/EDMT_ItemType.md)


</td><td>

项目类型


</td></tr>
<tr><td>

[name](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

原理图名称


</td></tr>
<tr><td>

[page](./IDMT_SchematicItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_SchematicPageItem](./IDMT_SchematicPageItem.md)<!-- -->&gt;


</td><td>

下属原理图图页


</td></tr>
<tr><td>

[parentBoardUuid?](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 所属板子 UUID


</td></tr>
<tr><td>

[parentProjectUuid](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

所属工程 UUID


</td></tr>
<tr><td>

[uuid](./IDMT_SchematicItem.md)


</td><td>


</td><td>

string


</td><td>

原理图 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### cbbsymbol

# IDMT\_SchematicItem.cbbSymbol property

复用模块原理图关联的模块符号

## 签名

```typescript
cbbSymbol?: ILIB_SymbolItem;
```

### itemtype

# IDMT\_SchematicItem.itemType property

项目类型

## 签名

```typescript
readonly itemType: EDMT_ItemType.SCHEMATIC | EDMT_ItemType.CBB_SCHEMATIC;
```

### name

# IDMT\_SchematicItem.name property

原理图名称

## 签名

```typescript
name: string;
```

### page

# IDMT\_SchematicItem.page property

下属原理图图页

## 签名

```typescript
page: Array<IDMT_SchematicPageItem>;
```

### parentboarduuid

# IDMT\_SchematicItem.parentBoardUuid property

所属板子 UUID

## 签名

```typescript
parentBoardUuid?: string;
```

### parentprojectuuid

# IDMT\_SchematicItem.parentProjectUuid property

所属工程 UUID

## 签名

```typescript
parentProjectUuid: string;
```

### uuid

# IDMT\_SchematicItem.uuid property

原理图 UUID

## 签名

```typescript
uuid: string;
```
