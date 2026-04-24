# ISCH\_PrimitiveCircle class

圆图元

## Signature

```typescript
declare class ISCH_PrimitiveCircle implements ISCH_Primitive 
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

[done()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_CenterX()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：圆心 X


</td></tr>
<tr><td>

[getState\_CenterY()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：圆心 Y


</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：颜色


</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：填充颜色


</td></tr>
<tr><td>

[getState\_FillStyle()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：填充样式


</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：线型


</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Radius()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

获取属性状态：半径


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_CenterX(centerX)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：圆心 X


</td></tr>
<tr><td>

[setState\_CenterY(centerY)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：圆心 Y


</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：颜色


</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：填充颜色


</td></tr>
<tr><td>

[setState\_FillStyle(fillStyle)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：填充样式


</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线型


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_Radius(radius)](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：半径


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveCircle.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveCircle.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): ISCH_PrimitiveCircle;
```


## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### getstate_centerx

# ISCH\_PrimitiveCircle.getState\_CenterX() method

获取属性状态：圆心 X

## Signature

```typescript
getState_CenterX(): number;
```


## Returns

number

圆心 X

### getstate_centery

# ISCH\_PrimitiveCircle.getState\_CenterY() method

获取属性状态：圆心 Y

## Signature

```typescript
getState_CenterY(): number;
```


## Returns

number

圆心 Y

### getstate_color

# ISCH\_PrimitiveCircle.getState\_Color() method

获取属性状态：颜色

## Signature

```typescript
getState_Color(): string | null;
```


## Returns

string \| null

颜色

### getstate_fillcolor

# ISCH\_PrimitiveCircle.getState\_FillColor() method

获取属性状态：填充颜色

## Signature

```typescript
getState_FillColor(): string | null;
```


## Returns

string \| null

填充颜色

### getstate_fillstyle

# ISCH\_PrimitiveCircle.getState\_FillStyle() method

获取属性状态：填充样式

## Signature

```typescript
getState_FillStyle(): ESCH_PrimitiveFillStyle | null;
```


## Returns

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null

填充样式

### getstate_linetype

# ISCH\_PrimitiveCircle.getState\_LineType() method

获取属性状态：线型

## Signature

```typescript
getState_LineType(): ESCH_PrimitiveLineType | null;
```


## Returns

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

线型

### getstate_linewidth

# ISCH\_PrimitiveCircle.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number | null;
```


## Returns

number \| null

线宽

### getstate_primitiveid

# ISCH\_PrimitiveCircle.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveCircle.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_radius

# ISCH\_PrimitiveCircle.getState\_Radius() method

获取属性状态：半径

## Signature

```typescript
getState_Radius(): number;
```


## Returns

number

半径

### isasync

# ISCH\_PrimitiveCircle.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# ISCH\_PrimitiveCircle.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<ISCH_PrimitiveCircle>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;

圆图元对象

### setstate_centerx

# ISCH\_PrimitiveCircle.setState\_CenterX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：圆心 X

## Signature

```typescript
setState_CenterX(centerX: number): ISCH_PrimitiveCircle;
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

圆心 X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### setstate_centery

# ISCH\_PrimitiveCircle.setState\_CenterY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：圆心 Y

## Signature

```typescript
setState_CenterY(centerY: number): ISCH_PrimitiveCircle;
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

圆心 Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### setstate_color

# ISCH\_PrimitiveCircle.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：颜色

## Signature

```typescript
setState_Color(color: string | null): ISCH_PrimitiveCircle;
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

颜色


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### setstate_fillcolor

# ISCH\_PrimitiveCircle.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：填充颜色

## Signature

```typescript
setState_FillColor(fillColor: string | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### setstate_fillstyle

# ISCH\_PrimitiveCircle.setState\_FillStyle() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：填充样式

## Signature

```typescript
setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### setstate_linetype

# ISCH\_PrimitiveCircle.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线型

## Signature

```typescript
setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### setstate_linewidth

# ISCH\_PrimitiveCircle.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### setstate_radius

# ISCH\_PrimitiveCircle.setState\_Radius() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：半径

## Signature

```typescript
setState_Radius(radius: number): ISCH_PrimitiveCircle;
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

radius


</td><td>

number


</td><td>

半径


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### toasync

# ISCH\_PrimitiveCircle.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): ISCH_PrimitiveCircle;
```


## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象

### tosync

# ISCH\_PrimitiveCircle.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): ISCH_PrimitiveCircle;
```


## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

圆图元对象
