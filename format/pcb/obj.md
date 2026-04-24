# OBJ 二进制内嵌对象

将文件等数据编码到如下图元，以内嵌于图页上的图片和文件，可作为附件下载，以及直接显示

```json
{ "type": "OBJ", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":5.286,
  "layerId":15,
  "fileName":"a.png",
  "startX":200,
  "startY":300,
  "width":10,
  "height":20,
  "angle":0,
  "mirror":1,
  "path":"blob:1234ade2f",
}|
["OBJ", "e662", 0, 1, 5.286, 15, "a.png", 200, 300, 10, 20, 0, 1, "blob:1234ade2f"]
```

1. type 二进制内嵌对象标识：OBJ
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. layerId 层
9. fileName 文件名
10. startX 左上 X
11. startY 左上 Y
12. width 宽
13. height 高
14. angle 旋转角度，绕 `左上` 点
15. mirror 原始图片是否水平镜像，镜像以原始图片 BBox 中点进行水平镜像
16. path 二进制数据
    1. 一般格式，与 `Data Urls` 完全兼容 `data:[<mediatype>][;base64],<data>`
        - 如 `data:image/png;base64,asdfasdfwer`
    1. BLOB 引用格式 `blob:hashid`
