# Wire Primitives

## WIRE Wire

```json
{ "type": "WIRE", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
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

1. type primitive name: WIRE.
2. id unique ID.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. dots coordinates: divided into multiple segments, each segment is a continuous set of X1 Y1 X2 Y2 X3 Y3 ... describing a line.
9. strokeColor color, null for default.
10. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
11. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
12. strokeWidth width, null for default.
13. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.

```json
{ "type": "ATTR", "id": "e200", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e271", "key":"NET", "value":"GND", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

Wires must carry the NET attribute to identify the net name.

## BUS Bus

```json
{ "type": "BUS", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
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

1. type primitive name: BUS.
2. id unique ID.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. dots coordinates: divided into multiple segments, each segment is a continuous set of X1 Y1 X2 Y2 X3 Y3 ... describing a line.
9. strokeColor color, null for default.
10. strokeStyle style: 0 solid, 1 dashed, 2 dotted, 3 dash-dot.
11. fillColor fill color: `""` no fill; if filled, start and end points are automatically closed.
12. strokeWidth width, null for default.
13. fillStyle fill style: 0 none, 1 solid, 2 grid, 3 horizontal line, 4 vertical line, 5 diamond, 6 left slash, 7 right slash.

```json
{ "type": "ATTR", "id": "e200", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e271", "key":"NET", "value":"A[1:5]", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

Buses must carry the NET attribute to identify the net name.

## BUSENTRY Bus Entry Marker

![image](/storage/images/cn/format/schematic/wire/ripper.png)

As shown in the figure:
-   Light yellow is `BUS`.
-   The green rounded rhombus and the PIN-like shape extending to the right are `BUSENTRY`.
-   Blue is `Wire`.
-   The endpoint is the coordinate of the endpoint where `WIRE` and `BUSENTRY` (similar to `PIN`) touch on the far right.
-   Because `WIRE` and `BUS` can connect at any angle, the rotation direction must be specified to match the incoming direction of `WIRE`. In the figure, it is 180 degrees.
-   `BUSENTRY` has a fixed one-grid length.
-   The specific shape of `BUSENTRY` is ultimately interpreted by XTools and is not constrained by the format.

```json
{ "type": "BUSENTRY", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 0.235,
    "busGroupId": 4,
    "order": 4,
    "pointX": 500,
    "pointY": 600,
    "rotation": 90,
}|
```

1. type primitive name: BUSENTRY.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. busGroupId sequence number: sequence within the affiliated BUS, may repeat.
   For example, a BUS net of A[2:3]B[7:6] can have a series of BUSENTRYs numbered 0 1 2 3 0 1 2 3 ..., where
   0 always represents branch A2B7,
   1 always represents branch A2B6,
   2 always represents branch A3B7,
   3 always represents branch A3B6.
9. pointX endpoint X.
10. pointY endpoint Y.
11. rotation rotation angle, around `endpoint`.
