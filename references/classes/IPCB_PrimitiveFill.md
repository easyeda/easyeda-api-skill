# IPCB\_PrimitiveFill class

Fill primitive

## Signature

```typescript
class IPCB_PrimitiveFill implements IPCB_Primitive
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

[convertToPolyline()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: polyline primitive

</td></tr>
<tr><td>

[convertToPour()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: Copper border primitive

</td></tr>
<tr><td>

[convertToRegion()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: region primitive (default is the forbidden region)

</td></tr>
<tr><td>

[done()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: complex polygon

</td></tr>
<tr><td>

[getState\_FillMode()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: fill mode

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_ComplexPolygon(complexPolygon)](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: complex polygon

</td></tr>
<tr><td>

[setState\_FillMode(fillMode)](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: fill mode

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net name

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveFill.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### converttopolyline

# IPCB\_PrimitiveFill.convertToPolyline() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: polyline primitive

## Signature

```typescript
function convertToPolyline(): Promise<IPCB_PrimitivePolyline>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 3. 转换为折线图元（保留现场供观察）
const polyline = await fill.convertToPolyline();

console.log('primitiveType:', `Fill → ${polyline.getState_PrimitiveType()}`);
console.log('primitiveId:', polyline.getState_PrimitiveId());
```

### converttopour

# IPCB\_PrimitiveFill.convertToPour() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: Copper border primitive

## Signature

```typescript
function convertToPour(): Promise<IPCB_PrimitivePour>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 3. 转换为覆铜边框图元（保留现场供观察）
const pour = await fill.convertToPour();

console.log('primitiveType:', `Fill → ${pour.getState_PrimitiveType()}`);
console.log('primitiveId:', pour.getState_PrimitiveId());
```

### converttoregion

# IPCB\_PrimitiveFill.convertToRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: region primitive (default is the forbidden region)

## Signature

```typescript
function convertToRegion(): Promise<IPCB_PrimitiveRegion>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 3. 转换为区域图元（默认是禁止区域，保留现场供观察）
const region = await fill.convertToRegion();

console.log('primitiveType:', `Fill → ${region.getState_PrimitiveType()}`);
console.log('primitiveId:', region.getState_PrimitiveId());
```

### done

# IPCB\_PrimitiveFill.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveFill>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = fill.getState_Layer();

// 3. 异步模式下把填充挪到底层铜层（此时画布还没变）
const asyncFill = fill.toAsync();
asyncFill.setState_Layer(2);
await asyncFill.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### getstate_complexpolygon

# IPCB\_PrimitiveFill.getState\_ComplexPolygon() method

Get the property state: complex polygon

## Signature

```typescript
function getState_ComplexPolygon(): IPCB_Polygon;
```

## Returns

[IPCB\_Polygon](./IPCB_Polygon.md)

Complex polygon

## Example

```javascript
// 1. 创建一个已知轮廓的矩形填充（500 x 300 mil）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取复杂多边形对象，再取它的轮廓源数组
const complexPolygon = fill.getState_ComplexPolygon();
const source = complexPolygon.getSource();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('polygonSource:', JSON.stringify(source));
```

### getstate_fillmode

# IPCB\_PrimitiveFill.getState\_FillMode() method

Get the property state: fill mode

## Signature

```typescript
function getState_FillMode(): EPCB_PrimitiveFillMode | undefined;
```

## Returns

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md) \| undefined

Fill mode

## Example

```javascript
// 1. 创建一个实心填充的矩形
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取填充模式（0=SOLID 实心，1=MESH 网格，2=INNER_ELECTRICAL_LAYER 内电层）
const fillMode = fill.getState_FillMode();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('fillMode:', fillMode);
```

### getstate_layer

# IPCB\_PrimitiveFill.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfFill;
```

## Returns

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)

Layer

## Example

```javascript
// 1. 创建一个顶层铜层（1）的矩形填充
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取填充所在层
const layer = fill.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_linewidth

# IPCB\_PrimitiveFill.getState\_LineWidth() method

Get the property state: Line width

## Signature

```typescript
function getState_LineWidth(): number;
```

## Returns

number

Line width

## Example

```javascript
// 1. 创建一个 10mil 线宽的矩形填充
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取线宽
const lineWidth = fill.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_net

# IPCB\_PrimitiveFill.getState\_Net() method

Get the property state: net name

## Signature

```typescript
function getState_Net(): string | undefined;
```

## Returns

string \| undefined

Net name

## Example

```javascript
// 1. 创建一个无网络的矩形填充
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取网络名称（无网络时为空字符串）
const net = fill.getState_Net();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('net:', JSON.stringify(net));
```

### getstate_primitiveid

# IPCB\_PrimitiveFill.getState\_PrimitiveId() method

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
// 1. 创建一个矩形填充
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取图元 ID
const primitiveId = fill.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitiveFill.getState\_PrimitiveLock() method

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
// 1. 创建一个未锁定的矩形填充
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取锁定状态
const primitiveLock = fill.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('primitiveLock:', primitiveLock);
```

### getstate_primitivetype

# IPCB\_PrimitiveFill.getState\_PrimitiveType() method

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
// 1. 创建一个矩形填充
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 读取图元类型
const primitiveType = fill.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### isasync

# IPCB\_PrimitiveFill.isAsync() method

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
// 1. 创建一个矩形填充
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 2. 查询异步模式
const isAsync = fill.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveFill.delete([fill.getState_PrimitiveId()]);

console.log('isAsync:', isAsync);
```

