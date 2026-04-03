# TPCB\_PrimitiveDimensionCoordinateSet type

尺寸标注坐标集

## 签名

```typescript
type TPCB_PrimitiveDimensionCoordinateSet = [number, number, number, number, number, number] | [number, number, number, number, number, number, number, number];
```

## 备注

尺寸标注坐标集存在以下三种 [尺寸标注类型](../enums/EPCB_PrimitiveDimensionType.md)<!-- -->：

① 半径标注

`[x1, y1, x2, y2, x3, y3]`

- `{number}` `x1` - 圆、圆弧上的端点 X

- `{number}` `y1` - 圆、圆弧上的端点 Y

- `{number}` `x2` - 标注线尾部的端点 X

- `{number}` `y2` - 标注线尾部的端点 Y

- `{number}` `x3` - 标注文字的左下端点 X

- `{number}` `y3` - 标注文字的左下端点 Y

② 长度标注

`[x1, y1, x2, y2, x3, y3, x4, y4]`

- `{number}` `x1` - 第一测量端点 X

- `{number}` `y1` - 第一测量端点 Y

- `{number}` `x2` - 第一标注箭头端点 X

- `{number}` `y2` - 第一标注箭头端点 Y

- `{number}` `x3` - 第二标注箭头端点 X

- `{number}` `y3` - 第二标注箭头端点 Y

- `{number}` `x4` - 第二测量端点 X

- `{number}` `y4` - 第二测量端点 Y

③ 角度标注

`[x1, y1, x2, y2, x3, y3]`

- `{number}` `x1` - 第一边端点 X

- `{number}` `y1` - 第一边端点 Y

- `{number}` `x2` - 角度中心 X

- `{number}` `y2` - 角度中心 Y

- `{number}` `x3` - 第二边端点 X

- `{number}` `y3` - 第二边端点 Y