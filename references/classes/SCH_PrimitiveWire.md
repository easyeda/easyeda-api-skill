# SCH\_PrimitiveWire class

Schematic &amp; symbol / wire primitive class

## Signature

```typescript
export class SCH_PrimitiveWire implements ISCH_PrimitiveAPI 
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

[create(line, net, color, lineWidth, lineType)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Create Wire


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Delete Wire


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get Wire


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get Wire


</td></tr>
<tr><td>

[getAll(net)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get all Wire


</td></tr>
<tr><td>

[getAllPrimitiveId(net)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Get all Wire primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** Modify Wire


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveWire.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Wire

## Signature

```typescript
public create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;
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

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

Polyline coordinate group. Each segment is a continuous line described by `[x1, y1, x2, y2, x3, y3]`<!-- -->. If the polylines have no connection to each other, the creation will fail. Examples for the type `Array<Array<number>>`<!-- -->: 1. `[[], [0, 0, 0, 1]]` - segment 1 has no path, invalid; 2. `[[1], [0, 0, 0, 1]]` - segment 1 only has x, missing y, invalid; 3. `[[0, 0, -1, 0], [0, 0, 1, 1]]` - segment 1 is a horizontal line but segment 2 is a diagonal line, invalid; 4. `[[0, 0, -1, 0, -1, 1], [0, 1, 1, 1]]` - the two segments have no connection, invalid; 5. `[[1, 1], [1, 2, 2, 2]]` - segment 1 has only one point, ignored; segment 2 is a horizontal segment, and the final path keeps only segment 2, valid; 6. `[[1, 1], [1, 2]]` - segment 1 has only one point, ignored; segment 2 is also ignored, and the final path is empty, invalid


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_(Optional)_ Net name. If not specified, the following rules apply: 1. If no coordinate falls on any primitive, the empty net is used by default; 2. If one coordinate point is on a primitive of a net, the net of that primitive is followed; 3. If multiple coordinate points are on primitives of different nets, the creation fails. If specified, the following rules apply: 1. If one or more coordinate points are on primitives of other nets, and those other primitives do not explicitly (usually via net labels or net ports) specify a net, they follow the specified net; 2. If other primitives have specified a net, the creation fails


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ Wire color, `null` indicates the default


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

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

Wire primitive object

### delete

# SCH\_PrimitiveWire.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Wire

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;


</td><td>

Wire primitive ID or Wire primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitiveWire.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Wire

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;
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

Wire primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

Wire primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitiveWire.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Wire

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

Wire primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

Wire primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveWire.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Wire

## Signature

```typescript
public getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ Net name


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

Array of Wire primitive objects

### getallprimitiveid

# SCH\_PrimitiveWire.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Wire primitive IDs

## Signature

```typescript
public getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>;
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

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ Net name


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Wire primitive IDs

### modify

# SCH\_PrimitiveWire.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Wire

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveWire, property: { line?: undefined | number[] | number[][]; net?: undefined | string; color?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveWire | undefined>;
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

string \| [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)


</td><td>

Wire primitive ID or Wire primitive object


</td></tr>
<tr><td>

property


</td><td>

{ line?: undefined \| number\[\] \| number\[\]\[\]; net?: undefined \| string; color?: undefined \| null \| string; lineWidth?: undefined \| null \| number; lineType?: undefined \| null \| [ESCH\_PrimitiveLineType.SOLID](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DASHED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOTTED](../enums/ESCH_PrimitiveLineType.md) \| [ESCH\_PrimitiveLineType.DOT\_DASHED](../enums/ESCH_PrimitiveLineType.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

Wire primitive object
