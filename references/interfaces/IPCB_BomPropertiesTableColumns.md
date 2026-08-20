# IPCB\_BomPropertiesTableColumns interface

BOM column properties and sorting rules

## Signature

```typescript
export interface IPCB_BomPropertiesTableColumns 
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

_(Optional)_ Whether to group


</td></tr>
<tr><td>

[orderWeight?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Order weight (a larger weight is placed on the left side of the BOM first)


</td></tr>
<tr><td>

[property](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

string


</td><td>

Property


</td></tr>
<tr><td>

[sort?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

null \| 'asc' \| 'desc'


</td><td>

_(Optional)_ Sorting rule


</td></tr>
<tr><td>

[title?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Show name


</td></tr>
</tbody></table>

---

## 属性详情

### group

# IPCB\_BomPropertiesTableColumns.group property

Whether to group

## Signature

```typescript
group?: null | 'Yes' | 'No';
```

### orderweight

# IPCB\_BomPropertiesTableColumns.orderWeight property

Order weight (a larger weight is placed on the left side of the BOM first)

## Signature

```typescript
orderWeight?: number;
```

### property

# IPCB\_BomPropertiesTableColumns.property property

Property

## Signature

```typescript
property: string;
```

### sort

# IPCB\_BomPropertiesTableColumns.sort property

Sorting rule

## Signature

```typescript
sort?: null | 'asc' | 'desc';
```

### title

# IPCB\_BomPropertiesTableColumns.title property

Show name

## Signature

```typescript
title?: string;
```
