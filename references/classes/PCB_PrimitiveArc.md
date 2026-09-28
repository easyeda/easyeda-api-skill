# PCB\_PrimitiveArc class

PCB &amp; footprint / arc line primitive class

## Signature

```typescript
class PCB_PrimitiveArc implements IPCB_PrimitiveAPI
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

[create(net, layer, startX, startY, endX, endY, arcAngle, lineWidth, interactiveMode, primitiveLock)](./PCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Create Arc line

</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Delete Arc line

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Get Arc line

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Get Arc line

</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Get all Arc line

</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Get all Arc line primitive IDs

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Modify Arc line

</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveArc.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Arc line

## Signature

```typescript
function create(
	net: string,
	layer: TPCB_LayersOfLine,
	startX: number,
	startY: number,
	endX: number,
	endY: number,
	arcAngle: number,
	lineWidth?: number,
	interactiveMode?: EPCB_PrimitiveArcInteractiveMode,
	primitiveLock?: boolean,
): Promise<IPCB_PrimitiveArc | undefined>;
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

arcAngle

</td><td>

number

</td><td>

Arc angle

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_(Optional)_ Line width

</td></tr>
<tr><td>

interactiveMode

</td><td>

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)

</td><td>

_(Optional)_ Interaction mode

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

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| undefined&gt;

Arc line primitive object

## Example

```javascript
// 1. 生成随机起点坐标，避免与画布上已有的圆弧重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 在顶层铜层创建一段 90° 圆弧：起点（x, y），终点（x+500, y+300），线宽 10mil，两点圆弧交互（1）
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', arc.getState_PrimitiveId());
console.log('primitiveType:', arc.getState_PrimitiveType());
console.log('startX:', arc.getState_StartX(), 'startY:', arc.getState_StartY());
console.log('endX:', arc.getState_EndX(), 'endY:', arc.getState_EndY());
console.log('arcAngle:', arc.getState_ArcAngle());
console.log('lineWidth:', arc.getState_LineWidth());
```

### delete

# PCB\_PrimitiveArc.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Arc line

## Signature

```typescript
function delete(primitiveIds: string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;

</td><td>

Arc line primitive ID or Arc line primitive object

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 创建两段待删除的测试圆弧（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const arc1 = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);
const arc2 = await eda.pcb_PrimitiveArc.create('', 1, x, y + 500, x + 500, y + 800, 60, 10, 1, false);

// 2. 记录删除前的圆弧数量
const beforeCount = (await eda.pcb_PrimitiveArc.getAll()).length;

// 3. 以 ID 数组形式批量删除两段圆弧
const deleted = await eda.pcb_PrimitiveArc.delete([arc1.getState_PrimitiveId(), arc2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveArc.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Arc line

## Signature

```typescript
function get(primitiveIds: string): Promise<IPCB_PrimitiveArc | undefined>;
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

Arc line primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| undefined&gt;

Arc line primitive object, `undefined` indicates that the retrieval failed

## Example

```javascript
// 1. 创建两段测试圆弧（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const arc1 = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);
const arc2 = await eda.pcb_PrimitiveArc.create('', 1, x, y + 500, x + 500, y + 800, 60, 10, 1, false);

// 2. 传单个 ID 字符串，返回单个圆弧对象
const single = await eda.pcb_PrimitiveArc.get(arc1.getState_PrimitiveId());

// 3. 传 ID 数组，返回圆弧对象数组
const arr = await eda.pcb_PrimitiveArc.get([arc1.getState_PrimitiveId(), arc2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveArc.delete([arc1.getState_PrimitiveId(), arc2.getState_PrimitiveId()]);

console.log('single arcAngle:', single.getState_ArcAngle());
console.log('array length:', arr.length);
console.log('arc2 lineWidth:', arr[1].getState_LineWidth());
```

### get_1

# PCB\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Arc line

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveArc>>;
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

Arc line primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

Arc line primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveArc.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Arc line

## Signature

```typescript
function getAll(
	net?: string,
	layer?: TPCB_LayersOfLine,
	primitiveLock?: boolean,
): Promise<Array<IPCB_PrimitiveArc>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

Array of Arc line primitive objects

## Example

```javascript
// 1. 创建一段顶层测试圆弧作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);
const arcId = arc.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部圆弧
const all = await eda.pcb_PrimitiveArc.getAll();

// 3. 按层过滤：只取顶层（1）的圆弧
const topLayer = await eda.pcb_PrimitiveArc.getAll('', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveArc.delete([arcId]);

console.log('total arcs:', all.length);
console.log('top layer arcs:', topLayer.length);
console.log('marker arc found in top layer:', topLayer.some(a => a.getState_PrimitiveId() === arcId));
```

### getallprimitiveid

# PCB\_PrimitiveArc.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Arc line primitive IDs

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

Array of Arc line primitive IDs

## Example

```javascript
// 1. 创建一段顶层测试圆弧作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);
const arcId = arc.getState_PrimitiveId();

// 2. 获取全部圆弧的图元 ID
const allIds = await eda.pcb_PrimitiveArc.getAllPrimitiveId();

// 3. 按层过滤：只取顶层（1）圆弧的图元 ID
const topLayerIds = await eda.pcb_PrimitiveArc.getAllPrimitiveId('', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveArc.delete([arcId]);

console.log('total arc ids:', allIds.length);
console.log('top layer arc ids:', topLayerIds.length);
console.log('marker id in top layer list:', topLayerIds.includes(arcId));
```

### modify

# PCB\_PrimitiveArc.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Arc line

## Signature

```typescript
function modify(
	primitiveId: string | IPCB_PrimitiveArc,
	property: {
		net?: string;
		layer?: TPCB_LayersOfLine;
		startX?: number;
		startY?: number;
		endX?: number;
		endY?: number;
		arcAngle?: number;
		lineWidth?: number;
		interactiveMode?: EPCB_PrimitiveArcInteractiveMode;
		primitiveLock?: boolean;
	},
): Promise<IPCB_PrimitiveArc | undefined>;
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

string \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

</td><td>

Primitive ID

</td></tr>
<tr><td>

property

</td><td>

{ net?: string; layer?: [TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)<!-- -->; startX?: number; startY?: number; endX?: number; endY?: number; arcAngle?: number; lineWidth?: number; interactiveMode?: [EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)<!-- -->; primitiveLock?: boolean }

</td><td>

Modify Parameter

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| undefined&gt;

Arc line primitive object

## Remarks

`property.arcAngle` 合法域为 `0 < |arcAngle| < 360`<!-- -->，不支持 0° 或 ±360° 整圆：两点式圆弧无法表达整圆，传入将抛错

## Example

```javascript
// 1. 创建待修改的测试圆弧（随机坐标避免与画布已有圆弧重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const arc = await eda.pcb_PrimitiveArc.create('', 1, x, y, x + 500, y + 300, 90, 10, 1, false);
const arcId = arc.getState_PrimitiveId();

// 2. 读取修改前的线宽与圆心角
const beforeWidth = arc.getState_LineWidth();
const beforeAngle = arc.getState_ArcAngle();

// 3. 批量修改：线宽 10 → 24，圆心角 90 → 120
await eda.pcb_PrimitiveArc.modify(arcId, { lineWidth: 24, arcAngle: 120 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveArc.get(arcId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', arcId);
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('arcAngle:', beforeAngle, '→', refreshed.getState_ArcAngle());
```
