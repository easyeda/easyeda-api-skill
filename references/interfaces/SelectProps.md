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

_(Optional)_ 是否禁用


</td></tr>
<tr><td>

[dropDownList?](./SelectProps.md)


</td><td>


</td><td>

[SelectListItem](./SelectListItem.md)<!-- -->\[\]


</td><td>

_(Optional)_ 下拉选项列表


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

_(Optional)_ 是否只读


</td></tr>
<tr><td>

[value?](./SelectProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 当前选中值


</td></tr>
</tbody></table>

---

## 属性详情

### disabled

# SelectProps.disabled property

是否禁用

## Signature

```typescript
disabled?: boolean;
```

### dropdownlist

# SelectProps.dropDownList property

下拉选项列表

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

是否只读

## Signature

```typescript
readonly?: boolean;
```

### value

# SelectProps.value property

当前选中值

## Signature

```typescript
value?: string;
```
