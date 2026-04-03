# IPCB\_PrimitivePad class

焊盘图元

## 签名

```typescript
declare class IPCB_PrimitivePad implements IPCB_Primitive 
```
**实现自：**[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## 备注


## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[async](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

异步


</td></tr>
<tr><td>

[heatWelding](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

IPCB\_PrimitivePadHeatWelding \| null


</td><td>

热焊优化参数


</td></tr>
<tr><td>

[hole](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

[TPCB\_PrimitivePadHole](../types/TPCB_PrimitivePadHole.md) \| null


</td><td>

孔


</td></tr>
<tr><td>

[holeOffsetX](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

number


</td><td>

孔偏移 X


</td></tr>
<tr><td>

[holeOffsetY](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

number


</td><td>

孔偏移 Y


</td></tr>
<tr><td>

[holeRotation](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

number


</td><td>

孔相对于焊盘的旋转角度


</td></tr>
<tr><td>

[layer](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)


</td><td>

层


</td></tr>
<tr><td>

[metallization](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

是否金属化孔壁


</td></tr>
<tr><td>

[net?](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_（可选）_ 网络名称


</td></tr>
<tr><td>

[pad?](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

[TPCB\_PrimitivePadShape](../types/TPCB_PrimitivePadShape.md)


</td><td>

_（可选）_ 焊盘外形


</td></tr>
<tr><td>

[padNumber](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

string


</td><td>

焊盘编号


</td></tr>
<tr><td>

[padType](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

[EPCB\_PrimitivePadType](../enums/EPCB_PrimitivePadType.md)


</td><td>

焊盘类型


</td></tr>
<tr><td>

[primitiveId?](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_（可选）_ 图元 ID


</td></tr>
<tr><td>

[primitiveLock](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

是否锁定


</td></tr>
<tr><td>

[primitiveType](./IPCB_PrimitivePad.md)


</td><td>

`protected`

`readonly`


</td><td>

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)


</td><td>

图元类型


</td></tr>
<tr><td>

[rotation](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

number


</td><td>

旋转角度


</td></tr>
<tr><td>

[solderMaskAndPasteMaskExpansion](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

阻焊/助焊扩展


</td></tr>
<tr><td>

[specialPad?](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

[TPCB\_PrimitiveSpecialPadShape](../types/TPCB_PrimitiveSpecialPadShape.md)


</td><td>

_（可选）_ 特殊焊盘外形


</td></tr>
<tr><td>

[x](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

number


</td><td>

位置 X


</td></tr>
<tr><td>

[y](./IPCB_PrimitivePad.md)


</td><td>

`protected`


</td><td>

number


</td><td>

位置 Y


</td></tr>
</tbody></table>

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[create()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 在 PCB 画布中创建图元


</td></tr>
<tr><td>

[done()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_HeatWelding()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：热焊优化参数


</td></tr>
<tr><td>

[getState\_Hole()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：孔


</td></tr>
<tr><td>

[getState\_HoleOffsetX()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：孔偏移 X


</td></tr>
<tr><td>

[getState\_HoleOffsetY()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：孔偏移 Y


</td></tr>
<tr><td>

[getState\_HoleRotation()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：孔相对于焊盘的旋转角度


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_Metallization()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：是否金属化孔壁


</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：网络名称


</td></tr>
<tr><td>

[getState\_Pad()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：焊盘外形


</td></tr>
<tr><td>

[getState\_PadNumber()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：焊盘编号


</td></tr>
<tr><td>

[getState\_PadType()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：焊盘类型


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_SolderMaskAndPasteMaskExpansion()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：阻焊/助焊扩展


</td></tr>
<tr><td>

[getState\_SpecialPad()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：特殊焊盘外形


</td></tr>
<tr><td>

[getState\_X()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：位置 X


</td></tr>
<tr><td>

[getState\_Y()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

获取属性状态：位置 Y


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_HeatWelding(heatWelding)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：热焊优化参数


</td></tr>
<tr><td>

[setState\_Hole(hole)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：孔


</td></tr>
<tr><td>

[setState\_HoleOffsetX(holeOffsetX)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：孔偏移 X


</td></tr>
<tr><td>

[setState\_HoleOffsetY(holeOffsetY)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：孔偏移 Y


</td></tr>
<tr><td>

[setState\_HoleRotation(holeRotation)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：孔相对于焊盘的旋转角度


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_Metallization(metallization)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否金属化孔壁


</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：网络


</td></tr>
<tr><td>

[setState\_Pad(pad)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：焊盘外形


</td></tr>
<tr><td>

[setState\_PadNumber(padNumber)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：焊盘编号


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_SolderMaskAndPasteMaskExpansion(solderMaskAndPasteMaskExpansion)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：阻焊/助焊扩展


</td></tr>
<tr><td>

[setState\_SpecialPad(specialPad)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：特殊焊盘外形


</td></tr>
<tr><td>

[setState\_X(x)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：位置 X


</td></tr>
<tr><td>

[setState\_Y(y)](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：位置 Y


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitivePad.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 属性详情

### async

# IPCB\_PrimitivePad.async property

异步

## 签名

```typescript
protected async: boolean;
```

### heatwelding

# IPCB\_PrimitivePad.heatWelding property

热焊优化参数

## 签名

```typescript
protected heatWelding: IPCB_PrimitivePadHeatWelding | null;
```

### hole

# IPCB\_PrimitivePad.hole property

孔

## 签名

```typescript
protected hole: TPCB_PrimitivePadHole | null;
```

### holeoffsetx

# IPCB\_PrimitivePad.holeOffsetX property

孔偏移 X

## 签名

```typescript
protected holeOffsetX: number;
```

### holeoffsety

# IPCB\_PrimitivePad.holeOffsetY property

孔偏移 Y

## 签名

```typescript
protected holeOffsetY: number;
```

### holerotation

# IPCB\_PrimitivePad.holeRotation property

孔相对于焊盘的旋转角度

## 签名

```typescript
protected holeRotation: number;
```

### layer

# IPCB\_PrimitivePad.layer property

层

## 签名

```typescript
protected layer: TPCB_LayersOfPad;
```

### metallization

# IPCB\_PrimitivePad.metallization property

是否金属化孔壁

## 签名

```typescript
protected metallization: boolean;
```

### net

# IPCB\_PrimitivePad.net property

网络名称

## 签名

```typescript
protected net?: string;
```

### pad

# IPCB\_PrimitivePad.pad property

焊盘外形

## 签名

```typescript
protected pad?: TPCB_PrimitivePadShape;
```

### padnumber

# IPCB\_PrimitivePad.padNumber property

焊盘编号

## 签名

```typescript
protected padNumber: string;
```

### padtype

# IPCB\_PrimitivePad.padType property

焊盘类型

## 签名

```typescript
protected padType: EPCB_PrimitivePadType;
```

### primitiveid

# IPCB\_PrimitivePad.primitiveId property

图元 ID

## 签名

```typescript
protected primitiveId?: string;
```

### primitivelock

# IPCB\_PrimitivePad.primitiveLock property

是否锁定

## 签名

```typescript
protected primitiveLock: boolean;
```

### primitivetype

# IPCB\_PrimitivePad.primitiveType property

图元类型

## 签名

```typescript
protected readonly primitiveType: EPCB_PrimitiveType;
```

### rotation

# IPCB\_PrimitivePad.rotation property

旋转角度

## 签名

```typescript
protected rotation: number;
```

### soldermaskandpastemaskexpansion

# IPCB\_PrimitivePad.solderMaskAndPasteMaskExpansion property

阻焊/助焊扩展

## 签名

```typescript
protected solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
```

### specialpad

# IPCB\_PrimitivePad.specialPad property

特殊焊盘外形

## 签名

```typescript
protected specialPad?: TPCB_PrimitiveSpecialPadShape;
```

### x

# IPCB\_PrimitivePad.x property

位置 X

## 签名

```typescript
protected x: number;
```

### y

# IPCB\_PrimitivePad.y property

位置 Y

## 签名

```typescript
protected y: number;
```


---

## 方法详情

### create

# IPCB\_PrimitivePad.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

在 PCB 画布中创建图元

## 签名

```typescript
create(): Promise<IPCB_PrimitivePad>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;

焊盘图元对象

### done

# IPCB\_PrimitivePad.done() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitivePad>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;

尺寸标注图元对象

### getstate_heatwelding

# IPCB\_PrimitivePad.getState\_HeatWelding() method

获取属性状态：热焊优化参数

## 签名

```typescript
getState_HeatWelding(): IPCB_PrimitivePadHeatWelding | null;
```


## 返回值

IPCB\_PrimitivePadHeatWelding \| null

热焊优化参数

### getstate_hole

# IPCB\_PrimitivePad.getState\_Hole() method

获取属性状态：孔

## 签名

```typescript
getState_Hole(): TPCB_PrimitivePadHole | null;
```


## 返回值

[TPCB\_PrimitivePadHole](../types/TPCB_PrimitivePadHole.md) \| null

孔

### getstate_holeoffsetx

# IPCB\_PrimitivePad.getState\_HoleOffsetX() method

获取属性状态：孔偏移 X

## 签名

```typescript
getState_HoleOffsetX(): number;
```


## 返回值

number

孔偏移 X

### getstate_holeoffsety

# IPCB\_PrimitivePad.getState\_HoleOffsetY() method

获取属性状态：孔偏移 Y

## 签名

```typescript
getState_HoleOffsetY(): number;
```


## 返回值

number

孔偏移 Y

### getstate_holerotation

# IPCB\_PrimitivePad.getState\_HoleRotation() method

获取属性状态：孔相对于焊盘的旋转角度

## 签名

```typescript
getState_HoleRotation(): number;
```


## 返回值

number

孔相对于焊盘的旋转角度

### getstate_layer

# IPCB\_PrimitivePad.getState\_Layer() method

获取属性状态：层

## 签名

```typescript
getState_Layer(): TPCB_LayersOfPad;
```


## 返回值

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)

层

### getstate_metallization

# IPCB\_PrimitivePad.getState\_Metallization() method

获取属性状态：是否金属化孔壁

## 签名

```typescript
getState_Metallization(): boolean;
```


## 返回值

boolean

是否金属化孔壁

### getstate_net

# IPCB\_PrimitivePad.getState\_Net() method

获取属性状态：网络名称

## 签名

```typescript
getState_Net(): string | undefined;
```


## 返回值

string \| undefined

网络名称

### getstate_pad

# IPCB\_PrimitivePad.getState\_Pad() method

获取属性状态：焊盘外形

## 签名

```typescript
getState_Pad(): TPCB_PrimitivePadShape | undefined;
```


## 返回值

[TPCB\_PrimitivePadShape](../types/TPCB_PrimitivePadShape.md) \| undefined

焊盘外形

### getstate_padnumber

# IPCB\_PrimitivePad.getState\_PadNumber() method

获取属性状态：焊盘编号

## 签名

```typescript
getState_PadNumber(): string;
```


## 返回值

string

焊盘编号

### getstate_padtype

# IPCB\_PrimitivePad.getState\_PadType() method

获取属性状态：焊盘类型

## 签名

```typescript
getState_PadType(): EPCB_PrimitivePadType;
```


## 返回值

[EPCB\_PrimitivePadType](../enums/EPCB_PrimitivePadType.md)

焊盘类型

### getstate_primitiveid

# IPCB\_PrimitivePad.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitivePad.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitivePad.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_rotation

# IPCB\_PrimitivePad.getState\_Rotation() method

获取属性状态：旋转角度

## 签名

```typescript
getState_Rotation(): number;
```


## 返回值

number

旋转角度

### getstate_soldermaskandpastemaskexpansion

# IPCB\_PrimitivePad.getState\_SolderMaskAndPasteMaskExpansion() method

获取属性状态：阻焊/助焊扩展

## 签名

```typescript
getState_SolderMaskAndPasteMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
```


## 返回值

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null

阻焊/助焊扩展

### getstate_specialpad

# IPCB\_PrimitivePad.getState\_SpecialPad() method

获取属性状态：特殊焊盘外形

## 签名

```typescript
getState_SpecialPad(): TPCB_PrimitiveSpecialPadShape | undefined;
```


## 返回值

[TPCB\_PrimitiveSpecialPadShape](../types/TPCB_PrimitiveSpecialPadShape.md) \| undefined

特殊焊盘外形

### getstate_x

# IPCB\_PrimitivePad.getState\_X() method

获取属性状态：位置 X

## 签名

```typescript
getState_X(): number;
```


## 返回值

number

位置 X

### getstate_y

# IPCB\_PrimitivePad.getState\_Y() method

获取属性状态：位置 Y

## 签名

```typescript
getState_Y(): number;
```


## 返回值

number

位置 Y

### isasync

# IPCB\_PrimitivePad.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitivePad.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitivePad>;
```


## 返回值

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;

焊盘图元对象

### setstate_heatwelding

# IPCB\_PrimitivePad.setState\_HeatWelding() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：热焊优化参数

## 签名

```typescript
setState_HeatWelding(heatWelding: IPCB_PrimitivePadHeatWelding | null): IPCB_PrimitivePad;
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

heatWelding


</td><td>

IPCB\_PrimitivePadHeatWelding \| null


</td><td>

热焊优化参数


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### setstate_hole

# IPCB\_PrimitivePad.setState\_Hole() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：孔

## 签名

```typescript
setState_Hole(hole: TPCB_PrimitivePadHole): IPCB_PrimitivePad;
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

hole


</td><td>

[TPCB\_PrimitivePadHole](../types/TPCB_PrimitivePadHole.md)


</td><td>

焊盘钻孔


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

设置孔时将会联动设置部分其它属性状态：

1. 层将会强制切换到多层

本接口无法将孔设置为 `null`<!-- -->，如果想要移除孔属性，请使用 [setState\_Layer](./IPCB_PrimitivePad.md) 方法切换层为顶层或底层

### setstate_holeoffsetx

# IPCB\_PrimitivePad.setState\_HoleOffsetX() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：孔偏移 X

## 签名

```typescript
setState_HoleOffsetX(holeOffsetX: number): IPCB_PrimitivePad;
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

holeOffsetX


</td><td>

number


</td><td>

孔偏移 X


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

如若孔不存在，则属性将不会被修改

### setstate_holeoffsety

# IPCB\_PrimitivePad.setState\_HoleOffsetY() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：孔偏移 Y

## 签名

```typescript
setState_HoleOffsetY(holeOffsetY: number): IPCB_PrimitivePad;
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

holeOffsetY


</td><td>

number


</td><td>

孔偏移 Y


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

如若孔不存在，则属性将不会被修改

### setstate_holerotation

# IPCB\_PrimitivePad.setState\_HoleRotation() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：孔相对于焊盘的旋转角度

## 签名

```typescript
setState_HoleRotation(holeRotation: number): IPCB_PrimitivePad;
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

holeRotation


</td><td>

number


</td><td>

孔相对于焊盘的旋转角度


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

如若孔不存在，则属性将不会被修改

### setstate_layer

# IPCB\_PrimitivePad.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfPad): IPCB_PrimitivePad;
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

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)


</td><td>

层


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

设置层时将会联动设置部分其它属性状态：

1. 顶层与底层切换时：阻焊/助焊扩展属性将会跟随切换，数据值不变

2. 多层切换到单层时：判断切换到顶层还是底层，阻焊/助焊扩展属性将只保留指定层对应的数据；如若存在特殊焊盘，将转换为普通焊盘属性，并且只保留指定层对应的数据；与孔有关的属性将被重置到默认值

3. 单层切换到多层时：阻焊/助焊扩展属性将只保留阻焊扩展，并复制原数据应用于顶层和底层；焊盘钻孔属性将被赋指定值，长宽均为焊盘直径（焊盘为长圆形或正多边形）、宽（焊盘为矩形）的 60% 的长圆形（数据层面上是长圆形，实则是正圆形），如若焊盘为折线复杂多边形，则通过专用算法计算得出数据（通常比较抽象，建议后期修改）

### setstate_metallization

# IPCB\_PrimitivePad.setState\_Metallization() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否金属化孔壁

## 签名

```typescript
setState_Metallization(metallization: boolean): IPCB_PrimitivePad;
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

metallization


</td><td>

boolean


</td><td>

是否金属化孔壁


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

如若孔不存在，则属性将不会被修改

### setstate_net

# IPCB\_PrimitivePad.setState\_Net() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：网络

## 签名

```typescript
setState_Net(net?: string): IPCB_PrimitivePad;
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

_（可选）_ 网络名称


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

本接口仅在 PCB 编辑器可用，空字符串与 `undefined` 均被视为空网络

### setstate_pad

# IPCB\_PrimitivePad.setState\_Pad() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：焊盘外形

## 签名

```typescript
setState_Pad(pad: TPCB_PrimitivePadShape): IPCB_PrimitivePad;
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

pad


</td><td>

[TPCB\_PrimitivePadShape](../types/TPCB_PrimitivePadShape.md)


</td><td>

焊盘外形


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

设置焊盘外形时将会联动设置部分其它属性状态：

1. 特殊焊盘外形属性将被清空

### setstate_padnumber

# IPCB\_PrimitivePad.setState\_PadNumber() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：焊盘编号

## 签名

```typescript
setState_PadNumber(padNumber: string): IPCB_PrimitivePad;
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

padNumber


</td><td>

string


</td><td>

焊盘编号


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### setstate_primitivelock

# IPCB\_PrimitivePad.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePad;
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

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### setstate_rotation

# IPCB\_PrimitivePad.setState\_Rotation() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：旋转角度

## 签名

```typescript
setState_Rotation(rotation: number): IPCB_PrimitivePad;
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

rotation


</td><td>

number


</td><td>

旋转角度


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### setstate_soldermaskandpastemaskexpansion

# IPCB\_PrimitivePad.setState\_SolderMaskAndPasteMaskExpansion() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：阻焊/助焊扩展

## 签名

```typescript
setState_SolderMaskAndPasteMaskExpansion(solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null): IPCB_PrimitivePad;
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

solderMaskAndPasteMaskExpansion


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

阻焊/助焊扩展


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### setstate_specialpad

# IPCB\_PrimitivePad.setState\_SpecialPad() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：特殊焊盘外形

## 签名

```typescript
setState_SpecialPad(specialPad: TPCB_PrimitiveSpecialPadShape): IPCB_PrimitivePad;
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

specialPad


</td><td>

[TPCB\_PrimitiveSpecialPadShape](../types/TPCB_PrimitiveSpecialPadShape.md)


</td><td>


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

## 备注

设置特殊焊盘外形时将会联动设置部分其它属性状态：

1. 焊盘外形属性将被清空

### setstate_x

# IPCB\_PrimitivePad.setState\_X() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：位置 X

## 签名

```typescript
setState_X(x: number): IPCB_PrimitivePad;
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

位置 X


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### setstate_y

# IPCB\_PrimitivePad.setState\_Y() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：位置 Y

## 签名

```typescript
setState_Y(y: number): IPCB_PrimitivePad;
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

位置 Y


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### toasync

# IPCB\_PrimitivePad.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitivePad;
```


## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象

### tosync

# IPCB\_PrimitivePad.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitivePad;
```


## 返回值

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

焊盘图元对象
