# PCB\_PrimitiveImage class

PCB &amp; footprint / image primitive class

## Signature

```typescript
export class PCB_PrimitiveImage implements IPCB_PrimitiveAPI 
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
public create(x: number, y: number, complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon, layer: TPCB_LayersOfImage, width?: number, height?: number, rotation?: number, horizonMirror?: boolean, primitiveLock?: boolean): Promise<IPCB_PrimitiveImage | undefined>;
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
  0, 0, 'L', 200, 0, 200, 150, 100, 220, 0, 150
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
public delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;
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
public get(primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>;
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
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>;
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
public getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveImage>>;
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
public getAllPrimitiveId(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;
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
public modify(primitiveId: string | IPCB_PrimitiveImage, property: { x?: undefined | number; y?: undefined | number; layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.TOP_SOLDER_MASK | EPCB_LayerId.TOP_ASSEMBLY | EPCB_LayerId.BOTTOM | EPCB_LayerId.BOTTOM_SILKSCREEN | EPCB_LayerId.BOTTOM_SOLDER_MASK | EPCB_LayerId.BOTTOM_ASSEMBLY | EPCB_LayerId.DOCUMENT | EPCB_LayerId.MECHANICAL | EPCB_LayerId.INNER_1 | EPCB_LayerId.INNER_2 | EPCB_LayerId.INNER_3 | EPCB_LayerId.INNER_4 | EPCB_LayerId.INNER_5 | EPCB_LayerId.INNER_6 | EPCB_LayerId.INNER_7 | EPCB_LayerId.INNER_8 | EPCB_LayerId.INNER_9 | EPCB_LayerId.INNER_10 | EPCB_LayerId.INNER_11 | EPCB_LayerId.INNER_12 | EPCB_LayerId.INNER_13 | EPCB_LayerId.INNER_14 | EPCB_LayerId.INNER_15 | EPCB_LayerId.INNER_16 | EPCB_LayerId.INNER_17 | EPCB_LayerId.INNER_18 | EPCB_LayerId.INNER_19 | EPCB_LayerId.INNER_20 | EPCB_LayerId.INNER_21 | EPCB_LayerId.INNER_22 | EPCB_LayerId.INNER_23 | EPCB_LayerId.INNER_24 | EPCB_LayerId.INNER_25 | EPCB_LayerId.INNER_26 | EPCB_LayerId.INNER_27 | EPCB_LayerId.INNER_28 | EPCB_LayerId.INNER_29 | EPCB_LayerId.INNER_30 | EPCB_LayerId.CUSTOM_1 | EPCB_LayerId.CUSTOM_2 | EPCB_LayerId.CUSTOM_3 | EPCB_LayerId.CUSTOM_4 | EPCB_LayerId.CUSTOM_5 | EPCB_LayerId.CUSTOM_6 | EPCB_LayerId.CUSTOM_7 | EPCB_LayerId.CUSTOM_8 | EPCB_LayerId.CUSTOM_9 | EPCB_LayerId.CUSTOM_10 | EPCB_LayerId.CUSTOM_11 | EPCB_LayerId.CUSTOM_12 | EPCB_LayerId.CUSTOM_13 | EPCB_LayerId.CUSTOM_14 | EPCB_LayerId.CUSTOM_15 | EPCB_LayerId.CUSTOM_16 | EPCB_LayerId.CUSTOM_17 | EPCB_LayerId.CUSTOM_18 | EPCB_LayerId.CUSTOM_19 | EPCB_LayerId.CUSTOM_20 | EPCB_LayerId.CUSTOM_21 | EPCB_LayerId.CUSTOM_22 | EPCB_LayerId.CUSTOM_23 | EPCB_LayerId.CUSTOM_24 | EPCB_LayerId.CUSTOM_25 | EPCB_LayerId.CUSTOM_26 | EPCB_LayerId.CUSTOM_27 | EPCB_LayerId.CUSTOM_28 | EPCB_LayerId.CUSTOM_29 | EPCB_LayerId.CUSTOM_30 | EPCB_LayerId.DRILL_DRAWING; width?: undefined | number; height?: undefined | number; rotation?: undefined | number; horizonMirror?: undefined | false | true; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveImage | undefined>;
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

{ x?: undefined \| number; y?: undefined \| number; layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MECHANICAL](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DRILL\_DRAWING](../enums/EPCB_LayerId.md)<!-- -->; width?: undefined \| number; height?: undefined \| number; rotation?: undefined \| number; horizonMirror?: undefined \| false \| true; primitiveLock?: undefined \| false \| true }


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
