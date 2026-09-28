# SYS\_Tool class

System / tool class

## Signature

```typescript
class SYS_Tool
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
<tr><td>

[schematicComparison(schematicUuid1, schematicUuid2)](./SYS_Tool.md)

</td><td>

</td><td>

**_(BETA)_** Schematic comparison

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
function netlistComparison(
	netlist1: string | { projectUuid: string; documentUuid: string } | File,
	netlist2: string | { projectUuid: string; documentUuid: string } | File,
): Promise<
	Array<{
		type: 'Net' | 'Component';
		object: string;
		netlist1Name: Array<string>;
		netlist2Name: Array<string>;
	}>
>;
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

Promise&lt;Array&lt;{ type: 'Net' \| 'Component'; object: string; netlist1Name: Array&lt;string&gt;; netlist2Name: Array&lt;string&gt; }&gt;&gt;

Netlist comparison result

## Example

```javascript
// 1. 取工程内前两张 PCB 作为两份网表的来源
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();
const docA = pcbs[0];
const docB = pcbs[1];

// 2. 同一文档与自身对比：网表完全一致，返回空数组（无差异）
const selfDiff = await eda.sys_Tool.netlistComparison(docA.uuid, docA.uuid);
console.log('自身对比差异条数：', selfDiff.length);

// 3. 两张不同 PCB 对比：返回差异清单
const diff = await eda.sys_Tool.netlistComparison(docA.uuid, docB.uuid);
console.log('两文档对比差异条数：', diff.length);

// 4. 展示差异结构：type 为差异类型，object 为差异对象，
// net1 / net2 分别是该对象在两份网表中的名称列表（运行时字段名）
for (const item of diff.slice(0, 5)) {
	console.log('差异：', item.type, item.object, '网表 1：', item.net1.join('、') || '（无）', '网表 2：', item.net2.join('、') || '（无）');
}
```

### pcbcomparison

# SYS\_Tool.pcbComparison() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

PCB comparison

## Signature

```typescript
function pcbComparison(
	pcb1: string | { projectUuid: string; pcbUuid: string } | File,
	pcb2: string | { projectUuid: string; pcbUuid: string } | File,
	options?: {
		valUnit?: ESYS_Unit.MIL | ESYS_Unit.MILLIMETER | ESYS_Unit.INCH | ESYS_Unit.CENTIMETER;
		deviation?: number;
		comparisonSize?: number;
	},
): Promise<ISYS_ComparisonResponse>;
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

{ valUnit?: [ESYS\_Unit.MIL](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.CENTIMETER](../enums/ESYS_Unit.md)<!-- -->; deviation?: number; comparisonSize?: number; }

</td><td>

_(Optional)_ 对比参数

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISYS\_ComparisonResponse](../interfaces/ISYS_ComparisonResponse.md)<!-- -->&gt;

PCB comparison response: when `success = true`<!-- -->, `data` is the comparison result; when `success = false`<!-- -->, `error` contains the error code and message

## Remarks

ADD since EDA v3.2.205 / EDA v4.1.62

### schematiccomparison

# SYS\_Tool.schematicComparison() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Schematic comparison

## Signature

```typescript
function schematicComparison(
	schematicUuid1: string,
	schematicUuid2: string,
): Promise<ISYS_ComparisonResponse>;
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

schematicUuid1

</td><td>

string

</td><td>

原理图 1 UUID

</td></tr>
<tr><td>

schematicUuid2

</td><td>

string

</td><td>

原理图 2 UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISYS\_ComparisonResponse](../interfaces/ISYS_ComparisonResponse.md)<!-- -->&gt;

Schematic comparison result

## Remarks

ADD since EDA v3.2.205 / EDA v4.1.62
