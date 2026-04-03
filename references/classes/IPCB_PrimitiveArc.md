# IPCB\_PrimitiveArc class

圆弧线图元

## 签名

```typescript
declare class IPCB_PrimitiveArc implements IPCB_Primitive 
```
**实现自：**[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## 备注

直线和圆弧线均为导线，对应画布的线条走线和圆弧走线


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitiveArc>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;

圆弧线图元对象

### getadjacentprimitives

# IPCB\_PrimitiveArc.getAdjacentPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取相邻的图元对象

## 签名

```typescript
getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>;
```


## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

相邻的直线、过孔、圆弧线图元对象

## 备注

将会获取与圆弧线直接相连的直线、过孔、圆弧线图元对象

### getentiretrack

# IPCB\_PrimitiveArc.getEntireTrack() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取整段导线

## 签名

```typescript
getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;
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

includeVias


</td><td>

false


</td><td>

是否包含导线两端的过孔


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

整段导线内的所有直线和圆弧线

### getentiretrack_1

# IPCB\_PrimitiveArc.getEntireTrack() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取整段导线

## 签名

```typescript
getEntireTrack(includeVias: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;
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

includeVias


</td><td>

true


</td><td>

是否包含导线两端的过孔


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

整段导线内的所有直线、圆弧线，以及两端连接的过孔（如果有）

### getstate_arcangle

# IPCB\_PrimitiveArc.getState\_ArcAngle() method

获取属性状态：圆弧角度

## 签名

```typescript
getState_ArcAngle(): number;
```


## 返回值

number

圆弧角度

### getstate_endx

# IPCB\_PrimitiveArc.getState\_EndX() method

获取属性状态：终止位置 X

## 签名

```typescript
getState_EndX(): number;
```


## 返回值

number

终止位置 X

### getstate_endy

# IPCB\_PrimitiveArc.getState\_EndY() method

获取属性状态：终止位置 Y

## 签名

```typescript
getState_EndY(): number;
```


## 返回值

number

终止位置 Y

### getstate_interactivemode

# IPCB\_PrimitiveArc.getState\_InteractiveMode() method

获取属性状态：交互模式

## 签名

```typescript
getState_InteractiveMode(): EPCB_PrimitiveArcInteractiveMode;
```


## 返回值

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)

交互模式

### getstate_layer

# IPCB\_PrimitiveArc.getState\_Layer() method

获取属性状态：层

## 签名

```typescript
getState_Layer(): TPCB_LayersOfLine;
```


## 返回值

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)

层

### getstate_linewidth

# IPCB\_PrimitiveArc.getState\_LineWidth() method

获取属性状态：线宽

## 签名

```typescript
getState_LineWidth(): number;
```


## 返回值

number

线宽

### getstate_net

# IPCB\_PrimitiveArc.getState\_Net() method

获取属性状态：网络名称

## 签名

```typescript
getState_Net(): string;
```


## 返回值

string

网络名称

### getstate_primitiveid

# IPCB\_PrimitiveArc.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveArc.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveArc.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_startx

# IPCB\_PrimitiveArc.getState\_StartX() method

获取属性状态：起始位置 X

## 签名

```typescript
getState_StartX(): number;
```


## 返回值

number

起始位置 X

### getstate_starty

# IPCB\_PrimitiveArc.getState\_StartY() method

获取属性状态：起始位置 Y

## 签名

```typescript
getState_StartY(): number;
```


## 返回值

number

起始位置 Y

### isasync

# IPCB\_PrimitiveArc.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveArc.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitiveArc>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;

圆弧线图元对象

### setstate_arcangle

# IPCB\_PrimitiveArc.setState\_ArcAngle() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：圆弧角度

## 签名

```typescript
setState_ArcAngle(arcAngle: number): IPCB_PrimitiveArc;
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

arcAngle


</td><td>

number


</td><td>

圆弧角度


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_endx

# IPCB\_PrimitiveArc.setState\_EndX() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：终止位置 X

## 签名

```typescript
setState_EndX(endX: number): IPCB_PrimitiveArc;
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

endX


</td><td>

number


</td><td>

终止位置 X


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_endy

# IPCB\_PrimitiveArc.setState\_EndY() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：终止位置 Y

## 签名

```typescript
setState_EndY(endY: number): IPCB_PrimitiveArc;
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

endY


</td><td>

number


</td><td>

终止位置 Y


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_interactivemode

# IPCB\_PrimitiveArc.setState\_InteractiveMode() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：交互模式

## 签名

```typescript
setState_InteractiveMode(interactiveMode: EPCB_PrimitiveArcInteractiveMode): IPCB_PrimitiveArc;
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

interactiveMode


</td><td>

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)


</td><td>

交互模式


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_layer

# IPCB\_PrimitiveArc.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveArc;
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

layer


</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)


</td><td>

层


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_linewidth

# IPCB\_PrimitiveArc.setState\_LineWidth() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线宽

## 签名

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveArc;
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

number


</td><td>

线宽


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_net

# IPCB\_PrimitiveArc.setState\_Net() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：网络名称

## 签名

```typescript
setState_Net(net: string): IPCB_PrimitiveArc;
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

net


</td><td>

string


</td><td>

网络名称


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_primitivelock

# IPCB\_PrimitiveArc.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveArc;
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

primitiveLock


</td><td>

boolean


</td><td>

是否锁定


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_startx

# IPCB\_PrimitiveArc.setState\_StartX() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：起始位置 X

## 签名

```typescript
setState_StartX(startX: number): IPCB_PrimitiveArc;
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

startX


</td><td>

number


</td><td>

起始位置 X


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### setstate_starty

# IPCB\_PrimitiveArc.setState\_StartY() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：起始位置 Y

## 签名

```typescript
setState_StartY(startY: number): IPCB_PrimitiveArc;
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

startY


</td><td>

number


</td><td>

起始位置 Y


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### toasync

# IPCB\_PrimitiveArc.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitiveArc;
```


## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象

### tosync

# IPCB\_PrimitiveArc.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitiveArc;
```


## 返回值

[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)

圆弧线图元对象
