# PCB\_PrimitivePour class

PCB &amp; footprint / copper border primitive class

## Signature

```typescript
class PCB_PrimitivePour implements IPCB_PrimitiveAPI
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

[create(net, layer, complexPolygon, pourFillMethod, preserveSilos, pourName, pourPriority, lineWidth, primitiveLock)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Create Copper border

</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Delete Copper border

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Get Copper border

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Get Copper border

</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Get all Copper border primitive

</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Get all Copper border primitive IDs

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** Modify Copper border

</td></tr>
<tr><td>

[rebuildAllCopperRegions()](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** 重建所有覆铜区域

</td></tr>
<tr><td>

[rebuildCopperRegions(primitiveIds)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** 重建覆铜区域

</td></tr>
<tr><td>

[rebuildCopperRegionsByLayer(layer)](./PCB_PrimitivePour.md)

</td><td>

</td><td>

**_(BETA)_** 按层重建覆铜区域

</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitivePour.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Copper border

## Signature

```typescript
function create(
	net: string,
	layer: TPCB_LayersOfCopper,
	complexPolygon: IPCB_Polygon,
	pourFillMethod?: EPCB_PrimitivePourFillMethod,
	preserveSilos?: boolean,
	pourName?: string,
	pourPriority?: number,
	lineWidth?: number,
	primitiveLock?: boolean,
): Promise<IPCB_PrimitivePour | undefined>;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)

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

pourFillMethod

</td><td>

[EPCB\_PrimitivePourFillMethod](../enums/EPCB_PrimitivePourFillMethod.md)

</td><td>

_(Optional)_ Copper fill method

</td></tr>
<tr><td>

preserveSilos

</td><td>

boolean

</td><td>

_(Optional)_ Whether to keep islands

</td></tr>
<tr><td>

pourName

</td><td>

string

</td><td>

_(Optional)_ Copper name

</td></tr>
<tr><td>

pourPriority

</td><td>

number

</td><td>

_(Optional)_ Copper priority

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

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| undefined&gt;

Copper border primitive object

## Example

```javascript
// 1. 生成随机起点坐标，避免与画布上已有的覆铜边框重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 用 pcb_MathPolygon.createPolygon 构造覆铜轮廓：500×300 的矩形区域
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);

// 3. 在顶层铜层创建覆铜边框：挂 GND 网络、实心填充、不保留孤岛、优先级 5、线宽 10mil、不锁定
// 注意：net 不能传空字符串（会报参数不正确），需传已有网络名
const pour = await eda.pcb_PrimitivePour.create('GND', 1, polygon, 'solid', false, '嘉立创示例_覆铜', 5, 10, false);

// 4. 创建类保留现场，不删除图元
console.log('primitiveId:', pour.getState_PrimitiveId());
console.log('primitiveType:', pour.getState_PrimitiveType());
console.log('pourName:', pour.getState_PourName());
console.log('pourFillMethod:', pour.getState_PourFillMethod());
console.log('pourPriority:', pour.getState_PourPriority());
console.log('layer:', pour.getState_Layer());
```

### delete

# PCB\_PrimitivePour.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Copper border

## Signature

```typescript
function delete(primitiveIds: string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

</td><td>

Copper border primitive ID or Copper border primitive object

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 创建两条待删除的测试覆铜边框（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polygon2 = eda.pcb_MathPolygon.createPolygon(['R', x, y + 500, 500, 300, 0, 0]);
const pour1 = await eda.pcb_PrimitivePour.create('GND', 1, polygon1, 'solid', false, '嘉立创示例_覆铜1', 5, 10, false);
const pour2 = await eda.pcb_PrimitivePour.create('GND', 1, polygon2, 'solid', false, '嘉立创示例_覆铜2', 5, 10, false);

// 2. 记录删除前的覆铜边框数量
const beforeCount = (await eda.pcb_PrimitivePour.getAll()).length;

// 3. 以 ID 数组形式批量删除两条覆铜边框
const deleted = await eda.pcb_PrimitivePour.delete([pour1.getState_PrimitiveId(), pour2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitivePour.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitivePour.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Copper border

## Signature

```typescript
function get(primitiveIds: string): Promise<IPCB_PrimitivePour | undefined>;
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

