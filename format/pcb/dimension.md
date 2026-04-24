# DIMENSION 尺寸工具集

```json
{ "type": "DIMENSION", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":2.221,
  "type":"RADIUS",
  "layerId":3,
  "unit":"mm",
  "strokeWidth":0.5,
  "precision":3,
  "textFollow":1,
  "coords": [100 200 300 400 400 400],
}|
["DIMENSION", "e101", 0, 1, 2.221, "RADIUS", 3, "mm", 0.5, 3, 1, [100 200 300 400 400 400]]
```

1. type 尺寸工具 `DIMENSION`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. type 尺寸类型： `RADIUS` 半径 `LENGTH` 长度 `ANGLE` 角度
9. layerId 层
10. unit 单位 `mm` `cm` `inch` `mil`
11. strokeWidth 线宽
12. precision 精度
13. textFollow 文字是否跟随：`1` 工具自动决定文字的位置 `0` 永远采用 `ATTR` 的位置
14. coords 坐标集 X1 Y1 X2 Y2 X3 Y3 ... 不同尺寸类型对坐标有不同的定义

```json
["ATTR", "e102", 0, "e101", 1, 200, 150, "VALUE", "1234mm", 0, 1, "宋体", 50, 10, 0, 0, 0, 2, 15, 1, 1]
```

`DIMENSION` 需要附带一个 Key 为 `VALUE` 的属性，表达尺寸工具的文字部分，EDA 需要忽略其不需要的属性，例如 `是否显示 Key` `是否显示 Value`

### RADIUS 半径工具

坐标集第一个坐标为和 ARC 接触的端点，最后一个坐标为默认显示文字的端点，如下图

![图片](/storage/images/cn/format/pcb/dimension/dim_radius.png)

### LENGTH 长度工具

坐标集只需要具有四个点，分别如下图

![图片](/storage/images/cn/format/pcb/dimension/dim_length.png)

### ANGLE 角度工具

坐标集需要 3 个点，分别如下图

![图片](/storage/images/cn/format/pcb/dimension/dim_angle.png)
