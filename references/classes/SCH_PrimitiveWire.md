# SCH\_PrimitiveWire class

Schematic &amp; symbol / wire primitive class

## Signature

```typescript
export class SCH_PrimitiveWire implements ISCH_PrimitiveAPI 
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

[create(line, net, color, lineWidth, lineType)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Create Wire


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Delete Wire


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get Wire


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get Wire


</td></tr>
<tr><td>

[getAll(net)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get all Wire


</td></tr>
<tr><td>

[getAllPrimitiveId(net)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get all Wire primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Modify Wire


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveWire.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Wire

## Signature

```typescript
public create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;
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

line


</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

Polyline coordinate group. Each segment is a continuous line described by `[x1, y1, x2, y2, x3, y3]`<!-- -->. If the polylines have no connection to each other, the creation will fail. Examples for the type `Array<Array<number>>`<!-- -->: 1. `[[], [0, 0, 0, 1]]` - segment 1 has no path, invalid; 2. `[[1], [0, 0, 0, 1]]` - segment 1 only has x, missing y, invalid; 3. `[[0, 0, -1, 0], [0, 0, 1, 1]]` - segment 1 is a horizontal line but segment 2 is a diagonal line, invalid; 4. `[[0, 0, -1, 0, -1, 1], [0, 1, 1, 1]]` - the two segments have no connection, invalid; 5. `[[1, 1], [1, 2, 2, 2]]` - segment 1 has only one point, ignored; segment 2 is a horizontal segment, and the final path keeps only segment 2, valid; 6. `[[1, 1], [1, 2]]` - segment 1 has only one point, ignored; segment 2 is also ignored, and the final path is empty, invalid


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_(Optional)_ Net name. If not specified, the following rules apply: 1. If no coordinate falls on any primitive, the empty net is used by default; 2. If one coordinate point is on a primitive of a net, the net of that primitive is followed; 3. If multiple coordinate points are on primitives of different nets, the creation fails. If specified, the following rules apply: 1. If one or more coordinate points are on primitives of other nets, and those other primitives do not explicitly (usually via net labels or net ports) specify a net, they follow the specified net; 2. If other primitives have specified a net, the creation fails


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ Wire color, `null` indicates the default


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

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

Wire primitive object

## Example


```javascript
// 1. 生成随机起点坐标，避免与画布上已有的导线重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条两段相连的 L 形导线：先向右再向上，段与段必须首尾相连且各自水平或垂直
const wire = await eda.sch_PrimitiveWire.create(
  [[x, y, x + 400, y], [x + 400, y, x + 400, y + 200]],
  'SIG_A',    // 网络名称（自由字符串，未指定时按落点自动推断）
  '#FF0000',  // 导线颜色
  6,          // 线宽（范围 1-10）
  1           // 线型：1 = DASHED（虚线）
);

// 3. 创建类保留现场，不删除图元；Line 读回是画布规格化坐标（端点顺序可能与传入相反），只打印不做断言
console.log('primitiveId:', wire.getState_PrimitiveId());
console.log('primitiveType:', wire.getState_PrimitiveType());
console.log('net:', wire.getState_Net());
console.log('color:', wire.getState_Color());
console.log('lineWidth:', wire.getState_LineWidth());
console.log('line:', JSON.stringify(wire.getState_Line()));
```

### delete

# SCH\_PrimitiveWire.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Wire

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;


</td><td>

Wire primitive ID or Wire primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两条待删除的测试导线（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const wire1 = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], 'SIG_A');
const wire2 = await eda.sch_PrimitiveWire.create([x, y + 200, x + 400, y + 200], 'SIG_B');