Copper border primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| undefined&gt;

Copper border primitive object, `undefined` indicates that the retrieval failed

## Example

```javascript
// 1. 创建两条测试覆铜边框（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polygon2 = eda.pcb_MathPolygon.createPolygon(['R', x, y + 500, 500, 300, 0, 0]);
const pour1 = await eda.pcb_PrimitivePour.create('GND', 1, polygon1, 'solid', false, '嘉立创示例_覆铜1', 5, 10, false);
const pour2 = await eda.pcb_PrimitivePour.create('GND', 1, polygon2, '90grid', false, '嘉立创示例_覆铜2', 6, 10, false);

// 2. 传单个 ID 字符串，返回单个覆铜边框对象
const single = await eda.pcb_PrimitivePour.get(pour1.getState_PrimitiveId());

// 3. 传 ID 数组，返回覆铜边框对象数组
const arr = await eda.pcb_PrimitivePour.get([pour1.getState_PrimitiveId(), pour2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pour1.getState_PrimitiveId(), pour2.getState_PrimitiveId()]);

console.log('single pourName:', single.getState_PourName());
console.log('array length:', arr.length);
console.log('pour2 fillMethod:', arr[1].getState_PourFillMethod());
```

### get_1

# PCB\_PrimitivePour.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Copper border

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePour>>;
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

Copper border primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;&gt;

Copper border primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitivePour.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Copper border primitive

## Signature

```typescript
function getAll(
	net?: string,
	layer?: TPCB_LayersOfCopper,
	primitiveLock?: boolean,
): Promise<Array<IPCB_PrimitivePour>>;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)

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

Promise&lt;Array&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;&gt;

Array of Copper border primitive objects

## Example

```javascript
// 1. 创建一条顶层测试覆铜边框作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('GND', 1, polygon, 'solid', false, '嘉立创示例_覆铜', 5, 10, false);
const pourId = pour.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部覆铜边框
const all = await eda.pcb_PrimitivePour.getAll();

// 3. 按网络和层过滤：只取 GND 网络顶层（1）的覆铜边框
const gndTop = await eda.pcb_PrimitivePour.getAll('GND', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pourId]);

console.log('total pours:', all.length);
console.log('GND top layer pours:', gndTop.length);
console.log('marker pour found in GND top layer:', gndTop.some(p => p.getState_PrimitiveId() === pourId));
```

### getallprimitiveid

# PCB\_PrimitivePour.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Copper border primitive IDs

## Signature

```typescript
function getAllPrimitiveId(
	net?: string,
	layer?: TPCB_LayersOfCopper,
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)

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

Array of Copper border primitive IDs

## Example

```javascript
// 1. 创建一条顶层测试覆铜边框作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('GND', 1, polygon, 'solid', false, '嘉立创示例_覆铜', 5, 10, false);
const pourId = pour.getState_PrimitiveId();

// 2. 获取全部覆铜边框的图元 ID
const allIds = await eda.pcb_PrimitivePour.getAllPrimitiveId();

// 3. 按网络和层过滤：只取 GND 网络顶层（1）覆铜边框的图元 ID
const gndTopIds = await eda.pcb_PrimitivePour.getAllPrimitiveId('GND', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePour.delete([pourId]);

console.log('total pour ids:', allIds.length);
console.log('GND top layer pour ids:', gndTopIds.length);
console.log('marker id in GND top layer list:', gndTopIds.includes(pourId));
```

### modify

# PCB\_PrimitivePour.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Copper border

## Signature

