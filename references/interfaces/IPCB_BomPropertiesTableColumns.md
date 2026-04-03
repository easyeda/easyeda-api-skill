# IPCB\_BomPropertiesTableColumns interface

BOM 列的属性及排序规则

## 签名

```typescript
interface IPCB_BomPropertiesTableColumns 
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

[group?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

null \| 'Yes' \| 'No'


</td><td>

_（可选）_ 是否分组


</td></tr>
<tr><td>

[orderWeight?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 排列权重（大权重优先在 BOM 的左侧）


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

_（可选）_ 排序规则


</td></tr>
<tr><td>

[title?](./IPCB_BomPropertiesTableColumns.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 显示名称


</td></tr>
</tbody></table>

---

## 属性详情

### group

# IPCB\_BomPropertiesTableColumns.group property

是否分组

## 签名

```typescript
group?: null | 'Yes' | 'No';
```

### orderweight

# IPCB\_BomPropertiesTableColumns.orderWeight property

排列权重（大权重优先在 BOM 的左侧）

## 签名

```typescript
orderWeight?: number;
```

### property

# IPCB\_BomPropertiesTableColumns.property property

属性

## 签名

```typescript
property: string;
```

### sort

# IPCB\_BomPropertiesTableColumns.sort property

排序规则

## 签名

```typescript
sort?: null | 'asc' | 'desc';
```

### title

# IPCB\_BomPropertiesTableColumns.title property

显示名称

## 签名

```typescript
title?: string;
```
