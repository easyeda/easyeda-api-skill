# 连线图元

## WIRE 导线

```json
{ "type": "WIRE", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 0.235,
    "dots": [
        [310, 550, 400, 550, 400, 460],
        [480, 460, 400, 460],
        [400, 330, 400, 460]
    ],
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：WIRE
2. id 唯一编号
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. dots 坐标：分成多段线，每段都是连续的一组 X1 Y1 X2 Y2 X3 Y3 ... 描述的线
9. strokeColor 颜色，null 为默认
10. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
11. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
12. strokeWidth 宽度，null 为默认
13. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线

```json
{ "type": "ATTR", "id": "e200", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e271", "key":"NET", "value":"GND", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

导线必须带上 NET 属性标识网络名称

## BUS 总线

```json
{ "type": "BUS", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 0.235,
    "dots": [
        [310, 550, 400, 550, 400, 460],
        [480, 460, 400, 460],
        [400, 330, 400, 460]
    ],
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type 图元名称：BUS
2. id 唯一编号
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. dots 坐标：分成多段线，每段都是连续的一组 X1 Y1 X2 Y2 X3 Y3 ... 描述的线
9. strokeColor 颜色，null 为默认
10. strokeStyle 样式：0 实线 1 短划线 2 点线 3 点划线
11. fillColor 填充颜色："" 不填充，填充自动闭合起始点和结束点
12. strokeWidth 宽度，null 为默认
13. fillStyle 填充样式：0 无 1 实心 2 网格 3 横线 4 竖线 5 菱形 6 左斜线 7 右斜线

```json
{ "type": "ATTR", "id": "e200", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e271", "key":"NET", "value":"A[1:5]", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

总线必须带上 NET 属性标识网络名称

## BUSENTRY 总线接入标识

![image](/storage/images/cn/format/schematic/wire/ripper.png)

-   如图所示
    -   浅黄色为 `BUS`
    -   绿色圆角菱形，以及其向右延伸的一个类似 `PIN` 的图形，为 `BUSENTRY`
    -   蓝色为 `Wire`
-   端点为 `WIRE` 和 `BUSENTRY` 类似 `PIN` 的最右侧端点接触的那个端点的坐标
-   因为 `WIRE` 和 `BUS` 可以是任意角度接入的，所以需要指定其旋转方向以和 `WIRE` 的接入方向一致，例如图内是 180 度
-   `BUSENTRY` 固定一格长
-   `BUSENTRY` 具体的图形，由 XTools 最终解释，不在格式内限定

```json
{ "type": "BUSENTRY", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 0.235,
    "busGroupId": 4,
    "order": 4,
    "pointX": 500,
    "pointY": 600,
    "rotation": 90,
}|
```

1. type 图元名称：BUSENTRY
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. busGroupId 顺序编号：在隶属的 BUS 里的顺序编号，可重复
   比如 BUS 网络为 A[2:3]B[7:6] 可以具有 0 1 2 3 0 1 2 3 ... 一系列顺序编号的 BUSENTRY，其中
   0 一定代表分支 A2B7
   1 一定代表分支 A2B6
   2 一定代表分支 A3B7
   3 一定代表分支 A3B6
9. pointX 端点 X
10. pointY 端点 Y
11. rotation 旋转角度：绕 `端点` 旋转
