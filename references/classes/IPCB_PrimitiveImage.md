# IPCB\_PrimitiveImage class

图像图元

## Signature

```typescript
declare class IPCB_PrimitiveImage implements IPCB_Primitive 
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

[done()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：图像源数据（复杂多边形）


</td></tr>
<tr><td>

[getState\_Height()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：高


</td></tr>
<tr><td>

[getState\_HorizonMirror()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：是否水平镜像


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_Width()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：宽


</td></tr>
<tr><td>

[getState\_X()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：BBox 左上点坐标 X


</td></tr>
<tr><td>

[getState\_Y()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

获取属性状态：BBox 左上点坐标 Y


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_Height(height)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：高


</td></tr>
<tr><td>

[setState\_HorizonMirror(horizonMirror)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否水平镜像


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_Width(width)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：宽


</td></tr>
<tr><td>

[setState\_X(x)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：BBox 左上点坐标 X


</td></tr>
<tr><td>

[setState\_Y(y)](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：BBox 左上点坐标 Y


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveImage.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveImage.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<IPCB_PrimitiveImage>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;

图像图元对象

### getstate_complexpolygon

# IPCB\_PrimitiveImage.getState\_ComplexPolygon() method

获取属性状态：图像源数据（复杂多边形）

## Signature

```typescript
getState_ComplexPolygon(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;
```


## Returns

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

图像源数据（复杂多边形）

### getstate_height

# IPCB\_PrimitiveImage.getState\_Height() method

获取属性状态：高

## Signature

```typescript
getState_Height(): number;
```


## Returns

number

高

### getstate_horizonmirror

# IPCB\_PrimitiveImage.getState\_HorizonMirror() method

获取属性状态：是否水平镜像

## Signature

```typescript
getState_HorizonMirror(): boolean;
```


## Returns

boolean

是否水平镜像

### getstate_layer

# IPCB\_PrimitiveImage.getState\_Layer() method

获取属性状态：层

## Signature

```typescript
getState_Layer(): TPCB_LayersOfImage;
```


## Returns

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)

层

### getstate_primitiveid

# IPCB\_PrimitiveImage.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveImage.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
getState_PrimitiveLock(): boolean;
```


## Returns

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveImage.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_rotation

# IPCB\_PrimitiveImage.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
getState_Rotation(): number;
```


## Returns

number

旋转角度

### getstate_width

# IPCB\_PrimitiveImage.getState\_Width() method

获取属性状态：宽

## Signature

```typescript
getState_Width(): number;
```


## Returns

number

宽

### getstate_x

# IPCB\_PrimitiveImage.getState\_X() method

获取属性状态：BBox 左上点坐标 X

## Signature

```typescript
getState_X(): number;
```


## Returns

number

BBox 左上点坐标 X

### getstate_y

# IPCB\_PrimitiveImage.getState\_Y() method

获取属性状态：BBox 左上点坐标 Y

## Signature

```typescript
getState_Y(): number;
```


## Returns

number

BBox 左上点坐标 Y

### isasync

# IPCB\_PrimitiveImage.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveImage.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<IPCB_PrimitiveImage>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;

图像图元对象

### setstate_height

# IPCB\_PrimitiveImage.setState\_Height() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：高

## Signature

```typescript
setState_Height(height: number): IPCB_PrimitiveImage;
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

高


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### setstate_horizonmirror

# IPCB\_PrimitiveImage.setState\_HorizonMirror() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否水平镜像

## Signature

```typescript
setState_HorizonMirror(horizonMirror: boolean): IPCB_PrimitiveImage;
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

horizonMirror


</td><td>

boolean


</td><td>

是否水平镜像


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### setstate_layer

# IPCB\_PrimitiveImage.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：层

## Signature

```typescript
setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveImage;
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

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)


</td><td>

层


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### setstate_primitivelock

# IPCB\_PrimitiveImage.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否锁定

## Signature

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveImage;
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

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### setstate_rotation

# IPCB\_PrimitiveImage.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：旋转角度

## Signature

```typescript
setState_Rotation(rotation: number): IPCB_PrimitiveImage;
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

旋转角度


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### setstate_width

# IPCB\_PrimitiveImage.setState\_Width() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：宽

## Signature

```typescript
setState_Width(width: number): IPCB_PrimitiveImage;
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

宽


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### setstate_x

# IPCB\_PrimitiveImage.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：BBox 左上点坐标 X

## Signature

```typescript
setState_X(x: number): IPCB_PrimitiveImage;
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

BBox 左上点坐标 X


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### setstate_y

# IPCB\_PrimitiveImage.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：BBox 左上点坐标 Y

## Signature

```typescript
setState_Y(y: number): IPCB_PrimitiveImage;
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

BBox 左上点坐标 Y


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### toasync

# IPCB\_PrimitiveImage.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): IPCB_PrimitiveImage;
```


## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象

### tosync

# IPCB\_PrimitiveImage.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): IPCB_PrimitiveImage;
```


## Returns

[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)

图像图元对象
