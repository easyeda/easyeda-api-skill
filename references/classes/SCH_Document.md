# SCH\_Document class

Schematic &amp; symbol / document operation class

## Signature

```typescript
export class SCH_Document 
```

## Remarks

Operations performed on the design document as a whole

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[autoLayout(props)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Auto layout


</td></tr>
<tr><td>

[autoRouting(props)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Auto routing


</td></tr>
<tr><td>

[getCurrentFilterConfiguration()](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get Current canvas filter configuration


</td></tr>
<tr><td>

[getPrimitiveAtPoint(x, y)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get The primitive at the coordinate point


</td></tr>
<tr><td>

[getPrimitivesInRegion(left, right, top, bottom)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get All primitives in the region


</td></tr>
<tr><td>

[importChanges()](./SCH_Document.md)


</td><td>


</td><td>

Import changes from the PCB


</td></tr>
<tr><td>

[navigateToCoordinates(x, y)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Locate to canvas coordinate


</td></tr>
<tr><td>

[navigateToRegion(left, right, top, bottom)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Locate to canvas region


</td></tr>
<tr><td>

[save()](./SCH_Document.md)


</td><td>


</td><td>

Save Document


</td></tr>
</tbody></table>

---

## 方法详情

### autolayout

# SCH\_Document.autoLayout() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Auto layout

## Signature

```typescript
public autoLayout(props?: { uuids?: undefined | string[]; netlist?: undefined | { component: Record<string, { pinInfoMap: Record<string, { name: string; number: string; net: string; props: { 'Pin Number': string } }> }> }; designatorDeviceTypeMap?: undefined | Record<string, 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice'> }): Promise<any>;
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

props


</td><td>

{ uuids?: undefined \| string\[\]; netlist?: undefined \| { component: Record&lt;string, { pinInfoMap: Record&lt;string, { name: string; number: string; net: string; props: { 'Pin Number': string } }&gt; }&gt; }; designatorDeviceTypeMap?: undefined \| Record&lt;string, 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'&gt; }


</td><td>

_(Optional)_ Auto layout parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

Auto layout result

## Remarks

If no parameters are passed in, auto layout will be performed for all devices

### autorouting

# SCH\_Document.autoRouting() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Auto routing

## Signature

```typescript
public autoRouting(props?: { uuids?: undefined | string[]; netlist?: undefined | { component: Record<string, { pinInfoMap: Record<string, { name: string; number: string; net: string; props: { 'Pin Number': string } }> }> }; designatorDeviceTypeMap?: undefined | Record<string, 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice'> }): Promise<any>;
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

props


</td><td>

{ uuids?: undefined \| string\[\]; netlist?: undefined \| { component: Record&lt;string, { pinInfoMap: Record&lt;string, { name: string; number: string; net: string; props: { 'Pin Number': string } }&gt; }&gt; }; designatorDeviceTypeMap?: undefined \| Record&lt;string, 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'&gt; }


</td><td>

_(Optional)_ Auto routing parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

Auto routing result

## Remarks

If no parameters are passed in, auto routing will be performed for all unrouted nets

### getcurrentfilterconfiguration

# SCH\_Document.getCurrentFilterConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Current canvas filter configuration

## Signature

```typescript
public getCurrentFilterConfiguration(): Promise<Record<string, boolean> | undefined>;
```


## Returns

Promise&lt;Record&lt;string, boolean&gt; \| undefined&gt;

Current canvas filter configuration; `undefined` indicates that the retrieval failed

## Remarks

ADD since EDA v4.2

### getprimitiveatpoint

# SCH\_Document.getPrimitiveAtPoint() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The primitive at the coordinate point

## Signature

```typescript
public getPrimitiveAtPoint(x: number, y: number): Promise<ISCH_Primitive | undefined>;
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

Coordinate point X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

Coordinate point Y


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md) \| undefined&gt;

The primitive at the coordinate point. If no primitive can be found at the coordinate point, `undefined` will be returned

## Remarks

This operation is similar to clicking with the mouse on the front end; it will get the primitive at the specified coordinate point ADD since EDA v4.2

### getprimitivesinregion

# SCH\_Document.getPrimitivesInRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get All primitives in the region

## Signature

```typescript
public getPrimitivesInRegion(left: number, right: number, top: number, bottom: number): Promise<Array<ISCH_Primitive>>;
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

left


</td><td>

number


</td><td>

First X coordinate of the rectangle


</td></tr>
<tr><td>

right


</td><td>

number


</td><td>

Second X coordinate of the rectangle


</td></tr>
<tr><td>

top


</td><td>

number


</td><td>

First Y coordinate of the rectangle


</td></tr>
<tr><td>

bottom


</td><td>

number


</td><td>

Second Y coordinate of the rectangle


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

All primitives in the region

## Remarks

This API only returns primitives that are completely contained in the region. If a primitive is partially outside the region, it will be ignored ADD since EDA v4.2

### importchanges

# SCH\_Document.importChanges() method

Import changes from the PCB

## Signature

```typescript
public importChanges(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the import operation is successful, import failed or a free schematic return `false`

### navigatetocoordinates

# SCH\_Document.navigateToCoordinates() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Locate to canvas coordinate

## Signature

```typescript
public navigateToCoordinates(x: number, y: number): Promise<boolean>;
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
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API positions on the front-end canvas to the specified coordinate;

The unit span here is 0.01inch ADD since EDA v4.2

### navigatetoregion

# SCH\_Document.navigateToRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Locate to canvas region

## Signature

```typescript
public navigateToRegion(left: number, right: number, top: number, bottom: number): Promise<boolean>;
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

left


</td><td>

number


</td><td>

First X coordinate of the rectangle


</td></tr>
<tr><td>

right


</td><td>

number


</td><td>

Second X coordinate of the rectangle


</td></tr>
<tr><td>

top


</td><td>

number


</td><td>

First Y coordinate of the rectangle


</td></tr>
<tr><td>

bottom


</td><td>

number


</td><td>

Second Y coordinate of the rectangle


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API positions on the front-end canvas to the specified region;

For example: the passed-in data is `{left: 0, right: 60, top: 100, bottom: -20}` =<!-- -->&gt; `navigateToRegion(0, 60, 100, -20)`<!-- -->, then the canvas will be positioned to a rectangular range centered at `[30, 40]` with a length of `60` in the x-axis direction and `120` in the y-axis direction;

This API does not perform zooming, but it will generate a rectangle frame indicating the positioning center and the region range;

The unit span here is 0.01inch ADD since EDA v4.2

### save

# SCH\_Document.save() method

Save Document

## Signature

```typescript
public save(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the save operation was successful. Errors such as save failure and upload failure all return `false`
