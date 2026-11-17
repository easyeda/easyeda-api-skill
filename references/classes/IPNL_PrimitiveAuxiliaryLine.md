# IPNL\_PrimitiveAuxiliaryLine class

辅助线图元

## Signature

```typescript
class IPNL_PrimitiveAuxiliaryLine implements IPNL_Primitive
```
**Implements:** [IPNL\_Primitive](../interfaces/IPNL_Primitive.md)

## Remarks

辅助线图元对象，通过操作类创建或查询获得

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

将本地属性同步到画布

</td></tr>
<tr><td>

[getState\_Layer()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：图层

</td></tr>
<tr><td>

[getState\_Orientation()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：辅助线方向

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：是否锁定

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_StrokeColor()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：描边颜色

</td></tr>
<tr><td>

[getState\_StrokeStyle()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：描边样式编号

</td></tr>
<tr><td>

[getState\_X()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：中心点 X 坐标

</td></tr>
<tr><td>

[getState\_Y()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

获取属性状态：中心点 Y 坐标

</td></tr>
<tr><td>

[isAsync()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

是否为异步模式

</td></tr>
<tr><td>

[reset()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

重置本地属性为画布当前状态

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

设置属性状态：图层

</td></tr>
<tr><td>

[setState\_Orientation(orientation)](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

设置属性状态：辅助线方向

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

设置属性状态：是否锁定

</td></tr>
<tr><td>

[setState\_StrokeColor(strokeColor)](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

设置属性状态：描边颜色

</td></tr>
<tr><td>

[setState\_StrokeStyle(strokeStyle)](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

设置属性状态：描边样式编号

</td></tr>
<tr><td>

[setState\_X(x)](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

设置属性状态：中心点 X 坐标

</td></tr>
<tr><td>

[setState\_Y(y)](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

设置属性状态：中心点 Y 坐标

</td></tr>
<tr><td>

[toAsync()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

切换为异步模式

</td></tr>
<tr><td>

[toSync()](./IPNL_PrimitiveAuxiliaryLine.md)

</td><td>

</td><td>

切换为同步模式

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPNL\_PrimitiveAuxiliaryLine.done() method

将本地属性同步到画布

## Signature

```typescript
function done(): Promise<IPNL_PrimitiveAuxiliaryLine>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)<!-- -->&gt;

图元对象

### getstate_layer

# IPNL\_PrimitiveAuxiliaryLine.getState\_Layer() method

获取属性状态：图层

## Signature

```typescript
function getState_Layer(): EPNL_LayerId | undefined;
```

## Returns

[EPNL\_LayerId](../enums/EPNL_LayerId.md) \| undefined

图层 ID

### getstate_orientation

# IPNL\_PrimitiveAuxiliaryLine.getState\_Orientation() method

获取属性状态：辅助线方向

## Signature

```typescript
function getState_Orientation(): EPNL_PrimitiveAuxiliaryLineOrientation | undefined;
```

## Returns

[EPNL\_PrimitiveAuxiliaryLineOrientation](../enums/EPNL_PrimitiveAuxiliaryLineOrientation.md) \| undefined

辅助线方向，未设置返回 `undefined`

### getstate_primitiveid

# IPNL\_PrimitiveAuxiliaryLine.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

图元 ID

### getstate_primitivelock

# IPNL\_PrimitiveAuxiliaryLine.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

是否锁定

### getstate_primitivetype

# IPNL\_PrimitiveAuxiliaryLine.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
function getState_PrimitiveType(): EPNL_PrimitiveType;
```

## Returns

[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

图元类型

### getstate_strokecolor

# IPNL\_PrimitiveAuxiliaryLine.getState\_StrokeColor() method

获取属性状态：描边颜色

## Signature

```typescript
function getState_StrokeColor(): string | undefined;
```

## Returns

string \| undefined

描边颜色，未设置返回 `undefined`

### getstate_strokestyle

# IPNL\_PrimitiveAuxiliaryLine.getState\_StrokeStyle() method

获取属性状态：描边样式编号

## Signature

```typescript
function getState_StrokeStyle(): number | undefined;
```

## Returns

number \| undefined

描边样式编号，未设置返回 `undefined`

### getstate_x

# IPNL\_PrimitiveAuxiliaryLine.getState\_X() method

获取属性状态：中心点 X 坐标

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

中心点 X 坐标（px）

### getstate_y

# IPNL\_PrimitiveAuxiliaryLine.getState\_Y() method

获取属性状态：中心点 Y 坐标

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

中心点 Y 坐标（px，向上为正）

### isasync

# IPNL\_PrimitiveAuxiliaryLine.isAsync() method

是否为异步模式

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

异步模式返回 `true`

### reset

# IPNL\_PrimitiveAuxiliaryLine.reset() method

重置本地属性为画布当前状态

## Signature

```typescript
function reset(): Promise<IPNL_PrimitiveAuxiliaryLine>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)<!-- -->&gt;

图元对象

### setstate_layer

# IPNL\_PrimitiveAuxiliaryLine.setState\_Layer() method

设置属性状态：图层

## Signature

```typescript
function setState_Layer(layer?: EPNL_LayerId): IPNL_PrimitiveAuxiliaryLine;
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

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### setstate_orientation

# IPNL\_PrimitiveAuxiliaryLine.setState\_Orientation() method

设置属性状态：辅助线方向

## Signature

```typescript
function setState_Orientation(
	orientation?: EPNL_PrimitiveAuxiliaryLineOrientation,
): IPNL_PrimitiveAuxiliaryLine;
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

orientation

</td><td>

[EPNL\_PrimitiveAuxiliaryLineOrientation](../enums/EPNL_PrimitiveAuxiliaryLineOrientation.md)

</td><td>

_(Optional)_ 辅助线方向

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### setstate_primitivelock

# IPNL\_PrimitiveAuxiliaryLine.setState\_PrimitiveLock() method

设置属性状态：是否锁定

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPNL_PrimitiveAuxiliaryLine;
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

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### setstate_strokecolor

# IPNL\_PrimitiveAuxiliaryLine.setState\_StrokeColor() method

设置属性状态：描边颜色

## Signature

```typescript
function setState_StrokeColor(strokeColor?: string): IPNL_PrimitiveAuxiliaryLine;
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

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### setstate_strokestyle

# IPNL\_PrimitiveAuxiliaryLine.setState\_StrokeStyle() method

设置属性状态：描边样式编号

## Signature

```typescript
function setState_StrokeStyle(strokeStyle?: number): IPNL_PrimitiveAuxiliaryLine;
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

strokeStyle

</td><td>

number

</td><td>

_(Optional)_ 描边样式编号

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### setstate_x

# IPNL\_PrimitiveAuxiliaryLine.setState\_X() method

设置属性状态：中心点 X 坐标

## Signature

```typescript
function setState_X(x: number): IPNL_PrimitiveAuxiliaryLine;
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

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### setstate_y

# IPNL\_PrimitiveAuxiliaryLine.setState\_Y() method

设置属性状态：中心点 Y 坐标

## Signature

```typescript
function setState_Y(y: number): IPNL_PrimitiveAuxiliaryLine;
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

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### toasync

# IPNL\_PrimitiveAuxiliaryLine.toAsync() method

切换为异步模式

## Signature

```typescript
function toAsync(): IPNL_PrimitiveAuxiliaryLine;
```

## Returns

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

### tosync

# IPNL\_PrimitiveAuxiliaryLine.toSync() method

切换为同步模式

## Signature

```typescript
function toSync(): IPNL_PrimitiveAuxiliaryLine;
```

## Returns

[IPNL\_PrimitiveAuxiliaryLine](./IPNL_PrimitiveAuxiliaryLine.md)

图元对象

## Remarks

切换前会把本地未提交的修改一次性提交到画布
