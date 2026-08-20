# PCB\_PrimitivePad class

PCB &amp; footprint / pad primitive class

## Signature

```typescript
export class PCB_PrimitivePad implements IPCB_PrimitiveAPI 
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(layer, padNumber, x, y, rotation, pad, net, hole, holeOffsetX, holeOffsetY, holeRotation, metallization, padType, specialPad, solderMaskAndPasteMaskExpansion, heatWelding, primitiveLock)](./PCB_PrimitivePad.md)


</td><td>


</td><td>

Create Pad


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** Delete Pad


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** Get Pad


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** Get Pad


</td></tr>
<tr><td>

[getAll(layer, net, primitiveLock, padType)](./PCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** Get all Pad


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, net, primitiveLock, padType)](./PCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** Get all Pad primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitivePad.md)


</td><td>


</td><td>

**_(BETA)_** Modify Pad


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitivePad.create() method

Create Pad

## Signature

```typescript
public create(layer: TPCB_LayersOfPad, padNumber: string, x: number, y: number, rotation?: number, pad?: TPCB_PrimitivePadShape, net?: string, hole?: TPCB_PrimitivePadHole | null, holeOffsetX?: number, holeOffsetY?: number, holeRotation?: number, metallization?: boolean, padType?: EPCB_PrimitivePadType, specialPad?: TPCB_PrimitiveSpecialPadShape, solderMaskAndPasteMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, heatWelding?: IPCB_PrimitivePadHeatWelding | null, primitiveLock?: boolean): Promise<IPCB_PrimitivePad | undefined>;
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

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)


</td><td>

Layer


</td></tr>
<tr><td>

padNumber


</td><td>

string


</td><td>

Pad number


</td></tr>
<tr><td>

x


</td><td>

number


</td><td>

X position


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

Y position


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle


</td></tr>
<tr><td>

pad


</td><td>

[TPCB\_PrimitivePadShape](../types/TPCB_PrimitivePadShape.md)


</td><td>

_(Optional)_ Pad shape. This parameter is required before the special pad shape is implemented


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_(Optional)_ Net name


</td></tr>
<tr><td>

hole


</td><td>

[TPCB\_PrimitivePadHole](../types/TPCB_PrimitivePadHole.md) \| null


</td><td>

_(Optional)_ Hole. `null` indicates no hole


</td></tr>
<tr><td>

holeOffsetX


</td><td>

number


</td><td>

_(Optional)_ Hole offset X


</td></tr>
<tr><td>

holeOffsetY


</td><td>

number


</td><td>

_(Optional)_ Hole offset Y


</td></tr>
<tr><td>

holeRotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle of the hole relative to the pad


</td></tr>
<tr><td>

metallization


</td><td>

boolean


</td><td>

_(Optional)_ Whether the hole wall is plated


</td></tr>
<tr><td>

padType


</td><td>

[EPCB\_PrimitivePadType](../enums/EPCB_PrimitivePadType.md)


</td><td>

_(Optional)_ Pad type


</td></tr>
<tr><td>

specialPad


</td><td>

[TPCB\_PrimitiveSpecialPadShape](../types/TPCB_PrimitiveSpecialPadShape.md)


</td><td>

_(Optional)_ Special pad shape. Currently not implemented; please do not use it


</td></tr>
<tr><td>

solderMaskAndPasteMaskExpansion


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

_(Optional)_ Solder mask/paste mask expansion. `null` means following the rules


</td></tr>
<tr><td>

heatWelding


</td><td>

[IPCB\_PrimitivePadHeatWelding](../interfaces/IPCB_PrimitivePadHeatWelding.md) \| null


</td><td>

_(Optional)_ Thermal relief optimization parameters


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

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md) \| undefined&gt;

Pad primitive object

### delete

# PCB\_PrimitivePad.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Pad

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitivePad | Array<string> | Array<IPCB_PrimitivePad>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePad](./IPCB_PrimitivePad.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;


</td><td>

Pad primitive ID or Pad primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# PCB\_PrimitivePad.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Pad

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitivePad | undefined>;
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

Pad primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md) \| undefined&gt;

Pad primitive object, `undefined` indicates that the retrieval failed

### get_1

# PCB\_PrimitivePad.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Pad

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePad>>;
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

Pad primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;&gt;

Pad primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitivePad.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Pad

## Signature

```typescript
public getAll(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<IPCB_PrimitivePad>>;
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

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)


</td><td>

_(Optional)_ Layer


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_(Optional)_ Net name


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
<tr><td>

padType


</td><td>

[EPCB\_PrimitivePadType](../enums/EPCB_PrimitivePadType.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)<!-- -->&gt;&gt;

Array of Pad primitive objects

### getallprimitiveid

# PCB\_PrimitivePad.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Pad primitive IDs

## Signature

```typescript
public getAllPrimitiveId(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<string>>;
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

[TPCB\_LayersOfPad](../types/TPCB_LayersOfPad.md)


</td><td>

_(Optional)_ Layer


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_(Optional)_ Net name


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
<tr><td>

padType


</td><td>

[EPCB\_PrimitivePadType](../enums/EPCB_PrimitivePadType.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Pad primitive IDs

### modify

# PCB\_PrimitivePad.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Pad

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitivePad, property: { layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.BOTTOM | EPCB_LayerId.MULTI; padNumber?: undefined | string; x?: undefined | number; y?: undefined | number; rotation?: undefined | number; pad?: undefined | any | any | any; net?: undefined | string; hole?: undefined | null | any | any; holeOffsetX?: undefined | number; holeOffsetY?: undefined | number; holeRotation?: undefined | number; metallization?: undefined | false | true; specialPad?: undefined | TPCB_PrimitiveSpecialPadShape; solderMaskAndPasteMaskExpansion?: undefined | null | IPCB_PrimitiveSolderMaskAndPasteMaskExpansion; heatWelding?: undefined | null | IPCB_PrimitivePadHeatWelding; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitivePad | undefined>;
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

string \| [IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MULTI](../enums/EPCB_LayerId.md)<!-- -->; padNumber?: undefined \| string; x?: undefined \| number; y?: undefined \| number; rotation?: undefined \| number; pad?: undefined \| any \| any \| any; net?: undefined \| string; hole?: undefined \| null \| any \| any; holeOffsetX?: undefined \| number; holeOffsetY?: undefined \| number; holeRotation?: undefined \| number; metallization?: undefined \| false \| true; specialPad?: undefined \| [TPCB\_PrimitiveSpecialPadShape](../types/TPCB_PrimitiveSpecialPadShape.md)<!-- -->; solderMaskAndPasteMaskExpansion?: undefined \| null \| [IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)<!-- -->; heatWelding?: undefined \| null \| [IPCB\_PrimitivePadHeatWelding](../interfaces/IPCB_PrimitivePadHeatWelding.md)<!-- -->; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePad](./IPCB_PrimitivePad.md) \| undefined&gt;

Pad primitive object
