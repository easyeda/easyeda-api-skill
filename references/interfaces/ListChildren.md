# ListChildren interface

列表项：支持多级嵌套分组

## Signature

```typescript
export interface ListChildren 
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

[children?](./ListChildren.md)


</td><td>


</td><td>

[ListChildren](./ListChildren.md)<!-- -->\[\]


</td><td>

_(Optional)_ Child list items, used for multi-level nesting


</td></tr>
<tr><td>

[clearBtn?](./ListChildren.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Show clear button


</td></tr>
<tr><td>

[icons?](./ListChildren.md)


</td><td>


</td><td>

[IconProps](./IconProps.md)<!-- -->\[\]


</td><td>

_(Optional)_ List of list item icons


</td></tr>
<tr><td>

[id?](./ListChildren.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Unique ID of the list item


</td></tr>
<tr><td>

[selected?](./ListChildren.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Select


</td></tr>
<tr><td>

[title](./ListChildren.md)


</td><td>


</td><td>

string


</td><td>

List item title (required)


</td></tr>
<tr><td>

[value?](./ListChildren.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Associated value of the list item


</td></tr>
</tbody></table>

---

## 属性详情

### children

# ListChildren.children property

Child list items, used for multi-level nesting

## Signature

```typescript
children?: ListChildren[];
```

### clearbtn

# ListChildren.clearBtn property

Whether Show clear button

## Signature

```typescript
clearBtn?: boolean;
```

### icons

# ListChildren.icons property

List of list item icons

## Signature

```typescript
icons?: IconProps[];
```

### id

# ListChildren.id property

Unique ID of the list item

## Signature

```typescript
id?: string;
```

### selected

# ListChildren.selected property

Whether Select

## Signature

```typescript
selected?: boolean;
```

### title

# ListChildren.title property

List item title (required)

## Signature

```typescript
title: string;
```

### value

# ListChildren.value property

Associated value of the list item

## Signature

```typescript
value?: string;
```
