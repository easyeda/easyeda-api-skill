# SCH\_PrimitiveArc class

Schematic &amp; symbol / arc primitive class

## Signature

```typescript
export class SCH_PrimitiveArc implements ISCH_PrimitiveAPI 
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

[create(startX, startY, referenceX, referenceY, endX, endY, color, fillColor, lineWidth, lineType)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Create Arc


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Delete Arc


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get Arc


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get Arc


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get all Arc


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Get all Arc primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** Modify Arc


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveArc.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Arc

## Signature

```typescript
public create(startX: number, startY: number, referenceX: number, referenceY: number, endX: number, endY: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveArc | undefined>;
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

startX


</td><td>

number


</td><td>

Start point X


</td></tr>
<tr><td>

startY


</td><td>

number


</td><td>

Start point Y


</td></tr>
<tr><td>

referenceX


</td><td>

number


</td><td>

Reference point X


</td></tr>
<tr><td>

referenceY


</td><td>

number


</td><td>

Reference point Y


</td></tr>
<tr><td>

endX


</td><td>

number


</td><td>

End point X


</td></tr>
<tr><td>

endY


</td><td>

number


</td><td>

End point Y


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
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| undefined&gt;

Arc primitive object

### delete

# SCH\_PrimitiveArc.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Arc

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;


</td><td>

Arc primitive ID or Arc primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Arc

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveArc | undefined>;
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

Arc primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| undefined&gt;

Arc primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Arc

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveArc>>;
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

Arc primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;&gt;

Arc primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveArc.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Arc

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveArc>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;&gt;

Array of Arc primitive objects

### getallprimitiveid

# SCH\_PrimitiveArc.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Arc primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Arc primitive IDs

### modify

# SCH\_PrimitiveArc.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Arc

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveArc, property: { startX?: undefined | number; startY?: undefined | number; referenceX?: undefined | number; referenceY?: undefined | number; endX?: undefined | number; endY?: undefined | number; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveArc | undefined>;
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

string \| [ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ startX?: undefined \| number; startY?: undefined \| number; referenceX?: undefined \| number; referenceY?: undefined \| number; endX?: undefined \| number; endY?: undefined \| number; color?: undefined \| null \| string; fillColor?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md) \| undefined&gt;

Arc primitive object
