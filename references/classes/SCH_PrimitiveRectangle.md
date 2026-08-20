# SCH\_PrimitiveRectangle class

Schematic &amp; symbol / rectangle primitive class

## Signature

```typescript
export class SCH_PrimitiveRectangle implements ISCH_PrimitiveAPI 
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

[create(topLeftX, topLeftY, width, height, cornerRadius, rotation, color, fillColor, lineWidth, lineType, fillStyle)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

Create Rectangle


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

Delete Rectangle


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** Get Rectangle


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** Get Rectangle


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

Get all Rectangle


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

Get all Rectangle primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** Modify Rectangle


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveRectangle.create() method

Create Rectangle

## Signature

```typescript
public create(topLeftX: number, topLeftY: number, width: number, height: number, cornerRadius?: number, rotation?: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveRectangle | undefined>;
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

topLeftX


</td><td>

number


</td><td>

Top-left point X


</td></tr>
<tr><td>

topLeftY


</td><td>

number


</td><td>

Top-left point Y


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

Width


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

Height


</td></tr>
<tr><td>

cornerRadius


</td><td>

number


</td><td>

_(Optional)_ Corner radius


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle, rotating around the top-left point. Options: `0` `90` `180` `270`


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

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| undefined&gt;

Rectangle primitive object

## Example


```javascript
// 1. 生成随机左上角坐标，避免与画布上已有的矩形重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个宽 400 高 300 的圆角矩形：圆角 20、旋转 90 度（绕左上点）、红色虚线边线、黄色网格填充、线宽 6
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 400, 300, 20, 90, '#FF0000', '#FFFF00', 6, 1, 'Grid');

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', rect.getState_PrimitiveId());
console.log('primitiveType:', rect.getState_PrimitiveType());
console.log('topLeft:', rect.getState_TopLeftX(), rect.getState_TopLeftY());
console.log('size:', rect.getState_Width(), 'x', rect.getState_Height());
console.log('cornerRadius:', rect.getState_CornerRadius());
console.log('rotation:', rect.getState_Rotation());
console.log('color:', rect.getState_Color());
console.log('fillColor:', rect.getState_FillColor());
console.log('fillStyle:', rect.getState_FillStyle());
console.log('lineWidth:', rect.getState_LineWidth());
console.log('lineType:', rect.getState_LineType());
```

### delete

# SCH\_PrimitiveRectangle.delete() method

Delete Rectangle

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;


</td><td>

Rectangle primitive ID or Rectangle primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试矩形（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const rect1 = await eda.sch_PrimitiveRectangle.create(x, y, 400, 300, 0, 0, '#FF0000');
const rect2 = await eda.sch_PrimitiveRectangle.create(x, y + 400, 500, 200, 0, 0, '#0000FF');

// 2. 记录删除前的矩形数量
const beforeCount = (await eda.sch_PrimitiveRectangle.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两个矩形
const deleted1 = await eda.sch_PrimitiveRectangle.delete(rect1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitiveRectangle.delete(rect2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveRectangle.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveRectangle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Rectangle

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveRectangle | undefined>;
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

Rectangle primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| undefined&gt;

Rectangle primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 在画布空白处创建两个测试矩形（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const rect1 = await eda.sch_PrimitiveRectangle.create(x, y, 400, 300, 0, 0, '#FF0000');
const rect2 = await eda.sch_PrimitiveRectangle.create(x, y + 400, 500, 200, 30, 0, '#0000FF');
const id1 = rect1.getState_PrimitiveId();
const id2 = rect2.getState_PrimitiveId();

// 2. 传单个 ID 字符串，返回单个矩形对象
const single = await eda.sch_PrimitiveRectangle.get(id1);

// 3. 传 ID 数组，返回矩形对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveRectangle.get([id1, id2]);

// 4. 清理测试矩形（查询类需要清理）
await eda.sch_PrimitiveRectangle.delete([id1, id2]);

console.log('single primitiveType:', single.getState_PrimitiveType());
console.log('single size:', single.getState_Width(), 'x', single.getState_Height());
console.log('array length:', arr.length);
console.log('rect2 color:', arr[1].getState_Color());
console.log('rect2 cornerRadius:', arr[1].getState_CornerRadius());
```

### get_1

# SCH\_PrimitiveRectangle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Rectangle

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveRectangle>>;
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

Rectangle primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;&gt;

Rectangle primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveRectangle.getAll() method

Get all Rectangle

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveRectangle>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;&gt;

Array of Rectangle primitive objects

## Example


```javascript
// 1. 创建一个测试矩形作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 400, 300, 0, 0, '#FF0000');
const rectId = rect.getState_PrimitiveId();

// 2. 获取当前原理图页的全部矩形
const all = await eda.sch_PrimitiveRectangle.getAll();

// 3. 清理测试矩形（查询类需要清理）
await eda.sch_PrimitiveRectangle.delete([rectId]);

console.log('total rectangles:', all.length);
console.log('marker rectangle found:', all.some(r => r.getState_PrimitiveId() === rectId));
console.log('marker color:', all.find(r => r.getState_PrimitiveId() === rectId).getState_Color());
```

### getallprimitiveid

# SCH\_PrimitiveRectangle.getAllPrimitiveId() method

Get all Rectangle primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Rectangle primitive IDs

## Example


```javascript
// 1. 创建一个测试矩形作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 400, 300, 0, 0, '#FF0000');
const rectId = rect.getState_PrimitiveId();

// 2. 获取全部矩形的图元 ID
const allIds = await eda.sch_PrimitiveRectangle.getAllPrimitiveId();

// 3. 清理测试矩形（查询类需要清理）
await eda.sch_PrimitiveRectangle.delete([rectId]);

console.log('total rectangle ids:', allIds.length);
console.log('marker id in list:', allIds.includes(rectId));
```

### modify

# SCH\_PrimitiveRectangle.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Rectangle

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveRectangle, property: { topLeftX?: undefined | number; topLeftY?: undefined | number; width?: undefined | number; height?: undefined | number; cornerRadius?: undefined | number; rotation?: undefined | number; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED; fillStyle?: undefined | null | ESCH_PrimitiveFillStyle.NONE | ESCH_PrimitiveFillStyle.SOLID | ESCH_PrimitiveFillStyle.GRID | ESCH_PrimitiveFillStyle.HORIZONTAL_LINE | ESCH_PrimitiveFillStyle.VERTICAL_LINE | ESCH_PrimitiveFillStyle.RHOMBIC_GRID | ESCH_PrimitiveFillStyle.LEFT_SLASH_LINE | ESCH_PrimitiveFillStyle.RIGHT_SLASH_LINE }): Promise<ISCH_PrimitiveRectangle | undefined>;
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

string \| [ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ topLeftX?: undefined \| number; topLeftY?: undefined \| number; width?: undefined \| number; height?: undefined \| number; cornerRadius?: undefined \| number; rotation?: undefined \| number; color?: undefined \| null \| string; fillColor?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md)<!-- -->; fillStyle?: undefined \| null \| [ESCH\_PrimitiveFillStyle.NONE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.SOLID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.GRID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.HORIZONTAL\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.VERTICAL\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.RHOMBIC\_GRID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.LEFT\_SLASH\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.RIGHT\_SLASH\_LINE](../enums/ESCH_PrimitiveFillStyle.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| undefined&gt;

Rectangle primitive object

## Example


```javascript
// 1. 创建待修改的测试矩形：宽 400 高 300 直角、红色边线（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 400, 300, 0, 0, '#FF0000');
const rectId = rect.getState_PrimitiveId();

// 2. 记录修改前的尺寸、圆角与颜色
const beforeWidth = rect.getState_Width();
const beforeRadius = rect.getState_CornerRadius();
const beforeColor = rect.getState_Color();

// 3. 批量修改：左上角平移、宽 400 → 600、直角 → 圆角 40、边线改绿色、填充改蓝色实心
await eda.sch_PrimitiveRectangle.modify(rectId, {
  topLeftX: x + 200,
  topLeftY: y + 100,
  width: 600,
  cornerRadius: 40,
  color: '#00AA00',
  fillColor: '#0000FF',
  fillStyle: 'Solid',
});

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitiveRectangle.get(rectId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', rectId);
console.log('width:', beforeWidth, '→', refreshed.getState_Width());
console.log('cornerRadius:', beforeRadius, '→', refreshed.getState_CornerRadius());
console.log('color:', beforeColor, '→', refreshed.getState_Color());
console.log('topLeft:', x, y, '→', refreshed.getState_TopLeftX(), refreshed.getState_TopLeftY());
console.log('fillStyle:', refreshed.getState_FillStyle());
```
