# PCB\_Drc class

PCB &amp; 封装 / 设计规则检查（DRC）类

## Signature

```typescript
declare class PCB_Drc 
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

[addNetToEqualLengthNetGroup(equalLengthNetGroupName, net)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 将网络添加到等长网络组


</td></tr>
<tr><td>

[addNetToNetClass(netClassName, net)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 将网络添加到网络类


</td></tr>
<tr><td>

[addPadPairToPadPairGroup(padPairGroupName, padPair)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 将焊盘对添加到焊盘对组


</td></tr>
<tr><td>

[check(strict, userInterface, includeVerboseError)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 检查 DRC


</td></tr>
<tr><td>

[check(strict, userInterface, includeVerboseError)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 检查 DRC


</td></tr>
<tr><td>

[createDifferentialPair(differentialPairName, positiveNet, negativeNet)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 创建差分对


</td></tr>
<tr><td>

[createEqualLengthNetGroup(equalLengthNetGroupName, nets, color)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 创建等长网络组


</td></tr>
<tr><td>

[createNetClass(netClassName, nets, color)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 创建网络类


</td></tr>
<tr><td>

[createPadPairGroup(padPairGroupName, padPairs)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 创建焊盘对组


</td></tr>
<tr><td>

[deleteDifferentialPair(differentialPairName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 删除差分对


</td></tr>
<tr><td>

[deleteEqualLengthNetGroup(equalLengthNetGroupName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 删除等长网络组


</td></tr>
<tr><td>

[deleteNetClass(netClassName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 删除网络类


</td></tr>
<tr><td>

[deletePadPairGroup(padPairGroupName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 删除焊盘对组


</td></tr>
<tr><td>

[deleteRuleConfiguration(configurationName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 删除设计规则配置


</td></tr>
<tr><td>

[getAllDifferentialPairs()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有差分对的详细属性


</td></tr>
<tr><td>

[getAllEqualLengthNetGroups()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有等长网络组的详细属性


</td></tr>
<tr><td>

[getAllNetClasses()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有网络类的详细属性


</td></tr>
<tr><td>

[getAllPadPairGroups()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有焊盘对组的详细属性


</td></tr>
<tr><td>

[getAllRuleConfigurations(includeSystem)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有设计规则配置


</td></tr>
<tr><td>

[getCurrentRuleConfiguration()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前设计规则配置


</td></tr>
<tr><td>

[getCurrentRuleConfigurationName()](./PCB_Drc.md)


</td><td>


</td><td>

获取当前设计规则配置名称


</td></tr>
<tr><td>

[getDefaultRuleConfigurationName()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取新建 PCB 默认设计规则配置的名称


</td></tr>
<tr><td>

[getNetByNetRules()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取网络-网络规则


</td></tr>
<tr><td>

[getNetRules()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取网络规则


</td></tr>
<tr><td>

[getPadPairGroupMinWireLength(padPairGroupName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取焊盘对组最短导线长度


</td></tr>
<tr><td>

[getRegionRules()](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 获取区域规则


</td></tr>
<tr><td>

[getRuleConfiguration(configurationName)](./PCB_Drc.md)


</td><td>


</td><td>

获取指定设计规则配置


</td></tr>
<tr><td>

[modifyDifferentialPairName(originalDifferentialPairName, differentialPairName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 修改差分对的名称


</td></tr>
<tr><td>

[modifyDifferentialPairNegativeNet(differentialPairName, negativeNet)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 修改差分对负网络


</td></tr>
<tr><td>

[modifyDifferentialPairPositiveNet(differentialPairName, positiveNet)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 修改差分对正网络


</td></tr>
<tr><td>

[modifyEqualLengthNetGroupName(originalEqualLengthNetGroupName, equalLengthNetGroupName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 修改等长网络组的名称


</td></tr>
<tr><td>

[modifyNetClassName(originalNetClassName, netClassName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 修改网络类的名称


</td></tr>
<tr><td>

[modifyPadPairGroupName(originalPadPairGroupName, padPairGroupName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 修改焊盘对组的名称


</td></tr>
<tr><td>

[overwriteCurrentRuleConfiguration(ruleConfiguration)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 覆写目前规则配置


</td></tr>
<tr><td>

[overwriteNetByNetRules(netByNetRules)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 覆写网络-网络规则


</td></tr>
<tr><td>

[overwriteNetRules(netRules)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 覆写网络规则


</td></tr>
<tr><td>

[overwriteRegionRules(regionRules)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 覆写区域规则


</td></tr>
<tr><td>

[removeNetFromEqualLengthNetGroup(equalLengthNetGroupName, net)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 从等长网络组中移除网络


</td></tr>
<tr><td>

[removeNetFromNetClass(netClassName, net)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 从网络类中移除网络


</td></tr>
<tr><td>

[removePadPairFromPadPairGroup(padPairGroupName, padPair)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 从焊盘对组中移除焊盘对


</td></tr>
<tr><td>

[renameRuleConfiguration(originalConfigurationName, configurationName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 重命名设计规则配置


</td></tr>
<tr><td>

[saveRuleConfiguration(ruleConfiguration, configurationName, allowOverwrite)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 保存设计规则配置


</td></tr>
<tr><td>

[setAsDefaultRuleConfiguration(configurationName)](./PCB_Drc.md)


</td><td>


</td><td>

**_(BETA)_** 设置为新建 PCB 默认设计规则配置


</td></tr>
</tbody></table>

---

## 方法详情

### addnettoequallengthnetgroup

# PCB\_Drc.addNetToEqualLengthNetGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将网络添加到等长网络组

## Signature

```typescript
addNetToEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>;
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

