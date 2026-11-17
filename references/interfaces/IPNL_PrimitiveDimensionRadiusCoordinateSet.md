# IPNL\_PrimitiveDimensionRadiusCoordinateSet interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

半径标注坐标集

## Signature

```typescript
interface IPNL_PrimitiveDimensionRadiusCoordinateSet
```

## Remarks

半径值不随坐标给定，由被标注的椭圆 / 圆弧当前几何算出，图形一改标注值自动更新；三个控制点分别是箭头落点、引线外端、标注文字锚点

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

[ellipseId](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 被标注的椭圆 / 圆弧图元 ID，标注值取自该图元

</td></tr>
<tr><td>

[headX](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 箭头落点 X 坐标（px），须落在被标注的椭圆 / 圆弧上

</td></tr>
<tr><td>

[headY](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 箭头落点 Y 坐标（px，向上为正）

</td></tr>
<tr><td>

[rotation?](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 旋转角度（度，顺时针为正），不传为 0

</td></tr>
<tr><td>

[tailX](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 引线外端 X 坐标（px），只决定引线长度与朝向

</td></tr>
<tr><td>

[tailY](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 引线外端 Y 坐标（px，向上为正）

</td></tr>
<tr><td>

[textX](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 标注文字位置 X 坐标（px）

</td></tr>
<tr><td>

[textY](./IPNL_PrimitiveDimensionRadiusCoordinateSet.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 标注文字位置 Y 坐标（px，向上为正）

</td></tr>
</tbody></table>

---

## 属性详情

### ellipseid

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.ellipseId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

被标注的椭圆 / 圆弧图元 ID，标注值取自该图元

## Signature

```typescript
ellipseId: string;
```

### headx

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.headX property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

箭头落点 X 坐标（px），须落在被标注的椭圆 / 圆弧上

## Signature

```typescript
headX: number;
```

### heady

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.headY property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

箭头落点 Y 坐标（px，向上为正）

## Signature

```typescript
headY: number;
```

### rotation

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.rotation property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

旋转角度（度，顺时针为正），不传为 0

## Signature

```typescript
rotation?: number;
```

### tailx

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.tailX property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

引线外端 X 坐标（px），只决定引线长度与朝向

## Signature

```typescript
tailX: number;
```

### taily

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.tailY property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

引线外端 Y 坐标（px，向上为正）

## Signature

```typescript
tailY: number;
```

### textx

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.textX property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

标注文字位置 X 坐标（px）

## Signature

```typescript
textX: number;
```

### texty

# IPNL\_PrimitiveDimensionRadiusCoordinateSet.textY property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

标注文字位置 Y 坐标（px，向上为正）

## Signature

```typescript
textY: number;
```
