# IPNL\_PrimitiveDimensionLengthCoordinateSet interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

长度标注坐标集

## Signature

```typescript
interface IPNL_PrimitiveDimensionLengthCoordinateSet
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

[direction?](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

[EPNL\_PrimitiveDimensionDirection](../enums/EPNL_PrimitiveDimensionDirection.md)

</td><td>

**_(ALPHA)_** _(Optional)_ 测量方向，不传由编辑器按起点 / 终点推断

</td></tr>
<tr><td>

[endX](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 终点 X 坐标（px）

</td></tr>
<tr><td>

[endY](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 终点 Y 坐标（px，向上为正）

</td></tr>
<tr><td>

[measureEndX?](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 终点测量点 X 坐标（px），不传由编辑器按默认偏移计算

</td></tr>
<tr><td>

[measureEndY?](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 终点测量点 Y 坐标（px，向上为正），不传由编辑器按默认偏移计算

</td></tr>
<tr><td>

[measureStartX?](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 起点测量点 X 坐标（px），不传由编辑器按默认偏移计算

</td></tr>
<tr><td>

[measureStartY?](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 起点测量点 Y 坐标（px，向上为正），不传由编辑器按默认偏移计算

</td></tr>
<tr><td>

[rotation?](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 旋转角度（度，逆时针为正），不传为 0

</td></tr>
<tr><td>

[startX](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 起点 X 坐标（px）

</td></tr>
<tr><td>

[startY](./IPNL_PrimitiveDimensionLengthCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 起点 Y 坐标（px，向上为正）

</td></tr>
</tbody></table>

---

## 属性详情

### direction

# IPNL\_PrimitiveDimensionLengthCoordinateSet.direction property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

测量方向，不传由编辑器按起点 / 终点推断

## Signature

```typescript
direction?: EPNL_PrimitiveDimensionDirection;
```

### endx

# IPNL\_PrimitiveDimensionLengthCoordinateSet.endX property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

终点 X 坐标（px）

## Signature

```typescript
endX: number;
```

### endy

# IPNL\_PrimitiveDimensionLengthCoordinateSet.endY property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

终点 Y 坐标（px，向上为正）

## Signature

```typescript
endY: number;
```

### measureendx

# IPNL\_PrimitiveDimensionLengthCoordinateSet.measureEndX property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

终点测量点 X 坐标（px），不传由编辑器按默认偏移计算

## Signature

```typescript
measureEndX?: number;
```

### measureendy

# IPNL\_PrimitiveDimensionLengthCoordinateSet.measureEndY property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

终点测量点 Y 坐标（px，向上为正），不传由编辑器按默认偏移计算

## Signature

```typescript
measureEndY?: number;
```

### measurestartx

# IPNL\_PrimitiveDimensionLengthCoordinateSet.measureStartX property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

起点测量点 X 坐标（px），不传由编辑器按默认偏移计算

## Signature

```typescript
measureStartX?: number;
```

### measurestarty

# IPNL\_PrimitiveDimensionLengthCoordinateSet.measureStartY property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

起点测量点 Y 坐标（px，向上为正），不传由编辑器按默认偏移计算

## Signature

```typescript
measureStartY?: number;
```

### rotation

# IPNL\_PrimitiveDimensionLengthCoordinateSet.rotation property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

旋转角度（度，逆时针为正），不传为 0

## Signature

```typescript
rotation?: number;
```

### startx

# IPNL\_PrimitiveDimensionLengthCoordinateSet.startX property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

起点 X 坐标（px）

## Signature

```typescript
startX: number;
```

### starty

# IPNL\_PrimitiveDimensionLengthCoordinateSet.startY property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

起点 Y 坐标（px，向上为正）

## Signature

```typescript
startY: number;
```