equalLengthNetGroupName


</td><td>

string


</td><td>

等长网络组名称


</td></tr>
<tr><td>

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### addnettonetclass

# PCB\_Drc.addNetToNetClass() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将网络添加到网络类

## Signature

```typescript
addNetToNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;
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

netClassName


</td><td>

string


</td><td>

网络类名称


</td></tr>
<tr><td>

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### addpadpairtopadpairgroup

# PCB\_Drc.addPadPairToPadPairGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将焊盘对添加到焊盘对组

## Signature

```typescript
addPadPairToPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>;
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

padPairGroupName


</td><td>

string


</td><td>

焊盘对组名称


</td></tr>
<tr><td>

padPair


</td><td>

\[string, string\] \| Array&lt;\[string, string\]&gt;


</td><td>

焊盘对


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Example

有三种不同的用法，确保画布上已有对应的焊盘。 分别是 一，游离焊盘-游离焊盘；二，器件焊盘 - 器件焊盘；三，器件焊盘 - 游离焊盘 await eda.pcb\_Drc.addPadPairToPadPairGroup('test',\['e0','e1'\]) // 游离焊盘-游离焊盘 await eda.pcb\_Drc.addPadPairToPadPairGroup('test',\['R1:1','R1:2'\]) // 器件焊盘 - 器件焊盘 await eda.pcb\_Drc.addPadPairToPadPairGroup('test',\['R1:1','e1'\]) // 器件焊盘 - 游离焊盘

### check

# PCB\_Drc.check() method

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

是否严格检查，当前 PCB 统一为严格检查模式


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

# PCB\_Drc.check() method

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

是否严格检查，当前 PCB 统一为严格检查模式


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

### createdifferentialpair

# PCB\_Drc.createDifferentialPair() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建差分对

## Signature

