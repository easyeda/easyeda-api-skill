# TextAreaProps interface

多行文本输入组件

## Signature

```typescript
export interface TextAreaProps 
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

[disabled?](./TextAreaProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否禁用输入


</td></tr>
<tr><td>

[name?](./TextAreaProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 输入框名称（表单 name 属性）


</td></tr>
<tr><td>

[onChange?](./TextAreaProps.md)


</td><td>


</td><td>

(value: string) =&gt; void


</td><td>

_(Optional)_ 文本变化时触发，参数为最新值


</td></tr>
<tr><td>

[placeholder?](./TextAreaProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 占位提示文本


</td></tr>
<tr><td>

[resizable?](./TextAreaProps.md)


</td><td>


</td><td>

\{ x?: undefined \| false \| true; y?: undefined \| false \| true \}


</td><td>

_(Optional)_ 是否可调整尺寸（x 水平 / y 垂直）


</td></tr>
<tr><td>

[value?](./TextAreaProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 当前文本值


</td></tr>
</tbody></table>

---

## 属性详情

### disabled

# TextAreaProps.disabled property

是否禁用输入

## Signature

```typescript
disabled?: boolean;
```

### name

# TextAreaProps.name property

输入框名称（表单 name 属性）

## Signature

```typescript
name?: string;
```

### onchange

# TextAreaProps.onChange property

文本变化时触发，参数为最新值

## Signature

```typescript
onChange?: (value: string) => void;
```

### placeholder

# TextAreaProps.placeholder property

占位提示文本

## Signature

```typescript
placeholder?: string;
```

### resizable

# TextAreaProps.resizable property

是否可调整尺寸（x 水平 / y 垂直）

## Signature

```typescript
resizable?: { x?: undefined | false | true; y?: undefined | false | true };
```

### value

# TextAreaProps.value property

当前文本值

## Signature

```typescript
value?: string;
```
