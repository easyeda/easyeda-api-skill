# Shape Primitives

## RECT Rectangle

A rectangle is defined by two diagonal points, and its rotation is around `point1`.

```json
{ "type": "RECT", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 7.35,
    "dotX1": 340,
    "dotY1": 210,
    "dotX2": 100,
    "dotY2": 200,
    "radiusX": 40,
    "radiusY": 30,
    "rotation": 90,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type primitive name: RECT.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. dotX1 point 1 X.
9. dotY1 point 1 Y.
10. dotX2 point 2 X.
11. dotY2 point 2 Y.
12. radiusX corner radius X: `0` means no rounding.
13. radiusY corner radius Y: `0` means no rounding.
14. rotation rotation angle, around `point1`.
15. strokeColor color, null for default.
16. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
17. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
18. strokeWidth width, null for default.
19. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.

## POLY Polygon

```json
{ "type": "POLY", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 7.35,
    "points": [390, 260, 450, 300, 560, 280, 540, 320],
    "closed": false,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type primitive name: POLY.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. points point set coordinates: X Y X Y X Y ...
9. closed whether to auto-close: if auto-closed, the end point will automatically connect to the start point.
10. strokeColor color, null for default.
11. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
12. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
13. strokeWidth width, null for default.
14. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.

## CIRCLE Circle

```json
{ "type": "CIRCLE", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 2.332,
    "centerX": 430,
    "centerY": 200,
    "radius": 21,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type primitive name: CIRCLE.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. centerX circle center X.
9. centerY circle center Y.
10. radius radius r.
11. strokeColor color, null for default.
12. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
13. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
14. strokeWidth width, null for default.
15. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.

## ARC Arc

```json
{ "type": "ARC", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 0.8689,
    "startX": -10,
    "startY": 0,
    "referX": 0,
    "referY": 10,
    "endX": 10,
    "endY": 0,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type primitive name: ARC.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. startX start X.
9. startY start Y.
10. referX reference X.
11. referY reference Y.
12. endX end X.
13. endY end Y.
14. strokeColor color, null for default.
15. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
16. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
17. strokeWidth width, null for default.
18. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.

## BEZIER Cubic Bezier Curve

```json
{ "type": "BEZIER", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 2.1002,
    "controls": [10, 10, 30, 20, 100, 30, 50, 70],
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type primitive name: BEZIER.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. controls control points: X1 Y1 X2 Y2 X3 Y3 X4 Y4 ...
9. strokeColor color, null for default.
10. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
11. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
12. strokeWidth width, null for default.
13. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.

## ELLIPSE Ellipse

```json
{ "type": "ELLIPSE", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 6.23,
    "centerX": 670,
    "centerY": 325,
    "radiusX": 220,
    "radiusY": 20,
    "rotation": 0,
    "strokeColor": null,
    "strokeStyle": 0,
    "fillColor": "",
    "strokeWidth": null,
    "fillStyle": 1,
}|
```

1. type primitive name: ELLIPSE.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. centerX center cx.
9. centerY center cy.
10. radiusX horizontal radius rx.
11. radiusY vertical radius ry.
12. rotation rotation angle rot.
13. strokeColor color, null for default.
14. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
15. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
16. strokeWidth width, null for default.
17. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.
