# ISCH\_PrimitiveArc class

圆弧图元

## Signature

```typescript
declare class ISCH_PrimitiveArc implements ISCH_Primitive 
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

[done()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：颜色


</td></tr>
<tr><td>

[getState\_EndX()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：终止点 X


</td></tr>
<tr><td>

[getState\_EndY()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：终止点 Y


</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：填充颜色


</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：线型


</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_ReferenceX()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：参考点 X


</td></tr>
<tr><td>

[getState\_ReferenceY()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：参考点 Y


</td></tr>
<tr><td>

[getState\_StartX()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：起始点 X


</td></tr>
<tr><td>

[getState\_StartY()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：起始点 Y


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：颜色


</td></tr>
<tr><td>

[setState\_EndX(endX)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：终止点 X


</td></tr>
<tr><td>

[setState\_EndY(endY)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：终止点 Y


</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：填充颜色


</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线型


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_ReferenceX(referenceX)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：参考点 X


</td></tr>
<tr><td>

[setState\_ReferenceY(referenceY)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：参考点 Y


</td></tr>
<tr><td>

[setState\_StartX(startX)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：起始点 X


</td></tr>
<tr><td>

[setState\_StartY(startY)](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：起始点 Y


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveArc.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveArc.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<ISCH_PrimitiveArc>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;

圆弧图元对象

### getstate_color

# ISCH\_PrimitiveArc.getState\_Color() method

获取属性状态：颜色

## Signature

```typescript
getState_Color(): string | null;
```


## Returns

string \| null

颜色

### getstate_endx

# ISCH\_PrimitiveArc.getState\_EndX() method

获取属性状态：终止点 X

## Signature

```typescript
getState_EndX(): number;
```


## Returns

number

终止点 X

### getstate_endy

# ISCH\_PrimitiveArc.getState\_EndY() method

获取属性状态：终止点 Y

## Signature

```typescript
getState_EndY(): number;
```


## Returns

number

终止点 Y

### getstate_fillcolor

# ISCH\_PrimitiveArc.getState\_FillColor() method

获取属性状态：填充颜色

## Signature

```typescript
getState_FillColor(): string | null;
```


## Returns

string \| null

填充颜色

### getstate_linetype

# ISCH\_PrimitiveArc.getState\_LineType() method

获取属性状态：线型

## Signature

```typescript
getState_LineType(): ESCH_PrimitiveLineType | null;
```


## Returns

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

线型

### getstate_linewidth

# ISCH\_PrimitiveArc.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number | null;
```


## Returns

number \| null

线宽

### getstate_primitiveid

# ISCH\_PrimitiveArc.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveArc.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_referencex

# ISCH\_PrimitiveArc.getState\_ReferenceX() method

获取属性状态：参考点 X

## Signature

```typescript
getState_ReferenceX(): number;
```


## Returns

number

参考点 X

### getstate_referencey

# ISCH\_PrimitiveArc.getState\_ReferenceY() method

获取属性状态：参考点 Y

## Signature

```typescript
getState_ReferenceY(): number;
```


## Returns

number

参考点 Y

### getstate_startx

# ISCH\_PrimitiveArc.getState\_StartX() method

获取属性状态：起始点 X

## Signature

```typescript
getState_StartX(): number;
```


## Returns

number

起始点 X

### getstate_starty

# ISCH\_PrimitiveArc.getState\_StartY() method

获取属性状态：起始点 Y

## Signature

```typescript
getState_StartY(): number;
```


## Returns

number

起始点 Y

### isasync

# ISCH\_PrimitiveArc.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# ISCH\_PrimitiveArc.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<ISCH_PrimitiveArc>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;

圆弧图元对象

### setstate_color

# ISCH\_PrimitiveArc.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：颜色

## Signature

```typescript
setState_Color(color: string | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_endx

# ISCH\_PrimitiveArc.setState\_EndX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：终止点 X

## Signature

```typescript
setState_EndX(endX: number): ISCH_PrimitiveArc;
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

endX


</td><td>

number


</td><td>

终止点 X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_endy

# ISCH\_PrimitiveArc.setState\_EndY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：终止点 Y

## Signature

```typescript
setState_EndY(endY: number): ISCH_PrimitiveArc;
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

endY


</td><td>

number


</td><td>

终止点 Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_fillcolor

# ISCH\_PrimitiveArc.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：填充颜色

## Signature

```typescript
setState_FillColor(fillColor: string | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_linetype

# ISCH\_PrimitiveArc.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线型

## Signature

```typescript
setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_linewidth

# ISCH\_PrimitiveArc.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_referencex

# ISCH\_PrimitiveArc.setState\_ReferenceX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：参考点 X

## Signature

```typescript
setState_ReferenceX(referenceX: number): ISCH_PrimitiveArc;
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

referenceX


</td><td>

number


</td><td>

参考点 X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_referencey

# ISCH\_PrimitiveArc.setState\_ReferenceY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：参考点 Y

## Signature

```typescript
setState_ReferenceY(referenceY: number): ISCH_PrimitiveArc;
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

referenceY


</td><td>

number


</td><td>

参考点 Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_startx

# ISCH\_PrimitiveArc.setState\_StartX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：起始点 X

## Signature

```typescript
setState_StartX(startX: number): ISCH_PrimitiveArc;
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

startX


</td><td>

number


</td><td>

起始点 X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### setstate_starty

# ISCH\_PrimitiveArc.setState\_StartY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：起始点 Y

## Signature

```typescript
setState_StartY(startY: number): ISCH_PrimitiveArc;
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

startY


</td><td>

number


</td><td>

起始点 Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### toasync

# ISCH\_PrimitiveArc.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): ISCH_PrimitiveArc;
```


## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象

### tosync

# ISCH\_PrimitiveArc.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): ISCH_PrimitiveArc;
```


## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

圆弧图元对象
