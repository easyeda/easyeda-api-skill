# ISCH\_PrimitiveComponentPin class

Device pin primitive

## Signature

```typescript
class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin
```
**Extends:** [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

## Remarks

A device pin primitive is a special primitive. It refers to the pin associated with a symbol on the schematic canvas

For a device pin primitive, only the `pinNumber` and `noConnected` properties can be changed; all other properties are read-only. And you can only obtain a device pin primitive through [the getAllPinsByPrimitiveId method of the device class](./SCH_PrimitiveComponent.md) or [the getAllPins method of the device primitive](./ISCH_PrimitiveComponent.md)

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

[primitiveType](./ISCH_PrimitiveComponentPin.md)

</td><td>

`protected`

`readonly`

</td><td>

[ESCH\_PrimitiveType.COMPONENT\_PIN](../enums/ESCH_PrimitiveType.md)

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

[done()](./ISCH_PrimitiveComponentPin.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
</tbody></table>

---

## 属性详情

### primitivetype

# ISCH\_PrimitiveComponentPin.primitiveType property

图元类型

## Signature

```typescript
function readonly primitiveType: ESCH_PrimitiveType.COMPONENT_PIN;
```


---

## 方法详情

### done

# ISCH\_PrimitiveComponentPin.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitiveComponentPin>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)<!-- -->&gt;

Device pin primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件并取其引脚
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const pins = await comp.getAllPins();
const before = pins[0].getState_PinNumber();

// 3. 异步模式改两个引脚的编号（此时画布尚未变化）
const pin1 = pins[0].toAsync();
pin1.setState_PinNumber('A1');
const pin2 = pins[1].toAsync();
pin2.setState_PinNumber('A2');

// 4. 逐个提交，修改写入画布（保留现场供观察）
await pin1.done();
await pin2.done();

// 5. 从画布重新取引脚，确认两脚编号都已更新
const pinsAfter = await comp.getAllPins();

console.log('pin1:', before, '→', pinsAfter[0].getState_PinNumber());
console.log('pin2:', pinsAfter[1].getState_PinNumber());
```
