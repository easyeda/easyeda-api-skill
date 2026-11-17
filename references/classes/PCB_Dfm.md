# PCB\_Dfm class

PCB &amp; 封装 / 可制造性设计（DFM）类

## Signature

```typescript
class PCB_Dfm
```

## Remarks

DFM 仅在\*\*私有化构建\*\*可用，其它构建下无法执行 DFM 检查

可先调用 [PCB\_Dfm.getDfmAvailability()](./PCB_Dfm.md) 探测当前环境是否支持 DFM，再决定是否调用其余接口

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[checkDfm(options)](./PCB_Dfm.md)

</td><td>

</td><td>

**_(BETA)_** 执行 DFM 检查

</td></tr>
<tr><td>

[getDfmAvailability()](./PCB_Dfm.md)

</td><td>

</td><td>

**_(BETA)_** 判断当前环境是否可执行 DFM 检查

</td></tr>
<tr><td>

[getDfmRules()](./PCB_Dfm.md)

</td><td>

</td><td>

**_(BETA)_** 读取 DFM 规则集

</td></tr>
</tbody></table>

---

## 方法详情

### checkdfm

# PCB\_Dfm.checkDfm() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

执行 DFM 检查

## Signature

```typescript
function checkDfm(options?: IPCB_DfmCheckOptions): Promise<IPCB_DfmCheckResult>;
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

options

</td><td>

[IPCB\_DfmCheckOptions](../interfaces/IPCB_DfmCheckOptions.md)

</td><td>

_(Optional)_ DFM 检查参数

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_DfmCheckResult](../interfaces/IPCB_DfmCheckResult.md)<!-- -->&gt;

DFM 检查结果

## Remarks

仅私有化构建可用

结果可能不完整：未配置检查规则或存在检查失败项时，将以 `INCOMPLETE_RESULT` 错误抛出，不得视为检查通过 ADD since EDA v4.1.93

### getdfmavailability

# PCB\_Dfm.getDfmAvailability() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

判断当前环境是否可执行 DFM 检查

## Signature

```typescript
function getDfmAvailability(): Promise<IPCB_DfmAvailability>;
```

## Returns

Promise&lt;[IPCB\_DfmAvailability](../interfaces/IPCB_DfmAvailability.md)<!-- -->&gt;

DFM 可用性

## Remarks

所有构建均可调用，用于在调用其它 DFM 接口前探测可用性

当前环境不支持 DFM 时，返回结果的 `available` 为 `false`<!-- -->，并通过 `reason` 说明原因，不抛错 ADD since EDA v4.1.93

### getdfmrules

# PCB\_Dfm.getDfmRules() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

读取 DFM 规则集

## Signature

```typescript
function getDfmRules(): Promise<Array<IPCB_DfmRule>>;
```

## Returns

Promise&lt;Array&lt;[IPCB\_DfmRule](../interfaces/IPCB_DfmRule.md)<!-- -->&gt;&gt;

DFM 规则列表

## Remarks

仅私有化构建可用 ADD since EDA v4.1.93
