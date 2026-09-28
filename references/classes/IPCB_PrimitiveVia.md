# IPCB\_PrimitiveVia class

Via primitive

## Signature

```typescript
class IPCB_PrimitiveVia implements IPCB_Primitive
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

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getAdjacentPrimitives()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Get Adjacent primitive objects

</td></tr>
<tr><td>

[getState\_DesignRuleBlindViaName()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: blind/buried via design rule item name

</td></tr>
<tr><td>

[getState\_Diameter()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: outer diameter

</td></tr>
<tr><td>

[getState\_HoleDiameter()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: hole diameter

</td></tr>
<tr><td>

[getState\_Net()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_SolderMaskExpansion()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: solder mask / paste mask expansion

</td></tr>
<tr><td>

[getState\_ViaType()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: via type

</td></tr>
<tr><td>

[getState\_X()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: X coordinate

</td></tr>
<tr><td>

[getState\_Y()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Get the property state: Y coordinate

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_DesignRuleBlindViaName(designRuleBlindViaName)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: blind/buried via design rule item name

</td></tr>
<tr><td>

[setState\_Diameter(diameter)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: outer diameter

</td></tr>
<tr><td>

[setState\_HoleDiameter(holeDiameter)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: hole diameter

</td></tr>
<tr><td>

[setState\_Net(net)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net name

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_SolderMaskExpansion(solderMaskExpansion)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: solder mask / paste mask expansion

</td></tr>
<tr><td>

[setState\_ViaType(viaType)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: via type

</td></tr>
<tr><td>

[setState\_X(x)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: X coordinate

</td></tr>
<tr><td>

[setState\_Y(y)](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Y coordinate

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveVia.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveVia.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveVia>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个孔径 20mil、外径 40mil 的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 异步模式下连续修改外径和挂网络（此时画布尚未变化）
const a = via.toAsync();
a.setState_Diameter(60);
a.setState_Net('GND');

// 3. 一次性提交到画布
await a.done();

// 4. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('diameter:', 40, '→', ref.getState_Diameter());
console.log('net:', '', '→', ref.getState_Net());
```

### getadjacentprimitives

# IPCB\_PrimitiveVia.getAdjacentPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Adjacent primitive objects

## Signature

```typescript
function getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;
```

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

Adjacent wire and arc-line primitive objects

## Remarks

It will get the wire and arc-line primitive objects directly connected to the via

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 在过孔两侧各拉一条顶层导线，端点落在过孔中心构成连接
const line1 = await eda.pcb_PrimitiveLine.create('', 1, x - 600, 3000, x, 3000, 10);
const line2 = await eda.pcb_PrimitiveLine.create('', 1, x, 3000, x + 600, 3000, 10);

// 3. 获取与过孔直接相连的图元，并读出各自的类型
const adjacent = await via.getAdjacentPrimitives();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);
await eda.pcb_PrimitiveLine.delete([line1.getState_PrimitiveId(), line2.getState_PrimitiveId()]);

console.log('adjacent count:', adjacent.length);
adjacent.forEach((p, i) => {
	console.log(`adjacent[${i}] type:`, p.getState_PrimitiveType());
});
```

### getstate_designruleblindvianame

# IPCB\_PrimitiveVia.getState\_DesignRuleBlindViaName() method

Get the property state: blind/buried via design rule item name

## Signature

```typescript
function getState_DesignRuleBlindViaName(): string | null;
```

## Returns

string \| null

Blind/buried via design rule item name

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个普通通孔（无设计规则项）
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_DesignRuleBlindViaName();

// 2. 异步模式下设置一个规则项名称并提交
const a = via.toAsync();
a.setState_DesignRuleBlindViaName('嘉立创示例_盲孔');
await a.done();

// 3. 名称需与设计规则中的盲埋孔项匹配才落画布，未匹配时从图元对象本地读取
const after = via.getState_DesignRuleBlindViaName();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('designRuleBlindViaName:', before, '→', after);
```

### getstate_diameter

# IPCB\_PrimitiveVia.getState\_Diameter() method

Get the property state: outer diameter

## Signature

```typescript
function getState_Diameter(): number;
```

## Returns

number

Outer diameter

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个外径 40mil 的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 读取外径属性
const diameter = via.getState_Diameter();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('diameter:', diameter);
```

### getstate_holediameter

# IPCB\_PrimitiveVia.getState\_HoleDiameter() method

Get the property state: hole diameter

## Signature

```typescript
function getState_HoleDiameter(): number;
```

## Returns

number

Hole diameter

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个孔径 20mil 的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 读取孔径属性
const holeDiameter = via.getState_HoleDiameter();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('holeDiameter:', holeDiameter);
```

### getstate_net

# IPCB\_PrimitiveVia.getState\_Net() method

Get the property state: net name

## Signature

```typescript
function getState_Net(): string;
```

## Returns

string

Net name

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个挂在 GND 网络的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('GND', x, 3000, 20, 40);

