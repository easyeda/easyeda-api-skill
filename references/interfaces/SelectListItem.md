# SelectListItem interface

下拉选项：支持多级嵌套分组

## Signature

```typescript
export interface SelectListItem 
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

[children?](./SelectListItem.md)


</td><td>


</td><td>

[SelectListItem](./SelectListItem.md)<!-- -->\[\]


</td><td>

_(Optional)_ 子选项，用于多级嵌套


</td></tr>
<tr><td>

[selected?](./SelectListItem.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否选中


</td></tr>
<tr><td>

[title](./SelectListItem.md)


</td><td>


</td><td>

string


</td><td>

选项标题（必填）


</td></tr>
<tr><td>

[value?](./SelectListItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 选项关联值


</td></tr>
</tbody></table>

---

## 属性详情

### children

# SelectListItem.children property

子选项，用于多级嵌套

## Signature

```typescript
children?: SelectListItem[];
```

### selected

# SelectListItem.selected property

是否选中

## Signature

```typescript
selected?: boolean;
```

### title

# SelectListItem.title property

选项标题（必填）

## Signature

```typescript
title: string;
```

### value

# SelectListItem.value property

选项关联值

## Signature

```typescript
value?: string;
```
