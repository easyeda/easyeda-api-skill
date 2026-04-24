# ISCH\_PrimitiveRectangle class

矩形图元

## Signature

```typescript
declare class ISCH_PrimitiveRectangle implements ISCH_Primitive 
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

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

[done()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：边框颜色


</td></tr>
<tr><td>

[getState\_CornerRadius()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：圆角半径


</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：填充颜色


</td></tr>
<tr><td>

[getState\_FillStyle()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：填充样式


</td></tr>
<tr><td>

[getState\_Height()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：高


</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：线型


</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_TopLeftX()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：左上点 X


</td></tr>
<tr><td>

[getState\_TopLeftY()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：左上点 Y


</td></tr>
<tr><td>

[getState\_Width()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取属性状态：宽


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：边框颜色


</td></tr>
<tr><td>

[setState\_CornerRadius(cornerRadius)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：圆角半径


</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：填充颜色


</td></tr>
<tr><td>

[setState\_FillStyle(fillStyle)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：填充样式


</td></tr>
<tr><td>

[setState\_Height(height)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：高


</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线型


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_TopLeftX(topLeftX)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：左上点 X


</td></tr>
<tr><td>

[setState\_TopLeftY(topLeftY)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：左上点 Y


</td></tr>
<tr><td>

[setState\_Width(width)](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：宽


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveRectangle.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveRectangle.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): ISCH_PrimitiveRectangle;
```


## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### getstate_color

# ISCH\_PrimitiveRectangle.getState\_Color() method

获取属性状态：边框颜色

## Signature

```typescript
getState_Color(): string | null;
```


## Returns

string \| null

边框颜色

### getstate_cornerradius

# ISCH\_PrimitiveRectangle.getState\_CornerRadius() method

获取属性状态：圆角半径

## Signature

```typescript
getState_CornerRadius(): number;
```


## Returns

number

圆角半径

### getstate_fillcolor

# ISCH\_PrimitiveRectangle.getState\_FillColor() method

获取属性状态：填充颜色

## Signature

```typescript
getState_FillColor(): string | null;
```


## Returns

string \| null

填充颜色

### getstate_fillstyle

# ISCH\_PrimitiveRectangle.getState\_FillStyle() method

获取属性状态：填充样式

## Signature

```typescript
getState_FillStyle(): ESCH_PrimitiveFillStyle | null;
```


## Returns

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null

填充样式

### getstate_height

# ISCH\_PrimitiveRectangle.getState\_Height() method

获取属性状态：高

## Signature

```typescript
getState_Height(): number;
```


## Returns

number

高

### getstate_linetype

# ISCH\_PrimitiveRectangle.getState\_LineType() method

获取属性状态：线型

## Signature

```typescript
getState_LineType(): ESCH_PrimitiveLineType | null;
```


## Returns

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

线型

### getstate_linewidth

# ISCH\_PrimitiveRectangle.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number | null;
```


## Returns

number \| null

线宽

### getstate_primitiveid

# ISCH\_PrimitiveRectangle.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveRectangle.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_rotation

# ISCH\_PrimitiveRectangle.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
getState_Rotation(): number;
```


## Returns

number

旋转角度

### getstate_topleftx

# ISCH\_PrimitiveRectangle.getState\_TopLeftX() method

获取属性状态：左上点 X

## Signature

```typescript
getState_TopLeftX(): number;
```


## Returns

number

左上点 X

### getstate_toplefty

# ISCH\_PrimitiveRectangle.getState\_TopLeftY() method

获取属性状态：左上点 Y

## Signature

```typescript
getState_TopLeftY(): number;
```


## Returns

number

左上点 Y

### getstate_width

# ISCH\_PrimitiveRectangle.getState\_Width() method

获取属性状态：宽

## Signature

```typescript
getState_Width(): number;
```


## Returns

number

宽

### isasync

# ISCH\_PrimitiveRectangle.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# ISCH\_PrimitiveRectangle.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<ISCH_PrimitiveRectangle>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;

矩形图元对象

### setstate_color

# ISCH\_PrimitiveRectangle.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：边框颜色

## Signature

```typescript
setState_Color(color: string | null): ISCH_PrimitiveRectangle;
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

color


</td><td>

string \| null


</td><td>

边框颜色


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_cornerradius

# ISCH\_PrimitiveRectangle.setState\_CornerRadius() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：圆角半径

## Signature

```typescript
setState_CornerRadius(cornerRadius: number): ISCH_PrimitiveRectangle;
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

cornerRadius


</td><td>

number


</td><td>

圆角半径


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_fillcolor

# ISCH\_PrimitiveRectangle.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：填充颜色

## Signature

```typescript
setState_FillColor(fillColor: string | null): ISCH_PrimitiveRectangle;
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

string \| null


</td><td>

填充颜色


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_fillstyle

# ISCH\_PrimitiveRectangle.setState\_FillStyle() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：填充样式

## Signature

```typescript
setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveRectangle;
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

fillStyle


</td><td>

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null


</td><td>

填充样式


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_height

# ISCH\_PrimitiveRectangle.setState\_Height() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：高

## Signature

```typescript
setState_Height(height: number): ISCH_PrimitiveRectangle;
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

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_linetype

# ISCH\_PrimitiveRectangle.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线型

## Signature

```typescript
setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveRectangle;
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

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

线型


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_linewidth

# ISCH\_PrimitiveRectangle.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveRectangle;
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

number \| null


</td><td>

线宽


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_rotation

# ISCH\_PrimitiveRectangle.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：旋转角度

## Signature

```typescript
setState_Rotation(rotation: number): ISCH_PrimitiveRectangle;
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

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_topleftx

# ISCH\_PrimitiveRectangle.setState\_TopLeftX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：左上点 X

## Signature

```typescript
setState_TopLeftX(topLeftX: number): ISCH_PrimitiveRectangle;
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

topLeftX


</td><td>

number


</td><td>

左上点 X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_toplefty

# ISCH\_PrimitiveRectangle.setState\_TopLeftY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：左上点 Y

## Signature

```typescript
setState_TopLeftY(topLeftY: number): ISCH_PrimitiveRectangle;
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

topLeftY


</td><td>

number


</td><td>

左上点 Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_width

# ISCH\_PrimitiveRectangle.setState\_Width() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：宽

## Signature

```typescript
setState_Width(width: number): ISCH_PrimitiveRectangle;
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

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### toasync

# ISCH\_PrimitiveRectangle.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): ISCH_PrimitiveRectangle;
```


## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### tosync

# ISCH\_PrimitiveRectangle.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): ISCH_PrimitiveRectangle;
```


## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象
