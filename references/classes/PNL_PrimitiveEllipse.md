# PNL\_PrimitiveEllipse class

面板 / 椭圆图元类

## Signature

```typescript
class PNL_PrimitiveEllipse implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

椭圆图元的增删改查，半径相等即为正圆；坐标为画布坐标 图元 ID（`primitiveId`<!-- -->）为稳定标识，对应数据模型 `gId`<!-- -->，会话内不变、跨保存有效；编辑器展示编号（`id`<!-- -->，形如 `e` + 序号）由编译器重排下发、会变化，不作为图元标识。