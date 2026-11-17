# IPNL\_PrimitiveEllipse class

椭圆图元

## Signature

```typescript
class IPNL_PrimitiveEllipse implements IPNL_Primitive
```
**Implements:** [IPNL\_Primitive](../interfaces/IPNL_Primitive.md)

## Remarks

椭圆图元对象，通过操作类创建或查询获得

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

将本地属性同步到画布

</td></tr>
<tr><td>

[getState\_CenterX()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：椭圆心 X 坐标

</td></tr>
<tr><td>

[getState\_CenterY()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：椭圆心 Y 坐标

</td></tr>
<tr><td>

[getState\_FillColor()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：填充颜色

</td></tr>
<tr><td>

[getState\_Layer()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：图层

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：是否锁定

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_RadiusX()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：X 轴半径

</td></tr>
<tr><td>

[getState\_RadiusY()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：Y 轴半径

</td></tr>
<tr><td>

[getState\_Rotation()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：旋转角度

</td></tr>
<tr><td>

[getState\_StrokeColor()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：描边颜色

</td></tr>
<tr><td>

[getState\_StrokeWidth()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

获取属性状态：描边宽度

</td></tr>
<tr><td>

[isAsync()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

是否为异步模式

</td></tr>
<tr><td>

[reset()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

重置本地属性为画布当前状态

</td></tr>
<tr><td>

[setState\_CenterX(centerX)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：椭圆心 X 坐标

</td></tr>
<tr><td>

[setState\_CenterY(centerY)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：椭圆心 Y 坐标

</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：填充颜色

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：图层

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：是否锁定

</td></tr>
<tr><td>

[setState\_RadiusX(radiusX)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：X 轴半径

</td></tr>
<tr><td>

[setState\_RadiusY(radiusY)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：Y 轴半径

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：旋转角度

</td></tr>
<tr><td>

[setState\_StrokeColor(strokeColor)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：描边颜色

</td></tr>
<tr><td>

[setState\_StrokeWidth(strokeWidth)](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

设置属性状态：描边宽度

</td></tr>
<tr><td>

[toAsync()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

切换为异步模式

</td></tr>
<tr><td>

[toSync()](./IPNL_PrimitiveEllipse.md)

</td><td>

</td><td>

切换为同步模式

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPNL\_PrimitiveEllipse.done() method

将本地属性同步到画布

## Signature

```typescript
function done(): Promise<IPNL_PrimitiveEllipse>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)<!-- -->&gt;

图元对象

### getstate_centerx

# IPNL\_PrimitiveEllipse.getState\_CenterX() method

获取属性状态：椭圆心 X 坐标

## Signature

```typescript
function getState_CenterX(): number;
```

## Returns

number

椭圆心 X 坐标（px）

### getstate_centery

# IPNL\_PrimitiveEllipse.getState\_CenterY() method

获取属性状态：椭圆心 Y 坐标

## Signature

```typescript
function getState_CenterY(): number;
```

## Returns

number

椭圆心 Y 坐标（px，向上为正）

### getstate_fillcolor

# IPNL\_PrimitiveEllipse.getState\_FillColor() method

获取属性状态：填充颜色

## Signature

```typescript
function getState_FillColor(): string | undefined;
```

## Returns

string \| undefined

填充颜色，无填充返回 `undefined`

### getstate_layer

# IPNL\_PrimitiveEllipse.getState\_Layer() method

获取属性状态：图层

## Signature

```typescript
function getState_Layer(): EPNL_LayerId | undefined;
```

## Returns

[EPNL\_LayerId](../enums/EPNL_LayerId.md) \| undefined

图层 ID

### getstate_primitiveid

# IPNL\_PrimitiveEllipse.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

图元 ID

### getstate_primitivelock

# IPNL\_PrimitiveEllipse.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

是否锁定

### getstate_primitivetype

# IPNL\_PrimitiveEllipse.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
function getState_PrimitiveType(): EPNL_PrimitiveType;
```

## Returns

[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

图元类型

### getstate_radiusx

# IPNL\_PrimitiveEllipse.getState\_RadiusX() method

获取属性状态：X 轴半径

## Signature

```typescript
function getState_RadiusX(): number;
```

## Returns

number

X 轴半径（px）

### getstate_radiusy

# IPNL\_PrimitiveEllipse.getState\_RadiusY() method

获取属性状态：Y 轴半径

## Signature

```typescript
function getState_RadiusY(): number;
```

## Returns

number

Y 轴半径（px）

### getstate_rotation

# IPNL\_PrimitiveEllipse.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
function getState_Rotation(): number | undefined;
```

## Returns

number \| undefined

旋转角度（度，绕椭圆心逆时针为正），未设置返回 `undefined`

### getstate_strokecolor

# IPNL\_PrimitiveEllipse.getState\_StrokeColor() method

获取属性状态：描边颜色

## Signature

```typescript
function getState_StrokeColor(): string | undefined;
```

## Returns

string \| undefined

描边颜色，未设置返回 `undefined`

### getstate_strokewidth

# IPNL\_PrimitiveEllipse.getState\_StrokeWidth() method

获取属性状态：描边宽度

## Signature

```typescript
function getState_StrokeWidth(): number | undefined;
```

## Returns

number \| undefined

描边宽度（px），未设置返回 `undefined`

### isasync

# IPNL\_PrimitiveEllipse.isAsync() method

是否为异步模式

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

异步模式返回 `true`

### reset

# IPNL\_PrimitiveEllipse.reset() method

重置本地属性为画布当前状态

## Signature

```typescript
function reset(): Promise<IPNL_PrimitiveEllipse>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)<!-- -->&gt;

图元对象

### setstate_centerx

# IPNL\_PrimitiveEllipse.setState\_CenterX() method

设置属性状态：椭圆心 X 坐标

## Signature

```typescript
function setState_CenterX(centerX: number): IPNL_PrimitiveEllipse;
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

椭圆心 X 坐标（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_centery

# IPNL\_PrimitiveEllipse.setState\_CenterY() method

设置属性状态：椭圆心 Y 坐标

## Signature

```typescript
function setState_CenterY(centerY: number): IPNL_PrimitiveEllipse;
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

centerY

</td><td>

number

</td><td>

椭圆心 Y 坐标（px，向上为正）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_fillcolor

# IPNL\_PrimitiveEllipse.setState\_FillColor() method

设置属性状态：填充颜色

## Signature

```typescript
function setState_FillColor(fillColor?: string): IPNL_PrimitiveEllipse;
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

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_layer

# IPNL\_PrimitiveEllipse.setState\_Layer() method

设置属性状态：图层

## Signature

```typescript
function setState_Layer(layer?: EPNL_LayerId): IPNL_PrimitiveEllipse;
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

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_primitivelock

# IPNL\_PrimitiveEllipse.setState\_PrimitiveLock() method

设置属性状态：是否锁定

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPNL_PrimitiveEllipse;
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

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_radiusx

# IPNL\_PrimitiveEllipse.setState\_RadiusX() method

设置属性状态：X 轴半径

## Signature

```typescript
function setState_RadiusX(radiusX: number): IPNL_PrimitiveEllipse;
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

radiusX

</td><td>

number

</td><td>

X 轴半径（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_radiusy

# IPNL\_PrimitiveEllipse.setState\_RadiusY() method

设置属性状态：Y 轴半径

## Signature

```typescript
function setState_RadiusY(radiusY: number): IPNL_PrimitiveEllipse;
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

radiusY

</td><td>

number

</td><td>

Y 轴半径（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_rotation

# IPNL\_PrimitiveEllipse.setState\_Rotation() method

设置属性状态：旋转角度

## Signature

```typescript
function setState_Rotation(rotation?: number): IPNL_PrimitiveEllipse;
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

rotation

</td><td>

number

</td><td>

_(Optional)_ 旋转角度（度，绕椭圆心逆时针为正）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_strokecolor

# IPNL\_PrimitiveEllipse.setState\_StrokeColor() method

设置属性状态：描边颜色

## Signature

```typescript
function setState_StrokeColor(strokeColor?: string): IPNL_PrimitiveEllipse;
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

strokeColor

</td><td>

string

</td><td>

_(Optional)_ 描边颜色

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### setstate_strokewidth

# IPNL\_PrimitiveEllipse.setState\_StrokeWidth() method

设置属性状态：描边宽度

## Signature

```typescript
function setState_StrokeWidth(strokeWidth?: number): IPNL_PrimitiveEllipse;
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

strokeWidth

</td><td>

number

</td><td>

_(Optional)_ 描边宽度（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### toasync

# IPNL\_PrimitiveEllipse.toAsync() method

切换为异步模式

## Signature

```typescript
function toAsync(): IPNL_PrimitiveEllipse;
```

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

### tosync

# IPNL\_PrimitiveEllipse.toSync() method

切换为同步模式

## Signature

```typescript
function toSync(): IPNL_PrimitiveEllipse;
```

## Returns

[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

图元对象

## Remarks

切换前会把本地未提交的修改一次性提交到画布