```typescript
function modify(
	primitiveId: string | IPCB_PrimitivePour,
	property: {
		net?: string;
		layer?: TPCB_LayersOfCopper;
		complexPolygon?: IPCB_Polygon;
		pourFillMethod?: EPCB_PrimitivePourFillMethod;
		preserveSilos?: boolean;
		pourName?: string;
		pourPriority?: number;
		lineWidth?: number;
		primitiveLock?: boolean;
	},
): Promise<IPCB_PrimitivePour | undefined>;
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

string \| [IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

</td><td>

Primitive ID

</td></tr>
<tr><td>

property

</td><td>

{ net?: string; layer?: [TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)<!-- -->; complexPolygon?: [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; pourFillMethod?: [EPCB\_PrimitivePourFillMethod](../enums/EPCB_PrimitivePourFillMethod.md)<!-- -->; preserveSilos?: boolean; pourName?: string; pourPriority?: number; lineWidth?: number; primitiveLock?: boolean }

</td><td>

Modify Parameter

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| undefined&gt;

Copper border primitive object, `undefined` indicates that the modification failed

## Example

```javascript
// 1. 创建待修改的测试覆铜边框（随机坐标避免与画布已有覆铜重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const pour = await eda.pcb_PrimitivePour.create('GND', 1, polygon, 'solid', false, '嘉立创示例_覆铜', 5, 10, false);
const pourId = pour.getState_PrimitiveId();

// 2. 读取修改前的层与优先级
const beforeLayer = pour.getState_Layer();
const beforePriority = pour.getState_PourPriority();

