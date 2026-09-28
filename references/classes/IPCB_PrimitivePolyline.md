# IPCB\_PrimitivePolyline class

Polyline primitive

## Signature

```typescript
class IPCB_PrimitivePolyline implements IPCB_Primitive
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

[convertToFill()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: fill primitive

</td></tr>
<tr><td>

[convertToPour()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: Copper border primitive

</td></tr>
<tr><td>

[convertToRegion()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: Region primitive

</td></tr>
<tr><td>

[done()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_Polygon()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Get the property state: single polygon

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net name

</td></tr>
<tr><td>

[setState\_Polygon(polygon)](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: single polygon

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitivePolyline.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### converttofill

# IPCB\_PrimitivePolyline.convertToFill() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: fill primitive

## Signature

```typescript
function convertToFill(): Promise<IPCB_PrimitiveFill>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

Fill primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条矩形闭合折线
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 3. 转换为填充图元（原折线保留，保留现场供观察）
const fill = await polyline.convertToFill();

console.log('primitiveType:', `${polyline.getState_PrimitiveType()} → ${fill.getState_PrimitiveType()}`);
console.log('primitiveId:', fill.getState_PrimitiveId());
```

### converttopour

# IPCB\_PrimitivePolyline.convertToPour() method

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

// 2. 创建一条矩形闭合折线
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 3. 转换为覆铜边框图元（原折线保留，保留现场供观察）
const pour = await polyline.convertToPour();

console.log('primitiveType:', `${polyline.getState_PrimitiveType()} → ${pour.getState_PrimitiveType()}`);
console.log('primitiveId:', pour.getState_PrimitiveId());
```

### converttoregion

# IPCB\_PrimitivePolyline.convertToRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: Region primitive

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

// 2. 创建一条矩形闭合折线
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 3. 转换为区域图元（原折线保留，保留现场供观察）
const region = await polyline.convertToRegion();

console.log('primitiveType:', `${polyline.getState_PrimitiveType()} → ${region.getState_PrimitiveType()}`);
console.log('primitiveId:', region.getState_PrimitiveId());
```

### done

# IPCB\_PrimitivePolyline.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitivePolyline>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条顶层铜层的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = polyline.getState_Layer();

// 3. 异步模式下把折线挪到底层铜层（此时画布还没变）
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_Layer(2);
await asyncPolyline.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### getstate_layer

# IPCB\_PrimitivePolyline.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfLine;
```

## Returns

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)

Layer

## Example

```javascript
// 1. 创建一条顶层铜层（1）的折线
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 读取折线所在层
const layer = polyline.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_linewidth

# IPCB\_PrimitivePolyline.getState\_LineWidth() method

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
// 1. 创建一条 10mil 线宽的折线
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 读取线宽
const lineWidth = polyline.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_net

# IPCB\_PrimitivePolyline.getState\_Net() method

Get the property state: net name

## Signature

```typescript
function getState_Net(): string;
```

## Returns

string

Net name

## Example

```javascript
// 1. 创建一条无网络的折线
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 读取网络名称（无网络时为空字符串）
const net = polyline.getState_Net();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('net:', JSON.stringify(net));
```

### getstate_polygon

# IPCB\_PrimitivePolyline.getState\_Polygon() method

Get the property state: single polygon

## Signature

```typescript
function getState_Polygon(): IPCB_Polygon;
```

## Returns

[IPCB\_Polygon](./IPCB_Polygon.md)

Single polygon

## Example

```javascript
// 1. 创建一条已知轮廓的折线（500 → 拐弯 → 300）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 读取多边形对象，再取它的轮廓源数组
const currentPolygon = polyline.getState_Polygon();
const source = currentPolygon.getSource();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('polygonSource:', JSON.stringify(source));
```

### getstate_primitiveid

# IPCB\_PrimitivePolyline.getState\_PrimitiveId() method

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
// 1. 创建一条折线
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 读取图元 ID
const primitiveId = polyline.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitivePolyline.getState\_PrimitiveLock() method

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
// 1. 创建一条未锁定的折线
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 读取锁定状态
const primitiveLock = polyline.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('primitiveLock:', primitiveLock);
```

### getstate_primitivetype

# IPCB\_PrimitivePolyline.getState\_PrimitiveType() method

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
// 1. 创建一条折线
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 读取图元类型
const primitiveType = polyline.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### isasync

