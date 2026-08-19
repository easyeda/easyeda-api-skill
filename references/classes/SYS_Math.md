# SYS\_Math class

系统 / 数学计算类

## Signature

```typescript
export class SYS_Math 
```

## Remarks

提供多边形几何计算方法，支持离散点坐标和 [TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) 多边形数据

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[bboxIntersects(bbox1, bbox2)](./SYS_Math.md)


</td><td>


</td><td>

快速判断两个 BBox 是否相交


</td></tr>
<tr><td>

[calculateArea(polygon)](./SYS_Math.md)


</td><td>


</td><td>

计算多边形面积


</td></tr>
<tr><td>

[calculatePerimeter(polygon)](./SYS_Math.md)


</td><td>


</td><td>

计算多边形周长


</td></tr>
<tr><td>

[contains(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

判断 polygon1 是否完全包含 polygon2


</td></tr>
<tr><td>

[containsPoint(polygon, point)](./SYS_Math.md)


</td><td>


</td><td>

判断点是否在多边形内部


</td></tr>
<tr><td>

[distanceToPoint(polygon, point)](./SYS_Math.md)


</td><td>


</td><td>

计算点到多边形边界的最短距离


</td></tr>
<tr><td>

[getBBox(polygon)](./SYS_Math.md)


</td><td>


</td><td>

获取多边形的最小外接矩形（BBox）


</td></tr>
<tr><td>

[getCentroid(polygon)](./SYS_Math.md)


</td><td>


</td><td>

计算多边形质心


</td></tr>
<tr><td>

[intersection(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

计算两个多边形的交集


</td></tr>
<tr><td>

[intersects(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

判断两个多边形是否相交


</td></tr>
<tr><td>

[rotate(polygon, angle, centerX, centerY)](./SYS_Math.md)


</td><td>


</td><td>

旋转多边形


</td></tr>
<tr><td>

[scale(polygon, scaleX, scaleY, centerX, centerY)](./SYS_Math.md)


</td><td>


</td><td>

缩放多边形


</td></tr>
<tr><td>

[subtract(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

计算两个多边形的差集（polygon1 - polygon2）


</td></tr>
<tr><td>

[translate(polygon, dx, dy)](./SYS_Math.md)


</td><td>


</td><td>

平移多边形


</td></tr>
<tr><td>

[union(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

计算两个多边形的并集


</td></tr>
<tr><td>

[xor(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

计算两个多边形的对称差集（异或）


</td></tr>
</tbody></table>

---

## 方法详情

### bboxintersects

# SYS\_Math.bboxIntersects() method

快速判断两个 BBox 是否相交

## Signature

```typescript
public bboxIntersects(bbox1: ISYS_MathBBox, bbox2: ISYS_MathBBox): boolean;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

bbox1


</td><td>

[ISYS\_MathBBox](../interfaces/ISYS_MathBBox.md)


</td><td>

BBox 1


</td></tr>
<tr><td>

bbox2


</td><td>

[ISYS\_MathBBox](../interfaces/ISYS_MathBBox.md)


</td><td>

BBox 2


</td></tr>
</tbody></table>



## Returns

boolean

是否相交

### calculatearea

# SYS\_Math.calculateArea() method

计算多边形面积

## Signature

```typescript
public calculateArea(polygon: TSYS_MathPolygonInput): number;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形或多边形组


</td></tr>
</tbody></table>



## Returns

number

面积（单个多边形为绝对面积，多边形组为净面积）

## Remarks

使用 Shoelace 公式计算： - 传入单个多边形时，返回该多边形的绝对面积 - 传入多边形组（[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)<!-- -->，如布尔运算的返回值）时， 计算所有外环面积之和减去所有孔洞面积之和，得到净面积

### calculateperimeter

# SYS\_Math.calculatePerimeter() method

计算多边形周长

## Signature

```typescript
public calculatePerimeter(polygon: TSYS_MathPolygonInput): number;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
</tbody></table>



## Returns

number

周长

### contains

# SYS\_Math.contains() method

判断 polygon1 是否完全包含 polygon2

## Signature

```typescript
public contains(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon1


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

外部多边形


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

内部多边形


</td></tr>
</tbody></table>



## Returns

boolean

polygon1 是否完全包含 polygon2

### containspoint

# SYS\_Math.containsPoint() method

判断点是否在多边形内部

## Signature

```typescript
public containsPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): boolean;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
<tr><td>

point


</td><td>

[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)


</td><td>

待判断的点


</td></tr>
</tbody></table>



## Returns

boolean

是否在多边形内部

## Remarks

使用射线法（Ray Casting）判断点是否在多边形内部

由于射线法的特性，边界上的点行为不一致：部分边界上的点可能返回 `true`<!-- -->，部分可能返回 `false`<!-- -->， 具体取决于射线方向与边界的几何关系

如需严格判断点是否在边界上，请结合 [SYS\_Math.distanceToPoint()](./SYS_Math.md) 判断距离是否为 `0`

### distancetopoint

# SYS\_Math.distanceToPoint() method

计算点到多边形边界的最短距离

## Signature

```typescript
public distanceToPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): number;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
<tr><td>

point


</td><td>

[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)


</td><td>

待计算的点


</td></tr>
</tbody></table>



## Returns

number

最短距离，如点在多边形内部则返回 `0`

### getbbox

# SYS\_Math.getBBox() method

获取多边形的最小外接矩形（BBox）

## Signature

```typescript
public getBBox(polygon: TSYS_MathPolygonInput): ISYS_MathBBox;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
</tbody></table>



## Returns

[ISYS\_MathBBox](../interfaces/ISYS_MathBBox.md)

BBox

### getcentroid

# SYS\_Math.getCentroid() method

计算多边形质心

## Signature

```typescript
public getCentroid(polygon: TSYS_MathPolygonInput): ISYS_MathPoint;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
</tbody></table>



## Returns

[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)

质心坐标

### intersection

# SYS\_Math.intersection() method

计算两个多边形的交集

## Signature

```typescript
public intersection(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon1


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 2


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

交集结果的多边形组，空数组表示无交集

### intersects

# SYS\_Math.intersects() method

判断两个多边形是否相交

## Signature

```typescript
public intersects(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon1


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 2


</td></tr>
</tbody></table>



## Returns

boolean

是否相交

## Remarks

判断两个多边形的区域是否有任何重叠（包括包含、部分相交、边界接触）

### rotate

# SYS\_Math.rotate() method

旋转多边形

## Signature

```typescript
public rotate(polygon: TSYS_MathPolygonInput, angle: number, centerX?: number, centerY?: number): Array<ISYS_MathPoint>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
<tr><td>

angle


</td><td>

number


</td><td>

旋转角度（角度制，正值为逆时针）


</td></tr>
<tr><td>

centerX


</td><td>

number


</td><td>

_(Optional)_ 旋转中心 X 坐标，默认为质心


</td></tr>
<tr><td>

centerY


</td><td>

number


</td><td>

_(Optional)_ 旋转中心 Y 坐标，默认为质心


</td></tr>
</tbody></table>



## Returns

Array&lt;[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->&gt;

旋转后的离散点数组

### scale

# SYS\_Math.scale() method

缩放多边形

## Signature

```typescript
public scale(polygon: TSYS_MathPolygonInput, scaleX: number, scaleY?: number, centerX?: number, centerY?: number): Array<ISYS_MathPoint>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
<tr><td>

scaleX


</td><td>

number


</td><td>

X 方向缩放比例


</td></tr>
<tr><td>

scaleY


</td><td>

number


</td><td>

_(Optional)_ Y 方向缩放比例，默认与 scaleX 相同


</td></tr>
<tr><td>

centerX


</td><td>

number


</td><td>

_(Optional)_ 缩放中心 X 坐标，默认为质心


</td></tr>
<tr><td>

centerY


</td><td>

number


</td><td>

_(Optional)_ 缩放中心 Y 坐标，默认为质心


</td></tr>
</tbody></table>



## Returns

Array&lt;[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->&gt;

缩放后的离散点数组

### subtract

# SYS\_Math.subtract() method

计算两个多边形的差集（polygon1 - polygon2）

## Signature

```typescript
public subtract(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon1


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

被减多边形


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

减去的多边形


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

差集结果的多边形组，保留外环与孔洞的归属关系

### translate

# SYS\_Math.translate() method

平移多边形

## Signature

```typescript
public translate(polygon: TSYS_MathPolygonInput, dx: number, dy: number): Array<ISYS_MathPoint>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形


</td></tr>
<tr><td>

dx


</td><td>

number


</td><td>

X 方向偏移量


</td></tr>
<tr><td>

dy


</td><td>

number


</td><td>

Y 方向偏移量


</td></tr>
</tbody></table>



## Returns

Array&lt;[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->&gt;

平移后的离散点数组

### union

# SYS\_Math.union() method

计算两个多边形的并集

## Signature

```typescript
public union(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon1


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 2


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

并集结果的多边形组，保留外环与孔洞的归属关系

### xor

# SYS\_Math.xor() method

计算两个多边形的对称差集（异或）

## Signature

```typescript
public xor(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

polygon1


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

多边形 2


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

对称差集结果的多边形组，保留外环与孔洞的归属关系
