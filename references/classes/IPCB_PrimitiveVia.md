# IPCB\_PrimitiveVia class

过孔图元

## 签名

```typescript
declare class IPCB_PrimitiveVia implements IPCB_Primitive 
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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitiveVia>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;

过孔图元对象

### getadjacentprimitives

# IPCB\_PrimitiveVia.getAdjacentPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取相邻的图元对象

## 签名

```typescript
getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;
```


## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

相邻的导线、圆弧线图元对象

## 备注

将会获取与过孔直接相连的导线、圆弧线图元对象

### getstate_designruleblindvianame

# IPCB\_PrimitiveVia.getState\_DesignRuleBlindViaName() method

获取属性状态：盲埋孔设计规则项名称

## 签名

```typescript
getState_DesignRuleBlindViaName(): string | null;
```


## 返回值

string \| null

盲埋孔设计规则项名称

### getstate_diameter

# IPCB\_PrimitiveVia.getState\_Diameter() method

获取属性状态：外径

## 签名

```typescript
getState_Diameter(): number;
```


## 返回值

number

外径

### getstate_holediameter

# IPCB\_PrimitiveVia.getState\_HoleDiameter() method

获取属性状态：孔径

## 签名

```typescript
getState_HoleDiameter(): number;
```


## 返回值

number

孔径

### getstate_net

# IPCB\_PrimitiveVia.getState\_Net() method

获取属性状态：网络名称

## 签名

```typescript
getState_Net(): string;
```


## 返回值

string

网络名称

### getstate_primitiveid

# IPCB\_PrimitiveVia.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveVia.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveVia.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_soldermaskexpansion

# IPCB\_PrimitiveVia.getState\_SolderMaskExpansion() method

获取属性状态：阻焊/助焊扩展

## 签名

```typescript
getState_SolderMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
```


## 返回值

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null

阻焊/助焊扩展

### getstate_viatype

# IPCB\_PrimitiveVia.getState\_ViaType() method

获取属性状态：过孔类型

## 签名

```typescript
getState_ViaType(): EPCB_PrimitiveViaType;
```


## 返回值

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)

过孔类型

### getstate_x

# IPCB\_PrimitiveVia.getState\_X() method

获取属性状态：坐标 X

## 签名

```typescript
getState_X(): number;
```


## 返回值

number

坐标 X

### getstate_y

# IPCB\_PrimitiveVia.getState\_Y() method

获取属性状态：坐标 Y

## 签名

```typescript
getState_Y(): number;
```


## 返回值

number

坐标 Y

### isasync

# IPCB\_PrimitiveVia.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveVia.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitiveVia>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;

过孔图元对象

### setstate_designruleblindvianame

# IPCB\_PrimitiveVia.setState\_DesignRuleBlindViaName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：盲埋孔设计规则项名称

## 签名

```typescript
setState_DesignRuleBlindViaName(designRuleBlindViaName: string | null): IPCB_PrimitiveVia;
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

designRuleBlindViaName


</td><td>

string \| null


</td><td>

盲埋孔设计规则项名称


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_diameter

# IPCB\_PrimitiveVia.setState\_Diameter() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：外径

## 签名

```typescript
setState_Diameter(diameter: number): IPCB_PrimitiveVia;
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

diameter


</td><td>

number


</td><td>

外径


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_holediameter

# IPCB\_PrimitiveVia.setState\_HoleDiameter() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：孔径

## 签名

```typescript
setState_HoleDiameter(holeDiameter: number): IPCB_PrimitiveVia;
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

holeDiameter


</td><td>

number


</td><td>

孔径


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_net

# IPCB\_PrimitiveVia.setState\_Net() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：网络名称

## 签名

```typescript
setState_Net(net: string): IPCB_PrimitiveVia;
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

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_primitivelock

# IPCB\_PrimitiveVia.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveVia;
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

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_soldermaskexpansion

# IPCB\_PrimitiveVia.setState\_SolderMaskExpansion() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：阻焊/助焊扩展

## 签名

```typescript
setState_SolderMaskExpansion(solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null): IPCB_PrimitiveVia;
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

solderMaskExpansion


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

阻焊/助焊扩展


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_viatype

# IPCB\_PrimitiveVia.setState\_ViaType() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：过孔类型

## 签名

```typescript
setState_ViaType(viaType: EPCB_PrimitiveViaType): IPCB_PrimitiveVia;
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

viaType


</td><td>

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)


</td><td>

过孔类型


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_x

# IPCB\_PrimitiveVia.setState\_X() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：坐标 X

## 签名

```typescript
setState_X(x: number): IPCB_PrimitiveVia;
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

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### setstate_y

# IPCB\_PrimitiveVia.setState\_Y() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：坐标 Y

## 签名

```typescript
setState_Y(y: number): IPCB_PrimitiveVia;
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

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### toasync

# IPCB\_PrimitiveVia.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitiveVia;
```


## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象

### tosync

# IPCB\_PrimitiveVia.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitiveVia;
```


## 返回值

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

过孔图元对象
