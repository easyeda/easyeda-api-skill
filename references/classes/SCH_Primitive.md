# SCH\_Primitive class

Schematic &amp; symbol / primitive class

## Signature

```typescript
export class SCH_Primitive 
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
public getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;
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

### getprimitivesbbox

# SCH\_Primitive.getPrimitivesBBox() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The BBox of the primitive

## Signature

```typescript
public getPrimitivesBBox(primitiveIds: Array<string | ISCH_Primitive>): Promise<{ minX: number; minY: number; maxX: number; maxY: number } | undefined>;
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

### getprimitivesbyprimitiveid

# SCH\_Primitive.getPrimitivesByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all properties of the primitives with the specified IDs

## Signature

```typescript
public getPrimitivesByPrimitiveId(ids: Array<string>): Promise<Array<ISCH_Primitive>>;
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
public getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;
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
