# TPCB\_PrimitivePadShape type

焊盘外形

## 签名

```typescript
type TPCB_PrimitivePadShape = [EPCB_PrimitivePadShapeType.ELLIPSE | EPCB_PrimitivePadShapeType.OBLONG | EPCB_PrimitivePadShapeType.REGULAR_POLYGON, number, number] | [EPCB_PrimitivePadShapeType.RECTANGLE, number, number, number] | [EPCB_PrimitivePadShapeType.POLYLINE_COMPLEX_POLYGON, TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>];
```
## 引用


[EPCB\_PrimitivePadShapeType.ELLIPSE](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.OBLONG](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.REGULAR\_POLYGON](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.RECTANGLE](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [EPCB\_PrimitivePadShapeType.POLYLINE\_COMPLEX\_POLYGON](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->, [TPCB\_PolygonSourceArray](./TPCB_PolygonSourceArray.md)

## 备注

焊盘当前存在以下四种 [外形种类](../enums/EPCB_PrimitivePadShapeType.md)<!-- -->：

① 圆形

`[EPCB_PrimitivePadShapeType.ELLIPSE, width, height]`

- `{number}` `width` - 宽

- `{number}` `height` - 高

② 矩形

`[EPCB_PrimitivePadShapeType.RECTANGLE, width, height, round]`

- `{number}` `width` - 宽

- `{number}` `height` - 高

- `{number}` `round` - 圆角半径

③ 正多边形

`[EPCB_PrimitivePadShapeType.REGULAR_POLYGON, diameter, numberOfSides]`

- `{number}` `diameter` - 直径

- `{number}` `numberOfSides` - 边数（＞ 2）

④ 折线复杂多边形

`[EPCB_PrimitivePadShapeType.POLYLINE_COMPLEX_POLYGON, complexPolygon]`

- `{TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>}` `complexPolygon` - 复杂多边形源数组，可以使用 [IPCB\_ComplexPolygon.getSource()](../classes/IPCB_ComplexPolygon.md) 获取