### reset

# IPCB\_PrimitiveFill.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveFill>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = fill.getState_Layer();

// 3. 异步模式下把层改到底层（2），随后反悔
const asyncFill = fill.toAsync();
asyncFill.setState_Layer(2);

// 4. reset 丢弃未提交的修改（保留现场供观察）
await asyncFill.reset();

// 5. 从画布重新读取，确认层没有变
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_complexpolygon

# IPCB\_PrimitiveFill.setState\_ComplexPolygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: complex polygon

## Signature

```typescript
function setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveFill;
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

[IPCB\_Polygon](./IPCB_Polygon.md)

</td><td>

Complex polygon

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 500 x 300 的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = JSON.stringify(fill.getState_ComplexPolygon().getSource());

// 3. 构造新轮廓（放大到 800 x 400），异步模式提交
const newPolygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 800, 400, 0, 0]);
const asyncFill = fill.toAsync();
asyncFill.setState_ComplexPolygon(newPolygon);
await asyncFill.done();

// 4. 从画布重新读取，确认轮廓已替换（保留现场供观察）
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());
const after = JSON.stringify(refetched.getState_ComplexPolygon().getSource());

console.log('polygonSource:', before, '→', after);
```

### setstate_fillmode

# IPCB\_PrimitiveFill.setState\_FillMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: fill mode

## Signature

```typescript
function setState_FillMode(fillMode: EPCB_PrimitiveFillMode): IPCB_PrimitiveFill;
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

fillMode

</td><td>

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md)

</td><td>

Fill mode

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个内电层模式（2）的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 2, 10, false);
const before = fill.getState_FillMode();

// 3. 异步模式切换为实心填充（0）
const asyncFill = fill.toAsync();
asyncFill.setState_FillMode(0);
await asyncFill.done();

// 4. 从画布重新读取，确认模式已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());

console.log('fillMode:', before, '→', refetched.getState_FillMode());
```

### setstate_layer

# IPCB\_PrimitiveFill.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfFill): IPCB_PrimitiveFill;
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

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)

</td><td>

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层（1）的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = fill.getState_Layer();

// 3. 异步模式把填充挪到底层铜层（2）
const asyncFill = fill.toAsync();
asyncFill.setState_Layer(2);
await asyncFill.done();

// 4. 从画布重新读取，确认层已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_linewidth

# IPCB\_PrimitiveFill.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number): IPCB_PrimitiveFill;
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

lineWidth

</td><td>

number

</td><td>

Line width

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 10mil 线宽的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = fill.getState_LineWidth();

// 3. 切换异步模式，线宽加粗到 20mil
const asyncFill = fill.toAsync();
asyncFill.setState_LineWidth(20);
await asyncFill.done();

// 4. 从图元对象读回新值（保留现场供观察）
// 注：当前版本画布侧渲染线宽保持默认值，修改在图元对象上生效
const after = fill.getState_LineWidth();

console.log('lineWidth:', before, '→', after);
```

### setstate_net

# IPCB\_PrimitiveFill.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
function setState_Net(net: string): IPCB_PrimitiveFill;
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

net

</td><td>

string

</td><td>

Net name

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个无网络的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = fill.getState_Net();

// 3. 切换异步模式并指定网络（'' → '嘉立创示例_NET'）
const asyncFill = fill.toAsync();
asyncFill.setState_Net('嘉立创示例_NET');
await asyncFill.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());

console.log('net:', JSON.stringify(before), '→', JSON.stringify(refetched.getState_Net()));
```

### setstate_primitivelock

# IPCB\_PrimitiveFill.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveFill;
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

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个未锁定的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = fill.getState_PrimitiveLock();

// 3. 切换异步模式并锁定填充
const asyncFill = fill.toAsync();
asyncFill.setState_PrimitiveLock(true);
await asyncFill.done();

// 4. 从画布重新读取，确认已锁定（保留现场供观察）
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', refetched.getState_PrimitiveLock());
```

### toasync

# IPCB\_PrimitiveFill.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveFill;
```

## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个无网络的矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 3. 切换异步模式后批量修改：划归网络 + 挪到底层
const asyncFill = fill.toAsync();
asyncFill.setState_Net('嘉立创示例_NET');
asyncFill.setState_Layer(2);
await asyncFill.done();

// 4. 从画布重新读取，确认批量修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveFill.get(fill.getState_PrimitiveId());

console.log('net:', JSON.stringify(refetched.getState_Net()));
console.log('layer:', refetched.getState_Layer());
```

### tosync

# IPCB\_PrimitiveFill.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveFill;
```

## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个矩形填充
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const before = fill.isAsync();

// 3. 转换为同步图元（保留现场供观察）
const syncFill = fill.toSync();
const after = syncFill.isAsync();

// 4. 同步图元直接读取属性，无需提交
console.log('isAsync:', before, '→', after);
console.log('primitiveType:', syncFill.getState_PrimitiveType());
console.log('layer:', syncFill.getState_Layer());
```
