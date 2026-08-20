# TSYS\_MathPolygonInput type

Polygon input type

## Signature

```typescript
export type TSYS_MathPolygonInput = Array<ISYS_MathPoint> | TPCB_PolygonSourceArray | IPCB_Polygon | IPCB_ComplexPolygon | TSYS_MathPolygonGroup;
```
## References


[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->, [TPCB\_PolygonSourceArray](./TPCB_PolygonSourceArray.md)<!-- -->, [IPCB\_Polygon](../classes/IPCB_Polygon.md)<!-- -->, [IPCB\_ComplexPolygon](../classes/IPCB_ComplexPolygon.md)<!-- -->, [TSYS\_MathPolygonGroup](./TSYS_MathPolygonGroup.md)

## Remarks

The following input formats are supported: - Discrete point array: `[{x, y}, {x, y}, ...]` - Single polygon source array: [TPCB\_PolygonSourceArray](./TPCB_PolygonSourceArray.md) - Single polygon object: [IPCB\_Polygon](../classes/IPCB_Polygon.md) - Complex polygon object: [IPCB\_ComplexPolygon](../classes/IPCB_ComplexPolygon.md) - Polygon group: [TSYS\_MathPolygonGroup](./TSYS_MathPolygonGroup.md)