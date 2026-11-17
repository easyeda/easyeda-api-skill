# PNL\_PrimitiveRectangle class

面板 / 矩形图元类

## Signature

```typescript
class PNL_PrimitiveRectangle implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

矩形图元的增删改查，含圆角能力；坐标为笛卡尔坐标系（Y 轴向上为正）

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[create(params)](./PNL_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** 创建矩形图元

</td></tr>
<tr><td>

[delete(primitiveIds)](./PNL_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** 删除矩形图元

</td></tr>
<tr><td>

[get(primitiveIds)](./PNL_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** 获取矩形图元（重载：单个 ID）

</td></tr>
<tr><td>

[get(primitiveIds)](./PNL_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** 获取矩形图元（重载：ID 数组）

</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PNL_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** 获取全部矩形图元

</td></tr>
<tr><td>

[getAllPrimitiveId()](./PNL_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** 获取全部矩形图元的 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PNL_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** 修改矩形图元属性

</td></tr>
</tbody></table>

---

## 方法详情

### create

# PNL\_PrimitiveRectangle.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建矩形图元

## Signature

```typescript
function create(
	params: IPNL_RectangleCreateParameters,
): Promise<IPNL_PrimitiveRectangle | undefined>;
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

params

</td><td>

[IPNL\_RectangleCreateParameters](../interfaces/IPNL_RectangleCreateParameters.md)

</td><td>

矩形创建参数，见 [IPNL\_RectangleCreateParameters](../interfaces/IPNL_RectangleCreateParameters.md)

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md) \| undefined&gt;

创建的矩形图元对象，创建失败抛出中文错误

## Remarks

坐标为笛卡尔坐标系（Y 轴向上为正），`x` / `y` 为矩形参考点位置，参考点缺省为左下角，`rotation` 为 `0` 时即包围盒左下角

`rotation` 为绕参考点逆时针旋转的角度（度），旋转时参考点保持不动

例：`{ x: 0, y: 150, width: 180, height: 90 }` 表示左下角在原点上方 150、左上角在原点上方 240 ADD since EDA v4.1.105

## Example

```javascript
// 1. 创建直角矩形（左下角在原点上方 100）
const rect = await eda.pnl_PrimitiveRectangle.create({ x: 100, y: 100, width: 200, height: 120 });

// 2. 创建圆角矩形 + 自定义样式
const rounded = await eda.pnl_PrimitiveRectangle.create({
	x: 400,
	y: 100,
	width: 160,
	height: 160,
	rx: 20,
	ry: 20,
	strokeColor: '#FF6600',
	fillColor: '#FFEE00',
	strokeWidth: 3,
});
```

### delete

# PNL\_PrimitiveRectangle.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除矩形图元

## Signature

```typescript
function delete(primitiveIds: string | IPNL_PrimitiveRectangle | Array<string> | Array<IPNL_PrimitiveRectangle>): Promise<boolean>;
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

string \| [IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md) \| Array&lt;string&gt; \| Array&lt;[IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md)<!-- -->&gt;

</td><td>

图元 ID、图元对象或它们的数组

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

删除是否成功，任一图元不存在或执行失败返回 `false`

## Remarks

ADD since EDA v4.1.105

### get

# PNL\_PrimitiveRectangle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取矩形图元（重载：单个 ID）

## Signature

```typescript
function get(primitiveIds: string): Promise<IPNL_PrimitiveRectangle | undefined>;
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

图元 ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md) \| undefined&gt;

图元对象，不存在或执行失败返回 `undefined`

## Remarks

ADD since EDA v4.1.105

### get_1

# PNL\_PrimitiveRectangle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取矩形图元（重载：ID 数组）

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPNL_PrimitiveRectangle>>;
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

图元 ID 数组

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md)<!-- -->&gt;&gt;

图元对象数组，任一图元不存在或执行失败返回空数组

## Remarks

ADD since EDA v4.1.105

### getall

# PNL\_PrimitiveRectangle.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取全部矩形图元

## Signature

```typescript
function getAll(
	layer?: EPNL_LayerId,
	primitiveLock?: boolean,
): Promise<Array<IPNL_PrimitiveRectangle>>;
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

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

_(Optional)_ 按图层过滤，不传不过滤

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_(Optional)_ 按锁定状态过滤，不传不过滤

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md)<!-- -->&gt;&gt;

图元对象数组，无图元或执行失败返回空数组

## Remarks

ADD since EDA v4.1.105

### getallprimitiveid

# PNL\_PrimitiveRectangle.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取全部矩形图元的 ID

## Signature

```typescript
function getAllPrimitiveId(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

全部矩形图元 ID 数组，无图元或执行失败返回空数组

## Remarks

ADD since EDA v4.1.105

### modify

# PNL\_PrimitiveRectangle.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改矩形图元属性

## Signature

```typescript
function modify(
	primitiveId: string | IPNL_PrimitiveRectangle,
	property: {
		x?: number;
		y?: number;
		width?: number;
		height?: number;
		rx?: number;
		ry?: number;
		layer?: EPNL_LayerId;
		strokeColor?: string;
		fillColor?: string;
		strokeWidth?: number;
		rotation?: number;
		primitiveLock?: boolean;
	},
): Promise<IPNL_PrimitiveRectangle | undefined>;
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

string \| [IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md)

</td><td>

图元 ID 或图元对象

</td></tr>
<tr><td>

property

</td><td>

{ x?: number; y?: number; width?: number; height?: number; rx?: number; ry?: number; layer?: [EPNL\_LayerId](../enums/EPNL_LayerId.md)<!-- -->; strokeColor?: string; fillColor?: string; strokeWidth?: number; rotation?: number; primitiveLock?: boolean }

</td><td>

待更新的属性（传需要修改的字段即可）

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPNL\_PrimitiveRectangle](./IPNL_PrimitiveRectangle.md) \| undefined&gt;

修改后的图元对象，图元不存在或执行失败返回 `undefined`

## Remarks

部分更新语义：仅覆盖传入的字段，未传入字段保持原值，可同时修改多个字段

修改 `x` / `y` 为移动参考点；修改 `width` / `height` 为沿矩形自身轴缩放，参考点保持不动；修改 `rotation` 为绕参考点逆时针旋转（度）

参考点取编辑器属性面板当前全局设置（九宫格，缺省左下角） ADD since EDA v4.1.105
