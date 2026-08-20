# SCH\_Utils class

Schematic &amp; symbol / utility class

## Signature

```typescript
export class SCH_Utils 
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

[splitLines(lines)](./SCH_Utils.md)


</td><td>


</td><td>

**_(BETA)_** Split polyline


</td></tr>
</tbody></table>

---

## 方法详情

### splitlines

# SCH\_Utils.splitLines() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Split polyline

## Signature

```typescript
public splitLines(lines: Array<number | Array<number>>): Array<Array<number | Array<number>>> | undefined;
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

lines


</td><td>

Array&lt;number \| Array&lt;number&gt;&gt;


</td><td>

Polyline coordinate group. Each segment is a continuous line described by `[x1, y1, x2, y2, x3, y3]`


</td></tr>
</tbody></table>



## Returns

Array&lt;Array&lt;number \| Array&lt;number&gt;&gt;&gt; \| undefined

## Remarks

Splits polyline coordinate groups that have no connections to each other into multiple polylines. Regardless of whether there are multiple polylines, this function wraps an extra layer of array around the input data; it is recommended for scenarios containing polylines such as [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) and [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)
