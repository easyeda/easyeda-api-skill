# ButtonProps interface

按钮组件：可点击触发的操作按钮

## Signature

```typescript
export interface ButtonProps 
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

[disabled?](./ButtonProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Disable


</td></tr>
<tr><td>

[icon?](./ButtonProps.md)


</td><td>


</td><td>

[IconProps](./IconProps.md)


</td><td>

_(Optional)_ Button icon configuration


</td></tr>
<tr><td>

[onClick?](./ButtonProps.md)


</td><td>


</td><td>

() =&gt; void


</td><td>

_(Optional)_ 点击按钮时触发


</td></tr>
<tr><td>

[text?](./ButtonProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Button show text


</td></tr>
<tr><td>

[type?](./ButtonProps.md)


</td><td>


</td><td>

'default' \| 'primary' \| 'danger' \| 'forbidden' \| 'text'


</td><td>

_(Optional)_ Button style type: default / primary / danger / forbidden / text


</td></tr>
</tbody></table>

---

## 属性详情

### disabled

# ButtonProps.disabled property

Whether Disable

## Signature

```typescript
disabled?: boolean;
```

### icon

# ButtonProps.icon property

Button icon configuration

## Signature

```typescript
icon?: IconProps;
```

### onclick

# ButtonProps.onClick property

点击按钮时触发

## Signature

```typescript
onClick?: () => void;
```

### text

# ButtonProps.text property

Button show text

## Signature

```typescript
text?: string;
```

### type

# ButtonProps.type property

Button style type: default / primary / danger / forbidden / text

## Signature

```typescript
type?: 'default' | 'primary' | 'danger' | 'forbidden' | 'text';
```
