# SYS\_Tool class

系统 / 工具类

## Signature

```typescript
export class SYS_Tool 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[netlistComparison(netlist1, netlist2)](./SYS_Tool.md)


</td><td>


</td><td>

**_(BETA)_** 网表对比


</td></tr>
<tr><td>

[pcbComparison(pcb1, pcb2, options)](./SYS_Tool.md)


</td><td>


</td><td>

**_(BETA)_** PCB 对比


</td></tr>
</tbody></table>

---

## 方法详情

### netlistcomparison

# SYS\_Tool.netlistComparison() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

网表对比

## Signature

```typescript
public netlistComparison(netlist1: string | { projectUuid: string; documentUuid: string } | File, netlist2: string | { projectUuid: string; documentUuid: string } | File): Promise<Array<{ type: 'Net' | 'Component'; object: string; netlist1Name: string[]; netlist2Name: string[] }>>;
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

netlist1


</td><td>

string \| { projectUuid: string; documentUuid: string } \| File


</td><td>

网表 1，可以为：①当前工程内的原理图、PCB 的 UUID；②其它工程的工程 UUID 和原理图、PCB UUID；③原理图、PCB 文件数据


</td></tr>
<tr><td>

netlist2


</td><td>

string \| { projectUuid: string; documentUuid: string } \| File


</td><td>

网表 2，可以为：①当前工程内的原理图、PCB 的 UUID；②其它工程的工程 UUID 和原理图、PCB UUID；③原理图、PCB 文件数据


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;{ type: 'Net' \| 'Component'; object: string; netlist1Name: string\[\]; netlist2Name: string\[\] }&gt;&gt;

网表对比结果

### pcbcomparison

# SYS\_Tool.pcbComparison() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

PCB 对比

## Signature

```typescript
public pcbComparison(pcb1: string | { projectUuid: string; pcbUuid: string } | File, pcb2: string | { projectUuid: string; pcbUuid: string } | File, options?: { valUnit?: undefined | ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL; deviation?: undefined | number; comparisonSize?: undefined | number }): Promise<ISYS_PcbComparisonResponse>;
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

pcb1


</td><td>

string \| { projectUuid: string; pcbUuid: string } \| File


</td><td>

PCB 1，可以为：①当前工程内的 PCB 的 UUID；②其它工程的工程 UUID 和 PCB UUID；③PCB 文件数据


</td></tr>
<tr><td>

pcb2


</td><td>

string \| { projectUuid: string; pcbUuid: string } \| File


</td><td>

PCB 2，可以为：①当前工程内的 PCB 的 UUID；②其它工程的工程 UUID 和 PCB UUID；③PCB 文件数据


</td></tr>
<tr><td>

options


</td><td>

{ valUnit?: undefined \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)<!-- -->; deviation?: undefined \| number; comparisonSize?: undefined \| number }


</td><td>

_(Optional)_ 对比参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISYS\_PcbComparisonResponse](../interfaces/ISYS_PcbComparisonResponse.md)<!-- -->&gt;

PCB 对比响应：`success = true` 时 `data` 为对比结果；`success = false` 时 `error` 包含错误码与信息

## Remarks

ADD since EDA v4.2
