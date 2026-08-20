# SCH\_PrimitiveBus class

Schematic &amp; symbol / bus primitive class

## Signature

```typescript
export class SCH_PrimitiveBus implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(busName, line, color, lineWidth, lineType)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Create a bus


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Delete the bus


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get the bus


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get the bus


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get all buses


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get the primitive IDs of all buses


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Modify the bus


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveBus.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a bus

## Signature

```typescript
public create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;
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

busName


</td><td>

string


</td><td>

Bus name


</td></tr>
<tr><td>

line


</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

Polyline coordinate group. Each segment is a continuous line described by `[x1, y1, x2, y2, x3, y3]`<!-- -->. If the polylines have no connection to each other, the creation will fail. Examples for the type `Array<Array<number>>`<!-- -->: 1. `[[], [0, 0, 0, 1]]` - segment 1 has no path, invalid; 2. `[[1], [0, 0, 0, 1]]` - segment 1 only has x, missing y, invalid; 3. `[[0, 0, -1, 0], [0, 0, 1, 1]]` - segment 1 is a horizontal line but segment 2 is a diagonal line, invalid; 4. `[[0, 0, -1, 0, -1, 1], [0, 1, 1, 1]]` - the two segments have no connection, invalid; 5. `[[1, 1], [1, 2, 2, 2]]` - segment 1 has only one point, ignored; segment 2 is a horizontal segment, and the final path keeps only segment 2, valid; 6. `[[1, 1], [1, 2]]` - segment 1 has only one point, ignored; segment 2 is also ignored, and the final path is empty, invalid


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ Bus color. `null` indicates the default


</td></tr>
<tr><td>

lineWidth


</td><td>

number \| null


</td><td>

_(Optional)_ Line width, range `1-10`<!-- -->. `null` indicates the default


</td></tr>
<tr><td>

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

_(Optional)_ Line type. `null` indicates the default


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

Bus primitive object

## Example


```javascript
// 1. 生成随机起点坐标，避免与画布上已有的总线重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条两段相连的 L 形总线：先向右再向上，段与段必须首尾相连且各自水平或垂直
const bus = await eda.sch_PrimitiveBus.create(
  'DATA[0..7]',
  [[x, y, x + 400, y], [x + 400, y, x + 400, y + 200]],
  '#FF0000',  // 总线颜色
  6,          // 线宽（范围 1-10）
  1           // 线型：1 = DASHED（虚线）
);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', bus.getState_PrimitiveId());
console.log('primitiveType:', bus.getState_PrimitiveType());
console.log('busName:', bus.getState_BusName());
console.log('color:', bus.getState_Color());
console.log('lineWidth:', bus.getState_LineWidth());
```

### delete

# SCH\_PrimitiveBus.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the bus

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;


</td><td>

Primitive ID of the bus or the bus primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两条待删除的测试总线（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const bus1 = await eda.sch_PrimitiveBus.create('DATA[0..7]', [x, y, x + 400, y]);
const bus2 = await eda.sch_PrimitiveBus.create('ADDR[0..15]', [x, y + 200, x + 400, y + 200]);

// 2. 记录删除前的总线数量
const beforeCount = (await eda.sch_PrimitiveBus.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两条总线
const deleted1 = await eda.sch_PrimitiveBus.delete(bus1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitiveBus.delete(bus2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveBus.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveBus.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the bus

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;
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

Primitive ID of the bus, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

Bus primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两条测试总线（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const bus1 = await eda.sch_PrimitiveBus.create('DATA[0..7]', [x, y, x + 400, y]);
const bus2 = await eda.sch_PrimitiveBus.create('ADDR[0..15]', [x, y + 200, x + 400, y + 200]);

// 2. 传单个 ID 字符串，返回单条总线对象
const single = await eda.sch_PrimitiveBus.get(bus1.getState_PrimitiveId());

// 3. 传 ID 数组，返回总线对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveBus.get([bus1.getState_PrimitiveId(), bus2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveBus.delete([bus1.getState_PrimitiveId(), bus2.getState_PrimitiveId()]);

console.log('single busName:', single.getState_BusName());
console.log('array length:', arr.length);
console.log('bus2 busName:', arr[1].getState_BusName());
```

### get_1

# SCH\_PrimitiveBus.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the bus

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;
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

Primitive ID of the bus, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

Bus primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveBus.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all buses

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveBus>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

Bus primitive object array

## Example


```javascript
// 1. 创建一条测试总线作为查找目标（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const bus = await eda.sch_PrimitiveBus.create('DATA[0..7]', [x, y, x + 400, y]);
const busId = bus.getState_PrimitiveId();

// 2. 获取当前原理图页上的全部总线
const all = await eda.sch_PrimitiveBus.getAll();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveBus.delete([busId]);

console.log('total buses:', all.length);
console.log('marker bus found:', all.some(b => b.getState_PrimitiveId() === busId));
```

### getallprimitiveid

# SCH\_PrimitiveBus.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all buses

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of bus primitive IDs

## Example


```javascript
// 1. 创建一条测试总线作为查找目标（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const bus = await eda.sch_PrimitiveBus.create('DATA[0..7]', [x, y, x + 400, y]);
const busId = bus.getState_PrimitiveId();

// 2. 获取全部总线的图元 ID
const allIds = await eda.sch_PrimitiveBus.getAllPrimitiveId();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveBus.delete([busId]);

console.log('total bus ids:', allIds.length);
console.log('marker id in list:', allIds.includes(busId));
```

### modify

# SCH\_PrimitiveBus.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the bus

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveBus, property: { busName?: undefined | string; line?: undefined | number[] | number[][]; color?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveBus | undefined>;
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

string \| [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)


</td><td>

Primitive ID of the bus or the bus primitive object


</td></tr>
<tr><td>

property


</td><td>

{ busName?: undefined \| string; line?: undefined \| number\[\] \| number\[\]\[\]; color?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

Bus primitive object

## Example


```javascript
// 1. 创建待修改的测试总线（随机坐标避免与画布已有总线重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const bus = await eda.sch_PrimitiveBus.create('DATA[0..7]', [x, y, x + 400, y], '#FF0000', 6, 1);
const busId = bus.getState_PrimitiveId();

// 2. 读取修改前的名称、线宽与颜色
const beforeName = bus.getState_BusName();
const beforeWidth = bus.getState_LineWidth();
const beforeColor = bus.getState_Color();

// 3. 批量修改：名称 DATA[0..7] → ADDR[0..15]、线宽 6 → 10、颜色改为绿色
await eda.sch_PrimitiveBus.modify(busId, { busName: 'ADDR[0..15]', lineWidth: 10, color: '#00AA00' });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitiveBus.get(busId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', busId);
console.log('busName:', beforeName, '→', refreshed.getState_BusName());
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('color:', beforeColor, '→', refreshed.getState_Color());
```
