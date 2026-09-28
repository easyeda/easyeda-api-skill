# IPCB\_PrimitiveDimension class

Dimension primitive

## Signature

```typescript
class IPCB_PrimitiveDimension implements IPCB_Primitive
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

[done()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_CoordinateSet()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: coordinate set

</td></tr>
<tr><td>

[getState\_DimensionType()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: dimension type

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_Precision()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: precision

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_TextFollow()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: text follows

</td></tr>
<tr><td>

[getState\_Unit()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Get the property state: unit

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_CoordinateSet(coordinateSet)](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: coordinate set

</td></tr>
<tr><td>

[setState\_DimensionType(dimensionType)](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: dimension type

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Precision(precision)](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: precision

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_Unit(unit)](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: unit

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveDimension.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveDimension.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveDimension>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3,
	undefined,
	10
);

// 3. 切换异步模式，连续累计两处修改（线宽 + 换层）
const asyncDim = dim.toAsync();
asyncDim.setState_LineWidth(20);
asyncDim.setState_Layer(4);

// 4. 一次性提交到画布
await asyncDim.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
console.log('layer:', 3, '→', refetched.getState_Layer());
```

### getstate_coordinateset

# IPCB\_PrimitiveDimension.getState\_CoordinateSet() method

Get the property state: coordinate set

## Signature

```typescript
function getState_CoordinateSet(): TPCB_PrimitiveDimensionCoordinateSet;
```

## Returns

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)

Coordinate set

## Example

```javascript
// 1. 创建一个长度标注（8 元素坐标集：测量端点、箭头端点各两组）
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取坐标集
const coordinateSet = dim.getState_CoordinateSet();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('coordinateSet:', JSON.stringify(coordinateSet));
```

### getstate_dimensiontype

# IPCB\_PrimitiveDimension.getState\_DimensionType() method

Get the property state: dimension type

## Signature

```typescript
function getState_DimensionType(): EPCB_PrimitiveDimensionType;
```

## Returns

[EPCB\_PrimitiveDimensionType](../enums/EPCB_PrimitiveDimensionType.md)

Dimension type

## Example

```javascript
// 1. 创建一个长度标注（"Length Dimension"）
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取标注类型
const dimensionType = dim.getState_DimensionType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('dimensionType:', dimensionType);
```

### getstate_layer

# IPCB\_PrimitiveDimension.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfDimension;
```

## Returns

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)

Layer

## Example

```javascript
// 1. 创建一个顶层丝印层（3）的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取所在层
const layer = dim.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_linewidth

# IPCB\_PrimitiveDimension.getState\_LineWidth() method

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
// 1. 创建一个 10mil 线宽的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3,
	undefined,
	10
);

// 2. 读取线宽
const lineWidth = dim.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_precision

# IPCB\_PrimitiveDimension.getState\_Precision() method

Get the property state: precision

## Signature

```typescript
function getState_Precision(): number;
```

## Returns

number

Precision

## Example

```javascript
// 1. 创建一个精度为 2 位的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3,
	undefined,
	undefined,
	2
);

// 2. 读取精度
const precision = dim.getState_Precision();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('precision:', precision);
```

### getstate_primitiveid

# IPCB\_PrimitiveDimension.getState\_PrimitiveId() method

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
// 1. 创建一个长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取图元 ID
const primitiveId = dim.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitiveDimension.getState\_PrimitiveLock() method

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
// 1. 创建一个未锁定的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取锁定状态
const primitiveLock = dim.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('primitiveLock:', primitiveLock);
```

### getstate_primitivetype

# IPCB\_PrimitiveDimension.getState\_PrimitiveType() method

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
// 1. 创建一个长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取图元类型
const primitiveType = dim.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_textfollow

# IPCB\_PrimitiveDimension.getState\_TextFollow() method

Get the property state: text follows

## Signature

```typescript
function getState_TextFollow(): 0 | 1;
```

## Returns

0 \| 1

Text follows

## Example

```javascript
// 1. 创建一个长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取文字跟随状态（0 或 1）
const textFollow = dim.getState_TextFollow();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('textFollow:', textFollow);
```

### getstate_unit

# IPCB\_PrimitiveDimension.getState\_Unit() method

Get the property state: unit

## Signature

```typescript
function getState_Unit():
	ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;
```

## Returns

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)

Unit

## Example

```javascript
// 1. 创建一个默认单位（毫米）的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);

// 2. 读取显示单位（'mm' / 'cm' / 'inch' / 'mil'）
const unit = dim.getState_Unit();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('unit:', unit);
```

### isasync

# IPCB\_PrimitiveDimension.isAsync() method

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
// 1. 创建一个长度标注，创建后默认处于异步模式
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[1000, 1000, 1000, 800, 3000, 800, 3000, 1000],
	3
);
const asyncOnCreate = dim.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
dim.toSync();
const asyncAfterToSync = dim.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveDimension.delete([dim.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# IPCB\_PrimitiveDimension.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveDimension>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 10mil 线宽的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3,
	undefined,
	10
);

// 3. 切换异步模式，累计一处未提交的线宽修改（10 → 99）
const asyncDim = dim.toAsync();
asyncDim.setState_LineWidth(99);

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncDim.reset();

// 5. 从画布重新读取，线宽仍是 10（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('lineWidth after reset:', refetched.getState_LineWidth());
```

### setstate_coordinateset