// 2. 读取网络名称
const net = via.getState_Net();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('net:', net);
```

### getstate_primitiveid

# IPCB\_PrimitiveVia.getState\_PrimitiveId() method

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
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 读取图元 ID
const primitiveId = via.getState_PrimitiveId();

// 3. 用该 ID 从画布重新读取过孔，验证 ID 有效
const refetched = await eda.pcb_PrimitiveVia.get(primitiveId);

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetched type:', refetched.getState_PrimitiveType());
```

### getstate_primitivelock

# IPCB\_PrimitiveVia.getState\_PrimitiveLock() method

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
// 1. 生成本次运行专用的坐标，分别放置未锁定和已锁定的两个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const normal = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40, 0, null, null, false);
const locked = await eda.pcb_PrimitiveVia.create('', x + 500, 3000, 20, 40, 0, null, null, true);

// 2. 分别读取锁定状态
const normalLock = normal.getState_PrimitiveLock();
const lockedLock = locked.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([normal.getState_PrimitiveId(), locked.getState_PrimitiveId()]);

console.log('normalLock:', normalLock);
console.log('lockedLock:', lockedLock);
```

### getstate_primitivetype

# IPCB\_PrimitiveVia.getState\_PrimitiveType() method

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
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 读取图元类型
const primitiveType = via.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_soldermaskexpansion

# IPCB\_PrimitiveVia.getState\_SolderMaskExpansion() method

Get the property state: solder mask / paste mask expansion

## Signature

```typescript
function getState_SolderMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
```

## Returns

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null

Solder mask / paste mask expansion

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个默认扩展（遵循规则）的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const plain = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const plainExpansion = plain.getState_SolderMaskExpansion();

// 2. 异步模式下给第二个过孔自定义顶层阻焊扩展并提交
const customized = await eda.pcb_PrimitiveVia.create('', x + 500, 3000, 20, 40);
const a = customized.toAsync();
a.setState_SolderMaskExpansion({ topSolderMask: 4 });
await a.done();

// 3. 从画布重新读取自定义扩展（未设置的底层项返回 null）
const customizedExpansion = customized.getState_SolderMaskExpansion();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([plain.getState_PrimitiveId(), customized.getState_PrimitiveId()]);

console.log('plainExpansion:', plainExpansion);
console.log('customizedExpansion:', customizedExpansion);
```

### getstate_viatype

# IPCB\_PrimitiveVia.getState\_ViaType() method

Get the property state: via type

## Signature

```typescript
function getState_ViaType(): EPCB_PrimitiveViaType;
```

## Returns

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)

Via type

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个通孔类型的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_ViaType();

// 2. 把第二个过孔切换为缝合孔类型后读取对比
const suture = await eda.pcb_PrimitiveVia.create('', x + 500, 3000, 20, 40);
const a = suture.toAsync();
a.setState_ViaType(2);
await a.done();
const sutureType = suture.getState_ViaType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId(), suture.getState_PrimitiveId()]);

console.log('viaType:', before, '→', sutureType);
```

### getstate_x

# IPCB\_PrimitiveVia.getState\_X() method

Get the property state: X coordinate

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

X coordinate

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 读取中心点横坐标
const viaX = via.getState_X();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('x:', viaX);
```

### getstate_y

# IPCB\_PrimitiveVia.getState\_Y() method

Get the property state: Y coordinate

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

Y coordinate

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 5000, 20, 40);

// 2. 读取中心点纵坐标
const viaY = via.getState_Y();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('y:', viaY);
```

### isasync

# IPCB\_PrimitiveVia.isAsync() method

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
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 读取创建后的模式
const afterCreate = via.isAsync();

// 3. 切换模式再各读一次
const afterToSync = via.toSync().isAsync();
const afterToAsync = via.toAsync().isAsync();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveVia.delete([via.getState_PrimitiveId()]);

console.log('afterCreate:', afterCreate);
console.log('afterToSync:', afterToSync);
console.log('afterToAsync:', afterToAsync);
```

### reset

# IPCB\_PrimitiveVia.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveVia>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试过孔重合
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 切换异步模式，累计一处未提交的外径修改（40 → 99）
const asyncVia = via.toAsync();
asyncVia.setState_Diameter(99);

// 3. 重置：丢弃未提交的修改，回到画布当前状态
await asyncVia.reset();

// 4. 从画布重新读取，外径仍是 40（保留现场供观察）
const refetched = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('diameter after reset:', refetched.getState_Diameter());
```

### setstate_designruleblindvianame

# IPCB\_PrimitiveVia.setState\_DesignRuleBlindViaName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: blind/buried via design rule item name

## Signature

```typescript
function setState_DesignRuleBlindViaName(designRuleBlindViaName: string | null): IPCB_PrimitiveVia;
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

Blind/buried via design rule item name

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个普通通孔（无规则项名称）
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_DesignRuleBlindViaName();

// 2. 异步模式下关联规则项名称并提交
const a = via.toAsync();
a.setState_DesignRuleBlindViaName('嘉立创示例_盲孔');
await a.done();

// 3. 名称需与设计规则中的盲埋孔项匹配才落画布，未匹配时从图元对象本地读取
const after = via.getState_DesignRuleBlindViaName();

