# PCB\_PrimitiveVia class

PCB &amp; footprint / via primitive class

## Signature

```typescript
export class PCB_PrimitiveVia implements IPCB_PrimitiveAPI 
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

[create(net, x, y, holeDiameter, diameter, viaType, designRuleBlindViaName, solderMaskExpansion, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

Create Via


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Delete Via


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get Via


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get Via


</td></tr>
<tr><td>

[getAll(net, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get all Via


</td></tr>
<tr><td>

[getAllPrimitiveId(net, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get all Via primitive ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Modify Via


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveVia.create() method

Create Via

## Signature

```typescript
public create(net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType?: EPCB_PrimitiveViaType, designRuleBlindViaName?: string | null, solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, primitiveLock?: boolean): Promise<IPCB_PrimitiveVia | undefined>;
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

string


</td><td>

Net name


</td></tr>
<tr><td>

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

holeDiameter


</td><td>

number


</td><td>

Hole diameter


</td></tr>
<tr><td>

diameter


</td><td>

number


</td><td>

Outer diameter


</td></tr>
<tr><td>

viaType


</td><td>

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)


</td><td>

_(Optional)_ Via type


</td></tr>
<tr><td>

designRuleBlindViaName


</td><td>

string \| null


</td><td>

_(Optional)_ Blind/buried via design rule item name, which defines the start and end layers of the via. `null` means it is not a blind/buried via


</td></tr>
<tr><td>

solderMaskExpansion


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

_(Optional)_ Solder mask/paste mask expansion. `null` means following the rules


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

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

Via primitive object

### delete

# PCB\_PrimitiveVia.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Via

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;


</td><td>

Via primitive ID or Via primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# PCB\_PrimitiveVia.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Via

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>;
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

Via primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

Via primitive object, `undefined` indicates that the retrieval failed

### get_1

# PCB\_PrimitiveVia.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Via

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>;
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

Via primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

Via primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveVia.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Via

## Signature

```typescript
public getAll(net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveVia>>;
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
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

Array of Via primitive objects

### getallprimitiveid

# PCB\_PrimitiveVia.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Via primitive ID

## Signature

```typescript
public getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>;
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
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Via primitive IDs

### modify

# PCB\_PrimitiveVia.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Via

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitiveVia, property: { net?: undefined | string; x?: undefined | number; y?: undefined | number; holeDiameter?: undefined | number; diameter?: undefined | number; viaType?: undefined | EPCB_PrimitiveViaType.VIA | EPCB_PrimitiveViaType.BLIND | EPCB_PrimitiveViaType.SUTURE; designRuleBlindViaName?: undefined | null | string; solderMaskExpansion?: undefined | null | IPCB_PrimitiveSolderMaskAndPasteMaskExpansion; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveVia | undefined>;
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

string \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: undefined \| string; x?: undefined \| number; y?: undefined \| number; holeDiameter?: undefined \| number; diameter?: undefined \| number; viaType?: undefined \| [EPCB\_PrimitiveViaType.VIA](../enums/EPCB_PrimitiveViaType.md) \| [EPCB\_PrimitiveViaType.BLIND](../enums/EPCB_PrimitiveViaType.md) \| [EPCB\_PrimitiveViaType.SUTURE](../enums/EPCB_PrimitiveViaType.md)<!-- -->; designRuleBlindViaName?: undefined \| null \| string; solderMaskExpansion?: undefined \| null \| [IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)<!-- -->; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

Via primitive object
