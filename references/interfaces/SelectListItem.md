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

_(Optional)_ Child options, used for multi-level nesting


</td></tr>
<tr><td>

[selected?](./SelectListItem.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Select


</td></tr>
<tr><td>

[title](./SelectListItem.md)


</td><td>


</td><td>

string


</td><td>

Option title (required)


</td></tr>
<tr><td>

[value?](./SelectListItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Associated value of the option


</td></tr>
</tbody></table>

---

## 属性详情

### children

# SelectListItem.children property

Child options, used for multi-level nesting

## Signature

```typescript
children?: SelectListItem[];
```

### selected

# SelectListItem.selected property

Whether Select

## Signature

```typescript
selected?: boolean;
```

### title

# SelectListItem.title property

Option title (required)

## Signature

```typescript
title: string;
```

### value

# SelectListItem.value property

Associated value of the option

## Signature

```typescript
value?: string;
```
