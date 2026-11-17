# ILIB\_SymbolTextAnchor interface

符号文本锚点

## Signature

```typescript
interface ILIB_SymbolTextAnchor
```

## Remarks

位号、值等文本在符号内的默认摆放位置，可直接用于判断文本是否与导线重叠

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

[alignHorizontal?](./ILIB_SymbolTextAnchor.md)

</td><td>

</td><td>

'left' \| 'center' \| 'right'

</td><td>

_(Optional)_ 水平对齐方式

</td></tr>
<tr><td>

[alignVertical?](./ILIB_SymbolTextAnchor.md)

</td><td>

</td><td>

'top' \| 'middle' \| 'bottom'

</td><td>

_(Optional)_ 垂直对齐方式

</td></tr>
<tr><td>

[key](./ILIB_SymbolTextAnchor.md)

</td><td>

</td><td>

string

</td><td>

文本对应的属性键，如 `Designator` / `Value` / `Name`

</td></tr>
<tr><td>

[rotation](./ILIB_SymbolTextAnchor.md)

</td><td>

</td><td>

number

</td><td>

旋转角度

</td></tr>
<tr><td>

[x](./ILIB_SymbolTextAnchor.md)

</td><td>

</td><td>

number

</td><td>

锚点 X 坐标

</td></tr>
<tr><td>

[y](./ILIB_SymbolTextAnchor.md)

</td><td>

</td><td>

number

</td><td>

锚点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### alignhorizontal

# ILIB\_SymbolTextAnchor.alignHorizontal property

水平对齐方式

## Signature

```typescript
alignHorizontal?: 'left' | 'center' | 'right';
```

### alignvertical

# ILIB\_SymbolTextAnchor.alignVertical property

垂直对齐方式

## Signature

```typescript
alignVertical?: 'top' | 'middle' | 'bottom';
```

### key

# ILIB\_SymbolTextAnchor.key property

文本对应的属性键，如 `Designator` / `Value` / `Name`

## Signature

```typescript
key: string;
```

### rotation

# ILIB\_SymbolTextAnchor.rotation property

旋转角度

## Signature

```typescript
rotation: number;
```

### x

# ILIB\_SymbolTextAnchor.x property

锚点 X 坐标

## Signature

```typescript
x: number;
```

### y

# ILIB\_SymbolTextAnchor.y property

锚点 Y 坐标

## Signature

```typescript
y: number;
```
