# 文字体系

## STRING 文字

当 `STRING` 在信号层时，在 DRC 视角下，为

1. 无网络的
1. `位置` 为 0,0， `旋转角度` 为 0， `是否镜像` 为 0 的 BBox
1. 进行 `位置` `旋转角度` `是否镜像` 变换后的矩形区域

```json
{ "type": "STRING", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.2693,
  "layerId":1,
  "positionX":300,
  "positionY":600,
  "text":"我人人有的的和我",
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
["STRING", "e100", 0, 1, 0.2693, 1, 300, 600, "我人人有的的和我", "宋体", 50, 10, 0, 0, 5, 15, 1, 0, 1]
```

1. type 文字 `STRING`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. layerId 层
9. positionX 位置 X
10. positionY 位置 Y
11. text 内容
12. fontFamily 字体名称
13. fontSize 字号
14. strokeWidth 粗细
15. bold 是否加粗
16. italic 是否斜体
17. origin 对齐模式 `0` 左顶 `1` 中顶 `2` 右顶 `3` 左中 `4` 中中 `5` 右中 `6` 左底 `7` 中底 `8` 右底
18. angle 旋转角度
19. reverse 是否反相扩展
20. expansion 反相扩展尺寸：反相扩展区域的尺寸，支持负数
21. mirror 是否镜像，一般来说，当一个文字出现在底层，这里也需要相应调整成 `1`
22. width 高，没有则为 null
23. height 宽，没有则为 null
24. path 复杂多边形数组，没有则为 null
