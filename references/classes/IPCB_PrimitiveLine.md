# IPCB\_PrimitiveLine class

Line primitive

## Signature

```typescript
class IPCB_PrimitiveLine implements IPCB_Primitive
```
**Implements:** [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## Remarks

Both lines and arc lines are wires, corresponding to the line traces and arc traces on the canvas

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getAdjacentPrimitives()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Get Adjacent primitive objects

</td></tr>
<tr><td>

[getEntireTrack(includeVias)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Get the entire wire

</td></tr>
<tr><td>

[getEntireTrack(includeVias)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Get the entire wire

</td></tr>
<tr><td>

[getState\_EndX()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: end position X

</td></tr>
<tr><td>

[getState\_EndY()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: end position Y

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_StartX()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: start position X

</td></tr>
<tr><td>

[getState\_StartY()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Get the property state: start position Y

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_EndX(endX)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: end position X

</td></tr>
<tr><td>

[setState\_EndY(endY)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: end position Y

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net name

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_StartX(startX)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: start position X

</td></tr>
<tr><td>

[setState\_StartY(startY)](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: start position Y

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveLine.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveLine.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveLine>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 42000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线走线
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 切换异步模式，连续累计两处修改（线宽 + 换层）
const asyncLine = line.toAsync();
asyncLine.setState_LineWidth(24);
asyncLine.setState_Layer(2);

// 4. 一次性提交到画布
await asyncLine.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());

console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
console.log('layer:', 1, '→', refetched.getState_Layer());
```

### getadjacentprimitives

# IPCB\_PrimitiveLine.getAdjacentPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Adjacent primitive objects

## Signature

```typescript
function getAdjacentPrimitives(): Promise<
	Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>
>;
```

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

Adjacent line, via, and arc-line primitive objects

## Remarks

It will get the line, via, and arc-line primitive objects directly connected to both ends of the line

## Example

```javascript
// 1. 创建一条直线走线，终点落在 (7500, 7000)
const line = await eda.pcb_PrimitiveLine.create('', 1, 7000, 7000, 7500, 7000, 10);

// 2. 创建一段圆弧，起点与直线终点重合，两段构成一整段导线
const arc = await eda.pcb_PrimitiveArc.create('', 1, 7500, 7000, 7800, 7300, 90, 10, 1, false);

// 3. 获取与直线直接相连的图元，并读出各自的类型
const adjacent = await line.getAdjacentPrimitives();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('adjacent count:', adjacent.length);
adjacent.forEach((p, i) => {
	console.log(`adjacent[${i}] type:`, p.getState_PrimitiveType());
});
```

### getentiretrack

# IPCB\_PrimitiveLine.getEntireTrack() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the entire wire

## Signature

```typescript
function getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;
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

includeVias

</td><td>

false

</td><td>

Whether to include the vias at both ends of the wire

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

All lines and arc lines in the entire wire

## Example

```javascript
// 1. 创建一条直线走线，终点落在 (7500, 7000)
const line = await eda.pcb_PrimitiveLine.create('', 1, 7000, 7000, 7500, 7000, 10);

// 2. 创建一段圆弧，起点与直线终点重合，两段构成一整段导线
const arc = await eda.pcb_PrimitiveArc.create('', 1, 7500, 7000, 7800, 7300, 90, 10, 1, false);

// 3. 只取导线内的直线和圆弧
const trackOnly = await line.getEntireTrack(false);

// 4. 连两端过孔一起取（本例两端没有过孔，数量不变）
const trackWithVias = await line.getEntireTrack(true);

// 5. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('track(false) count:', trackOnly.length);
trackOnly.forEach((p, i) => {
	console.log(`track(false)[${i}] type:`, p.getState_PrimitiveType());
});
console.log('track(true) count:', trackWithVias.length);
```

### getentiretrack_1

# IPCB\_PrimitiveLine.getEntireTrack() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the entire wire

## Signature

```typescript
function getEntireTrack(
	includeVias: true,
): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;
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

includeVias

</td><td>

true

</td><td>

Whether to include the vias at both ends of the wire

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

All lines and arc lines in the entire wire, as well as the vias connected at both ends (if any)

### getstate_endx

# IPCB\_PrimitiveLine.getState\_EndX() method

Get the property state: end position X

## Signature

```typescript
function getState_EndX(): number;
```

## Returns

number

End position X

## Example

```javascript
// 1. 创建一条测试直线，终点 (1600, 1000)
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取终点 X
const endX = line.getState_EndX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('endX:', endX);
```

### getstate_endy

# IPCB\_PrimitiveLine.getState\_EndY() method

Get the property state: end position Y

## Signature

```typescript
function getState_EndY(): number;
```

## Returns

number

End position Y

## Example

```javascript
// 1. 创建一条测试直线，终点 (1600, 1000)
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取终点 Y
const endY = line.getState_EndY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('endY:', endY);
```

### getstate_layer

# IPCB\_PrimitiveLine.getState\_Layer() method

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
// 1. 创建一条顶层（1）测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取所在层
const layer = line.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_linewidth

# IPCB\_PrimitiveLine.getState\_LineWidth() method

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
// 1. 创建一条 10mil 线宽的测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取线宽
const lineWidth = line.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_net

# IPCB\_PrimitiveLine.getState\_Net() method

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
// 1. 创建一条指定网络的测试直线
const line = await eda.pcb_PrimitiveLine.create('嘉立创示例_NET', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取网络名称
const net = line.getState_Net();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('net:', net);
```

### getstate_primitiveid

# IPCB\_PrimitiveLine.getState\_PrimitiveId() method

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
// 1. 创建一条测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取图元 ID
const primitiveId = line.getState_PrimitiveId();

// 3. 用该 ID 从画布重新取回直线，验证 ID 有效
const refetched = await eda.pcb_PrimitiveLine.get(primitiveId);

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetched type:', refetched.getState_PrimitiveType());
```

### getstate_primitivelock

# IPCB\_PrimitiveLine.getState\_PrimitiveLock() method

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
// 1. 创建一条测试直线（默认不锁定）
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取锁定状态
const locked = line.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('locked:', locked);
```

### getstate_primitivetype

# IPCB\_PrimitiveLine.getState\_PrimitiveType() method

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
// 1. 创建一条测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取图元类型
const type = line.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('type:', type);
```

### getstate_startx

# IPCB\_PrimitiveLine.getState\_StartX() method

Get the property state: start position X

## Signature

```typescript
function getState_StartX(): number;
```

## Returns

number

Start position X

## Example

```javascript
// 1. 创建一条测试直线，起点 (1000, 1000)
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取起点 X
const startX = line.getState_StartX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('startX:', startX);
```

### getstate_starty

# IPCB\_PrimitiveLine.getState\_StartY() method

Get the property state: start position Y

## Signature

```typescript
function getState_StartY(): number;
```

## Returns

number

Start position Y

## Example

```javascript
// 1. 创建一条测试直线，起点 (1000, 1000)
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);

// 2. 读取起点 Y
const startY = line.getState_StartY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('startY:', startY);
```

### isasync

# IPCB\_PrimitiveLine.isAsync() method

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
// 1. 创建一条测试直线，读出创建后的默认模式
const line = await eda.pcb_PrimitiveLine.create('', 1, 1000, 1000, 1600, 1000, 10);
const asyncOnCreate = line.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
line.toSync();
const asyncAfterToSync = line.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# IPCB\_PrimitiveLine.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveLine>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 46000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条 10mil 线宽的测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 切换异步模式，累计一处未提交的线宽修改（10 → 99）
const asyncLine = line.toAsync();
asyncLine.setState_LineWidth(99);

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncLine.reset();

// 5. 从画布重新读取，线宽仍是 10（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());

console.log('lineWidth after reset:', refetched.getState_LineWidth());
```

### setstate_endx

# IPCB\_PrimitiveLine.setState\_EndX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: end position X

## Signature

```typescript
function setState_EndX(endX: number): IPCB_PrimitiveLine;
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

endX

</td><td>

number

</td><td>

End position X

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 14000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线，终点 (x + 600, y)
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的终点 X
const before = line.getState_EndX();

// 4. 切换异步模式并拉长终点（右移 300mil）
const asyncLine = line.toAsync();
asyncLine.setState_EndX(x + 900);
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_EndX();

console.log('endX:', before, '→', after);
```

### setstate_endy

# IPCB\_PrimitiveLine.setState\_EndY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: end position Y

## Signature

```typescript
function setState_EndY(endY: number): IPCB_PrimitiveLine;
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

endY

</td><td>

number

</td><td>

End position Y

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 18000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线，终点 (x + 600, y)
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的终点 Y
const before = line.getState_EndY();

// 4. 切换异步模式并抬高终点（上移 300mil）
const asyncLine = line.toAsync();
asyncLine.setState_EndY(y + 300);
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_EndY();

console.log('endY:', before, '→', after);
```

### setstate_layer

# IPCB\_PrimitiveLine.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveLine;
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

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 22000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条顶层（1）测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的层
const before = line.getState_Layer();

// 4. 切换异步模式并换层（顶层 1 → 底层 2）
const asyncLine = line.toAsync();
asyncLine.setState_Layer(2);
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_Layer();

console.log('layer:', before, '→', after);
```

### setstate_linewidth

# IPCB\_PrimitiveLine.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number): IPCB_PrimitiveLine;
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

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 26000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条 10mil 线宽的测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的线宽
const before = line.getState_LineWidth();

// 4. 切换异步模式并加宽（10 → 24）
const asyncLine = line.toAsync();
asyncLine.setState_LineWidth(24);
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_LineWidth();

console.log('lineWidth:', before, '→', after);
```

### setstate_net

# IPCB\_PrimitiveLine.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
function setState_Net(net: string): IPCB_PrimitiveLine;
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

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 30000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条无网络的测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的网络名称
const before = line.getState_Net();

// 4. 切换异步模式并指定网络（'' → '嘉立创示例_NET'）
const asyncLine = line.toAsync();
asyncLine.setState_Net('嘉立创示例_NET');
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_Net();

console.log('net:', before, '→', after);
```

### setstate_primitivelock

# IPCB\_PrimitiveLine.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveLine;
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

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 34000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线（默认不锁定）
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的锁定状态
const before = line.getState_PrimitiveLock();

// 4. 切换异步模式并锁定（false → true）
const asyncLine = line.toAsync();
asyncLine.setState_PrimitiveLock(true);
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_PrimitiveLock();

console.log('locked:', before, '→', after);
```

### setstate_startx

# IPCB\_PrimitiveLine.setState\_StartX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start position X

## Signature

```typescript
function setState_StartX(startX: number): IPCB_PrimitiveLine;
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

startX

</td><td>

number

</td><td>

Start position X

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 6000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线，起点 (x, y)
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的起点 X
const before = line.getState_StartX();

// 4. 切换异步模式并平移起点 X（右移 300mil）
const asyncLine = line.toAsync();
asyncLine.setState_StartX(x + 300);
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_StartX();

console.log('startX:', before, '→', after);
```

### setstate_starty

# IPCB\_PrimitiveLine.setState\_StartY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start position Y

## Signature

```typescript
function setState_StartY(startY: number): IPCB_PrimitiveLine;
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

startY

</td><td>

number

</td><td>

Start position Y

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 10000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线，起点 (x, y)
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 读取修改前的起点 Y
const before = line.getState_StartY();

// 4. 切换异步模式并平移起点 Y（上移 300mil）
const asyncLine = line.toAsync();
asyncLine.setState_StartY(y + 300);
await asyncLine.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());
const after = refetched.getState_StartY();

console.log('startY:', before, '→', after);
```

### toasync

# IPCB\_PrimitiveLine.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveLine;
```

## Returns

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 52000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线，切换到同步模式，让模式变化可观察
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);
line.toSync();

// 3. 转换为异步图元
const asyncLine = line.toAsync();

// 4. 异步模式下累计修改并提交
asyncLine.setState_LineWidth(24);
await asyncLine.done();

// 5. 从画布重新读取，确认提交生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());

console.log('isAsync after toAsync:', line.isAsync());
console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
```

### tosync

# IPCB\_PrimitiveLine.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveLine;
```

## Returns

[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

Line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试走线重合
const x = 56000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一条测试直线
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10);

// 3. 转换为同步图元
const syncLine = line.toSync();

// 4. 同步模式下修改线宽，立即生效（无需 done()）
syncLine.setState_LineWidth(40);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveLine.get(line.getState_PrimitiveId());

console.log('isSync after toSync:', !syncLine.isAsync());
console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
```
