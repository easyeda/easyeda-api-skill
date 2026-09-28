# PCB\_PrimitiveLine class

PCB &amp; footprint / line primitive class

## Signature

```typescript
class PCB_PrimitiveLine implements IPCB_PrimitiveAPI
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

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

[create(net, layer, startX, startY, endX, endY, lineWidth, primitiveLock)](./PCB_PrimitiveLine.md)

</td><td>

</td><td>

Create a line

</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Delete the line

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Get the line

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Get the line

</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Get all lines

</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Get the primitive IDs of all lines

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveLine.md)

</td><td>

</td><td>

**_(BETA)_** Modify the line

</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveLine.create() method

Create a line

## Signature

```typescript
function create(
	net: string,
	layer: TPCB_LayersOfLine,
	startX: number,
	startY: number,
	endX: number,
	endY: number,
	lineWidth?: number,
	primitiveLock?: boolean,
): Promise<IPCB_PrimitiveLine | undefined>;
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
<tr><td>

layer

</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)

</td><td>

Layer

</td></tr>
<tr><td>

startX

</td><td>

number

</td><td>

Start position X

</td></tr>
<tr><td>

startY

</td><td>

number

</td><td>

Start position Y

</td></tr>
<tr><td>

endX

</td><td>

number

</td><td>

End position X

</td></tr>
<tr><td>

endY

</td><td>

number

</td><td>

End position Y

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

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| undefined&gt;

Line primitive object

## Example

```javascript
// 1. 生成随机起点坐标，避免与画布上已有的直线重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 在顶层铜层创建一条水平走线：起点（x, y）到终点（x+600, y），线宽 10mil，不锁定
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10, false);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', line.getState_PrimitiveId());
console.log('primitiveType:', line.getState_PrimitiveType());
console.log('startX:', line.getState_StartX(), 'startY:', line.getState_StartY());
console.log('endX:', line.getState_EndX(), 'endY:', line.getState_EndY());
console.log('lineWidth:', line.getState_LineWidth());
```

### delete

# PCB\_PrimitiveLine.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the line

## Signature

```typescript
function delete(primitiveIds: string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;

</td><td>

Primitive ID of the line or the line primitive object

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 创建两条待删除的测试直线（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const line1 = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10, false);
const line2 = await eda.pcb_PrimitiveLine.create('', 1, x, y + 500, x + 600, y + 500, 10, false);

// 2. 记录删除前的直线数量
const beforeCount = (await eda.pcb_PrimitiveLine.getAll()).length;

// 3. 以 ID 数组形式批量删除两条直线
const deleted = await eda.pcb_PrimitiveLine.delete([line1.getState_PrimitiveId(), line2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveLine.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveLine.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the line

## Signature

```typescript
function get(primitiveIds: string): Promise<IPCB_PrimitiveLine | undefined>;
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

Primitive ID of the line, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| undefined&gt;

Line primitive object, `undefined` indicates that the retrieval failed

## Example

```javascript
// 1. 创建两条测试直线（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const line1 = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10, false);
const line2 = await eda.pcb_PrimitiveLine.create('', 1, x, y + 500, x + 600, y + 500, 16, false);

// 2. 传单个 ID 字符串，返回单个直线对象
const single = await eda.pcb_PrimitiveLine.get(line1.getState_PrimitiveId());

// 3. 传 ID 数组，返回直线对象数组
const arr = await eda.pcb_PrimitiveLine.get([line1.getState_PrimitiveId(), line2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveLine.delete([line1.getState_PrimitiveId(), line2.getState_PrimitiveId()]);

console.log('single lineWidth:', single.getState_LineWidth());
console.log('array length:', arr.length);
console.log('line2 lineWidth:', arr[1].getState_LineWidth());
```

### get_1

# PCB\_PrimitiveLine.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the line

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveLine>>;
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

Primitive ID of the line, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;&gt;

Line primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveLine.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all lines

## Signature

```typescript
function getAll(
	net?: string,
	layer?: TPCB_LayersOfLine,
	primitiveLock?: boolean,
): Promise<Array<IPCB_PrimitiveLine>>;
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

_(Optional)_ Net name

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)

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

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;&gt;

Line primitive object array

## Example

```javascript
// 1. 创建一条顶层测试直线作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10, false);
const lineId = line.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部直线
const all = await eda.pcb_PrimitiveLine.getAll();

// 3. 按层过滤：只取顶层（1）的直线
const topLayer = await eda.pcb_PrimitiveLine.getAll('', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveLine.delete([lineId]);

console.log('total lines:', all.length);
console.log('top layer lines:', topLayer.length);
console.log('marker line found in top layer:', topLayer.some(l => l.getState_PrimitiveId() === lineId));
```

### getallprimitiveid

# PCB\_PrimitiveLine.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all lines

## Signature

```typescript
function getAllPrimitiveId(
	net?: string,
	layer?: TPCB_LayersOfLine,
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

net

</td><td>

string

</td><td>

_(Optional)_ Net name

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)

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

Array of polyline primitive IDs

## Example

```javascript
// 1. 创建一条顶层测试直线作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10, false);
const lineId = line.getState_PrimitiveId();

// 2. 获取全部直线的图元 ID
const allIds = await eda.pcb_PrimitiveLine.getAllPrimitiveId();

// 3. 按层过滤：只取顶层（1）直线的图元 ID
const topLayerIds = await eda.pcb_PrimitiveLine.getAllPrimitiveId('', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveLine.delete([lineId]);

console.log('total line ids:', allIds.length);
console.log('top layer line ids:', topLayerIds.length);
console.log('marker id in top layer list:', topLayerIds.includes(lineId));
```

### modify

# PCB\_PrimitiveLine.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the line

## Signature

```typescript
function modify(
	primitiveId: string | IPCB_PrimitiveLine,
	property: {
		net?: string;
		layer?: TPCB_LayersOfLine;
		startX?: number;
		startY?: number;
		endX?: number;
		endY?: number;
		lineWidth?: number;
		primitiveLock?: boolean;
	},
): Promise<IPCB_PrimitiveLine | undefined>;
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

string \| [IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)

</td><td>

Primitive ID

</td></tr>
<tr><td>

property

</td><td>

{ net?: string; layer?: [TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)<!-- -->; startX?: number; startY?: number; endX?: number; endY?: number; lineWidth?: number; primitiveLock?: boolean }

</td><td>

Modify Parameter

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| undefined&gt;

Line primitive object

## Example

```javascript
// 1. 创建待修改的测试直线（随机坐标避免与画布已有直线重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const line = await eda.pcb_PrimitiveLine.create('', 1, x, y, x + 600, y, 10, false);
const lineId = line.getState_PrimitiveId();

// 2. 读取修改前的线宽与终点 X
const beforeWidth = line.getState_LineWidth();
const beforeEndX = line.getState_EndX();

// 3. 批量修改：线宽 10 → 24，终点右移 400mil
await eda.pcb_PrimitiveLine.modify(lineId, { lineWidth: 24, endX: x + 1000 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveLine.get(lineId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', lineId);
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('endX:', beforeEndX, '→', refreshed.getState_EndX());
```
