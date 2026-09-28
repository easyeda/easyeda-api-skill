# PCB\_PrimitiveFill class

PCB &amp; footprint / fill primitive class

## Signature

```typescript
class PCB_PrimitiveFill implements IPCB_PrimitiveAPI
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

[create(layer, complexPolygon, net, fillMode, lineWidth, primitiveLock)](./PCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Create a fill

</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Delete the fill

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Get the fill

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Get the fill

</td></tr>
<tr><td>

[getAll(layer, net, primitiveLock)](./PCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Get all fills

</td></tr>
<tr><td>

[getAllPrimitiveId(layer, net, primitiveLock)](./PCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Get the primitive IDs of all fills

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveFill.md)

</td><td>

</td><td>

**_(BETA)_** Modify the fill

</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveFill.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a fill

## Signature

```typescript
function create(
	layer: TPCB_LayersOfFill,
	complexPolygon: IPCB_Polygon,
	net?: string,
	fillMode?: EPCB_PrimitiveFillMode,
	lineWidth?: number,
	primitiveLock?: boolean,
): Promise<IPCB_PrimitiveFill | undefined>;
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
<tr><td>

complexPolygon

</td><td>

[IPCB\_Polygon](./IPCB_Polygon.md)

</td><td>

Complex polygon object

</td></tr>
<tr><td>

net

</td><td>

string

</td><td>

_(Optional)_ Net name

</td></tr>
<tr><td>

fillMode

</td><td>

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md)

</td><td>

_(Optional)_ Fill mode

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_(Optional)_ Line width

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

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

Fill primitive object

## Example

```javascript
// 1. 生成随机基准坐标，避免与画布上已有的填充重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 构造矩形轮廓（宽 500mil、高 300mil），填充轮廓必须是 MathPolygon 对象
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);

// 3. 在顶层铜层（1）创建实心填充（SOLID=0），不挂网络，不锁定
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);

// 4. 创建类保留现场，不删除图元
console.log('primitiveId:', fill.getState_PrimitiveId());
console.log('layer:', fill.getState_Layer());
console.log('fillMode:', fill.getState_FillMode());
console.log('net:', fill.getState_Net());
console.log('primitiveType:', fill.getState_PrimitiveType());
```

### delete

# PCB\_PrimitiveFill.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the fill

## Signature

```typescript
function delete(primitiveIds: string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

</td><td>

Primitive ID of the fill or the fill primitive object

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 创建两个待删除的测试填充（随机坐标避免与画布已有填充重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polygon2 = eda.pcb_MathPolygon.createPolygon(['R', x, y + 1000, 500, 300, 0, 0]);
const fill1 = await eda.pcb_PrimitiveFill.create(1, polygon1, '', 0, 10, false);
const fill2 = await eda.pcb_PrimitiveFill.create(1, polygon2, '', 0, 10, false);

// 2. 记录删除前的填充数量
const beforeCount = (await eda.pcb_PrimitiveFill.getAll()).length;

// 3. 以 ID 数组形式批量删除两个填充
const deleted = await eda.pcb_PrimitiveFill.delete([
	fill1.getState_PrimitiveId(),
	fill2.getState_PrimitiveId()
]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveFill.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveFill.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the fill

## Signature

```typescript
function get(primitiveIds: string): Promise<IPCB_PrimitiveFill | undefined>;
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

Primitive ID of the fill, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

Fill primitive object, `undefined` indicates that the retrieval failed

## Example

```javascript
// 1. 创建两个测试填充（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const fill1 = await eda.pcb_PrimitiveFill.create(
	1,
	eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]),
	'',
	0,
	10,
	false
);
const fill2 = await eda.pcb_PrimitiveFill.create(
	2,
	eda.pcb_MathPolygon.createPolygon(['R', x, y + 1000, 500, 300, 0, 0]),
	'',
	0,
	10,
	false
);

// 2. 传单个 ID 字符串，返回单个填充对象
const single = await eda.pcb_PrimitiveFill.get(fill1.getState_PrimitiveId());

// 3. 传 ID 数组，返回填充对象数组
const arr = await eda.pcb_PrimitiveFill.get([
	fill1.getState_PrimitiveId(),
	fill2.getState_PrimitiveId()
]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveFill.delete([
	fill1.getState_PrimitiveId(),
	fill2.getState_PrimitiveId()
]);

console.log('single layer:', single.getState_Layer());
console.log('single fillMode:', single.getState_FillMode());
console.log('array length:', arr.length);
console.log('fill2 layer:', arr[1].getState_Layer());
```

