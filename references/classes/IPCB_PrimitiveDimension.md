# IPCB\_PrimitiveDimension class

尺寸标注图元

## 签名

```typescript
declare class IPCB_PrimitiveDimension implements IPCB_Primitive 
```
**实现自：**[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## 备注


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitiveDimension>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;

尺寸标注图元对象

### getstate_coordinateset

# IPCB\_PrimitiveDimension.getState\_CoordinateSet() method

获取属性状态：坐标集

## 签名

```typescript
getState_CoordinateSet(): TPCB_PrimitiveDimensionCoordinateSet;
```


## 返回值

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)

坐标集

### getstate_dimensiontype

# IPCB\_PrimitiveDimension.getState\_DimensionType() method

获取属性状态：尺寸标注类型

## 签名

```typescript
getState_DimensionType(): EPCB_PrimitiveDimensionType;
```


## 返回值

[EPCB\_PrimitiveDimensionType](../enums/EPCB_PrimitiveDimensionType.md)

尺寸标注类型

### getstate_layer

# IPCB\_PrimitiveDimension.getState\_Layer() method

获取属性状态：层

## 签名

```typescript
getState_Layer(): TPCB_LayersOfDimension;
```


## 返回值

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)

层

### getstate_linewidth

# IPCB\_PrimitiveDimension.getState\_LineWidth() method

获取属性状态：线宽

## 签名

```typescript
getState_LineWidth(): number;
```


## 返回值

number

线宽

### getstate_precision

# IPCB\_PrimitiveDimension.getState\_Precision() method

获取属性状态：精度

## 签名

```typescript
getState_Precision(): number;
```


## 返回值

number

精度

### getstate_primitiveid

# IPCB\_PrimitiveDimension.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveDimension.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveDimension.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_textfollow

# IPCB\_PrimitiveDimension.getState\_TextFollow() method

获取属性状态：文字跟随

## 签名

```typescript
getState_TextFollow(): 0 | 1;
```


## 返回值

0 \| 1

文字跟随

### getstate_unit

# IPCB\_PrimitiveDimension.getState\_Unit() method

获取属性状态：单位

## 签名

```typescript
getState_Unit(): ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;
```


## 返回值

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)

单位

### isasync

# IPCB\_PrimitiveDimension.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveDimension.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitiveDimension>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)<!-- -->&gt;

尺寸标注图元对象

### setstate_coordinateset

# IPCB\_PrimitiveDimension.setState\_CoordinateSet() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：坐标集

## 签名

```typescript
setState_CoordinateSet(coordinateSet: TPCB_PrimitiveDimensionCoordinateSet): IPCB_PrimitiveDimension;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

coordinateSet


</td><td>

[TPCB\_PrimitiveDimensionCoordinateSet](../types/TPCB_PrimitiveDimensionCoordinateSet.md)


</td><td>

坐标集


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_dimensiontype

# IPCB\_PrimitiveDimension.setState\_DimensionType() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：尺寸标注类型

## 签名

```typescript
setState_DimensionType(dimensionType: EPCB_PrimitiveDimensionType): IPCB_PrimitiveDimension;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

dimensionType


</td><td>

[EPCB\_PrimitiveDimensionType](../enums/EPCB_PrimitiveDimensionType.md)


</td><td>

尺寸标注类型


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_layer

# IPCB\_PrimitiveDimension.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfDimension): IPCB_PrimitiveDimension;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

layer


</td><td>

[TPCB\_LayersOfDimension](../types/TPCB_LayersOfDimension.md)


</td><td>

层


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_linewidth

# IPCB\_PrimitiveDimension.setState\_LineWidth() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线宽

## 签名

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveDimension;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

lineWidth


</td><td>

number


</td><td>

线宽


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_precision

# IPCB\_PrimitiveDimension.setState\_Precision() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：精度

## 签名

```typescript
setState_Precision(precision: number): IPCB_PrimitiveDimension;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

precision


</td><td>

number


</td><td>

精度


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_primitivelock

# IPCB\_PrimitiveDimension.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveDimension;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

primitiveLock


</td><td>

boolean


</td><td>

是否锁定


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### setstate_unit

# IPCB\_PrimitiveDimension.setState\_Unit() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：单位

## 签名

```typescript
setState_Unit(unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL): IPCB_PrimitiveDimension;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)


</td><td>

单位


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### toasync

# IPCB\_PrimitiveDimension.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitiveDimension;
```


## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象

### tosync

# IPCB\_PrimitiveDimension.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitiveDimension;
```


## 返回值

[IPCB\_PrimitiveDimension](./IPCB_PrimitiveDimension.md)

尺寸标注图元对象
