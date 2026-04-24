# OBJ 二进制内嵌对象

内嵌于图页上的图片和文件等数据，可作为附件下载，以及直接显示（EDA 自行决定，不在格式内要求）

```json
{ "type": "OBJ", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 9.0876,
    "fileName": "a.txt",
    "startX": 200,
    "startY": 300,
    "width": 10,
    "height": 20,
    "rotation": 0,
	"isMirror": false,
	"content": "data:text/plain;base64,MTIzNA==",
}|
```

1. type 二进制内嵌对象标识：OBJ
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. locked 是否锁定
7. zIndex Z 轴高度
8. fileName 文件名
9. startX 左上角 X
10. startY 左上角 Y
11. width 宽
12. height 高
13. rotation 旋转角度：绕`左上角`旋转
14. isMirror 是否镜像
15. content 二进制数据，有两种模式
    1. 一般格式，遵循 `Data Urls` 规范 `data:[<mediatype>][;base64],<data>`
        - 如 `data:image/png;base64,asdfasdfwer`
        - 如 `data:text/html,<html></html>`
    2. BLOB 引用模式，`blob:hashid`
