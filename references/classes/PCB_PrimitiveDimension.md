# PCB\_PrimitiveDimension class

PCB &amp; footprint / dimension primitive class

## Signature

```typescript
export class PCB_PrimitiveDimension implements IPCB_PrimitiveAPI 
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

[create(dimensionType, coordinateSet, layer, unit, lineWidth, precision, primitiveLock)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

Create a dimension


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** Delete the dimension


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** Get the dimension


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** Get the dimension


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** Get all dimensions


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** Get the primitive IDs of all dimensions


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** Modify the dimension


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveDimension.create() method

Create a dimension

## Signature

```typescript
public create(dimensionType: EPCB_PrimitiveDimensionType, coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, layer?: TPCB_LayersOfDimension, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL, lineWidth?: number, precision?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveDimension | undefined>;
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

dimensionType


</td><td>

[EPCB\_PrimitiveDimensionType](../enums/EPCB_PrimitiveDimensionType.md)


</td><td>

Dimension type


</td></tr>
<tr><td>

coordinateSet


</td><td>

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)


</td><td>

Dimension coordinate set


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)


</td><td>

_(Optional)_ Layer


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ Unit


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

_(Optional)_ Line width


</td></tr>
<tr><td>

precision


</td><td>

number


</td><td>

_(Optional)_ Precision, value range `0`<!-- -->-`4`


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

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md) \| undefined&gt;

Dimension primitive object

## Example


```javascript
// 1. 生成随机基准坐标，避免与画布上已有的标注重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 在顶层丝印（3）创建长度标注：测量 (x, y) 到 (x+2000, y) 的水平距离，
//    箭头端点向内收 200mil，单位毫米（mm），线宽 10mil，精度 2 位小数
const dim = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y, x, y - 200, x + 2000, y - 200, x + 2000, y],
  3,
  'mm',
  10,
  2,
  false
);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', dim.getState_PrimitiveId());
console.log('dimensionType:', dim.getState_DimensionType());
console.log('layer:', dim.getState_Layer());
console.log('unit:', dim.getState_Unit());
console.log('lineWidth:', dim.getState_LineWidth());
console.log('precision:', dim.getState_Precision());
```

### delete

# PCB\_PrimitiveDimension.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the dimension

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitiveDimension | Array<string> | Array<IPCB_PrimitiveDimension>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;


</td><td>

Primitive ID of the dimension or the dimension primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试标注（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const dim1 = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y, x, y - 200, x + 2000, y - 200, x + 2000, y],
  3
);
const dim2 = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y + 1000, x, y + 800, x + 2000, y + 800, x + 2000, y + 1000],
  3
);

// 2. 记录删除前的标注数量
const beforeCount = (await eda.pcb_PrimitiveDimension.getAll()).length;

// 3. 以 ID 数组形式批量删除两个标注
const deleted = await eda.pcb_PrimitiveDimension.delete([
  dim1.getState_PrimitiveId(),
  dim2.getState_PrimitiveId()
]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveDimension.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveDimension.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the dimension

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitiveDimension | undefined>;
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

Primitive ID of the dimension, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md) \| undefined&gt;

Dimension primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两个测试标注（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const dim1 = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y, x, y - 200, x + 2000, y - 200, x + 2000, y],
  3,
  'mm'
);
const dim2 = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y + 1000, x, y + 800, x + 2000, y + 800, x + 2000, y + 1000],
  3,
  'mil'
);

// 2. 传单个 ID 字符串，返回单个标注对象
const single = await eda.pcb_PrimitiveDimension.get(dim1.getState_PrimitiveId());

// 3. 传 ID 数组，返回标注对象数组
const arr = await eda.pcb_PrimitiveDimension.get([
  dim1.getState_PrimitiveId(),
  dim2.getState_PrimitiveId()
]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveDimension.delete([
  dim1.getState_PrimitiveId(),
  dim2.getState_PrimitiveId()
]);

console.log('single dimensionType:', single.getState_DimensionType());
console.log('single unit:', single.getState_Unit());
console.log('array length:', arr.length);
console.log('dim2 unit:', arr[1].getState_Unit());
```

### get_1

# PCB\_PrimitiveDimension.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the dimension

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveDimension>>;
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

Primitive ID of the dimension, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;&gt;

Dimension primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveDimension.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all dimensions

## Signature

```typescript
public getAll(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveDimension>>;
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

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)


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

Promise&lt;Array&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;&gt;

Dimension primitive object array

## Example


```javascript
// 1. 创建一个顶层丝印（3）测试标注作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const dim = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y, x, y - 200, x + 2000, y - 200, x + 2000, y],
  3
);
const dimId = dim.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部尺寸标注
const all = await eda.pcb_PrimitiveDimension.getAll();

// 3. 按层过滤：只取顶层丝印（3）的标注
const topSilk = await eda.pcb_PrimitiveDimension.getAll(3);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveDimension.delete([dimId]);

console.log('total dimensions:', all.length);
console.log('top silkscreen dimensions:', topSilk.length);
console.log('marker dimension found:', topSilk.some(d => d.getState_PrimitiveId() === dimId));
```

### getallprimitiveid

# PCB\_PrimitiveDimension.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all dimensions

## Signature

```typescript
public getAllPrimitiveId(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<string>>;
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

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)


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

Array of dimension primitive IDs

## Example


```javascript
// 1. 创建一个顶层丝印（3）测试标注作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const dim = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y, x, y - 200, x + 2000, y - 200, x + 2000, y],
  3
);
const dimId = dim.getState_PrimitiveId();

