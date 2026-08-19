# SCH\_Net class

原理图 &amp; 符号 / 网络类

## Signature

```typescript
export class SCH_Net 
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

**_(BETA)_** 获取所有网络的详细信息


</td></tr>
<tr><td>

[getAllNetsName()](./SCH_Net.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有网络的网络名称


</td></tr>
<tr><td>

[getCurrentProjectAllNets()](./SCH_Net.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前工程下所有网络的详细信息


</td></tr>
<tr><td>

[getNet(net)](./SCH_Net.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定网络的详细信息


</td></tr>
</tbody></table>

---

## 方法详情

### getallnets

# SCH\_Net.getAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有网络的详细信息

## Signature

```typescript
public getAllNets(): Promise<Array<ISCH_NetInfo>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_NetInfo](../interfaces/ISCH_NetInfo.md)<!-- -->&gt;&gt;

所有网络的详细信息

## Remarks

ADD since EDA v4.2

### getallnetsname

# SCH\_Net.getAllNetsName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有网络的网络名称

## Signature

```typescript
public getAllNetsName(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

网络名称数组

## Remarks

ADD since EDA v4.2

### getcurrentprojectallnets

# SCH\_Net.getCurrentProjectAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前工程下所有网络的详细信息

## Signature

```typescript
public getCurrentProjectAllNets(): Promise<Array<ISCH_ProjectNetInfo>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_ProjectNetInfo](../interfaces/ISCH_ProjectNetInfo.md)<!-- -->&gt;&gt;

当前工程下所有网络的详细信息

## Remarks

ADD since EDA v4.2

### getnet

# SCH\_Net.getNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取指定网络的详细信息

## Signature

```typescript
public getNet(net: string): Promise<ISCH_NetInfo | undefined>;
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

网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_NetInfo](../interfaces/ISCH_NetInfo.md) \| undefined&gt;

网络的详细信息, `undefined` 为不存在该网络

## Remarks

ADD since EDA v4.2
