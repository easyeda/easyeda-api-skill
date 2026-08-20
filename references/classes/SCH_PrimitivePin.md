# SCH\_PrimitivePin class

Schematic &amp; symbol / pin primitive class

## Signature

```typescript
export class SCH_PrimitivePin implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Remarks

Pin primitives are only available in the symbol editor. In a schematic sheet, the pin associated with a symbol is called [a device pin primitive](./ISCH_PrimitiveComponentPin.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(x, y, pinNumber, pinName, rotation, pinLength, pinColor, pinShape, pinType)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Create Pin


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Delete Pin


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get Pin


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get Pin


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get all Pin


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get all Pin primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Modify Pin


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitivePin.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Pin

## Signature

```typescript
public create(x: number, y: number, pinNumber: string, pinName?: string, rotation?: number, pinLength?: number, pinColor?: string | null, pinShape?: ESCH_PrimitivePinShape, pinType?: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>;
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

x


</td><td>

number


</td><td>

X coordinate


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

Y coordinate


</td></tr>
<tr><td>

pinNumber


</td><td>

string


</td><td>

Pin number


</td></tr>
<tr><td>

pinName


</td><td>

string


</td><td>

_(Optional)_ Pin name


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle. Options: `0` `90` `180` `270`


</td></tr>
<tr><td>

pinLength


</td><td>

number


</td><td>

_(Optional)_ Pin length


</td></tr>
<tr><td>

pinColor


</td><td>

string \| null


</td><td>

_(Optional)_ Pin color, `null` indicates the default


</td></tr>
<tr><td>

pinShape


</td><td>

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)


</td><td>

_(Optional)_ Pin shape


</td></tr>
<tr><td>

pinType


</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)


</td><td>

_(Optional)_ Pin type


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| undefined&gt;

Pin primitive object

### delete

# SCH\_PrimitivePin.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Pin

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>;
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

string \| [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;


</td><td>

Pin primitive ID or Pin primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitivePin.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Pin

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;
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

Pin primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md) \| undefined&gt;

Pin primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitivePin.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Pin

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin>>;
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

Pin primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)<!-- -->&gt;&gt;

Pin primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitivePin.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Pin

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitivePin>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;&gt;

Array of Pin primitive objects

### getallprimitiveid

# SCH\_PrimitivePin.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Pin primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Pin primitive IDs

### modify

# SCH\_PrimitivePin.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Pin

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitivePin | ISCH_PrimitiveComponentPin, property: { x?: undefined | number; y?: undefined | number; pinNumber?: undefined | string; pinName?: undefined | string; rotation?: undefined | number; pinLength?: undefined | number; pinColor?: undefined | null | string; pinShape?: undefined | ESCH_PrimitivePinShape.NONE | ESCH_PrimitivePinShape.INVERTED | ESCH_PrimitivePinShape.CLOCK | ESCH_PrimitivePinShape.INVERTED_CLOCK; pinType?: undefined | ESCH_PrimitivePinType.IN | ESCH_PrimitivePinType.OUT | ESCH_PrimitivePinType.BI | ESCH_PrimitivePinType.PASSIVE | ESCH_PrimitivePinType.OPEN_COLLECTOR | ESCH_PrimitivePinType.OPEN_EMITTER | ESCH_PrimitivePinType.POWER | ESCH_PrimitivePinType.GROUND | ESCH_PrimitivePinType.HIZ | ESCH_PrimitivePinType.TERMINATOR | ESCH_PrimitivePinType.UNDEFINED; noConnected?: undefined | false | true; otherProperty?: undefined | Record<string, string | number | false | true> }): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;
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

string \| [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: undefined \| number; y?: undefined \| number; pinNumber?: undefined \| string; pinName?: undefined \| string; rotation?: undefined \| number; pinLength?: undefined \| number; pinColor?: undefined \| null \| string; pinShape?: undefined \| [ESCH\_PrimitivePinShape.NONE](../enums/ESCH_PrimitivePinShape.md) \| [ESCH\_PrimitivePinShape.INVERTED](../enums/ESCH_PrimitivePinShape.md) \| [ESCH\_PrimitivePinShape.CLOCK](../enums/ESCH_PrimitivePinShape.md) \| [ESCH\_PrimitivePinShape.INVERTED\_CLOCK](../enums/ESCH_PrimitivePinShape.md)<!-- -->; pinType?: undefined \| [ESCH\_PrimitivePinType.IN](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.OUT](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.BI](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.PASSIVE](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.OPEN\_COLLECTOR](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.OPEN\_EMITTER](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.POWER](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.GROUND](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.HIZ](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.TERMINATOR](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.UNDEFINED](../enums/ESCH_PrimitivePinType.md)<!-- -->; noConnected?: undefined \| false \| true; otherProperty?: undefined \| Record&lt;string, string \| number \| false \| true&gt; }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md) \| undefined&gt;

Pin primitive object
