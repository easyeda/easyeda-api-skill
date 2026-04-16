# 结构图元

## PART 子库

`PART` 只有符号页才有
如果是单 Part 器件也必须有一个 `PART`，子库编号留空 `""`

```json
{ "type": "PART","id":"partId", "ticket": 1 }||{"BBOX": [-10, -20, 10, 20]}|
```

1. type 子库图元：PART
2. id 子库编号
3. ticket 逻辑时钟
4. 内部参数：Key-Value
    - 预留 `BBOX` 为能刚好框住 PART 下所有图元的矩形包围盒任意对角的两个点
      **XTools 核心逻辑不应关注这个属性**
    - 其它为编辑器附加信息，用于数据分析等功能，可选

符号页的所有图元带上对应的子库编号，表示归属于该子库

```json
{ "type": "WIRE", "id": "UUID", "ticket": 1 }||
{
    "partId": "partId", // 符号图元都带上该子库id
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

## GROUP 分组控制

```json
{ "type": "GROUP", "id": "UUID", "ticket": 1 }||{ "groupId": "1", "parentId": "0", "title": "Logo" }|
```

1. type 分组控制 `GROUP`
2. id 唯一编号
3. ticket 逻辑时钟
4. groupId 分组编号，不能为 0
5. parentId 父级分组编号，为 0 则表示无父级
6. title 分组名称，无名称为空字符串 `""`
