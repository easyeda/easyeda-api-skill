# PNL\_PrimitiveArc class

面板 / 圆弧图元类

## Signature

```typescript
class PNL_PrimitiveArc implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

圆弧的增删改查，支持两点式与圆心式两种绘制方式（由 `arcType` 记录，几何一律以起点 / 终点 / 半径 / x 轴旋转角表达）；坐标为画布坐标（px、Y 轴向上为正） 图元 ID（`primitiveId`<!-- -->）为稳定标识，对应数据模型 `gId`<!-- -->，会话内不变、跨保存有效；编辑器展示编号（`id`<!-- -->，形如 `e` + 序号）由编译器重排下发、会变化，不作为图元标识。