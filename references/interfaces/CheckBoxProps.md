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

_(Optional)_ Whether Select


</td></tr>
<tr><td>

[disabled?](./CheckBoxProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Disable


</td></tr>
<tr><td>

[name?](./CheckBoxProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Checkbox name (the form `name` attribute)


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

_(Optional)_ Whether the state can only be changed by clicking the checkbox itself


</td></tr>
<tr><td>

[text?](./CheckBoxProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Text displayed next to the checkbox


</td></tr>
</tbody></table>

---

## 属性详情

### checked

# CheckBoxProps.checked property

Whether Select

## Signature

```typescript
checked?: boolean;
```

### disabled

# CheckBoxProps.disabled property

Whether Disable

## Signature

```typescript
disabled?: boolean;
```

### name

# CheckBoxProps.name property

Checkbox name (the form `name` attribute)

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

Whether the state can only be changed by clicking the checkbox itself

## Signature

```typescript
onlyChangeByBox?: boolean;
```

### text

# CheckBoxProps.text property

Text displayed next to the checkbox

## Signature

```typescript
text?: string;
```
