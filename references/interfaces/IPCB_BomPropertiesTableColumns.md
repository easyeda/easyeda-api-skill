# IPCB\_BomPropertiesTableColumns interface

BOM 列的属性及排序规则

## Signature

```typescript
interface IPCB_BomPropertiesTableColumns 
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

[group?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

null \| 'Yes' \| 'No'


</td><td>

_(Optional)_ 是否分组


</td></tr>
<tr><td>

[orderWeight?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 排列权重（大权重优先在 BOM 的左侧）


</td></tr>
<tr><td>

[property](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

string


</td><td>

属性


</td></tr>
<tr><td>

[sort?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

null \| 'asc' \| 'desc'


</td><td>

_(Optional)_ 排序规则


</td></tr>
<tr><td>

[title?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 显示名称


</td></tr>
</tbody></table>

---

## 属性详情

### group

# IPCB\_BomPropertiesTableColumns.group property

是否分组

## Signature

```typescript
group?: null | 'Yes' | 'No';
```

### orderweight

# IPCB\_BomPropertiesTableColumns.orderWeight property

排列权重（大权重优先在 BOM 的左侧）

## Signature

```typescript
orderWeight?: number;
```

### property

# IPCB\_BomPropertiesTableColumns.property property

属性

## Signature

```typescript
property: string;
```

### sort

# IPCB\_BomPropertiesTableColumns.sort property

排序规则

## Signature

```typescript
sort?: null | 'asc' | 'desc';
```

### title

# IPCB\_BomPropertiesTableColumns.title property

显示名称

## Signature

```typescript
title?: string;
```
