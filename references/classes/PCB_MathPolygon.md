# PCB\_MathPolygon class

PCB &amp; footprint / polygon math class

## Signature

```typescript
export class PCB_MathPolygon 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[calculateBBoxHeight(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

计算多边形源数组的 BBox 高度


</td></tr>
<tr><td>

[calculateHeight(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Calculate complex polygon BBox height


</td></tr>
<tr><td>

[calculateWidth(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Calculate complex polygon BBox width


</td></tr>
<tr><td>

[convertImageToComplexPolygon(imageBlob, imageWidth, imageHeight, tolerance, simplification, smoothing, despeckling, whiteAsBackgroundColor, inversion)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Convert Image to Complex polygon object


</td></tr>
<tr><td>

[createComplexPolygon(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

Create Complex polygon


</td></tr>
<tr><td>

[createPolygon(polygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

Create Single polygon


</td></tr>
<tr><td>

[discretize(polygon, options)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Discretize a single polygon into point data


</td></tr>
<tr><td>

[splitPolygon(complexPolygons)](./PCB_MathPolygon.md)


</td><td>


</td><td>

Split single polygon


</td></tr>
</tbody></table>

---

## 方法详情

### calculatebboxheight

# PCB\_MathPolygon.calculateBBoxHeight() method

计算多边形源数组的 BBox 高度

## Signature

```typescript
public calculateBBoxHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
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

complexPolygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;


</td><td>


</td></tr>
</tbody></table>



## Returns

number

## Example


```javascript
// 1. 单个矩形源数组（宽 100、高 50），BBox 高度为 50
console.log('rectHeight:', eda.pcb_MathPolygon.calculateBBoxHeight(['R', 0, 0, 100, 50, 0, 0]));

// 2. 单个圆源数组（圆心在原点、半径 50），BBox 高度为直径 100
console.log('circleHeight:', eda.pcb_MathPolygon.calculateBBoxHeight(['CIRCLE', 0, 0, 50]));

// 3. 多块组合：矩形 Y 范围 0～50，圆 Y 范围 170～230，整体跨度 230
console.log('multiHeight:', eda.pcb_MathPolygon.calculateBBoxHeight([
  ['R', 0, 0, 100, 50, 0, 0],
  ['CIRCLE', 200, 200, 30],
]));
```

### calculateheight

# PCB\_MathPolygon.calculateHeight() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Calculate complex polygon BBox height

## Signature

```typescript
public calculateHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon): number;
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

complexPolygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| [IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)


</td><td>

Complex polygon


</td></tr>
</tbody></table>



## Returns

number

BBox height

## Example


```javascript
// 1. 矩形源数组（宽 100、高 50），BBox 高度为 50
console.log('rectHeight:', eda.pcb_MathPolygon.calculateHeight(['R', 0, 0, 100, 50, 0, 0]));

// 2. 圆心在原点、半径 50 的圆，BBox 高度为直径 100
console.log('circleHeight:', eda.pcb_MathPolygon.calculateHeight(['CIRCLE', 0, 0, 50]));

// 3. 传复杂多边形对象：矩形 Y 范围 0～50，圆 Y 范围 170～230，整体跨度 230
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([
  ['R', 0, 0, 100, 50, 0, 0],
  ['CIRCLE', 200, 200, 30],
]);
console.log('complexHeight:', eda.pcb_MathPolygon.calculateHeight(complexPolygon));
```

### calculatewidth

# PCB\_MathPolygon.calculateWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Calculate complex polygon BBox width

## Signature

```typescript
public calculateWidth(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon): number;
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

complexPolygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| [IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)


</td><td>

Complex polygon


</td></tr>
</tbody></table>



## Returns

number

BBox width

## Example


```javascript
// 1. 矩形源数组（宽 100、高 50），BBox 宽度为 100
console.log('rectWidth:', eda.pcb_MathPolygon.calculateWidth(['R', 0, 0, 100, 50, 0, 0]));

// 2. 圆心在原点、半径 50 的圆，BBox 宽度为直径 100
console.log('circleWidth:', eda.pcb_MathPolygon.calculateWidth(['CIRCLE', 0, 0, 50]));

// 3. 传复杂多边形对象：矩形 X 范围 0～100，圆 X 范围 170～230，整体跨度 230
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([
  ['R', 0, 0, 100, 50, 0, 0],
  ['CIRCLE', 200, 200, 30],
]);
console.log('complexWidth:', eda.pcb_MathPolygon.calculateWidth(complexPolygon));
```

### convertimagetocomplexpolygon

# PCB\_MathPolygon.convertImageToComplexPolygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert Image to Complex polygon object

## Signature

