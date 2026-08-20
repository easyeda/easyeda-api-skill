# SCH\_PrimitivePolygon class

Schematic &amp; symbol / polygon (polyline) primitive class

## Signature

```typescript
export class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI 
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

[create(line, color, fillColor, lineWidth, lineType)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Create Polygon


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Delete Polygon


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get Polygon


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get Polygon


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get all Polygon


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Get all Polygon primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** Modify Polygon


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitivePolygon.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Polygon

## Signature

```typescript
public create(line: Array<number>, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitivePolygon | undefined>;
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

line


</td><td>

Array&lt;number&gt;


</td><td>

Coordinate group, a continuous set of lines described by `[x1, y1, x2, y2, x3, y3]`


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

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

Polygon primitive object

### delete

# SCH\_PrimitivePolygon.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Polygon

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;
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

string \| [ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;


</td><td>

Polygon primitive ID or Polygon primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitivePolygon.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Polygon

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitivePolygon | undefined>;
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

Polygon primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

Polygon primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitivePolygon.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Polygon

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePolygon>>;
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

Polygon primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;&gt;

Polygon primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitivePolygon.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Polygon

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitivePolygon>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;&gt;

Array of Polygon primitive objects

### getallprimitiveid

# SCH\_PrimitivePolygon.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Polygon primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Polygon primitive IDs

### modify

# SCH\_PrimitivePolygon.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Polygon

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitivePolygon, property: { line?: undefined | number[]; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitivePolygon | undefined>;
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

string \| [ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ line?: undefined \| number\[\]; color?: undefined \| null \| string; fillColor?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

Polygon primitive object
