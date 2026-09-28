# IPCB\_PrimitivePour class

Copper border primitive

## Signature

```typescript
class IPCB_PrimitivePour implements IPCB_Primitive
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

[convertToFill()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: fill primitive (default is the fill region)

</td></tr>
<tr><td>

[convertToPolyline()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: polyline primitive (default is the line)

</td></tr>
<tr><td>

[convertToRegion()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: region primitive (default is the forbidden region)

</td></tr>
<tr><td>

[done()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getCopperRegion()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Get the copper fill primitive of the copper region

</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: complex polygon

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_PourFillMethod()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: copper fill method

</td></tr>
<tr><td>

[getState\_PourName()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: copper border name

</td></tr>
<tr><td>

[getState\_PourPriority()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: copper priority

</td></tr>
<tr><td>

[getState\_PreserveSilos()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: whether to keep islands

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[rebuildCopperRegion()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Rebuild the copper fill of the copper region

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_ComplexPolygon(complexPolygon)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: complex polygon

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net name

</td></tr>
<tr><td>

[setState\_PourFillMethod(pourFillMethod)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: copper fill method

</td></tr>
<tr><td>

[setState\_PourName(pourName)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: copper border name

</td></tr>
<tr><td>

[setState\_PourPriority(pourPriority)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: copper priority

</td></tr>
<tr><td>

[setState\_PreserveSilos(preserveSilos)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether to keep islands

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitivePour.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### converttofill

# IPCB\_PrimitivePour.convertToFill() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: fill primitive (default is the fill region)

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

// 2. 创建一个实心覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_转填充', 5, 10, false);

// 3. 转换为填充图元（原覆铜边框被替换，填充保留现场供观察）
const fill = await pour.convertToFill();

console.log('primitiveType:', `${pour.getState_PrimitiveType()} → ${fill.getState_PrimitiveType()}`);
console.log('primitiveId:', fill.getState_PrimitiveId());
```

### converttopolyline

# IPCB\_PrimitivePour.convertToPolyline() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: polyline primitive (default is the line)

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

// 2. 创建一个实心覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_转折线', 5, 10, false);

// 3. 转换为折线图元（原覆铜边框被替换，折线保留现场供观察）
const polyline = await pour.convertToPolyline();

console.log('primitiveType:', `${pour.getState_PrimitiveType()} → ${polyline.getState_PrimitiveType()}`);
console.log('primitiveId:', polyline.getState_PrimitiveId());
```

### converttoregion

# IPCB\_PrimitivePour.convertToRegion() method

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

// 2. 创建一个实心覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_转区域', 5, 10, false);

// 3. 转换为区域图元（默认是禁止区域，原覆铜边框被替换，区域保留现场供观察）
const region = await pour.convertToRegion();

console.log('primitiveType:', `${pour.getState_PrimitiveType()} → ${region.getState_PrimitiveType()}`);
console.log('primitiveId:', region.getState_PrimitiveId());
```

### done

# IPCB\_PrimitivePour.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitivePour>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_提交', 5, 10, false);
const before = pour.getState_Layer();

// 3. 异步模式下把覆铜边框挪到底层铜层（此时画布还没变）
const asyncPour = pour.toAsync();
asyncPour.setState_Layer(2);
await asyncPour.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### getcopperregion

# IPCB\_PrimitivePour.getCopperRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the copper fill primitive of the copper region

## Signature

```typescript
function getCopperRegion(): Promise<IPCB_PrimitivePoured | undefined>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| undefined&gt;

The copper fill primitive. If no associated copper fill primitive exists, `undefined` is returned

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个覆铜边框（刚创建还没有生成填充）
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_查填充', 5, 10, false);

// 3. 查询关联的覆铜填充图元
const copperRegion = await pour.getCopperRegion();
const hasFill = copperRegion !== undefined;

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('hasCopperRegion:', hasFill);
```

### getstate_complexpolygon

# IPCB\_PrimitivePour.getState\_ComplexPolygon() method

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
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个矩形轮廓的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读轮廓', 5, 10, false);

