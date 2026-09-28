# IPCB\_PrimitivePoured class

Copper fill primitive

## Signature

```typescript
class IPCB_PrimitivePoured implements IPCB_Primitive
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

[addSolderMaskFill(pourFillId)](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Add: solder mask region

</td></tr>
<tr><td>

[convertToFill(pourFillId)](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Convert to: fill primitive

</td></tr>
<tr><td>

[deletePourFills(pourFillIds)](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Delete Copper fill region

</td></tr>
<tr><td>

[getState\_PourFills()](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

Get the property state: copper fill region

</td></tr>
<tr><td>

[getState\_PourPrimitiveId()](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

Get the property state: copper border primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
</tbody></table>

---

## 方法详情

### addsoldermaskfill

# IPCB\_PrimitivePoured.addSolderMaskFill() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add: solder mask region

## Signature

```typescript
function addSolderMaskFill(
	pourFillId: IPCB_PrimitivePouredPourFill['id'],
): Promise<IPCB_PrimitiveFill | undefined>;
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

pourFillId

</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]

</td><td>

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

The solder mask region fill primitive object. If conversion fails or the ID is incorrect, `undefined` is returned

## Example

```javascript
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 取第一个填充子区域的 ID（本方法按 pourFillId 定位，不是图元 ID）
const pourFills = poured.getState_PourFills();
if (pourFills.length === 0) {
  console.log('说明：该覆铜填充没有子区域');
  return;
}

// 3. 为该子区域添加阻焊区域（保留现场供观察）
const solderMaskFill = await poured.addSolderMaskFill(pourFills[0].id);

// 4. 输出生成的阻焊填充图元信息
if (solderMaskFill) {
  console.log('primitiveType:', solderMaskFill.getState_PrimitiveType());
  console.log('primitiveId:', solderMaskFill.getState_PrimitiveId());
} else {
  console.log('说明：未能生成阻焊区域（返回 undefined）');
}
```

### converttofill

# IPCB\_PrimitivePoured.convertToFill() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert to: fill primitive

## Signature

```typescript
function convertToFill(
	pourFillId: IPCB_PrimitivePouredPourFill['id'],
): Promise<IPCB_PrimitiveFill | undefined>;
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

pourFillId

</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]

</td><td>

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

The fill primitive object. If conversion fails or the ID is incorrect, `undefined` is returned

## Example

```javascript
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 取第一个填充子区域的 ID（本方法按 pourFillId 定位，不是图元 ID）
const pourFills = poured.getState_PourFills();
if (pourFills.length === 0) {
  console.log('说明：该覆铜填充没有子区域');
  return;
}

// 3. 将该子区域转换为独立填充图元（保留现场供观察）
const fill = await poured.convertToFill(pourFills[0].id);

// 4. 输出转换得到的填充图元信息
if (fill) {
  console.log('primitiveType:', fill.getState_PrimitiveType());
  console.log('primitiveId:', fill.getState_PrimitiveId());
} else {
  console.log('说明：转换失败（返回 undefined）');
}
```

### deletepourfills

# IPCB\_PrimitivePoured.deletePourFills() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Copper fill region

## Signature

```typescript
function deletePourFills(
	pourFillIds: IPCB_PrimitivePouredPourFill['id'] | Array<IPCB_PrimitivePouredPourFill['id']>,
): Promise<boolean>;
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

pourFillIds

</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\] \| Array&lt;[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]&gt;

</td><td>

Copper fill region ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 取填充子区域列表（本方法按 pourFillId 定位，不是图元 ID）
const pourFills = poured.getState_PourFills();
if (pourFills.length === 0) {
  console.log('说明：该覆铜填充没有子区域');
  return;
}
console.log('删除前子区域数量：', pourFills.length);

// 3. 删除第一个子区域（传单个 ID；也可以传 ID 数组批量删除）
const deleted = await poured.deletePourFills(pourFills[0].id);

// 4. 从画布重新读取，确认删除结果
const refreshed = await eda.pcb_PrimitivePoured.get(poured.getState_PrimitiveId());
const after = refreshed ? refreshed.getState_PourFills().length : 0;
console.log('deleted:', deleted);
console.log('删除后子区域数量：', after);
```

### getstate_pourfills

# IPCB\_PrimitivePoured.getState\_PourFills() method

Get the property state: copper fill region

## Signature

```typescript
function getState_PourFills(): Array<IPCB_PrimitivePouredPourFill>;
```

## Returns

Array&lt;[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->&gt;

Copper fill region

## Example

```javascript
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 读取全部填充子区域
const pourFills = poured.getState_PourFills();
console.log('pourFillCount:', pourFills.length);

// 3. 输出第一个子区域的关键属性（path 是复杂多边形对象，只输出有无）
if (pourFills.length > 0) {
  const first = pourFills[0];
  console.log('第一个子区域 fill：', first.fill, 'lineWidth:', first.lineWidth);
  console.log('第一个子区域 path：', first.path ? '已包含' : '未包含');
}
```

### getstate_pourprimitiveid

# IPCB\_PrimitivePoured.getState\_PourPrimitiveId() method

Get the property state: copper border primitive ID

## Signature

```typescript
function getState_PourPrimitiveId(): string;
```

## Returns

string

Copper border primitive ID

## Example

```javascript
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 读取关联的覆铜边框图元 ID
const pourPrimitiveId = poured.getState_PourPrimitiveId();
console.log('pourPrimitiveId:', pourPrimitiveId);

// 3. 用该 ID 反查覆铜边框，验证关联有效
const pour = await eda.pcb_PrimitivePour.get(pourPrimitiveId);
console.log('对应覆铜边框：', pour ? pour.getState_PourName() : '（边框已被删除）');
```

### getstate_primitiveid

# IPCB\_PrimitivePoured.getState\_PrimitiveId() method

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
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 读取图元 ID
const primitiveId = poured.getState_PrimitiveId();
console.log('primitiveId:', primitiveId);

// 3. 用该 ID 通过管理类重新读取，验证 ID 有效
const again = await eda.pcb_PrimitivePoured.get(primitiveId);
console.log('按 ID 重新读取：', again ? '成功' : '未找到');
```

### getstate_primitivetype

# IPCB\_PrimitivePoured.getState\_PrimitiveType() method

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
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 读取图元类型
const primitiveType = poured.getState_PrimitiveType();
console.log('primitiveType:', primitiveType);
```

### reset

# IPCB\_PrimitivePoured.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitivePoured>;
```

## Returns

Promise&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;

Copper fill primitive object

## Example

```javascript
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const poured = pouredList[0];

// 2. 记录重置前的子区域数量
const before = poured.getState_PourFills().length;

// 3. 重置为当前画布状态（丢弃未提交的修改）
const resetResult = await poured.reset();

// 4. 重置返回的对象仍可正常读取状态
const after = resetResult.getState_PourFills().length;
console.log('pourFillCount:', before, '→', after);
console.log('primitiveType:', resetResult.getState_PrimitiveType());
```
