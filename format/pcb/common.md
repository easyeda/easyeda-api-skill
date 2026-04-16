# 通用格式

## 文档头

```json
{ "type": "DOCHEAD" }||{ "docType": "PCB", "uuid": "UUID", "client": "clientID" }|
```

```json
{ "type": "DOCHEAD" }||{ "docType": "FOOTPRINT", "uuid": "UUID", "client": "clientID" }|
```

-   type："DOCHEAD"，文档头标识
-   docType：文档类型，"PCB" PCB, "FOOTPRINT" 封装
-   uuid：文档唯一编号，工程内唯一
-   client：最终一致性的一个终端标识

## CANVAS 画布配置

```json
{ "type": "CANVAS", "ticket": 1 }||
{
  "originX":0,
  "originY":0,
  "unit":"mm",
  "gridXSize":10,
  "gridYSize":10,
  "snapXSize":1,
  "snapYSize":1,
  "altSnapXSize":0.1,
  "altSnapYSize":0.1,
  "gridType":1,
  "multiGridType":0,
  "multiGridRatio":5,
}|
```

1. type 画布配置 `CANVAS`
2. ticket 逻辑时钟
3. originX 画布原点 X
4. originY 画布原点 Y
5. unit **显示**单位（不会影响格式里数据的单位）
6. gridXSize 网格尺寸 X
7. gridYSize 网格尺寸 Y
8. snapXSize 栅格尺寸 X
9. snapYSize 栅格尺寸 Y
10. altSnapXSize Alt 栅格尺寸 X
11. altSnapYSize Alt 栅格尺寸 Y
12. gridType 网格类型：`0` 无 `1` 网格 `2` 网点
13. multiGridType 加粗网格类型：`0` 无 `1` 网格 `2` 网点
14. multiGridRatio 加粗网格倍数：number

## LAYER 层配置

-   所有 `SIGNAL` `PLANE` `SUBSTRATE` 出现的顺序隐含了它的物理堆叠顺序
-   所有 `SIGNAL` `PLANE` `SUBSTRATE` 数量不受限制
-   格式不假设层编号与层维持稳定的关系，具体实现由工具决定

```json
{ "type": "LAYER","id": 0, "ticket": 1 }||
{
  "layerType":"TOP",
  "layerName":"Top Layer",
  "status":1,
  "activeColor":"#FF0000",
  "activateTransparency":0.5,
  "inactiveColor":"#880000",
  "inactiveTransparency":0.3,
}|
```

1. type 层 `LAYER`
2. id 层编号：唯一
3. ticket 逻辑时钟
4. layerType 层类型
5. layerName 层别名，需要唯一
6. status 状态：`1` 使用 `2` 显示 `4` 锁定，可通过相加叠加状态，例如
    - 使用并显示 3 = 1 + 2
    - 使用并锁定但不显示 5 = 1 + 4
    - 使用并显示并锁定 7 = 1 + 2 + 4
7. activeColor 激活颜色
8. activateTransparency 激活透明度
9. inactiveColor 非激活颜色
10. inactiveTransparency 非激活透明度

```json
["LAYER",2,"BOTTOM","Bottom Layer",1,"#0000ff",1,"#00007f",1]
["LAYER",3,"TOP_SILK","Top Silkscreen Layer",1,"#ffcc00",1,"#7f6600",1]
["LAYER",4,"BOT_SILK","Bottom Silkscreen Layer",1,"#66cc33",1,"#336619",1]
["LAYER",5,"TOP_SOLDER_MASK","Top Solder Mask Layer",1,"#800080",1,"#400040",1]
["LAYER",6,"BOT_SOLDER_MASK","Bottom Solder Mask Layer",1,"#aa00ff",1,"#55007f",1]
["LAYER",7,"TOP_PASTE_MASK","Top Paste Mask Layer",1,"#808080",1,"#404040",1]
["LAYER",8,"BOT_PASTE_MASK","Bottom Paste Mask Layer",1,"#800000",1,"#400000",1]
["LAYER",9,"TOP_ASSEMBLY","Top Assembly Layer",1,"#33cc99",1,"#19664c",1]
["LAYER",10,"BOT_ASSEMBLY","Bottom Assembly Layer",1,"#5555ff",1,"#2a2a7f",1]
["LAYER",11,"OUTLINE","Board Outline Layer",1,"#ff00ff",1,"#7f007f",1]
["LAYER",12,"MULTI","Multi-Layer",1,"#c0c0c0",1,"#606060",1]
["LAYER",13,"DOCUMENT","Document Layer",1,"#ffffff",1,"#7f7f7f",1]
["LAYER",14,"MECHANICAL","Mechanical Layer",1,"#f022f0",1,"#781178",1]
["LAYER",50,"SUBSTRATE","Dialectric1",3,"#999966",1,"#4c4c33",1]
["LAYER",15,"SIGNAL","Inner1",3,"#999966",1,"#4c4c33",1]
["LAYER",52,"SUBSTRATE","Dialectric3",3,"#999966",1,"#4c4c33",1]
["LAYER",51,"SUBSTRATE","Dialectric2",3,"#999966",1,"#4c4c33",1]
["LAYER",17,"SIGNAL","Inner2",3,"#008000",1,"#004000",1]
["LAYER",58,"SUBSTRATE","Dialectric9",3,"#999966",1,"#4c4c33",1]
["LAYER",16,"SIGNAL","Inner3",3,"#00ff00",1,"#007f00",1]
["LAYER",53,"SUBSTRATE","Dialectric4",3,"#999966",1,"#4c4c33",1]
["LAYER",47,"HOLE","Hole Layer",1,"#222222",1,"#111111",1]
["LAYER",48,"SHELL","3D Shell Layer",1,"#222222",1,"#111111",1]
["LAYER",49,"TOP_SHELL","Top 3D Shell Layer",1,"#222222",1,"#111111",1]
["LAYER",50,"BOT_SHELL","Bottom 3D Shell Layer",1,"#222222",1,"#111111",1]
```

