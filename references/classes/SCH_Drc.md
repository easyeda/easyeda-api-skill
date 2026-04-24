# SCH\_Drc class

原理图 &amp; 符号 / 设计规则检查（DRC）类

## Signature

```typescript
declare class SCH_Drc 
```

## Remarks

检查、设定 DRC 规则

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[check(strict, userInterface, includeVerboseError)](./SCH_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 检查 DRC


</td></tr>
<tr><td>

[check(strict, userInterface, includeVerboseError)](./SCH_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 检查 DRC


</td></tr>
</tbody></table>

---

## 方法详情

### check

# SCH\_Drc.check() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

检查 DRC

## Signature

```typescript
check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>;
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

strict


</td><td>

boolean


</td><td>

是否严格检查，当前原理图统一为严格检查模式


</td></tr>
<tr><td>

userInterface


</td><td>

boolean


</td><td>

是否显示 UI（呼出底部 DRC 窗口）


</td></tr>
<tr><td>

includeVerboseError


</td><td>

false


</td><td>

是否在返回值中包含详细错误信息，如若为 `true`<!-- -->，则返回值将始终为数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

DRC 检查是否通过

### check_1

# SCH\_Drc.check() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

检查 DRC

## Signature

```typescript
check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<any>>;
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

strict


</td><td>

boolean


</td><td>

是否严格检查，当前原理图统一为严格检查模式


</td></tr>
<tr><td>

userInterface


</td><td>

boolean


</td><td>

是否显示 UI（呼出底部 DRC 窗口）


</td></tr>
<tr><td>

includeVerboseError


</td><td>

true


</td><td>

是否在返回值中包含详细错误信息，如若为 `true`<!-- -->，则返回值将始终为数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;any&gt;&gt;

DRC 检查的详细结果
