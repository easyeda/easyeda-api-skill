# IPNL\_PrimitiveAuxiliaryPoint class

辅助点图元

## Signature

```typescript
class IPNL_PrimitiveAuxiliaryPoint implements IPNL_Primitive
```
**Implements:** [IPNL\_Primitive](../interfaces/IPNL_Primitive.md)

## Remarks

辅助点图元对象，通过操作类创建或查询获得

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

将本地属性同步到画布

</td></tr>
<tr><td>

[getState\_FillColor()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

获取属性状态：填充颜色

</td></tr>
<tr><td>

[getState\_Layer()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

获取属性状态：图层

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

获取属性状态：是否锁定

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_X()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

获取属性状态：中心点 X 坐标

</td></tr>
<tr><td>

[getState\_Y()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

获取属性状态：中心点 Y 坐标

</td></tr>
<tr><td>

[isAsync()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

是否为异步模式

</td></tr>
<tr><td>

[reset()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

重置本地属性为画布当前状态

</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

设置属性状态：填充颜色

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

设置属性状态：图层

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

设置属性状态：是否锁定

</td></tr>
<tr><td>

[setState\_X(x)](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

设置属性状态：中心点 X 坐标

</td></tr>
<tr><td>

[setState\_Y(y)](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

设置属性状态：中心点 Y 坐标

</td></tr>
<tr><td>

[toAsync()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

切换为异步模式

</td></tr>
<tr><td>

[toSync()](./IPNL_PrimitiveAuxiliaryPoint.md)

</td><td>

</td><td>

切换为同步模式

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPNL\_PrimitiveAuxiliaryPoint.done() method

将本地属性同步到画布

## Signature

```typescript
function done(): Promise<IPNL_PrimitiveAuxiliaryPoint>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)<!-- -->&gt;

图元对象

### getstate_fillcolor

# IPNL\_PrimitiveAuxiliaryPoint.getState\_FillColor() method

获取属性状态：填充颜色

## Signature

```typescript
function getState_FillColor(): string | undefined;
```

## Returns

string \| undefined

填充颜色，未设置返回 `undefined`

### getstate_layer

# IPNL\_PrimitiveAuxiliaryPoint.getState\_Layer() method

获取属性状态：图层

## Signature

```typescript
function getState_Layer(): EPNL_LayerId | undefined;
```

## Returns

[EPNL\_LayerId](../enums/EPNL_LayerId.md) \| undefined

图层 ID

### getstate_primitiveid

# IPNL\_PrimitiveAuxiliaryPoint.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

图元 ID

### getstate_primitivelock

# IPNL\_PrimitiveAuxiliaryPoint.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

是否锁定

### getstate_primitivetype

# IPNL\_PrimitiveAuxiliaryPoint.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
function getState_PrimitiveType(): EPNL_PrimitiveType;
```

## Returns

[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

图元类型

### getstate_x

# IPNL\_PrimitiveAuxiliaryPoint.getState\_X() method

获取属性状态：中心点 X 坐标

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

中心点 X 坐标（px）

### getstate_y

# IPNL\_PrimitiveAuxiliaryPoint.getState\_Y() method

获取属性状态：中心点 Y 坐标

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

中心点 Y 坐标（px，向上为正）

### isasync

# IPNL\_PrimitiveAuxiliaryPoint.isAsync() method

是否为异步模式

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

异步模式返回 `true`

### reset

# IPNL\_PrimitiveAuxiliaryPoint.reset() method

重置本地属性为画布当前状态

## Signature

```typescript
function reset(): Promise<IPNL_PrimitiveAuxiliaryPoint>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)<!-- -->&gt;

图元对象

### setstate_fillcolor

# IPNL\_PrimitiveAuxiliaryPoint.setState\_FillColor() method

设置属性状态：填充颜色

## Signature

```typescript
function setState_FillColor(fillColor?: string): IPNL_PrimitiveAuxiliaryPoint;
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

fillColor

</td><td>

string

</td><td>

_(Optional)_ 填充颜色

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)

图元对象

### setstate_layer

# IPNL\_PrimitiveAuxiliaryPoint.setState\_Layer() method

设置属性状态：图层

## Signature

```typescript
function setState_Layer(layer?: EPNL_LayerId): IPNL_PrimitiveAuxiliaryPoint;
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

[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)

图元对象

### setstate_primitivelock

# IPNL\_PrimitiveAuxiliaryPoint.setState\_PrimitiveLock() method

设置属性状态：是否锁定

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPNL_PrimitiveAuxiliaryPoint;
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

[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)

图元对象

### setstate_x

# IPNL\_PrimitiveAuxiliaryPoint.setState\_X() method

设置属性状态：中心点 X 坐标

## Signature

```typescript
function setState_X(x: number): IPNL_PrimitiveAuxiliaryPoint;
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

x

</td><td>

number

</td><td>

中心点 X 坐标（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)

图元对象

### setstate_y

# IPNL\_PrimitiveAuxiliaryPoint.setState\_Y() method

设置属性状态：中心点 Y 坐标

## Signature

```typescript
function setState_Y(y: number): IPNL_PrimitiveAuxiliaryPoint;
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

y

</td><td>

number

</td><td>

中心点 Y 坐标（px，向上为正）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)

图元对象

### toasync

# IPNL\_PrimitiveAuxiliaryPoint.toAsync() method

切换为异步模式

## Signature

```typescript
function toAsync(): IPNL_PrimitiveAuxiliaryPoint;
```

## Returns

[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)

图元对象

### tosync

# IPNL\_PrimitiveAuxiliaryPoint.toSync() method

切换为同步模式

## Signature

```typescript
function toSync(): IPNL_PrimitiveAuxiliaryPoint;
```

## Returns

[IPNL\_PrimitiveAuxiliaryPoint](./IPNL_PrimitiveAuxiliaryPoint.md)

图元对象

## Remarks

切换前会把本地未提交的修改一次性提交到画布
