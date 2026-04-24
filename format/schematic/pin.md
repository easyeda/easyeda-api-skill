# PIN 标号

![image](/storage/images/cn/format/schematic/pin/pin.png)

如图所示

-   所有 PIN 的 `位置 X/Y` 都是离黑色矩形最远的那个端点
-   PIN 1 为 0 度旋转方向，引脚样式 0
-   PIN 2 为 90 度旋转方向，引脚样式 1
-   PIN 3 为 180 度旋转方向，引脚样式 2
-   PIN 4 为 270 度旋转方向，引脚样式 3

```json
{ "type": "PIN", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 2.8772,
    "display": true,
    "electric": 0,
    "positionX": 350,
    "positionY": 170,
    "length": 20,
    "rotation": 0,
    "color": "#880000",
    "pinShape": 3,
}|
```

1. type 图元名称：PIN
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. display 是否显示
9. electric 电气特性：0 UNKNOWN 1 INPUT 2 OUTPUT 3 BI
10. positionX 位置 X
11. positionY 位置 Y
12. length 引脚长度
13. rotation 旋转角度：0 90 180 270
14. color 引脚颜色
15. pinShape 引脚样式：1 Clock 2 DOT，可支持按位或运算，比如 3 = 1 | 2
    举例说明：`0` 无附加 `1` Clock `2` DOT `3` Clock & DOT

```json
{ "type": "ATTR", "id": "e184", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e102", "key":"NAME", "value":"VCC", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

PIN 必须具有 NAME 属性

```json
{ "type": "ATTR", "id": "e185", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e102", "key":"NUMBER", "value":"1", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

PIN 必须具有 NUMBER 属性
