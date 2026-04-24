# 拼版

```json
{ "type": "PANELIZE", "ticket": 1 }||
{
  "on":1,
  "row":2,
  "column":3,
  "rowSpacing":5.5,
  "columnSpacing":6.1,
  "onlyOutline":1,
}|
```

1. type 拼版 `PANELIZE`
2. ticket 逻辑时钟
3. on 是否启用
4. row 行数
5. column 列数
6. rowSpacing 行距
7. columnSpacing 列距
8. onlyOutline 是否只拼边框

```json
{ "type": "PANELIZE_STAMP", "ticket": 1 }||
{
  "direction":1,
  "on":1,
  "stampHoleGroupQuantity":3,
  "stampHoleDiameter":8,
  "stampHoleQuantityPerGroup":0,
  "stampHoleSpacing":1,
}|
```

1. type 邮票孔参数：`PANELIZE_STAMP`
2. ticket 逻辑时钟
3. direction 方向：`0` 水平 `1` 垂直
4. on 是否启用（不启用则使用 V-CUT）
5. stampHoleGroupQuantity 邮票孔组数
6. stampHoleDiameter 邮票孔直径
7. stampHoleQuantityPerGroup 邮票孔每组数量
8. stampHoleSpacing 邮票孔间距

```json
{ "type": "PANELIZE_SIDE", "ticket": 1 }||
{
  "direction":0,
  "on":1,
  "sideHeight":5,
  "positionHoleDiameter":3,
  "markDiameter":2,
  "markExpansion":1,
}|
```

1. type 工艺边参数：`PANELIZE_SIDE`
2. ticket 逻辑时钟
3. direction 方向：`0` 水平 `1` 垂直
4. on 是否启用（不启用则不使用工艺边）
5. sideHeight 工艺边高度
6. positionHoleDiameter 定位孔直径（`0` 表示无定位孔）
7. markDiameter Mark 点直径（`0` 表示不启用 Mark 点）
8. markExpansion Mark 点阻焊扩展
