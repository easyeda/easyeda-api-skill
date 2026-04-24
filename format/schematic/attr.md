# ATTR 属性

ATTR 是一个较为通用的图元，其含义为

1. 表达一个由 键(KEY)——值(VALUE) 组成的的多个属性中的一个
1. 可以在画布上显示，并控制显示哪些内容，以及样式位置等

当隶属编号没有指定时，则默认隶属于当前块级图元上

```json
{ "type": "ATTR", "id": "UUID", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": false, "zIndex": 0.1, "parentId": "UUID", "key":"string", "value":"string", "keyVisible":false, "valueVisible":false, "positionX":200, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

1. type 属性名称：ATTR
2. id 唯一编号
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. parentId 隶属编号：隶属于哪个图元，`""` 表示属于当前块 _默认块是文件_
9. key 属性 Key
10. value 属性 Value
11. keyVisible 是否显示 Key
12. valueVisible 是否显示 Value
13. positionX 位置 X：未显示过的属性位置固定为 `null`
14. positionY 位置 Y：未显示过的属性位置固定为 `null`
15. rotation 旋转角度，绕 `位置` 旋转
16. color 颜色
17. fillColor 背景色
18. fontFamily 字体名称
19. fontSize 字体大小，与坐标等单位相同
20. strikeout 是否加删除线
21. underline 是否加下划线
22. italic 是否斜体
23. fontWeight 是否加粗
24. vAlign 垂直对齐模式：0 顶部对齐 1 中间对齐 2 底部对齐
25. hAlign 水平对齐模式：0 左对齐 1 居中 2 右对齐

当属性 Value 中含有 `~` 字符时，XTools 需要实现从开始到结束，遇到第奇数个 `~` 开始文字带上划线，遇到第偶数个 `~` 结束文字带上划线
