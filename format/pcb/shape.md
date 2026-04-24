# 形状图元

## LINE 直线

```json
{ "type": "LINE", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":9.223,
  "netName":"GND",
  "layerId":1,
  "startX":100,
  "startY":200,
  "endX":400,
  "endY":300,
  "width":0.7,
}|
```

1. type 直线 `LINE`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. netName 网络
9. layerId 层
10. startX 开始 X
11. startY 开始 Y
12. endX 结束 X
13. endY 结束 Y
14. width 线宽

## ARC/CARC 圆弧线

圆弧借鉴 Eagle 的数学模型，以 `起始` `结束` 为基准去描述

```json
{ "type": "ARC", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":2.866,
  "netName":"GND",
  "layerId":1,
  "startX":100,
  "startY":200,
  "endX":300,
  "endY":400,
  "angle":-170,
  "width":10,
}|
```

1. type 圆弧线
    - `ARC` 两点交互模式
    - `CARC` 中心圆弧交互模式
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. netName 网络
9. layerId 层
10. startX 起始 X
11. startY 起始 Y
12. endX 结束 X
13. endY 结束 Y
14. angle 圆弧角，逆时针正，顺时针负
15. width 线宽

## 多边形体系

SVG 中 path 是一个对多边形优秀的抽象。
但由于 PCB 内用不到其中相对位置等功能，并且有条件设计更方便解析的方式。
所以仿造 SVG 的 path 创造了一种类似的表达多边形的方式。
多边形体系内 `POLY` `REGION` `POUR` 支持互相转换

### 单多边形的定义

单多边形为首尾重合的一条不间断的线所描述的区域。如果首尾不重合需要将其自动重合。

```json
[300, 200, "L", 400, 200, "ARC", 400, 220, 15, "C", 200, 500, 400, 300, 100, 100]
```

```json
["R", 100, 200, 300, 300, 0]
```

```json
["CIRCLE", 100, 200, 5, 1]
```

#### L 直线模式

`X Y L X Y X Y ...` 模式为直线模式，所有坐标将用直线将其连一一连起来

#### ARC/CARC 圆弧模式

`startX startY ARC angle endX endY` 模式为圆弧模式

-   startX/startY 开始坐标
-   angle：圆弧角，逆时针正，顺时针负
-   endX/endY 结束坐标

`startX startY CARC angle endX endY` 中心圆弧交互模式

#### C 三阶贝塞尔模式

`X1 Y1 C X2 Y2 X3 Y3 X4 Y4 ...` 模式为三阶贝塞尔模式，所有坐标为其控制点

#### R 矩形模式

`R X Y width height rot isCCW round` 矩形模式与其它都不兼容，是一个独立的模式

-   X/Y：左上坐标
-   width：宽
-   height：高
-   rot：旋转角度
-   isCCW：是否逆时针
-   round：圆角半径

#### CIRCLE 圆形模式

`CIRCLE cx cy r isCCW` 圆形模式与其它都不兼容，是一个独立的模式

-   cx/cy：中心点坐标
-   r：半径
-   isCCW：是否逆时针

### 复杂多边形的定义

```json
[[单多边形1：外框], [单多边形2：内洞]]
```

复杂多边形可以包含多个单多边形，固定第一个多边形顺时针，表示外框，后续所有多边形逆时针，表示内洞

## POLY 折线

折线和 `LINE` `ARC` 区别较小，但是其具有保持绘制时【连续的一条线】的概念，以和 `REGION` `FILL` `POUR` 互转

```json
{ "type": "POLY", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":6.417,
  "netName":"GND",
  "layerId":1,
  "width":0.5,
  "path":["单多边形"],
}|
```

1. type 折线 `POLY`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. netName 网络
9. layerId 层
10. width 线宽
11. path 请参考单多边形

## FILL 填充

```json
{ "type": "FILL", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex": 0.794,
  "netName":"GND",
  "layerId":3,
  "width":10,
  "fillStyle":0,
  "path":["复杂多边形"],
}|
```

1. type 填充 `FILL`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. netName 网络
9. layerId 层
10. width 线宽
11. fillStyle 填充模式：0 实心填充 1 网格填充 2 内电层填充
12. path 请参考复杂多边形章节
    1. 对于单次画的多边形，这里只有一个单多边形
    1. 对于组合模式画的多边形，这里才有多个单多边形

## REGION 区域

禁止区域为未来一个很重要的功能，除了辅助手工设计以外，还可以辅助自动布局布线，提供自动化工具除设计规则外，区域范围的约束信息

```json
{ "type": "REGION", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.901,
  "layerId":3,
  "width":1,
  "prohibitType":[1, 2, 5],
  "path":["复杂多边形"],
  "name":"aa constraint",

}|
```