### get_1

# PCB\_PrimitiveFill.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the fill

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveFill>>;
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

Primitive ID of the fill, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;&gt;

Fill primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveFill.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all fills

## Signature

```typescript
function getAll(
	layer?: TPCB_LayersOfFill,
	net?: string,
	primitiveLock?: boolean,
): Promise<Array<IPCB_PrimitiveFill>>;
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

_(Optional)_ Layer

</td></tr>
<tr><td>

net

</td><td>

string

</td><td>

_(Optional)_ Net name

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

Promise&lt;Array&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;&gt;

Fill primitive object array

## Example

```javascript
// 1. 创建一个顶层铜层（1）测试填充作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const fillId = fill.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部填充
const all = await eda.pcb_PrimitiveFill.getAll();

// 3. 按层过滤：只取顶层铜层（1）的填充
const topCopper = await eda.pcb_PrimitiveFill.getAll(1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveFill.delete([fillId]);

console.log('total fills:', all.length);
console.log('top copper fills:', topCopper.length);
console.log('marker fill found:', topCopper.some(f => f.getState_PrimitiveId() === fillId));
```

### getallprimitiveid

# PCB\_PrimitiveFill.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all fills

## Signature

```typescript
function getAllPrimitiveId(
	layer?: TPCB_LayersOfFill,
	net?: string,
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

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)

</td><td>

_(Optional)_ Layer

</td></tr>
<tr><td>

net

</td><td>

string

</td><td>

_(Optional)_ Net name

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

Array of fill primitive IDs

## Example

```javascript
// 1. 创建一个顶层铜层（1）测试填充作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const fillId = fill.getState_PrimitiveId();

// 2. 获取全部填充的图元 ID
const allIds = await eda.pcb_PrimitiveFill.getAllPrimitiveId();

// 3. 按层过滤：只取顶层铜层（1）填充的图元 ID
const topCopperIds = await eda.pcb_PrimitiveFill.getAllPrimitiveId(1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveFill.delete([fillId]);

console.log('total fill ids:', allIds.length);
console.log('top copper fill ids:', topCopperIds.length);
console.log('marker id in top copper list:', topCopperIds.includes(fillId));
```

### modify

# PCB\_PrimitiveFill.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the fill

## Signature

```typescript
function modify(
	primitiveId: string | IPCB_PrimitiveFill,
	property: {
		layer?: TPCB_LayersOfFill;
		complexPolygon?: IPCB_Polygon;
		net?: string;
		fillMode?: EPCB_PrimitiveFillMode;
		lineWidth?: number;
		primitiveLock?: boolean;
	},
): Promise<IPCB_PrimitiveFill | undefined>;
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

string \| [IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

</td><td>

Primitive ID

</td></tr>
<tr><td>

property

</td><td>

{ layer?: [TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)<!-- -->; complexPolygon?: [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; net?: string; fillMode?: [EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md)<!-- -->; lineWidth?: number; primitiveLock?: boolean }

</td><td>

Modify Parameter

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

Fill primitive object, `undefined` indicates that the modification failed

## Example

```javascript
// 1. 创建待修改的测试填充（随机坐标避免与画布已有填充重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const fill = await eda.pcb_PrimitiveFill.create(1, polygon, '', 0, 10, false);
const fillId = fill.getState_PrimitiveId();

// 2. 读取修改前的层与锁定状态
const beforeLayer = fill.getState_Layer();
const beforeLock = fill.getState_PrimitiveLock();

// 3. 批量修改：顶层铜层（1）→ 底层铜层（2），未锁定 → 锁定
await eda.pcb_PrimitiveFill.modify(fillId, { layer: 2, primitiveLock: true });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveFill.get(fillId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', fillId);
console.log('layer:', beforeLayer, '→', refreshed.getState_Layer());
console.log('primitiveLock:', beforeLock, '→', refreshed.getState_PrimitiveLock());
```
