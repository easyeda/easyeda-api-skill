# SCH\_PrimitiveBus class

Schematic &amp; symbol / bus primitive class

## Signature

```typescript
export class SCH_PrimitiveBus implements ISCH_PrimitiveAPI 
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

[create(busName, line, color, lineWidth, lineType)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Create a bus


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Delete the bus


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get the bus


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get the bus


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get all buses


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Get the primitive IDs of all buses


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** Modify the bus


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveBus.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a bus

## Signature

```typescript
public create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;
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

busName


</td><td>

string


</td><td>

Bus name


</td></tr>
<tr><td>

line


</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

Polyline coordinate group. Each segment is a continuous line described by `[x1, y1, x2, y2, x3, y3]`<!-- -->. If the polylines have no connection to each other, the creation will fail. Examples for the type `Array<Array<number>>`<!-- -->: 1. `[[], [0, 0, 0, 1]]` - segment 1 has no path, invalid; 2. `[[1], [0, 0, 0, 1]]` - segment 1 only has x, missing y, invalid; 3. `[[0, 0, -1, 0], [0, 0, 1, 1]]` - segment 1 is a horizontal line but segment 2 is a diagonal line, invalid; 4. `[[0, 0, -1, 0, -1, 1], [0, 1, 1, 1]]` - the two segments have no connection, invalid; 5. `[[1, 1], [1, 2, 2, 2]]` - segment 1 has only one point, ignored; segment 2 is a horizontal segment, and the final path keeps only segment 2, valid; 6. `[[1, 1], [1, 2]]` - segment 1 has only one point, ignored; segment 2 is also ignored, and the final path is empty, invalid


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ Bus color. `null` indicates the default


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

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

Bus primitive object

### delete

# SCH\_PrimitiveBus.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete the bus

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;


</td><td>

Primitive ID of the bus or the bus primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitiveBus.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the bus

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;
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

Primitive ID of the bus, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

Bus primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitiveBus.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the bus

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;
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

Primitive ID of the bus, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

Bus primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveBus.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all buses

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveBus>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

Bus primitive object array

### getallprimitiveid

# SCH\_PrimitiveBus.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the primitive IDs of all buses

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of bus primitive IDs

### modify

# SCH\_PrimitiveBus.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the bus

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveBus, property: { busName?: undefined | string; line?: undefined | number[] | number[][]; color?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveBus | undefined>;
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

string \| [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)


</td><td>

Primitive ID of the bus or the bus primitive object


</td></tr>
<tr><td>

property


</td><td>

{ busName?: undefined \| string; line?: undefined \| number\[\] \| number\[\]\[\]; color?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

Bus primitive object
