# SCH\_Primitive class

Schematic &amp; symbol / primitive class

## Signature

```typescript
class SCH_Primitive
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

[getPrimitiveByPrimitiveId(id)](./SCH_Primitive.md)

</td><td>

</td><td>

Get all properties of the primitive with the specified ID

</td></tr>
<tr><td>

[getPrimitivesBBox(primitiveIds)](./SCH_Primitive.md)

</td><td>

</td><td>

**_(BETA)_** Get The BBox of the primitive

</td></tr>
<tr><td>

[getPrimitivesByPrimitiveId(ids)](./SCH_Primitive.md)

</td><td>

</td><td>

**_(BETA)_** Get all properties of the primitives with the specified IDs

</td></tr>
<tr><td>

[getPrimitiveTypeByPrimitiveId(id)](./SCH_Primitive.md)

</td><td>

</td><td>

**_(BETA)_** Get the primitive type of the primitive with the specified ID

</td></tr>
</tbody></table>

---

## 方法详情

### getprimitivebyprimitiveid

# SCH\_Primitive.getPrimitiveByPrimitiveId() method

Get all properties of the primitive with the specified ID

## Signature

```typescript
function getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;
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

id

</td><td>

string

</td><td>

Primitive ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md) \| undefined&gt;

All properties of the primitive

## Example

```javascript
// 1. 创建一个测试矩形作为查询目标（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(1000, 1000, 200, 100);
const id = rect.getState_PrimitiveId();

// 2. 用图元 ID 反查，返回该图元的完整属性对象（图元实例）
const primitive = await eda.sch_Primitive.getPrimitiveByPrimitiveId(id);

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveRectangle.delete([id]);

console.log('primitiveType:', primitive.getState_PrimitiveType());
console.log('width:', primitive.getState_Width());
console.log('height:', primitive.getState_Height());
console.log('id match:', primitive.getState_PrimitiveId() === id);
```

### getprimitivesbbox

# SCH\_Primitive.getPrimitivesBBox() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The BBox of the primitive

## Signature

```typescript
function getPrimitivesBBox(
	primitiveIds: Array<string | ISCH_Primitive>,
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

Array&lt;string \| [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;

</td><td>

Array of Primitive ID array or primitive objects

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ minX: number; minY: number; maxX: number; maxY: number } \| undefined&gt;

The BBox of the primitive. If the primitive does not exist or has no BBox, `undefined` will be returned

## Example

```javascript
// 1. 创建两个测试矩形：左上角（1000,1000）尺寸 200x100，左上角（1600,1400）尺寸 150x80
const rect1 = await eda.sch_PrimitiveRectangle.create(1000, 1000, 200, 100);
const rect2 = await eda.sch_PrimitiveRectangle.create(1600, 1400, 150, 80);

// 2. 计算两个矩形整体的 BBox（传图元 ID 数组，也支持直接传图元对象数组）
const bbox = await eda.sch_Primitive.getPrimitivesBBox([
	rect1.getState_PrimitiveId(),
	rect2.getState_PrimitiveId(),
]);

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveRectangle.delete([
	rect1.getState_PrimitiveId(),
	rect2.getState_PrimitiveId(),
]);

console.log('minX:', bbox.minX);
console.log('minY:', bbox.minY);
console.log('maxX:', bbox.maxX);
console.log('maxY:', bbox.maxY);
```

### getprimitivesbyprimitiveid

# SCH\_Primitive.getPrimitivesByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all properties of the primitives with the specified IDs

## Signature

```typescript
function getPrimitivesByPrimitiveId(ids: Array<string>): Promise<Array<ISCH_Primitive>>;
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

ids

</td><td>

Array&lt;string&gt;

</td><td>

Primitive ID array

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

All properties of all primitives

### getprimitivetypebyprimitiveid

# SCH\_Primitive.getPrimitiveTypeByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive type of the primitive with the specified ID

## Signature

```typescript
function getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;
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

id

</td><td>

string

</td><td>

Primitive ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md) \| undefined&gt;

Primitive type

## Example

```javascript
// 1. 创建一条测试导线作为查询目标（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000], 'SIG_A');

// 2. 用图元 ID 查询类型
const type = await eda.sch_Primitive.getPrimitiveTypeByPrimitiveId(wire.getState_PrimitiveId());

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('primitiveType:', type);
```
