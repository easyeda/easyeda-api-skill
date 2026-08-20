# SCH\_SelectControl class

Schematic &amp; symbol / selection control class

## Signature

```typescript
export class SCH_SelectControl 
```

## Remarks

Get or operate the selected elements

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[clearSelected()](./SCH_SelectControl.md)


</td><td>


</td><td>

Clear the selection


</td></tr>
<tr><td>

[doCrossProbeSelect(components, pins, nets, highlight, select)](./SCH_SelectControl.md)


</td><td>


</td><td>

Perform cross-probe selection


</td></tr>
<tr><td>

[doSelectPrimitives(primitiveIds)](./SCH_SelectControl.md)


</td><td>


</td><td>

Select primitives using primitive IDs


</td></tr>
<tr><td>

[getAllSelectedPrimitives\_PrimitiveId()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Query the primitive IDs of all selected primitives


</td></tr>
<tr><td>

[getAllSelectedPrimitives()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Query the primitive objects of all selected primitives


</td></tr>
<tr><td>

[getCurrentMousePosition()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Get Current the mouse position on the canvas


</td></tr>
<tr><td>

[getSelectedPrimitives\_PrimitiveId()](./SCH_SelectControl.md)


</td><td>


</td><td>

Query the primitive IDs of the selected primitives


</td></tr>
<tr><td>

[getSelectedPrimitives()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Query all parameters of the selected primitives


</td></tr>
</tbody></table>

---

## 方法详情

### clearselected

# SCH\_SelectControl.clearSelected() method

Clear the selection

## Signature

```typescript
public clearSelected(): boolean;
```


## Returns

boolean

Whether the operation is successful

### docrossprobeselect

# SCH\_SelectControl.doCrossProbeSelect() method

Perform cross-probe selection

## Signature

```typescript
public doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): boolean;
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

components


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Device designator


</td></tr>
<tr><td>

pins


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Device designator \_ pin number, format is \['U1\_1', 'U1\_2'\]


</td></tr>
<tr><td>

nets


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Net name


</td></tr>
<tr><td>

highlight


</td><td>

boolean


</td><td>

_(Optional)_ Whether to highlight


</td></tr>
<tr><td>

select


</td><td>

boolean


</td><td>

_(Optional)_ Whether Select


</td></tr>
</tbody></table>



## Returns

boolean

Whether the operation is successful

### doselectprimitives

# SCH\_SelectControl.doSelectPrimitives() method

Select primitives using primitive IDs

## Signature

```typescript
public doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;
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

string \| Array&lt;string&gt;


</td><td>

Primitive ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### getallselectedprimitives

# SCH\_SelectControl.getAllSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Query the primitive objects of all selected primitives

## Signature

```typescript
public getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

Primitive objects of all selected primitives

### getallselectedprimitives_primitiveid

# SCH\_SelectControl.getAllSelectedPrimitives\_PrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Query the primitive IDs of all selected primitives

## Signature

```typescript
public getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Primitive IDs of all selected primitives

### getcurrentmouseposition

# SCH\_SelectControl.getCurrentMousePosition() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Current the mouse position on the canvas

## Signature

```typescript
public getCurrentMousePosition(): Promise<{ x: number; y: number } | undefined>;
```


## Returns

Promise&lt;{ x: number; y: number } \| undefined&gt;

The mouse position on the canvas. `undefined` means the current mouse is not on the canvas

### getselectedprimitives

# SCH\_SelectControl.getSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> Please use [getAllSelectedPrimitives](./SCH_SelectControl.md) instead

Query all parameters of the selected primitives

## Signature

```typescript
public getSelectedPrimitives(): Promise<Array<object>>;
```


## Returns

Promise&lt;Array&lt;object&gt;&gt;

All parameters of the selected primitives

### getselectedprimitives_primitiveid

# SCH\_SelectControl.getSelectedPrimitives\_PrimitiveId() method

> Warning: This API is now obsolete.
>
> Please use [getAllSelectedPrimitives\_PrimitiveId](./SCH_SelectControl.md) instead

Query the primitive IDs of the selected primitives

## Signature

```typescript
public getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Primitive IDs of the selected primitives
