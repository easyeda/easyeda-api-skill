# PCB\_PrimitivePoured class

PCB &amp; footprint / copper fill primitive class

## Signature

```typescript
class PCB_PrimitivePoured implements IPCB_PrimitiveAPI
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[delete(primitiveIds)](./PCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Delete Copper fill

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Get Copper fill

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Get Copper fill

</td></tr>
<tr><td>

[getAll()](./PCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Get all Copper fill primitive

</td></tr>
<tr><td>

[getAllPrimitiveId()](./PCB_PrimitivePoured.md)

</td><td>

</td><td>

**_(BETA)_** Get all Copper fill primitive IDs

</td></tr>
</tbody></table>

---

## 方法详情

### delete

# PCB\_PrimitivePoured.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Copper fill

## Signature

```typescript
function delete(primitiveIds: string | IPCB_PrimitivePoured | Array<string> | Array<IPCB_PrimitivePoured>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;

</td><td>

Copper fill primitive ID or Copper fill primitive object

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

// 2. 记录删除前的覆铜填充数量
const beforeCount = (await eda.pcb_PrimitivePoured.getAll()).length;

// 3. 以 ID 数组形式删除第一个覆铜填充（也可以传图元对象）
const deleted = await eda.pcb_PrimitivePoured.delete([pouredList[0].getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复），从画布确认数量变化
const afterCount = (await eda.pcb_PrimitivePoured.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitivePoured.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Copper fill

## Signature

```typescript
function get(primitiveIds: string): Promise<IPCB_PrimitivePoured | undefined>;
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

string

</td><td>

Copper fill primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| undefined&gt;

Copper fill primitive object, `undefined` indicates that the retrieval failed

## Example

```javascript
// 1. 获取画布上已有的覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}
const ids = pouredList.slice(0, 2).map(p => p.getState_PrimitiveId());

// 2. 传单个 ID 字符串，返回单个覆铜填充对象
const single = await eda.pcb_PrimitivePoured.get(ids[0]);

// 3. 传 ID 数组，返回覆铜填充对象数组（未匹配到的 ID 不影响其它项返回）
const arr = await eda.pcb_PrimitivePoured.get(ids);
const partial = await eda.pcb_PrimitivePoured.get([ids[0], 'unknown-id']);

console.log('single primitiveType:', single.getState_PrimitiveType());
console.log('array length:', arr.length);
console.log('含未匹配 ID 时返回数量：', partial.length);
console.log('关联覆铜边框 ID：', single.getState_PourPrimitiveId());
```

### get_1

# PCB\_PrimitivePoured.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Copper fill

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePoured>>;
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

Array&lt;string&gt;

</td><td>

Copper fill primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

Copper fill primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitivePoured.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Copper fill primitive

## Signature

```typescript
function getAll(): Promise<Array<IPCB_PrimitivePoured>>;
```

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

Array of Copper fill primitive objects

## Example

```javascript
// 1. 获取画布上全部覆铜填充图元
const pouredList = await eda.pcb_PrimitivePoured.getAll();
if (!pouredList || pouredList.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}

// 2. 读取第一个覆铜填充的关键状态
const first = pouredList[0];

console.log('total poured:', pouredList.length);
console.log('first primitiveType:', first.getState_PrimitiveType());
console.log('first 关联覆铜边框 ID：', first.getState_PourPrimitiveId());
console.log('first 子区域数量：', first.getState_PourFills().length);
```

### getallprimitiveid

# PCB\_PrimitivePoured.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Copper fill primitive IDs

## Signature

```typescript
function getAllPrimitiveId(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Copper fill primitive IDs

## Example

```javascript
// 1. 获取画布上全部覆铜填充的图元 ID
const ids = await eda.pcb_PrimitivePoured.getAllPrimitiveId();
if (!ids || ids.length === 0) {
  console.log('说明：PCB 上没有覆铜填充，请先手动绘制覆铜并重建（设计 → 覆铜）');
  return;
}

// 2. 任取一个 ID 反查覆铜填充对象，验证列表有效
const poured = await eda.pcb_PrimitivePoured.get(ids[0]);

console.log('total poured ids:', ids.length);
console.log('refetched primitiveType:', poured.getState_PrimitiveType());
```
