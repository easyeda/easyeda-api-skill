# SCH\_PrimitiveCircle class

Schematic &amp; symbol / circle primitive class

## Signature

```typescript
export class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI 
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

[create(centerX, centerY, radius, color, fillColor, lineWidth, lineType, fillStyle)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Create a circle


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Delete the circle


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get the circle


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get the circle


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get all circles


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get the primitive IDs of all circles


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Modify the circle


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveCircle.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a circle

## Signature

```typescript
public create(centerX: number, centerY: number, radius: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle | undefined>;
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

centerX


</td><td>

number


</td><td>

Center of the circle X


</td></tr>
<tr><td>

centerY


</td><td>

number


</td><td>

Center of the circle Y


</td></tr>
<tr><td>

radius


</td><td>

number


</td><td>

Radius


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
<tr><td>

fillStyle


</td><td>

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null


</td><td>

_(Optional)_ Fill style, `null` indicates the default


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

Circle primitive object

## Example


```javascript
// 1. 生成随机圆心坐标，避免与画布上已有的圆重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个红色虚线边框、绿色网格填充的圆
const circle = await eda.sch_PrimitiveCircle.create(
  x,            // 圆心 X
  y,            // 圆心 Y
  150,          // 半径
  '#FF0000',    // 边框颜色
  '#00FF00',    // 填充颜色（'none' 表示无填充）
  6,            // 线宽（范围 1-10）
  1,            // 线型：1 = DASHED（虚线）
  'Grid'        // 填充样式（'Solid'/'Grid' 等字符串枚举）
);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', circle.getState_PrimitiveId());
console.log('primitiveType:', circle.getState_PrimitiveType());
console.log('center:', circle.getState_CenterX(), ',', circle.getState_CenterY());
console.log('radius:', circle.getState_Radius());
console.log('color:', circle.getState_Color());
console.log('fillStyle:', circle.getState_FillStyle());
```

### delete

# SCH\_PrimitiveCircle.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the circle

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;


</td><td>

Primitive ID of the circle or the circle primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试圆（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const circle1 = await eda.sch_PrimitiveCircle.create(x, y, 100);
const circle2 = await eda.sch_PrimitiveCircle.create(x + 400, y, 150);

// 2. 记录删除前的圆数量
const beforeCount = (await eda.sch_PrimitiveCircle.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两个圆
const deleted1 = await eda.sch_PrimitiveCircle.delete(circle1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitiveCircle.delete(circle2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveCircle.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveCircle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the circle

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>;
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

Primitive ID of the circle, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

Circle primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两个测试圆（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const circle1 = await eda.sch_PrimitiveCircle.create(x, y, 100);
const circle2 = await eda.sch_PrimitiveCircle.create(x + 400, y, 150);

// 2. 传单个 ID 字符串，返回单个圆对象
const single = await eda.sch_PrimitiveCircle.get(circle1.getState_PrimitiveId());

// 3. 传 ID 数组，返回圆对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveCircle.get([circle1.getState_PrimitiveId(), circle2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveCircle.delete([circle1.getState_PrimitiveId(), circle2.getState_PrimitiveId()]);

console.log('single radius:', single.getState_Radius());
console.log('array length:', arr.length);
console.log('circle2 radius:', arr[1].getState_Radius());
```

### get_1

# SCH\_PrimitiveCircle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the circle

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>;
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

Primitive ID of the circle, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;&gt;

Circle primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveCircle.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all circles

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveCircle>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;&gt;

Array of circle primitive objects

## Example


```javascript
// 1. 创建一个测试圆作为查找目标（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const circle = await eda.sch_PrimitiveCircle.create(x, y, 120, '#FF0000');
const circleId = circle.getState_PrimitiveId();

// 2. 获取当前原理图页上的全部圆
const all = await eda.sch_PrimitiveCircle.getAll();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveCircle.delete([circleId]);

console.log('total circles:', all.length);
console.log('marker circle found:', all.some(c => c.getState_PrimitiveId() === circleId));
```

### getallprimitiveid

# SCH\_PrimitiveCircle.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all circles

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of circle primitive IDs

## Example


```javascript
// 1. 创建一个测试圆作为查找目标（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const circle = await eda.sch_PrimitiveCircle.create(x, y, 120, '#FF0000');
const circleId = circle.getState_PrimitiveId();

// 2. 获取全部圆的图元 ID
const allIds = await eda.sch_PrimitiveCircle.getAllPrimitiveId();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveCircle.delete([circleId]);

console.log('total circle ids:', allIds.length);
console.log('marker id in list:', allIds.includes(circleId));
```

### modify

# SCH\_PrimitiveCircle.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the circle

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveCircle, property: { centerX?: undefined | number; centerY?: undefined | number; radius?: undefined | number; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED; fillStyle?: undefined | null | ESCH_PrimitiveFillStyle.NONE | ESCH_PrimitiveFillStyle.SOLID | ESCH_PrimitiveFillStyle.GRID | ESCH_PrimitiveFillStyle.HORIZONTAL_LINE | ESCH_PrimitiveFillStyle.VERTICAL_LINE | ESCH_PrimitiveFillStyle.RHOMBIC_GRID | ESCH_PrimitiveFillStyle.LEFT_SLASH_LINE | ESCH_PrimitiveFillStyle.RIGHT_SLASH_LINE }): Promise<ISCH_PrimitiveCircle | undefined>;
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

string \| [ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ centerX?: undefined \| number; centerY?: undefined \| number; radius?: undefined \| number; color?: undefined \| null \| string; fillColor?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md)<!-- -->; fillStyle?: undefined \| null \| [ESCH\_PrimitiveFillStyle.NONE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.SOLID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.GRID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.HORIZONTAL\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.VERTICAL\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.RHOMBIC\_GRID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.LEFT\_SLASH\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.RIGHT\_SLASH\_LINE](../enums/ESCH_PrimitiveFillStyle.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

Circle primitive object

## Example


```javascript
// 1. 创建待修改的测试圆（随机坐标避免与画布已有圆重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const circle = await eda.sch_PrimitiveCircle.create(x, y, 100, '#FF0000', 'none', 6, 1);
const circleId = circle.getState_PrimitiveId();

// 2. 读取修改前的半径、线宽与填充样式
const beforeRadius = circle.getState_Radius();
const beforeWidth = circle.getState_LineWidth();
const beforeFillStyle = circle.getState_FillStyle();

// 3. 批量修改：半径 100 → 200、线宽 6 → 10、填充样式改为实心
await eda.sch_PrimitiveCircle.modify(circleId, { radius: 200, lineWidth: 10, fillStyle: 'Solid' });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitiveCircle.get(circleId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', circleId);
console.log('radius:', beforeRadius, '→', refreshed.getState_Radius());
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('fillStyle:', beforeFillStyle, '→', refreshed.getState_FillStyle());
```
