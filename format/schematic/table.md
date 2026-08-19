# Table Primitive

## TABLE Table

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

1. type table: `TABLE`.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. startX top-left X.
7. startY top-left Y.
8. rowSizes row heights.
9. colSizes column widths.
10. rowLocked row lock.
11. colLocked column lock.
12. rotation rotation angle.

## TABLE_CELL Table Cell

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
	    "fontFamily": "SimSun",
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

1. type table cell: `TABLE_CELL`.
2. id ID, unique within the file.
3. ticket logical clock.
4. tableId table ID.
5. value content.
6. rowIndex row.
7. columnIndex column.
8. rowSpan width (how many columns occupied).
9. colSpan height (how many rows occupied).
10. topStyle top border line style.
11. rightStyle right border line style.
12. bottomStyle bottom border line style.
13. leftStyle left border line style.
14. fontStyle font style.
15. lineHeight line spacing.
