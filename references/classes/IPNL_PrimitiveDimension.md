# IPNL\_PrimitiveDimension class

尺寸标注图元

## Signature

```typescript
class IPNL_PrimitiveDimension implements IPNL_Primitive
```
**Implements:** [IPNL\_Primitive](../interfaces/IPNL_Primitive.md)

## Remarks

尺寸标注图元对象，通过操作类创建或查询获得

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

将本地属性同步到画布

</td></tr>
<tr><td>

[getState\_CoordinateSet()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

获取属性状态：坐标点集

</td></tr>
<tr><td>

[getState\_DimensionType()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

获取属性状态：标注类型

</td></tr>
<tr><td>

[getState\_Layer()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

获取属性状态：图层

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

获取属性状态：是否锁定

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[isAsync()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

是否为异步模式

</td></tr>
<tr><td>

[reset()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

重置本地属性为画布当前状态

</td></tr>
<tr><td>

[setState\_CoordinateSet(coordinateSet)](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

设置属性状态：坐标点集

</td></tr>
<tr><td>

[setState\_DimensionType(dimensionType)](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

设置属性状态：标注类型

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

设置属性状态：图层

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

设置属性状态：是否锁定

</td></tr>
<tr><td>

[toAsync()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

切换为异步模式

</td></tr>
<tr><td>

[toSync()](./IPNL_PrimitiveDimension.md)

</td><td>

</td><td>

切换为同步模式

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPNL\_PrimitiveDimension.done() method

将本地属性同步到画布

## Signature

```typescript
function done(): Promise<IPNL_PrimitiveDimension>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)<!-- -->&gt;

图元对象

### getstate_coordinateset

# IPNL\_PrimitiveDimension.getState\_CoordinateSet() method

获取属性状态：坐标点集

## Signature

```typescript
function getState_CoordinateSet(): TPNL_PrimitiveDimensionCoordinateSet;
```

## Returns

[TPNL\_PrimitiveDimensionCoordinateSet](../types/TPNL_PrimitiveDimensionCoordinateSet.md)

坐标集，结构随标注类型

### getstate_dimensiontype

# IPNL\_PrimitiveDimension.getState\_DimensionType() method

获取属性状态：标注类型

## Signature

```typescript
function getState_DimensionType(): EPNL_PrimitiveDimensionType;
```

## Returns

[EPNL\_PrimitiveDimensionType](../enums/EPNL_PrimitiveDimensionType.md)

标注类型

### getstate_layer

# IPNL\_PrimitiveDimension.getState\_Layer() method

获取属性状态：图层

## Signature

```typescript
function getState_Layer(): EPNL_LayerId | undefined;
```

## Returns

[EPNL\_LayerId](../enums/EPNL_LayerId.md) \| undefined

图层 ID

### getstate_primitiveid

# IPNL\_PrimitiveDimension.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

图元 ID

### getstate_primitivelock

# IPNL\_PrimitiveDimension.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

是否锁定

### getstate_primitivetype

# IPNL\_PrimitiveDimension.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
function getState_PrimitiveType(): EPNL_PrimitiveType;
```

## Returns

[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

图元类型

### isasync

# IPNL\_PrimitiveDimension.isAsync() method

是否为异步模式

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

异步模式返回 `true`

### reset

# IPNL\_PrimitiveDimension.reset() method

重置本地属性为画布当前状态

## Signature

```typescript
function reset(): Promise<IPNL_PrimitiveDimension>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)<!-- -->&gt;

图元对象

### setstate_coordinateset

# IPNL\_PrimitiveDimension.setState\_CoordinateSet() method

设置属性状态：坐标点集

## Signature

```typescript
function setState_CoordinateSet(
	coordinateSet: TPNL_PrimitiveDimensionCoordinateSet,
): IPNL_PrimitiveDimension;
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

[TPNL\_PrimitiveDimensionCoordinateSet](../types/TPNL_PrimitiveDimensionCoordinateSet.md)

</td><td>

坐标集，结构须与标注类型匹配

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)

图元对象

### setstate_dimensiontype

# IPNL\_PrimitiveDimension.setState\_DimensionType() method

设置属性状态：标注类型

## Signature

```typescript
function setState_DimensionType(
	dimensionType: EPNL_PrimitiveDimensionType,
): IPNL_PrimitiveDimension;
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

[EPNL\_PrimitiveDimensionType](../enums/EPNL_PrimitiveDimensionType.md)

</td><td>

标注类型

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)

图元对象

### setstate_layer

# IPNL\_PrimitiveDimension.setState\_Layer() method

设置属性状态：图层

## Signature

```typescript
function setState_Layer(layer?: EPNL_LayerId): IPNL_PrimitiveDimension;
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

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

_(Optional)_ 图层 ID

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)

图元对象

### setstate_primitivelock

# IPNL\_PrimitiveDimension.setState\_PrimitiveLock() method

设置属性状态：是否锁定

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPNL_PrimitiveDimension;
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

[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)

图元对象

### toasync

# IPNL\_PrimitiveDimension.toAsync() method

切换为异步模式

## Signature

```typescript
function toAsync(): IPNL_PrimitiveDimension;
```

## Returns

[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)

图元对象

### tosync

# IPNL\_PrimitiveDimension.toSync() method

切换为同步模式

## Signature

```typescript
function toSync(): IPNL_PrimitiveDimension;
```

## Returns

[IPNL\_PrimitiveDimension](./IPNL_PrimitiveDimension.md)

图元对象

## Remarks

切换前会把本地未提交的修改一次性提交到画布
