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

_(Optional)_ 是否禁用


</td></tr>
<tr><td>

[icon?](./ButtonProps.md)


</td><td>


</td><td>

[IconProps](./IconProps.md)


</td><td>

_(Optional)_ 按钮图标配置


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

_(Optional)_ 按钮显示文本


</td></tr>
<tr><td>

[type?](./ButtonProps.md)


</td><td>


</td><td>

'default' \| 'primary' \| 'danger' \| 'forbidden' \| 'text'


</td><td>

_(Optional)_ 按钮样式类型：default 默认 / primary 主按钮 / danger 危险 / forbidden 禁用态 / text 纯文本


</td></tr>
</tbody></table>

---

## 属性详情

### disabled

# ButtonProps.disabled property

是否禁用

## Signature

```typescript
disabled?: boolean;
```

### icon

# ButtonProps.icon property

按钮图标配置

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

按钮显示文本

## Signature

```typescript
text?: string;
```

### type

# ButtonProps.type property

按钮样式类型：default 默认 / primary 主按钮 / danger 危险 / forbidden 禁用态 / text 纯文本

## Signature

```typescript
type?: 'default' | 'primary' | 'danger' | 'forbidden' | 'text';
```
