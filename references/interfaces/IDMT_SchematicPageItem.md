# IDMT\_SchematicPageItem interface

原理图图页属性

## 签名

```typescript
interface IDMT_SchematicPageItem 
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

## 签名

```typescript
readonly itemType: EDMT_ItemType.SCHEMATIC_PAGE;
```

### name

# IDMT\_SchematicPageItem.name property

原理图图页名称

## 签名

```typescript
name: string;
```

### parentschematicuuid

# IDMT\_SchematicPageItem.parentSchematicUuid property

所属原理图 UUID

## 签名

```typescript
parentSchematicUuid: string;
```

### showtitleblock

# IDMT\_SchematicPageItem.showTitleBlock property

是否显示明细表

## 签名

```typescript
showTitleBlock: boolean;
```

### titleblockdata

# IDMT\_SchematicPageItem.titleBlockData property

明细表数据

## 签名

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

## 签名

```typescript
uuid: string;
```
