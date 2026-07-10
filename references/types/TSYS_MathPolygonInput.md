# TSYS\_MathPolygonInput type

多边形输入类型

## Signature

```typescript
type TSYS_MathPolygonInput = Array<ISYS_MathPoint> | TPCB_PolygonSourceArray | IPCB_Polygon | IPCB_ComplexPolygon;
```
## References


[ISYS\_MathPoint](../interfaces/ISYS_MathPoint.md)<!-- -->, [TPCB\_PolygonSourceArray](./TPCB_PolygonSourceArray.md)<!-- -->, [IPCB\_Polygon](../classes/IPCB_Polygon.md)<!-- -->, [IPCB\_ComplexPolygon](../classes/IPCB_ComplexPolygon.md)

## Remarks

支持以下输入格式： - 离散点数组：`[{x, y}, {x, y}, ...]` - 单多边形源数组：[TPCB\_PolygonSourceArray](./TPCB_PolygonSourceArray.md) - 单多边形对象：[IPCB\_Polygon](../classes/IPCB_Polygon.md) - 复杂多边形对象：[IPCB\_ComplexPolygon](../classes/IPCB_ComplexPolygon.md)