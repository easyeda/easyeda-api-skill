# PNL\_PrimitiveEllipse class

面板 / 椭圆图元类

## Signature

```typescript
class PNL_PrimitiveEllipse implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

椭圆图元的增删改查，radiusX / radiusY 相等即为正圆；坐标为笛卡尔坐标系（Y 轴向上为正） 图元 ID（`primitiveId`<!-- -->）为稳定标识，对应数据模型 `gId`<!-- -->，会话内不变、跨保存有效；编辑器展示编号（`id`<!-- -->，形如 `e` + 序号）由编译器重排下发、会变化，不作为图元标识。

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[create(params)](./PNL_PrimitiveEllipse.md)

</td><td>

</td><td>

**_(BETA)_** 创建椭圆图元

</td></tr>
<tr><td>

[delete(primitiveIds)](./PNL_PrimitiveEllipse.md)

</td><td>

</td><td>

**_(BETA)_** 删除椭圆图元

</td></tr>
<tr><td>

[get(primitiveIds)](./PNL_PrimitiveEllipse.md)

</td><td>

</td><td>

**_(BETA)_** 获取椭圆图元（重载：单个 ID）

</td></tr>
<tr><td>

[get(primitiveIds)](./PNL_PrimitiveEllipse.md)

</td><td>

</td><td>

**_(BETA)_** 获取椭圆图元（重载：ID 数组）

</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PNL_PrimitiveEllipse.md)

</td><td>

</td><td>

**_(BETA)_** 获取全部椭圆图元

</td></tr>
<tr><td>

[getAllPrimitiveId()](./PNL_PrimitiveEllipse.md)

</td><td>

</td><td>

**_(BETA)_** 获取全部椭圆图元的 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PNL_PrimitiveEllipse.md)

</td><td>

</td><td>

**_(BETA)_** 修改椭圆图元属性

</td></tr>
</tbody></table>

---

## 方法详情

### create

# PNL\_PrimitiveEllipse.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建椭圆图元

## Signature

```typescript
function create(params: IPNL_EllipseCreateParameters): Promise<IPNL_PrimitiveEllipse | undefined>;
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

[IPNL\_EllipseCreateParameters](../interfaces/IPNL_EllipseCreateParameters.md)

</td><td>

椭圆创建参数，见 [IPNL\_EllipseCreateParameters](../interfaces/IPNL_EllipseCreateParameters.md)

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md) \| undefined&gt;

创建的椭圆图元对象，创建失败抛出中文错误

## Remarks

坐标为笛卡尔坐标系（Y 轴向上为正），`centerX` / `centerY` 为椭圆心坐标，`radiusX` / `radiusY` 为长短半径，两者相等即为正圆

`rotation` 为绕椭圆心逆时针旋转的角度（度），旋转时椭圆心保持不动 ADD since EDA v4.1.105

## Example

```javascript
// 1. 创建椭圆（椭圆心在原点上方 100）
const ellipse = await eda.pnl_PrimitiveEllipse.create({ centerX: 100, centerY: 100, radiusX: 100, radiusY: 60 });

// 2. 创建正圆 + 自定义样式
const circle = await eda.pnl_PrimitiveEllipse.create({
	centerX: 400,
	centerY: 100,
	radiusX: 80,
	radiusY: 80,
	strokeColor: '#FF6600',
	fillColor: '#FFEE00',
	strokeWidth: 3,
});
```

### delete

# PNL\_PrimitiveEllipse.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除椭圆图元

## Signature

```typescript
function delete(primitiveIds: string | IPNL_PrimitiveEllipse | Array<string> | Array<IPNL_PrimitiveEllipse>): Promise<boolean>;
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

string \| [IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md) \| Array&lt;string&gt; \| Array&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)<!-- -->&gt;

</td><td>

图元 ID、图元对象或它们的数组

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

删除是否成功，任一图元不存在或执行失败返回 `false`

## Remarks

传入单个图元或图元数组均可 ADD since EDA v4.1.105

### get

# PNL\_PrimitiveEllipse.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取椭圆图元（重载：单个 ID）

## Signature

```typescript
function get(primitiveIds: string): Promise<IPNL_PrimitiveEllipse | undefined>;
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

Promise&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md) \| undefined&gt;

图元对象，不存在或执行失败返回 `undefined`

## Remarks

ADD since EDA v4.1.105

### get_1

# PNL\_PrimitiveEllipse.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取椭圆图元（重载：ID 数组）

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPNL_PrimitiveEllipse>>;
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

Promise&lt;Array&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)<!-- -->&gt;&gt;

图元对象数组，任一图元不存在或执行失败返回空数组

## Remarks

ADD since EDA v4.1.105

### getall

# PNL\_PrimitiveEllipse.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取全部椭圆图元

## Signature

```typescript
function getAll(
	layer?: EPNL_LayerId,
	primitiveLock?: boolean,
): Promise<Array<IPNL_PrimitiveEllipse>>;
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

Promise&lt;Array&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)<!-- -->&gt;&gt;

图元对象数组，无图元或执行失败返回空数组

## Remarks

ADD since EDA v4.1.105

### getallprimitiveid

# PNL\_PrimitiveEllipse.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取全部椭圆图元的 ID

## Signature

```typescript
function getAllPrimitiveId(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

全部椭圆图元 ID 数组，无图元或执行失败返回空数组

## Remarks

ADD since EDA v4.1.105

### modify

# PNL\_PrimitiveEllipse.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改椭圆图元属性

## Signature

```typescript
function modify(
	primitiveId: string | IPNL_PrimitiveEllipse,
	property: {
		centerX?: number;
		centerY?: number;
		radiusX?: number;
		radiusY?: number;
		layer?: EPNL_LayerId;
		strokeColor?: string;
		fillColor?: string;
		strokeWidth?: number;
		rotation?: number;
		primitiveLock?: boolean;
	},
): Promise<IPNL_PrimitiveEllipse | undefined>;
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

string \| [IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md)

</td><td>

图元 ID 或图元对象

</td></tr>
<tr><td>

property

</td><td>

{ centerX?: number; centerY?: number; radiusX?: number; radiusY?: number; layer?: [EPNL\_LayerId](../enums/EPNL_LayerId.md)<!-- -->; strokeColor?: string; fillColor?: string; strokeWidth?: number; rotation?: number; primitiveLock?: boolean }

</td><td>

待更新的属性（传需要修改的字段即可）

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPNL\_PrimitiveEllipse](./IPNL_PrimitiveEllipse.md) \| undefined&gt;

修改后的图元对象，图元不存在或执行失败返回 `undefined`

## Remarks

部分更新语义：仅覆盖传入的字段，未传入字段保持原值，可同时修改多个字段

修改 `centerX` / `centerY` 为移动椭圆心；修改 `radiusX` / `radiusY` 为沿椭圆自身轴缩放，椭圆心保持不动；修改 `rotation` 为绕椭圆心逆时针旋转（度） ADD since EDA v4.1.105