```typescript
createDifferentialPair(differentialPairName: string, positiveNet: string, negativeNet: string): Promise<boolean>;
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

differentialPairName


</td><td>

string


</td><td>

差分对名称


</td></tr>
<tr><td>

positiveNet


</td><td>

string


</td><td>

正网络名称


</td></tr>
<tr><td>

negativeNet


</td><td>

string


</td><td>

负网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### createequallengthnetgroup

# PCB\_Drc.createEqualLengthNetGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建等长网络组

## Signature

```typescript
createEqualLengthNetGroup(equalLengthNetGroupName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;
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

equalLengthNetGroupName


</td><td>

string


</td><td>

等长网络组名称


</td></tr>
<tr><td>

nets


</td><td>

Array&lt;string&gt;


</td><td>

网络名称数组


</td></tr>
<tr><td>

color


</td><td>

[IPCB\_EqualLengthNetGroupItem](../interfaces/IPCB_EqualLengthNetGroupItem.md)<!-- -->\['color'\]


</td><td>

等长网络组颜色


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### createnetclass

# PCB\_Drc.createNetClass() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建网络类

## Signature

```typescript
createNetClass(netClassName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;
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

netClassName


</td><td>

string


</td><td>

网络类名称


</td></tr>
<tr><td>

nets


</td><td>

Array&lt;string&gt;


</td><td>

网络名称数组


</td></tr>
<tr><td>

color


</td><td>

[IPCB\_EqualLengthNetGroupItem](../interfaces/IPCB_EqualLengthNetGroupItem.md)<!-- -->\['color'\]


</td><td>

网络类颜色


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### createpadpairgroup

# PCB\_Drc.createPadPairGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建焊盘对组

## Signature

```typescript
createPadPairGroup(padPairGroupName: string, padPairs: Array<[string, string]>): Promise<boolean>;
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

padPairGroupName


</td><td>

string


</td><td>

焊盘对组名称


</td></tr>
<tr><td>

padPairs


</td><td>

Array&lt;\[string, string\]&gt;


</td><td>

焊盘对数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Example

有三种不同的用法，确保画布上已有对应的焊盘。 分别是 一，游离焊盘-游离焊盘；二，器件焊盘 - 器件焊盘；三，器件焊盘 - 游离焊盘 await eda.pcb\_Drc.createPadPairGroup('test',\[\['e0','e1'\]\]) // 游离焊盘-游离焊盘 await eda.pcb\_Drc.createPadPairGroup('test',\[\['R1:1','R1:2'\],\['R2:1','R2:2'\]\]) // 器件焊盘 - 器件焊盘 await eda.pcb\_Drc.createPadPairGroup('test',\[\['R1:1','e0'\],\['R1:2','e1'\]\]) // 器件焊盘 - 游离焊盘

### deletedifferentialpair

# PCB\_Drc.deleteDifferentialPair() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除差分对

## Signature

```typescript
deleteDifferentialPair(differentialPairName: string): Promise<boolean>;
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

differentialPairName


</td><td>

string


</td><td>

差分对名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### deleteequallengthnetgroup

# PCB\_Drc.deleteEqualLengthNetGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除等长网络组

## Signature

```typescript
deleteEqualLengthNetGroup(equalLengthNetGroupName: string): Promise<boolean>;
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

equalLengthNetGroupName


</td><td>

string


</td><td>

等长网络组名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### deletenetclass

# PCB\_Drc.deleteNetClass() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除网络类

## Signature

```typescript
deleteNetClass(netClassName: string): Promise<boolean>;
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

netClassName


</td><td>

string


</td><td>

网络类名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### deletepadpairgroup

# PCB\_Drc.deletePadPairGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除焊盘对组

## Signature

```typescript
deletePadPairGroup(padPairGroupName: string): Promise<boolean>;
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

padPairGroupName


</td><td>

string


</td><td>

焊盘对组名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### deleteruleconfiguration

# PCB\_Drc.deleteRuleConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除设计规则配置

## Signature

```typescript
deleteRuleConfiguration(configurationName: string): Promise<boolean>;
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

configurationName


</td><td>

string


</td><td>

配置名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除是否成功

## Remarks

系统配置不允许删除

### getalldifferentialpairs

# PCB\_Drc.getAllDifferentialPairs() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有差分对的详细属性

## Signature

```typescript
getAllDifferentialPairs(): Promise<Array<IPCB_DifferentialPairItem> | {
        [key: string]: any;
    }>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_DifferentialPairItem](../interfaces/IPCB_DifferentialPairItem.md)<!-- -->&gt; \| { \[key: string\]: any; }&gt;

所有差分对的详细属性

## Remarks

BREAKING CHANGE since EDA v3.4

- 返回值类型更改为对象

### getallequallengthnetgroups

# PCB\_Drc.getAllEqualLengthNetGroups() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有等长网络组的详细属性

## Signature

