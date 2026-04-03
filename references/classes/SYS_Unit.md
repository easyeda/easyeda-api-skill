# SYS\_Unit class

系统 / 单位类

## 签名

```typescript
declare class SYS_Unit 
```

## 备注

控制系统数据单位与单位转换基础函数，当前系统数据单位跨度等效为 `mil`

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[getSystemDataUnit()](./SYS_Unit.md)


</td><td>


</td><td>

获取 API 系统数据单位跨度


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

### getsystemdataunit

# SYS\_Unit.getSystemDataUnit() method

获取 API 系统数据单位跨度

## 签名

```typescript
getSystemDataUnit(): ESYS_Unit.MIL;
```


## 返回值

[ESYS\_Unit.MIL](../enums/ESYS_Unit.md)

单位

## 备注

当前 API 系统数据单位跨度等效为 `mil`<!-- -->，不会发生改变

### inchtomil

# SYS\_Unit.inchToMil() method

单位转换：英寸到密尔

## 签名

```typescript
inchToMil(inch: number, numberOfDecimals?: number): number;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## 返回值

number

输出密尔数

### inchtomm

# SYS\_Unit.inchToMm() method

单位转换：英寸到毫米

## 签名

```typescript
inchToMm(inch: number, numberOfDecimals?: number): number;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## 返回值

number

输出毫米数

### miltoinch

# SYS\_Unit.milToInch() method

单位转换：密尔到英寸

## 签名

```typescript
milToInch(mil: number, numberOfDecimals?: number): number;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## 返回值

number

输出英寸数

### miltomm

# SYS\_Unit.milToMm() method

单位转换：密尔到毫米

## 签名

```typescript
milToMm(mil: number, numberOfDecimals?: number): number;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## 返回值

number

输出毫米数

### mmtoinch

# SYS\_Unit.mmToInch() method

单位转换：毫米到英寸

## 签名

```typescript
mmToInch(mm: number, numberOfDecimals?: number): number;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## 返回值

number

输出英寸数

### mmtomil

# SYS\_Unit.mmToMil() method

单位转换：毫米到密尔

## 签名

```typescript
mmToMil(mm: number, numberOfDecimals?: number): number;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 保留小数位数，默认为 `4`


</td></tr>
</tbody></table>



## 返回值

number

输出密尔数
