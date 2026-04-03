# IPCB\_PrimitivePour class

覆铜边框图元

## 签名

```typescript
declare class IPCB_PrimitivePour implements IPCB_Primitive 
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

[convertToFill()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：填充图元(默认是填充区域)


</td></tr>
<tr><td>

[convertToPolyline()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：折线图元(默认是线条)


</td></tr>
<tr><td>

[convertToRegion()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：区域图元(默认是禁止区域)


</td></tr>
<tr><td>

[done()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：复杂多边形


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：网络名称


</td></tr>
<tr><td>

[getState\_PourFillMethod()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：覆铜填充方法


</td></tr>
<tr><td>

[getState\_PourName()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：覆铜边框名称


</td></tr>
<tr><td>

[getState\_PourPriority()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：覆铜优先级


</td></tr>
<tr><td>

[getState\_PreserveSilos()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：是否保留孤岛


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_ComplexPolygon(complexPolygon)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：复杂多边形


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：网络名称


</td></tr>
<tr><td>

[setState\_PourFillMethod(pourFillMethod)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：覆铜填充方法


</td></tr>
<tr><td>

[setState\_PourName(pourName)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：覆铜边框名称


</td></tr>
<tr><td>

[setState\_PourPriority(pourPriority)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：覆铜优先级


</td></tr>
<tr><td>

[setState\_PreserveSilos(preserveSilos)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否保留孤岛


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitivePour.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### converttofill

# IPCB\_PrimitivePour.convertToFill() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：填充图元(默认是填充区域)

## 签名

```typescript
convertToFill(): Promise<IPCB_PrimitiveFill>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

填充图元对象

### converttopolyline

# IPCB\_PrimitivePour.convertToPolyline() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：折线图元(默认是线条)

## 签名

```typescript
convertToPolyline(): Promise<IPCB_PrimitivePolyline>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;

折线图元对象

### converttoregion

# IPCB\_PrimitivePour.convertToRegion() method

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

# IPCB\_PrimitivePour.done() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitivePour>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

覆铜边框图元对象

### getstate_complexpolygon

# IPCB\_PrimitivePour.getState\_ComplexPolygon() method

获取属性状态：复杂多边形

## 签名

```typescript
getState_ComplexPolygon(): IPCB_Polygon;
```


## 返回值

[IPCB\_Polygon](./IPCB_Polygon.md)

复杂多边形

### getstate_layer

# IPCB\_PrimitivePour.getState\_Layer() method

获取属性状态：层

## 签名

```typescript
getState_Layer(): TPCB_LayersOfCopper;
```


## 返回值

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)

层

### getstate_linewidth

# IPCB\_PrimitivePour.getState\_LineWidth() method

获取属性状态：线宽

## 签名

```typescript
getState_LineWidth(): number;
```


## 返回值

number

线宽

### getstate_net

# IPCB\_PrimitivePour.getState\_Net() method

获取属性状态：网络名称

## 签名

```typescript
getState_Net(): string;
```


## 返回值

string

网络名称

### getstate_pourfillmethod

# IPCB\_PrimitivePour.getState\_PourFillMethod() method

获取属性状态：覆铜填充方法

## 签名

```typescript
getState_PourFillMethod(): any;
```


## 返回值

any

覆铜填充方法

### getstate_pourname

# IPCB\_PrimitivePour.getState\_PourName() method

获取属性状态：覆铜边框名称

## 签名

```typescript
getState_PourName(): string;
```


## 返回值

string

覆铜边框名称

### getstate_pourpriority

# IPCB\_PrimitivePour.getState\_PourPriority() method

获取属性状态：覆铜优先级

## 签名

```typescript
getState_PourPriority(): number;
```


## 返回值

number

覆铜优先级

### getstate_preservesilos

# IPCB\_PrimitivePour.getState\_PreserveSilos() method

获取属性状态：是否保留孤岛

## 签名

```typescript
getState_PreserveSilos(): boolean;
```


## 返回值

boolean

是否保留孤岛

### getstate_primitiveid

# IPCB\_PrimitivePour.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitivePour.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitivePour.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### isasync

# IPCB\_PrimitivePour.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitivePour.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitivePour>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

覆铜边框图元对象

### setstate_complexpolygon

# IPCB\_PrimitivePour.setState\_ComplexPolygon() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：复杂多边形

## 签名

```typescript
setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_layer

# IPCB\_PrimitivePour.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfCopper): IPCB_PrimitivePour;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)


</td><td>

层


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_linewidth

# IPCB\_PrimitivePour.setState\_LineWidth() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线宽

## 签名

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_net

# IPCB\_PrimitivePour.setState\_Net() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：网络名称

## 签名

```typescript
setState_Net(net: string): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_pourfillmethod

# IPCB\_PrimitivePour.setState\_PourFillMethod() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：覆铜填充方法

## 签名

```typescript
setState_PourFillMethod(pourFillMethod: EPCB_PrimitivePourFillMethod): IPCB_PrimitivePour;
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

pourFillMethod


</td><td>

[EPCB\_PrimitivePourFillMethod](../enums/EPCB_PrimitivePourFillMethod.md)


</td><td>

覆铜填充方法


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_pourname

# IPCB\_PrimitivePour.setState\_PourName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：覆铜边框名称

## 签名

```typescript
setState_PourName(pourName: string): IPCB_PrimitivePour;
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

pourName


</td><td>

string


</td><td>

覆铜边框名称


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_pourpriority

# IPCB\_PrimitivePour.setState\_PourPriority() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：覆铜优先级

## 签名

```typescript
setState_PourPriority(pourPriority: number): IPCB_PrimitivePour;
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

pourPriority


</td><td>

number


</td><td>

覆铜优先级


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_preservesilos

# IPCB\_PrimitivePour.setState\_PreserveSilos() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否保留孤岛

## 签名

```typescript
setState_PreserveSilos(preserveSilos: boolean): IPCB_PrimitivePour;
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

preserveSilos


</td><td>

boolean


</td><td>

是否保留孤岛


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### setstate_primitivelock

# IPCB\_PrimitivePour.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePour;
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

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### toasync

# IPCB\_PrimitivePour.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitivePour;
```


## 返回值

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象

### tosync

# IPCB\_PrimitivePour.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitivePour;
```


## 返回值

[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)

覆铜边框图元对象
