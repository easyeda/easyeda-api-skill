# SYS\_Tool class

系统 / 工具类

## Signature

```typescript
declare class SYS_Tool 
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
</tbody></table>

---

## 方法详情

### netlistcomparison

# SYS\_Tool.netlistComparison() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

网表对比

## Signature

```typescript
netlistComparison(netlist1: string | {
        projectUuid: string;
        documentUuid: string;
    } | File, netlist2: string | {
        projectUuid: string;
        documentUuid: string;
    } | File): Promise<Array<{
        type: 'Net' | 'Component';
        object: string;
        netlist1Name: Array<string>;
        netlist2Name: Array<string>;
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

netlist1


</td><td>

string \| { projectUuid: string; documentUuid: string; } \| File


</td><td>

网表 1，可以为：①当前工程内的原理图、PCB 的 UUID；②其它工程的工程 UUID 和原理图、PCB UUID；③原理图、PCB 文件数据


</td></tr>
<tr><td>

netlist2


</td><td>

string \| { projectUuid: string; documentUuid: string; } \| File


</td><td>

网表 2，可以为：①当前工程内的原理图、PCB 的 UUID；②其它工程的工程 UUID 和原理图、PCB UUID；③原理图、PCB 文件数据


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;{ type: 'Net' \| 'Component'; object: string; netlist1Name: Array&lt;string&gt;; netlist2Name: Array&lt;string&gt;; }&gt;&gt;

网表对比结果
