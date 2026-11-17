# PNL\_PrimitivePath class

面板 / 复合路径图元类

## Signature

```typescript
class PNL_PrimitivePath implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

面板里所有自由形状的入口：折线、多边形、带曲线的复合路径都用它，它们同属编辑器 `CmdKey.group` 数据桶，只是路径指令不同。布尔合并、钢笔、描边转形状的产物也是它。与组合容器无关（组合是对象树，不是几何形状）。坐标为画布坐标（px、Y 轴向上为正） 图元 ID（`primitiveId`<!-- -->）为稳定标识，对应数据模型 `gId`<!-- -->，会话内不变、跨保存有效；编辑器展示编号（`id`<!-- -->，形如 `e` + 序号）由编译器重排下发、会变化，不作为图元标识。