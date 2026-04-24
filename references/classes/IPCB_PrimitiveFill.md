# IPCB\_PrimitiveFill class

填充图元

## Signature

```typescript
declare class IPCB_PrimitiveFill implements IPCB_Primitive 
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

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换到：折线图元

## Signature

```typescript
convertToPolyline(): Promise<IPCB_PrimitivePolyline>;
```


## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;

折线图元对象

### converttopour

# IPCB\_PrimitiveFill.convertToPour() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换到：覆铜边框图元

## Signature

```typescript
convertToPour(): Promise<IPCB_PrimitivePour>;
```


## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

覆铜边框图元对象

### converttoregion

# IPCB\_PrimitiveFill.convertToRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换到：区域图元(默认是禁止区域)

## Signature

```typescript
convertToRegion(): Promise<IPCB_PrimitiveRegion>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;

区域图元对象

### done

# IPCB\_PrimitiveFill.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<IPCB_PrimitiveFill>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

填充图元对象

### getstate_complexpolygon

# IPCB\_PrimitiveFill.getState\_ComplexPolygon() method

获取属性状态：复杂多边形

## Signature

```typescript
getState_ComplexPolygon(): IPCB_Polygon;
```


## Returns

[IPCB\_Polygon](./IPCB_Polygon.md)

复杂多边形

### getstate_fillmode

# IPCB\_PrimitiveFill.getState\_FillMode() method

获取属性状态：填充模式

## Signature

```typescript
getState_FillMode(): EPCB_PrimitiveFillMode | undefined;
```


## Returns

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md) \| undefined

填充模式

### getstate_layer

# IPCB\_PrimitiveFill.getState\_Layer() method

获取属性状态：层

## Signature

```typescript
getState_Layer(): TPCB_LayersOfFill;
```


## Returns

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)

层

### getstate_linewidth

# IPCB\_PrimitiveFill.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number;
```


## Returns

number

线宽

### getstate_net

# IPCB\_PrimitiveFill.getState\_Net() method

获取属性状态：网络名称

## Signature

```typescript
getState_Net(): string | undefined;
```


## Returns

string \| undefined

网络名称

### getstate_primitiveid

# IPCB\_PrimitiveFill.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveFill.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
getState_PrimitiveLock(): boolean;
```


## Returns

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveFill.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### isasync

# IPCB\_PrimitiveFill.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveFill.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<IPCB_PrimitiveFill>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

填充图元对象

### setstate_complexpolygon

# IPCB\_PrimitiveFill.setState\_ComplexPolygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：复杂多边形

## Signature

```typescript
setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveFill;
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

complexPolygon


</td><td>

[IPCB\_Polygon](./IPCB_Polygon.md)


</td><td>

复杂多边形


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_fillmode

# IPCB\_PrimitiveFill.setState\_FillMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：填充模式

## Signature

```typescript
setState_FillMode(fillMode: EPCB_PrimitiveFillMode): IPCB_PrimitiveFill;
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

fillMode


</td><td>

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md)


</td><td>

填充模式


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_layer

# IPCB\_PrimitiveFill.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：层

## Signature

```typescript
setState_Layer(layer: TPCB_LayersOfFill): IPCB_PrimitiveFill;
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

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)


</td><td>

层


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_linewidth

# IPCB\_PrimitiveFill.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveFill;
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

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_net

# IPCB\_PrimitiveFill.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：网络名称

## Signature

```typescript
setState_Net(net: string): IPCB_PrimitiveFill;
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

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### setstate_primitivelock

# IPCB\_PrimitiveFill.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否锁定

## Signature

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveFill;
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

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### toasync

# IPCB\_PrimitiveFill.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): IPCB_PrimitiveFill;
```


## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象

### tosync

# IPCB\_PrimitiveFill.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): IPCB_PrimitiveFill;
```


## Returns

[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)

填充图元对象
