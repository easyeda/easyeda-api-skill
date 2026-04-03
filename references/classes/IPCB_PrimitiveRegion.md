# IPCB\_PrimitiveRegion class

区域图元

## 签名

```typescript
declare class IPCB_PrimitiveRegion implements IPCB_Primitive 
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

[convertToFill()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：填充图元


</td></tr>
<tr><td>

[convertToPolyline()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：折线图元


</td></tr>
<tr><td>

[convertToPour()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：覆铜边框图元


</td></tr>
<tr><td>

[done()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_ComplexPolygon()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：复杂多边形


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_LineWidth()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_RegionName()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：区域名称


</td></tr>
<tr><td>

[getState\_RuleType()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

获取属性状态：区域规则类型


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_ComplexPolygon(complexPolygon)](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：复杂多边形


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_RegionName(regionName)](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：区域名称


</td></tr>
<tr><td>

[setState\_RuleType(ruleType)](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：区域规则类型


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveRegion.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### converttofill

# IPCB\_PrimitiveRegion.convertToFill() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：填充图元

## 签名

```typescript
convertToFill(): Promise<IPCB_PrimitiveFill>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;

填充图元对象

### converttopolyline

# IPCB\_PrimitiveRegion.convertToPolyline() method

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

# IPCB\_PrimitiveRegion.convertToPour() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：覆铜边框图元

## 签名

```typescript
convertToPour(): Promise<IPCB_PrimitivePour>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;

覆铜边框图元对象

### done

# IPCB\_PrimitiveRegion.done() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitiveRegion>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;

区域图元对象

### getstate_complexpolygon

# IPCB\_PrimitiveRegion.getState\_ComplexPolygon() method

获取属性状态：复杂多边形

## 签名

```typescript
getState_ComplexPolygon(): IPCB_Polygon;
```


## 返回值

[IPCB\_Polygon](./IPCB_Polygon.md)

复杂多边形

### getstate_layer

# IPCB\_PrimitiveRegion.getState\_Layer() method

获取属性状态：层

## 签名

```typescript
getState_Layer(): TPCB_LayersOfRegion;
```


## 返回值

[TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)

层

### getstate_linewidth

# IPCB\_PrimitiveRegion.getState\_LineWidth() method

获取属性状态：线宽

## 签名

```typescript
getState_LineWidth(): number;
```


## 返回值

number

线宽

### getstate_primitiveid

# IPCB\_PrimitiveRegion.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveRegion.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveRegion.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_regionname

# IPCB\_PrimitiveRegion.getState\_RegionName() method

获取属性状态：区域名称

## 签名

```typescript
getState_RegionName(): string | undefined;
```


## 返回值

string \| undefined

区域名称

### getstate_ruletype

# IPCB\_PrimitiveRegion.getState\_RuleType() method

获取属性状态：区域规则类型

## 签名

```typescript
getState_RuleType(): Array<EPCB_PrimitiveRegionRuleType>;
```


## 返回值

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;

区域规则类型

### isasync

# IPCB\_PrimitiveRegion.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveRegion.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitiveRegion>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;

区域图元对象

### setstate_complexpolygon

# IPCB\_PrimitiveRegion.setState\_ComplexPolygon() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：复杂多边形

## 签名

```typescript
setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveRegion;
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

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象

### setstate_layer

# IPCB\_PrimitiveRegion.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfRegion): IPCB_PrimitiveRegion;
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

[TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)


</td><td>

层


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象

### setstate_linewidth

# IPCB\_PrimitiveRegion.setState\_LineWidth() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线宽

## 签名

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveRegion;
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

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象

### setstate_primitivelock

# IPCB\_PrimitiveRegion.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveRegion;
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

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象

### setstate_regionname

# IPCB\_PrimitiveRegion.setState\_RegionName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：区域名称

## 签名

```typescript
setState_RegionName(regionName?: string): IPCB_PrimitiveRegion;
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

regionName


</td><td>

string


</td><td>

_（可选）_ 区域名称


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象

## 备注

仅当 `ruleType` 为 [EPCB\_PrimitiveRegionRuleType.FOLLOW\_REGION\_RULE](../enums/EPCB_PrimitiveRegionRuleType.md) 时有效，用于匹配区域 DRC 规则

如若 `ruleType` 为 [EPCB\_PrimitiveRegionRuleType.FOLLOW\_REGION\_RULE](../enums/EPCB_PrimitiveRegionRuleType.md) 但 `regionName` 为空，则系统将会自动分配名称

### setstate_ruletype

# IPCB\_PrimitiveRegion.setState\_RuleType() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：区域规则类型

## 签名

```typescript
setState_RuleType(ruleType: Array<EPCB_PrimitiveRegionRuleType>): IPCB_PrimitiveRegion;
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

ruleType


</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;


</td><td>

区域规则类型


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象

### toasync

# IPCB\_PrimitiveRegion.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitiveRegion;
```


## 返回值

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象

### tosync

# IPCB\_PrimitiveRegion.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitiveRegion;
```


## 返回值

[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)

区域图元对象
