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

_(Optional)_ Alignment within the cell


</td></tr>
<tr><td>

[children?](./GridItemProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ Child node


</td></tr>
<tr><td>

[colSpan?](./GridItemProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Column span


</td></tr>
<tr><td>

[rowSpan?](./GridItemProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Row span


</td></tr>
</tbody></table>

---

## 属性详情

### align

# GridItemProps.align property

Alignment within the cell

## Signature

```typescript
align?: 'start' | 'center' | 'end' | 'stretch';
```

### children

# GridItemProps.children property

Child node

## Signature

```typescript
children?: any;
```

### colspan

# GridItemProps.colSpan property

Column span

## Signature

```typescript
colSpan?: number;
```

### rowspan

# GridItemProps.rowSpan property

Row span

## Signature

```typescript
rowSpan?: number;
```
