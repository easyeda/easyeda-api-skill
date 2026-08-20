# PCB\_Primitive class

PCB &amp; footprint / primitive class

## Signature

```typescript
export class PCB_Primitive 
```

## Remarks

Unified operations on primitives

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[getPrimitiveBoardLine(primitiveId, layers)](./PCB_Primitive.md)


</td><td>


</td><td>

**_(BETA)_** Get the board line of the primitive


</td></tr>
<tr><td>

[getPrimitivesBBox(primitiveIds)](./PCB_Primitive.md)


</td><td>


</td><td>

**_(BETA)_** Get The BBox of the primitive


</td></tr>
</tbody></table>

---

## 方法详情

### getprimitiveboardline

# PCB\_Primitive.getPrimitiveBoardLine() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the board line of the primitive

## Signature

```typescript
public getPrimitiveBoardLine(primitiveId: string, layers?: Array<EPCB_LayerId>): Promise<IPCB_ComplexPolygon | undefined>;
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

primitiveId


</td><td>

string


</td><td>

Primitive ID


</td></tr>
<tr><td>

layers


</td><td>

Array&lt;[EPCB\_LayerId](../enums/EPCB_LayerId.md)<!-- -->&gt;


</td><td>

_(Optional)_ Layers to calculate. When calculating devices, pads, and vias, the union of the board lines of the specified multiple layers can be precisely calculated


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined&gt;

Complex polygon. If the primitive ID does not match or the primitive does not exist on the specified layer, `undefined` is returned

### getprimitivesbbox

# PCB\_Primitive.getPrimitivesBBox() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The BBox of the primitive

## Signature

```typescript
public getPrimitivesBBox(primitiveIds: Array<string | IPCB_Primitive>): Promise<{ minX: number; minY: number; maxX: number; maxY: number } | undefined>;
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

primitiveIds


</td><td>

Array&lt;string \| [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;


</td><td>

Array of Primitive ID array or primitive objects


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ minX: number; minY: number; maxX: number; maxY: number } \| undefined&gt;

The BBox of the primitive. If the primitive does not exist or has no BBox, `undefined` will be returned
