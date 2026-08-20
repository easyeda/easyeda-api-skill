# PCB\_Net class

PCB &amp; footprint / net class

## Signature

```typescript
export class PCB_Net 
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

Get the net names of all nets


</td></tr>
<tr><td>

[getAllNets()](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Get all Detailed information of the net


</td></tr>
<tr><td>

[getAllNetsName()](./PCB_Net.md)


</td><td>


</td><td>

Get the net names of all nets


</td></tr>
<tr><td>

[getAllPrimitivesByNet(net, primitiveTypes)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Get all primitives associated with the specified net


</td></tr>
<tr><td>

[getNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Get Specify detailed information of the net


</td></tr>
<tr><td>

[getNetColor(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Get the color of the specified net


</td></tr>
<tr><td>

[getNetLength(net)](./PCB_Net.md)


</td><td>


</td><td>

Get the length of the specified net


</td></tr>
<tr><td>

[getNetlist(type)](./PCB_Net.md)


</td><td>


</td><td>

Get the netlist


</td></tr>
<tr><td>

[highlightNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Highlight the net


</td></tr>
<tr><td>

[selectNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Select net


</td></tr>
<tr><td>

[setNetColor(net, color)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Set the color of the specified net


</td></tr>
<tr><td>

[setNetlist(type, netlist)](./PCB_Net.md)


</td><td>


</td><td>

Update the netlist


</td></tr>
<tr><td>

[unhighlightAllNets()](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Unhighlight all nets


</td></tr>
<tr><td>

[unhighlightNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Unhighlight the net


</td></tr>
<tr><td>

[unselectAllNets()](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Unselect all nets


</td></tr>
<tr><td>

[unselectNet(net)](./PCB_Net.md)


</td><td>


</td><td>

**_(BETA)_** Unselect the net


</td></tr>
</tbody></table>

---

## 方法详情

### getallnetname

# PCB\_Net.getAllNetName() method

> Warning: This API is now obsolete.
>
> Please use [getAllNetsName](./PCB_Net.md) instead

Get the net names of all nets

## Signature

```typescript
public getAllNetName(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Net name array

### getallnets

# PCB\_Net.getAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Detailed information of the net

## Signature

```typescript
public getAllNets(): Promise<Array<IPCB_NetInfo>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md)<!-- -->&gt;&gt;

Detailed information of all nets

### getallnetsname

# PCB\_Net.getAllNetsName() method

Get the net names of all nets

## Signature

```typescript
public getAllNetsName(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Net name array

### getallprimitivesbynet

# PCB\_Net.getAllPrimitivesByNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all primitives associated with the specified net

## Signature

```typescript
public getAllPrimitivesByNet(net: string, primitiveTypes?: Array<EPCB_PrimitiveType>): Promise<Array<IPCB_Primitive>>;
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
<tr><td>

primitiveTypes


</td><td>

Array&lt;[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)<!-- -->&gt;


</td><td>

_(Optional)_ Array of primitive types. If the specified primitive type has no net property, the returned data will always be empty


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;&gt;

Array of primitive objects

### getnet

# PCB\_Net.getNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Specify detailed information of the net

## Signature

```typescript
public getNet(net: string): Promise<IPCB_NetInfo | undefined>;
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

Promise&lt;[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md) \| undefined&gt;

Detailed information of the net, `undefined` is does not exist this net

### getnetcolor

# PCB\_Net.getNetColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the color of the specified net

## Signature

```typescript
public getNetColor(net: string): Promise<IPCB_NetInfo['color'] | undefined>;
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

Promise&lt;[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md)<!-- -->\['color'\] \| undefined&gt;

Net color, `undefined` is does not exist this net

### getnetlength

# PCB\_Net.getNetLength() method

Get the length of the specified net

## Signature

```typescript
public getNetLength(net: string): Promise<number | undefined>;
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

Promise&lt;number \| undefined&gt;

Net length. `undefined` means the net does not exist; `0` means the net has no length

### getnetlist

# PCB\_Net.getNetlist() method

Get the netlist

## Signature

```typescript
public getNetlist(type?: ESYS_NetlistType): Promise<string>;
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

### highlightnet

# PCB\_Net.highlightNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Highlight the net

## Signature

```typescript
public highlightNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

The return value of this API is result-oriented. If the net was already highlighted, `true` will also be returned

### selectnet

# PCB\_Net.selectNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Select net

## Signature

```typescript
public selectNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

Whether the operation is successful

### setnetcolor

# PCB\_Net.setNetColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the color of the specified net

## Signature

```typescript
public setNetColor(net: string, color: IPCB_NetInfo['color']): Promise<boolean>;
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
<tr><td>

color


</td><td>

[IPCB\_NetInfo](../interfaces/IPCB_NetInfo.md)<!-- -->\['color'\]


</td><td>

Net color


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether Set Successful, `false` is does not exist this net

### setnetlist

# PCB\_Net.setNetlist() method

Update the netlist

## Signature

```typescript
public setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

### unhighlightallnets

# PCB\_Net.unhighlightAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Unhighlight all nets

## Signature

```typescript
public unhighlightAllNets(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### unhighlightnet

# PCB\_Net.unhighlightNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Unhighlight the net

## Signature

```typescript
public unhighlightNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

The return value of this API is result-oriented. If the net was not highlighted before, `true` will also be returned

### unselectallnets

# PCB\_Net.unselectAllNets() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Unselect all nets

## Signature

```typescript
public unselectAllNets(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

If you want to unselect all primitives, use the [PCB\_SelectControl.clearSelected()](./PCB_SelectControl.md) API

### unselectnet

# PCB\_Net.unselectNet() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Unselect the net

## Signature

```typescript
public unselectNet(net: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

Whether the operation is successful
