# PNL\_PrimitiveDimension class

面板 / 尺寸标注图元类

## Signature

```typescript
class PNL_PrimitiveDimension implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

尺寸标注图元的增删改查；标注值随被测对象变化，单位为画布像素，毫米显示值由编辑器按文档单位换算；坐标为画布坐标（px、Y 轴向上为正） 图元 ID（`primitiveId`<!-- -->）为稳定标识，对应数据模型 `gId`<!-- -->，会话内不变、跨保存有效；编辑器展示编号（`id`<!-- -->，形如 `e` + 序号）由编译器重排下发、会变化，不作为图元标识。