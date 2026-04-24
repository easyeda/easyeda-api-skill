# IPCB\_PrimitiveArc class

圆弧线图元

## Signature

```typescript
declare class IPCB_PrimitiveArc implements IPCB_Primitive 
```
**Implements:** [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## Remarks

直线和圆弧线均为导线，对应画布的线条走线和圆弧走线


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[done()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getAdjacentPrimitives()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 获取相邻的图元对象


</td></tr>
<tr><td>

[getEntireTrack(includeVias)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 获取整段导线


</td></tr>
<tr><td>

[getEntireTrack(includeVias)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 获取整段导线


</td></tr>
<tr><td>

[getState\_ArcAngle()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：圆弧角度


</td></tr>
<tr><td>

[getState\_EndX()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：终止位置 X


</td></tr>
<tr><td>

[getState\_EndY()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：终止位置 Y


</td></tr>
<tr><td>

[getState\_InteractiveMode()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：交互模式


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：网络名称


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_StartX()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：起始位置 X


</td></tr>
<tr><td>

[getState\_StartY()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

获取属性状态：起始位置 Y


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_ArcAngle(arcAngle)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：圆弧角度


</td></tr>
<tr><td>

[setState\_EndX(endX)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：终止位置 X


</td></tr>
<tr><td>

[setState\_EndY(endY)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：终止位置 Y


</td></tr>
<tr><td>

[setState\_InteractiveMode(interactiveMode)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：交互模式


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：网络名称


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_StartX(startX)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：起始位置 X


</td></tr>
<tr><td>

[setState\_StartY(startY)](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：起始位置 Y


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveArc.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveArc.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<IPCB_PrimitiveArc>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;

圆弧线图元对象

### getadjacentprimitives

# IPCB\_PrimitiveArc.getAdjacentPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取相邻的图元对象

## Signature

```typescript
getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

相邻的直线、过孔、圆弧线图元对象

## Remarks

将会获取与圆弧线直接相连的直线、过孔、圆弧线图元对象

### getentiretrack

# IPCB\_PrimitiveArc.getEntireTrack() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取整段导线

## Signature

```typescript
getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;
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

includeVias


</td><td>

false


</td><td>

是否包含导线两端的过孔


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

整段导线内的所有直线和圆弧线

### getentiretrack_1

# IPCB\_PrimitiveArc.getEntireTrack() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取整段导线

## Signature

```typescript
getEntireTrack(includeVias: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;
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

includeVias


</td><td>

true


</td><td>

是否包含导线两端的过孔


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

整段导线内的所有直线、圆弧线，以及两端连接的过孔（如果有）

### getstate_arcangle

# IPCB\_PrimitiveArc.getState\_ArcAngle() method

获取属性状态：圆弧角度

## Signature

```typescript
getState_ArcAngle(): number;
```


## Returns

number

圆弧角度

### getstate_endx

# IPCB\_PrimitiveArc.getState\_EndX() method

获取属性状态：终止位置 X

## Signature

```typescript
getState_EndX(): number;
```


## Returns

number

终止位置 X

### getstate_endy

# IPCB\_PrimitiveArc.getState\_EndY() method

获取属性状态：终止位置 Y

## Signature

```typescript
getState_EndY(): number;
```


## Returns

number

终止位置 Y

### getstate_interactivemode

# IPCB\_PrimitiveArc.getState\_InteractiveMode() method

获取属性状态：交互模式

## Signature

```typescript
getState_InteractiveMode(): EPCB_PrimitiveArcInteractiveMode;
```


## Returns

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)

交互模式

### getstate_layer

# IPCB\_PrimitiveArc.getState\_Layer() method

获取属性状态：层

## Signature

```typescript
getState_Layer(): TPCB_LayersOfLine;
```


## Returns

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)

层

### getstate_linewidth

# IPCB\_PrimitiveArc.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number;
```


## Returns

number

线宽

### getstate_net

# IPCB\_PrimitiveArc.getState\_Net() method

获取属性状态：网络名称

## Signature

```typescript
getState_Net(): string;
```


## Returns

string

网络名称

### getstate_primitiveid

# IPCB\_PrimitiveArc.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveArc.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
getState_PrimitiveLock(): boolean;
```


## Returns

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveArc.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_startx

# IPCB\_PrimitiveArc.getState\_StartX() method

获取属性状态：起始位置 X

## Signature

```typescript
getState_StartX(): number;
```


## Returns

number

起始位置 X

### getstate_starty

# IPCB\_PrimitiveArc.getState\_StartY() method

获取属性状态：起始位置 Y

## Signature

```typescript
getState_StartY(): number;
```


## Returns

number

起始位置 Y

### isasync

# IPCB\_PrimitiveArc.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveArc.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<IPCB_PrimitiveArc>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;

圆弧线图元对象

### setstate_arcangle

# IPCB\_PrimitiveArc.setState\_ArcAngle() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：圆弧角度

## Signature

```typescript
setState_ArcAngle(arcAngle: number): IPCB_PrimitiveArc;
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

arcAngle


</td><td>

number


</td><td>

圆弧角度


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_endx

# IPCB\_PrimitiveArc.setState\_EndX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：终止位置 X

## Signature

```typescript
setState_EndX(endX: number): IPCB_PrimitiveArc;
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

终止位置 X


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_endy

# IPCB\_PrimitiveArc.setState\_EndY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：终止位置 Y

## Signature

```typescript
setState_EndY(endY: number): IPCB_PrimitiveArc;
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

终止位置 Y


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_interactivemode

# IPCB\_PrimitiveArc.setState\_InteractiveMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：交互模式

## Signature

```typescript
setState_InteractiveMode(interactiveMode: EPCB_PrimitiveArcInteractiveMode): IPCB_PrimitiveArc;
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

interactiveMode


</td><td>

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)


</td><td>

交互模式


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_layer

# IPCB\_PrimitiveArc.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：层

## Signature

```typescript
setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveArc;
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

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)


</td><td>

层


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_linewidth

# IPCB\_PrimitiveArc.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveArc;
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

number


</td><td>

线宽


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_net

# IPCB\_PrimitiveArc.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：网络名称

## Signature

```typescript
setState_Net(net: string): IPCB_PrimitiveArc;
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

net


</td><td>

string


</td><td>

网络名称


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_primitivelock

# IPCB\_PrimitiveArc.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否锁定

## Signature

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveArc;
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

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_startx

# IPCB\_PrimitiveArc.setState\_StartX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：起始位置 X

## Signature

```typescript
setState_StartX(startX: number): IPCB_PrimitiveArc;
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

起始位置 X


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_starty

# IPCB\_PrimitiveArc.setState\_StartY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：起始位置 Y

## Signature

```typescript
setState_StartY(startY: number): IPCB_PrimitiveArc;
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

起始位置 Y


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### toasync

# IPCB\_PrimitiveArc.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): IPCB_PrimitiveArc;
```


## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### tosync

# IPCB\_PrimitiveArc.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): IPCB_PrimitiveArc;
```


## Returns

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象
