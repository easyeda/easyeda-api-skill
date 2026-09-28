# SYS\_Unit class

System / unit class

## Signature

```typescript
class SYS_Unit
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
function getFrontendDataUnit(): Promise<ESYS_Unit | undefined>;
```

## Returns

Promise&lt;[ESYS\_Unit](../enums/ESYS_Unit.md) \| undefined&gt;

Unit

## Remarks

This refers to the units that front-end users can switch, and it needs to be compatible with both the schematic and PCB canvases

## Example

```javascript
// 1. 读取当前前端单位（返回 Promise，需要 await；结果为 ESYS_Unit 值，如 'mm'、'mil'、'in'）
const unit = await eda.sys_Unit.getFrontendDataUnit();

// 2. 输出当前单位
console.log('前端当前单位：', unit);
```

### inchtomil

# SYS\_Unit.inchToMil() method

Unit conversion: inches to mils

## Signature

```typescript
function inchToMil(inch: number, numberOfDecimals?: number): number;
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

## Example

```javascript
// 1. 基本换算：1 英寸 = 1000 mil（同步返回数值，无需 await）
console.log('1 英寸 =', eda.sys_Unit.inchToMil(1), 'mil');

// 2. 常用节距换算：0.1 英寸（2.54mm 栅格）与 0.02 英寸（50mil 节距）
console.log('0.1 英寸 =', eda.sys_Unit.inchToMil(0.1), 'mil');
console.log('0.02 英寸 =', eda.sys_Unit.inchToMil(0.02), 'mil');

// 3. 指定保留 2 位小数（默认 4 位）
console.log('0.0254 英寸保留 2 位小数 =', eda.sys_Unit.inchToMil(0.0254, 2), 'mil');
```

### inchtomm

# SYS\_Unit.inchToMm() method

Unit conversion: inches to millimeters

## Signature

```typescript
function inchToMm(inch: number, numberOfDecimals?: number): number;
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

## Example

```javascript
// 1. 基本换算：1 英寸 = 25.4 mm（同步返回数值，无需 await）
console.log('1 英寸 =', eda.sys_Unit.inchToMm(1), 'mm');

// 2. 常用节距换算：0.1 英寸栅格即 2.54 mm
console.log('0.1 英寸 =', eda.sys_Unit.inchToMm(0.1), 'mm');

// 3. 指定保留 3 位小数（默认 4 位）
console.log('1.25 英寸保留 3 位小数 =', eda.sys_Unit.inchToMm(1.25, 3), 'mm');
```

### miltoinch

# SYS\_Unit.milToInch() method

Unit conversion: mils to inches

## Signature

```typescript
function milToInch(mil: number, numberOfDecimals?: number): number;
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

## Example

```javascript
// 1. 基本换算：1000 mil = 1 英寸（同步返回数值，无需 await）
console.log('1000 mil =', eda.sys_Unit.milToInch(1000), '英寸');

// 2. 常用线宽换算：6 mil 与 10 mil
console.log('6 mil =', eda.sys_Unit.milToInch(6), '英寸');
console.log('10 mil =', eda.sys_Unit.milToInch(10), '英寸');

// 3. 指定保留 6 位小数（默认 4 位，小尺寸需要更多位才不损失精度）
console.log('6 mil 保留 6 位小数 =', eda.sys_Unit.milToInch(6, 6), '英寸');
```

### miltomm

# SYS\_Unit.milToMm() method

Unit conversion: mils to millimeters

## Signature

```typescript
function milToMm(mil: number, numberOfDecimals?: number): number;
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

## Example

```javascript
// 1. 基本换算：100 mil = 2.54 mm（同步返回数值，无需 await）
console.log('100 mil =', eda.sys_Unit.milToMm(100), 'mm');

// 2. 常用工艺值换算：6 mil 线宽与 1181 mil（约 30 mm 板宽）
console.log('6 mil =', eda.sys_Unit.milToMm(6), 'mm');
console.log('1181 mil =', eda.sys_Unit.milToMm(1181), 'mm');

// 3. 指定保留 2 位小数（默认 4 位）
console.log('3937 mil 保留 2 位小数 =', eda.sys_Unit.milToMm(3937, 2), 'mm');
```

### mmtoinch

# SYS\_Unit.mmToInch() method

Unit conversion: millimeters to inches

## Signature

```typescript
function mmToInch(mm: number, numberOfDecimals?: number): number;
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

## Example

```javascript
// 1. 基本换算：25.4 mm = 1 英寸（同步返回数值，无需 await）
console.log('25.4 mm =', eda.sys_Unit.mmToInch(25.4), '英寸');

// 2. 常用板宽换算：100 mm 与 160 mm
console.log('100 mm =', eda.sys_Unit.mmToInch(100), '英寸');
console.log('160 mm =', eda.sys_Unit.mmToInch(160), '英寸');

// 3. 指定保留 6 位小数（默认 4 位，小尺寸需要更多位才不损失精度）
console.log('2.54 mm 保留 6 位小数 =', eda.sys_Unit.mmToInch(2.54, 6), '英寸');
```

### mmtomil

# SYS\_Unit.mmToMil() method

Unit conversion: millimeters to mils

## Signature

```typescript
function mmToMil(mm: number, numberOfDecimals?: number): number;
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

## Example

```javascript
// 1. 基本换算：1 mm ≈ 39.37 mil（同步返回数值，无需 await）
console.log('1 mm =', eda.sys_Unit.mmToMil(1), 'mil');

// 2. 常用尺寸换算：5 mm 安装孔与 100 mm 板宽
console.log('5 mm =', eda.sys_Unit.mmToMil(5), 'mil');
console.log('100 mm =', eda.sys_Unit.mmToMil(100), 'mil');

// 3. 指定保留 0 位小数取整（默认 4 位）
console.log('19.685 mm 取整 =', eda.sys_Unit.mmToMil(19.685, 0), 'mil');
```
