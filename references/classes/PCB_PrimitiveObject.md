# PCB\_PrimitiveObject class

PCB &amp; footprint / binary embedded object primitive class

## Signature

```typescript
export class PCB_PrimitiveObject implements IPCB_PrimitiveAPI 
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Remarks

Color silkscreen images are binary embedded objects. They must be created and modified using the methods of binary embedded objects

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(layer, topLeftX, topLeftY, binaryData, width, height, rotation, mirror, fileName, primitiveLock)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Create Binary embedded object


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Delete Binary embedded object


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get Binary embedded object


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get Binary embedded object


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get all Binary embedded object


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get all Binary embedded object primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Modify Binary embedded object


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveObject.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Binary embedded object

## Signature

```typescript
public create(layer: TPCB_LayersOfObject, topLeftX: number, topLeftY: number, binaryData: string, width: number, height: number, rotation?: number, mirror?: boolean, fileName?: string, primitiveLock?: boolean): Promise<IPCB_PrimitiveObject | undefined>;
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

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)


</td><td>

Layer


</td></tr>
<tr><td>

topLeftX


</td><td>

number


</td><td>

Top-left point X


</td></tr>
<tr><td>

topLeftY


</td><td>

number


</td><td>

Top-left point Y


</td></tr>
<tr><td>

binaryData


</td><td>

string


</td><td>

Binary data


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

Width


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

Height


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is horizontally mirrored


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| undefined&gt;

- binary embedded object primitive object

### delete

# PCB\_PrimitiveObject.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Binary embedded object

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;


</td><td>

Binary embedded object primitive ID or Binary embedded object primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# PCB\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Binary embedded object

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitiveObject | undefined>;
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

Binary embedded object primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object, `undefined` indicates that the retrieval failed

### get_1

# PCB\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Binary embedded object

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveObject>>;
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

Binary embedded object primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;&gt;

Binary embedded object primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveObject.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Binary embedded object

## Signature

```typescript
public getAll(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveObject>>;
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

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)


</td><td>

_(Optional)_ Layer


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;&gt;

Array of Binary embedded object primitive objects

### getallprimitiveid

# PCB\_PrimitiveObject.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Binary embedded object primitive IDs

## Signature

```typescript
public getAllPrimitiveId(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<string>>;
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

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)


</td><td>

_(Optional)_ Layer


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Binary embedded object primitive IDs

### modify

# PCB\_PrimitiveObject.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Binary embedded object

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitiveObject, property: { layer?: undefined | EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.BOTTOM_SILKSCREEN | EPCB_LayerId.DOCUMENT; topLeftX?: undefined | number; topLeftY?: undefined | number; binaryData?: undefined | string; width?: undefined | number; height?: undefined | number; rotation?: undefined | number; mirror?: undefined | false | true; fileName?: undefined | string; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveObject | undefined>;
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

string \| [IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: undefined \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md)<!-- -->; topLeftX?: undefined \| number; topLeftY?: undefined \| number; binaryData?: undefined \| string; width?: undefined \| number; height?: undefined \| number; rotation?: undefined \| number; mirror?: undefined \| false \| true; fileName?: undefined \| string; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object, `undefined` indicates that the modification failed