```typescript
getAllEqualLengthNetGroups(): Promise<Array<IPCB_EqualLengthNetGroupItem>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_EqualLengthNetGroupItem](../interfaces/IPCB_EqualLengthNetGroupItem.md)<!-- -->&gt;&gt;

所有等长网络组的详细属性

### getallnetclasses

# PCB\_Drc.getAllNetClasses() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有网络类的详细属性

## Signature

```typescript
getAllNetClasses(): Promise<Array<IPCB_NetClassItem>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_NetClassItem](../interfaces/IPCB_NetClassItem.md)<!-- -->&gt;&gt;

所有网络类的详细属性

### getallpadpairgroups

# PCB\_Drc.getAllPadPairGroups() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有焊盘对组的详细属性

## Signature

```typescript
getAllPadPairGroups(): Promise<Array<IPCB_PadPairGroupItem>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_PadPairGroupItem](../interfaces/IPCB_PadPairGroupItem.md)<!-- -->&gt;&gt;

所有焊盘对组的详细属性

### getallruleconfigurations

# PCB\_Drc.getAllRuleConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有设计规则配置

## Signature

```typescript
getAllRuleConfigurations(includeSystem?: boolean): Promise<Array<{
        [key: string]: any;
    }>>;
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

includeSystem


</td><td>

boolean


</td><td>

_(Optional)_ 是否获取系统设计规则配置


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;{ \[key: string\]: any; }&gt;&gt;

所有设计规则配置

### getcurrentruleconfiguration

# PCB\_Drc.getCurrentRuleConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前设计规则配置

## Signature

```typescript
getCurrentRuleConfiguration(): Promise<{
        [key: string]: any;
    } | undefined>;
```


## Returns

Promise&lt;{ \[key: string\]: any; } \| undefined&gt;

当前设计规则配置，`undefined` 为获取失败

### getcurrentruleconfigurationname

# PCB\_Drc.getCurrentRuleConfigurationName() method

获取当前设计规则配置名称

## Signature

```typescript
getCurrentRuleConfigurationName(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

当前设计规则配置名称，`undefined` 为获取失败

### getdefaultruleconfigurationname

# PCB\_Drc.getDefaultRuleConfigurationName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取新建 PCB 默认设计规则配置的名称

## Signature

```typescript
getDefaultRuleConfigurationName(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

默认设计规则配置的名称，`undefined` 为获取失败

### getnetbynetrules

# PCB\_Drc.getNetByNetRules() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取网络-网络规则

## Signature

```typescript
getNetByNetRules(): Promise<{
        [key: string]: any;
    }>;
```


## Returns

Promise&lt;{ \[key: string\]: any; }&gt;

当前 PCB 的所有网络-网络规则

### getnetrules

# PCB\_Drc.getNetRules() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取网络规则

## Signature

```typescript
getNetRules(): Promise<Array<{
        [key: string]: any;
    }>>;
```


## Returns

Promise&lt;Array&lt;{ \[key: string\]: any; }&gt;&gt;

当前 PCB 的所有网络规则

### getpadpairgroupminwirelength

# PCB\_Drc.getPadPairGroupMinWireLength() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取焊盘对组最短导线长度

## Signature

```typescript
getPadPairGroupMinWireLength(padPairGroupName: string): Promise<Array<IPCB_PadPairMinWireLengthItem>>;
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

padPairGroupName


</td><td>

string


</td><td>

焊盘对组名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PadPairMinWireLengthItem](../interfaces/IPCB_PadPairMinWireLengthItem.md)<!-- -->&gt;&gt;

所有焊盘对的最短导线长度

### getregionrules

# PCB\_Drc.getRegionRules() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取区域规则

## Signature

```typescript
getRegionRules(): Promise<Array<{
        [key: string]: any;
    }>>;
```


## Returns

Promise&lt;Array&lt;{ \[key: string\]: any; }&gt;&gt;

- 当前 PCB 的所有区域规则

### getruleconfiguration

# PCB\_Drc.getRuleConfiguration() method

获取指定设计规则配置

## Signature

```typescript
getRuleConfiguration(configurationName: string): Promise<{
        [key: string]: any;
    } | undefined>;
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

configurationName


</td><td>

string


</td><td>

配置名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ \[key: string\]: any; } \| undefined&gt;

