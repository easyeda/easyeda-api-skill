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

_(Optional)_ Background color. Accepts any CSS color value


</td></tr>
<tr><td>

[borderColor?](./StyleProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Border color. Only takes effect when borderWidth &gt; 0


</td></tr>
<tr><td>

[borderWidth?](./StyleProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Border width (pixels). Takes effect when &gt; 0


</td></tr>
<tr><td>

[color?](./StyleProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Text color. Accepts any CSS color value


</td></tr>
<tr><td>

[cursor?](./StyleProps.md)


</td><td>


</td><td>

'pointer' \| 'default' \| 'none' \| 'move' \| 'text'


</td><td>

_(Optional)_ Cursor style when the mouse hovers


</td></tr>
<tr><td>

[display?](./StyleProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Override the display style


</td></tr>
<tr><td>

[height?](./StyleProps.md)


</td><td>


</td><td>

number \| '100%'


</td><td>

_(Optional)_ Height ( pixels) or '100%'


</td></tr>
<tr><td>

[hide?](./StyleProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether to hide (display: none), taking precedence over invisible


</td></tr>
<tr><td>

[invisible?](./StyleProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether to only hide visually (visibility: hidden), still occupying space


</td></tr>
<tr><td>

[margin?](./StyleProps.md)


</td><td>


</td><td>

number\[\]


</td><td>

_(Optional)_ Margin (CSS shorthand), e.g. \[top, right, bottom, left\] or \[vertical, horizontal\] or \[all\]


</td></tr>
<tr><td>

[padding?](./StyleProps.md)


</td><td>


</td><td>

number\[\]


</td><td>

_(Optional)_ Padding (CSS shorthand), e.g. \[top, right, bottom, left\] or \[vertical, horizontal\] or \[all\]


</td></tr>
<tr><td>

[rotate?](./StyleProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Rotation angle (degrees)


</td></tr>
<tr><td>

[width?](./StyleProps.md)


</td><td>


</td><td>

number \| '100%'


</td><td>

_(Optional)_ Width ( pixels) or '100%'


</td></tr>
</tbody></table>

---

## 属性详情

### backgroundcolor

# StyleProps.backgroundColor property

Background color. Accepts any CSS color value

## Signature

```typescript
backgroundColor?: string;
```

### bordercolor

# StyleProps.borderColor property

Border color. Only takes effect when borderWidth &gt; 0

## Signature

```typescript
borderColor?: string;
```

### borderwidth

# StyleProps.borderWidth property

Border width (pixels). Takes effect when &gt; 0

## Signature

```typescript
borderWidth?: number;
```

### color

# StyleProps.color property

Text color. Accepts any CSS color value

## Signature

```typescript
color?: string;
```

### cursor

# StyleProps.cursor property

Cursor style when the mouse hovers

## Signature

```typescript
cursor?: 'pointer' | 'default' | 'none' | 'move' | 'text';
```

### display

# StyleProps.display property

Override the display style

## Signature

```typescript
display?: string;
```

### height

# StyleProps.height property

Height ( pixels) or '100%'

## Signature

```typescript
height?: number | '100%';
```

### hide

# StyleProps.hide property

Whether to hide (display: none), taking precedence over invisible

## Signature

```typescript
hide?: boolean;
```

### invisible

# StyleProps.invisible property

Whether to only hide visually (visibility: hidden), still occupying space

## Signature

```typescript
invisible?: boolean;
```

### margin

# StyleProps.margin property

Margin (CSS shorthand), e.g. \[top, right, bottom, left\] or \[vertical, horizontal\] or \[all\]

## Signature

```typescript
margin?: number[];
```

### padding

# StyleProps.padding property

Padding (CSS shorthand), e.g. \[top, right, bottom, left\] or \[vertical, horizontal\] or \[all\]

## Signature

```typescript
padding?: number[];
```

### rotate

# StyleProps.rotate property

Rotation angle (degrees)

## Signature

```typescript
rotate?: number;
```

### width

# StyleProps.width property

Width ( pixels) or '100%'

## Signature

```typescript
width?: number | '100%';
```
