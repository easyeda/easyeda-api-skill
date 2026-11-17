# IPNL\_PrimitiveImage class

图片图元

## Signature

```typescript
class IPNL_PrimitiveImage implements IPNL_Primitive
```
**Implements:** [IPNL\_Primitive](../interfaces/IPNL_Primitive.md)

## Remarks

图片图元对象，通过操作类创建或查询获得；查询得到的图元可能不携带原始图片文件，此时 `getState_ImageFile` 返回 `undefined`

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

将本地属性同步到画布

</td></tr>
<tr><td>

[getState\_Height()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：高度

</td></tr>
<tr><td>

[getState\_ImageFile()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：图片文件

</td></tr>
<tr><td>

[getState\_Layer()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：图层

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：是否锁定

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_Rotation()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：旋转角度

</td></tr>
<tr><td>

[getState\_Width()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：宽度

</td></tr>
<tr><td>

[getState\_X()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：左上角 X 坐标

</td></tr>
<tr><td>

[getState\_Y()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

获取属性状态：左上角 Y 坐标

</td></tr>
<tr><td>

[isAsync()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

是否为异步模式

</td></tr>
<tr><td>

[reset()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

重置本地属性为画布当前状态

</td></tr>
<tr><td>

[setState\_Height(height)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：高度

</td></tr>
<tr><td>

[setState\_ImageFile(imageFile)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：图片文件

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：图层

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：是否锁定

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：旋转角度

</td></tr>
<tr><td>

[setState\_Width(width)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：宽度

</td></tr>
<tr><td>

[setState\_X(x)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：左上角 X 坐标

</td></tr>
<tr><td>

[setState\_Y(y)](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

设置属性状态：左上角 Y 坐标

</td></tr>
<tr><td>

[toAsync()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

切换为异步模式

</td></tr>
<tr><td>

[toSync()](./IPNL_PrimitiveImage.md)

</td><td>

</td><td>

切换为同步模式

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPNL\_PrimitiveImage.done() method

将本地属性同步到画布

## Signature

```typescript
function done(): Promise<IPNL_PrimitiveImage>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)<!-- -->&gt;

图元对象

### getstate_height

# IPNL\_PrimitiveImage.getState\_Height() method

获取属性状态：高度

## Signature

```typescript
function getState_Height(): number;
```

## Returns

number

高度（px）

### getstate_imagefile

# IPNL\_PrimitiveImage.getState\_ImageFile() method

获取属性状态：图片文件

## Signature

```typescript
function getState_ImageFile(): File | undefined;
```

## Returns

File \| undefined

图片文件，查询得到的图元未携带原始文件时返回 `undefined`

### getstate_layer

# IPNL\_PrimitiveImage.getState\_Layer() method

获取属性状态：图层

## Signature

```typescript
function getState_Layer(): EPNL_LayerId | undefined;
```

## Returns

[EPNL\_LayerId](../enums/EPNL_LayerId.md) \| undefined

图层 ID

### getstate_primitiveid

# IPNL\_PrimitiveImage.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

图元 ID

### getstate_primitivelock

# IPNL\_PrimitiveImage.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

是否锁定

### getstate_primitivetype

# IPNL\_PrimitiveImage.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
function getState_PrimitiveType(): EPNL_PrimitiveType;
```

## Returns

[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

图元类型

### getstate_rotation

# IPNL\_PrimitiveImage.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
function getState_Rotation(): number | undefined;
```

## Returns

number \| undefined

旋转角度（度，顺时针为正），未设置返回 `undefined`

### getstate_width

# IPNL\_PrimitiveImage.getState\_Width() method

获取属性状态：宽度

## Signature

```typescript
function getState_Width(): number;
```

## Returns

number

宽度（px）

### getstate_x

# IPNL\_PrimitiveImage.getState\_X() method

获取属性状态：左上角 X 坐标

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

左上角 X 坐标（px）

## Remarks

这是没旋转时的左上角横坐标；图片转过角度后，画面上看到的左上角不是这个点

### getstate_y

# IPNL\_PrimitiveImage.getState\_Y() method

获取属性状态：左上角 Y 坐标

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

左上角 Y 坐标（px，向上为正）

## Remarks

这是没旋转时的左上角纵坐标；图片转过角度后，画面上看到的左上角不是这个点

### isasync

# IPNL\_PrimitiveImage.isAsync() method

是否为异步模式

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

异步模式返回 `true`

### reset

# IPNL\_PrimitiveImage.reset() method

重置本地属性为画布当前状态

## Signature

```typescript
function reset(): Promise<IPNL_PrimitiveImage>;
```

## Returns

Promise&lt;[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)<!-- -->&gt;

图元对象

### setstate_height

# IPNL\_PrimitiveImage.setState\_Height() method

设置属性状态：高度

## Signature

```typescript
function setState_Height(height: number): IPNL_PrimitiveImage;
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

height

</td><td>

number

</td><td>

高度（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### setstate_imagefile

# IPNL\_PrimitiveImage.setState\_ImageFile() method

设置属性状态：图片文件

## Signature

```typescript
function setState_ImageFile(imageFile?: File): IPNL_PrimitiveImage;
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

imageFile

</td><td>

File

</td><td>

_(Optional)_ 图片文件

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### setstate_layer

# IPNL\_PrimitiveImage.setState\_Layer() method

设置属性状态：图层

## Signature

```typescript
function setState_Layer(layer?: EPNL_LayerId): IPNL_PrimitiveImage;
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

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### setstate_primitivelock

# IPNL\_PrimitiveImage.setState\_PrimitiveLock() method

设置属性状态：是否锁定

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPNL_PrimitiveImage;
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

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### setstate_rotation

# IPNL\_PrimitiveImage.setState\_Rotation() method

设置属性状态：旋转角度

## Signature

```typescript
function setState_Rotation(rotation?: number): IPNL_PrimitiveImage;
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

_(Optional)_ 旋转角度（度，顺时针为正）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### setstate_width

# IPNL\_PrimitiveImage.setState\_Width() method

设置属性状态：宽度

## Signature

```typescript
function setState_Width(width: number): IPNL_PrimitiveImage;
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

width

</td><td>

number

</td><td>

宽度（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### setstate_x

# IPNL\_PrimitiveImage.setState\_X() method

设置属性状态：左上角 X 坐标

## Signature

```typescript
function setState_X(x: number): IPNL_PrimitiveImage;
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

左上角 X 坐标（px）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### setstate_y

# IPNL\_PrimitiveImage.setState\_Y() method

设置属性状态：左上角 Y 坐标

## Signature

```typescript
function setState_Y(y: number): IPNL_PrimitiveImage;
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

左上角 Y 坐标（px，向上为正）

</td></tr>
</tbody></table>

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### toasync

# IPNL\_PrimitiveImage.toAsync() method

切换为异步模式

## Signature

```typescript
function toAsync(): IPNL_PrimitiveImage;
```

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

### tosync

# IPNL\_PrimitiveImage.toSync() method

切换为同步模式

## Signature

```typescript
function toSync(): IPNL_PrimitiveImage;
```

## Returns

[IPNL\_PrimitiveImage](./IPNL_PrimitiveImage.md)

图元对象

## Remarks

切换前会把本地未提交的修改一次性提交到画布
