# 分区格式

PCB 引入了分区设计，分区设计需要标记大量元素的分区信息，所以采用了如下格式设计

## PARTITION 分区图元

```json
{ "type": "LAYER_PHYS","id": "UUID", "ticket": 1 }||
{
  "name":"分区1",
  "fileUuid":"SUB-PCB-UUID",
  "path":"复杂多边形",
}|
```

1. type 分区：`PARTITION`
2. id 图元编号
3. ticket 逻辑时钟
4. name 分区名称
5. fileUuid 子图 UUID
6. path 分区形状

所有归属于分区的图元都得带上对应的分区图元编号

```json
{ "type": "VIA", "id":"viaUuid", "ticket": 1 }||
{
  "partitionId":"partitionId",// 带上该id,表示归属对应分区
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
