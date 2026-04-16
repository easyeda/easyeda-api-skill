# 焊盘与过孔

## VIA 过孔

过孔一般用于打通不同层之间的电路
对于多层板一般有如下几种模式
通孔：`开始层` 到 `结束层` 贯穿顶层底层
盲孔：`开始层` 或 `结束层` 只有一个属于顶层或底层
埋孔：`开始层` 和 `结束层` 都不属于顶层或底层

```json
{ "type": "VIA", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":3.223,
  "netName":"GND",
  "ruleName":"asdf",
  "centerX":100,
  "centerY":200,
  "holeDiameter":5,
  "viaDiameter":9,
  "viaType":0,
  "topSolderExpansion":null,
  "bottomSolderExpansion":null,
  "unusedInnerLayers":[17],
}|
```

1. type 过孔 `VIA`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. netName NET
9. ruleName 过孔层类型：设计规则名称，定义过孔的开始层结束层
10. centerX 坐标 X
11. centerY 坐标 Y
12. holeDiameter 孔直径
13. viaDiameter 焊盘直径
14. viaType 过孔类型：0 普通过孔 1 缝合孔
15. topSolderExpansion 顶层阻焊扩展：`null` 为遵循规则
16. bottomSolderExpansion 底层阻焊扩展：`null` 为遵循规则
17. unusedInnerLayers 隐藏焊盘层（可选）：被隐藏焊盘的层数组

## PAD 焊盘

焊盘一般用于元器件与电路板焊接
焊盘要么贯穿整个电路板，要么只在顶层或者底层，所以只有顶层、底层、多层三种层

```json
{ "type": "PAD", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":6.234,
  "netName":"GND",
  "layerId":0,
  "num":"1",
  "centerX":100,
  "centerY":200,
  "padAngle":15,
  "hole":["参考孔"],
  "defaultPad":["参考焊盘"],
  "specialPad":[[0, 1, ["参考焊盘"]]],
  "padOffsetX":10,
  "padOffsetY":-5,
  "relativeAngle":30,
  "plated":1,
  "padType":null,
  "topSolderExpansion":0.5,
  "bottomSolderExpansion":0.4,
  "topPasteExpansion":null,
  "bottomPasteExpansion":0,
  "connectMode":0,
  "spokeSpace":10,
  "spokeWidth":5,
  "spokeAngle":45,
  "unusedInnerLayers":[15, 17],
}|
```

1. type 焊盘 `PAD`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. netName 网络
9. layerId 层（只有顶层、底层、多层）
10. num 焊盘编号
11. centerX 焊盘原点 X
12. centerY 焊盘原点 Y
13. padAngle 焊盘旋转角度
14. hole 孔：参考孔，`null` 表示无孔
15. defaultPad 默认焊盘：参考焊盘
16. specialPad 特殊焊盘（多组，每组定义如下）
    1. 开始层
    2. 结束层
    3. 参考焊盘
17. padOffsetX 孔偏移 X
18. padOffsetY 孔偏移 Y
19. relativeAngle 孔相对焊盘旋转角度
20. plated 是否金属化孔壁
21. padType 焊盘功能：0 普通焊盘 1 测试点 2 标识点
22. topSolderExpansion 顶层阻焊扩展：`null` 为遵循规则
23. bottomSolderExpansion 底层阻焊扩展：`null` 为遵循规则
24. topPasteExpansion 顶层助焊扩展：`null` 为遵循规则
25. bottomPasteExpansion 底层助焊扩展：`null` 为遵循规则
26. connectMode 热焊-连接方式：`null` 为遵循规则，其他数据定义同设计规则
27. spokeSpace 热焊-发散间距：`null` 为遵循规则，其他数据定义同设计规则
28. spokeWidth 热焊-发散线宽：`null` 为遵循规则，其他数据定义同设计规则
29. spokeAngle 热焊-发散角度：`null` 为遵循规则，其他数据定义同设计规则
30. unusedInnerLayers 隐藏焊盘层（可选）：被隐藏焊盘的层数组

### 孔

1. 长圆孔
    1. 长圆孔 `ROUND`
    1. 宽
    1. 高
1. 方孔
    1. 方孔 `RECT`
    1. 宽
    1. 高

### 焊盘

孔的旋转与盘的互相独立

1. 长圆焊盘
    1. 长圆焊盘 `ROUND`
    1. 宽
    1. 高
1. 方焊盘
    1. 方焊盘 `RECT`
    1. 宽
    1. 高
    1. 圆角半径
1. 正多边形焊盘
    1. 正多边形焊盘 `NGON` （名称来自 3DSMAX）
    1. 直径
    1. 边数（> 2）
1. 多边形焊盘
    1. 多边形焊盘 `POLY`
    1. 参考复杂多边形，以孔为原点的相对位置
