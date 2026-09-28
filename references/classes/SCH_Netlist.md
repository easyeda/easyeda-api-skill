# SCH\_Netlist class

Schematic &amp; symbol / netlist class

## Signature

```typescript
class SCH_Netlist
```

## Remarks

Get, update the netlist

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[getNetlist(type)](./SCH_Netlist.md)

</td><td>

</td><td>

Get the netlist

</td></tr>
<tr><td>

[setNetlist(type, netlist)](./SCH_Netlist.md)

</td><td>

</td><td>

**_(BETA)_** Update the netlist

</td></tr>
</tbody></table>

---

## 方法详情

### getnetlist

# SCH\_Netlist.getNetlist() method

> Warning: This API is now obsolete.
>
> Please use [SCH\_ManufactureData.getNetlistFile()](./SCH_ManufactureData.md) instead

Get the netlist

## Signature

```typescript
function getNetlist(type?: ESYS_NetlistType): Promise<string>;
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

type

</td><td>

[ESYS\_NetlistType](../enums/ESYS_NetlistType.md)

</td><td>

_(Optional)_ Netlist format

</td></tr>
</tbody></table>

## Returns

Promise&lt;string&gt;

Netlist data

### setnetlist

# SCH\_Netlist.setNetlist() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Update the netlist

## Signature

```typescript
function setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<void>;
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

type

</td><td>

[ESYS\_NetlistType](../enums/ESYS_NetlistType.md) \| undefined

</td><td>

Netlist format

</td></tr>
<tr><td>

netlist

</td><td>

string

</td><td>

Netlist data

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Example

```javascript
try {
	// 1. 取出当前网表字符串（'Protel2' 对应 ESYS_NetlistType.ALTIUM_DESIGNER）
	const netlist = await eda.sch_Netlist.getNetlist('Protel2');
	console.log('写回前网表长度：', netlist.length);

	// 2. 原样写回当前网表（返回 void，不抛错即表示写回成功）
	await eda.sch_Netlist.setNetlist('Protel2', netlist);

	// 3. 重新读取，确认网表内容未被破坏
	const after = await eda.sch_Netlist.getNetlist('Protel2');
	console.log('写回后网表长度：', after.length);
	console.log('写回前后一致：', after === netlist);
}
catch (e) {
	// 原理图数据不满足网表校验（如引脚编号重复）时会抛错
	console.log('当前原理图数据不满足网表校验，写回未完成');
}
```