设计规则配置，`undefined` 为不存在该设计规则

### modifydifferentialpairname

# PCB\_Drc.modifyDifferentialPairName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改差分对的名称

## Signature

```typescript
modifyDifferentialPairName(originalDifferentialPairName: string, differentialPairName: string): Promise<boolean>;
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

originalDifferentialPairName


</td><td>

string


</td><td>

原差分对名称


</td></tr>
<tr><td>

differentialPairName


</td><td>

string


</td><td>

新差分对名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### modifydifferentialpairnegativenet

# PCB\_Drc.modifyDifferentialPairNegativeNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改差分对负网络

## Signature

```typescript
modifyDifferentialPairNegativeNet(differentialPairName: string, negativeNet: string): Promise<boolean>;
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

differentialPairName


</td><td>

string


</td><td>

差分对名称


</td></tr>
<tr><td>

negativeNet


</td><td>

string


</td><td>

负网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### modifydifferentialpairpositivenet

# PCB\_Drc.modifyDifferentialPairPositiveNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改差分对正网络

## Signature

```typescript
modifyDifferentialPairPositiveNet(differentialPairName: string, positiveNet: string): Promise<boolean>;
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

differentialPairName


</td><td>

string


</td><td>

差分对名称


</td></tr>
<tr><td>

positiveNet


</td><td>

string


</td><td>

正网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### modifyequallengthnetgroupname

# PCB\_Drc.modifyEqualLengthNetGroupName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改等长网络组的名称

## Signature

```typescript
modifyEqualLengthNetGroupName(originalEqualLengthNetGroupName: string, equalLengthNetGroupName: string): Promise<boolean>;
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

originalEqualLengthNetGroupName


</td><td>

string


</td><td>

原等长网络组名称


</td></tr>
<tr><td>

equalLengthNetGroupName


</td><td>

string


</td><td>

新等长网络组名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### modifynetclassname

# PCB\_Drc.modifyNetClassName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改网络类的名称

## Signature

```typescript
modifyNetClassName(originalNetClassName: string, netClassName: string): Promise<boolean>;
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

originalNetClassName


</td><td>

string


</td><td>

原网络类名称


</td></tr>
<tr><td>

netClassName


</td><td>

string


</td><td>

新网络类名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### modifypadpairgroupname

# PCB\_Drc.modifyPadPairGroupName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改焊盘对组的名称

## Signature

```typescript
modifyPadPairGroupName(originalPadPairGroupName: string, padPairGroupName: string): Promise<boolean>;
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

originalPadPairGroupName


</td><td>

string


</td><td>

原焊盘对组名称


</td></tr>
<tr><td>

padPairGroupName


</td><td>

string


</td><td>

新焊盘对组名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### overwritecurrentruleconfiguration

# PCB\_Drc.overwriteCurrentRuleConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

覆写目前规则配置

## Signature

```typescript
overwriteCurrentRuleConfiguration(ruleConfiguration: {
        [key: string]: any;
    }): Promise<boolean>;
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

ruleConfiguration


</td><td>

\{ \[key: string\]: any; \}


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

覆写是否成功

## Remarks

将会覆写当前 PCB 的目前规则管理，请注意数据丢失风险

### overwritenetbynetrules

# PCB\_Drc.overwriteNetByNetRules() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

覆写网络-网络规则

## Signature

```typescript
overwriteNetByNetRules(netByNetRules: {
        [key: string]: any;
    }): Promise<boolean>;
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

netByNetRules


</td><td>

\{ \[key: string\]: any; \}


</td><td>

网络-网络规则


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

覆写是否成功

## Remarks

将会覆写当前 PCB 的所有网络-网络规则，请注意数据丢失风险

### overwritenetrules

# PCB\_Drc.overwriteNetRules() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

覆写网络规则

## Signature

