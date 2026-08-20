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

_(Optional)_ Whether Disable input


</td></tr>
<tr><td>

[name?](./TextAreaProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Input box name (the form `name` attribute)


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

_(Optional)_ Placeholder text


</td></tr>
<tr><td>

[resizable?](./TextAreaProps.md)


</td><td>


</td><td>

\{ x?: undefined \| false \| true; y?: undefined \| false \| true \}


</td><td>

_(Optional)_ Whether it is resizable (x horizontal / y vertical)


</td></tr>
<tr><td>

[value?](./TextAreaProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Current text value


</td></tr>
</tbody></table>

---

## 属性详情

### disabled

# TextAreaProps.disabled property

Whether Disable input

## Signature

```typescript
disabled?: boolean;
```

### name

# TextAreaProps.name property

Input box name (the form `name` attribute)

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

Placeholder text

## Signature

```typescript
placeholder?: string;
```

### resizable

# TextAreaProps.resizable property

Whether it is resizable (x horizontal / y vertical)

## Signature

```typescript
resizable?: { x?: undefined | false | true; y?: undefined | false | true };
```

### value

# TextAreaProps.value property

Current text value

## Signature

```typescript
value?: string;
```