// 2. 记录删除前的导线数量
const beforeCount = (await eda.sch_PrimitiveWire.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两条导线
const deleted1 = await eda.sch_PrimitiveWire.delete(wire1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitiveWire.delete(wire2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveWire.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveWire.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Wire

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;
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

Wire primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

Wire primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两条测试导线，分别属于不同网络（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const wire1 = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], 'SIG_A');
const wire2 = await eda.sch_PrimitiveWire.create([x, y + 200, x + 400, y + 200], 'SIG_B');

// 2. 传单个 ID 字符串，返回单条导线对象
const single = await eda.sch_PrimitiveWire.get(wire1.getState_PrimitiveId());

// 3. 传 ID 数组，返回导线对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveWire.get([wire1.getState_PrimitiveId(), wire2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveWire.delete([wire1.getState_PrimitiveId(), wire2.getState_PrimitiveId()]);

console.log('single net:', single.getState_Net());
console.log('array length:', arr.length);
console.log('wire2 net:', arr[1].getState_Net());
```

### get_1

# SCH\_PrimitiveWire.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Wire

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

Wire primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

Wire primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveWire.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Wire

## Signature

```typescript
public getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ Net name


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

Array of Wire primitive objects

## Example


```javascript
// 1. 创建两条测试导线，分别属于不同网络（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const wire1 = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], 'SIG_A');
const wire2 = await eda.sch_PrimitiveWire.create([x, y + 200, x + 400, y + 200], 'SIG_B');
const wire1Id = wire1.getState_PrimitiveId();

// 2. 不传参数，获取当前原理图页上的全部导线
const all = await eda.sch_PrimitiveWire.getAll();

// 3. 传网络名称，只获取该网络的导线
const onlyA = await eda.sch_PrimitiveWire.getAll('SIG_A');

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveWire.delete([wire1.getState_PrimitiveId(), wire2.getState_PrimitiveId()]);

console.log('total wires:', all.length);
console.log('marker wire found:', all.some(w => w.getState_PrimitiveId() === wire1Id));
console.log('SIG_A wires:', onlyA.length);
console.log('SIG_A all same net:', onlyA.every(w => w.getState_Net() === 'SIG_A'));
```

### getallprimitiveid

# SCH\_PrimitiveWire.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Wire primitive IDs

## Signature

```typescript
public getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>;
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

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ Net name


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Wire primitive IDs

## Example


```javascript
// 1. 创建两条测试导线，分别属于不同网络（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const wire1 = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], 'SIG_A');
const wire2 = await eda.sch_PrimitiveWire.create([x, y + 200, x + 400, y + 200], 'SIG_B');
const wire1Id = wire1.getState_PrimitiveId();

// 2. 不传参数，获取全部导线的图元 ID
const allIds = await eda.sch_PrimitiveWire.getAllPrimitiveId();

// 3. 传网络名称，只获取该网络导线的图元 ID
const onlyAIds = await eda.sch_PrimitiveWire.getAllPrimitiveId('SIG_A');

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveWire.delete([wire1.getState_PrimitiveId(), wire2.getState_PrimitiveId()]);

console.log('total wire ids:', allIds.length);
console.log('marker id in list:', allIds.includes(wire1Id));
console.log('SIG_A id count:', onlyAIds.length);
console.log('SIG_A contains marker:', onlyAIds.includes(wire1Id));
```

### modify

# SCH\_PrimitiveWire.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Wire

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveWire, property: { line?: undefined | number[] | number[][]; net?: undefined | string; color?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveWire | undefined>;
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

string \| [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)


</td><td>

Wire primitive ID or Wire primitive object


</td></tr>
<tr><td>

property


</td><td>

{ line?: undefined \| number\[\] \| number\[\]\[\]; net?: undefined \| string; color?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

Wire primitive object

## Example


```javascript
// 1. 创建待修改的测试导线（随机坐标避免与画布已有导线重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], 'SIG_A', '#FF0000', 6, 1);
const wireId = wire.getState_PrimitiveId();

// 2. 读取修改前的网络、线宽与颜色
const beforeNet = wire.getState_Net();
const beforeWidth = wire.getState_LineWidth();
const beforeColor = wire.getState_Color();

// 3. 批量修改：网络 SIG_A → SIG_B、线宽 6 → 10、颜色改为绿色，路径改为向右再向上的 L 形
await eda.sch_PrimitiveWire.modify(wireId, {
  line: [[x, y, x + 400, y], [x + 400, y, x + 400, y + 200]],
  net: 'SIG_B',
  lineWidth: 10,
  color: '#00AA00',
});

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值（Line 是规格化坐标，只打印不断言）
const refreshed = await eda.sch_PrimitiveWire.get(wireId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', wireId);
console.log('net:', beforeNet, '→', refreshed.getState_Net());
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('color:', beforeColor, '→', refreshed.getState_Color());
console.log('line:', JSON.stringify(refreshed.getState_Line()));
```