# IPCB\_PrimitiveDimension.setState\_CoordinateSet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: coordinate set

## Signature

```typescript
function setState_CoordinateSet(
	coordinateSet: TPCB_PrimitiveDimensionCoordinateSet,
): IPCB_PrimitiveDimension;
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

coordinateSet

</td><td>

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)

</td><td>

Coordinate set

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个长度标注（测量 x 到 x+2000 的水平距离）
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3
);
const before = dim.getState_CoordinateSet();

// 3. 切换异步模式并替换坐标集：测量度改为 3000
const asyncDim = dim.toAsync();
asyncDim.setState_CoordinateSet([x, 2000, x, 1800, x + 3000, 1800, x + 3000, 2000]);
await asyncDim.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('coordinateSet:', JSON.stringify(before), '→', JSON.stringify(refetched.getState_CoordinateSet()));
```

### setstate_dimensiontype

# IPCB\_PrimitiveDimension.setState\_DimensionType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: dimension type

## Signature

```typescript
function setState_DimensionType(
	dimensionType: EPCB_PrimitiveDimensionType,
): IPCB_PrimitiveDimension;
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

dimensionType

</td><td>

[EPCB\_PrimitiveDimensionType](../enums/EPCB_PrimitiveDimensionType.md)

</td><td>

Dimension type

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个长度标注（8 元素坐标集）
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3
);
const before = dim.getState_DimensionType();

// 3. 切换异步模式：换成半径标注，坐标集同步换成 6 元素格式（圆上端点、标注线尾、文字位置）
const asyncDim = dim.toAsync();
asyncDim.setState_DimensionType('Radius Dimension');
asyncDim.setState_CoordinateSet([x + 1500, 3500, x + 3500, 3500, x + 2500, 4200]);
await asyncDim.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('dimensionType:', before, '→', refetched.getState_DimensionType());
```

### setstate_layer

# IPCB\_PrimitiveDimension.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfDimension): IPCB_PrimitiveDimension;
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

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)

</td><td>

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个顶层丝印层（3）的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3
);
const before = dim.getState_Layer();

// 3. 切换异步模式并换到底层丝印层（4）
const asyncDim = dim.toAsync();
asyncDim.setState_Layer(4);
await asyncDim.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_linewidth

# IPCB\_PrimitiveDimension.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number): IPCB_PrimitiveDimension;
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

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 10mil 线宽的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3,
	undefined,
	10
);
const before = dim.getState_LineWidth();

// 3. 切换异步模式，线宽加粗到 20mil
const asyncDim = dim.toAsync();
asyncDim.setState_LineWidth(20);
await asyncDim.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('lineWidth:', before, '→', refetched.getState_LineWidth());
```

### setstate_precision

# IPCB\_PrimitiveDimension.setState\_Precision() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: precision

## Signature

```typescript
function setState_Precision(precision: number): IPCB_PrimitiveDimension;
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

precision

</td><td>

number

</td><td>

Precision

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个精度为 2 位的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3,
	undefined,
	undefined,
	2
);
const before = dim.getState_Precision();

// 3. 切换异步模式，精度提高到 3 位
const asyncDim = dim.toAsync();
asyncDim.setState_Precision(3);
await asyncDim.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('precision:', before, '→', refetched.getState_Precision());
```

### setstate_primitivelock

# IPCB\_PrimitiveDimension.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveDimension;
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

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个未锁定的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3
);
const before = dim.getState_PrimitiveLock();

// 3. 切换异步模式并锁定标注
const asyncDim = dim.toAsync();
asyncDim.setState_PrimitiveLock(true);
await asyncDim.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', refetched.getState_PrimitiveLock());
```

### setstate_unit

# IPCB\_PrimitiveDimension.setState\_Unit() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: unit

## Signature

```typescript
function setState_Unit(
	unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL,
): IPCB_PrimitiveDimension;
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

unit

</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)

</td><td>

Unit

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个默认毫米单位的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3
);
const before = dim.getState_Unit();

// 3. 切换异步模式，单位换成密尔
const asyncDim = dim.toAsync();
asyncDim.setState_Unit('mil');
await asyncDim.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('unit:', before, '→', refetched.getState_Unit());
```

### toasync

# IPCB\_PrimitiveDimension.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveDimension;
```

## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个长度标注（创建后处于同步模式）
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3,
	undefined,
	10
);

// 3. 转换为异步图元
const asyncDim = dim.toAsync();

// 4. 异步模式下累计修改并提交
asyncDim.setState_LineWidth(20);
await asyncDim.done();

// 5. 从画布重新读取，确认提交生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('isAsync after toAsync:', dim.isAsync());
console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
```

### tosync

# IPCB\_PrimitiveDimension.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveDimension;
```

## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试标注重合
const x = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建一个 10mil 线宽的长度标注
const dim = await eda.pcb_PrimitiveDimension.create(
	'Length Dimension',
	[x, 2000, x, 1800, x + 2000, 1800, x + 2000, 2000],
	3,
	undefined,
	10
);

// 3. 转换为同步图元
const syncDim = dim.toSync();

// 4. 同步模式下修改线宽，立即生效（无需 done()）
syncDim.setState_LineWidth(20);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveDimension.get(dim.getState_PrimitiveId());

console.log('isSync after toSync:', !syncDim.isAsync());
console.log('lineWidth:', 10, '→', refetched.getState_LineWidth());
```