1. type 区域 `REGION`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. layerId 层
9. width 线宽
10. prohibitType 禁止类型，可同时存在多个
    1. \*禁止布线与放置填充区域（弃用，但解析要做兼容）
    2. 禁止元件
    3. 禁止过孔
    4. \*禁止覆铜与内电层（弃用，但解析要做兼容）
    5. 禁止布线
    6. 禁止放置填充区域
    7. 禁止覆铜
    8. 禁止内电层
11. path 请参考复杂多边形章节
    1. 对于单次画的多边形，这里只有一个单多边形
    2. 对于组合模式画的多边形，这里才有多个单多边形
12. name 名称（可选）

## POUR 覆铜边框

和之前的覆铜有一个实质性的差别在于，支持复杂多边形
也就是说覆铜区域可以含洞，理论上可以实现文字路径转出来的多边形作为覆铜区域
覆铜按照其在格式内出现的顺序覆铜

```json
{ "type": "POUR", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.779,
  "netName":"GND",
  "layerId":1,
  "width":1,
  "name":"TOPGND",
  "order":4,
  "path":["复杂多边形"],
  "pourType":["覆铜类型"],
  "keepIsland":1,
}|
["POUR", "e100", 5, 1, 0.779, "GND", 1, 1, "TOPGND", 4, 复杂多边形, [覆铜类型], 1]
```

1. type 覆铜 `POUR`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. netName 网络
9. layerId 层
10. width 线宽
11. name 覆铜名称
12. order 覆铜优先级
13. path 请参考复杂多边形章节
14. pourType 请参考覆铜类型
15. keepIsland 是否保留孤岛

#### 覆铜类型

##### SOLID 实心填充

```json
["SOLID", 2]
```

1. 实心填充 `SOLID`
1. 最小覆铜细度（生产优化用，AD 里的 Neck），0 为不开启生产优化

```json
["POUR", "e100", "GND", 1, "BOTGND", 2, 复杂多边形, ["SOLID", 2], 1, 0]
```

```json
["POUR", "e100", "GND", 1, "BOTGND", 2, 复杂多边形, ["SOLID", 0], 1, 0]
```

##### LINE 线填充

```json
["LINE", 0, 0, 10, 20]
```

1. 线填充 `LINE`
1. 填充模式：`0` 网格填充 `1` 水平线填充 `2` 垂直线填充
1. 旋转角度
1. 线宽
1. 线距

```json
["POUR", "e100", "GND", 1, "", 9, 复杂多边形, ["LINE", 0, 0, 10, 20], 0.6, 1, 0, 0]
```

## POURED 覆铜结果

```json
{ "type": "POURED", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "targetId":"e100",
  "strokeWidth":0,
  "fill":1,
  "path":["复杂多边形"],
}|
```

1. type 覆铜结果 `POURED`
2. id 图元编号
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. targetId 所属覆铜边框 `POUR` 编号
6. strokeWidth 描边线宽：0 为不描边
7. fill 是否填充
8. path 路径, 复杂多边形

## IMAGE 图片

`IMAGE` 和 `REGION` 极为类似，但是在操作上，`IMAGE` 不存在控制点，不能自由改变其形态，只能进行整体性的放大、缩小、旋转、翻转、平移等操作
当 `IMAGE` 在信号层时，在 DRC 视角下，为一个无网络的，由 `起始` `结束` `旋转角度` `是否镜像` 定义的矩形区域

```json
{ "type": "IMAGE", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":5.5464,
  "layerId":31,
  "startX":200,
  "startY":200,
  "width":400,
  "height":400,
  "angle":45,
  "mirror":1,
  "path":["复杂多边形"],
}|
```

1. type 图片 `IMAGE`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. layerId 层
9. startX 左上 X
10. startY 左上 Y
11. width 宽
12. height 高
13. angle 旋转角度，绕 `起始` 点
14. mirror 原始图片是否水平镜像，镜像以原始图片 BBox 中点进行水平镜像
15. path 多个复杂多边形，请参考复杂多边形章节，这里存储的是原始数据，整个生命周期不需要调整

## TEARDROP 泪滴

泪滴不可选中，不可直接操作，当关联的任意图元发生变化时，EDA 应让其自动消失

```json
{ "type": "TEARDROP", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "netName":"GND",
  "layerId":3,
  "path":"简单多边形",
  "groupId":0,
}|
```

1. type 泪滴 `TEARDROP`
2. id 编号
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. netName 网络
6. layerId 层
7. path 简单多边形
8. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组

## FPC_FILL 柔性工艺补强板

```json
{ "type": "FPC_FILL", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":7.7845,
  "layerId":3,
  "material":"3M468",
  "thickness":7.874,
  "path":"复杂多边形",
}|
```

1. type 填充 `FPC_FILL`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. layerId 层
9. material 材质
    - PI
    - STEEL
    - FR4
    - 3M468
    - 3M9077
    - EMI_Shielding_Film
10. thickness 厚度（注意单位和其它图元一致）
11. path 请参考复杂多边形章节
