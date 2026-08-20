# SYS\_Math class

System / math class

## Signature

```typescript
export class SYS_Math 
```

## Remarks

Provides polygon geometry calculation methods, supporting discrete point coordinates and [TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) polygon data

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

Quickly determine whether two BBoxes intersect


</td></tr>
<tr><td>

[calculateArea(polygon)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the area of a polygon


</td></tr>
<tr><td>

[calculatePerimeter(polygon)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the perimeter of a polygon


</td></tr>
<tr><td>

[contains(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

Determine whether polygon1 completely contains polygon2


</td></tr>
<tr><td>

[containsPoint(polygon, point)](./SYS_Math.md)


</td><td>


</td><td>

Determine whether the point is inside the polygon


</td></tr>
<tr><td>

[distanceToPoint(polygon, point)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the shortest distance from a point to the polygon boundary


</td></tr>
<tr><td>

[getBBox(polygon)](./SYS_Math.md)


</td><td>


</td><td>

Get the minimum bounding rectangle (BBox) of the polygon


</td></tr>
<tr><td>

[getCentroid(polygon)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the centroid of the polygon


</td></tr>
<tr><td>

[intersection(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the intersection of two polygons


</td></tr>
<tr><td>

[intersects(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

Determine whether two polygons intersect


</td></tr>
<tr><td>

[rotate(polygon, angle, centerX, centerY)](./SYS_Math.md)


</td><td>


</td><td>

Rotate the polygon


</td></tr>
<tr><td>

[scale(polygon, scaleX, scaleY, centerX, centerY)](./SYS_Math.md)


</td><td>


</td><td>

Scale the polygon


</td></tr>
<tr><td>

[subtract(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the difference of two polygons (polygon1 - polygon2)


</td></tr>
<tr><td>

[translate(polygon, dx, dy)](./SYS_Math.md)


</td><td>


</td><td>

Translate the polygon


</td></tr>
<tr><td>

[union(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the union of two polygons


</td></tr>
<tr><td>

[xor(polygon1, polygon2)](./SYS_Math.md)


</td><td>


</td><td>

Calculate the symmetric difference (XOR) of two polygons


</td></tr>
</tbody></table>

---

## 方法详情

### bboxintersects

# SYS\_Math.bboxIntersects() method

Quickly determine whether two BBoxes intersect

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

Whether they intersect

### calculatearea

# SYS\_Math.calculateArea() method

Calculate the area of a polygon

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

Polygon or polygon group


</td></tr>
</tbody></table>



## Returns

number

Area (absolute area for a single polygon, net area for a polygon group)

## Remarks

Calculated using the Shoelace formula: - When a single polygon is passed in, the absolute area of the polygon is returned - When a polygon group ([TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)<!-- -->, such as the return value of Boolean operations) is passed in, the net area is obtained by subtracting the sum of all hole areas from the sum of all outer ring areas

### calculateperimeter

# SYS\_Math.calculatePerimeter() method

Calculate the perimeter of a polygon

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

Polygon


</td></tr>
</tbody></table>



## Returns

number

Perimeter

### contains

# SYS\_Math.contains() method

Determine whether polygon1 completely contains polygon2

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

Outer polygon


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

Internal polygon


</td></tr>
</tbody></table>



## Returns

boolean

Whether polygon1 completely contains polygon2

### containspoint

# SYS\_Math.containsPoint() method

Determine whether the point is inside the polygon

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

Polygon


</td></tr>
<tr><td>

point


</td><td>

[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)


</td><td>

The point to determine


</td></tr>
</tbody></table>



## Returns

boolean

Whether In polygon internal

## Remarks

Use the ray casting method to determine whether the point is inside the polygon

Due to the characteristics of the ray casting method, points on the boundary behave inconsistently: some boundary points may return `true`<!-- -->, and some may return `false`<!-- -->, depending on the geometric relationship between the ray direction and the boundary

To strictly determine whether the point is on the boundary, combine [SYS\_Math.distanceToPoint()](./SYS_Math.md) to check whether the distance is `0`

### distancetopoint

# SYS\_Math.distanceToPoint() method

Calculate the shortest distance from a point to the polygon boundary

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

Polygon


</td></tr>
<tr><td>

point


</td><td>

[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)


</td><td>

The point to calculate


</td></tr>
</tbody></table>



## Returns

number

Shortest distance. If the point is inside the polygon, `0` is returned

### getbbox

# SYS\_Math.getBBox() method

Get the minimum bounding rectangle (BBox) of the polygon

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

Polygon


</td></tr>
</tbody></table>



## Returns

[ISYS\_MathBBox](../interfaces/ISYS_MathBBox.md)

BBox

### getcentroid

# SYS\_Math.getCentroid() method

Calculate the centroid of the polygon

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

Polygon


</td></tr>
</tbody></table>



## Returns

[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)

Centroid coordinate

### intersection

# SYS\_Math.intersection() method

Calculate the intersection of two polygons

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

Polygon 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

Polygon 2


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

Polygon group of the intersection result. An empty array means no intersection

### intersects

# SYS\_Math.intersects() method

Determine whether two polygons intersect

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

Polygon 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

Polygon 2


</td></tr>
</tbody></table>



## Returns

boolean

Whether they intersect

## Remarks

Determine whether the regions of two polygons have any overlap (including containment, partial intersection, and boundary contact)

### rotate

# SYS\_Math.rotate() method

Rotate the polygon

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

Polygon


</td></tr>
<tr><td>

angle


</td><td>

number


</td><td>

Rotation angle (in degrees, positive values are counterclockwise)


</td></tr>
<tr><td>

centerX


</td><td>

number


</td><td>

_(Optional)_ X coordinate of the rotation center, defaulting to the centroid


</td></tr>
<tr><td>

centerY


</td><td>

number


</td><td>

_(Optional)_ Y coordinate of the rotation center, defaulting to the centroid


</td></tr>
</tbody></table>



## Returns

Array&lt;[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->&gt;

Array of discrete points after rotation

### scale

# SYS\_Math.scale() method

Scale the polygon

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

Polygon


</td></tr>
<tr><td>

scaleX


</td><td>

number


</td><td>

X direction scale ratio


</td></tr>
<tr><td>

scaleY


</td><td>

number


</td><td>

_(Optional)_ Y direction scale ratio, defaulting to the same as scaleX


</td></tr>
<tr><td>

centerX


</td><td>

number


</td><td>

_(Optional)_ X coordinate of the scaling center, defaulting to the centroid


</td></tr>
<tr><td>

centerY


</td><td>

number


</td><td>

_(Optional)_ Y coordinate of the scaling center, defaulting to the centroid


</td></tr>
</tbody></table>



## Returns

Array&lt;[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->&gt;

Array of discrete points after scaling

### subtract

# SYS\_Math.subtract() method

Calculate the difference of two polygons (polygon1 - polygon2)

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

Minuend polygon


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

Subtrahend polygon


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

Polygon group of the difference result, preserving the association between outer rings and holes

### translate

# SYS\_Math.translate() method

Translate the polygon

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

Polygon


</td></tr>
<tr><td>

dx


</td><td>

number


</td><td>

X direction offset


</td></tr>
<tr><td>

dy


</td><td>

number


</td><td>

Y direction offset


</td></tr>
</tbody></table>



## Returns

Array&lt;[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->&gt;

Array of discrete points after translation

### union

# SYS\_Math.union() method

Calculate the union of two polygons

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

Polygon 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

Polygon 2


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

Polygon group of the union result, preserving the association between outer rings and holes

### xor

# SYS\_Math.xor() method

Calculate the symmetric difference (XOR) of two polygons

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

Polygon 1


</td></tr>
<tr><td>

polygon2


</td><td>

[TSYS\_MathPolygonInput](../types/TSYS_MathPolygonInput.md)


</td><td>

Polygon 2


</td></tr>
</tbody></table>



## Returns

[TSYS\_MathPolygonGroup](../types/TSYS_MathPolygonGroup.md)

Polygon group of the symmetric difference result, preserving the association between outer rings and holes
