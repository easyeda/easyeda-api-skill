# IPCB\_PrimitiveRegion class

Region primitive

## Signature

```typescript
class IPCB_PrimitiveRegion implements IPCB_Primitive
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

[convertToFill()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: fill primitive

</td></tr>
<tr><td>

[convertToPolyline()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: polyline primitive

</td></tr>
<tr><td>

[convertToPour()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: Copper border primitive

</td></tr>
<tr><td>

[done()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: complex polygon

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_RegionName()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: region name

</td></tr>
<tr><td>

[getState\_RuleType()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Get the property state: region rule type

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_ComplexPolygon(complexPolygon)](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: complex polygon

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_RegionName(regionName)](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: region name

</td></tr>
<tr><td>

[setState\_RuleType(ruleType)](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: region rule type

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveRegion.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### converttofill

# IPCB\_PrimitiveRegion.convertToFill() method

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

// 2. 创建一个矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 3. 转换为填充图元（区域本身保留，填充为新图元，保留现场供观察）
const fill = await region.convertToFill();

console.log('primitiveType:', `Region → ${fill.getState_PrimitiveType()}`);
console.log('primitiveId:', fill.getState_PrimitiveId());
```

### converttopolyline

# IPCB\_PrimitiveRegion.convertToPolyline() method

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

// 2. 创建一个矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 3. 转换为折线图元（区域本身保留，折线为新图元，保留现场供观察）
const polyline = await region.convertToPolyline();

console.log('primitiveType:', `Region → ${polyline.getState_PrimitiveType()}`);
console.log('primitiveId:', polyline.getState_PrimitiveId());
```

### converttopour

# IPCB\_PrimitiveRegion.convertToPour() method

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

// 2. 创建一个矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 3. 转换为覆铜边框图元（区域本身保留，覆铜边框为新图元，保留现场供观察）
const pour = await region.convertToPour();

console.log('primitiveType:', `Region → ${pour.getState_PrimitiveType()}`);
console.log('primitiveId:', pour.getState_PrimitiveId());
```

### done

# IPCB\_PrimitiveRegion.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveRegion>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层（1）的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);
const before = region.getState_Layer();

// 3. 异步模式下把区域挪到底层铜层（此时画布还没变）
const asyncRegion = region.toAsync();
asyncRegion.setState_Layer(2);
await asyncRegion.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveRegion.get(region.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### getstate_complexpolygon

# IPCB\_PrimitiveRegion.getState\_ComplexPolygon() method

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
// 1. 创建一个已知轮廓的矩形区域（500 x 300 mil）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 2. 读取复杂多边形对象，再取它的轮廓源数组
const complexPolygon = region.getState_ComplexPolygon();
const source = complexPolygon.getSource();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('polygonSource:', JSON.stringify(source));
```

### getstate_layer

# IPCB\_PrimitiveRegion.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfRegion;
```

## Returns

[TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)

Layer

## Example

```javascript
// 1. 创建一个顶层铜层（1）的矩形区域
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 2. 读取所在层
const layer = region.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_linewidth

# IPCB\_PrimitiveRegion.getState\_LineWidth() method

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
// 1. 创建一个 10mil 线宽的矩形区域
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, undefined, undefined, 10, false);

// 2. 读取线宽
const lineWidth = region.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_primitiveid

# IPCB\_PrimitiveRegion.getState\_PrimitiveId() method

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
// 1. 创建一个矩形区域
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 2. 读取图元 ID
const primitiveId = region.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitiveRegion.getState\_PrimitiveLock() method

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
// 1. 创建一个未锁定的矩形区域
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 2. 读取锁定状态
const primitiveLock = region.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('primitiveLock:', primitiveLock);
```

### getstate_primitivetype

# IPCB\_PrimitiveRegion.getState\_PrimitiveType() method

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
// 1. 创建一个矩形区域
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 2. 读取图元类型
const primitiveType = region.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_regionname

# IPCB\_PrimitiveRegion.getState\_RegionName() method

Get the property state: region name

## Signature

```typescript
function getState_RegionName(): string | undefined;
```

## Returns

string \| undefined

Region name

## Example

```javascript
// 1. 创建一个带名称的约束区域（ruleType=9 即 FOLLOW_REGION_RULE）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, [9], '嘉立创示例_电源约束区');

// 2. 读取区域名称
const regionName = region.getState_RegionName();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('regionName:', regionName);
```

### getstate_ruletype

# IPCB\_PrimitiveRegion.getState\_RuleType() method

Get the property state: region rule type

## Signature

```typescript
function getState_RuleType(): Array<EPCB_PrimitiveRegionRuleType>;
```

## Returns

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;

Region rule type

## Example

```javascript
// 1. 创建一个"禁止元件"（NO_COMPONENTS=2）的规则区域
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, [2]);

// 2. 读取规则类型数组（枚举值：2=禁止元件, 5=禁止导线, 6=禁止填充, 7=禁止覆铜, 8=禁止内电层, 9=约束区域）
const ruleType = region.getState_RuleType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('ruleType:', JSON.stringify(ruleType));
```

### isasync

# IPCB\_PrimitiveRegion.isAsync() method

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
// 1. 创建一个矩形区域
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 2. 查询异步模式
const isAsync = region.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveRegion.delete([region.getState_PrimitiveId()]);

console.log('isAsync:', isAsync);
```

### reset

# IPCB\_PrimitiveRegion.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveRegion>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);
const before = region.getState_Layer();

// 3. 异步模式下把层改到底层（2），随后反悔
const asyncRegion = region.toAsync();
asyncRegion.setState_Layer(2);

// 4. reset 丢弃未提交的修改（保留现场供观察）
await asyncRegion.reset();

// 5. 从画布重新读取，确认层没有变
const refetched = await eda.pcb_PrimitiveRegion.get(region.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_complexpolygon

# IPCB\_PrimitiveRegion.setState\_ComplexPolygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: complex polygon

## Signature

```typescript
function setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveRegion;
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

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 500 x 300 的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);
const before = JSON.stringify(region.getState_ComplexPolygon().getSource());