// 3. 读取轮廓多边形并取源数组
const complexPolygon = pour.getState_ComplexPolygon();
const source = complexPolygon.getSource();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('source:', JSON.stringify(source));
```

### getstate_layer

# IPCB\_PrimitivePour.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfCopper;
```

## Returns

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)

Layer

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层（1）的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读层', 5, 10, false);

// 3. 读取层号
const layer = pour.getState_Layer();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_linewidth

# IPCB\_PrimitivePour.getState\_LineWidth() method

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
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 10mil 线宽的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读线宽', 5, 10, false);

// 3. 读取线宽
const lineWidth = pour.getState_LineWidth();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_net

# IPCB\_PrimitivePour.getState\_Net() method

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
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个挂 GND 网络的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('GND', 1, polygon, 'solid', false, '嘉立创示例_读网络', 5, 10, false);

// 3. 读取网络名称
const net = pour.getState_Net();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('net:', net);
```

### getstate_pourfillmethod

# IPCB\_PrimitivePour.getState\_PourFillMethod() method

Get the property state: copper fill method

## Signature

```typescript
function getState_PourFillMethod(): any;
```

## Returns

any

Copper fill method

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个实心填充的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读填充法', 5, 10, false);

// 3. 读取填充方法
const fillMethod = pour.getState_PourFillMethod();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('pourFillMethod:', fillMethod);
```

### getstate_pourname

# IPCB\_PrimitivePour.getState\_PourName() method

Get the property state: copper border name

## Signature

```typescript
function getState_PourName(): string;
```

## Returns

string

Copper border name

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个带名称的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_地平面', 5, 10, false);

// 3. 读取名称
const pourName = pour.getState_PourName();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('pourName:', pourName);
```

### getstate_pourpriority

# IPCB\_PrimitivePour.getState\_PourPriority() method

Get the property state: copper priority

## Signature

```typescript
function getState_PourPriority(): number;
```

## Returns

number

Copper priority

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个优先级为 5 的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读优先级', 5, 10, false);

// 3. 读取优先级
const priority = pour.getState_PourPriority();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('pourPriority:', priority);
```

### getstate_preservesilos

# IPCB\_PrimitivePour.getState\_PreserveSilos() method

Get the property state: whether to keep islands

## Signature

```typescript
function getState_PreserveSilos(): boolean;
```

## Returns

boolean

Whether to keep islands

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个保留孤岛的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', true, '嘉立创示例_读孤岛', 5, 10, false);

// 3. 读取是否保留孤岛
const preserveSilos = pour.getState_PreserveSilos();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('preserveSilos:', preserveSilos);
```

### getstate_primitiveid

# IPCB\_PrimitivePour.getState\_PrimitiveId() method

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
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读ID', 5, 10, false);

// 3. 读取图元 ID
const primitiveId = pour.getState_PrimitiveId();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitivePour.getState\_PrimitiveLock() method

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
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个锁定状态的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读锁定', 5, 10, true);

// 3. 读取锁定状态
const locked = pour.getState_PrimitiveLock();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('primitiveLock:', locked);
```

### getstate_primitivetype

# IPCB\_PrimitivePour.getState\_PrimitiveType() method

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
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_读类型', 5, 10, false);

// 3. 读取图元类型
const primitiveType = pour.getState_PrimitiveType();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### isasync

# IPCB\_PrimitivePour.isAsync() method

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
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_查异步', 5, 10, false);

// 3. 查询异步状态（create 返回的即异步图元，修改需 toAsync + done）
const asyncMode = pour.isAsync();

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour.getState_PrimitiveId()]);

console.log('isAsync:', asyncMode);
```

### rebuildcopperregion

# IPCB\_PrimitivePour.rebuildCopperRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Rebuild the copper fill of the copper region

## Signature

```typescript
function rebuildCopperRegion(): Promise<IPCB_PrimitivePoured | undefined>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| undefined&gt;

