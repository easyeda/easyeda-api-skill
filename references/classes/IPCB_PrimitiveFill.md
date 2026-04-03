# IPCB\_PrimitiveFill class

填充图元

## 签名

```typescript
declare class IPCB_PrimitiveFill implements IPCB_Primitive 
```
**实现自：**[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

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

[convertToPolyline()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：折线图元


</td></tr>
<tr><td>

[convertToPour()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：覆铜边框图元


</td></tr>
<tr><td>

[convertToRegion()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：区域图元(默认是禁止区域)


</td></tr>
<tr><td>

[done()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：复杂多边形


</td></tr>
<tr><td>

[getState\_FillMode()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：填充模式


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：网络名称


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_ComplexPolygon(complexPolygon)](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：复杂多边形


</td></tr>
<tr><td>

[setState\_FillMode(fillMode)](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：填充模式


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：网络名称


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveFill.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### converttopolyline

# IPCB\_PrimitiveFill.convertToPolyline() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：折线图元

## 签名

```typescript
convertToPolyline(): Promise<IPCB_PrimitivePolyline>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;

折线图元对象

### converttopour

# IPCB\_PrimitiveFill.convertToPour() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：覆铜边框图元

## 签名

```typescript
convertToPour(): Promise<IPCB_PrimitivePour>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

覆铜边框图元对象

### converttoregion

# IPCB\_PrimitiveFill.convertToRegion() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：区域图元(默认是禁止区域)

## 签名

```typescript
convertToRegion(): Promise<IPCB_PrimitiveRegion>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;

区域图元对象

### done

# IPCB\_PrimitiveFill.done() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitiveFill>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

填充图元对象

### getstate_complexpolygon

# IPCB\_PrimitiveFill.getState\_ComplexPolygon() method

获取属性状态：复杂多边形

## 签名

```typescript
getState_ComplexPolygon(): IPCB_Polygon;
```


## 返回值

[IPCB\_Polygon](./IPCB_Polygon.md)

复杂多边形

### getstate_fillmode

# IPCB\_PrimitiveFill.getState\_FillMode() method

获取属性状态：填充模式

## 签名

```typescript
getState_FillMode(): EPCB_PrimitiveFillMode | undefined;
```


## 返回值

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md) \| undefined

填充模式

### getstate_layer

# IPCB\_PrimitiveFill.getState\_Layer() method

获取属性状态：层

## 签名

```typescript
getState_Layer(): TPCB_LayersOfFill;
```


## 返回值

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)

层

### getstate_linewidth

# IPCB\_PrimitiveFill.getState\_LineWidth() method

获取属性状态：线宽

## 签名

```typescript
getState_LineWidth(): number;
```


## 返回值

number

线宽

### getstate_net

# IPCB\_PrimitiveFill.getState\_Net() method

获取属性状态：网络名称

## 签名

```typescript
getState_Net(): string | undefined;
```


## 返回值

string \| undefined

网络名称

### getstate_primitiveid

# IPCB\_PrimitiveFill.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveFill.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveFill.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### isasync

# IPCB\_PrimitiveFill.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveFill.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitiveFill>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

填充图元对象

### setstate_complexpolygon

# IPCB\_PrimitiveFill.setState\_ComplexPolygon() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：复杂多边形

## 签名

```typescript
setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveFill;
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

complexPolygon


</td><td>

[IPCB\_Polygon](./IPCB_Polygon.md)


</td><td>

复杂多边形


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_fillmode

# IPCB\_PrimitiveFill.setState\_FillMode() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：填充模式

## 签名

```typescript
setState_FillMode(fillMode: EPCB_PrimitiveFillMode): IPCB_PrimitiveFill;
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

fillMode


</td><td>

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md)


</td><td>

填充模式


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_layer

# IPCB\_PrimitiveFill.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfFill): IPCB_PrimitiveFill;
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

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)


</td><td>

层


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_linewidth

# IPCB\_PrimitiveFill.setState\_LineWidth() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线宽

## 签名

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveFill;
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

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_net

# IPCB\_PrimitiveFill.setState\_Net() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：网络名称

## 签名

```typescript
setState_Net(net: string): IPCB_PrimitiveFill;
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

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_primitivelock

# IPCB\_PrimitiveFill.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveFill;
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

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### toasync

# IPCB\_PrimitiveFill.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitiveFill;
```


## 返回值

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### tosync

# IPCB\_PrimitiveFill.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitiveFill;
```


## 返回值

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象
