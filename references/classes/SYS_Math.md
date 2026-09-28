# SYS\_Math class

System / math class

## Signature

```typescript
class SYS_Math
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
function bboxIntersects(bbox1: ISYS_MathBBox, bbox2: ISYS_MathBBox): boolean;
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

## Example

```javascript
// 1. 两块铺铜区域的外接矩形（部分重叠）
const zoneA = { minX: 0, minY: 0, maxX: 100, maxY: 80 };
const zoneB = { minX: 50, minY: 20, maxX: 150, maxY: 60 };
console.log('区域 A 与区域 B 相交：', eda.sys_Math.bboxIntersects(zoneA, zoneB));

// 2. 完全分离的两个矩形（不相交，粗筛即可排除）
const zoneC = { minX: 200, minY: 200, maxX: 300, maxY: 280 };
console.log('区域 A 与区域 C 相交：', eda.sys_Math.bboxIntersects(zoneA, zoneC));

// 3. 仅有边界接触也算相交（贴合的两个矩形）
const zoneD = { minX: 100, minY: 0, maxX: 180, maxY: 40 };
console.log('区域 A 与区域 D 相交：', eda.sys_Math.bboxIntersects(zoneA, zoneD));
```

### calculatearea

# SYS\_Math.calculateArea() method

Calculate the area of a polygon

## Signature

```typescript
function calculateArea(polygon: TSYS_MathPolygonInput): number;
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

## Example

```javascript
// 1. 单个矩形 100 x 80（单位随输入坐标系，PCB 场景下通常是 mil）
const rect = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
console.log('矩形面积：', eda.sys_Math.calculateArea(rect));

// 2. 单个三角形（底 100 高 60，面积应为 3000）
const triangle = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 50, y: 60 }];
console.log('三角形面积：', eda.sys_Math.calculateArea(triangle));

// 3. 布尔运算返回的多边形组直接作为输入，得到净面积（含孔洞时自动扣除）
const overlap = [{ x: 50, y: 20 }, { x: 150, y: 20 }, { x: 150, y: 60 }, { x: 50, y: 60 }];
const merged = eda.sys_Math.union(rect, overlap);
console.log('两矩形合并后的净面积：', eda.sys_Math.calculateArea(merged));
```

### calculateperimeter

# SYS\_Math.calculatePerimeter() method

Calculate the perimeter of a polygon

## Signature

```typescript
function calculatePerimeter(polygon: TSYS_MathPolygonInput): number;
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

## Example

```javascript
// 1. 矩形 100 x 80，周长应为 360
const rect = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
console.log('矩形周长：', eda.sys_Math.calculatePerimeter(rect));

// 2. L 形轮廓（缺口裁掉一个角，周长按实际边界累加）
const lShape = [
	{ x: 0, y: 0 },
	{ x: 100, y: 0 },
	{ x: 100, y: 40 },
	{ x: 40, y: 40 },
	{ x: 40, y: 80 },
	{ x: 0, y: 80 },
];
console.log('L 形轮廓周长：', eda.sys_Math.calculatePerimeter(lShape));

// 3. 布尔运算返回的多边形组同样可以作为输入
const hole = [{ x: 30, y: 20 }, { x: 70, y: 20 }, { x: 70, y: 60 }, { x: 30, y: 60 }];
const cut = eda.sys_Math.subtract(rect, hole);
console.log('挖孔后多边形组的周长：', eda.sys_Math.calculatePerimeter(cut));
```

### contains

# SYS\_Math.contains() method

Determine whether polygon1 completely contains polygon2

## Signature

```typescript
function contains(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;
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

## Example

```javascript
// 1. 小矩形完全落在大矩形内部 → true
const board = [{ x: 0, y: 0 }, { x: 200, y: 0 }, { x: 200, y: 120 }, { x: 0, y: 120 }];
const device = [{ x: 50, y: 40 }, { x: 90, y: 40 }, { x: 90, y: 70 }, { x: 50, y: 70 }];
console.log('板框完全包含器件：', eda.sys_Math.contains(board, device));

// 2. 器件跨越板框边界（部分重叠，不是完全包含）→ false
const overhang = [{ x: 150, y: 40 }, { x: 250, y: 40 }, { x: 250, y: 70 }, { x: 150, y: 70 }];
console.log('板框完全包含越界器件：', eda.sys_Math.contains(board, overhang));

// 3. 只关心区域重叠不关心完全包含时，配合 intersects 使用
console.log('两器件区域有重叠：', eda.sys_Math.intersects(device, overhang));
```

### containspoint

# SYS\_Math.containsPoint() method

Determine whether the point is inside the polygon

## Signature

```typescript
function containsPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): boolean;
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

## Example

```javascript
// 1. 定义一块禁布区，测试三个典型位置的点
const keepout = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
const inside = { x: 50, y: 40 }; // 区域中心，明显在内部
const outside = { x: 150, y: 40 }; // 区域右侧，明显在外部
const corner = { x: 0, y: 0 }; // 顶点，落在边界上

console.log('中心点在禁布区内：', eda.sys_Math.containsPoint(keepout, inside));
console.log('外部点在禁布区内：', eda.sys_Math.containsPoint(keepout, outside));
console.log('顶点在禁布区内：', eda.sys_Math.containsPoint(keepout, corner));

// 2. 严格判断边界点：距离为 0 说明点恰好在边界上
console.log('顶点到边界的距离：', eda.sys_Math.distanceToPoint(keepout, corner));
```

### distancetopoint

# SYS\_Math.distanceToPoint() method

Calculate the shortest distance from a point to the polygon boundary

## Signature

```typescript
function distanceToPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): number;
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

