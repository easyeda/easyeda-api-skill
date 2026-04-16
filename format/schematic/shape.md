# 形状图元

## RECT 矩形

矩形由其对角的两个点定义，其旋转是绕`点1`进行的

```json
{ "type": "RECT", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 7.35,
    "dotX1": 340,
    "dotY1": 210,
    "dotX2": 100,
    "dotY2": 200,
    "radiusX": 40,
    "radiusY": 30,
    "rotation": 90,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：RECT
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. dotX1 点 1 X
9. dotY1 点 1 Y
10. dotX2 点 2 X
11. dotY2 点 2 Y
12. radiusX 圆角半径 X：`0` 表示非圆角
13. radiusY 圆角半径 Y：`0` 表示非圆角
14. rotation 旋转角度：绕 `点1` 旋转
15. strokeColor 颜色，null 为默认
16. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
17. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
18. strokeWidth 宽度，null 为默认
19. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线

## POLY 多边形

```json
{ "type": "POLY", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 7.35,
    "points": [390, 260, 450, 300, 560, 280, 540, 320],
    "closed": false,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：POLY
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. points 点集坐标：X Y X Y X Y ...
9. closed 是否自动闭合：如果自动闭合，则结束点会自动连上起始点
10. strokeColor 颜色，null 为默认
11. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
12. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
13. strokeWidth 宽度，null 为默认
14. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线

## CIRCLE 圆

```json
{ "type": "CIRCLE", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 2.332,
    "centerX": 430,
    "centerY": 200,
    "radius": 21,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：CIRCLE
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. centerX 圆心 X
9. centerY 圆心 Y
10. radius 半径 r
11. strokeColor 颜色，null 为默认
12. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
13. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
14. strokeWidth 宽度，null 为默认
15. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线

## ARC 圆弧

```json
{ "type": "ARC", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 0.8689,
    "startX": -10,
    "startY": 0,
    "referX": 0,
    "referY": 10,
    "endX": 10,
    "endY": 0,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：ARC
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. startX 起始 X
9. startY 起始 Y
10. referX 参考 X
11. referY 参考 Y
12. endX 结束 X
13. endY 结束 Y
14. strokeColor 颜色，null 为默认
15. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
16. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
17. strokeWidth 宽度，null 为默认
18. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线

## BEZIER 三阶贝塞尔线条

```json
{ "type": "BEZIER", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 2.1002,
    "controls": [10, 10, 30, 20, 100, 30, 50, 70],
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：BEZIER
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. controls 控制点：X1 Y1 X2 Y2 X3 Y3 X4 Y4 ...
9. strokeColor 颜色，null 为默认
10. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
11. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
12. strokeWidth 宽度，null 为默认
13. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线

## ELLIPSE 椭圆

```json
{ "type": "ELLIPSE", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 6.23,
    "centerX": 670,
    "centerY": 325,
    "radiusX": 220,
    "radiusY": 20,
    "rotation": 0,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：ELLIPSE
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. centerX 中点 cx
9. centerY 中点 cy
10. radiusX 水平半径 rx
11. radiusY 垂直半径 ry
12. rotation 旋转角度 rot
13. strokeColor 颜色，null 为默认
14. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
15. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
16. strokeWidth 宽度，null 为默认
17. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线
