# 基础图元格式

## NET 配置网络信息

网络信息和 AD 的设计有区别

-   AD 这里是必选的
-   本格式只是需要有特殊 `网络类型` 和 `网络颜色` 才填写上去
    设计差异的原因在于是否有一个专门的网络设置界面，会列出所有网络去设置

```json
{ "type": "NET","id": "A", "ticket": 1 }||
{
  "netType":"High Speed",
  "specialColor":"#666666",
  "hideRetLine":0,
  "differentialName":"AASDF",
  "isPositiveNet":1,
  "equalLengthGroupName":"ABC",
}|
```

1. type 网络配置 `NET`
2. id 唯一标识，网络名称
3. ticket 逻辑时钟
4. netType 网络类型：`null` 为无类型
5. specialColor 特殊颜色：`null` 为无特殊颜色
6. hideRetLine 是否隐藏飞线
7. differentialName 差分对名称：`null` 为非差分对
8. isPositiveNet 是否差分对正极
9. equalLengthGroupName 等长组名称：`null` 为非等长组

```json
{ "type": "NET","id": "B", "ticket": 1 }||
{
  "netType":null,
  "specialColor":"#666666",
  "hideRetLine":1,
  "differentialName":"AASDF",
  "isPositiveNet":0,
  "equalLengthGroupName":"ABC",
}|
```

```json
{ "type": "NET","id": "C", "ticket": 1 }||
{
  "netType":"High Speed",
  "specialColor":null,
  "hideRetLine":1,
  "differentialName":null,
  "isPositiveNet":0,
  "equalLengthGroupName":null,
}|
```

## PRIMITIVE 图元配置

```json
{ "type": "PRIMITIVE","id": "VIA", "ticket": 1 }||
{
  "display":1,
  "pick":0,
}|
```

1. type 图元配置 `PRIMITIVE`
2. id 唯一标识，图元名称
3. ticket 逻辑时钟
4. display 是否显示
5. pick 是否可拾取

```json
{ "type": "PRIMITIVE","id": "PAD", "ticket": 1 }||
{
  "display":0,
  "pick":1,
}|
```

## GROUP 分组配置

通过分组配置，给每个组一个名称，如果无名称，由 EDA 决定如何显示默认组名

```json
{ "type": "GROUP","id": "2", "ticket": 1 }||
{
  "groupName":"ABCD",
}|
```

1. type 分组配置 `GROUP`
2. id 分组编号
3. ticket 逻辑时钟
4. groupName 名称

```json
{ "type": "GROUP","id": "5", "ticket": 1 }||
{
  "groupName":"中文名称",
}|
```

## CONNECT 图元关联

图元关联用于表达一些图元的内部组合逻辑，例如

-   泪滴与 `LINE` `ARC` `PAD` `VIA` 的联系
-   焊盘与其相关的引脚 3D 外形 `FILL` 的联系
-   3D 外壳中 `CREASE` 与 `BOSS` `SHELL_ENTITY` 的联系
-   PCB 针对封装内图元的覆盖

只支持表达一对多的关系

```json
{ "type": "CONNECT","id": "e3", "ticket": 1 }||{ "relatedIds":["e15", "e18", "e100"] }|
```

1. type 图元关联 `CONNECT`
2. id 主图元编号
3. ticket 逻辑时钟
4. relatedIds 关联的图元编号

多对多的关系可以用多个表达，暂时没有对应场景

```json
{ "type": "CONNECT","id": "e4", "ticket": 1 }||{ "relatedIds":["e5", "e6"] }|
```

```json
{ "type": "CONNECT","id": "e5", "ticket": 1 }||{ "relatedIds":["e4", "e6"] }|
```

```json
{ "type": "CONNECT","id": "e6", "ticket": 1 }||{ "relatedIds":["e4", "e5"] }|
```

PCB 中针对封装内图元的覆盖，使用形如 `/^[a-z]+\d+[a-z]+\d+$/i` 的形式将封装和里面图元 ID 拼一起来引用，表达如下

```json
["DOCTYPE", "PCB", "1.0"]
["COMPONENT", "e13", 5, 1, ...]
["VIA", "e13e20", 0, "GND", "asdf", ....]
["PAD", "e13e25", 1, "GND", 0, "1", ....]
["CONNECT", "e13", ["e13e20", "e13e25"]]
```

封装内容如下

```json
["DOCTYPE", "FOOTPRINT", "1.0"]
["VIA", "e20", 0, "GND", "sss", ....]
["PAD", "e25", 1, "GND", 0, "3", ....]
```

## PROP 附加图元属性

有一些图元属性非必须表达，且相对通用，则用 `PROP` 辅助描述

```json
{ "type": "PROP", "id":"UUID", "ticket": 1 }||{ "color":"#22ee44" }|
```

1. type 附加图元属性：PROP
1. id 被附加的图元编号：有两种编码形式
    1. 普通编号：形式为 `/^[a-z]+\d+$/i`，如 `e1` `e123` 等
    1. 封装实例编号：形式为 `/^[a-z]+\d+[a-z]+\d+$/i`，用于如封装中的丝印等，如 `e1e5` `e12e22` 等
1. color 特殊颜色

```json
{ "type": "PROP", "id":"e7e25", "ticket": 1 }||{ "color":"#22ee44" }|
```

如果要覆盖封装内的图元，则采用此复合编号的形式去描述

## EQLEN_GRP

```json
{ "type": "EQLEN_GRP", "id":"UUID", "ticket": 1 }||
{
  "name":"equal length pad group 2",
  "sort":1.97,
  "pads":
    [
        ["U1:1", "U2:3"],
        ["U1:2", "U1:a"]
    ],
}|
```

1. type 等长组：`EQLEN_GRP`
2. id 唯一编号
3. ticket 逻辑时钟
4. name 等长组名称：全工程唯一
5. sort 排序
6. pads 用 `位号:焊盘编号` 标识焊盘的数组
