# IPNL\_PrimitivePath class

复合路径图元

## Signature

```typescript
class IPNL_PrimitivePath implements IPNL_Primitive
```
**Implements:** [IPNL\_Primitive](../interfaces/IPNL_Primitive.md)

## Remarks

复合路径图元对象，通过操作类创建或查询获得；数据来源可能是点集或 SVG 路径字符串，二者同一时间只会使用其中一种。闭合状态随表示形式走：点集形式看 `close`<!-- -->，SVG 路径字符串形式看 `d` 里的 `Z` 指令

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

将本地属性同步到画布

</td></tr>
<tr><td>

[getState\_Close()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：是否闭合

</td></tr>
<tr><td>

[getState\_FillColor()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：填充颜色

</td></tr>
<tr><td>

[getState\_Layer()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：图层

</td></tr>
<tr><td>

[getState\_PathData()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：SVG 路径字符串

</td></tr>
<tr><td>

[getState\_Points()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：点坐标数组

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：是否锁定

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_Rotation()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：旋转角度

</td></tr>
<tr><td>

[getState\_StrokeColor()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：描边颜色

</td></tr>
<tr><td>

[getState\_StrokeWidth()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

获取属性状态：描边宽度

</td></tr>
<tr><td>

[isAsync()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

是否为异步模式

</td></tr>
<tr><td>

[reset()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

重置本地属性为画布当前状态

</td></tr>
<tr><td>

[setState\_Close(close)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：是否闭合

</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：填充颜色

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：图层

</td></tr>
<tr><td>

[setState\_PathData(pathData)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：SVG 路径字符串

</td></tr>
<tr><td>

[setState\_Points(points)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：点坐标数组

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：是否锁定

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：旋转角度

</td></tr>
<tr><td>

[setState\_StrokeColor(strokeColor)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：描边颜色

</td></tr>
<tr><td>

[setState\_StrokeWidth(strokeWidth)](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

设置属性状态：描边宽度

</td></tr>
<tr><td>

[toAsync()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

切换为异步模式

</td></tr>
<tr><td>

[toSync()](./IPNL_PrimitivePath.md)

</td><td>

</td><td>

切换为同步模式

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPNL\_PrimitivePath.done() method

将本地属性同步到画布

## Signature

```typescript
function done(): Promise<IPNL_PrimitivePath>;
```

## Returns

Promise&lt;[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)<!-- -->&gt;

图元对象

### getstate_close

# IPNL\_PrimitivePath.getState\_Close() method

获取属性状态：是否闭合

## Signature

```typescript
function getState_Close(): boolean | undefined;
```

## Returns

boolean \| undefined

是否闭合；由 SVG 路径字符串创建的图元返回 `undefined`<!-- -->，闭合状态在 `d` 自身的 `Z` 指令里

### getstate_fillcolor

# IPNL\_PrimitivePath.getState\_FillColor() method

获取属性状态：填充颜色

## Signature

```typescript
function getState_FillColor(): string | undefined;
```

## Returns

string \| undefined

填充颜色，无填充返回 `undefined`

### getstate_layer

# IPNL\_PrimitivePath.getState\_Layer() method

获取属性状态：图层

## Signature

```typescript
function getState_Layer(): EPNL_LayerId | undefined;
```

## Returns

[EPNL\_LayerId](../enums/EPNL_LayerId.md) \| undefined

图层 ID

### getstate_pathdata

# IPNL\_PrimitivePath.getState\_PathData() method

获取属性状态：SVG 路径字符串

## Signature

```typescript
function getState_PathData(): string | undefined;
```

## Returns

string \| undefined

SVG 路径字符串（`d`<!-- -->），未设置返回 `undefined`

### getstate_points

# IPNL\_PrimitivePath.getState\_Points() method

获取属性状态：点坐标数组

## Signature

```typescript
function getState_Points(): Array<number>;
```

## Returns

Array&lt;number&gt;

点坐标数组（\[x1, y1, x2, y2, ...\]，扁平存储）；由 SVG 路径字符串创建的图元返回空数组

### getstate_primitiveid

# IPNL\_PrimitivePath.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

图元 ID

### getstate_primitivelock

# IPNL\_PrimitivePath.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

是否锁定

### getstate_primitivetype

# IPNL\_PrimitivePath.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
function getState_PrimitiveType(): EPNL_PrimitiveType;
```

## Returns

[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

图元类型

### getstate_rotation

# IPNL\_PrimitivePath.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
function getState_Rotation(): number | undefined;
```

## Returns

number \| undefined

旋转角度（度，逆时针为正），未设置返回 `undefined`

### getstate_strokecolor

# IPNL\_PrimitivePath.getState\_StrokeColor() method

获取属性状态：描边颜色

## Signature

```typescript
function getState_StrokeColor(): string | undefined;
```

## Returns

string \| undefined

描边颜色，未设置返回 `undefined`

### getstate_strokewidth

# IPNL\_PrimitivePath.getState\_StrokeWidth() method

获取属性状态：描边宽度

## Signature

```typescript
function getState_StrokeWidth(): number | undefined;
```

## Returns

number \| undefined

描边宽度（px），未设置返回 `undefined`

### isasync

# IPNL\_PrimitivePath.isAsync() method

是否为异步模式

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

异步模式返回 `true`

### reset

# IPNL\_PrimitivePath.reset() method

重置本地属性为画布当前状态

## Signature

```typescript
function reset(): Promise<IPNL_PrimitivePath>;
```

## Returns

Promise&lt;[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)<!-- -->&gt;

图元对象

### setstate_close

# IPNL\_PrimitivePath.setState\_Close() method

设置属性状态：是否闭合

## Signature

```typescript
function setState_Close(close?: boolean): IPNL_PrimitivePath;
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

close

</td><td>

boolean

</td><td>

_(Optional)_ 是否闭合，`true` 闭合为多边形，`false` 为开放折线

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_fillcolor

# IPNL\_PrimitivePath.setState\_FillColor() method

设置属性状态：填充颜色

## Signature

```typescript
function setState_FillColor(fillColor?: string): IPNL_PrimitivePath;
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

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_layer

# IPNL\_PrimitivePath.setState\_Layer() method

设置属性状态：图层

## Signature

```typescript
function setState_Layer(layer?: EPNL_LayerId): IPNL_PrimitivePath;
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

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_pathdata

# IPNL\_PrimitivePath.setState\_PathData() method

设置属性状态：SVG 路径字符串

## Signature

```typescript
function setState_PathData(pathData?: string): IPNL_PrimitivePath;
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

pathData

</td><td>

string

</td><td>

_(Optional)_ SVG 路径字符串（`d`<!-- -->）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_points

# IPNL\_PrimitivePath.setState\_Points() method

设置属性状态：点坐标数组

## Signature

```typescript
function setState_Points(points: Array<number>): IPNL_PrimitivePath;
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

points

</td><td>

Array&lt;number&gt;

</td><td>

点坐标数组（\[x1, y1, x2, y2, ...\]，扁平存储，长度须为偶数）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_primitivelock

# IPNL\_PrimitivePath.setState\_PrimitiveLock() method

设置属性状态：是否锁定

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPNL_PrimitivePath;
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

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_rotation

# IPNL\_PrimitivePath.setState\_Rotation() method

设置属性状态：旋转角度

## Signature

```typescript
function setState_Rotation(rotation?: number): IPNL_PrimitivePath;
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

_(Optional)_ 旋转角度（度，逆时针为正）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_strokecolor

# IPNL\_PrimitivePath.setState\_StrokeColor() method

设置属性状态：描边颜色

## Signature

```typescript
function setState_StrokeColor(strokeColor?: string): IPNL_PrimitivePath;
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

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### setstate_strokewidth

# IPNL\_PrimitivePath.setState\_StrokeWidth() method

设置属性状态：描边宽度

## Signature

```typescript
function setState_StrokeWidth(strokeWidth?: number): IPNL_PrimitivePath;
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

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### toasync

# IPNL\_PrimitivePath.toAsync() method

切换为异步模式

## Signature

```typescript
function toAsync(): IPNL_PrimitivePath;
```

## Returns

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

### tosync

# IPNL\_PrimitivePath.toSync() method

切换为同步模式

## Signature

```typescript
function toSync(): IPNL_PrimitivePath;
```

## Returns

[IPNL\_PrimitivePath](./IPNL_PrimitivePath.md)

图元对象

## Remarks

切换前会把本地未提交的修改一次性提交到画布
