# SelectProps interface

下拉选择器：基于输入框的下拉选择控件

## Signature

```typescript
export interface SelectProps 
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

[disabled?](./SelectProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Disable


</td></tr>
<tr><td>

[dropDownList?](./SelectProps.md)


</td><td>


</td><td>

[SelectListItem](./SelectListItem.md)<!-- -->\[\]


</td><td>

_(Optional)_ Dropdown option list


</td></tr>
<tr><td>

[onChange?](./SelectProps.md)


</td><td>


</td><td>

(value: string) =&gt; void


</td><td>

_(Optional)_ 选中值变化时触发，参数为选中项的值


</td></tr>
<tr><td>

[readonly?](./SelectProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is read-only


</td></tr>
<tr><td>

[value?](./SelectProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Current select value


</td></tr>
</tbody></table>

---

## 属性详情

### disabled

# SelectProps.disabled property

Whether Disable

## Signature

```typescript
disabled?: boolean;
```

### dropdownlist

# SelectProps.dropDownList property

Dropdown option list

## Signature

```typescript
dropDownList?: SelectListItem[];
```

### onchange

# SelectProps.onChange property

选中值变化时触发，参数为选中项的值

## Signature

```typescript
onChange?: (value: string) => void;
```

### readonly

# SelectProps.readonly property

Whether it is read-only

## Signature

```typescript
readonly?: boolean;
```

### value

# SelectProps.value property

Current select value

## Signature

```typescript
value?: string;
```
