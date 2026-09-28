# PCB\_MathPolygon class

PCB &amp; footprint / polygon math class

## Signature

```typescript
class PCB_MathPolygon
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

[disposeTrace()](./PCB_MathPolygon.md)

</td><td>

</td><td>

释放描摹会话资源（worker + 像素缓存）

</td></tr>
<tr><td>

[splitPolygon(complexPolygons)](./PCB_MathPolygon.md)

</td><td>

</td><td>

Split single polygon

</td></tr>
<tr><td>

[traceImage(options)](./PCB_MathPolygon.md)

</td><td>

</td><td>

将图片描摹为矢量路径（SVG path），并导出预览图

</td></tr>
</tbody></table>

---

## 方法详情

### calculatebboxheight

# PCB\_MathPolygon.calculateBBoxHeight() method

计算多边形源数组的 BBox 高度

## Signature

```typescript
function calculateBBoxHeight(
	complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>,
): number;
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
function calculateHeight(
	complexPolygon:
		| TPCB_PolygonSourceArray
		| Array<TPCB_PolygonSourceArray>
		| IPCB_Polygon
		| IPCB_ComplexPolygon,
): number;
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
function calculateWidth(
	complexPolygon:
		| TPCB_PolygonSourceArray
		| Array<TPCB_PolygonSourceArray>
		| IPCB_Polygon
		| IPCB_ComplexPolygon,
): number;
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
function convertImageToComplexPolygon(
	imageBlob: Blob,
	imageWidth: number,
	imageHeight: number,
	tolerance?: number,
	simplification?: number,
	smoothing?: number,
	despeckling?: number,
	whiteAsBackgroundColor?: boolean,
	inversion?: boolean,
): Promise<IPCB_ComplexPolygon | undefined>;
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
function createComplexPolygon(
	complexPolygon:
		| TPCB_PolygonSourceArray
		| Array<TPCB_PolygonSourceArray>
		| IPCB_Polygon
		| Array<IPCB_Polygon>,
): IPCB_ComplexPolygon | undefined;
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
	console.log(`source${index + 1}:`, JSON.stringify(source));
});
console.log('count:', sources.length);
```

### createpolygon

# PCB\_MathPolygon.createPolygon() method

Create Single polygon

## Signature

```typescript
function createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;
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
function discretize(
	polygon: IPCB_Polygon | TPCB_PolygonSourceArray,
	options?: IPCB_DiscretizeOptions,
): Promise<Array<IPCB_DiscretizedPoint> | null>;
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

Promise&lt;Array&lt;[IPCB\_DiscretizedPoint](../interfaces/IPCB_DiscretizedPoint.md)<!-- -->&gt; \| null&gt;

Discretized point data

## Remarks

Discretize the boundary of a single polygon into a series of points

### disposetrace

# PCB\_MathPolygon.disposeTrace() method

释放描摹会话资源（worker + 像素缓存）

## Signature

```typescript
function disposeTrace(): Promise<void>;
```

## Returns

Promise&lt;void&gt;

## Remarks

描摹会话结束（如扩展弹窗关闭）时调用，释放 `traceImage` 服务端持有的 PotraceWorkerAPI 单例 worker 与 low/high 两档像素缓存（约 176MB）。幂等，可多次调用； 下次 `traceImage` 首次传 `imageBlob` 时自动重建。纯清理接口，无返回语义。

## Example

```javascript
// 弹窗关闭时释放描摹资源
await eda.pcb_MathPolygon.disposeTrace();
```

### splitpolygon

# PCB\_MathPolygon.splitPolygon() method

Split single polygon

## Signature

```typescript
function splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;
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
	console.log(`polygon${index + 1}:`, JSON.stringify(polygon.getSource()));
});
console.log('count:', polygons.length);
```

### traceimage

# PCB\_MathPolygon.traceImage() method

将图片描摹为矢量路径（SVG path），并导出预览图

## Signature

```typescript
function traceImage(options: {
	imageBlob?: Blob;
	imageWidth?: number;
	imageHeight?: number;
	quality?: 'low' | 'high';
	tolerance?: number;
	simplify?: number;
	smoothness?: number;
	despeckle?: number;
	whiteAsTransparent?: boolean;
	antiphase?: boolean;
}): Promise<
	| { path: string; sourcePreviewUrl: string; previewUrl: string; width: number; height: number }
	| undefined
>;
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

options

</td><td>

{ imageBlob?: Blob; imageWidth?: number; imageHeight?: number; quality?: 'low' \| 'high'; tolerance?: number; simplify?: number; smoothness?: number; despeckle?: number; whiteAsTransparent?: boolean; antiphase?: boolean }

</td><td>

.antiphase - 反相，默认 `false`

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ path: string; sourcePreviewUrl: string; previewUrl: string; width: number; height: number } \| undefined&gt;

描摹结果：`path` = SVG D 字符串（放置时回传给临时接口）；`sourcePreviewUrl` = 原图预览 dataURL（缩放居中 300×300，对应旧世界 SourceCanvasPreview）；`previewUrl` = 描摹结果预览图 dataURL（尺寸 ≤300×300）；`width`<!-- -->/`height` = 描摹 bbox 归一最长边 300 基准的尺寸（pixel 语义，与原图分辨率/缩放无关，作为放置尺寸默认值的换算基准）；空描摹（没有可描摹的轮廓）返回 `undefined`

## Remarks

纯预览接口，\*\*不触发任何放置工具\*\*（放置由临时接口 `eda.pcb_ImageTool.startPlaceVectorImage` 单独承担）。服务端内置读原始图片尺寸（扩展沙盒无 `new Image()`<!-- -->/canvas，无法提供原始尺寸），返回的 `width`<!-- -->/`height` 为原始自然尺寸（非描摹 bbox 尺寸）。首次调用需传 `imageBlob`<!-- -->（服务端缓存像素），之后拖动只传参数 ADD since EDA v5

## Example

```javascript
// 1. 首次调用：传 imageBlob（服务端缓存像素并读原始尺寸）
const traced = await eda.pcb_MathPolygon.traceImage({ imageBlob, quality: 'low' });

// 2. 拖动滑块：只传参数，不传 imageBlob
const traced2 = await eda.pcb_MathPolygon.traceImage({ quality: 'high', tolerance: 0.5, simplify: 0.2 });
if (traced2) {
	console.log('描摹成功：', traced2.path.slice(0, 80), '尺寸', traced2.width, traced2.height);
}
else {
	console.log('空描摹：无图可放置');
}
```