## Example

```javascript
// 1. 定义矩形区域（右边界在 x = 100）
const zone = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];

// 2. 外部点：到右边界的水平距离为 50
const outsidePoint = { x: 150, y: 40 };
console.log('外部点到边界的最短距离：', eda.sys_Math.distanceToPoint(zone, outsidePoint));

// 3. 内部点：在多边形内部时返回 0
const insidePoint = { x: 50, y: 40 };
console.log('内部点到边界的最短距离：', eda.sys_Math.distanceToPoint(zone, insidePoint));

// 4. 斜向最近边不是正对的那条边时，结果取真实垂线距离
const diagonalPoint = { x: 130, y: 110 };
console.log('斜向点到边界的最短距离：', eda.sys_Math.distanceToPoint(zone, diagonalPoint));
```

### getbbox

# SYS\_Math.getBBox() method

Get the minimum bounding rectangle (BBox) of the polygon

## Signature

```typescript
function getBBox(polygon: TSYS_MathPolygonInput): ISYS_MathBBox;
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

## Example

```javascript
// 1. 斜置的三角形，外接矩形由三个顶点的极值决定
const triangle = [{ x: 30, y: 10 }, { x: 120, y: 50 }, { x: 60, y: 90 }];
const bbox = eda.sys_Math.getBBox(triangle);
console.log('三角形的最小外接矩形：', JSON.stringify(bbox));

// 2. 布尔运算得到的多边形组同样可以求 BBox（取整组的外包范围）
const rectA = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
const rectB = [{ x: 50, y: 20 }, { x: 150, y: 20 }, { x: 150, y: 60 }, { x: 50, y: 60 }];
const merged = eda.sys_Math.union(rectA, rectB);
console.log('合并区域的最小外接矩形：', JSON.stringify(eda.sys_Math.getBBox(merged)));

// 3. BBox 直接作为 bboxIntersects() 的输入做快速相交预检
const other = { minX: 200, minY: 0, maxX: 280, maxY: 40 };
console.log('两区域外接矩形相交：', eda.sys_Math.bboxIntersects(bbox, other));
```

### getcentroid

# SYS\_Math.getCentroid() method

Calculate the centroid of the polygon

## Signature

```typescript
function getCentroid(polygon: TSYS_MathPolygonInput): ISYS_MathPoint;
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

## Example

```javascript
// 1. 规则矩形：质心就是几何中心 (50, 40)
const rect = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
console.log('矩形质心：', JSON.stringify(eda.sys_Math.getCentroid(rect)));

// 2. L 形轮廓：质心向材料厚的一侧偏移，不再等于外接矩形中心 (50, 40)
const lShape = [
	{ x: 0, y: 0 },
	{ x: 100, y: 0 },
	{ x: 100, y: 40 },
	{ x: 40, y: 40 },
	{ x: 40, y: 80 },
	{ x: 0, y: 80 },
];
const centroid = eda.sys_Math.getCentroid(lShape);
console.log('L 形质心：', JSON.stringify(centroid));

// 3. 以质心为中心做旋转，图形绕自身几何中心原地转动
const rotated = eda.sys_Math.rotate(rect, 90);
console.log('绕质心旋转 90 度后的第一个点：', JSON.stringify(rotated[0]));
```

### intersection

# SYS\_Math.intersection() method

Calculate the intersection of two polygons

## Signature

```typescript
function intersection(
	polygon1: TSYS_MathPolygonInput,
	polygon2: TSYS_MathPolygonInput,
): TSYS_MathPolygonGroup;
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

## Example

```javascript
// 1. 两块部分重叠的矩形区域
const copperA = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
const copperB = [{ x: 50, y: 20 }, { x: 150, y: 20 }, { x: 150, y: 60 }, { x: 50, y: 60 }];