The copper fill primitive. If no copper fill primitive is rebuilt, `undefined` is returned

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个挂 GND 网络的覆铜边框（保留现场供观察）
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('GND', 1, polygon, 'solid', false, '嘉立创示例_重建覆铜', 5, 10, false);

// 3. 重建覆铜填充（成功时返回生成的覆铜填充图元）
let rebuilt = false;
let result;
try {
	result = await pour.rebuildCopperRegion();
	rebuilt = result !== undefined;
}
catch (e) {
	// 当前版本在纯 API 创建的覆铜上重建会报内部错误，捕获后继续
	console.log('说明：当前环境 rebuildCopperRegion 报错：', e.message);
}

console.log('rebuildRequested:', true);
console.log('hasCopperRegion:', rebuilt);
```

### reset

# IPCB\_PrimitivePour.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitivePour>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_重置', 5, 10, false);
const before = pour.getState_Layer();

// 3. 异步模式下把层改到底层（2），随后反悔
const asyncPour = pour.toAsync();
asyncPour.setState_Layer(2);

// 4. reset 丢弃未提交的修改（保留现场供观察）
await asyncPour.reset();

// 5. 从画布重新读取，确认层没有变
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_complexpolygon

# IPCB\_PrimitivePour.setState\_ComplexPolygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: complex polygon

## Signature

```typescript
function setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 500x300 的矩形覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改轮廓', 5, 10, false);
const before = pour.getState_ComplexPolygon().getSource();

// 3. 异步模式下换成更大的 800x500 轮廓并提交
const asyncPour = pour.toAsync();
asyncPour.setState_ComplexPolygon(eda.pcb_MathPolygon.createPolygon(['R', x, y, 800, 500, 0, 0]));
await asyncPour.done();

// 4. 从画布重新读取，确认轮廓已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());
const after = refetched.getState_ComplexPolygon().getSource();

console.log('before:', JSON.stringify(before));
console.log('after:', JSON.stringify(after));
```

### setstate_layer

# IPCB\_PrimitivePour.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfCopper): IPCB_PrimitivePour;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)

</td><td>

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层（1）的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改层', 5, 10, false);
const before = pour.getState_Layer();

// 3. 异步模式把覆铜挪到底层铜层（2）
const asyncPour = pour.toAsync();
asyncPour.setState_Layer(2);
await asyncPour.done();

// 4. 从画布重新读取，确认层已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_linewidth

# IPCB\_PrimitivePour.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 10mil 线宽的矩形覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改线宽', 5, 10, false);
const before = pour.getState_LineWidth();

// 3. 切换异步模式，线宽加粗到 20mil
const asyncPour = pour.toAsync();
asyncPour.setState_LineWidth(20);
await asyncPour.done();

// 4. 从图元对象读回新值（保留现场供观察）
// 注：当前版本画布侧渲染线宽保持默认值，修改在图元对象上生效
const after = pour.getState_LineWidth();

console.log('lineWidth:', before, '→', after);
```

### setstate_net

# IPCB\_PrimitivePour.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
function setState_Net(net: string): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个无网络的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改网络', 5, 10, false);
const before = pour.getState_Net();

// 3. 异步模式把覆铜挂到 GND 网络
const asyncPour = pour.toAsync();
asyncPour.setState_Net('GND');
await asyncPour.done();

// 4. 从画布重新读取，确认网络已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('net:', before, '→', refetched.getState_Net());
```

### setstate_pourfillmethod

# IPCB\_PrimitivePour.setState\_PourFillMethod() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: copper fill method

## Signature

```typescript
function setState_PourFillMethod(pourFillMethod: EPCB_PrimitivePourFillMethod): IPCB_PrimitivePour;
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

pourFillMethod

</td><td>

[EPCB\_PrimitivePourFillMethod](../enums/EPCB_PrimitivePourFillMethod.md)

</td><td>

Copper fill method

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个实心填充的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改填充法', 5, 10, false);
const before = pour.getState_PourFillMethod();

