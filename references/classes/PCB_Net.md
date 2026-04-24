# PCB\_Net class

PCB &amp; 封装 / 网络类

## Signature

```typescript
declare class PCB_Net 
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

[getAllNetName()](./PCB_Net.md)


</td><td>


</td><td>

获取所有网络的网络名称


</td></tr>
<tr><td>

[getAllNets()](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有网络的详细信息


</td></tr>
<tr><td>

[getAllNetsName()](./PCB_Net.md)


</td><td>


</td><td>

获取所有网络的网络名称


</td></tr>
<tr><td>

[getAllPrimitivesByNet(net, primitiveTypes)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 获取关联指定网络的所有图元


</td></tr>
<tr><td>

[getNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定网络的详细信息


</td></tr>
<tr><td>

[getNetColor(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定网络的颜色


</td></tr>
<tr><td>

[getNetLength(net)](./PCB_Net.md)


</td><td>


</td><td>

获取指定网络的长度


</td></tr>
<tr><td>

[getNetlist(type)](./PCB_Net.md)


</td><td>


</td><td>

获取网表


</td></tr>
<tr><td>

[highlightNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 高亮网络


</td></tr>
<tr><td>

[selectNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 选中网络


</td></tr>
<tr><td>

[setNetColor(net, color)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 设置指定网络的颜色


</td></tr>
<tr><td>

[setNetlist(type, netlist)](./PCB_Net.md)


</td><td>


</td><td>

更新网表


</td></tr>
<tr><td>

[unhighlightAllNets()](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 取消高亮所有网络


</td></tr>
<tr><td>

[unhighlightNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 取消高亮网络


</td></tr>
<tr><td>

[unselectAllNets()](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 取消选中所有网络


</td></tr>
<tr><td>

[unselectNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** 取消选中网络


</td></tr>
</tbody></table>

---

## 方法详情

### getallnetname

# PCB\_Net.getAllNetName() method

> Warning: This API is now obsolete.
>
> 请使用 [getAllNetsName](./PCB_Net.md) 替代

获取所有网络的网络名称

## Signature

```typescript
getAllNetName(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

网络名称数组

### getallnets

# PCB\_Net.getAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有网络的详细信息

## Signature

```typescript
getAllNets(): Promise<Array<IPCB_NetInfo>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md)<!-- -->&gt;&gt;

所有网络的详细信息

### getallnetsname

# PCB\_Net.getAllNetsName() method

获取所有网络的网络名称

## Signature

```typescript
getAllNetsName(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

网络名称数组

### getallprimitivesbynet

# PCB\_Net.getAllPrimitivesByNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取关联指定网络的所有图元

## Signature

```typescript
getAllPrimitivesByNet(net: string, primitiveTypes?: Array<EPCB_PrimitiveType>): Promise<Array<IPCB_Primitive>>;
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
<tr><td>

primitiveTypes


</td><td>

Array&lt;[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)<!-- -->&gt;


</td><td>

_(Optional)_ 图元类型数组，如若指定图元类型不存在网络属性，返回的数据将恒为空


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;&gt;

图元对象数组

### getnet

# PCB\_Net.getNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取指定网络的详细信息

## Signature

```typescript
getNet(net: string): Promise<IPCB_NetInfo | undefined>;
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

Promise&lt;[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md) \| undefined&gt;

网络的详细信息, `undefined` 为不存在该网络

### getnetcolor

# PCB\_Net.getNetColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取指定网络的颜色

## Signature

```typescript
getNetColor(net: string): Promise<IPCB_NetInfo['color'] | undefined>;
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

Promise&lt;[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md)<!-- -->\['color'\] \| undefined&gt;

网络颜色，`undefined` 为不存在该网络

### getnetlength

# PCB\_Net.getNetLength() method

获取指定网络的长度

## Signature

```typescript
getNetLength(net: string): Promise<number | undefined>;
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

Promise&lt;number \| undefined&gt;

网络长度，`undefined` 为不存在该网络，`0` 为网络无长度

### getnetlist

# PCB\_Net.getNetlist() method

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

### highlightnet

# PCB\_Net.highlightNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

高亮网络

## Signature

```typescript
highlightNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功

## Remarks

本接口的返回值为结果导向，如果该网络原先已高亮，也将返回 `true`

### selectnet

# PCB\_Net.selectNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

选中网络

## Signature

```typescript
selectNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功

### setnetcolor

# PCB\_Net.setNetColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置指定网络的颜色

## Signature

```typescript
setNetColor(net: string, color: IPCB_NetInfo['color']): Promise<boolean>;
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
<tr><td>

color


</td><td>

[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md)<!-- -->\['color'\]


</td><td>

网络颜色


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否设置成功, `false` 为不存在该网络

### setnetlist

# PCB\_Net.setNetlist() method

更新网表

## Signature

```typescript
setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

### unhighlightallnets

# PCB\_Net.unhighlightAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

取消高亮所有网络

## Signature

```typescript
unhighlightAllNets(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

操作是否成功

### unhighlightnet

# PCB\_Net.unhighlightNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

取消高亮网络

## Signature

```typescript
unhighlightNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功

## Remarks

本接口的返回值为结果导向，如果该网络原先未高亮，也将返回 `true`

### unselectallnets

# PCB\_Net.unselectAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

取消选中所有网络

## Signature

```typescript
unselectAllNets(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

如果希望取消选中所有图元，请使用 [PCB\_SelectControl.clearSelected()](./PCB_SelectControl.md) 接口

### unselectnet

# PCB\_Net.unselectNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

取消选中网络

## Signature

```typescript
unselectNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功
