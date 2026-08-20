# SCH\_PrimitiveCircle class

Schematic &amp; symbol / circle primitive class

## Signature

```typescript
export class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(centerX, centerY, radius, color, fillColor, lineWidth, lineType, fillStyle)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Create a circle


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Delete the circle


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get the circle


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get the circle


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get all circles


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Get the primitive IDs of all circles


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** Modify the circle


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveCircle.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a circle

## Signature

```typescript
public create(centerX: number, centerY: number, radius: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle | undefined>;
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

centerX


</td><td>

number


</td><td>

Center of the circle X


</td></tr>
<tr><td>

centerY


</td><td>

number


</td><td>

Center of the circle Y


</td></tr>
<tr><td>

radius


</td><td>

number


</td><td>

Radius


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ Color, `null` indicates the default


</td></tr>
<tr><td>

fillColor


</td><td>

string \| null


</td><td>

_(Optional)_ Fill color. `none` indicates no fill, `null` indicates the default


</td></tr>
<tr><td>

lineWidth


</td><td>

number \| null


</td><td>

_(Optional)_ Line width, range `1-10`<!-- -->. `null` indicates the default


</td></tr>
<tr><td>

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

_(Optional)_ Line type. `null` indicates the default


</td></tr>
<tr><td>

fillStyle


</td><td>

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null


</td><td>

_(Optional)_ Fill style, `null` indicates the default


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

Circle primitive object

### delete

# SCH\_PrimitiveCircle.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the circle

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;


</td><td>

Primitive ID of the circle or the circle primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitiveCircle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the circle

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>;
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

Primitive ID of the circle, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

Circle primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitiveCircle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the circle

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>;
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

Primitive ID of the circle, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;&gt;

Circle primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveCircle.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all circles

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveCircle>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;&gt;

Array of circle primitive objects

### getallprimitiveid

# SCH\_PrimitiveCircle.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all circles

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of circle primitive IDs

### modify

# SCH\_PrimitiveCircle.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the circle

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveCircle, property: { centerX?: undefined | number; centerY?: undefined | number; radius?: undefined | number; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED; fillStyle?: undefined | null | ESCH_PrimitiveFillStyle.NONE | ESCH_PrimitiveFillStyle.SOLID | ESCH_PrimitiveFillStyle.GRID | ESCH_PrimitiveFillStyle.HORIZONTAL_LINE | ESCH_PrimitiveFillStyle.VERTICAL_LINE | ESCH_PrimitiveFillStyle.RHOMBIC_GRID | ESCH_PrimitiveFillStyle.LEFT_SLASH_LINE | ESCH_PrimitiveFillStyle.RIGHT_SLASH_LINE }): Promise<ISCH_PrimitiveCircle | undefined>;
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

string \| [ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ centerX?: undefined \| number; centerY?: undefined \| number; radius?: undefined \| number; color?: undefined \| null \| string; fillColor?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md)<!-- -->; fillStyle?: undefined \| null \| [ESCH\_PrimitiveFillStyle.NONE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.SOLID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.GRID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.HORIZONTAL\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.VERTICAL\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.RHOMBIC\_GRID](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.LEFT\_SLASH\_LINE](../enums/ESCH_PrimitiveFillStyle.md) \| [ESCH\_PrimitiveFillStyle.RIGHT\_SLASH\_LINE](../enums/ESCH_PrimitiveFillStyle.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

Circle primitive object
