# IPCB\_PrimitiveArc class

Arc line primitive

## Signature

```typescript
class IPCB_PrimitiveArc implements IPCB_Primitive
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

[done()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getAdjacentPrimitives()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Get Adjacent primitive objects

</td></tr>
<tr><td>

[getEntireTrack(includeVias)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Get the entire wire

</td></tr>
<tr><td>

[getEntireTrack(includeVias)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Get the entire wire

</td></tr>
<tr><td>

[getState\_ArcAngle()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: arc angle

</td></tr>
<tr><td>

[getState\_EndX()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: end position X

</td></tr>
<tr><td>

[getState\_EndY()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: end position Y

</td></tr>
<tr><td>

[getState\_InteractiveMode()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: interaction mode

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_StartX()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: start position X

</td></tr>
<tr><td>

[getState\_StartY()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: start position Y

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_ArcAngle(arcAngle)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: arc angle

</td></tr>
<tr><td>

[setState\_EndX(endX)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: end position X

</td></tr>
<tr><td>

[setState\_EndY(endY)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: end position Y

</td></tr>
<tr><td>

[setState\_InteractiveMode(interactiveMode)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: interaction mode

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net name

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_StartX(startX)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: start position X

</td></tr>
<tr><td>

[setState\_StartY(startY)](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: start position Y

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveArc.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveArc.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveArc>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 42000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 切换异步模式，连续累计两处修改（线宽 + 换层）
const asyncArc = arc.toAsync();
asyncArc.setState_LineWidth(24);
asyncArc.setState_Layer(2);

// 4. 一次性提交到画布
await asyncArc.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
console.log('layer:', 1, '→', refetched.getState_Layer());
```

### getadjacentprimitives

# IPCB\_PrimitiveArc.getAdjacentPrimitives() method

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

It will get the line, via, and arc-line primitive objects directly connected to the arc line

## Example

```javascript
// 1. 创建一条直线走线，终点落在 (7500, 7000)
const line = await eda.pcb_PrimitiveLine.create('', 1, 7000, 7000, 7500, 7000, 10);

// 2. 创建一段圆弧，起点与直线终点重合，两段构成一整段导线
const arc = await eda.pcb_PrimitiveArc.create('', 1, 7500, 7000, 7800, 7300, 90, 10, 1, false);

// 3. 获取与圆弧直接相连的图元，并读出各自的类型
const adjacent = await arc.getAdjacentPrimitives();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line]);
await eda.pcb_PrimitiveArc.delete([arc]);

console.log('adjacent count:', adjacent.length);
adjacent.forEach((p, i) => {
	console.log(`adjacent[${i}] type:`, p.getState_PrimitiveType());
});
```

### getentiretrack

# IPCB\_PrimitiveArc.getEntireTrack() method

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
const trackOnly = await arc.getEntireTrack(false);

// 4. 连两端过孔一起取（本例两端没有过孔，数量不变）
const trackWithVias = await arc.getEntireTrack(true);

// 5. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveLine.delete([line]);
await eda.pcb_PrimitiveArc.delete([arc]);

console.log('track(false) count:', trackOnly.length);
trackOnly.forEach((p, i) => {
	console.log(`track(false)[${i}] type:`, p.getState_PrimitiveType());
});
console.log('track(true) count:', trackWithVias.length);
```

### getentiretrack_1

# IPCB\_PrimitiveArc.getEntireTrack() method

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

### getstate_arcangle

# IPCB\_PrimitiveArc.getState\_ArcAngle() method

Get the property state: arc angle

## Signature

```typescript
function getState_ArcAngle(): number;
```

## Returns

number

Arc angle

## Example

```javascript
// 1. 创建一段 90° 测试圆弧（PCB 坐标单位 mil）
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取圆弧角度
const arcAngle = arc.getState_ArcAngle();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('arcAngle:', arcAngle);
```

### getstate_endx

# IPCB\_PrimitiveArc.getState\_EndX() method

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
// 1. 创建一段测试圆弧，终点 (1500, 1300)（PCB 坐标单位 mil）
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取终止位置 X
const endX = arc.getState_EndX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('endX:', endX);
```

### getstate_endy

