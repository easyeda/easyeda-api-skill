# COMPONENT

-   `COMPONENT` 引用了 Symbol，Symbol 支持多 PART，所以带了 `子库编号` 属性指示具体哪一个，如果是单 PART 则使用默认值 `""`
-   `COMPONENT` 下可绑定许多 `ATTR`，具体的属性行为将由工具定义

### Symbol 类型

| Symbol 类型编号 | Symbol 类型     | 说明                                                                                                                                                                                                                   |
| :-------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2               | Part Symbol     | 普通器件                                                                                                                                                                                                               |
| 17              | Block Symbol    | 层次图符号                                                                                                                                                                                                             |
| 18              | NetFlag Symbol  | 全局网络符号                                                                                                                                                                                                           |
| 19              | NetPort Symbol  | 层次图网络导出符号                                                                                                                                                                                                     |
| 20              | Sheet Symbol    | 专用于提供原理图图纸的重用机制                                                                                                                                                                                         |
| 21              | NoneElec Symbol | 无电气特性符号 NoneElec 是一类不具有 `PIN` 的无电气特性图元<br>也可以用作特殊的图标，版权声明文字等的重用机制<br>NoneElec 全称 None Electrical，不具有电气特性的意思                                                   |
| 22              | Short Symbol    | 短接符 Short Symbol 是一个特殊 Symbol，必须具有两个 `PIN`<br>所有与同一个 `Short Symbol` 的 `PIN` 相连的网络，将在电气特性上对其进行短接<br>比如网络 A 连接到了 PIN1，网络 B 连接到了 PIN2，则表示 A 和 B 是同一个网络 |

### Component 图元

```json
{ "type": "COMPONENT", "id": "UUID", "ticket": 1 }||
{
    "partId": "e176",
    "groupId": 0,
    "positionX": 300,
    "positionY": 200,
    "rotation": 15,
    "isMirror": false,
    "data": {},
}|
```

1. type COMPONENT 标识：COMPONENT
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号
5. groupId 分组编号，不能为 0，没有默认为空
6. zIndex Z 轴高度：所有非属性子元素高度分布在 Z0 ~ Z9 范围内，比如 Z 为 23.554，子元素自动分布在 23.5540 ~ 23.5549 范围内
7. positionX 位置 X
8. positionY 位置 Y
9. rotation 旋转角度：绕 `位置` 旋转
10. isMirror 是否镜像
11. data 纯数据属性：附加信息，用于编辑器内部的一些逻辑

Component 所引用的 Symbol 图元一定是按照如下顺序执行的变换

1. 按照 `旋转角度` 绕原点（0,0）逆时针旋转
2. 如果 `是否镜像` 为 `1`，则绕原点（0,0）所在的 Y 轴进行水平镜像
3. 根据 `位置` 进行平移

或者可以理解成如下等价的变换（但是实现更繁琐一些）

1. 根据 `位置` 进行平移
2. 按照 `旋转角度` 绕 `位置` 逆时针旋转
3. 如果 `是否镜像` 为 `1`，则绕 `位置` 所在的 Y 轴进行水平镜像

```json
{ "type": "ATTR", "id": "e187", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Device", "value":"device-uuid-1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

Device uuid，与 project.json 里 devices 对应的文件名称一致

```json
{ "type": "ATTR", "id": "e188", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Symbol", "value":"symbol-uuid-1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

`COMPONENT` 内的 `ATTR` 会对模板内同名属性覆盖，覆盖 Symbol 后会影响此器件对符号的绑定

```json
{ "type": "ATTR", "id": "e188", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Footprint", "value":"footprint-uuid-1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

`COMPONENT` 内的 `ATTR` 会对模板内同名属性覆盖，覆盖 Footprint 后会影响此器件对封装的绑定

```json
{ "type": "ATTR", "id": "e188", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Designator", "value":"U1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

`COMPONENT` 内的 `ATTR` 会对模板内同名属性覆盖

```json
{ "type": "ATTR", "id": "e180", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176e5", "key":"NUMBER", "value":"1", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

`PIN` 属性覆盖的方式关键在 `ATTR` 的 `隶属编号` 上
编号分两部分，例如 `e176e5`，其中 `e176` 为 `COMPONENT` 的编号，`e5` 为在模板内的 `PIN` 编号