// 2. 获取全部尺寸标注的图元 ID
const allIds = await eda.pcb_PrimitiveDimension.getAllPrimitiveId();

// 3. 按层过滤：只取顶层丝印（3）标注的图元 ID
const topSilkIds = await eda.pcb_PrimitiveDimension.getAllPrimitiveId(3);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveDimension.delete([dimId]);

console.log('total dimension ids:', allIds.length);
console.log('top silkscreen dimension ids:', topSilkIds.length);
console.log('marker id in top silkscreen list:', topSilkIds.includes(dimId));
```

### modify

# PCB\_PrimitiveDimension.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the dimension

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitiveDimension, property: { dimensionType?: undefined | EPCB_PrimitiveDimensionType.RADIUS | EPCB_PrimitiveDimensionType.LENGTH | EPCB_PrimitiveDimensionType.ANGLE; coordinateSet?: undefined | any | any; layer?: undefined | EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.BOTTOM_SILKSCREEN | EPCB_LayerId.DOCUMENT | EPCB_LayerId.MECHANICAL | EPCB_LayerId.CUSTOM_1 | EPCB_LayerId.CUSTOM_2 | EPCB_LayerId.CUSTOM_3 | EPCB_LayerId.CUSTOM_4 | EPCB_LayerId.CUSTOM_5 | EPCB_LayerId.CUSTOM_6 | EPCB_LayerId.CUSTOM_7 | EPCB_LayerId.CUSTOM_8 | EPCB_LayerId.CUSTOM_9 | EPCB_LayerId.CUSTOM_10 | EPCB_LayerId.CUSTOM_11 | EPCB_LayerId.CUSTOM_12 | EPCB_LayerId.CUSTOM_13 | EPCB_LayerId.CUSTOM_14 | EPCB_LayerId.CUSTOM_15 | EPCB_LayerId.CUSTOM_16 | EPCB_LayerId.CUSTOM_17 | EPCB_LayerId.CUSTOM_18 | EPCB_LayerId.CUSTOM_19 | EPCB_LayerId.CUSTOM_20 | EPCB_LayerId.CUSTOM_21 | EPCB_LayerId.CUSTOM_22 | EPCB_LayerId.CUSTOM_23 | EPCB_LayerId.CUSTOM_24 | EPCB_LayerId.CUSTOM_25 | EPCB_LayerId.CUSTOM_26 | EPCB_LayerId.CUSTOM_27 | EPCB_LayerId.CUSTOM_28 | EPCB_LayerId.CUSTOM_29 | EPCB_LayerId.CUSTOM_30; unit?: undefined | ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL; lineWidth?: undefined | number; precision?: undefined | number; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveDimension | undefined>;
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

string \| [IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ dimensionType?: undefined \| [EPCB\_PrimitiveDimensionType.RADIUS](../enums/EPCB_PrimitiveDimensionType.md) \| [EPCB\_PrimitiveDimensionType.LENGTH](../enums/EPCB_PrimitiveDimensionType.md) \| [EPCB\_PrimitiveDimensionType.ANGLE](../enums/EPCB_PrimitiveDimensionType.md)<!-- -->; coordinateSet?: undefined \| any \| any; layer?: undefined \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MECHANICAL](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_30](../enums/EPCB_LayerId.md)<!-- -->; unit?: undefined \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)<!-- -->; lineWidth?: undefined \| number; precision?: undefined \| number; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md) \| undefined&gt;

Dimension primitive object

## Example


```javascript
// 1. 创建待修改的测试标注（随机坐标避免与画布已有标注重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const dim = await eda.pcb_PrimitiveDimension.create(
  'Length Dimension',
  [x, y, x, y - 200, x + 2000, y - 200, x + 2000, y],
  3,
  'mm',
  10,
  2
);
const dimId = dim.getState_PrimitiveId();

// 2. 读取修改前的线宽与精度
const beforeWidth = dim.getState_LineWidth();
const beforePrecision = dim.getState_Precision();

// 3. 批量修改：线宽 10 → 20，精度 2 → 3
await eda.pcb_PrimitiveDimension.modify(dimId, { lineWidth: 20, precision: 3 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveDimension.get(dimId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', dimId);
console.log('lineWidth:', beforeWidth, '→', refreshed.getState_LineWidth());
console.log('precision:', beforePrecision, '→', refreshed.getState_Precision());
```
