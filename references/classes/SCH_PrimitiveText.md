# SCH\_PrimitiveText class

Schematic &amp; symbol / text primitive class

## Signature

```typescript
export class SCH_PrimitiveText implements ISCH_PrimitiveAPI 
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

[create(x, y, content, rotation, textColor, fontName, fontSize, bold, italic, underLine, alignMode)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Create Text


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Delete Text


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get Text


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get Text


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get all Text


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get all Text primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Modify Text


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveText.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Text

## Signature

```typescript
public create(x: number, y: number, content: string, rotation?: number, textColor?: string | null, fontName?: string | null, fontSize?: number | null, bold?: boolean, italic?: boolean, underLine?: boolean, alignMode?: ESCH_PrimitiveTextAlignMode): Promise<ISCH_PrimitiveText | undefined>;
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

content


</td><td>

string


</td><td>

Text content


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle. Options: `0` `90` `180` `270`


</td></tr>
<tr><td>

textColor


</td><td>

string \| null


</td><td>

_(Optional)_ Text color, `null` indicates the default


</td></tr>
<tr><td>

fontName


</td><td>

string \| null


</td><td>

_(Optional)_ Font name, `null` indicates the default


</td></tr>
<tr><td>

fontSize


</td><td>

number \| null


</td><td>

_(Optional)_ Font size. `null` indicates the default


</td></tr>
<tr><td>

bold


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is bold


</td></tr>
<tr><td>

italic


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is italic


</td></tr>
<tr><td>

underLine


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is underlined


</td></tr>
<tr><td>

alignMode


</td><td>

[ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md)


</td><td>

_(Optional)_ Alignment mode


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

Text primitive object

### delete

# SCH\_PrimitiveText.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Text

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;


</td><td>

Text primitive ID or Text primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

### get

# SCH\_PrimitiveText.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Text

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>;
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

Text primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

Text primitive object, `undefined` indicates that the retrieval failed

### get_1

# SCH\_PrimitiveText.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Text

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>;
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

Text primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;&gt;

Text primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveText.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Text

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveText>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;&gt;

Array of Text primitive objects

### getallprimitiveid

# SCH\_PrimitiveText.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Text primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Text primitive IDs

### modify

# SCH\_PrimitiveText.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Text

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveText, property: { x?: undefined | number; y?: undefined | number; content?: undefined | string; rotation?: undefined | number; textColor?: undefined | null | string; fontName?: undefined | null | string; fontSize?: undefined | null | number; bold?: undefined | false | true; italic?: undefined | false | true; underLine?: undefined | false | true; alignMode?: undefined | ESCH_PrimitiveTextAlignMode.LEFT_TOP | ESCH_PrimitiveTextAlignMode.LEFT_MIDDLE | ESCH_PrimitiveTextAlignMode.LEFT_BOTTOM | ESCH_PrimitiveTextAlignMode.CENTER_TOP | ESCH_PrimitiveTextAlignMode.CENTER | ESCH_PrimitiveTextAlignMode.CENTER_BOTTOM | ESCH_PrimitiveTextAlignMode.RIGHT_TOP | ESCH_PrimitiveTextAlignMode.RIGHT_MIDDLE | ESCH_PrimitiveTextAlignMode.RIGHT_BOTTOM }): Promise<ISCH_PrimitiveText | undefined>;
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

string \| [ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: undefined \| number; y?: undefined \| number; content?: undefined \| string; rotation?: undefined \| number; textColor?: undefined \| null \| string; fontName?: undefined \| null \| string; fontSize?: undefined \| null \| number; bold?: undefined \| false \| true; italic?: undefined \| false \| true; underLine?: undefined \| false \| true; alignMode?: undefined \| [ESCH\_PrimitiveTextAlignMode.LEFT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

Text primitive object
