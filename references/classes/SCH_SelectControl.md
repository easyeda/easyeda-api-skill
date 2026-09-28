# SCH\_SelectControl class

Schematic &amp; symbol / selection control class

## Signature

```typescript
class SCH_SelectControl
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

[clearSelected()](./SCH_SelectControl.md)

</td><td>

</td><td>

Clear the selection

</td></tr>
<tr><td>

[doCrossProbeSelect(components, pins, nets, highlight, select)](./SCH_SelectControl.md)

</td><td>

</td><td>

Perform cross-probe selection

</td></tr>
<tr><td>

[doSelectPrimitives(primitiveIds)](./SCH_SelectControl.md)

</td><td>

</td><td>

Select primitives using primitive IDs

</td></tr>
<tr><td>

[getAllSelectedPrimitives\_PrimitiveId()](./SCH_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Query the primitive IDs of all selected primitives

</td></tr>
<tr><td>

[getAllSelectedPrimitives()](./SCH_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Query the primitive objects of all selected primitives

</td></tr>
<tr><td>

[getCurrentMousePosition()](./SCH_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Get Current the mouse position on the canvas

</td></tr>
<tr><td>

[getSelectedPrimitives\_PrimitiveId()](./SCH_SelectControl.md)

</td><td>

</td><td>

Query the primitive IDs of the selected primitives

</td></tr>
<tr><td>

[getSelectedPrimitives()](./SCH_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Query all parameters of the selected primitives

</td></tr>
</tbody></table>

---

## 方法详情

### clearselected

# SCH\_SelectControl.clearSelected() method

Clear the selection

## Signature

```typescript
function clearSelected(): boolean;
```

## Returns

boolean

Whether the operation is successful

## Example

```javascript
// 1. 创建测试矩形并选中它
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);
const rectId = rect.getState_PrimitiveId();
await eda.sch_SelectControl.doSelectPrimitives([rectId]);

// 2. 确认清除前有选中图元
const beforeIds = await eda.sch_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('清除前选中数量：', beforeIds.length);

// 3. 清除选中（同步方法，直接返回结果）
const cleared = eda.sch_SelectControl.clearSelected();
console.log('cleared:', cleared);

// 4. 确认选中集已清空
const afterIds = await eda.sch_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('清除后选中数量：', afterIds.length);

// 5. 清理测试图元
await eda.sch_PrimitiveRectangle.delete([rectId]);
```

### docrossprobeselect

# SCH\_SelectControl.doCrossProbeSelect() method

Perform cross-probe selection

## Signature

```typescript
function doCrossProbeSelect(
	components?: Array<string>,
	pins?: Array<string>,
	nets?: Array<string>,
	highlight?: boolean,
	select?: boolean,
): boolean;
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

_(Optional)_ Whether Select

</td></tr>
</tbody></table>

## Returns

boolean

Whether the operation is successful

## Example

```javascript
// 1. 创建挂测试网络的导线，作为交叉选择的目标
const netName = '嘉立创示例_NET';
const wire = await eda.sch_PrimitiveWire.create([800, 300, 1200, 300], netName);
const wireId = wire.getState_PrimitiveId();

// 2. 按网络名交叉选择（highlight=true 高亮，select=true 选中；同步方法直接返回结果）
const crossProbed = eda.sch_SelectControl.doCrossProbeSelect(undefined, undefined, [netName], true, true);
console.log('crossProbed:', crossProbed);

// 3. 交叉探针作用于原理图与 PCB 的联动定位，返回 true 表示已触发；
// 需要选中当前文档图元时改用 doSelectPrimitives
eda.sch_SelectControl.clearSelected();
await eda.sch_PrimitiveWire.delete([wireId]);
```

### doselectprimitives

# SCH\_SelectControl.doSelectPrimitives() method

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
// 1. 创建测试矩形
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);
const rectId = rect.getState_PrimitiveId();

// 2. 用图元 ID 选中矩形
const selected = await eda.sch_SelectControl.doSelectPrimitives([rectId]);
console.log('selected:', selected);

// 3. 确认矩形已在选中集里
const selectedIds = await eda.sch_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('选中数量：', selectedIds.length);
console.log('包含测试矩形：', selectedIds.includes(rectId));

// 4. 清理：清除选中并删除测试图元
eda.sch_SelectControl.clearSelected();
await eda.sch_PrimitiveRectangle.delete([rectId]);
```

### getallselectedprimitives

# SCH\_SelectControl.getAllSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Query the primitive objects of all selected primitives

## Signature

```typescript
function getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
```

## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

Primitive objects of all selected primitives

## Example

```javascript
// 1. 创建测试矩形并选中
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);
const rectId = rect.getState_PrimitiveId();
await eda.sch_SelectControl.doSelectPrimitives([rectId]);

// 2. 获取所有已选中图元的图元对象
const primitives = await eda.sch_SelectControl.getAllSelectedPrimitives();
console.log('选中图元数量：', primitives.length);

// 3. 图元对象可直接调用图元方法读取属性
const first = primitives[0];
console.log('primitiveId:', first.getState_PrimitiveId());
console.log('primitiveType:', first.getState_PrimitiveType());

// 4. 清理：清除选中并删除测试图元
eda.sch_SelectControl.clearSelected();
await eda.sch_PrimitiveRectangle.delete([rectId]);
```

### getallselectedprimitives_primitiveid

# SCH\_SelectControl.getAllSelectedPrimitives\_PrimitiveId() method

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
// 1. 创建 2 个测试矩形并选中
const rect1 = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);
const rect2 = await eda.sch_PrimitiveRectangle.create(700, 300, 200, 100);
const rectIds = [rect1.getState_PrimitiveId(), rect2.getState_PrimitiveId()];
await eda.sch_SelectControl.doSelectPrimitives(rectIds);

// 2. 查询所有已选中图元的图元 ID
const selectedIds = await eda.sch_SelectControl.getAllSelectedPrimitives_PrimitiveId();
console.log('选中图元数量：', selectedIds.length);
console.log('包含全部测试矩形：', rectIds.every(id => selectedIds.includes(id)));

// 3. 清理：清除选中并删除测试图元
eda.sch_SelectControl.clearSelected();
await eda.sch_PrimitiveRectangle.delete(rectIds);
```

### getcurrentmouseposition

# SCH\_SelectControl.getCurrentMousePosition() method

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
const position = await eda.sch_SelectControl.getCurrentMousePosition();

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

# SCH\_SelectControl.getSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> Please use [getAllSelectedPrimitives](./SCH_SelectControl.md) instead

Query all parameters of the selected primitives

## Signature

```typescript
function getSelectedPrimitives(): Promise<Array<object>>;
```

## Returns

Promise&lt;Array&lt;object&gt;&gt;

All parameters of the selected primitives

### getselectedprimitives_primitiveid

# SCH\_SelectControl.getSelectedPrimitives\_PrimitiveId() method

> Warning: This API is now obsolete.
>
> Please use [getAllSelectedPrimitives\_PrimitiveId](./SCH_SelectControl.md) instead

Query the primitive IDs of the selected primitives

## Signature

```typescript
function getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Primitive IDs of the selected primitives