// 3. 异步模式把填充方法改成 90 度网格
const asyncPour = pour.toAsync();
asyncPour.setState_PourFillMethod('90grid');
await asyncPour.done();

// 4. 从画布重新读取，确认填充方法已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('pourFillMethod:', before, '→', refetched.getState_PourFillMethod());
```

### setstate_pourname

# IPCB\_PrimitivePour.setState\_PourName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: copper border name

## Signature

```typescript
function setState_PourName(pourName: string): IPCB_PrimitivePour;
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

pourName

</td><td>

string

</td><td>

Copper border name

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_原名', 5, 10, false);
const before = pour.getState_PourName();

// 3. 异步模式改名为电源区
const asyncPour = pour.toAsync();
asyncPour.setState_PourName('嘉立创示例_电源区');
await asyncPour.done();

// 4. 从画布重新读取，确认名称已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('pourName:', before, '→', refetched.getState_PourName());
```

### setstate_pourpriority

# IPCB\_PrimitivePour.setState\_PourPriority() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: copper priority

## Signature

```typescript
function setState_PourPriority(pourPriority: number): IPCB_PrimitivePour;
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

pourPriority

</td><td>

number

</td><td>

Copper priority

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个优先级为 5 的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改优先级', 5, 10, false);
const before = pour.getState_PourPriority();

// 3. 异步模式把优先级提到 3（更早铺铜）
const asyncPour = pour.toAsync();
asyncPour.setState_PourPriority(3);
await asyncPour.done();

// 4. 从画布重新读取，确认优先级已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('pourPriority:', before, '→', refetched.getState_PourPriority());
```

### setstate_preservesilos

# IPCB\_PrimitivePour.setState\_PreserveSilos() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether to keep islands

## Signature

```typescript
function setState_PreserveSilos(preserveSilos: boolean): IPCB_PrimitivePour;
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

preserveSilos

</td><td>

boolean

</td><td>

Whether to keep islands

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个不保留孤岛的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改孤岛', 5, 10, false);
const before = pour.getState_PreserveSilos();

// 3. 异步模式开启保留孤岛
const asyncPour = pour.toAsync();
asyncPour.setState_PreserveSilos(true);
await asyncPour.done();

// 4. 从画布重新读取，确认设置已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('preserveSilos:', before, '→', refetched.getState_PreserveSilos());
```

### setstate_primitivelock

# IPCB\_PrimitivePour.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个未锁定的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_改锁定', 5, 10, false);
const before = pour.getState_PrimitiveLock();

// 3. 异步模式锁定图元
const asyncPour = pour.toAsync();
asyncPour.setState_PrimitiveLock(true);
await asyncPour.done();

// 4. 从画布重新读取，确认已锁定（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', refetched.getState_PrimitiveLock());
```

### toasync

# IPCB\_PrimitivePour.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitivePour;
```

## Returns

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_转异步', 5, 10, false);

// 3. 转换为异步图元
const asyncPour = pour.toAsync();

// 4. 异步模式下连续改两个属性，一次提交
asyncPour.setState_Layer(2);
asyncPour.setState_PourName('嘉立创示例_批量改名');
await asyncPour.done();

// 5. 从画布重新读取，确认批量修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('isAsync:', asyncPour.isAsync());
console.log('layer:', pour.getState_Layer(), '→', refetched.getState_Layer());
console.log('pourName:', pour.getState_PourName(), '→', refetched.getState_PourName());
```

### tosync

# IPCB\_PrimitivePour.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitivePour;
```

## Returns

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

Copper border primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的覆铜边框
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('', 1, polygon, 'solid', false, '嘉立创示例_转同步', 5, 10, false);
const before = pour.getState_Layer();

// 3. 转换为同步图元（isAsync 变为 false）
const syncPour = pour.toSync();

// 4. 同步模式下直接改层，无需 done()
syncPour.setState_Layer(2);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitivePour.get(pour.getState_PrimitiveId());

console.log('isAsync:', syncPour.isAsync());
console.log('layer:', before, '→', refetched.getState_Layer());
```
