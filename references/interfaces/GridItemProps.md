# GridItemProps interface

Grid 子项：网格中的单个子元素

## Signature

```typescript
export interface GridItemProps extends StyleProps 
```
**Extends:** [StyleProps](./StyleProps.md)

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

[align?](./GridItemProps.md)


</td><td>


</td><td>

'start' \| 'center' \| 'end' \| 'stretch'


</td><td>

_(Optional)_ 单元格内对齐方式


</td></tr>
<tr><td>

[children?](./GridItemProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ 子节点


</td></tr>
<tr><td>

[colSpan?](./GridItemProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 跨列数


</td></tr>
<tr><td>

[rowSpan?](./GridItemProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 跨行数


</td></tr>
</tbody></table>

---

## 属性详情

### align

# GridItemProps.align property

单元格内对齐方式

## Signature

```typescript
align?: 'start' | 'center' | 'end' | 'stretch';
```

### children

# GridItemProps.children property

子节点

## Signature

```typescript
children?: any;
```

### colspan

# GridItemProps.colSpan property

跨列数

## Signature

```typescript
colSpan?: number;
```

### rowspan

# GridItemProps.rowSpan property

跨行数

## Signature

```typescript
rowSpan?: number;
```
