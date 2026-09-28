# PCB\_PrimitiveImage class

PCB &amp; footprint / image primitive class

## Signature

```typescript
class PCB_PrimitiveImage implements IPCB_PrimitiveAPI
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[create(x, y, complexPolygon, layer, width, height, rotation, horizonMirror, primitiveLock)](./PCB_PrimitiveImage.md)

</td><td>

</td><td>

Create Image

</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Delete Image

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Get Image

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Get Image

</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Get all Image

</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Get all Image primitive IDs

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Modify Image

</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveImage.create() method

Create Image

## Signature

```typescript
function create(
	x: number,
	y: number,
	complexPolygon:
		| TPCB_PolygonSourceArray
		| Array<TPCB_PolygonSourceArray>
		| IPCB_Polygon
		| IPCB_ComplexPolygon,
	layer: TPCB_LayersOfImage,
	width?: number,
	height?: number,
	rotation?: number,
	horizonMirror?: boolean,
	primitiveLock?: boolean,
): Promise<IPCB_PrimitiveImage | undefined>;
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

x

</td><td>

number

</td><td>

BBox top-left point coordinates X

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

BBox top-left point coordinates Y

</td></tr>
<tr><td>

complexPolygon

</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| [IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)

</td><td>

Image source data (complex polygon). You can use the [PCB\_MathPolygon.convertImageToComplexPolygon()](./PCB_MathPolygon.md) method to convert an image file into complex polygon data

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)

</td><td>

Layer

</td></tr>
<tr><td>

width

</td><td>

number

</td><td>

_(Optional)_ Width

</td></tr>
<tr><td>

height

</td><td>

number

</td><td>

_(Optional)_ Height

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_(Optional)_ Rotation angle

</td></tr>
<tr><td>

horizonMirror

</td><td>

boolean

</td><td>

_(Optional)_ Whether it is horizontally mirrored

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_(Optional)_ Whether it is locked

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| undefined&gt;

Image primitive object

## Remarks

To create a color silkscreen image, use the [binary embedded object primitive class](./PCB_PrimitiveObject.md)

## Example

```javascript
// 1. 生成随机基准坐标，避免与画布上已有的图像重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 构造折线多边形轮廓（局部坐标 200×150 的五边形），图像轮廓必须是 ComplexPolygon 对象
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([
	0,
	0,
	'L',
	200,
	0,
	200,
	150,
	100,
	220,
	0,
	150
]);

// 3. 在顶层铜层（1）创建图像，宽 400、高 300，不旋转、不镜像、不锁定
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 4. 创建类保留现场，不删除图元
console.log('primitiveId:', image.getState_PrimitiveId());
console.log('layer:', image.getState_Layer());
console.log('width:', image.getState_Width());
console.log('height:', image.getState_Height());
console.log('primitiveType:', image.getState_PrimitiveType());
```

### delete

# PCB\_PrimitiveImage.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Image

## Signature

