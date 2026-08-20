# SCH\_PrimitivePolygon class

Schematic &amp; symbol / polygon (polyline) primitive class

## Signature

```typescript
export class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI 
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

[create(line, color, fillColor, lineWidth, lineType)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Create Polygon


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Delete Polygon


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get Polygon


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get Polygon


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get all Polygon


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get all Polygon primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Modify Polygon


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitivePolygon.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Polygon

## Signature

```typescript
public create(line: Array<number>, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitivePolygon | undefined>;
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

Array&lt;number&gt;


</td><td>

Coordinate group, a continuous set of lines described by `[x1, y1, x2, y2, x3, y3]`


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ Color, `null` indicates the default


</td></tr>
<tr><td>

fillColor


</td><td>

string \| null


</td><td>

_(Optional)_ Fill color. `none` indicates no fill, `null` indicates the default


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

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

Polygon primitive object

## Example


```javascript
// 1. 生成随机起点坐标，避免与画布上已有的多边形重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个 4 顶点矩形多边形：顶点依次为左下、右下、右上、左上，红色虚线边线、黄色填充、线宽 6
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', '#FFFF00', 6, 1);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', polygon.getState_PrimitiveId());
console.log('primitiveType:', polygon.getState_PrimitiveType());
console.log('line:', JSON.stringify(polygon.getState_Line()));
console.log('color:', polygon.getState_Color());
console.log('fillColor:', polygon.getState_FillColor());
console.log('lineWidth:', polygon.getState_LineWidth());
```

### delete

# SCH\_PrimitivePolygon.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Polygon

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;
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

string \| [ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;


</td><td>

Polygon primitive ID or Polygon primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试多边形（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const poly1 = await eda.sch_PrimitivePolygon.create([x, y, x + 400, y, x + 400, y + 300], '#FF0000');
const poly2 = await eda.sch_PrimitivePolygon.create([x, y + 400, x + 400, y + 400, x + 200, y + 700], '#0000FF');

// 2. 记录删除前的多边形数量
const beforeCount = (await eda.sch_PrimitivePolygon.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两个多边形
const deleted1 = await eda.sch_PrimitivePolygon.delete(poly1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitivePolygon.delete(poly2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitivePolygon.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitivePolygon.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Polygon

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitivePolygon | undefined>;
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

Polygon primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

Polygon primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 在画布空白处创建两个测试多边形（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const poly1 = await eda.sch_PrimitivePolygon.create([x, y, x + 400, y, x + 400, y + 300], '#FF0000');
const poly2 = await eda.sch_PrimitivePolygon.create([x, y + 400, x + 400, y + 400, x + 200, y + 700], '#0000FF');
const id1 = poly1.getState_PrimitiveId();
const id2 = poly2.getState_PrimitiveId();

// 2. 传单个 ID 字符串，返回单个多边形对象
const single = await eda.sch_PrimitivePolygon.get(id1);

// 3. 传 ID 数组，返回多边形对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitivePolygon.get([id1, id2]);

// 4. 清理测试多边形（查询类需要清理）
await eda.sch_PrimitivePolygon.delete([id1, id2]);

console.log('single primitiveType:', single.getState_PrimitiveType());
console.log('single line:', JSON.stringify(single.getState_Line()));
console.log('array length:', arr.length);
console.log('poly2 color:', arr[1].getState_Color());
```

### get_1

# SCH\_PrimitivePolygon.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Polygon

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePolygon>>;
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

Polygon primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;&gt;

Polygon primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitivePolygon.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Polygon

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitivePolygon>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;&gt;

Array of Polygon primitive objects

## Example


```javascript
// 1. 创建一个测试多边形作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const polygon = await eda.sch_PrimitivePolygon.create([x, y, x + 400, y, x + 400, y + 300, x, y + 300], '#FF0000');
const polygonId = polygon.getState_PrimitiveId();

// 2. 获取当前原理图页的全部多边形
const all = await eda.sch_PrimitivePolygon.getAll();

// 3. 清理测试多边形（查询类需要清理）
await eda.sch_PrimitivePolygon.delete([polygonId]);

console.log('total polygons:', all.length);
console.log('marker polygon found:', all.some(p => p.getState_PrimitiveId() === polygonId));
console.log('marker color:', all.find(p => p.getState_PrimitiveId() === polygonId).getState_Color());
```

### getallprimitiveid

# SCH\_PrimitivePolygon.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Polygon primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Polygon primitive IDs

## Example


```javascript
// 1. 创建一个测试多边形作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const polygon = await eda.sch_PrimitivePolygon.create([x, y, x + 400, y, x + 200, y + 300], '#FF0000');
const polygonId = polygon.getState_PrimitiveId();

// 2. 获取全部多边形的图元 ID
const allIds = await eda.sch_PrimitivePolygon.getAllPrimitiveId();

// 3. 清理测试多边形（查询类需要清理）
await eda.sch_PrimitivePolygon.delete([polygonId]);

console.log('total polygon ids:', allIds.length);
console.log('marker id in list:', allIds.includes(polygonId));
```

### modify

# SCH\_PrimitivePolygon.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Polygon

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitivePolygon, property: { line?: undefined | number[]; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitivePolygon | undefined>;
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

string \| [ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ line?: undefined \| number\[\]; color?: undefined \| null \| string; fillColor?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

Polygon primitive object

## Example


```javascript
// 1. 创建待修改的测试多边形：4 顶点矩形、红色边线、黄色填充（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const rect = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];
const polygon = await eda.sch_PrimitivePolygon.create(rect, '#FF0000', '#FFFF00', 6, 1);
const polygonId = polygon.getState_PrimitiveId();

// 2. 记录修改前的线宽、颜色与填充色
const beforeWidth = polygon.getState_LineWidth();
const beforeColor = polygon.getState_Color();
const beforeFill = polygon.getState_FillColor();

// 3. 批量修改：形状整体替换为 3 顶点三角形、线宽 6 → 10、边线改绿色、填充改无色
const triangle = [x, y, x + 400, y, x + 200, y + 350];
await eda.sch_PrimitivePolygon.modify(polygonId, { line: triangle, lineWidth: 10, color: '#00AA00', fillColor: 'none' });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitivePolygon.get(polygonId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', polygonId);
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('color:', beforeColor, '→', refreshed.getState_Color());
console.log('fillColor:', beforeFill, '→', refreshed.getState_FillColor());
console.log('line:', JSON.stringify(rect), '→', JSON.stringify(refreshed.getState_Line()));
```
