# IPCB\_PrimitiveImage class

Image primitive

## Signature

```typescript
class IPCB_PrimitiveImage implements IPCB_Primitive
```
**Implements:** [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## Remarks

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: image source data ( complex polygon)

</td></tr>
<tr><td>

[getState\_Height()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: height

</td></tr>
<tr><td>

[getState\_HorizonMirror()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: whether it is horizontally mirrored

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_Rotation()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: rotation angle

</td></tr>
<tr><td>

[getState\_Width()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: width

</td></tr>
<tr><td>

[getState\_X()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: BBox top-left point coordinates X

</td></tr>
<tr><td>

[getState\_Y()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Get the property state: BBox top-left point coordinates Y

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_Height(height)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: height

</td></tr>
<tr><td>

[setState\_HorizonMirror(horizonMirror)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is horizontally mirrored

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: rotation angle

</td></tr>
<tr><td>

[setState\_Width(width)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: width

</td></tr>
<tr><td>

[setState\_X(x)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: BBox top-left point coordinates X

</td></tr>
<tr><td>

[setState\_Y(y)](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: BBox top-left point coordinates Y

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveImage.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveImage.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveImage>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 400 x 300 的顶层图像
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_Rotation();

// 3. 异步模式下旋转 90 度（此时画布还没变）
const asyncImage = image.toAsync();
asyncImage.setState_Rotation(90);
await asyncImage.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### getstate_complexpolygon

# IPCB\_PrimitiveImage.getState\_ComplexPolygon() method

Get the property state: image source data ( complex polygon)

## Signature

```typescript
function getState_ComplexPolygon(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;
```

## Returns

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

Image source data ( complex polygon)

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个源轮廓为折线多边形的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取源多边形数据（返回轮廓源数组）
const source = image.getState_ComplexPolygon();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('polygonSource:', JSON.stringify(source));
```

### getstate_height

# IPCB\_PrimitiveImage.getState\_Height() method

Get the property state: height

## Signature

```typescript
function getState_Height(): number;
```

## Returns

number

Height

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个 400 x 300 的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取图像高度
const height = image.getState_Height();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('height:', height);
```

### getstate_horizonmirror

# IPCB\_PrimitiveImage.getState\_HorizonMirror() method

Get the property state: whether it is horizontally mirrored

## Signature

```typescript
function getState_HorizonMirror(): boolean;
```

## Returns

boolean

Whether it is horizontally mirrored

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未镜像的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取镜像状态
const horizonMirror = image.getState_HorizonMirror();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('horizonMirror:', horizonMirror);
```

### getstate_layer

# IPCB\_PrimitiveImage.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfImage;
```

## Returns

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)

Layer

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个顶层铜层（1）的图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取图像所在层
const layer = image.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_primitiveid

# IPCB\_PrimitiveImage.getState\_PrimitiveId() method

Get the property state: primitive ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

Primitive ID

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取图元 ID
const primitiveId = image.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitiveImage.getState\_PrimitiveLock() method

Get the property state: whether it is locked

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

Whether it is locked

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未锁定的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取锁定状态
const primitiveLock = image.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('primitiveLock:', primitiveLock);
```

### getstate_primitivetype

# IPCB\_PrimitiveImage.getState\_PrimitiveType() method

Get the property state: primitive type

## Signature

```typescript
function getState_PrimitiveType(): EPCB_PrimitiveType;
```

## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

Primitive type

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取图元类型
const primitiveType = image.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_rotation

# IPCB\_PrimitiveImage.getState\_Rotation() method

Get the property state: rotation angle

## Signature

```typescript
function getState_Rotation(): number;
```

## Returns

number

Rotation angle

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未旋转的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取旋转角度
const rotation = image.getState_Rotation();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('rotation:', rotation);
```

### getstate_width

# IPCB\_PrimitiveImage.getState\_Width() method

Get the property state: width

## Signature

```typescript
function getState_Width(): number;
```

## Returns

number

Width

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个 400 x 300 的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取图像宽度
const width = image.getState_Width();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('width:', width);
```

### getstate_x

# IPCB\_PrimitiveImage.getState\_X() method

Get the property state: BBox top-left point coordinates X

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

BBox top-left point coordinates X

## Example

```javascript
// 1. 生成本次运行专用的坐标，在 (x, y) 处创建一个顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取 BBox 左上点坐标 X
const imageX = image.getState_X();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('x:', imageX);
```

### getstate_y

# IPCB\_PrimitiveImage.getState\_Y() method

Get the property state: BBox top-left point coordinates Y

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

BBox top-left point coordinates Y

## Example

```javascript
// 1. 生成本次运行专用的坐标，在 (x, y) 处创建一个顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 读取 BBox 左上点坐标 Y
const imageY = image.getState_Y();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('y:', imageY);
```

### isasync

# IPCB\_PrimitiveImage.isAsync() method

Query whether the primitive is an async primitive

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

Whether Is async primitive

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 查询异步模式
const isAsync = image.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveImage.delete([image.getState_PrimitiveId()]);

console.log('isAsync:', isAsync);
```

### reset

# IPCB\_PrimitiveImage.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveImage>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未旋转的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_Rotation();

// 2. 异步模式下把图像旋转 90 度，随后反悔
const asyncImage = image.toAsync();
asyncImage.setState_Rotation(90);

// 3. reset 丢弃未提交的修改（保留现场供观察）
await asyncImage.reset();

// 4. 从画布重新读取，确认旋转没有变
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### setstate_height

# IPCB\_PrimitiveImage.setState\_Height() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: height

## Signature

```typescript
function setState_Height(height: number): IPCB_PrimitiveImage;
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

height

</td><td>

number

</td><td>

Height

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个 400 x 300 的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_Height();

// 2. 异步模式把高度从 300 调到 450
const asyncImage = image.toAsync();
asyncImage.setState_Height(450);
await asyncImage.done();

// 3. 从画布重新读取，确认高度已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('height:', before, '→', refetched.getState_Height());
```

### setstate_horizonmirror

# IPCB\_PrimitiveImage.setState\_HorizonMirror() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is horizontally mirrored

## Signature

```typescript
function setState_HorizonMirror(horizonMirror: boolean): IPCB_PrimitiveImage;
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

horizonMirror

</td><td>

boolean

</td><td>

Whether it is horizontally mirrored

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未镜像的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_HorizonMirror();

// 2. 异步模式开启水平镜像
const asyncImage = image.toAsync();
asyncImage.setState_HorizonMirror(true);
await asyncImage.done();

// 3. 从画布重新读取，确认镜像已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('horizonMirror:', before, '→', refetched.getState_HorizonMirror());
```

### setstate_layer

# IPCB\_PrimitiveImage.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveImage;
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

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个顶层铜层（1）的图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_Layer();

// 2. 异步模式把图像挪到顶层丝印层（3）
const asyncImage = image.toAsync();
asyncImage.setState_Layer(3);
await asyncImage.done();

// 3. 从画布重新读取，确认层已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_primitivelock

# IPCB\_PrimitiveImage.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveImage;
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

primitiveLock

</td><td>

boolean

</td><td>

Whether it is locked

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未锁定的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_PrimitiveLock();

// 2. 异步模式锁定图像
const asyncImage = image.toAsync();
asyncImage.setState_PrimitiveLock(true);
await asyncImage.done();

// 3. 从画布重新读取，确认锁定已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', refetched.getState_PrimitiveLock());
```

### setstate_rotation

# IPCB\_PrimitiveImage.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: rotation angle

## Signature

```typescript
function setState_Rotation(rotation: number): IPCB_PrimitiveImage;
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

rotation

</td><td>

number

</td><td>

Rotation angle

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未旋转的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_Rotation();

// 2. 异步模式旋转 90 度
const asyncImage = image.toAsync();
asyncImage.setState_Rotation(90);
await asyncImage.done();

// 3. 从画布重新读取，确认角度已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### setstate_width

# IPCB\_PrimitiveImage.setState\_Width() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: width

## Signature

```typescript
function setState_Width(width: number): IPCB_PrimitiveImage;
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

width

</td><td>

number

</td><td>

Width

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个 400 x 300 的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_Width();

// 2. 异步模式把宽度从 400 调到 600
const asyncImage = image.toAsync();
asyncImage.setState_Width(600);
await asyncImage.done();

// 3. 从画布重新读取，确认宽度已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('width:', before, '→', refetched.getState_Width());
```

### setstate_x

# IPCB\_PrimitiveImage.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: BBox top-left point coordinates X

## Signature

```typescript
function setState_X(x: number): IPCB_PrimitiveImage;
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
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_X();

// 2. 异步模式把图像右移 500 mil
const asyncImage = image.toAsync();
asyncImage.setState_X(before + 500);
await asyncImage.done();

// 3. 从画布重新读取，确认位置已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('x:', before, '→', refetched.getState_X());
```

### setstate_y

# IPCB\_PrimitiveImage.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: BBox top-left point coordinates Y

## Signature

```typescript
function setState_Y(y: number): IPCB_PrimitiveImage;
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

y

</td><td>

number

</td><td>

BBox top-left point coordinates Y

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.getState_Y();

// 2. 异步模式把图像下移 500 mil
const asyncImage = image.toAsync();
asyncImage.setState_Y(before + 500);
await asyncImage.done();

// 3. 从画布重新读取，确认位置已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('y:', before, '→', refetched.getState_Y());
```

### toasync

# IPCB\_PrimitiveImage.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveImage;
```

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个 400 x 300 的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);

// 2. 切换异步模式后批量修改：放大到 600 x 450
const asyncImage = image.toAsync();
asyncImage.setState_Width(600);
asyncImage.setState_Height(450);
await asyncImage.done();

// 3. 从画布重新读取，确认批量修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveImage.get(image.getState_PrimitiveId());

console.log('width:', refetched.getState_Width());
console.log('height:', refetched.getState_Height());
```

### tosync

# IPCB\_PrimitiveImage.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveImage;
```

## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

Image primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个 400 x 300 的顶层图像
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([0, 0, 'L', 200, 0, 200, 150, 0, 150]);
const image = await eda.pcb_PrimitiveImage.create(x, y, complexPolygon, 1, 400, 300, 0, false, false);
const before = image.isAsync();

// 2. 转换为同步图元（保留现场供观察）
const syncImage = image.toSync();
const after = syncImage.isAsync();

// 3. 同步图元直接读取属性，无需提交
console.log('isAsync:', before, '→', after);
console.log('primitiveType:', syncImage.getState_PrimitiveType());
console.log('layer:', syncImage.getState_Layer());
```