// 4. 保留现场供观察
console.log('designRuleBlindViaName:', before, '→', after);
```

### setstate_diameter

# IPCB\_PrimitiveVia.setState\_Diameter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: outer diameter

## Signature

```typescript
function setState_Diameter(diameter: number): IPCB_PrimitiveVia;
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

Outer diameter

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个外径 40mil 的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_Diameter();

// 2. 异步模式下加大外径并提交
const a = via.toAsync();
a.setState_Diameter(60);
await a.done();

// 3. 从画布重新读取，确认外径已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('diameter:', before, '→', ref.getState_Diameter());
```

### setstate_holediameter

# IPCB\_PrimitiveVia.setState\_HoleDiameter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: hole diameter

## Signature

```typescript
function setState_HoleDiameter(holeDiameter: number): IPCB_PrimitiveVia;
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

Hole diameter

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个孔径 20mil 的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_HoleDiameter();

// 2. 异步模式下加大孔径并提交
const a = via.toAsync();
a.setState_HoleDiameter(28);
await a.done();

// 3. 从画布重新读取，确认孔径已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('holeDiameter:', before, '→', ref.getState_HoleDiameter());
```

### setstate_net

# IPCB\_PrimitiveVia.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
function setState_Net(net: string): IPCB_PrimitiveVia;
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

Net name

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个无网络的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_Net();

// 2. 异步模式下挂到 GND 网络并提交
const a = via.toAsync();
a.setState_Net('GND');
await a.done();

// 3. 从画布重新读取，确认网络已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('net:', before, '→', ref.getState_Net());
```

### setstate_primitivelock

# IPCB\_PrimitiveVia.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveVia;
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

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个未锁定的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_PrimitiveLock();

// 2. 异步模式下锁定并提交
const a = via.toAsync();
a.setState_PrimitiveLock(true);
await a.done();

// 3. 从画布重新读取，确认锁定已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', ref.getState_PrimitiveLock());
```

### setstate_soldermaskexpansion

# IPCB\_PrimitiveVia.setState\_SolderMaskExpansion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: solder mask / paste mask expansion

## Signature

```typescript
function setState_SolderMaskExpansion(
	solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null,
): IPCB_PrimitiveVia;
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

Solder mask / paste mask expansion

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个默认扩展（遵循规则）的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_SolderMaskExpansion();

// 2. 异步模式下自定义顶层阻焊扩展并提交
const a = via.toAsync();
a.setState_SolderMaskExpansion({ topSolderMask: 4 });
await a.done();

// 3. 从画布重新读取，确认扩展已生效（未设置的底层项返回 null）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('expansion:', before, '→', ref.getState_SolderMaskExpansion());
```

### setstate_viatype

# IPCB\_PrimitiveVia.setState\_ViaType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: via type

## Signature

```typescript
function setState_ViaType(viaType: EPCB_PrimitiveViaType): IPCB_PrimitiveVia;
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

Via type

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个通孔类型的测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);
const before = via.getState_ViaType();

// 2. 异步模式下切换为缝合孔并提交
const a = via.toAsync();
a.setState_ViaType(2);
await a.done();

// 3. 从画布重新读取，确认类型已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('viaType:', before, '→', ref.getState_ViaType());
```

### setstate_x

# IPCB\_PrimitiveVia.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: X coordinate

## Signature

```typescript
function setState_X(x: number): IPCB_PrimitiveVia;
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

X coordinate

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 异步模式下向右平移 300mil 并提交
const a = via.toAsync();
a.setState_X(x + 300);
await a.done();

// 3. 从画布重新读取，确认位置已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('x:', x, '→', ref.getState_X());
```

### setstate_y

# IPCB\_PrimitiveVia.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Y coordinate

## Signature

```typescript
function setState_Y(y: number): IPCB_PrimitiveVia;
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

Y coordinate

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 异步模式下向上平移 300mil 并提交
const a = via.toAsync();
a.setState_Y(3300);
await a.done();

// 3. 从画布重新读取，确认位置已生效（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('y:', 3000, '→', ref.getState_Y());
```

### toasync

# IPCB\_PrimitiveVia.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveVia;
```

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个测试过孔
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 切换为异步图元（返回同一图元的异步形态）
const asyncVia = via.toAsync();

// 3. 在异步模式下平移位置并提交
asyncVia.setState_X(x + 200);
await asyncVia.done();

// 4. 从画布重新读取，确认修改已落画布（保留现场供观察）
const ref = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('isAsync:', asyncVia.isAsync());
console.log('x:', x, '→', ref.getState_X());
```

### tosync

# IPCB\_PrimitiveVia.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveVia;
```

## Returns

[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)

Via primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试过孔重合
const x = 3000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, 3000, 20, 40);

// 2. 转换为同步图元
const syncVia = via.toSync();

// 3. 同步模式下加大外径，立即生效（无需 done()）
syncVia.setState_Diameter(55);

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveVia.get(via.getState_PrimitiveId());

console.log('isSync after toSync:', !syncVia.isAsync());
console.log('diameter:', 40, '→', refetched.getState_Diameter());
```
