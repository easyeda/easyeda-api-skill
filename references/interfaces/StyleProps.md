# StyleProps interface

通用样式属性：可被布局容器等组件继承的样式集合

## Signature

```typescript
export interface StyleProps 
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

[backgroundColor?](./StyleProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 背景颜色，接受任意 CSS 颜色值


</td></tr>
<tr><td>

[borderColor?](./StyleProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 边框颜色，仅在 borderWidth &gt; 0 时生效


</td></tr>
<tr><td>

[borderWidth?](./StyleProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 边框宽度（像素），<!-- -->&gt;<!-- -->0 时生效


</td></tr>
<tr><td>

[color?](./StyleProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 文本颜色，接受任意 CSS 颜色值


</td></tr>
<tr><td>

[cursor?](./StyleProps.md)


</td><td>


</td><td>

'pointer' \| 'default' \| 'none' \| 'move' \| 'text'


</td><td>

_(Optional)_ 鼠标悬停时的光标样式


</td></tr>
<tr><td>

[display?](./StyleProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 覆盖 display 样式


</td></tr>
<tr><td>

[height?](./StyleProps.md)


</td><td>


</td><td>

number \| '100%'


</td><td>

_(Optional)_ 高度（像素）或 '100%'


</td></tr>
<tr><td>

[hide?](./StyleProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否隐藏（display: none），优先于 invisible


</td></tr>
<tr><td>

[invisible?](./StyleProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否仅隐藏视觉（visibility: hidden），仍占位


</td></tr>
<tr><td>

[margin?](./StyleProps.md)


</td><td>


</td><td>

number\[\]


</td><td>

_(Optional)_ 外边距（CSS 简写），如 \[上,右,下,左\] 或 \[上下,左右\] 或 \[全部\]


</td></tr>
<tr><td>

[padding?](./StyleProps.md)


</td><td>


</td><td>

number\[\]


</td><td>

_(Optional)_ 内边距（CSS 简写），如 \[上,右,下,左\] 或 \[上下,左右\] 或 \[全部\]


</td></tr>
<tr><td>

[rotate?](./StyleProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 旋转角度（度）


</td></tr>
<tr><td>

[width?](./StyleProps.md)


</td><td>


</td><td>

number \| '100%'


</td><td>

_(Optional)_ 宽度（像素）或 '100%'


</td></tr>
</tbody></table>

---

## 属性详情

### backgroundcolor

# StyleProps.backgroundColor property

背景颜色，接受任意 CSS 颜色值

## Signature

```typescript
backgroundColor?: string;
```

### bordercolor

# StyleProps.borderColor property

边框颜色，仅在 borderWidth &gt; 0 时生效

## Signature

```typescript
borderColor?: string;
```

### borderwidth

# StyleProps.borderWidth property

边框宽度（像素），<!-- -->&gt;<!-- -->0 时生效

## Signature

```typescript
borderWidth?: number;
```

### color

# StyleProps.color property

文本颜色，接受任意 CSS 颜色值

## Signature

```typescript
color?: string;
```

### cursor

# StyleProps.cursor property

鼠标悬停时的光标样式

## Signature

```typescript
cursor?: 'pointer' | 'default' | 'none' | 'move' | 'text';
```

### display

# StyleProps.display property

覆盖 display 样式

## Signature

```typescript
display?: string;
```

### height

# StyleProps.height property

高度（像素）或 '100%'

## Signature

```typescript
height?: number | '100%';
```

### hide

# StyleProps.hide property

是否隐藏（display: none），优先于 invisible

## Signature

```typescript
hide?: boolean;
```

### invisible

# StyleProps.invisible property

是否仅隐藏视觉（visibility: hidden），仍占位

## Signature

```typescript
invisible?: boolean;
```

### margin

# StyleProps.margin property

外边距（CSS 简写），如 \[上,右,下,左\] 或 \[上下,左右\] 或 \[全部\]

## Signature

```typescript
margin?: number[];
```

### padding

# StyleProps.padding property

内边距（CSS 简写），如 \[上,右,下,左\] 或 \[上下,左右\] 或 \[全部\]

## Signature

```typescript
padding?: number[];
```

### rotate

# StyleProps.rotate property

旋转角度（度）

## Signature

```typescript
rotate?: number;
```

### width

# StyleProps.width property

宽度（像素）或 '100%'

## Signature

```typescript
width?: number | '100%';
```
