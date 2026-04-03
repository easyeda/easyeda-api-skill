# TPCB\_PolygonSourceArray type

单多边形源数组

## 签名

```typescript
type TPCB_PolygonSourceArray = Array<'L' | 'ARC' | 'CARC' | 'C' | 'R' | 'CIRCLE' | number>;
```

## 备注

单多边形为首尾重合的一条不间断的线所描述的区域，如果首尾不重合将会自动重合。

单多边形的数据格式举例：

`[300, 200, 'L', 400, 200, 'ARC', 400, 220, 15, 'C', 200, 500, 400, 300, 100, 100]`

`['R', 100, 200, 300, 300, 0, 0]`

`['CIRCLE', 100, 200, 5]`

单多边形的数据由以下几种模式组合而成：

① L 直线模式

`x1 y1 L x2 y3 x3 y3 ...`

- `{number}` `x` - 直线点的 X 坐标

- `{number}` `y` - 直线点的 Y 坐标

② ARC/CARC 圆弧模式

`ARC` 为两点交互，`CARC` 为中心圆弧交互

`startX startY ARC arcAngle endX endY`

`startX startY CARC arcAngle endX endY`

- `{number}` `startX` - 起始 X

- `{number}` `startY` - 起始 Y

- `{number}` `arcAngle` - 圆弧角（负值为顺时针旋转；角度制）

- `{number}` `endX` - 终止 X

- `{number}` `endY` - 终止 Y

③ C 三阶贝塞尔模式

`x1 y1 C x2 y2 x3 y3 x4 y4 ...`

- `{number}` `x` - 控制点 X

- `{number}` `y` - 控制点 Y

④ R 矩形模式

`R x y width height rot round`

- `{number}` `x` - 左上点 X

- `{number}` `y` - 左上点 Y

- `{number}` `width` - 宽

- `{number}` `height` - 高

- `{number}` `rotation` - 旋转角度

- `{number}` `round` - 圆角半径

⑤ CIRCLE 圆形模式

`CIRCLE cx cy radius`

- `{number}` `cx` - 中心点 X

- `{number}` `xy` - 中心点 Y

- `{number}` `radius` - 半径