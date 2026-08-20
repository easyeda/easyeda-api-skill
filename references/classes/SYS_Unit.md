# SYS\_Unit class

System / unit class

## Signature

```typescript
export class SYS_Unit 
```

## Remarks

Controls the system data units and unit conversion basic functions. Currently, the schematic data unit span is equivalent to `10mil` or `0.01inch`<!-- -->, and the PCB data unit span is equivalent to `mil`

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[getFrontendDataUnit()](./SYS_Unit.md)


</td><td>


</td><td>

**_(BETA)_** Get the EDA front-end data unit span


</td></tr>
<tr><td>

[inchToMil(inch, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

Unit conversion: inches to mils


</td></tr>
<tr><td>

[inchToMm(inch, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

Unit conversion: inches to millimeters


</td></tr>
<tr><td>

[milToInch(mil, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

Unit conversion: mils to inches


</td></tr>
<tr><td>

[milToMm(mil, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

Unit conversion: mils to millimeters


</td></tr>
<tr><td>

[mmToInch(mm, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

Unit conversion: millimeters to inches


</td></tr>
<tr><td>

[mmToMil(mm, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

Unit conversion: millimeters to mils


</td></tr>
</tbody></table>

---

## 方法详情

### getfrontenddataunit

# SYS\_Unit.getFrontendDataUnit() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the EDA front-end data unit span

## Signature

```typescript
public getFrontendDataUnit(): Promise<ESYS_Unit | undefined>;
```


## Returns

Promise&lt;[ESYS\_Unit](../enums/ESYS_Unit.md) \| undefined&gt;

Unit

## Remarks

This refers to the units that front-end users can switch, and it needs to be compatible with both the schematic and PCB canvases

### inchtomil

# SYS\_Unit.inchToMil() method

Unit conversion: inches to mils

## Signature

```typescript
public inchToMil(inch: number, numberOfDecimals?: number): number;
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

inch


</td><td>

number


</td><td>

Input value in inches


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ Number of decimal places to keep, default is `4`


</td></tr>
</tbody></table>



## Returns

number

Output value in mils

### inchtomm

# SYS\_Unit.inchToMm() method

Unit conversion: inches to millimeters

## Signature

```typescript
public inchToMm(inch: number, numberOfDecimals?: number): number;
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

inch


</td><td>

number


</td><td>

Input value in inches


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ Number of decimal places to keep, default is `4`


</td></tr>
</tbody></table>



## Returns

number

Output value in millimeters

### miltoinch

# SYS\_Unit.milToInch() method

Unit conversion: mils to inches

## Signature

```typescript
public milToInch(mil: number, numberOfDecimals?: number): number;
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

mil


</td><td>

number


</td><td>

Input value in mils


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ Number of decimal places to keep, default is `4`


</td></tr>
</tbody></table>



## Returns

number

Output value in inches

### miltomm

# SYS\_Unit.milToMm() method

Unit conversion: mils to millimeters

## Signature

```typescript
public milToMm(mil: number, numberOfDecimals?: number): number;
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

mil


</td><td>

number


</td><td>

Input value in mils


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ Number of decimal places to keep, default is `4`


</td></tr>
</tbody></table>



## Returns

number

Output value in millimeters

### mmtoinch

# SYS\_Unit.mmToInch() method

Unit conversion: millimeters to inches

## Signature

```typescript
public mmToInch(mm: number, numberOfDecimals?: number): number;
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

mm


</td><td>

number


</td><td>

Input value in millimeters


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ Number of decimal places to keep, default is `4`


</td></tr>
</tbody></table>



## Returns

number

Output value in inches

### mmtomil

# SYS\_Unit.mmToMil() method

Unit conversion: millimeters to mils

## Signature

```typescript
public mmToMil(mm: number, numberOfDecimals?: number): number;
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

mm


</td><td>

number


</td><td>

Input value in millimeters


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ Number of decimal places to keep, default is `4`


</td></tr>
</tbody></table>



## Returns

number

Output value in mils