```typescript
overwriteNetRules(netRules: Array<{
        [key: string]: any;
    }>): Promise<boolean>;
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

netRules


</td><td>

Array&lt;{ \[key: string\]: any; }&gt;


</td><td>

网络规则


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

覆写是否成功

## Remarks

将会覆写当前 PCB 的所有网络规则，请注意数据丢失风险

### overwriteregionrules

# PCB\_Drc.overwriteRegionRules() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

覆写区域规则

## Signature

```typescript
overwriteRegionRules(regionRules: Array<{
        [key: string]: any;
    }>): Promise<boolean>;
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

regionRules


</td><td>

Array&lt;{ \[key: string\]: any; }&gt;


</td><td>

区域规则


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

覆写是否成功

## Remarks

将会覆写当前 PCB 的所有区域规则，请注意数据丢失风险

### removenetfromequallengthnetgroup

# PCB\_Drc.removeNetFromEqualLengthNetGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

从等长网络组中移除网络

## Signature

```typescript
removeNetFromEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>;
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

equalLengthNetGroupName


</td><td>

string


</td><td>

等长网络组名称


</td></tr>
<tr><td>

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### removenetfromnetclass

# PCB\_Drc.removeNetFromNetClass() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

从网络类中移除网络

## Signature

```typescript
removeNetFromNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;
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

netClassName


</td><td>

string


</td><td>

网络类名称


</td></tr>
<tr><td>

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### removepadpairfrompadpairgroup

# PCB\_Drc.removePadPairFromPadPairGroup() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

从焊盘对组中移除焊盘对

## Signature

```typescript
removePadPairFromPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>;
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

padPairGroupName


</td><td>

string


</td><td>

焊盘对组名称


</td></tr>
<tr><td>

padPair


</td><td>

\[string, string\] \| Array&lt;\[string, string\]&gt;


</td><td>

焊盘对


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Example

有三种不同的用法，确保画布上已有对应的焊盘。 分别是 一，游离焊盘-游离焊盘；二，器件焊盘 - 器件焊盘；三，器件焊盘 - 游离焊盘 await eda.pcb\_Drc.removePadPairFromPadPairGroup('test',\['e0','e1'\]) // 游离焊盘-游离焊盘 await eda.pcb\_Drc.removePadPairFromPadPairGroup('test',\['R1:1','R1:2'\]) // 器件焊盘 - 器件焊盘 await eda.pcb\_Drc.removePadPairFromPadPairGroup('test',\['R1:2','e1'\]) // 器件焊盘 - 游离焊盘

### renameruleconfiguration

# PCB\_Drc.renameRuleConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

重命名设计规则配置

## Signature

```typescript
renameRuleConfiguration(originalConfigurationName: string, configurationName: string): Promise<boolean>;
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

originalConfigurationName


</td><td>

string


</td><td>

原设计规则配置名称


</td></tr>
<tr><td>

configurationName


</td><td>

string


</td><td>

新设计规则配置名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

重命名是否成功

## Remarks

只有自定义配置可以重命名，系统配置不允许重命名

### saveruleconfiguration

# PCB\_Drc.saveRuleConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

保存设计规则配置

## Signature

```typescript
saveRuleConfiguration(ruleConfiguration: {
        [key: string]: any;
    }, configurationName: string, allowOverwrite?: boolean): Promise<boolean>;
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

ruleConfiguration


</td><td>

\{ \[key: string\]: any; \}


</td><td>

设计规则配置


</td></tr>
<tr><td>

configurationName


</td><td>

string


</td><td>

配置名称


</td></tr>
<tr><td>

allowOverwrite


</td><td>

boolean


</td><td>

_(Optional)_ 是否允许覆写同名设计规则配置，`false` 则将在遇到同名设计规则配置时返回 `false`<!-- -->，请注意可能的数据丢失风险


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

保存是否成功

## Remarks

只有自定义配置可以覆盖保存，系统配置不允许修改和覆盖

### setasdefaultruleconfiguration

# PCB\_Drc.setAsDefaultRuleConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置为新建 PCB 默认设计规则配置

## Signature

```typescript
setAsDefaultRuleConfiguration(configurationName: string): Promise<boolean>;
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

configurationName


</td><td>

string


</td><td>

配置名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

设置是否成功

## Remarks

返回值为结果导向，重复设置相同的设计规则为默认设计规则也将返回 `true`
