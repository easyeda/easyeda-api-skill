# PCB\_SelectControl class

PCB &amp; footprint / selection control class

## Signature

```typescript
class PCB_SelectControl
```

## Remarks

Get or operate the selected elements

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[clearSelected()](./PCB_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Clear the selection

</td></tr>
<tr><td>

[doCrossProbeSelect(components, pins, nets, highlight, select)](./PCB_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Perform cross-probe selection

</td></tr>
<tr><td>

[doSelectPrimitives(primitiveIds)](./PCB_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Select primitives using primitive IDs

</td></tr>
<tr><td>

[getAllSelectedPrimitives\_PrimitiveId()](./PCB_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Query the primitive IDs of all selected primitives

</td></tr>
<tr><td>

[getAllSelectedPrimitives()](./PCB_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Query the primitive objects of all selected primitives

</td></tr>
<tr><td>

[getCurrentMousePosition()](./PCB_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Get Current the mouse position on the canvas

</td></tr>
<tr><td>

[getSelectedPrimitives()](./PCB_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Query all parameters of the selected primitives

</td></tr>
</tbody></table>

---

## 方法详情

### clearselected

# PCB\_SelectControl.clearSelected() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Clear the selection

## Signature

```typescript
function clearSelected(): Promise<boolean>;
```

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example

```javascript
// 1. 创建测试焊盘并选中它
const pad = await eda.pcb_PrimitivePad.create(1, '1', 2000, 2000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const padId = pad.getState_PrimitiveId();
await eda.pcb_SelectControl.doSelectPrimitives([padId]);

// 2. 确认清除前有选中图元
const beforeIds = await eda.pcb_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('清除前选中数量：', beforeIds.length);

// 3. 清除选中
const cleared = await eda.pcb_SelectControl.clearSelected();
console.log('cleared:', cleared);

// 4. 确认选中集已清空
const afterIds = await eda.pcb_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('清除后选中数量：', afterIds.length);

// 5. 清理测试图元
await eda.pcb_PrimitivePad.delete([padId]);
```

### docrossprobeselect

# PCB\_SelectControl.doCrossProbeSelect() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Perform cross-probe selection

## Signature

```typescript
function doCrossProbeSelect(
	components?: Array<string>,
	pins?: Array<string>,
	nets?: Array<string>,
	highlight?: boolean,
	select?: boolean,
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

components

</td><td>

Array&lt;string&gt;

</td><td>

_(Optional)_ Device designator

</td></tr>
<tr><td>

pins

</td><td>

Array&lt;string&gt;

</td><td>

_(Optional)_ Device designator \_ pin number, format is \['U1\_1', 'U1\_2'\]

</td></tr>
<tr><td>

nets

</td><td>

Array&lt;string&gt;

</td><td>

_(Optional)_ Net name

</td></tr>
<tr><td>

highlight

</td><td>

boolean

</td><td>

_(Optional)_ Whether to highlight

</td></tr>
<tr><td>

select

</td><td>

boolean

</td><td>

_(Optional)_ Whether the operation is successful

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

## Example

```javascript
// 1. 创建 2 个挂同一网络的测试焊盘，作为交叉选择的目标
const netName = '嘉立创示例_NET';
const pad1 = await eda.pcb_PrimitivePad.create(1, '1', 2000, 2000, 0, ['ELLIPSE', 60, 60], netName, null, 0, 0, 0, false, 0);
const pad2 = await eda.pcb_PrimitivePad.create(1, '2', 3000, 2000, 0, ['ELLIPSE', 60, 60], netName, null, 0, 0, 0, false, 0);
const padIds = [pad1.getState_PrimitiveId(), pad2.getState_PrimitiveId()];

// 2. 按网络名交叉选择（highlight=true 高亮，select=true 选中）
const crossProbed = await eda.pcb_SelectControl.doCrossProbeSelect(undefined, undefined, [netName], true, true);
console.log('crossProbed:', crossProbed);

// 3. 确认该网络上的焊盘已进入选中集
const selectedIds = await eda.pcb_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('选中图元数量：', selectedIds.length);

// 4. 清理选中状态和测试图元
await eda.pcb_SelectControl.clearSelected();
await eda.pcb_PrimitivePad.delete(padIds);
```

### doselectprimitives

# PCB\_SelectControl.doSelectPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Select primitives using primitive IDs

## Signature

```typescript
function doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;
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

string \| Array&lt;string&gt;

</td><td>

Primitive ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example

```javascript
// 1. 创建测试焊盘
const pad = await eda.pcb_PrimitivePad.create(1, '1', 2000, 2000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const padId = pad.getState_PrimitiveId();

// 2. 用图元 ID 选中焊盘
const selected = await eda.pcb_SelectControl.doSelectPrimitives([padId]);
console.log('selected:', selected);

// 3. 确认焊盘已在选中集里
const selectedIds = await eda.pcb_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('选中数量：', selectedIds.length);
console.log('包含测试焊盘：', selectedIds.includes(padId));

// 4. 清理：清除选中并删除测试图元
await eda.pcb_SelectControl.clearSelected();
await eda.pcb_PrimitivePad.delete([padId]);
```

### getallselectedprimitives

# PCB\_SelectControl.getAllSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Query the primitive objects of all selected primitives

## Signature

```typescript
function getAllSelectedPrimitives(): Promise<Array<IPCB_Primitive>>;
```

## Returns

Promise&lt;Array&lt;[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;&gt;

Primitive objects of all selected primitives

## Example

```javascript
// 1. 创建测试焊盘并选中
const pad = await eda.pcb_PrimitivePad.create(1, '1', 2000, 2000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const padId = pad.getState_PrimitiveId();
await eda.pcb_SelectControl.doSelectPrimitives([padId]);

// 2. 获取所有已选中图元的图元对象
const primitives = await eda.pcb_SelectControl.getAllSelectedPrimitives();
console.log('选中图元数量：', primitives.length);

// 3. 图元对象可直接调用图元方法读取属性
const first = primitives[0];
console.log('primitiveId:', first.getState_PrimitiveId());
console.log('layer:', first.getState_Layer());

// 4. 清理：清除选中并删除测试图元
await eda.pcb_SelectControl.clearSelected();
await eda.pcb_PrimitivePad.delete([padId]);
```

### getallselectedprimitives_primitiveid

# PCB\_SelectControl.getAllSelectedPrimitives\_PrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Query the primitive IDs of all selected primitives

## Signature

```typescript
function getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Primitive IDs of all selected primitives

## Example

```javascript
// 1. 创建 2 个测试焊盘并选中
const pad1 = await eda.pcb_PrimitivePad.create(1, '1', 2000, 2000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const pad2 = await eda.pcb_PrimitivePad.create(1, '2', 3000, 2000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const padIds = [pad1.getState_PrimitiveId(), pad2.getState_PrimitiveId()];
await eda.pcb_SelectControl.doSelectPrimitives(padIds);

// 2. 查询所有已选中图元的图元 ID
const selectedIds = await eda.pcb_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('选中图元数量：', selectedIds.length);
console.log('包含全部测试焊盘：', padIds.every(id => selectedIds.includes(id)));

// 3. 清理：清除选中并删除测试图元
await eda.pcb_SelectControl.clearSelected();
await eda.pcb_PrimitivePad.delete(padIds);
```

### getcurrentmouseposition

# PCB\_SelectControl.getCurrentMousePosition() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Current the mouse position on the canvas

## Signature

```typescript
function getCurrentMousePosition(): Promise<{ x: number; y: number } | undefined>;
```

## Returns

Promise&lt;{ x: number; y: number } \| undefined&gt;

The mouse position on the canvas. `undefined` means the current mouse is not on the canvas

## Example

```javascript
// 1. 查询鼠标当前位置
const position = await eda.pcb_SelectControl.getCurrentMousePosition();

// 2. 鼠标在画布上时输出坐标，不在画布上时返回 undefined
if (position) {
	console.log('x:', position.x);
	console.log('y:', position.y);
}
else {
	console.log('鼠标当前不在画布上');
}
```

### getselectedprimitives

# PCB\_SelectControl.getSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> Please use [getAllSelectedPrimitives](./PCB_SelectControl.md) instead

Query all parameters of the selected primitives

## Signature

```typescript
function getSelectedPrimitives(): Promise<Array<object>>;
```

## Returns

Promise&lt;Array&lt;object&gt;&gt;

All parameters of the selected primitives
