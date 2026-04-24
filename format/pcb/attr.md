# ATTR 属性

属性用以描述 PCB 或者 FOOTPRINT 有可能需要在图上显示的属性

```json
{ "type": "ATTR", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.072,
  "parentId":"",
  "layerId":1,
  "positionX":200,
  "positionY":150,
  "key":"DESIGNATOR",
  "value":"U1",
  "keyVisible":0,
  "valueVisible":1,
  "fontFamily":"宋体",
  "fontSize":50,
  "strokeWidth":10,
  "bold":0,
  "italic":0,
  "origin":5,
  "angle":15,
  "reverse":1,
  "reverseExpansion":0,
  "mirror":1,
  "width":100,
  "height":200,
  "path":["复杂多边形"],
}|
```

1. type 属性 `ATTR`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. parentId 隶属编号，留空表示当前块级图元
9. layerId 层
10. positionX 位置 X：未显示过的属性位置固定为 null
11. positionY 位置 Y：未显示过的属性位置固定为 null
12. key Key
13. value Value
14. keyVisible 是否显示 Key
15. valueVisible 是否显示 Value
16. fontFamily 字体名称
17. fontSize 字号
18. strokeWidth 粗细
19. bold 是否加粗
20. italic 是否斜体
21. origin 对齐模式 `0` 左顶 `1` 中顶 `2` 右顶 `3` 左中 `4` 中中 `5` 右中 `6` 左底 `7` 中底 `8` 右底
22. angle 旋转角度
23. reverse 是否反相扩展
24. reverseExpansion 反相扩展尺寸：反相扩展区域的尺寸，支持负数
25. mirror 是否镜像，一般来说，当一个文字出现在底层，这里也需要相应调整成 `1`
26. width 高，没有则为 null
27. height 宽，没有则为 null
28. path 复杂多边形数组，没有则为 null
