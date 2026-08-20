# PCB\_PrimitivePoured class

PCB &amp; footprint / copper fill primitive class

## Signature

```typescript
export class PCB_PrimitivePoured implements IPCB_PrimitiveAPI 
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

[delete(primitiveIds)](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** Delete Copper fill


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** Get Copper fill


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** Get Copper fill


</td></tr>
<tr><td>

[getAll()](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** Get all Copper fill primitive


</td></tr>
<tr><td>

[getAllPrimitiveId()](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** Get all Copper fill primitive IDs


</td></tr>
</tbody></table>

---

## 方法详情

### delete

# PCB\_PrimitivePoured.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Copper fill

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitivePoured | Array<string> | Array<IPCB_PrimitivePoured>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;


</td><td>

Copper fill primitive ID or Copper fill primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# PCB\_PrimitivePoured.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Copper fill

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitivePoured | undefined>;
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

Copper fill primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| undefined&gt;

Copper fill primitive object, `undefined` indicates that the retrieval failed

### get_1

# PCB\_PrimitivePoured.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Copper fill

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePoured>>;
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

Copper fill primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

Copper fill primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitivePoured.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Copper fill primitive

## Signature

```typescript
public getAll(): Promise<Array<IPCB_PrimitivePoured>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

Array of Copper fill primitive objects

### getallprimitiveid

# PCB\_PrimitivePoured.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Copper fill primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Copper fill primitive IDs
