# PCB\_PrimitivePolyline class

PCB &amp; footprint / polyline primitive class

## Signature

```typescript
export class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI 
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

[create(net, layer, polygon, lineWidth, primitiveLock)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

Create a polyline


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** Delete the polyline


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** Get the polyline


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** Get the polyline


</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** Get all polylines


</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** Get the primitive IDs of all polylines


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** Modify the polyline


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitivePolyline.create() method

Create a polyline

## Signature

```typescript
public create(net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePolyline | undefined>;
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

polygon


</td><td>

[IPCB\_Polygon](./IPCB_Polygon.md)


</td><td>

Single polygon object


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

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

Polyline primitive object

## Example


```javascript
// 1. 生成随机起点坐标，避免与画布上已有的折线重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 用 pcb_MathPolygon.createPolygon 构造折线路径：起点 → 右移 500 → 上移 300 的 L 形三顶点折线
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);

// 3. 在顶层铜层创建折线：空网络，线宽 10mil，不锁定
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);

// 4. 创建类保留现场，不删除图元
console.log('primitiveId:', polyline.getState_PrimitiveId());
console.log('primitiveType:', polyline.getState_PrimitiveType());
console.log('lineWidth:', polyline.getState_LineWidth());
console.log('layer:', polyline.getState_Layer());
console.log('polygon source:', polyline.getState_Polygon().getSource().join(', '));
```

### delete

# PCB\_PrimitivePolyline.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the polyline

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;


</td><td>

Primitive ID of the polyline or the polyline primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两条待删除的测试折线（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polygon2 = eda.pcb_MathPolygon.createPolygon([x, y + 500, 'L', x + 500, y + 500, x + 500, y + 800]);
const polyline1 = await eda.pcb_PrimitivePolyline.create('', 1, polygon1, 10, false);
const polyline2 = await eda.pcb_PrimitivePolyline.create('', 1, polygon2, 10, false);

// 2. 记录删除前的折线数量
const beforeCount = (await eda.pcb_PrimitivePolyline.getAll()).length;

// 3. 以 ID 数组形式批量删除两条折线
const deleted = await eda.pcb_PrimitivePolyline.delete([polyline1.getState_PrimitiveId(), polyline2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitivePolyline.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitivePolyline.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the polyline

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;
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

Primitive ID of the polyline, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

Polyline primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两条测试折线（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polygon2 = eda.pcb_MathPolygon.createPolygon([x, y + 500, 'L', x + 500, y + 500, x + 500, y + 800, x, y + 800]);
const polyline1 = await eda.pcb_PrimitivePolyline.create('', 1, polygon1, 10, false);
const polyline2 = await eda.pcb_PrimitivePolyline.create('', 1, polygon2, 16, false);

// 2. 传单个 ID 字符串，返回单个折线对象
const single = await eda.pcb_PrimitivePolyline.get(polyline1.getState_PrimitiveId());

// 3. 传 ID 数组，返回折线对象数组
const arr = await eda.pcb_PrimitivePolyline.get([polyline1.getState_PrimitiveId(), polyline2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePolyline.delete([polyline1.getState_PrimitiveId(), polyline2.getState_PrimitiveId()]);

console.log('single lineWidth:', single.getState_LineWidth());
console.log('array length:', arr.length);
console.log('polyline2 lineWidth:', arr[1].getState_LineWidth());
```

### get_1

# PCB\_PrimitivePolyline.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the polyline

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>;
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

Primitive ID of the polyline, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;&gt;

Polyline primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitivePolyline.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all polylines

## Signature

```typescript
public getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePolyline>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;&gt;

Polyline primitive object array

## Example


```javascript
// 1. 创建一条顶层测试折线作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const polylineId = polyline.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部折线
const all = await eda.pcb_PrimitivePolyline.getAll();

// 3. 按层过滤：只取顶层（1）的折线
const topLayer = await eda.pcb_PrimitivePolyline.getAll('', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePolyline.delete([polylineId]);

console.log('total polylines:', all.length);
console.log('top layer polylines:', topLayer.length);
console.log('marker polyline found in top layer:', topLayer.some(p => p.getState_PrimitiveId() === polylineId));
```

### getallprimitiveid

# PCB\_PrimitivePolyline.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all polylines

## Signature

```typescript
public getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;
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
// 1. 创建一条顶层测试折线作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const polylineId = polyline.getState_PrimitiveId();

// 2. 获取全部折线的图元 ID
const allIds = await eda.pcb_PrimitivePolyline.getAllPrimitiveId();

// 3. 按层过滤：只取顶层（1）折线的图元 ID
const topLayerIds = await eda.pcb_PrimitivePolyline.getAllPrimitiveId('', 1);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePolyline.delete([polylineId]);

console.log('total polyline ids:', allIds.length);
console.log('top layer polyline ids:', topLayerIds.length);
console.log('marker id in top layer list:', topLayerIds.includes(polylineId));
```

### modify

# PCB\_PrimitivePolyline.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the polyline

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitivePolyline, property: { net?: undefined | string; layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.TOP_SOLDER_MASK | EPCB_LayerId.TOP_PASTE_MASK | EPCB_LayerId.TOP_ASSEMBLY | EPCB_LayerId.BOTTOM | EPCB_LayerId.BOTTOM_SILKSCREEN | EPCB_LayerId.BOTTOM_SOLDER_MASK | EPCB_LayerId.BOTTOM_PASTE_MASK | EPCB_LayerId.BOTTOM_ASSEMBLY | EPCB_LayerId.BOARD_OUTLINE | EPCB_LayerId.DOCUMENT | EPCB_LayerId.MECHANICAL | EPCB_LayerId.INNER_1 | EPCB_LayerId.INNER_2 | EPCB_LayerId.INNER_3 | EPCB_LayerId.INNER_4 | EPCB_LayerId.INNER_5 | EPCB_LayerId.INNER_6 | EPCB_LayerId.INNER_7 | EPCB_LayerId.INNER_8 | EPCB_LayerId.INNER_9 | EPCB_LayerId.INNER_10 | EPCB_LayerId.INNER_11 | EPCB_LayerId.INNER_12 | EPCB_LayerId.INNER_13 | EPCB_LayerId.INNER_14 | EPCB_LayerId.INNER_15 | EPCB_LayerId.INNER_16 | EPCB_LayerId.INNER_17 | EPCB_LayerId.INNER_18 | EPCB_LayerId.INNER_19 | EPCB_LayerId.INNER_20 | EPCB_LayerId.INNER_21 | EPCB_LayerId.INNER_22 | EPCB_LayerId.INNER_23 | EPCB_LayerId.INNER_24 | EPCB_LayerId.INNER_25 | EPCB_LayerId.INNER_26 | EPCB_LayerId.INNER_27 | EPCB_LayerId.INNER_28 | EPCB_LayerId.INNER_29 | EPCB_LayerId.INNER_30 | EPCB_LayerId.CUSTOM_1 | EPCB_LayerId.CUSTOM_2 | EPCB_LayerId.CUSTOM_3 | EPCB_LayerId.CUSTOM_4 | EPCB_LayerId.CUSTOM_5 | EPCB_LayerId.CUSTOM_6 | EPCB_LayerId.CUSTOM_7 | EPCB_LayerId.CUSTOM_8 | EPCB_LayerId.CUSTOM_9 | EPCB_LayerId.CUSTOM_10 | EPCB_LayerId.CUSTOM_11 | EPCB_LayerId.CUSTOM_12 | EPCB_LayerId.CUSTOM_13 | EPCB_LayerId.CUSTOM_14 | EPCB_LayerId.CUSTOM_15 | EPCB_LayerId.CUSTOM_16 | EPCB_LayerId.CUSTOM_17 | EPCB_LayerId.CUSTOM_18 | EPCB_LayerId.CUSTOM_19 | EPCB_LayerId.CUSTOM_20 | EPCB_LayerId.CUSTOM_21 | EPCB_LayerId.CUSTOM_22 | EPCB_LayerId.CUSTOM_23 | EPCB_LayerId.CUSTOM_24 | EPCB_LayerId.CUSTOM_25 | EPCB_LayerId.CUSTOM_26 | EPCB_LayerId.CUSTOM_27 | EPCB_LayerId.CUSTOM_28 | EPCB_LayerId.CUSTOM_29 | EPCB_LayerId.CUSTOM_30 | EPCB_LayerId.DRILL_DRAWING; polygon?: undefined | IPCB_Polygon; lineWidth?: undefined | number; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitivePolyline | undefined>;
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

string \| [IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: undefined \| string; layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_PASTE\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_PASTE\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOARD\_OUTLINE](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MECHANICAL](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DRILL\_DRAWING](../enums/EPCB_LayerId.md)<!-- -->; polygon?: undefined \| [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; lineWidth?: undefined \| number; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

Polyline primitive object

## Example


```javascript
// 1. 创建待修改的测试折线（随机坐标避免与画布已有折线重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon([x, y, 'L', x + 500, y, x + 500, y + 300]);
const polyline = await eda.pcb_PrimitivePolyline.create('', 1, polygon, 10, false);
const polylineId = polyline.getState_PrimitiveId();

// 2. 读取修改前的线宽与层
const beforeWidth = polyline.getState_LineWidth();
const beforeLayer = polyline.getState_Layer();

// 3. 批量修改：线宽 10 → 24，层从顶层（1）换到底层（2）
await eda.pcb_PrimitivePolyline.modify(polylineId, { lineWidth: 24, layer: 2 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitivePolyline.get(polylineId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', polylineId);
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('layer:', beforeLayer, '→', refreshed.getState_Layer());
```