## LAYER_PHYS 层物理特性配置

```json
{ "type": "LAYER_PHYS","id": 0, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":1,
  "permittivity":0,
  "lossTangent":0,
  "isKeepIsland":0,
}|
```

1. type 层物理特性 `LAYER_PHYS`
2. id 层编号
3. ticket 逻辑时钟
4. material 层材质
5. thickness 厚度
6. permittivity 介电常数
7. lossTangent 损耗切线
8. isKeepIsland 内电层是否保留孤岛

```json
{ "type": "LAYER_PHYS","id": 2, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":1,
  "permittivity":0,
  "lossTangent":0,
  "isKeepIsland":0,
}|
```

```json
{ "type": "LAYER_PHYS","id": 15, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":1,
  "permittivity":0,
  "lossTangent":0,
  "isKeepIsland":1,
}|
```

```json
{ "type": "LAYER_PHYS","id": 50, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":10,
  "permittivity":4.5,
  "lossTangent":0.02,
  "isKeepIsland":0,
}|
```

## ACTIVE_LAYER 配置当前激活层

```json
{ "type": "ACTIVE_LAYER", "ticket": 1 }||
{
  "layerId":0,
}|
```

1. type 当前激活层 `ACTIVE_LAYER`
2. ticket 逻辑时钟
3. layerId 层序号

## SILK_OPTS 丝印配置

丝印配置目前主要用于彩色丝印工艺

```json
{ "type": "SILK_OPTS","id": 3, "ticket": 1 }||
{
  "defaultColor":"#ffffff",
  "baseColor":"#000000",
}|
```

1. type 丝印配置：SILK_OPTS
2. id 层编号，层：只有 顶层丝印 与 底层丝印
3. ticket 逻辑时钟
4. defaultColor 默认颜色
5. baseColor 底色

```json
{ "type": "SILK_OPTS","id": 4, "ticket": 1 }||
{
  "defaultColor":"#020202",
  "baseColor":"#aaaaaa",
}|
```

## PREFERENCE 偏好

```json
{ "type": "PREFERENCE", "ticket": 1 }||
{
  "startTrackWidthFollowLast":0,
  "lastTrackWidth":10,
  "startViaSizeFollowLast":0,
  "lastViaInnerDiameter":39.37,
  "lastViaDiameter":78.74,
  "snap":1,
  "routingMode":2,
  "routingCorner":"L45",
  "removeLoop":1,
  "rotatingObject":0,
  "trackFollow":0,
  "stretchTrackMinCorner":1,
  "preferenceConfig":null,
  "realTimeUpdateUnusedLayers":0,
  "unusedPadRange":3,
  "pushVia":"OPTIMIZA_OPEN",
  "pathOptimization4BePushed":0,
  "currentPathOptimization4BePushed":"OPTIMIZA_WEAK",
  "removeCircuitsContainingVias":1,
  "removeAntenna":1,
}|
```

1. type 偏好 `PREFERENCE`
2. ticket 逻辑时钟
3. startTrackWidthFollowLast 起始布线是否跟随上次设置
4. lastTrackWidth 上次布线宽度
5. startViaSizeFollowLast 起始打孔尺寸是否跟随上次设置
6. lastViaInnerDiameter 上次打孔内径
7. lastViaDiameter 上次打孔外径
8. snap 是否自动吸附
9. routingMode 布线模式：`0` 无 `1` 推挤 `2` 环绕 `3` 阻挡
10. routingCorner 布线拐角模式
    - `"L45"` 线条 45 度
    - `"L90"` 线条 90 度
    - `"R45"` 圆弧 45 度
    - `"R90"` 圆弧 90 度
    - `"L"` 线条自由角度
    - `"R"` 圆弧自由角度
11. removeLoop 布线是否自动移除回路
12. rotatingObject 是否单对象旋转
13. trackFollow 导线是否跟随封装移动
14. stretchTrackMinCorner 拉伸导线最小拐角比率（比线宽）
15. preferenceConfig 层堆叠偏好来源
16. realTimeUpdateUnusedLayers 是否自动移除未使用焊盘
17. unusedPadRange 移除未使用焊盘的范围
    1. 全部
    2. 仅焊盘
    3. 仅过孔
18. pushVia 推挤过孔
19. pathOptimization4BePushed 路径优化（单段/整段）
20. currentPathOptimization4BePushed 当前导线路径优化
21. removeCircuitsContainingVias 是否移除有过孔的回路
22. removeAntenna 是否移除天线

## ITEM_ORDER 图元顺序建议

提供给 PCB 图元顺序建议，PCB 可以依照这个信息安排图元顺序，这个信息只能出现一次

```json
{ "type": "ITEM_ORDER",  "ticket": 1 }||{ "ids":["e2", "e1"] }|
```

1. type 图元顺序建议：ITEM_ORDER
2. ticket 逻辑时钟
3. ids 图元编号：有两种编码形式
    1. 普通编号：形式为 `/^[a-z]+\d+$/i`，如 `e1` `e123` 等
    2. 封装实例编号：形式为 `/^[a-z]+\d+[a-z]+\d+$/i`，用于如封装中的丝印等，如 `e1e5` `e12e22` 等

这里说明下为什么叫做 “建议”，因为比如 `e1` 是顶层图元，`e2` 是底层图元，那么

```json
{ "type": "ITEM_ORDER",  "ticket": 1 }||{ "ids":["e2", "e1"] }|
```

默认依然是 `e1` 在上面，除非有什么特殊操作导致底层置顶了
