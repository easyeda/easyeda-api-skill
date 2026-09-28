# SCH\_Net class

Schematic &amp; symbol / net class

## Signature

```typescript
class SCH_Net
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

[getAllNets()](./SCH_Net.md)

</td><td>

</td><td>

**_(BETA)_** Get all Detailed information of the net

</td></tr>
<tr><td>

[getAllNetsName()](./SCH_Net.md)

</td><td>

</td><td>

**_(BETA)_** Get the net names of all nets

</td></tr>
<tr><td>

[getCurrentProjectAllNets()](./SCH_Net.md)

</td><td>

</td><td>

**_(BETA)_** Get the detailed information of all nets under the current project

</td></tr>
<tr><td>

[getNet(net)](./SCH_Net.md)

</td><td>

</td><td>

**_(BETA)_** Get Specify detailed information of the net

</td></tr>
</tbody></table>

---

## 方法详情

### getallnets

# SCH\_Net.getAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Detailed information of the net

## Signature

```typescript
function getAllNets(): Promise<Array<ISCH_NetInfo>>;
```

## Returns

Promise&lt;Array&lt;[ISCH\_NetInfo](../interfaces/ISCH_NetInfo.md)<!-- -->&gt;&gt;

Detailed information of all nets

## Remarks

ADD since EDA v4.2

### getallnetsname

# SCH\_Net.getAllNetsName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the net names of all nets

## Signature

```typescript
function getAllNetsName(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Net name array

## Remarks

ADD since EDA v4.2

### getcurrentprojectallnets

# SCH\_Net.getCurrentProjectAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the detailed information of all nets under the current project

## Signature

```typescript
function getCurrentProjectAllNets(): Promise<Array<ISCH_ProjectNetInfo>>;
```

## Returns

Promise&lt;Array&lt;[ISCH\_ProjectNetInfo](../interfaces/ISCH_ProjectNetInfo.md)<!-- -->&gt;&gt;

Detailed information of all nets under the current project

## Remarks

ADD since EDA v4.2

### getnet

# SCH\_Net.getNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Specify detailed information of the net

## Signature

```typescript
function getNet(net: string): Promise<ISCH_NetInfo | undefined>;
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

net

</td><td>

string

</td><td>

Net name

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISCH\_NetInfo](../interfaces/ISCH_NetInfo.md) \| undefined&gt;

Detailed information of the net, `undefined` is does not exist this net

## Remarks

ADD since EDA v4.2
