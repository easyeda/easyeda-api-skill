# IDMT\_SchematicPageItem interface

原理图图页属性

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

项目类型


</td></tr>
<tr><td>

[name](./IDMT_SchematicPageItem.md)


</td><td>


</td><td>

string


</td><td>

原理图图页名称


</td></tr>
<tr><td>

[parentSchematicUuid](./IDMT_SchematicPageItem.md)


</td><td>


</td><td>

string


</td><td>

所属原理图 UUID


</td></tr>
<tr><td>

[showTitleBlock](./IDMT_SchematicPageItem.md)


</td><td>


</td><td>

boolean


</td><td>

是否显示明细表


</td></tr>
<tr><td>

[titleBlockData](./IDMT_SchematicPageItem.md)


</td><td>


</td><td>

\{ \[key: string\]: \{ showTitle: boolean; showValue: boolean; value: any; \}; \}


</td><td>

明细表数据


</td></tr>
<tr><td>

[uuid](./IDMT_SchematicPageItem.md)


</td><td>


</td><td>

string


</td><td>

原理图图页 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### itemtype

# IDMT\_SchematicPageItem.itemType property

项目类型

## Signature

```typescript
readonly itemType: EDMT_ItemType.SCHEMATIC_PAGE;
```

### name

# IDMT\_SchematicPageItem.name property

原理图图页名称

## Signature

```typescript
name: string;
```

### parentschematicuuid

# IDMT\_SchematicPageItem.parentSchematicUuid property

所属原理图 UUID

## Signature

```typescript
parentSchematicUuid: string;
```

### showtitleblock

# IDMT\_SchematicPageItem.showTitleBlock property

是否显示明细表

## Signature

```typescript
showTitleBlock: boolean;
```

### titleblockdata

# IDMT\_SchematicPageItem.titleBlockData property

明细表数据

## Signature

```typescript
titleBlockData: {
        [key: string]: {
            showTitle: boolean;
            showValue: boolean;
            value: any;
        };
    };
```

### uuid

# IDMT\_SchematicPageItem.uuid property

原理图图页 UUID

## Signature

```typescript
uuid: string;
```