# IPCB\_PrimitiveArc.getState\_EndY() method

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
// 1. 创建一段测试圆弧，终点 (1500, 1300)（PCB 坐标单位 mil）
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取终止位置 Y
const endY = arc.getState_EndY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('endY:', endY);
```

### getstate_interactivemode

# IPCB\_PrimitiveArc.getState\_InteractiveMode() method

Get the property state: interaction mode

## Signature

```typescript
function getState_InteractiveMode(): EPCB_PrimitiveArcInteractiveMode;
```

## Returns

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)

Interaction mode

## Example

```javascript
// 1. 创建一段两点圆弧（交互模式 1）的测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取交互模式
const interactiveMode = arc.getState_InteractiveMode();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('interactiveMode:', interactiveMode);
```

### getstate_layer

# IPCB\_PrimitiveArc.getState\_Layer() method

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
// 1. 创建一段顶层（1）测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取所在层
const layer = arc.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_linewidth

# IPCB\_PrimitiveArc.getState\_LineWidth() method

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
// 1. 创建一段 10mil 线宽的测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取线宽
const lineWidth = arc.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_net

# IPCB\_PrimitiveArc.getState\_Net() method

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
// 1. 创建一段指定网络的测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('嘉立创示例_NET', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取网络名称
const net = arc.getState_Net();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('net:', net);
```

### getstate_primitiveid

# IPCB\_PrimitiveArc.getState\_PrimitiveId() method

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
// 1. 创建一段测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取图元 ID
const primitiveId = arc.getState_PrimitiveId();

// 3. 用该 ID 从画布重新取回圆弧，验证 ID 有效
const refetched = await eda.pcb_PrimitiveArc.get(primitiveId);

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetched type:', refetched.getState_PrimitiveType());
```

### getstate_primitivelock

# IPCB\_PrimitiveArc.getState\_PrimitiveLock() method

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
// 1. 创建一段测试圆弧（默认不锁定）
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取锁定状态
const locked = arc.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('locked:', locked);
```

### getstate_primitivetype

# IPCB\_PrimitiveArc.getState\_PrimitiveType() method

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
// 1. 创建一段测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取图元类型
const type = arc.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('type:', type);
```

### getstate_startx

# IPCB\_PrimitiveArc.getState\_StartX() method

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
// 1. 创建一段测试圆弧，起点 (1000, 1000)（PCB 坐标单位 mil）
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取起始位置 X
const startX = arc.getState_StartX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('startX:', startX);
```

### getstate_starty

# IPCB\_PrimitiveArc.getState\_StartY() method

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
// 1. 创建一段测试圆弧，起点 (1000, 1000)（PCB 坐标单位 mil）
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);

// 2. 读取起始位置 Y
const startY = arc.getState_StartY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('startY:', startY);
```

### isasync

# IPCB\_PrimitiveArc.isAsync() method

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
// 1. 创建一段测试圆弧，创建后默认处于异步模式
const arc = await eda.pcb_PrimitiveArc.create('', 1, 1000, 1000, 1500, 1300, 90, 10, 1, false);
const asyncOnCreate = arc.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
arc.toSync();
const asyncAfterToSync = arc.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# IPCB\_PrimitiveArc.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveArc>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 46000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段 10mil 线宽的测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 切换异步模式，累计一处未提交的线宽修改（10 → 99）
const asyncArc = arc.toAsync();
asyncArc.setState_LineWidth(99);

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncArc.reset();

// 5. 从画布重新读取，线宽仍是 10（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('lineWidth after reset:', refetched.getState_LineWidth());
```

### setstate_arcangle

# IPCB\_PrimitiveArc.setState\_ArcAngle() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: arc angle

## Signature

```typescript
function setState_ArcAngle(arcAngle: number): IPCB_PrimitiveArc;
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

arcAngle

</td><td>

number

</td><td>

Arc angle

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段 90° 测试圆弧（PCB 坐标单位 mil，跨度 500×300）
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的角度
const before = arc.getState_ArcAngle();

// 4. 切换异步模式并修改角度（90° → 45°）
const asyncArc = arc.toAsync();
asyncArc.setState_ArcAngle(45);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_ArcAngle();

console.log('arcAngle:', before, '→', after);
```

### setstate_endx

# IPCB\_PrimitiveArc.setState\_EndX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: end position X

## Signature

```typescript
function setState_EndX(endX: number): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 14000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧，终点 (x+500, y+300)
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的终点 X
const before = arc.getState_EndX();

// 4. 切换异步模式并平移终点 X（右移 300mil）
const asyncArc = arc.toAsync();
asyncArc.setState_EndX(x + 800);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_EndX();

console.log('endX:', before, '→', after);
```

### setstate_endy

# IPCB\_PrimitiveArc.setState\_EndY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: end position Y

## Signature

