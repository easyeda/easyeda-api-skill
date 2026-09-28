# IPCB\_PrimitiveComponentPad class

Device pad primitive

## Signature

```typescript
class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad
```
**Extends:** [IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

## Remarks

A device pad primitive is a special primitive. It refers to the pad associated with a footprint on the PCB canvas

You can only obtain a device pad primitive through [the getAllPinsByPrimitiveId method of the device class](./PCB_PrimitiveComponent.md) or [the getAllPads method of the device primitive](./IPCB_PrimitiveComponent.md)

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

[primitiveType](./IPCB_PrimitiveComponentPad.md)

</td><td>

`protected`

`readonly`

</td><td>

[EPCB\_PrimitiveType.COMPONENT\_PAD](../enums/EPCB_PrimitiveType.md)

</td><td>

图元类型

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

[done()](./IPCB_PrimitiveComponentPad.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getConnectedPrimitives(onlyCentreConnection)](./IPCB_PrimitiveComponentPad.md)

</td><td>

</td><td>

**_(BETA)_** Get connected primitives

</td></tr>
<tr><td>

[getConnectedPrimitives(onlyCentreConnection)](./IPCB_PrimitiveComponentPad.md)

</td><td>

</td><td>

</td></tr>
<tr><td>

[getState\_ParentComponentPrimitiveId()](./IPCB_PrimitiveComponentPad.md)

</td><td>

</td><td>

Get the property state: parent device primitive ID

</td></tr>
<tr><td>

[setState\_ParentComponentPrimitiveId()](./IPCB_PrimitiveComponentPad.md)

</td><td>

</td><td>

Set the property state: parent device primitive ID

</td></tr>
</tbody></table>

---

## 属性详情

### primitivetype

# IPCB\_PrimitiveComponentPad.primitiveType property

图元类型

## Signature

```typescript
function readonly primitiveType: EPCB_PrimitiveType.COMPONENT_PAD;
```


---

## 方法详情

### done

# IPCB\_PrimitiveComponentPad.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveComponentPad>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveComponentPad](./IPCB_PrimitiveComponentPad.md)<!-- -->&gt;

Device pad primitive object

## Example

```javascript
// 1. 放置一个测试器件并取第一个焊盘（随机坐标，避免与历史保留图元重合）
const x = 5000 + Math.floor(Math.random() * 50000);
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.pcb_PrimitiveComponent.create(devices[0], 1, x, 5000);
const pin = (await comp.getAllPins())[0];

// 2. 读取修改前的位置
const before = pin.getState_X();

// 3. 异步模式修改焊盘 X 坐标后一次提交
const asyncPin = pin.toAsync();
asyncPin.setState_X(before + 100);
await asyncPin.done();

// 4. 重新获取器件焊盘，验证修改已在画布生效
const refreshed = (await eda.pcb_PrimitiveComponent.get([comp.getState_PrimitiveId()]))[0];
const after = (await refreshed.getAllPins())[0].getState_X();

console.log('before:', before, '→ after:', after);
console.log('moved:', after === before + 100);
```

### getconnectedprimitives

# IPCB\_PrimitiveComponentPad.getConnectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get connected primitives

## Signature

```typescript
function getConnectedPrimitives(
	onlyCentreConnection: true,
): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;
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

onlyCentreConnection

</td><td>

true

</td><td>

Whether to only use center connection. If it is `true`<!-- -->, only center-connected primitives (lines, arc lines, vias) are obtained; if it is `false`<!-- -->, all contacting primitives are obtained

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

## Remarks

This API can get the primitives that are in direct contact with the pad

## Example

```javascript
// 1. 放置测试器件，取第一个焊盘的中心坐标
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.pcb_PrimitiveComponent.create(devices[0], 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();
const pin = (await comp.getAllPins())[0];
const padX = pin.getState_X();
const padY = pin.getState_Y();

// 2. 从焊盘中心拉一段走线（起点正好落在中心 → 属于中心连接）
const line = await eda.pcb_PrimitiveLine.create('', 1, padX, padY, padX + 600, padY, 10);
const lineId = line.getState_PrimitiveId();

// 3. 只查中心连接的图元
const centreConnected = await pin.getConnectedPrimitives(true);

// 4. 查所有接触的图元
const allConnected = await pin.getConnectedPrimitives(false);

// 5. 清理测试图元
await eda.pcb_PrimitiveLine.delete([lineId]);
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('centreConnectedCount:', centreConnected.length);
console.log('centreContainsLine:', centreConnected.some(p => p.getState_PrimitiveId() === lineId));
console.log('allConnectedCount:', allConnected.length);
```

### getconnectedprimitives_1

# IPCB\_PrimitiveComponentPad.getConnectedPrimitives() method

## Signature

```typescript
function getConnectedPrimitives(
	onlyCentreConnection: false,
): Promise<
	Array<
		| IPCB_PrimitiveLine
		| IPCB_PrimitiveArc
		| IPCB_PrimitiveVia
		| IPCB_PrimitivePolyline
		| IPCB_PrimitiveFill
	>
>;
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

onlyCentreConnection

</td><td>

false

</td><td>

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| [IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| [IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;&gt;

### getstate_parentcomponentprimitiveid

# IPCB\_PrimitiveComponentPad.getState\_ParentComponentPrimitiveId() method

Get the property state: parent device primitive ID

## Signature

```typescript
function getState_ParentComponentPrimitiveId(): string;
```

## Returns

string

Parent device primitive ID

## Example

```javascript
// 1. 放置一个测试器件
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.pcb_PrimitiveComponent.create(devices[0], 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 获取器件的焊盘图元对象，读取每个焊盘的父器件 ID
const pins = await comp.getAllPins();
const parentIds = pins.map(pin => pin.getState_ParentComponentPrimitiveId());

// 3. 清理测试器件
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('pinCount:', pins.length);
console.log('allBelongToComponent:', parentIds.every(id => id === compId));
console.log('firstPinParentId:', parentIds[0]);
```

### setstate_parentcomponentprimitiveid

# IPCB\_PrimitiveComponentPad.setState\_ParentComponentPrimitiveId() method

Set the property state: parent device primitive ID

## Signature

```typescript
function setState_ParentComponentPrimitiveId(): IPCB_PrimitiveComponentPad;
```

## Returns

[IPCB\_PrimitiveComponentPad](./IPCB_PrimitiveComponentPad.md)

Device pad primitive object

## Remarks

The properties of this device pad primitive do not support modification. Calling this API will have no effect

## Example

```javascript
// 1. 放置一个测试器件并获取焊盘图元对象
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.pcb_PrimitiveComponent.create(devices[0], 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();
const pin = (await comp.getAllPins())[0];

// 2. 调用前读取父器件 ID
const before = pin.getState_ParentComponentPrimitiveId();

// 3. 调用修改接口（无参数，实际不产生任何效果）
pin.setState_ParentComponentPrimitiveId();

// 4. 调用后再读一次，确认归属关系未变
const after = pin.getState_ParentComponentPrimitiveId();

console.log('parentUnchanged:', before === after);
console.log('stillBelongToComponent:', after === compId);
```
