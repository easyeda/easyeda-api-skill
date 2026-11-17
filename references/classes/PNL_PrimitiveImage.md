# PNL\_PrimitiveImage class

面板 / 图片图元类

## Signature

```typescript
class PNL_PrimitiveImage implements IPNL_PrimitiveAPI
```
**Implements:** [IPNL\_PrimitiveAPI](../interfaces/IPNL_PrimitiveAPI.md)

## Remarks

图片图元的增删改查；坐标为画布坐标（px、Y 轴向上为正）；图片在画布上按矩形绘制 `x` / `y` 指的是这张矩形没旋转时的左上角；旋转绕选中框中心进行，所以图片转过角度后，画面上看到的左上角已经不是 `(x, y)` 这个点