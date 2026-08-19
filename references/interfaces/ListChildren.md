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

_(Optional)_ 子列表项，用于多级嵌套


</td></tr>
<tr><td>

[clearBtn?](./ListChildren.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否显示清除按钮


</td></tr>
<tr><td>

[icons?](./ListChildren.md)


</td><td>


</td><td>

[IconProps](./IconProps.md)<!-- -->\[\]


</td><td>

_(Optional)_ 列表项图标列表


</td></tr>
<tr><td>

[id?](./ListChildren.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 列表项唯一标识


</td></tr>
<tr><td>

[selected?](./ListChildren.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否选中


</td></tr>
<tr><td>

[title](./ListChildren.md)


</td><td>


</td><td>

string


</td><td>

列表项标题（必填）


</td></tr>
<tr><td>

[value?](./ListChildren.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 列表项关联值


</td></tr>
</tbody></table>

---

## 属性详情

### children

# ListChildren.children property

子列表项，用于多级嵌套

## Signature

```typescript
children?: ListChildren[];
```

### clearbtn

# ListChildren.clearBtn property

是否显示清除按钮

## Signature

```typescript
clearBtn?: boolean;
```

### icons

# ListChildren.icons property

列表项图标列表

## Signature

```typescript
icons?: IconProps[];
```

### id

# ListChildren.id property

列表项唯一标识

## Signature

```typescript
id?: string;
```

### selected

# ListChildren.selected property

是否选中

## Signature

```typescript
selected?: boolean;
```

### title

# ListChildren.title property

列表项标题（必填）

## Signature

```typescript
title: string;
```

### value

# ListChildren.value property

列表项关联值

## Signature

```typescript
value?: string;
```
