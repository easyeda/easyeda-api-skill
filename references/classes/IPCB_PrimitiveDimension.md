# IPCB\_PrimitiveDimension class

尺寸标注图元

## Signature

```typescript
declare class IPCB_PrimitiveDimension implements IPCB_Primitive 
```
**Implements:** [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[done()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_CoordinateSet()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：坐标集


</td></tr>
<tr><td>

[getState\_DimensionType()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：尺寸标注类型


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_Precision()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：精度


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_TextFollow()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：文字跟随


</td></tr>
<tr><td>

[getState\_Unit()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

获取属性状态：单位


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_CoordinateSet(coordinateSet)](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标集


</td></tr>
<tr><td>

[setState\_DimensionType(dimensionType)](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：尺寸标注类型


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_Precision(precision)](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：精度


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_Unit(unit)](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：单位


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveDimension.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveDimension.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<IPCB_PrimitiveDimension>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;

尺寸标注图元对象

### getstate_coordinateset

# IPCB\_PrimitiveDimension.getState\_CoordinateSet() method

获取属性状态：坐标集

## Signature

```typescript
getState_CoordinateSet(): TPCB_PrimitiveDimensionCoordinateSet;
```


## Returns

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)

坐标集

### getstate_dimensiontype

# IPCB\_PrimitiveDimension.getState\_DimensionType() method

获取属性状态：尺寸标注类型

## Signature

```typescript
getState_DimensionType(): EPCB_PrimitiveDimensionType;
```


## Returns

[EPCB\_PrimitiveDimensionType](../enums/EPCB_PrimitiveDimensionType.md)

尺寸标注类型

### getstate_layer

# IPCB\_PrimitiveDimension.getState\_Layer() method

获取属性状态：层

## Signature

```typescript
getState_Layer(): TPCB_LayersOfDimension;
```


## Returns

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)

层

### getstate_linewidth

# IPCB\_PrimitiveDimension.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number;
```


## Returns

number

线宽

### getstate_precision

# IPCB\_PrimitiveDimension.getState\_Precision() method

获取属性状态：精度

## Signature

```typescript
getState_Precision(): number;
```


## Returns

number

精度

### getstate_primitiveid

# IPCB\_PrimitiveDimension.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveDimension.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
getState_PrimitiveLock(): boolean;
```


## Returns

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveDimension.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_textfollow

# IPCB\_PrimitiveDimension.getState\_TextFollow() method

获取属性状态：文字跟随

## Signature

```typescript
getState_TextFollow(): 0 | 1;
```


## Returns

0 \| 1

文字跟随

### getstate_unit

# IPCB\_PrimitiveDimension.getState\_Unit() method

获取属性状态：单位

## Signature

```typescript
getState_Unit(): ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;
```


## Returns

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)

单位

### isasync

# IPCB\_PrimitiveDimension.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveDimension.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<IPCB_PrimitiveDimension>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;

尺寸标注图元对象

### setstate_coordinateset

# IPCB\_PrimitiveDimension.setState\_CoordinateSet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标集

## Signature

```typescript
setState_CoordinateSet(coordinateSet: TPCB_PrimitiveDimensionCoordinateSet): IPCB_PrimitiveDimension;
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

coordinateSet


</td><td>

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)


</td><td>

坐标集


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_dimensiontype

# IPCB\_PrimitiveDimension.setState\_DimensionType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：尺寸标注类型

## Signature

```typescript
setState_DimensionType(dimensionType: EPCB_PrimitiveDimensionType): IPCB_PrimitiveDimension;
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
</tbody></table>



## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_layer

# IPCB\_PrimitiveDimension.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：层

## Signature

```typescript
setState_Layer(layer: TPCB_LayersOfDimension): IPCB_PrimitiveDimension;
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

层


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_linewidth

# IPCB\_PrimitiveDimension.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveDimension;
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

lineWidth


</td><td>

number


</td><td>

线宽


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_precision

# IPCB\_PrimitiveDimension.setState\_Precision() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：精度

## Signature

```typescript
setState_Precision(precision: number): IPCB_PrimitiveDimension;
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

precision


</td><td>

number


</td><td>

精度


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_primitivelock

# IPCB\_PrimitiveDimension.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否锁定

## Signature

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveDimension;
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

primitiveLock


</td><td>

boolean


</td><td>

是否锁定


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_unit

# IPCB\_PrimitiveDimension.setState\_Unit() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：单位

## Signature

```typescript
setState_Unit(unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL): IPCB_PrimitiveDimension;
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

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)


</td><td>

单位


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### toasync

# IPCB\_PrimitiveDimension.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): IPCB_PrimitiveDimension;
```


## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### tosync

# IPCB\_PrimitiveDimension.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): IPCB_PrimitiveDimension;
```


## Returns

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象