```typescript
function setState_EndY(endY: number): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 18000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧，终点 (x+500, y+300)
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的终点 Y
const before = arc.getState_EndY();

// 4. 切换异步模式并平移终点 Y（上移 300mil）
const asyncArc = arc.toAsync();
asyncArc.setState_EndY(y + 600);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_EndY();

console.log('endY:', before, '→', after);
```

### setstate_interactivemode

# IPCB\_PrimitiveArc.setState\_InteractiveMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: interaction mode

## Signature

```typescript
function setState_InteractiveMode(
	interactiveMode: EPCB_PrimitiveArcInteractiveMode,
): IPCB_PrimitiveArc;
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

interactiveMode

</td><td>

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)

</td><td>

Interaction mode

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 38000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段两点圆弧（交互模式 1）测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的交互模式
const before = arc.getState_InteractiveMode();

// 4. 切换异步模式并改为中心圆弧（1 → 2）
const asyncArc = arc.toAsync();
asyncArc.setState_InteractiveMode(2);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_InteractiveMode();

console.log('interactiveMode:', before, '→', after);
```

### setstate_layer

# IPCB\_PrimitiveArc.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 22000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段顶层（1）测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的层
const before = arc.getState_Layer();

// 4. 切换异步模式并换层（顶层 1 → 底层 2）
const asyncArc = arc.toAsync();
asyncArc.setState_Layer(2);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_Layer();

console.log('layer:', before, '→', after);
```

### setstate_linewidth

# IPCB\_PrimitiveArc.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 26000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段 10mil 线宽的测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的线宽
const before = arc.getState_LineWidth();

// 4. 切换异步模式并加宽（10 → 24）
const asyncArc = arc.toAsync();
asyncArc.setState_LineWidth(24);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_LineWidth();

console.log('lineWidth:', before, '→', after);
```

### setstate_net

# IPCB\_PrimitiveArc.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
function setState_Net(net: string): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 30000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段无网络的测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的网络名称
const before = arc.getState_Net();

// 4. 切换异步模式并指定网络（'' → '嘉立创示例_NET'）
const asyncArc = arc.toAsync();
asyncArc.setState_Net('嘉立创示例_NET');
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_Net();

console.log('net:', before, '→', after);
```

### setstate_primitivelock

# IPCB\_PrimitiveArc.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 34000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧（默认不锁定）
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的锁定状态
const before = arc.getState_PrimitiveLock();

// 4. 切换异步模式并锁定（false → true）
const asyncArc = arc.toAsync();
asyncArc.setState_PrimitiveLock(true);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_PrimitiveLock();

console.log('locked:', before, '→', after);
```

### setstate_startx

# IPCB\_PrimitiveArc.setState\_StartX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start position X

## Signature

```typescript
function setState_StartX(startX: number): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 6000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧，起点 (x, y)
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的起点 X
const before = arc.getState_StartX();

// 4. 切换异步模式并平移起点 X（右移 300mil）
const asyncArc = arc.toAsync();
asyncArc.setState_StartX(x + 300);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_StartX();

console.log('startX:', before, '→', after);
```

### setstate_starty

# IPCB\_PrimitiveArc.setState\_StartY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start position Y

## Signature

```typescript
function setState_StartY(startY: number): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 10000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧，起点 (x, y)
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 读取修改前的起点 Y
const before = arc.getState_StartY();

// 4. 切换异步模式并平移起点 Y（上移 300mil）
const asyncArc = arc.toAsync();
asyncArc.setState_StartY(y + 300);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());
const after = refetched.getState_StartY();

console.log('startY:', before, '→', after);
```

### toasync

# IPCB\_PrimitiveArc.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveArc;
```

## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 52000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧，切换到同步模式，让模式变化可观察
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);
arc.toSync();

// 3. 转换为异步图元
const asyncArc = arc.toAsync();

// 4. 异步模式下累计修改并提交
asyncArc.setState_LineWidth(24);
await asyncArc.done();

// 5. 从画布重新读取，确认提交生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('isAsync after toAsync:', arc.isAsync());
console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
```

### tosync

# IPCB\_PrimitiveArc.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveArc;
```

## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

Arc line primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 56000 + (Math.floor(Math.random() * 100000));
const y = 2000 + (Math.floor(Math.random() * 100000));

// 2. 创建一段测试圆弧
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 转换为同步图元
const syncArc = arc.toSync();

// 4. 同步模式下修改线宽，立即生效（无需 done()）
syncArc.setState_LineWidth(40);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('isSync after toSync:', !syncArc.isAsync());
console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
```