// 3. 批量修改：层从顶层（1）换到底层（2），优先级 5 → 6
await eda.pcb_PrimitivePour.modify(pourId, { layer: 2, pourPriority: 6 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitivePour.get(pourId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', pourId);
console.log('layer:', beforeLayer, '→', refreshed.getState_Layer());
console.log('pourPriority:', beforePriority, '→', refreshed.getState_PourPriority());
```

### rebuildallcopperregions

# PCB\_PrimitivePour.rebuildAllCopperRegions() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

重建所有覆铜区域

## Signature

```typescript
function rebuildAllCopperRegions(): Promise<Array<IPCB_PrimitivePoured>>;
```

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

覆铜填充图元数组（按覆铜边框分组），无重建结果的覆铜边框不会出现在返回值中；画布上没有覆铜区域时返回空数组

## Remarks

对当前 PCB 画布上的全部覆铜区域执行重建，无需传入任何参数

与 [rebuildCopperRegions](./PCB_PrimitivePour.md) 的区别在于覆盖范围：本接口除覆铜边框图元生成的覆铜外，还包含内电层的覆铜

当前文档未激活或没有编辑权限时，本接口会抛出错误而非静默返回空数组

覆铜区域较多时本接口耗时较长，建议单独调用或在 [beginCommandGroup](./PCB_Document.md) 内成组执行 ADD since EDA v4.1.103

## Example

```javascript
// 1. 创建一条测试覆铜边框（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
await eda.pcb_PrimitivePour.create('GND', 1, polygon, 'solid', false, '嘉立创示例_重建全部', 5, 10, false);

// 2. 重建画布上全部覆铜区域（含内电层覆铜）
const pouredList = await eda.pcb_PrimitivePour.rebuildAllCopperRegions();
console.log('重建数量:', pouredList.length);
```

### rebuildcopperregions

# PCB\_PrimitivePour.rebuildCopperRegions() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

重建覆铜区域

## Signature

```typescript
function rebuildCopperRegions(primitiveIds?: Array<string>): Promise<Array<IPCB_PrimitivePoured>>;
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

_(Optional)_ 覆铜边框图元 ID 数组，如若未传入则重建当前覆铜边框关联的全部覆铜区域

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

覆铜填充图元数组（按覆铜边框分组），无重建结果的覆铜边框不会出现在返回值中

## Remarks

只重建\*\*覆铜边框图元关联\*\*的覆铜区域，即由 [create](./PCB_PrimitivePour.md) 放置的覆铜边框所生成的填充

\*\*不包含内电层覆铜\*\*：内层信号层的覆铜不在本接口的重建范围内，需要重建内层覆铜请使用 [rebuildAllCopperRegions](./PCB_PrimitivePour.md) 或 [rebuildCopperRegionsByLayer](./PCB_PrimitivePour.md) ADD since EDA v5

## Example

```javascript
// 1. 创建两条待重建的测试覆铜边框（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polygon2 = eda.pcb_MathPolygon.createPolygon(['R', x, y + 500, 500, 300, 0, 0]);
const pour1 = await eda.pcb_PrimitivePour.create('GND', 1, polygon1, 'solid', false, '嘉立创示例_批量重建1', 5, 10, false);
const pour2 = await eda.pcb_PrimitivePour.create('GND', 1, polygon2, 'solid', false, '嘉立创示例_批量重建2', 5, 10, false);

// 2. 传入图元 ID 数组：只重建这两条覆铜的填充
const pouredList = await eda.pcb_PrimitivePour.rebuildCopperRegions([
	pour1.getState_PrimitiveId(),
	pour2.getState_PrimitiveId(),
]);

// 3. 不传参：重建画布上所有覆铜边框关联的覆铜区域（不含内电层覆铜）
const allPouredList = await eda.pcb_PrimitivePour.rebuildCopperRegions();

// 4. 读取重建结果（按覆铜边框分组，重建不出填充的覆铜不在返回值中）
console.log('pouredList length:', pouredList.length);
console.log('allPouredList length:', allPouredList.length);
if (pouredList.length > 0) {
	console.log('所属覆铜边框 ID:', pouredList[0].getState_PourPrimitiveId());
	console.log('所属铜箔层:', pouredList[0].getState_Layer());
	console.log('填充子区域数量:', pouredList[0].getState_PourFills().length);
}
```

### rebuildcopperregionsbylayer

# PCB\_PrimitivePour.rebuildCopperRegionsByLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

按层重建覆铜区域

## Signature

```typescript
function rebuildCopperRegionsByLayer(
	layer: TPCB_LayersOfCopper | Array<TPCB_LayersOfCopper>,
): Promise<Array<IPCB_PrimitivePoured>>;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md) \| Array&lt;[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)<!-- -->&gt;

</td><td>

铜箔层，取值与 [getAll](./PCB_PrimitivePour.md) 的 `layer` 参数一致；可传单个层或多个层

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

覆铜填充图元数组（按覆铜边框分组），无重建结果的覆铜边框不会出现在返回值中

## Remarks

只重建指定铜箔层上的覆铜区域，其余层的覆铜保持不变

可传入单层或多层：传数组时按其中全部层重建，同一层的覆铜只重建一次；传入空数组时不执行任何重建并返回空数组

目标层上没有覆铜区域时返回空数组，不产生任何改动；如需重建画布上全部层，请使用 [rebuildAllCopperRegions](./PCB_PrimitivePour.md)

传入的层中包含内层时，这些内层的内电层覆铜也会一并重建

当前文档未激活或没有编辑权限时，本接口会抛出错误而非静默返回空数组；传入的层上没有覆铜区域属于正常情况，此时返回空数组

覆铜区域较多时本接口耗时较长，建议单独调用或在 [beginCommandGroup](./PCB_Document.md) 内成组执行 ADD since EDA v4.1.103

## Example

```javascript
// 1. 创建两条位于顶层（层 ID 1）的测试覆铜边框（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polygon2 = eda.pcb_MathPolygon.createPolygon(['R', x, y + 500, 500, 300, 0, 0]);
await eda.pcb_PrimitivePour.create('GND', 1, polygon1, 'solid', false, '嘉立创示例_按层重建1', 5, 10, false);
await eda.pcb_PrimitivePour.create('GND', 1, polygon2, 'solid', false, '嘉立创示例_按层重建2', 5, 10, false);

// 2. 只重建顶层（层 ID 1）上的覆铜区域
const pouredList = await eda.pcb_PrimitivePour.rebuildCopperRegionsByLayer(1);
console.log('顶层重建数量:', pouredList.length);

// 3. 一次重建多个层（层数组中包含内层时，内层的内电层覆铜也会一并重建）
const multiLayerPouredList = await eda.pcb_PrimitivePour.rebuildCopperRegionsByLayer([1, 15]);
console.log('多层重建数量:', multiLayerPouredList.length);
```
