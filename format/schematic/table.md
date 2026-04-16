# 表格图元

## TABLE 表格

```json
{ "type": "TABLE", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "startX": 30,
    "startY": 40,
    "rowSizes": [32, 40, 32, 32, 25],
    "colSizes": [33, 33, 44, 44, 11],
    "rowLocked": [0, 0, 1, 0, 0],
	"colLocked": [0, 1, 0, 0, 0],
    "rotation": 0,
}|
```

1. type 表格：`TABLE`
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. partId 子库编号，符号页专属，原理图忽略该字段
5. groupId 分组编号，不能为 0，没有默认为空
6. startX 左上角 X
7. startY 左上角 Y
8. rowSizes 行高
9. colSizes 列宽
10. rowLocked 行锁定
11. colLocked 列锁定
12. rotation 旋转角度

## TABEL_CELL 表格单元格

```json
{ "type": "TABLE", "id": "UUID", "ticket": 1 }||
{
    "tableId": "tableId",
    "value": "abc\ndef\nghi",
    "rowIndex": 2,
    "columnIndex": 5,
    "rowSpan": 1,
    "colSpan": 3,
	"topStyle": {
        "strokeColor": null,
	    "strokeStyle": 0,
	    "fillColor": "",
	    "strokeWidth": null,
	    "fillStyle": 1,
    },
    "rightStyle": {
        "strokeColor": null,
	    "strokeStyle": 0,
	    "fillColor": "",
	    "strokeWidth": null,
	    "fillStyle": 1,
    },
    "bottomStyle": {
        "strokeColor": null,
	    "strokeStyle": 0,
	    "fillColor": "",
	    "strokeWidth": null,
	    "fillStyle": 1,
    },
    "leftStyle": {
        "strokeColor": null,
	    "strokeStyle": 0,
	    "fillColor": "",
	    "strokeWidth": null,
	    "fillStyle": 1,
    },
    "leftStyle": {
        "strokeColor": null,
	    "strokeStyle": 0,
	    "fillColor": "",
	    "strokeWidth": null,
	    "fillStyle": 1,
    },
    "fontStyle": {
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
    },
    "lineHeight": 12,
}|
```

1. type 表格单元格：`TABLE_CELL`
2. id 编号：文件内唯一
3. ticket 逻辑时钟
4. tableId 表格编号
5. value 内容
6. rowIndex 行
7. columnIndex 列
8. rowSpan 宽度（占多少列）
9. colSpan 高度（占多少行）
10. topStyle 边框线形样式（上）
11. rightStyle 边框线形样式（右）
12. bottomStyle 边框线形样式（下）
13. leftStyle 边框线形样式（左）
14. fontStyle 字体样式
15. lineHeight 行间距
