# PNL\_PrimitiveAuxiliaryLine class

面板 / 辅助线图元类

## Signature

```typescript
class PNL_PrimitiveAuxiliaryLine implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

辅助线的增删改查；辅助线用于批量布局定位基准，不参与生产导出；坐标 `x` / `y` 为辅助线中心点，`orientation` 决定水平还是垂直；单建一条用 ，十字用  图元 ID（`primitiveId`<!-- -->）为稳定标识，对应数据模型 `gId`<!-- -->，会话内不变、跨保存有效；编辑器展示编号（`id`<!-- -->，形如 `e` + 序号）由编译器重排下发、会变化，不作为图元标识。