// 2. 求交集，结果为一个新的多边形组
const overlap = eda.sys_Math.intersection(copperA, copperB);
console.log('重叠区域个数：', overlap.length);
console.log('重叠区域外环顶点：', overlap[0].outer.length, '个');
console.log('重叠区域孔洞数：', overlap[0].holes.length);

// 3. 交集面积：100 x 100 与 100 x 80 的重叠部分为 50 x 40 = 2000
console.log('重叠区域面积：', eda.sys_Math.calculateArea(overlap));

// 4. 完全分离的两个多边形没有交集，返回空数组
const far = [{ x: 200, y: 0 }, { x: 280, y: 0 }, { x: 280, y: 40 }, { x: 200, y: 40 }];
console.log('分离区域的交集个数：', eda.sys_Math.intersection(copperA, far).length);
```

### intersects

# SYS\_Math.intersects() method

Determine whether two polygons intersect

## Signature

```typescript
function intersects(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;
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

## Example

```javascript
// 1. 部分重叠的两个矩形 → true
const trace = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
const keepout = [{ x: 50, y: 20 }, { x: 150, y: 20 }, { x: 150, y: 60 }, { x: 50, y: 60 }];
console.log('走线闯入禁布区：', eda.sys_Math.intersects(trace, keepout));

// 2. 完全分离 → false
const far = [{ x: 200, y: 0 }, { x: 280, y: 0 }, { x: 280, y: 40 }, { x: 200, y: 40 }];
console.log('走线远离另一区域：', eda.sys_Math.intersects(trace, far));

// 3. 完全包含也是相交的一种 → true
const small = [{ x: 20, y: 20 }, { x: 60, y: 20 }, { x: 60, y: 50 }, { x: 20, y: 50 }];
console.log('小区域整体在走线范围内：', eda.sys_Math.intersects(trace, small));

// 4. 仅边界贴合同样算相交 → true
const touching = [{ x: 100, y: 0 }, { x: 180, y: 0 }, { x: 180, y: 40 }, { x: 100, y: 40 }];
console.log('两区域边界贴合：', eda.sys_Math.intersects(trace, touching));
```

### rotate

# SYS\_Math.rotate() method

Rotate the polygon

## Signature

```typescript
function rotate(
	polygon: TSYS_MathPolygonInput,
	angle: number,
	centerX?: number,
	centerY?: number,
): Array<ISYS_MathPoint>;
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

## Example

```javascript
// 1. 定义一个矩形安装座
const mount = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];

// 2. 不传中心：绕质心 (50, 40) 逆时针旋转 90 度，占位原地转身
const selfRotated = eda.sys_Math.rotate(mount, 90);
console.log('绕质心旋转后的顶点：', JSON.stringify(selfRotated));

// 3. 传中心参数：绕坐标原点 (0, 0) 旋转 90 度，图形整体公转
// 逆时针 90 度把 (x, y) 映射为 (-y, x)
const originRotated = eda.sys_Math.rotate(mount, 90, 0, 0);
console.log('绕原点旋转后的顶点：', JSON.stringify(originRotated));

// 4. 负角度顺时针旋转，与正角度互为逆变换
const back = eda.sys_Math.rotate(originRotated, -90, 0, 0);
console.log('再顺时针转回后的第一个点：', JSON.stringify(back[0]));
```

### scale

# SYS\_Math.scale() method

Scale the polygon

## Signature

```typescript
function scale(
	polygon: TSYS_MathPolygonInput,
	scaleX: number,
	scaleY?: number,
	centerX?: number,
	centerY?: number,
): Array<ISYS_MathPoint>;
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

## Example

```javascript
// 1. 定义一个矩形焊区
const pad = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];

// 2. 等比放大 1.5 倍：绕质心原地放大，面积变为 2.25 倍
const enlarged = eda.sys_Math.scale(pad, 1.5);
console.log('放大 1.5 倍后的顶点：', JSON.stringify(enlarged));
console.log('放大后的面积：', eda.sys_Math.calculateArea(enlarged));

// 3. X、Y 采用不同比例：只在 X 方向拉宽 2 倍（绕质心，Y 不变）
const stretched = eda.sys_Math.scale(pad, 2, 1);
console.log('仅 X 方向放大 2 倍后的顶点：', JSON.stringify(stretched));

// 4. 指定缩放中心 (0, 0)：各点坐标直接乘以比例
const fromOrigin = eda.sys_Math.scale(pad, 2, 2, 0, 0);
console.log('绕原点放大后的第一个点：', JSON.stringify(fromOrigin[0]));
```

### subtract

# SYS\_Math.subtract() method

Calculate the difference of two polygons (polygon1 - polygon2)

## Signature