// 3. 构造新轮廓（放大到 800 x 400），异步模式提交
const newPolygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 800, 400, 0, 0]);
const asyncRegion = region.toAsync();
asyncRegion.setState_ComplexPolygon(newPolygon);
await asyncRegion.done();

// 4. 从画布重新读取，确认轮廓已替换（保留现场供观察）
const refetched = await eda.pcb_PrimitiveRegion.get(region.getState_PrimitiveId());
const after = JSON.stringify(refetched.getState_ComplexPolygon().getSource());

console.log('polygonSource:', before, '→', after);
```

### setstate_layer

# IPCB\_PrimitiveRegion.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfRegion): IPCB_PrimitiveRegion;
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

[TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)

</td><td>

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层（1）的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);
const before = region.getState_Layer();

// 3. 异步模式把区域挪到底层铜层（2）
const asyncRegion = region.toAsync();
asyncRegion.setState_Layer(2);
await asyncRegion.done();

// 4. 从画布重新读取，确认层已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitiveRegion.get(region.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_linewidth

# IPCB\_PrimitiveRegion.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number): IPCB_PrimitiveRegion;
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

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 10mil 线宽的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, undefined, undefined, 10, false);
const before = region.getState_LineWidth();

// 3. 切换异步模式，线宽加粗到 20mil
const asyncRegion = region.toAsync();
asyncRegion.setState_LineWidth(20);
await asyncRegion.done();

// 4. 从图元对象读回新值（保留现场供观察）
// 注：同族 Fill/Pour 的线宽修改画布侧不落，此处从图元对象读回确认
const after = region.getState_LineWidth();

console.log('lineWidth:', before, '→', after);
```

### setstate_primitivelock

# IPCB\_PrimitiveRegion.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveRegion;
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

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个未锁定的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);
const before = region.getState_PrimitiveLock();

// 3. 切换异步模式并锁定区域
const asyncRegion = region.toAsync();
asyncRegion.setState_PrimitiveLock(true);
await asyncRegion.done();

// 4. 从画布重新读取，确认已锁定（保留现场供观察）
const refetched = await eda.pcb_PrimitiveRegion.get(region.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', refetched.getState_PrimitiveLock());
```

### setstate_regionname

# IPCB\_PrimitiveRegion.setState\_RegionName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: region name

## Signature

```typescript
function setState_RegionName(regionName?: string): IPCB_PrimitiveRegion;
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

regionName

</td><td>

string

</td><td>

_(Optional)_ Region name

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Remarks

Only valid when `ruleType` is [EPCB\_PrimitiveRegionRuleType.FOLLOW\_REGION\_RULE](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->, used to match region DRC rules

If `ruleType` is [EPCB\_PrimitiveRegionRuleType.FOLLOW\_REGION\_RULE](../enums/EPCB_PrimitiveRegionRuleType.md) but `regionName` is empty, the system will automatically assign a name

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个带名称的约束区域（ruleType=9 即 FOLLOW_REGION_RULE）
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, [9], '嘉立创示例_旧区域名');
const before = region.getState_RegionName();

// 3. 异步模式修改区域名称
const asyncRegion = region.toAsync();
asyncRegion.setState_RegionName('嘉立创示例_电源约束区');
await asyncRegion.done();

// 4. 从图元对象读回新值（保留现场供观察）
// 注：当前版本名称修改画布侧不落（重新 get() 仍是旧名），修改在图元对象上生效
const after = region.getState_RegionName();

console.log('regionName:', before, '→', after);
```

### setstate_ruletype

# IPCB\_PrimitiveRegion.setState\_RuleType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: region rule type

## Signature

```typescript
function setState_RuleType(ruleType: Array<EPCB_PrimitiveRegionRuleType>): IPCB_PrimitiveRegion;
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

ruleType

</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;

</td><td>

Region rule type

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个不带规则的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);
const before = JSON.stringify(region.getState_RuleType());

// 3. 异步模式挂上"禁止元件 + 禁止导线"两条规则（2=NO_COMPONENTS, 5=NO_WIRES）
const asyncRegion = region.toAsync();
asyncRegion.setState_RuleType([2, 5]);
await asyncRegion.done();

// 4. 从画布重新读取，确认规则已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveRegion.get(region.getState_PrimitiveId());

console.log('ruleType:', before, '→', JSON.stringify(refetched.getState_RuleType()));
```

### toasync

# IPCB\_PrimitiveRegion.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveRegion;
```

## Returns

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层铜层的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);

// 3. 切换异步模式后批量修改：挪到底层 + 挂"禁止元件"规则
const asyncRegion = region.toAsync();
asyncRegion.setState_Layer(2);
asyncRegion.setState_RuleType([2]);
await asyncRegion.done();

// 4. 从画布重新读取，确认批量修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveRegion.get(region.getState_PrimitiveId());

console.log('layer:', refetched.getState_Layer());
console.log('ruleType:', JSON.stringify(refetched.getState_RuleType()));
```

### tosync

# IPCB\_PrimitiveRegion.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveRegion;
```

## Returns

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

Region primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon);
const before = region.isAsync();

// 3. 转换为同步图元（保留现场供观察）
const syncRegion = region.toSync();
const after = syncRegion.isAsync();

// 4. 同步图元直接读取属性，无需提交
console.log('isAsync:', before, '→', after);
console.log('primitiveType:', syncRegion.getState_PrimitiveType());
console.log('layer:', syncRegion.getState_Layer());
```
