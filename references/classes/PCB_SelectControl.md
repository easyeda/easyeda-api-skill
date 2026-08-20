# PCB\_SelectControl class

PCB &amp; footprint / selection control class

## Signature

```typescript
export class PCB_SelectControl 
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

[clearSelected()](./PCB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Clear the selection


</td></tr>
<tr><td>

[doCrossProbeSelect(components, pins, nets, highlight, select)](./PCB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Perform cross-probe selection


</td></tr>
<tr><td>

[doSelectPrimitives(primitiveIds)](./PCB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Select primitives using primitive IDs


</td></tr>
<tr><td>

[getAllSelectedPrimitives\_PrimitiveId()](./PCB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Query the primitive IDs of all selected primitives


</td></tr>
<tr><td>

[getAllSelectedPrimitives()](./PCB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Query the primitive objects of all selected primitives


</td></tr>
<tr><td>

[getCurrentMousePosition()](./PCB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Get Current the mouse position on the canvas


</td></tr>
<tr><td>

[getSelectedPrimitives()](./PCB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** Query all parameters of the selected primitives


</td></tr>
</tbody></table>

---

## 方法详情

### clearselected

# PCB\_SelectControl.clearSelected() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Clear the selection

## Signature

```typescript
public clearSelected(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### docrossprobeselect

# PCB\_SelectControl.doCrossProbeSelect() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Perform cross-probe selection

## Signature

```typescript
public doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): Promise<boolean>;
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

_(Optional)_ Whether the operation is successful


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

### doselectprimitives

# PCB\_SelectControl.doSelectPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

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

# PCB\_SelectControl.getAllSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Query the primitive objects of all selected primitives

## Signature

```typescript
public getAllSelectedPrimitives(): Promise<Array<IPCB_Primitive>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;&gt;

Primitive objects of all selected primitives

### getallselectedprimitives_primitiveid

# PCB\_SelectControl.getAllSelectedPrimitives\_PrimitiveId() method

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

# PCB\_SelectControl.getCurrentMousePosition() method

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

# PCB\_SelectControl.getSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> Please use [getAllSelectedPrimitives](./PCB_SelectControl.md) instead

Query all parameters of the selected primitives

## Signature

```typescript
public getSelectedPrimitives(): Promise<Array<object>>;
```


## Returns

Promise&lt;Array&lt;object&gt;&gt;

All parameters of the selected primitives
