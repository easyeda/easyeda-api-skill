# SCH\_Netlist class

原理图 &amp; 符号 / 网表类

## Signature

```typescript
declare class SCH_Netlist 
```

## Remarks

获取、更新网表

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

获取网表


</td></tr>
<tr><td>

[setNetlist(type, netlist)](./SCH_Netlist.md)


</td><td>


</td><td>

**_(BETA)_** 更新网表


</td></tr>
</tbody></table>

---

## 方法详情

### getnetlist

# SCH\_Netlist.getNetlist() method

> Warning: This API is now obsolete.
>
> 请使用 [SCH\_ManufactureData.getNetlistFile()](./SCH_ManufactureData.md) 替代

获取网表

## Signature

```typescript
getNetlist(type?: ESYS_NetlistType): Promise<string>;
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

_(Optional)_ 网表格式


</td></tr>
</tbody></table>



## Returns

Promise&lt;string&gt;

网表数据

### setnetlist

# SCH\_Netlist.setNetlist() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

更新网表

## Signature

```typescript
setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<void>;
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

网表格式


</td></tr>
<tr><td>

netlist


</td><td>

string


</td><td>

网表数据


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;
