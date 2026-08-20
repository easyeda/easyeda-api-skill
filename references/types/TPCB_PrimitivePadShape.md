# TPCB\_PrimitivePadShape type

Pad shape

## Signature

```typescript
export type TPCB_PrimitivePadShape = [EPCB_PrimitivePadShapeType.ELLIPSE | EPCB_PrimitivePadShapeType.OBLONG | EPCB_PrimitivePadShapeType.REGULAR_POLYGON, number, number] | [EPCB_PrimitivePadShapeType.RECTANGLE, number, number, number] | [EPCB_PrimitivePadShapeType.POLYLINE_COMPLEX_POLYGON, TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>];
```
## References


[EPCB\_PrimitivePadShapeType.ELLIPSE](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.OBLONG](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.REGULAR\_POLYGON](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.RECTANGLE](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.POLYLINE\_COMPLEX\_POLYGON](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [TPCB\_PolygonSourceArray](./TPCB_PolygonSourceArray.md)

## Remarks

A pad currently has the following four [shape types](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->:

1. Circle

`[EPCB_PrimitivePadShapeType.ELLIPSE, width, height]`

- `{number}` `width` - width

- `{number}` `height` - height

② rectangle

`[EPCB_PrimitivePadShapeType.RECTANGLE, width, height, round]`

- `{number}` `width` - width

- `{number}` `height` - height

- `{number}` `round` - corner radius

3. Regular polygon

`[EPCB_PrimitivePadShapeType.REGULAR_POLYGON, diameter, numberOfSides]`

- `{number}` `diameter` - diameter

- `{number}` `numberOfSides` - Number of sides (<!-- -->&gt; 2)

4. Polyline complex polygon

`[EPCB_PrimitivePadShapeType.POLYLINE_COMPLEX_POLYGON, complexPolygon]`

- `{TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>}` `complexPolygon` - complex polygon source array, you can use [IPCB\_ComplexPolygon.getSource()](../classes/IPCB_ComplexPolygon.md) get