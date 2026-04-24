# TEXT 文本

```json
{ "type": "TEXT", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 4.12,
    "positionX": 109,
    "positionY": 804.5,
    "rotation": 0,
    "value": "任意字符doukeyi@!@#$",
    "color": "#fff",
    "fillColor": "#fff",
    "fontFamily": "宋体",
    "fontSize": 12,
    "strikeout": false,
    "underline": false,
    "italic": false,
    "fontWeight": false,
    "vAlign": 0 ,
    "hAlign": 2,
}|
```

1. type 图元名称：TEXT
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. positionX 文本坐标 X
9. positionY 文本坐标 Y
10. rotation 旋转角度，绕 文本坐标 旋转
11. value 文本内容：任意字符
12. color 颜色
13. fillColor 背景色
14. fontFamily 字体名称
15. fontSize 字体大小，与坐标等单位相同
16. strikeout 是否加删除线
17. underline 是否加下划线
18. italic 是否斜体
19. fontWeight 是否加粗
20. vAlign 垂直对齐模式：0 顶部对齐 1 中间对齐 2 底部对齐
21. hAlign 水平对齐模式：0 左对齐 1 居中 2 右对齐
