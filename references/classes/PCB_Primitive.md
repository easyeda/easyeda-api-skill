# PCB\_Primitive class

PCB &amp; footprint / primitive class

## Signature

```typescript
class PCB_Primitive
```

## Remarks

Unified operations on primitives

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[getPrimitiveBoardLine(primitiveId, layers)](./PCB_Primitive.md)

</td><td>

</td><td>

**_(BETA)_** Get the board line of the primitive

</td></tr>
<tr><td>

[getPrimitivesBBox(primitiveIds)](./PCB_Primitive.md)

</td><td>

</td><td>

**_(BETA)_** Get The BBox of the primitive

</td></tr>
</tbody></table>

---

## 方法详情

### getprimitiveboardline

# PCB\_Primitive.getPrimitiveBoardLine() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the board line of the primitive

## Signature

```typescript
function getPrimitiveBoardLine(
	primitiveId: string,
	layers?: Array<EPCB_LayerId>,
): Promise<IPCB_ComplexPolygon | undefined>;
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

primitiveId

</td><td>

string

</td><td>

Primitive ID

</td></tr>
<tr><td>

layers

</td><td>

Array&lt;[EPCB\_LayerId](../enums/EPCB_LayerId.md)<!-- -->&gt;

</td><td>

_(Optional)_ Layers to calculate. When calculating devices, pads, and vias, the union of the board lines of the specified multiple layers can be precisely calculated

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined&gt;

Complex polygon. If the primitive ID does not match or the primitive does not exist on the specified layer, `undefined` is returned

## Example

```javascript
// 1. 创建顶层圆形焊盘作为测试图元
const pad = await eda.pcb_PrimitivePad.create(1, '1', 2000, 2000, 0, ['ELLIPSE', 80, 80], '', null, 0, 0, 0, false, 0);
const primitiveId = pad.getState_PrimitiveId();

// 2. 计算边框线：文档签名为同步返回，实测返回 Promise（第二参数可指定参与计算的层）
const pending = eda.pcb_Primitive.getPrimitiveBoardLine(primitiveId, [1]);

// 3. 等待 3 秒观察结果状态（当前版本 Promise 不 settle，用超时保护避免卡住）
const settled = await Promise.race([
	Promise.resolve(pending).then(() => 'fulfilled', () => 'rejected'),
	new Promise(resolve => setTimeout(() => resolve('pending（3 秒内未返回）'), 3000)),
]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePad.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('returns:', typeof pending.then === 'function' ? 'Promise' : typeof pending);
console.log('settled:', settled);
```

### getprimitivesbbox

# PCB\_Primitive.getPrimitivesBBox() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The BBox of the primitive

## Signature

```typescript
function getPrimitivesBBox(
	primitiveIds: Array<string | IPCB_Primitive>,
): Promise<{ minX: number; minY: number; maxX: number; maxY: number } | undefined>;
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

primitiveIds

</td><td>

Array&lt;string \| [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;

</td><td>

Array of Primitive ID array or primitive objects

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ minX: number; minY: number; maxX: number; maxY: number } \| undefined&gt;

The BBox of the primitive. If the primitive does not exist or has no BBox, `undefined` will be returned

## Example

```javascript
// 1. 创建两个顶层测试焊盘：一个 80x80 放在（2000,2000），一个 60x60 放在（3000,3000）
const pad1 = await eda.pcb_PrimitivePad.create(1, '1', 2000, 2000, 0, ['ELLIPSE', 80, 80], '', null, 0, 0, 0, false, 0);
const pad2 = await eda.pcb_PrimitivePad.create(1, '2', 3000, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 2. 计算两个焊盘整体的 BBox（传图元 ID 数组，也支持直接传图元对象数组）
const bbox = await eda.pcb_Primitive.getPrimitivesBBox([pad1.getState_PrimitiveId(), pad2.getState_PrimitiveId()]);

// 3. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitivePad.delete([pad1.getState_PrimitiveId(), pad2.getState_PrimitiveId()]);

console.log('minX:', bbox.minX);
console.log('minY:', bbox.minY);
console.log('maxX:', bbox.maxX);
console.log('maxY:', bbox.maxY);
```