```typescript
function delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;
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

primitiveIds

</td><td>

string \| [IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;

</td><td>

Image primitive ID or Image primitive object

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 创建两个待删除的测试图像（随机坐标避免与画布已有图像重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const cp = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image1 = await eda.pcb_PrimitiveImage.create(x, y, cp, 1, 400, 300, 0, false, false);
const image2 = await eda.pcb_PrimitiveImage.create(x, y + 1000, cp, 1, 400, 300, 0, false, false);

// 2. 记录删除前的图像数量
const beforeCount = (await eda.pcb_PrimitiveImage.getAll()).length;

// 3. 以 ID 数组形式批量删除两个图像
const deleted = await eda.pcb_PrimitiveImage.delete([
	image1.getState_PrimitiveId(),
	image2.getState_PrimitiveId()
]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveImage.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveImage.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Image

## Signature

```typescript
function get(primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>;
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

primitiveIds

</td><td>

string

</td><td>

Image primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| undefined&gt;

Image primitive object, `undefined` indicates that the retrieval failed

## Example

```javascript
// 1. 创建两个测试图像（随机坐标避免重合，轮廓用折线多边形）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const cp = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image1 = await eda.pcb_PrimitiveImage.create(x, y, cp, 1, 400, 300, 0, false, false);
const image2 = await eda.pcb_PrimitiveImage.create(x, y + 1000, cp, 1, 400, 300, 0, false, false);

// 2. 传单个 ID 字符串，返回单个图像对象
const single = await eda.pcb_PrimitiveImage.get(image1.getState_PrimitiveId());

// 3. 传 ID 数组，返回图像对象数组
const arr = await eda.pcb_PrimitiveImage.get([
	image1.getState_PrimitiveId(),
	image2.getState_PrimitiveId()
]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveImage.delete([
	image1.getState_PrimitiveId(),
	image2.getState_PrimitiveId()
]);

console.log('single layer:', single.getState_Layer());
console.log('single width:', single.getState_Width());
console.log('array length:', arr.length);
console.log('image2 rotation:', arr[1].getState_Rotation());
```

### get_1

# PCB\_PrimitiveImage.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Image

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>;
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

primitiveIds

</td><td>

Array&lt;string&gt;

</td><td>

Image primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;&gt;

Image primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveImage.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Image

## Signature

```typescript
function getAll(
	layer?: TPCB_LayersOfImage,
	primitiveLock?: boolean,
): Promise<Array<IPCB_PrimitiveImage>>;
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

layer

</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)

</td><td>

_(Optional)_ Layer

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_(Optional)_ Whether it is locked

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;&gt;

Array of Image primitive objects

## Example

```javascript
// 1. 创建一个顶层铜层（1）测试图像作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const cp = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, cp, 1, 400, 300, 0, false, false);
const imageId = image.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部图像
const all = await eda.pcb_PrimitiveImage.getAll();

// 3. 按层过滤：只取顶层铜层（1）的图像
const topCopper = await eda.pcb_PrimitiveImage.getAll(1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveImage.delete([imageId]);

console.log('total images:', all.length);
console.log('top copper images:', topCopper.length);
console.log('marker image found:', topCopper.some(i => i.getState_PrimitiveId() === imageId));
```

### getallprimitiveid

# PCB\_PrimitiveImage.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Image primitive IDs

## Signature

```typescript
function getAllPrimitiveId(
	layer?: TPCB_LayersOfImage,
	primitiveLock?: boolean,
): Promise<Array<string>>;
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

layer

</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)

</td><td>

_(Optional)_ Layer

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_(Optional)_ Whether it is locked

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Image primitive IDs

## Example

```javascript
// 1. 创建一个顶层铜层（1）测试图像作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const cp = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, cp, 1, 400, 300, 0, false, false);
const imageId = image.getState_PrimitiveId();

// 2. 获取全部图像的图元 ID
const allIds = await eda.pcb_PrimitiveImage.getAllPrimitiveId();

// 3. 按层过滤：只取顶层铜层（1）图像的图元 ID
const topCopperIds = await eda.pcb_PrimitiveImage.getAllPrimitiveId(1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveImage.delete([imageId]);

console.log('total image ids:', allIds.length);
console.log('top copper image ids:', topCopperIds.length);
console.log('marker id in top copper list:', topCopperIds.includes(imageId));
```

### modify

# PCB\_PrimitiveImage.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Image

## Signature

```typescript
function modify(
	primitiveId: string | IPCB_PrimitiveImage,
	property: {
		x?: number;
		y?: number;
		layer?: TPCB_LayersOfImage;
		width?: number;
		height?: number;
		rotation?: number;
		horizonMirror?: boolean;
		primitiveLock?: boolean;
	},
): Promise<IPCB_PrimitiveImage | undefined>;
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

primitiveId

</td><td>

string \| [IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

</td><td>

Primitive ID

</td></tr>
<tr><td>

property

</td><td>

{ x?: number; y?: number; layer?: [TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)<!-- -->; width?: number; height?: number; rotation?: number; horizonMirror?: boolean; primitiveLock?: boolean }

</td><td>

Modify Parameter

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| undefined&gt;

Image primitive object

## Example

```javascript
// 1. 创建待修改的测试图像（随机坐标避免与画布已有图像重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const cp = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, cp, 1, 400, 300, 0, false, false);
const imageId = image.getState_PrimitiveId();

// 2. 读取修改前的层与旋转角度
const beforeLayer = image.getState_Layer();
const beforeRotation = image.getState_Rotation();

// 3. 批量修改：顶层铜层（1）→ 顶层丝印（3），旋转 0° → 90°
await eda.pcb_PrimitiveImage.modify(imageId, { layer: 3, rotation: 90 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveImage.get(imageId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', imageId);
console.log('layer:', beforeLayer, '→', refreshed.getState_Layer());
console.log('rotation:', beforeRotation, '→', refreshed.getState_Rotation());
```
