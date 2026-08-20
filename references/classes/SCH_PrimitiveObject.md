# SCH\_PrimitiveObject class

Schematic &amp; symbol / binary embedded object primitive class

## Signature

```typescript
export class SCH_PrimitiveObject implements ISCH_PrimitiveAPI 
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

[create(content, startX, startY, width, height, rotation, mirror, fileName)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Create Binary embedded object


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Delete Binary embedded object


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get Binary embedded object


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get Binary embedded object


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get all Binary embedded object


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get all Binary embedded object primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Modify Binary embedded object


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveObject.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Binary embedded object

## Signature

```typescript
public create(content: File | string, startX: number, startY: number, width?: number, height?: number, rotation?: number, mirror?: boolean, fileName?: string): Promise<ISCH_PrimitiveObject | undefined>;
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

content


</td><td>

File \| string


</td><td>

Object content


</td></tr>
<tr><td>

startX


</td><td>

number


</td><td>

Start point coordinates X


</td></tr>
<tr><td>

startY


</td><td>

number


</td><td>

Start point coordinates Y


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

_(Optional)_ Width


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

_(Optional)_ Height


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

_(Optional)_ Whether it is mirrored


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object

### delete

# SCH\_PrimitiveObject.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Binary embedded object

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveObject | Array<string> | Array<ISCH_PrimitiveObject>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;


</td><td>

Binary embedded object primitive ID or Binary embedded object primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Binary embedded object

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveObject | undefined>;
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

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Binary embedded object

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveObject>>;
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

Promise&lt;Array&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;&gt;

Binary embedded object primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveObject.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Binary embedded object

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveObject>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;&gt;

Array of Binary embedded object primitive objects

### getallprimitiveid

# SCH\_PrimitiveObject.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Binary embedded object primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Binary embedded object primitive IDs

### modify

# SCH\_PrimitiveObject.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Binary embedded object

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveObject, property: { content?: undefined | string | File; startX?: undefined | number; startY?: undefined | number; width?: undefined | number; height?: undefined | number; rotation?: undefined | number; mirror?: undefined | false | true; fileName?: undefined | string }): Promise<ISCH_PrimitiveObject | undefined>;
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

string \| [ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

\{ content?: undefined \| string \| File; startX?: undefined \| number; startY?: undefined \| number; width?: undefined \| number; height?: undefined \| number; rotation?: undefined \| number; mirror?: undefined \| false \| true; fileName?: undefined \| string \}


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object, `undefined` indicates that the modification failed
