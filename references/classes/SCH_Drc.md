# SCH\_Drc class

原理图 &amp; 符号 / 设计规则检查（DRC）类

## 签名

```typescript
declare class SCH_Drc 
```

## 备注

检查、设定 DRC 规则

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

检查 DRC

## 签名

```typescript
check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>;
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



## 返回值

Promise&lt;boolean&gt;

DRC 检查是否通过

### check_1

# SCH\_Drc.check() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

检查 DRC

## 签名

```typescript
check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<any>>;
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



## 返回值

Promise&lt;Array&lt;any&gt;&gt;

DRC 检查的详细结果
