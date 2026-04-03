# ISCH\_PrimitiveRectangle class

矩形图元

## 签名

```typescript
declare class ISCH_PrimitiveRectangle implements ISCH_Primitive 
```
**实现自：**[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): ISCH_PrimitiveRectangle;
```


## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### getstate_color

# ISCH\_PrimitiveRectangle.getState\_Color() method

获取属性状态：边框颜色

## 签名

```typescript
getState_Color(): string | null;
```


## 返回值

string \| null

边框颜色

### getstate_cornerradius

# ISCH\_PrimitiveRectangle.getState\_CornerRadius() method

获取属性状态：圆角半径

## 签名

```typescript
getState_CornerRadius(): number;
```


## 返回值

number

圆角半径

### getstate_fillcolor

# ISCH\_PrimitiveRectangle.getState\_FillColor() method

获取属性状态：填充颜色

## 签名

```typescript
getState_FillColor(): string | null;
```


## 返回值

string \| null

填充颜色

### getstate_fillstyle

# ISCH\_PrimitiveRectangle.getState\_FillStyle() method

获取属性状态：填充样式

## 签名

```typescript
getState_FillStyle(): ESCH_PrimitiveFillStyle | null;
```


## 返回值

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null

填充样式

### getstate_height

# ISCH\_PrimitiveRectangle.getState\_Height() method

获取属性状态：高

## 签名

```typescript
getState_Height(): number;
```


## 返回值

number

高

### getstate_linetype

# ISCH\_PrimitiveRectangle.getState\_LineType() method

获取属性状态：线型

## 签名

```typescript
getState_LineType(): ESCH_PrimitiveLineType | null;
```


## 返回值

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

线型

### getstate_linewidth

# ISCH\_PrimitiveRectangle.getState\_LineWidth() method

获取属性状态：线宽

## 签名

```typescript
getState_LineWidth(): number | null;
```


## 返回值

number \| null

线宽

### getstate_primitiveid

# ISCH\_PrimitiveRectangle.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveRectangle.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## 返回值

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_rotation

# ISCH\_PrimitiveRectangle.getState\_Rotation() method

获取属性状态：旋转角度

## 签名

```typescript
getState_Rotation(): number;
```


## 返回值

number

旋转角度

### getstate_topleftx

# ISCH\_PrimitiveRectangle.getState\_TopLeftX() method

获取属性状态：左上点 X

## 签名

```typescript
getState_TopLeftX(): number;
```


## 返回值

number

左上点 X

### getstate_toplefty

# ISCH\_PrimitiveRectangle.getState\_TopLeftY() method

获取属性状态：左上点 Y

## 签名

```typescript
getState_TopLeftY(): number;
```


## 返回值

number

左上点 Y

### getstate_width

# ISCH\_PrimitiveRectangle.getState\_Width() method

获取属性状态：宽

## 签名

```typescript
getState_Width(): number;
```


## 返回值

number

宽

### isasync

# ISCH\_PrimitiveRectangle.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# ISCH\_PrimitiveRectangle.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<ISCH_PrimitiveRectangle>;
```


## 返回值

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;

矩形图元对象

### setstate_color

# ISCH\_PrimitiveRectangle.setState\_Color() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：边框颜色

## 签名

```typescript
setState_Color(color: string | null): ISCH_PrimitiveRectangle;
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

color


</td><td>

string \| null


</td><td>

边框颜色


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_cornerradius

# ISCH\_PrimitiveRectangle.setState\_CornerRadius() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：圆角半径

## 签名

```typescript
setState_CornerRadius(cornerRadius: number): ISCH_PrimitiveRectangle;
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

cornerRadius


</td><td>

number


</td><td>

圆角半径


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_fillcolor

# ISCH\_PrimitiveRectangle.setState\_FillColor() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：填充颜色

## 签名

```typescript
setState_FillColor(fillColor: string | null): ISCH_PrimitiveRectangle;
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

fillColor


</td><td>

string \| null


</td><td>

填充颜色


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_fillstyle

# ISCH\_PrimitiveRectangle.setState\_FillStyle() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：填充样式

## 签名

```typescript
setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveRectangle;
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

fillStyle


</td><td>

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null


</td><td>

填充样式


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_height

# ISCH\_PrimitiveRectangle.setState\_Height() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：高

## 签名

```typescript
setState_Height(height: number): ISCH_PrimitiveRectangle;
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

height


</td><td>

number


</td><td>

高


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_linetype

# ISCH\_PrimitiveRectangle.setState\_LineType() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线型

## 签名

```typescript
setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveRectangle;
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

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

线型


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_linewidth

# ISCH\_PrimitiveRectangle.setState\_LineWidth() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线宽

## 签名

```typescript
setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveRectangle;
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

number \| null


</td><td>

线宽


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_rotation

# ISCH\_PrimitiveRectangle.setState\_Rotation() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：旋转角度

## 签名

```typescript
setState_Rotation(rotation: number): ISCH_PrimitiveRectangle;
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

rotation


</td><td>

number


</td><td>

旋转角度


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_topleftx

# ISCH\_PrimitiveRectangle.setState\_TopLeftX() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：左上点 X

## 签名

```typescript
setState_TopLeftX(topLeftX: number): ISCH_PrimitiveRectangle;
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

topLeftX


</td><td>

number


</td><td>

左上点 X


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_toplefty

# ISCH\_PrimitiveRectangle.setState\_TopLeftY() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：左上点 Y

## 签名

```typescript
setState_TopLeftY(topLeftY: number): ISCH_PrimitiveRectangle;
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

topLeftY


</td><td>

number


</td><td>

左上点 Y


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### setstate_width

# ISCH\_PrimitiveRectangle.setState\_Width() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：宽

## 签名

```typescript
setState_Width(width: number): ISCH_PrimitiveRectangle;
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

width


</td><td>

number


</td><td>

宽


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### toasync

# ISCH\_PrimitiveRectangle.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): ISCH_PrimitiveRectangle;
```


## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象

### tosync

# ISCH\_PrimitiveRectangle.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): ISCH_PrimitiveRectangle;
```


## 返回值

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

矩形图元对象