```typescript
public convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>;
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

imageBlob


</td><td>

Blob


</td><td>

Image Blob file. You can use the  method to read a file from the file system


</td></tr>
<tr><td>

imageWidth


</td><td>

number


</td><td>

Image width


</td></tr>
<tr><td>

imageHeight


</td><td>

number


</td><td>

Image height


</td></tr>
<tr><td>

tolerance


</td><td>

number


</td><td>

_(Optional)_ Tolerance, value range `0`<!-- -->-`1`


</td></tr>
<tr><td>

simplification


</td><td>

number


</td><td>

_(Optional)_ Simplification, value range `0`<!-- -->-`1`


</td></tr>
<tr><td>

smoothing


</td><td>

number


</td><td>

_(Optional)_ Smoothing, value range `0`<!-- -->-`1.33`


</td></tr>
<tr><td>

despeckling


</td><td>

number


</td><td>

_(Optional)_ Despeckling, value range `0`<!-- -->-`5`


</td></tr>
<tr><td>

whiteAsBackgroundColor


</td><td>

boolean


</td><td>

_(Optional)_ Whether to use white as the background color


</td></tr>
<tr><td>

inversion


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is inverted


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined&gt;

Complex polygon object

## Example


```javascript
// 1. 用 canvas 画一张测试图：白色背景，中间 10×10 像素的黑色方块
const canvas = document.createElement('canvas');
canvas.width = 20;
canvas.height = 20;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, 20, 20);
ctx.fillStyle = '#000000';
ctx.fillRect(5, 5, 10, 10);

// 2. 导出为 PNG Blob
const imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

// 3. 描摹为复杂多边形（全部可选参数走默认值）
const complexPolygon = await eda.pcb_MathPolygon.convertImageToComplexPolygon(imageBlob, 20, 20);

// 4. 读取描摹结果：分块数量与第一块的源数据（描摹出的轮廓点，坐标由算法生成）
const sources = complexPolygon.getSourceStrictComplex();
console.log('polygonCount:', sources.length);
console.log('firstSource:', JSON.stringify(sources[0]).slice(0, 120));
```

### createcomplexpolygon

# PCB\_MathPolygon.createComplexPolygon() method

Create Complex polygon

## Signature

```typescript
public createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;
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

complexPolygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;


</td><td>

Complex polygon data


</td></tr>
</tbody></table>



## Returns

[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined

Complex polygon object. `undefined` indicates that the data is invalid

## Example


```javascript
// 1. 传入两个源数组的数组，创建矩形外框加圆形第二块的复杂多边形（纯数据对象，画布上还看不到）
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([
  ['R', 1000, 1000, 500, 300, 0, 0],
  ['CIRCLE', 3000, 1150, 100],
]);

// 2. 读取复杂多边形的分块源数据，确认两块都被解析
const sources = complexPolygon.getSourceStrictComplex();
sources.forEach((source, index) => {
  console.log('source' + (index + 1) + ':', JSON.stringify(source));
});
console.log('count:', sources.length);
```

### createpolygon

# PCB\_MathPolygon.createPolygon() method

Create Single polygon

## Signature

```typescript
public createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;
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

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)


</td><td>

Single polygon data


</td></tr>
</tbody></table>



## Returns

[IPCB\_Polygon](./IPCB_Polygon.md) \| undefined

Single polygon object. `undefined` indicates that the data is invalid

## Example


```javascript
// 1. 用矩形模式源数组创建单多边形对象（x、y、宽、高、旋转、圆角）
const rectPolygon = eda.pcb_MathPolygon.createPolygon(['R', 1000, 1000, 500, 300, 0, 0]);

// 2. 用圆形模式源数组再创建一个（圆心 x、y、半径）
const circlePolygon = eda.pcb_MathPolygon.createPolygon(['CIRCLE', 1250, 1150, 80]);

// 3. 读取单多边形的源数据，确认数据被完整解析
console.log('rectSource:', JSON.stringify(rectPolygon.getSource()));
console.log('circleSource:', JSON.stringify(circlePolygon.getSource()));
```

### discretize

# PCB\_MathPolygon.discretize() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Discretize a single polygon into point data

## Signature

```typescript
public discretize(polygon: IPCB_Polygon | TPCB_PolygonSourceArray, options?: IPCB_DiscretizeOptions): Promise<Array<IPCB_DiscretizedPoint>>;
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

[IPCB\_Polygon](./IPCB_Polygon.md) \| [TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)


</td><td>

Single polygon object


</td></tr>
<tr><td>

options


</td><td>

[IPCB\_DiscretizeOptions](../interfaces/IPCB_DiscretizeOptions.md)


</td><td>

_(Optional)_ Discretization options


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_DiscretizedPoint](../interfaces/IPCB_DiscretizedPoint.md)<!-- -->&gt;&gt;

Discretized point data

## Remarks

Discretize the boundary of a single polygon into a series of points

### splitpolygon

# PCB\_MathPolygon.splitPolygon() method

Split single polygon

## Signature

```typescript
public splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;
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

complexPolygons


</td><td>

Array&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)<!-- -->&gt;


</td><td>

Complex polygon


</td></tr>
</tbody></table>



## Returns

Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;

Single polygon array

## Example


```javascript
// 1. 构建一个两块的复杂多边形（矩形外框 + 圆形）
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([
  ['R', 1000, 1000, 500, 300, 0, 0],
  ['CIRCLE', 3000, 1150, 100],
]);

// 2. 拆分为单多边形对象数组
const polygons = eda.pcb_MathPolygon.splitPolygon(complexPolygon);

// 3. 逐个读取单多边形的源数据
polygons.forEach((polygon, index) => {
  console.log('polygon' + (index + 1) + ':', JSON.stringify(polygon.getSource()));
});
console.log('count:', polygons.length);
```
