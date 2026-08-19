# CheckBoxProps interface

复选框组件：可勾选的状态控件

## Signature

```typescript
export interface CheckBoxProps 
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

[checked?](./CheckBoxProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否选中


</td></tr>
<tr><td>

[disabled?](./CheckBoxProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否禁用


</td></tr>
<tr><td>

[name?](./CheckBoxProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 复选框名称（表单 name 属性）


</td></tr>
<tr><td>

[onChange?](./CheckBoxProps.md)


</td><td>


</td><td>

(checked: boolean) =&gt; void


</td><td>

_(Optional)_ 选中状态变化时触发，参数为最新选中值


</td></tr>
<tr><td>

[onlyChangeByBox?](./CheckBoxProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否仅通过点击勾选框本身来改变状态


</td></tr>
<tr><td>

[text?](./CheckBoxProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 复选框旁显示文本


</td></tr>
</tbody></table>

---

## 属性详情

### checked

# CheckBoxProps.checked property

是否选中

## Signature

```typescript
checked?: boolean;
```

### disabled

# CheckBoxProps.disabled property

是否禁用

## Signature

```typescript
disabled?: boolean;
```

### name

# CheckBoxProps.name property

复选框名称（表单 name 属性）

## Signature

```typescript
name?: string;
```

### onchange

# CheckBoxProps.onChange property

选中状态变化时触发，参数为最新选中值

## Signature

```typescript
onChange?: (checked: boolean) => void;
```

### onlychangebybox

# CheckBoxProps.onlyChangeByBox property

是否仅通过点击勾选框本身来改变状态

## Signature

```typescript
onlyChangeByBox?: boolean;
```

### text

# CheckBoxProps.text property

复选框旁显示文本

## Signature

```typescript
text?: string;
```
