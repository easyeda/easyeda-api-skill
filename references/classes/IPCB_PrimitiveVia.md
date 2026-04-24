# IPCB\_PrimitiveVia class

过孔图元

## Signature

```typescript
declare class IPCB_PrimitiveVia implements IPCB_Primitive 
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

[done()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getAdjacentPrimitives()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 获取相邻的图元对象


</td></tr>
<tr><td>

[getState\_DesignRuleBlindViaName()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：盲埋孔设计规则项名称


</td></tr>
<tr><td>

[getState\_Diameter()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：外径


</td></tr>
<tr><td>

[getState\_HoleDiameter()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：孔径


</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：网络名称


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_SolderMaskExpansion()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：阻焊/助焊扩展


</td></tr>
<tr><td>

[getState\_ViaType()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：过孔类型


</td></tr>
<tr><td>

[getState\_X()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：坐标 X


</td></tr>
<tr><td>

[getState\_Y()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

获取属性状态：坐标 Y


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_DesignRuleBlindViaName(designRuleBlindViaName)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：盲埋孔设计规则项名称


</td></tr>
<tr><td>

[setState\_Diameter(diameter)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：外径


</td></tr>
<tr><td>

[setState\_HoleDiameter(holeDiameter)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：孔径


</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：网络名称


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_SolderMaskExpansion(solderMaskExpansion)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：阻焊/助焊扩展


</td></tr>
<tr><td>

[setState\_ViaType(viaType)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：过孔类型


</td></tr>
<tr><td>

[setState\_X(x)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 X


</td></tr>
<tr><td>

[setState\_Y(y)](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 Y


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveVia.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveVia.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<IPCB_PrimitiveVia>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;

过孔图元对象

### getadjacentprimitives

# IPCB\_PrimitiveVia.getAdjacentPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取相邻的图元对象

## Signature

```typescript
getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

相邻的导线、圆弧线图元对象

## Remarks

将会获取与过孔直接相连的导线、圆弧线图元对象

### getstate_designruleblindvianame

# IPCB\_PrimitiveVia.getState\_DesignRuleBlindViaName() method

获取属性状态：盲埋孔设计规则项名称

## Signature

```typescript
getState_DesignRuleBlindViaName(): string | null;
```


## Returns

string \| null

盲埋孔设计规则项名称

### getstate_diameter

# IPCB\_PrimitiveVia.getState\_Diameter() method

获取属性状态：外径

## Signature

```typescript
getState_Diameter(): number;
```


## Returns

number

外径

### getstate_holediameter

# IPCB\_PrimitiveVia.getState\_HoleDiameter() method

获取属性状态：孔径

## Signature

```typescript
getState_HoleDiameter(): number;
```


## Returns

number

孔径

### getstate_net

# IPCB\_PrimitiveVia.getState\_Net() method

获取属性状态：网络名称

## Signature

```typescript
getState_Net(): string;
```


## Returns

string

网络名称

### getstate_primitiveid

# IPCB\_PrimitiveVia.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveVia.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
getState_PrimitiveLock(): boolean;
```


## Returns

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveVia.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_soldermaskexpansion

# IPCB\_PrimitiveVia.getState\_SolderMaskExpansion() method

获取属性状态：阻焊/助焊扩展

## Signature

```typescript
getState_SolderMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
```


## Returns

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null

阻焊/助焊扩展

### getstate_viatype

# IPCB\_PrimitiveVia.getState\_ViaType() method

获取属性状态：过孔类型

## Signature

```typescript
getState_ViaType(): EPCB_PrimitiveViaType;
```


## Returns

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)

过孔类型

### getstate_x

# IPCB\_PrimitiveVia.getState\_X() method

获取属性状态：坐标 X

## Signature

```typescript
getState_X(): number;
```


## Returns

number

坐标 X

### getstate_y

# IPCB\_PrimitiveVia.getState\_Y() method

获取属性状态：坐标 Y

## Signature

```typescript
getState_Y(): number;
```


## Returns

number

坐标 Y

### isasync

# IPCB\_PrimitiveVia.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveVia.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<IPCB_PrimitiveVia>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;

过孔图元对象

### setstate_designruleblindvianame

# IPCB\_PrimitiveVia.setState\_DesignRuleBlindViaName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：盲埋孔设计规则项名称

## Signature

```typescript
setState_DesignRuleBlindViaName(designRuleBlindViaName: string | null): IPCB_PrimitiveVia;
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

designRuleBlindViaName


</td><td>

string \| null


</td><td>

盲埋孔设计规则项名称


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_diameter

# IPCB\_PrimitiveVia.setState\_Diameter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：外径

## Signature

```typescript
setState_Diameter(diameter: number): IPCB_PrimitiveVia;
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

diameter


</td><td>

number


</td><td>

外径


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_holediameter

# IPCB\_PrimitiveVia.setState\_HoleDiameter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：孔径

## Signature

```typescript
setState_HoleDiameter(holeDiameter: number): IPCB_PrimitiveVia;
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

holeDiameter


</td><td>

number


</td><td>

孔径


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_net

# IPCB\_PrimitiveVia.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：网络名称

## Signature

```typescript
setState_Net(net: string): IPCB_PrimitiveVia;
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

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_primitivelock

# IPCB\_PrimitiveVia.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否锁定

## Signature

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveVia;
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

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_soldermaskexpansion

# IPCB\_PrimitiveVia.setState\_SolderMaskExpansion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：阻焊/助焊扩展

## Signature

```typescript
setState_SolderMaskExpansion(solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null): IPCB_PrimitiveVia;
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

solderMaskExpansion


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

阻焊/助焊扩展


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_viatype

# IPCB\_PrimitiveVia.setState\_ViaType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：过孔类型

## Signature

```typescript
setState_ViaType(viaType: EPCB_PrimitiveViaType): IPCB_PrimitiveVia;
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

viaType


</td><td>

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)


</td><td>

过孔类型


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_x

# IPCB\_PrimitiveVia.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 X

## Signature

```typescript
setState_X(x: number): IPCB_PrimitiveVia;
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

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_y

# IPCB\_PrimitiveVia.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 Y

## Signature

```typescript
setState_Y(y: number): IPCB_PrimitiveVia;
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

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### toasync

# IPCB\_PrimitiveVia.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): IPCB_PrimitiveVia;
```


## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### tosync

# IPCB\_PrimitiveVia.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): IPCB_PrimitiveVia;
```


## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象
