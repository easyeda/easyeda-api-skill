# SCH\_PrimitiveArc class

Schematic &amp; symbol / arc primitive class

## Signature

```typescript
export class SCH_PrimitiveArc implements ISCH_PrimitiveAPI 
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

[create(startX, startY, referenceX, referenceY, endX, endY, color, fillColor, lineWidth, lineType)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Create Arc


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Delete Arc


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get Arc


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get Arc


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get all Arc


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get all Arc primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Modify Arc


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveArc.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Arc

## Signature

```typescript
public create(startX: number, startY: number, referenceX: number, referenceY: number, endX: number, endY: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveArc | undefined>;
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

startX


</td><td>

number


</td><td>

Start point X


</td></tr>
<tr><td>

startY


</td><td>

number


</td><td>

Start point Y


</td></tr>
<tr><td>

referenceX


</td><td>

number


</td><td>

Reference point X


</td></tr>
<tr><td>

referenceY


</td><td>

number


</td><td>

Reference point Y


</td></tr>
<tr><td>

endX


</td><td>

number


</td><td>

End point X


</td></tr>
<tr><td>

endY


</td><td>

number


</td><td>

End point Y


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

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| undefined&gt;

Arc primitive object

## Example


```javascript
// 1. 生成随机起点坐标，避免与画布上已有的圆弧重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段红色虚线圆弧：起点（x, y），参考点（x+100, y+100），终点（x+200, y），线宽 6
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, '#FF0000', null, 6, 1);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', arc.getState_PrimitiveId());
console.log('primitiveType:', arc.getState_PrimitiveType());
console.log('startX:', arc.getState_StartX(), 'startY:', arc.getState_StartY());
console.log('referenceX:', arc.getState_ReferenceX(), 'referenceY:', arc.getState_ReferenceY());
console.log('endX:', arc.getState_EndX(), 'endY:', arc.getState_EndY());
console.log('color:', arc.getState_Color());
console.log('lineWidth:', arc.getState_LineWidth());
```

### delete

# SCH\_PrimitiveArc.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Arc

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;


</td><td>

Arc primitive ID or Arc primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两段待删除的测试圆弧（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const arc1 = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y);
const arc2 = await eda.sch_PrimitiveArc.create(x, y + 200, x + 100, y + 300, x + 200, y + 200);

// 2. 记录删除前的圆弧数量
const beforeCount = (await eda.sch_PrimitiveArc.getAll()).length;

// 3. 以 ID 数组形式批量删除两段圆弧
const deleted = await eda.sch_PrimitiveArc.delete([arc1.getState_PrimitiveId(), arc2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveArc.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Arc

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveArc | undefined>;
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

Arc primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| undefined&gt;

Arc primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两段测试圆弧（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const arc1 = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y);
const arc2 = await eda.sch_PrimitiveArc.create(x, y + 200, x + 100, y + 300, x + 200, y + 200);

// 2. 传单个 ID 字符串，返回单个圆弧对象
const single = await eda.sch_PrimitiveArc.get(arc1.getState_PrimitiveId());

// 3. 传 ID 数组，返回圆弧对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveArc.get([arc1.getState_PrimitiveId(), arc2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveArc.delete([arc1.getState_PrimitiveId(), arc2.getState_PrimitiveId()]);

console.log('single startX:', single.getState_StartX());
console.log('array length:', arr.length);
console.log('arc2 endX:', arr[1].getState_EndX());
```

### get_1

# SCH\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Arc

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveArc>>;
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

Arc primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;&gt;

Arc primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveArc.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Arc

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveArc>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;&gt;

Array of Arc primitive objects

## Example


```javascript
// 1. 创建一段测试圆弧作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y);
const arcId = arc.getState_PrimitiveId();

// 2. 获取当前原理图页上的全部圆弧
const all = await eda.sch_PrimitiveArc.getAll();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveArc.delete([arcId]);

console.log('total arcs:', all.length);
console.log('marker arc found:', all.some(a => a.getState_PrimitiveId() === arcId));
```

### getallprimitiveid

# SCH\_PrimitiveArc.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Arc primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Arc primitive IDs

## Example


```javascript
// 1. 创建一段测试圆弧作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y);
const arcId = arc.getState_PrimitiveId();

// 2. 获取全部圆弧的图元 ID
const allIds = await eda.sch_PrimitiveArc.getAllPrimitiveId();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveArc.delete([arcId]);

console.log('total arc ids:', allIds.length);
console.log('marker id in list:', allIds.includes(arcId));
```

### modify

# SCH\_PrimitiveArc.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Arc

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveArc, property: { startX?: undefined | number; startY?: undefined | number; referenceX?: undefined | number; referenceY?: undefined | number; endX?: undefined | number; endY?: undefined | number; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveArc | undefined>;
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

string \| [ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ startX?: undefined \| number; startY?: undefined \| number; referenceX?: undefined \| number; referenceY?: undefined \| number; endX?: undefined \| number; endY?: undefined \| number; color?: undefined \| null \| string; fillColor?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| undefined&gt;

Arc primitive object

## Example


```javascript
// 1. 创建待修改的测试圆弧（随机坐标避免与画布已有圆弧重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, '#FF0000', null, 6, 1);
const arcId = arc.getState_PrimitiveId();

// 2. 读取修改前的线宽与颜色
const beforeWidth = arc.getState_LineWidth();
const beforeColor = arc.getState_Color();

// 3. 批量修改：终点右移、线宽 6 → 10、颜色改为绿色
await eda.sch_PrimitiveArc.modify(arcId, { endX: x + 400, lineWidth: 10, color: '#00AA00' });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitiveArc.get(arcId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', arcId);
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('color:', beforeColor, '→', refreshed.getState_Color());
console.log('endX:', x + 200, '→', refreshed.getState_EndX());
```
