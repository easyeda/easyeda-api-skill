# SYS\_Unit class

系统 / 单位类

## Signature

```typescript
declare class SYS_Unit 
```

## Remarks

控制系统数据单位与单位转换基础函数，当前原理图数据单位跨度等效为 `10mil` 或 `0.01inch`<!-- -->，PCB 数据单位跨度等效为 `mil`

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

**_(BETA)_** 获取 EDA 前端数据单位跨度


</td></tr>
<tr><td>

[inchToMil(inch, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

单位转换：英寸到密尔


</td></tr>
<tr><td>

[inchToMm(inch, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

单位转换：英寸到毫米


</td></tr>
<tr><td>

[milToInch(mil, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

单位转换：密尔到英寸


</td></tr>
<tr><td>

[milToMm(mil, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

单位转换：密尔到毫米


</td></tr>
<tr><td>

[mmToInch(mm, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

单位转换：毫米到英寸


</td></tr>
<tr><td>

[mmToMil(mm, numberOfDecimals)](./SYS_Unit.md)


</td><td>


</td><td>

单位转换：毫米到密尔


</td></tr>
</tbody></table>

---

## 方法详情

### getfrontenddataunit

# SYS\_Unit.getFrontendDataUnit() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 EDA 前端数据单位跨度

## Signature

```typescript
getFrontendDataUnit(): Promise<ESYS_Unit | undefined>;
```


## Returns

Promise&lt;[ESYS\_Unit](../enums/ESYS_Unit.md) \| undefined&gt;

单位

## Remarks

此处指的是前端用户可以切换的单位，需要同时兼容原理图和 PCB 画布

### inchtomil

# SYS\_Unit.inchToMil() method

单位转换：英寸到密尔

## Signature

```typescript
inchToMil(inch: number, numberOfDecimals?: number): number;
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

输入英寸数


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## Returns

number

输出密尔数

### inchtomm

# SYS\_Unit.inchToMm() method

单位转换：英寸到毫米

## Signature

```typescript
inchToMm(inch: number, numberOfDecimals?: number): number;
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

输入英寸数


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## Returns

number

输出毫米数

### miltoinch

# SYS\_Unit.milToInch() method

单位转换：密尔到英寸

## Signature

```typescript
milToInch(mil: number, numberOfDecimals?: number): number;
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

输入密尔数


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## Returns

number

输出英寸数

### miltomm

# SYS\_Unit.milToMm() method

单位转换：密尔到毫米

## Signature

```typescript
milToMm(mil: number, numberOfDecimals?: number): number;
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

输入密尔数


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## Returns

number

输出毫米数

### mmtoinch

# SYS\_Unit.mmToInch() method

单位转换：毫米到英寸

## Signature

```typescript
mmToInch(mm: number, numberOfDecimals?: number): number;
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

输入毫米数


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## Returns

number

输出英寸数

### mmtomil

# SYS\_Unit.mmToMil() method

单位转换：毫米到密尔

## Signature

```typescript
mmToMil(mm: number, numberOfDecimals?: number): number;
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

输入毫米数


</td></tr>
<tr><td>

numberOfDecimals


</td><td>

number


</td><td>

_(Optional)_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## Returns

number

输出密尔数
