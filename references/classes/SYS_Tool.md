# SYS\_Tool class

System / tool class

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

**_(BETA)_** Netlist comparison


</td></tr>
<tr><td>

[pcbComparison(pcb1, pcb2, options)](./SYS_Tool.md)


</td><td>


</td><td>

**_(BETA)_** PCB comparison


</td></tr>
</tbody></table>

---

## 方法详情

### netlistcomparison

# SYS\_Tool.netlistComparison() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Netlist comparison

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

Netlist 1, which can be: 1. The UUID of a schematic or PCB in the current project; 2. The project UUID and schematic/PCB UUID of another project; 3. Schematic or PCB file data


</td></tr>
<tr><td>

netlist2


</td><td>

string \| { projectUuid: string; documentUuid: string } \| File


</td><td>

Netlist 2, which can be: 1. The UUID of a schematic or PCB in the current project; 2. The project UUID and schematic/PCB UUID of another project; 3. Schematic or PCB file data


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;{ type: 'Net' \| 'Component'; object: string; netlist1Name: string\[\]; netlist2Name: string\[\] }&gt;&gt;

Netlist comparison result

### pcbcomparison

# SYS\_Tool.pcbComparison() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

PCB comparison

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

PCB 1, which can be: 1. The UUID of a PCB in the current project; 2. The project UUID and PCB UUID of another project; 3. PCB file data


</td></tr>
<tr><td>

pcb2


</td><td>

string \| { projectUuid: string; pcbUuid: string } \| File


</td><td>

PCB 2, which can be: 1. The UUID of a PCB in the current project; 2. The project UUID and PCB UUID of another project; 3. PCB file data


</td></tr>
<tr><td>

options


</td><td>

{ valUnit?: undefined \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)<!-- -->; deviation?: undefined \| number; comparisonSize?: undefined \| number }


</td><td>

_(Optional)_ Comparison options


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISYS\_PcbComparisonResponse](../interfaces/ISYS_PcbComparisonResponse.md)<!-- -->&gt;

PCB comparison response: when `success = true`<!-- -->, `data` is the comparison result; when `success = false`<!-- -->, `error` contains the error code and message

## Remarks

ADD since EDA v4.2
