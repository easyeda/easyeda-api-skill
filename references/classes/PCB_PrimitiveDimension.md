# PCB\_PrimitiveDimension class

PCB &amp; 封装 / 尺寸标注图元类

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

创建尺寸标注


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 删除尺寸标注


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 获取尺寸标注


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 获取尺寸标注


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有尺寸标注


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有尺寸标注的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 修改尺寸标注


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveDimension.create() method

创建尺寸标注

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

尺寸标注类型


</td></tr>
<tr><td>

coordinateSet


</td><td>

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)


</td><td>

尺寸标注坐标集


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)


</td><td>

_(Optional)_ 层


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ 单位


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

_(Optional)_ 线宽


</td></tr>
<tr><td>

precision


</td><td>

number


</td><td>

_(Optional)_ 精度，取值范围 `0`<!-- -->-`4`


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md) \| undefined&gt;

尺寸标注图元对象

### delete

# PCB\_PrimitiveDimension.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除尺寸标注

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

尺寸标注的图元 ID 或尺寸标注图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveDimension.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取尺寸标注

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

尺寸标注的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md) \| undefined&gt;

尺寸标注图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveDimension.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取尺寸标注

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

尺寸标注的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;&gt;

尺寸标注图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveDimension.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有尺寸标注

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

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;&gt;

尺寸标注图元对象数组

### getallprimitiveid

# PCB\_PrimitiveDimension.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有尺寸标注的图元 ID

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

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

尺寸标注的图元 ID 数组

### modify

# PCB\_PrimitiveDimension.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改尺寸标注

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

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ dimensionType?: undefined \| [EPCB\_PrimitiveDimensionType.RADIUS](../enums/EPCB_PrimitiveDimensionType.md) \| [EPCB\_PrimitiveDimensionType.LENGTH](../enums/EPCB_PrimitiveDimensionType.md) \| [EPCB\_PrimitiveDimensionType.ANGLE](../enums/EPCB_PrimitiveDimensionType.md)<!-- -->; coordinateSet?: undefined \| any \| any; layer?: undefined \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MECHANICAL](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_30](../enums/EPCB_LayerId.md)<!-- -->; unit?: undefined \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)<!-- -->; lineWidth?: undefined \| number; precision?: undefined \| number; primitiveLock?: undefined \| false \| true }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md) \| undefined&gt;

尺寸标注图元对象
