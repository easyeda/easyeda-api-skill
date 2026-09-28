# IPCB\_PrimitivePad class

Pad primitive

## Signature

```typescript
class IPCB_PrimitivePad implements IPCB_Primitive
```
**Implements:** [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## Remarks

## Properties

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

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

[IPCB\_PrimitivePadHeatWelding](../interfaces/IPCB_PrimitivePadHeatWelding.md) \| null

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

_(Optional)_ 网络名称

</td></tr>
<tr><td>

[pad?](./IPCB_PrimitivePad.md)

</td><td>

`protected`

</td><td>

[TPCB\_PrimitivePadShape](../types/TPCB_PrimitivePadShape.md)

</td><td>

_(Optional)_ 焊盘外形

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

_(Optional)_ 图元 ID

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

_(Optional)_ 特殊焊盘外形

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

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[create()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** In PCB canvas in create primitive

</td></tr>
<tr><td>

[done()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_HeatWelding()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: thermal relief optimization parameters

</td></tr>
<tr><td>

[getState\_Hole()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: hole

</td></tr>
<tr><td>

[getState\_HoleOffsetX()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: hole offset X

</td></tr>
<tr><td>

[getState\_HoleOffsetY()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: hole offset Y

</td></tr>
<tr><td>

[getState\_HoleRotation()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: Rotation angle of the hole relative to the pad

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_Metallization()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: Whether the hole wall is plated

</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_Pad()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: pad shape

</td></tr>
<tr><td>

[getState\_PadNumber()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: pad number

</td></tr>
<tr><td>

[getState\_PadType()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: pad type

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_Rotation()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: rotation angle

</td></tr>
<tr><td>

[getState\_SolderMaskAndPasteMaskExpansion()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: solder mask / paste mask expansion

</td></tr>
<tr><td>

[getState\_SpecialPad()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: special pad shape

</td></tr>
<tr><td>

[getState\_X()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: X position

</td></tr>
<tr><td>

[getState\_Y()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Get the property state: Y position

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_HeatWelding(heatWelding)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: thermal relief optimization parameters

</td></tr>
<tr><td>

[setState\_Hole(hole)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: hole

</td></tr>
<tr><td>

[setState\_HoleOffsetX(holeOffsetX)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: hole offset X

</td></tr>
<tr><td>

[setState\_HoleOffsetY(holeOffsetY)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: hole offset Y

</td></tr>
<tr><td>

[setState\_HoleRotation(holeRotation)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Rotation angle of the hole relative to the pad

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_Metallization(metallization)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Whether the hole wall is plated

</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net

</td></tr>
<tr><td>

[setState\_Pad(pad)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pad shape

</td></tr>
<tr><td>

[setState\_PadNumber(padNumber)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pad number

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: rotation angle

</td></tr>
<tr><td>

[setState\_SolderMaskAndPasteMaskExpansion(solderMaskAndPasteMaskExpansion)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: solder mask / paste mask expansion

</td></tr>
<tr><td>

[setState\_SpecialPad(specialPad)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: special pad shape

</td></tr>
<tr><td>

[setState\_X(x)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: X position

</td></tr>
<tr><td>

[setState\_Y(y)](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Y position

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitivePad.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 属性详情

### async

# IPCB\_PrimitivePad.async property

异步

## Signature

```typescript
function async: boolean;
```

### heatwelding

# IPCB\_PrimitivePad.heatWelding property

热焊优化参数

## Signature

```typescript
function heatWelding: IPCB_PrimitivePadHeatWelding | null;
```

### hole

# IPCB\_PrimitivePad.hole property

孔

## Signature

```typescript
function hole: TPCB_PrimitivePadHole | null;
```

### holeoffsetx

# IPCB\_PrimitivePad.holeOffsetX property

孔偏移 X

## Signature

```typescript
function holeOffsetX: number;
```

### holeoffsety

# IPCB\_PrimitivePad.holeOffsetY property

孔偏移 Y

## Signature

```typescript
function holeOffsetY: number;
```

### holerotation

# IPCB\_PrimitivePad.holeRotation property

孔相对于焊盘的旋转角度

## Signature

```typescript
function holeRotation: number;
```

### layer

# IPCB\_PrimitivePad.layer property

层

## Signature

```typescript
function layer: TPCB_LayersOfPad;
```

### metallization

# IPCB\_PrimitivePad.metallization property

是否金属化孔壁

## Signature

```typescript
function metallization: boolean;
```

### net

# IPCB\_PrimitivePad.net property

网络名称

## Signature

```typescript
function net?: string;
```

### pad

# IPCB\_PrimitivePad.pad property

焊盘外形

## Signature

```typescript
function pad?: TPCB_PrimitivePadShape;
```

### padnumber

# IPCB\_PrimitivePad.padNumber property

焊盘编号

## Signature

```typescript
function padNumber: string;
```

### padtype

# IPCB\_PrimitivePad.padType property

焊盘类型

## Signature

```typescript
function padType: EPCB_PrimitivePadType;
```

### primitiveid

# IPCB\_PrimitivePad.primitiveId property

图元 ID

## Signature

```typescript
function primitiveId?: string;
```

### primitivelock

# IPCB\_PrimitivePad.primitiveLock property

是否锁定

## Signature

```typescript
function primitiveLock: boolean;
```

### primitivetype

# IPCB\_PrimitivePad.primitiveType property

图元类型

## Signature

```typescript
function readonly primitiveType: EPCB_PrimitiveType;
```

### rotation

# IPCB\_PrimitivePad.rotation property

旋转角度

## Signature

```typescript
function rotation: number;
```

### soldermaskandpastemaskexpansion

# IPCB\_PrimitivePad.solderMaskAndPasteMaskExpansion property

阻焊/助焊扩展

## Signature

```typescript
function solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
```

### specialpad

# IPCB\_PrimitivePad.specialPad property

特殊焊盘外形

## Signature

```typescript
function specialPad?: TPCB_PrimitiveSpecialPadShape;
```

### x

# IPCB\_PrimitivePad.x property

位置 X

## Signature

```typescript
function x: number;
```

### y

# IPCB\_PrimitivePad.y property

位置 Y

## Signature

```typescript
function y: number;
```


---

## 方法详情

### create

# IPCB\_PrimitivePad.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

In PCB canvas in create primitive

## Signature

```typescript
function create(): Promise<IPCB_PrimitivePad>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层放置一个圆形贴片焊盘（直径 60mil）
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取创建结果，确认层、编号与外形（保留现场供画布观察）
console.log('created:', !!pad);
console.log('layer:', pad.getState_Layer());
console.log('padNumber:', pad.getState_PadNumber());
console.log('padShape:', pad.getState_Pad());
```

### done

# IPCB\_PrimitivePad.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitivePad>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;

Dimension primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层放置一个圆形贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 异步模式下连续修改旋转和编号（此时画布尚未变化）
const a = pad.toAsync();
a.setState_Rotation(90);
a.setState_PadNumber('嘉立创示例_A1');

// 3. 一次性提交到画布
await a.done();

// 4. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('rotation:', ref.getState_Rotation());
console.log('padNumber:', ref.getState_PadNumber());
```

### getstate_heatwelding

# IPCB\_PrimitivePad.getState\_HeatWelding() method

Get the property state: thermal relief optimization parameters

## Signature

```typescript
function getState_HeatWelding(): IPCB_PrimitivePadHeatWelding | null;
```

## Returns

[IPCB\_PrimitivePadHeatWelding](../interfaces/IPCB_PrimitivePadHeatWelding.md) \| null

Thermal relief optimization parameters

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个带热焊参数的焊盘和一个普通焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const heated = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0, undefined, null, { connectionMethod: 'Divergent', divergenceSpacing: 10, divergenceLineWidth: 8, divergenceAngle: 45 });
const plain = await eda.pcb_PrimitivePad.create(1, '2', x + 500, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 分别读取热焊参数
const heatedConfig = heated.getState_HeatWelding();
const plainConfig = plain.getState_HeatWelding();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([heated.getState_PrimitiveId(), plain.getState_PrimitiveId()]);

console.log('heatedConfig:', heatedConfig);
console.log('plainConfig:', plainConfig);
```

### getstate_hole

# IPCB\_PrimitivePad.getState\_Hole() method

Get the property state: hole

## Signature

```typescript
function getState_Hole(): TPCB_PrimitivePadHole | null;
```

## Returns

[TPCB\_PrimitivePadHole](../types/TPCB_PrimitivePadHole.md) \| null

Hole

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个带圆孔的通孔焊盘和一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const through = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 0, false, 0);
const smd = await eda.pcb_PrimitivePad.create(1, '2', x + 500, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 分别读取钻孔参数
const throughHole = through.getState_Hole();
const smdHole = smd.getState_Hole();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([through.getState_PrimitiveId(), smd.getState_PrimitiveId()]);

console.log('throughHole:', throughHole);
console.log('smdHole:', smdHole);
```

### getstate_holeoffsetx

# IPCB\_PrimitivePad.getState\_HoleOffsetX() method

Get the property state: hole offset X

## Signature

```typescript
function getState_HoleOffsetX(): number;
```

## Returns

number

Hole offset X

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个孔心向右偏 10mil 的通孔焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 10, 0, 0, false, 0);

// 2. 读取孔偏移 X
const holeOffsetX = pad.getState_HoleOffsetX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('holeOffsetX:', holeOffsetX);
```

### getstate_holeoffsety

# IPCB\_PrimitivePad.getState\_HoleOffsetY() method

Get the property state: hole offset Y

## Signature

```typescript
function getState_HoleOffsetY(): number;
```

## Returns

number

Hole offset Y

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个孔心向上偏 20mil 的通孔焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 20, 0, false, 0);

// 2. 读取孔偏移 Y
const holeOffsetY = pad.getState_HoleOffsetY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('holeOffsetY:', holeOffsetY);
```

### getstate_holerotation

# IPCB\_PrimitivePad.getState\_HoleRotation() method

Get the property state: Rotation angle of the hole relative to the pad

## Signature

```typescript
function getState_HoleRotation(): number;
```

## Returns

number

Rotation angle of the hole relative to the pad

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个孔旋转 45 度的通孔焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 45, false, 0);

// 2. 读取孔旋转角度
const holeRotation = pad.getState_HoleRotation();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('holeRotation:', holeRotation);
```

### getstate_layer

# IPCB\_PrimitivePad.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfPad;
```

## Returns

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)

Layer

## Example

```javascript
// 1. 生成本次运行专用的坐标，分别在顶层和多层创建焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const top = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const multi = await eda.pcb_PrimitivePad.create(12, '2', x + 500, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 0, false, 0);

// 2. 分别读取层属性
const topLayer = top.getState_Layer();
const multiLayer = multi.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([top.getState_PrimitiveId(), multi.getState_PrimitiveId()]);

console.log('topLayer:', topLayer);
console.log('multiLayer:', multiLayer);
```

### getstate_metallization

# IPCB\_PrimitivePad.getState\_Metallization() method

Get the property state: Whether the hole wall is plated

## Signature

```typescript
function getState_Metallization(): boolean;
```

## Returns

boolean

Whether the hole wall is plated

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个金属化孔焊盘和一个非金属化孔焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const plated = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 0, true, 0);
const nonPlated = await eda.pcb_PrimitivePad.create(12, '2', x + 500, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 0, false, 0);

// 2. 分别读取金属化状态
const platedMetallization = plated.getState_Metallization();
const nonPlatedMetallization = nonPlated.getState_Metallization();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([plated.getState_PrimitiveId(), nonPlated.getState_PrimitiveId()]);

console.log('platedMetallization:', platedMetallization);
console.log('nonPlatedMetallization:', nonPlatedMetallization);
```

### getstate_net

# IPCB\_PrimitivePad.getState\_Net() method

Get the property state: net name

## Signature

```typescript
function getState_Net(): string | undefined;
```

## Returns

string \| undefined

Net name

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个挂网络的焊盘和一个无网络焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const netted = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '嘉立创示例_NET1', null, 0, 0, 0, false, 0);
const free = await eda.pcb_PrimitivePad.create(1, '2', x + 500, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 分别读取网络名称
const nettedNet = netted.getState_Net();
const freeNet = free.getState_Net();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([netted.getState_PrimitiveId(), free.getState_PrimitiveId()]);

console.log('nettedNet:', nettedNet);
console.log('freeNet:', freeNet);
```

### getstate_pad

# IPCB\_PrimitivePad.getState\_Pad() method

Get the property state: pad shape

## Signature

```typescript
function getState_Pad(): TPCB_PrimitivePadShape | undefined;
```

## Returns

[TPCB\_PrimitivePadShape](../types/TPCB_PrimitivePadShape.md) \| undefined

Pad shape

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个圆形贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取焊盘外形
const padShape = pad.getState_Pad();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('padShape:', padShape);
```

### getstate_padnumber

# IPCB\_PrimitivePad.getState\_PadNumber() method

Get the property state: pad number

## Signature

```typescript
function getState_PadNumber(): string;
```

## Returns

string

Pad number

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个编号为 '1' 的贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取焊盘编号
const padNumber = pad.getState_PadNumber();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('padNumber:', padNumber);
```

### getstate_padtype

# IPCB\_PrimitivePad.getState\_PadType() method

Get the property state: pad type

## Signature

```typescript
function getState_PadType(): EPCB_PrimitivePadType;
```

## Returns

[EPCB\_PrimitivePadType](../enums/EPCB_PrimitivePadType.md)

Pad type

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个普通焊盘和一个标识点
const x = 3000 + Math.floor(Math.random() * 100000);
const normal = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const mark = await eda.pcb_PrimitivePad.create(1, '2', x + 500, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 2);

// 2. 分别读取焊盘类型（0=普通 1=测试点 2=标识点）
const normalType = normal.getState_PadType();
const markType = mark.getState_PadType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([normal.getState_PrimitiveId(), mark.getState_PrimitiveId()]);

console.log('normalType:', normalType);
console.log('markType:', markType);
```

### getstate_primitiveid

# IPCB\_PrimitivePad.getState\_PrimitiveId() method

Get the property state: primitive ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

Primitive ID

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取图元 ID
const primitiveId = pad.getState_PrimitiveId();

// 3. 用 ID 从画布重新获取焊盘，验证句柄有效
const refetched = await eda.pcb_PrimitivePad.get(primitiveId);

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetchSamePad:', refetched.getState_PrimitiveId() === primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitivePad.getState\_PrimitiveLock() method

Get the property state: whether it is locked

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

Whether it is locked

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个锁定的焊盘（最后一个参数 primitiveLock=true）
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0, undefined, null, null, true);

// 2. 读取锁定状态
const primitiveLock = pad.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('primitiveLock:', primitiveLock);
```

### getstate_primitivetype

# IPCB\_PrimitivePad.getState\_PrimitiveType() method

Get the property state: primitive type

## Signature

```typescript
function getState_PrimitiveType(): EPCB_PrimitiveType;
```

## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

Primitive type

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取图元类型（焊盘固定返回 'Pad'）
const primitiveType = pad.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_rotation

# IPCB\_PrimitivePad.getState\_Rotation() method

Get the property state: rotation angle

## Signature

```typescript
function getState_Rotation(): number;
```

## Returns

number

Rotation angle

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个旋转 90 度的长圆形焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 90, ['OVAL', 80, 40], '', null, 0, 0, 0, false, 0);

// 2. 读取旋转角度
const rotation = pad.getState_Rotation();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('rotation:', rotation);
```

### getstate_soldermaskandpastemaskexpansion

# IPCB\_PrimitivePad.getState\_SolderMaskAndPasteMaskExpansion() method

Get the property state: solder mask / paste mask expansion

## Signature

```typescript
function getState_SolderMaskAndPasteMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
```

## Returns

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null

Solder mask / paste mask expansion

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个自定义扩展的贴片焊盘和一个默认焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const customized = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0, undefined, { topSolderMask: 4, topPasteMask: 2 });
const plain = await eda.pcb_PrimitivePad.create(1, '2', x + 500, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 分别读取扩展配置
const customizedExpansion = customized.getState_SolderMaskAndPasteMaskExpansion();
const plainExpansion = plain.getState_SolderMaskAndPasteMaskExpansion();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([customized.getState_PrimitiveId(), plain.getState_PrimitiveId()]);

console.log('customizedExpansion:', customizedExpansion);
console.log('plainExpansion:', plainExpansion);
```

### getstate_specialpad

# IPCB\_PrimitivePad.getState\_SpecialPad() method

Get the property state: special pad shape

## Signature

```typescript
function getState_SpecialPad(): TPCB_PrimitiveSpecialPadShape | undefined;
```

## Returns

[TPCB\_PrimitiveSpecialPadShape](../types/TPCB_PrimitiveSpecialPadShape.md) \| undefined

Special pad shape

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建普通焊盘与创建时尝试带特殊外形的焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const plain = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const attempted = await eda.pcb_PrimitivePad.create(1, '2', x + 500, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0, [[1, 1, ['ELLIPSE', 40, 40]]]);

// 2. 分别读取特殊焊盘外形
const plainSpecial = plain.getState_SpecialPad();
const attemptedSpecial = attempted.getState_SpecialPad();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([plain.getState_PrimitiveId(), attempted.getState_PrimitiveId()]);

console.log('plainSpecial:', plainSpecial);
console.log('attemptedSpecial:', attemptedSpecial);
console.log('normalShapeKept:', JSON.stringify(attempted.getState_Pad()) === JSON.stringify(['ELLIPSE', 60, 60]));
```

### getstate_x

# IPCB\_PrimitivePad.getState\_X() method

Get the property state: X position

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

X position

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取位置 X
const posX = pad.getState_X();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('posX:', posX);
```

### getstate_y

# IPCB\_PrimitivePad.getState\_Y() method

Get the property state: Y position

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

Y position

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3500, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取位置 Y
const posY = pad.getState_Y();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('posY:', posY);
```

### isasync

# IPCB\_PrimitivePad.isAsync() method

Query whether the primitive is an async primitive

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

Whether Is async primitive

## Example

```javascript
// 1. 在顶层放置一个圆形贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 读取创建后的模式
const afterCreate = pad.isAsync();

// 3. 切换模式再各读一次
const afterToSync = pad.toSync().isAsync();
const afterToAsync = pad.toAsync().isAsync();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('afterCreate:', afterCreate);
console.log('afterToSync:', afterToSync);
console.log('afterToAsync:', afterToAsync);
```

### reset

# IPCB\_PrimitivePad.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitivePad>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;

Pad primitive object

## Example

```javascript
// 1. 在顶层放置一个未旋转的圆形贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 异步模式下把旋转改成 45 度（尚未提交）
const a = pad.toAsync();
a.setState_Rotation(45);

// 3. 重置：丢弃未提交的修改，回到画布当前状态
await a.reset();

// 4. 从画布重新读取，确认旋转仍是 0（reset 后要以重新 get() 的结果为准）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

// 5. 清理测试图元
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);

console.log('rotationAfterReset:', ref.getState_Rotation());
```

### setstate_heatwelding

# IPCB\_PrimitivePad.setState\_HeatWelding() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: thermal relief optimization parameters

## Signature

```typescript
function setState_HeatWelding(heatWelding: IPCB_PrimitivePadHeatWelding | null): IPCB_PrimitivePad;
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

heatWelding

</td><td>

[IPCB\_PrimitivePadHeatWelding](../interfaces/IPCB_PrimitivePadHeatWelding.md) \| null

</td><td>

Thermal relief optimization parameters

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个无热焊参数的贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const before = pad.getState_HeatWelding();

// 2. 异步模式下配置发散式热焊参数并提交
const a = pad.toAsync();
a.setState_HeatWelding({ connectionMethod: 'Divergent', divergenceSpacing: 10, divergenceLineWidth: 8, divergenceAngle: 45 });
await a.done();

// 3. 从图元对象读取配置结果（保留现场供观察）
const after = pad.getState_HeatWelding();

console.log('heatWelding:', before, '→', after);
```

### setstate_hole

# IPCB\_PrimitivePad.setState\_Hole() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: hole

## Signature

```typescript
function setState_Hole(hole: TPCB_PrimitivePadHole): IPCB_PrimitivePad;
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

hole

</td><td>

[TPCB\_PrimitivePadHole](../types/TPCB_PrimitivePadHole.md)

</td><td>

Pad drilling

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

When setting the hole, some other property states will be set in conjunction:

1. The layer will be forcibly switched to multi-layer

This API cannot set the hole to `null`<!-- -->. If you want to remove the hole property, use the [setState\_Layer](./IPCB_PrimitivePad.md) method to switch the layer to the top or bottom layer

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个无孔的贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', null, 0, 0, 0, false, 0);
const beforeHole = pad.getState_Hole();

// 2. 异步模式下设置 35mil 圆孔并提交
const a = pad.toAsync();
a.setState_Hole(['ROUND', 35]);
await a.done();

// 3. 从画布重新读取，确认孔已生效且层被联动切到多层（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('hole:', beforeHole, '→', ref.getState_Hole());
console.log('layer:', ref.getState_Layer());
```

### setstate_holeoffsetx

# IPCB\_PrimitivePad.setState\_HoleOffsetX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: hole offset X

## Signature

```typescript
function setState_HoleOffsetX(holeOffsetX: number): IPCB_PrimitivePad;
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

holeOffsetX

</td><td>

number

</td><td>

Hole offset X

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

If the hole does not exist, the property will not be modified

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个中心孔的通孔焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 0, false, 0);
const before = pad.getState_HoleOffsetX();

// 2. 异步模式下把孔向右偏移 10mil 并提交
const a = pad.toAsync();
a.setState_HoleOffsetX(10);
await a.done();

// 3. 从画布重新读取，确认偏移已生效（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('holeOffsetX:', before, '→', ref.getState_HoleOffsetX());
```

### setstate_holeoffsety

# IPCB\_PrimitivePad.setState\_HoleOffsetY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: hole offset Y

## Signature

```typescript
function setState_HoleOffsetY(holeOffsetY: number): IPCB_PrimitivePad;
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

holeOffsetY

</td><td>

number

</td><td>

Hole offset Y

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

If the hole does not exist, the property will not be modified

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个中心孔的通孔焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 0, false, 0);
const before = pad.getState_HoleOffsetY();

// 2. 异步模式下把孔向上偏移 20mil 并提交
const a = pad.toAsync();
a.setState_HoleOffsetY(20);
await a.done();

// 3. 从画布重新读取，确认偏移已生效（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('holeOffsetY:', before, '→', ref.getState_HoleOffsetY());
```

### setstate_holerotation

# IPCB\_PrimitivePad.setState\_HoleRotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Rotation angle of the hole relative to the pad

## Signature

```typescript
function setState_HoleRotation(holeRotation: number): IPCB_PrimitivePad;
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

holeRotation

</td><td>

number

</td><td>

Rotation angle of the hole relative to the pad

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

If the hole does not exist, the property will not be modified

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个插槽通孔焊盘（槽未旋转）
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['SLOT', 30, 80], 0, 0, 0, false, 0);
const before = pad.getState_HoleRotation();

// 2. 异步模式下把孔旋转 45 度并提交
const a = pad.toAsync();
a.setState_HoleRotation(45);
await a.done();

// 3. 从画布重新读取，确认旋转已生效（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('holeRotation:', before, '→', ref.getState_HoleRotation());
```

### setstate_layer

# IPCB\_PrimitivePad.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfPad): IPCB_PrimitivePad;
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

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)

</td><td>

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

When setting the layer, some other property states will be set in conjunction:

1. When switching between the top and bottom layers: the solder mask/paste mask expansion properties will switch accordingly, and the data values remain unchanged

2. When switching from multi-layer to single layer: it determines whether to switch to the top or bottom layer, and the solder mask/paste mask expansion properties will only keep the data corresponding to the specified layer. If a special pad exists, it will be converted to a normal pad property, and only the data corresponding to the specified layer will be kept. Hole-related properties will be reset to their default values

3. When switching from single layer to multi-layer: the solder mask/paste mask expansion properties will only keep the solder mask expansion, and the original data will be copied and applied to the top and bottom layers. The pad drilling property will be assigned a specified value: a rounded rectangle whose length and width are 60% of the pad diameter (for rounded or regular polygon pads) or the pad width (for rectangular pads). Data-wise it is a rounded rectangle, but actually it is a circle. If the pad is a polyline complex polygon, the data is calculated through a dedicated algorithm (usually abstract; it is recommended to modify it later)

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层创建一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const before = pad.getState_Layer();

// 2. 异步模式下切换到底层并提交
const a = pad.toAsync();
a.setState_Layer(2);
await a.done();

// 3. 从画布重新读取，确认层已切换（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('layer:', before, '→', ref.getState_Layer());
```

### setstate_metallization

# IPCB\_PrimitivePad.setState\_Metallization() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Whether the hole wall is plated

## Signature

```typescript
function setState_Metallization(metallization: boolean): IPCB_PrimitivePad;
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

metallization

</td><td>

boolean

</td><td>

Whether the hole wall is plated

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

If the hole does not exist, the property will not be modified

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个非金属化的通孔焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(12, '1', x, 3000, 0, ['ELLIPSE', 80, 80], '', ['ROUND', 30], 0, 0, 0, false, 0);
const before = pad.getState_Metallization();

// 2. 异步模式下打开金属化并提交
const a = pad.toAsync();
a.setState_Metallization(true);
await a.done();

// 3. 从画布重新读取，确认金属化已生效（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('metallization:', before, '→', ref.getState_Metallization());
```

### setstate_net

# IPCB\_PrimitivePad.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net

## Signature

```typescript
function setState_Net(net?: string): IPCB_PrimitivePad;
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

_(Optional)_ Net name

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

This API is only available in the PCB editor. Both an empty string and `undefined` are treated as an empty net

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个无网络的贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const before = pad.getState_Net();

// 2. 异步模式下挂载网络并提交
const a = pad.toAsync();
a.setState_Net('嘉立创示例_NET1');
await a.done();

// 3. 从画布重新读取，确认网络已挂载（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('net:', before, '→', ref.getState_Net());
```

### setstate_pad

# IPCB\_PrimitivePad.setState\_Pad() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pad shape

## Signature

```typescript
function setState_Pad(pad: TPCB_PrimitivePadShape): IPCB_PrimitivePad;
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

pad

</td><td>

[TPCB\_PrimitivePadShape](../types/TPCB_PrimitivePadShape.md)

</td><td>

Pad shape

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

When setting the pad shape, some other property states will be set in conjunction:

1. The special pad shape property will be cleared

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个圆形贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const before = pad.getState_Pad();

// 2. 异步模式下改成 80 x 50 矩形并提交
const a = pad.toAsync();
a.setState_Pad(['RECT', 80, 50, 0]);
await a.done();

// 3. 从画布重新读取，确认外形已更新（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('padShape:', before, '→', ref.getState_Pad());
```

### setstate_padnumber

# IPCB\_PrimitivePad.setState\_PadNumber() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pad number

## Signature

```typescript
function setState_PadNumber(padNumber: string): IPCB_PrimitivePad;
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

padNumber

</td><td>

string

</td><td>

Pad number

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个编号为 '1' 的贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const before = pad.getState_PadNumber();

// 2. 异步模式下修改编号并提交
const a = pad.toAsync();
a.setState_PadNumber('嘉立创示例_A1');
await a.done();

// 3. 从画布重新读取，确认编号已更新（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('padNumber:', before, '→', ref.getState_PadNumber());
```

### setstate_primitivelock

# IPCB\_PrimitivePad.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePad;
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

Whether it is locked

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未锁定的贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const before = pad.getState_PrimitiveLock();

// 2. 异步模式下锁定焊盘并提交
const a = pad.toAsync();
a.setState_PrimitiveLock(true);
await a.done();

// 3. 从画布重新读取，确认锁定状态已生效（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', ref.getState_PrimitiveLock());
```

### setstate_rotation

# IPCB\_PrimitivePad.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: rotation angle

## Signature

```typescript
function setState_Rotation(rotation: number): IPCB_PrimitivePad;
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

rotation

</td><td>

number

</td><td>

Rotation angle

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个未旋转的长圆形焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['OVAL', 80, 40], '', null, 0, 0, 0, false, 0);
const before = pad.getState_Rotation();

// 2. 异步模式下旋转 90 度并提交
const a = pad.toAsync();
a.setState_Rotation(90);
await a.done();

// 3. 从画布重新读取，确认角度已更新（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('rotation:', before, '→', ref.getState_Rotation());
```

### setstate_soldermaskandpastemaskexpansion

# IPCB\_PrimitivePad.setState\_SolderMaskAndPasteMaskExpansion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: solder mask / paste mask expansion

## Signature

```typescript
function setState_SolderMaskAndPasteMaskExpansion(
	solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null,
): IPCB_PrimitivePad;
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

solderMaskAndPasteMaskExpansion

</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null

</td><td>

Solder mask / paste mask expansion

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个默认扩展（遵循规则）的贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const before = pad.getState_SolderMaskAndPasteMaskExpansion();

// 2. 异步模式下自定义顶层扩展并提交
const a = pad.toAsync();
a.setState_SolderMaskAndPasteMaskExpansion({ topSolderMask: 4, topPasteMask: 2 });
await a.done();

// 3. 从画布重新读取，确认扩展已生效（未显式设置的项由后端补默认值）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('expansion:', before, '→', ref.getState_SolderMaskAndPasteMaskExpansion());
```

### setstate_specialpad

# IPCB\_PrimitivePad.setState\_SpecialPad() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: special pad shape

## Signature

```typescript
function setState_SpecialPad(specialPad: TPCB_PrimitiveSpecialPadShape): IPCB_PrimitivePad;
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

specialPad

</td><td>

[TPCB\_PrimitiveSpecialPadShape](../types/TPCB_PrimitiveSpecialPadShape.md)

</td><td>

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Remarks

When setting the special pad shape, some other property states will be set in conjunction:

1. The pad shape property will be cleared

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个普通贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 调用设置接口（当前版本不产生任何效果）
pad.setState_SpecialPad([[1, 1, ['ELLIPSE', 40, 40]]]);

// 3. 读取确认特殊外形未生效、普通外形保持不变
const special = pad.getState_SpecialPad();
const normalShape = pad.getState_Pad();

console.log('specialPadApplied:', special !== undefined);
console.log('normalShapeKept:', JSON.stringify(normalShape) === JSON.stringify(['ELLIPSE', 60, 60]));
```

### setstate_x

# IPCB\_PrimitivePad.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: X position

## Signature

```typescript
function setState_X(x: number): IPCB_PrimitivePad;
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

X position

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 异步模式下右移 200mil 并提交
const a = pad.toAsync();
a.setState_X(x + 200);
await a.done();

// 3. 从画布重新读取，确认位置已更新（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('x:', x, '→', ref.getState_X());
```

### setstate_y

# IPCB\_PrimitivePad.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Y position

## Signature

```typescript
function setState_Y(y: number): IPCB_PrimitivePad;
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

Y position

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，创建一个贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 异步模式下移 200mil 并提交
const a = pad.toAsync();
a.setState_Y(3000 + 200);
await a.done();

// 3. 从画布重新读取，确认位置已更新（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('y:', 3000, '→', ref.getState_Y());
```

### toasync

# IPCB\_PrimitivePad.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitivePad;
```

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 在顶层放置一个圆形贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 切换为异步图元（返回同一图元的异步形态）
const asyncPad = pad.toAsync();

// 3. 在异步模式下修改位置并提交
asyncPad.setState_X(x + 200);
await asyncPad.done();

// 4. 从画布重新读取，确认修改已落画布（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('isAsync:', asyncPad.isAsync());
console.log('x:', x, '→', ref.getState_X());
```

### tosync

# IPCB\_PrimitivePad.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitivePad;
```

## Returns

[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

Pad primitive object

## Example

```javascript
// 1. 在顶层放置一个圆形贴片焊盘
const x = 3000 + Math.floor(Math.random() * 100000);
const pad = await eda.pcb_PrimitivePad.create(1, '1', x, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 切换为同步图元（返回同一图元的同步形态）
const syncPad = pad.toSync();

// 3. 同步模式下直接修改位置，无需 done() 立即生效
syncPad.setState_X(x + 300);

// 4. 从画布重新读取，确认修改已落画布（保留现场供观察）
const ref = await eda.pcb_PrimitivePad.get(pad.getState_PrimitiveId());

console.log('isAsync:', syncPad.isAsync());
console.log('x:', x, '→', ref.getState_X());
```