```typescript
function subtract(
	polygon1: TSYS_MathPolygonInput,
	polygon2: TSYS_MathPolygonInput,
): TSYS_MathPolygonGroup;
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

## Example

```javascript
// 1. 大矩形铺铜区域与一个完全落在其内部的矩形开孔区
const copper = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
const hole = [{ x: 30, y: 20 }, { x: 70, y: 20 }, { x: 70, y: 60 }, { x: 30, y: 60 }];

// 2. 挖孔：差集结果的多边形组里，开孔区被记为孔洞
const cut = eda.sys_Math.subtract(copper, hole);
console.log('差集结果多边形个数：', cut.length);
console.log('孔洞数：', cut[0].holes.length);

// 3. 挖孔后的净面积：100 x 80 - 40 x 40 = 6400
console.log('挖孔后的净面积：', eda.sys_Math.calculateArea(cut));

// 4. 减去完全分离的多边形不产生任何变化（结果仍是原形状的等价组）
const far = [{ x: 200, y: 0 }, { x: 280, y: 0 }, { x: 280, y: 40 }, { x: 200, y: 40 }];
const untouched = eda.sys_Math.subtract(copper, far);
console.log('减去分离区域后的面积：', eda.sys_Math.calculateArea(untouched));
```

### translate

# SYS\_Math.translate() method

Translate the polygon

## Signature

```typescript
function translate(polygon: TSYS_MathPolygonInput, dx: number, dy: number): Array<ISYS_MathPoint>;
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

## Example

```javascript
// 1. 定义一个器件占位轮廓
const footprint = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];

// 2. 向右平移 200、向上平移 150（得到排布到新位置的轮廓）
const placed = eda.sys_Math.translate(footprint, 200, 150);
console.log('平移后的顶点：', JSON.stringify(placed));

// 3. 负偏移向左下方平移
const back = eda.sys_Math.translate(placed, -200, -150);
console.log('再平移回原位后的第一个点：', JSON.stringify(back[0]));

// 4. 平移前后形状不变，周长与面积保持一致
console.log('平移前后周长：', eda.sys_Math.calculatePerimeter(footprint), '/', eda.sys_Math.calculatePerimeter(placed));
```

### union

# SYS\_Math.union() method

Calculate the union of two polygons

## Signature

```typescript
function union(
	polygon1: TSYS_MathPolygonInput,
	polygon2: TSYS_MathPolygonInput,
): TSYS_MathPolygonGroup;
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

## Example

```javascript
// 1. 两块部分重叠的铺铜区域
const copperA = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
const copperB = [{ x: 50, y: 20 }, { x: 150, y: 20 }, { x: 150, y: 60 }, { x: 50, y: 60 }];

// 2. 合并：结果是一个多边形组（重叠区域融合成单一外环，无孔洞）
const merged = eda.sys_Math.union(copperA, copperB);
console.log('合并后多边形个数：', merged.length);
console.log('合并后外环顶点数：', merged[0].outer.length);
console.log('合并后孔洞数：', merged[0].holes.length);

// 3. 合并后的净面积：8000 + 4000 - 重叠的 2000 = 10000（重叠只算一次）
console.log('合并后面积：', eda.sys_Math.calculateArea(merged));

// 4. 完全分离的两个多边形合并时仍是两个独立多边形
const far = [{ x: 200, y: 0 }, { x: 280, y: 0 }, { x: 280, y: 40 }, { x: 200, y: 40 }];
console.log('分离区域合并后个数：', eda.sys_Math.union(copperA, far).length);
```

### xor

# SYS\_Math.xor() method

Calculate the symmetric difference (XOR) of two polygons

## Signature

```typescript
function xor(
	polygon1: TSYS_MathPolygonInput,
	polygon2: TSYS_MathPolygonInput,
): TSYS_MathPolygonGroup;
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

## Example

```javascript
// 1. 新旧两版部分重叠的板框轮廓
const oldOutline = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 0, y: 80 }];
const newOutline = [{ x: 50, y: 20 }, { x: 150, y: 20 }, { x: 150, y: 60 }, { x: 50, y: 60 }];

// 2. 异或：重叠的中间区域被扣除，剩下两侧不重叠的部分
const diff = eda.sys_Math.xor(oldOutline, newOutline);
console.log('差异区域多边形个数：', diff.length);

// 3. 异或面积：8000 + 4000 - 2 x 重叠 2000 = 8000（重叠部分两次都不算）
console.log('差异区域总面积：', eda.sys_Math.calculateArea(diff));

// 4. 完全相同的两个多边形异或结果为空数组（无差异；空组不能再传给
// calculateArea，空输入会抛『无法识别的多边形输入格式』）
console.log('自身与自身异或的差异区域个数：', eda.sys_Math.xor(oldOutline, oldOutline).length);
```