# IPCB\_PrimitivePolyline.isAsync() method

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
// 1. 创建一条折线
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 2. 查询异步模式
const isAsync = polyline.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePolyline.delete([polyline.getState_PrimitiveId()]);

console.log('isAsync:', isAsync);
```

### reset

# IPCB\_PrimitivePolyline.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitivePolyline>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条顶层铜层的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = polyline.getState_Layer();

// 3. 异步模式下把层改到底层（2），随后反悔
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_Layer(2);

// 4. reset 丢弃未提交的修改（保留现场供观察）
await asyncPolyline.reset();

// 5. 从画布重新读取，确认层没有变
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_layer

# IPCB\_PrimitivePolyline.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitivePolyline;
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

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)

</td><td>

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条顶层铜层（1）的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = polyline.getState_Layer();

// 3. 异步模式把折线挪到底层铜层（2）
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_Layer(2);
await asyncPolyline.done();

// 4. 从画布重新读取，确认层已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_linewidth

# IPCB\_PrimitivePolyline.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number): IPCB_PrimitivePolyline;
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

[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条 10mil 线宽的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = polyline.getState_LineWidth();

// 3. 切换异步模式，线宽加粗到 20mil
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_LineWidth(20);
await asyncPolyline.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());

console.log('lineWidth:', before, '→', refetched.getState_LineWidth());
```

### setstate_net

# IPCB\_PrimitivePolyline.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
function setState_Net(net: string): IPCB_PrimitivePolyline;
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

[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条无网络的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = polyline.getState_Net();

// 3. 切换异步模式并指定网络（'' → '嘉立创示例_NET'）
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_Net('嘉立创示例_NET');
await asyncPolyline.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());

console.log('net:', JSON.stringify(before), '→', JSON.stringify(refetched.getState_Net()));
```

### setstate_polygon

# IPCB\_PrimitivePolyline.setState\_Polygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: single polygon

## Signature

```typescript
function setState_Polygon(polygon: IPCB_Polygon): IPCB_PrimitivePolyline;
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

[IPCB\_Polygon](./IPCB_Polygon.md)

</td><td>

Single polygon

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条 500 → 拐弯 → 300 的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = JSON.stringify(polyline.getState_Polygon().getSource());

// 3. 构造新轮廓（拉长到 800 → 拐弯 → 600），异步模式提交
const newPolygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 800, y, x + 800, y + 600]);
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_Polygon(newPolygon);
await asyncPolyline.done();

// 4. 从画布重新读取，确认轮廓已替换（保留现场供观察）
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());
const after = JSON.stringify(refetched.getState_Polygon().getSource());

console.log('polygonSource:', before, '→', after);
```

### setstate_primitivelock

# IPCB\_PrimitivePolyline.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePolyline;
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

[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条未锁定的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = polyline.getState_PrimitiveLock();

// 3. 切换异步模式并锁定折线
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_PrimitiveLock(true);
await asyncPolyline.done();

// 4. 从画布重新读取，确认已锁定（保留现场供观察）
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', refetched.getState_PrimitiveLock());
```

### toasync

# IPCB\_PrimitivePolyline.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitivePolyline;
```

## Returns

[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条无网络的折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 3. 切换异步模式后批量修改：划归网络 + 挪到底层
const asyncPolyline = polyline.toAsync();
asyncPolyline.setState_Net('嘉立创示例_NET');
asyncPolyline.setState_Layer(2);
await asyncPolyline.done();

// 4. 从画布重新读取，确认批量修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitivePolyline.get(polyline.getState_PrimitiveId());

console.log('net:', JSON.stringify(refetched.getState_Net()));
console.log('layer:', refetched.getState_Layer());
```

### tosync

# IPCB\_PrimitivePolyline.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitivePolyline;
```

## Returns

[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)

Polyline primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一条折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const before = polyline.isAsync();

// 3. 转换为同步图元（保留现场供观察）
const syncPolyline = polyline.toSync();
const after = syncPolyline.isAsync();

// 4. 同步图元直接读取属性，无需提交
console.log('isAsync:', before, '→', after);
console.log('primitiveType:', syncPolyline.getState_PrimitiveType());
console.log('layer:', syncPolyline.getState_Layer());
```
