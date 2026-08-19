# Shape Primitives

## LINE Line

```json
{ "type": "LINE", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":9.223,
  "netName":"GND",
  "layerId":1,
  "startX":100,
  "startY":200,
  "endX":400,
  "endY":300,
  "width":0.7,
}|
```

1. type line `LINE`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. netName net.
9. layerId layer.
10. startX start X.
11. startY start Y.
12. endX end X.
13. endY end Y.
14. width line width.

## ARC/CARC Arc Line

The arc borrows Eagle's mathematical model, described based on `start` and `end`.

```json
{ "type": "ARC", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":2.866,
  "netName":"GND",
  "layerId":1,
  "startX":100,
  "startY":200,
  "endX":300,
  "endY":400,
  "angle":-170,
  "width":10,
}|
```

1. type arc line.
    - `ARC` two-point interaction mode.
    - `CARC` center-arc interaction mode.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. netName net.
9. layerId layer.
10. startX start X.
11. startY start Y.
12. endX end X.
13. endY end Y.
14. angle arc angle, positive counter-clockwise, negative clockwise.
15. width line width.

## Polygon System

SVG's path is an excellent abstraction for polygons.
However, because relative position and other features are not needed in PCB, and a more convenient parsing method can be designed conditionally, a polygon expression similar to SVG path was created.
Within the polygon system, `POLY`, `REGION`, and `POUR` support mutual conversion.

### Single Polygon Definition

A single polygon is a region described by an uninterrupted line whose start and end coincide. If start and end do not coincide, they are automatically closed.

```json
[300, 200, "L", 400, 200, "ARC", 400, 220, 15, "C", 200, 500, 400, 300, 100, 100]
```

```json
["R", 100, 200, 300, 300, 0]
```

```json
["CIRCLE", 100, 200, 5, 1]
```

#### L Line Mode

`X Y L X Y X Y ...` mode is line mode. All coordinates are connected by straight lines.

#### ARC/CARC Arc Mode

`startX startY ARC angle endX endY` mode is arc mode.

-   startX/startY start coordinates.
-   angle: arc angle, positive counter-clockwise, negative clockwise.
-   endX/endY end coordinates.

`startX startY CARC angle endX endY` center-arc interaction mode.

#### C Cubic Bezier Mode

`X1 Y1 C X2 Y2 X3 Y3 X4 Y4 ...` mode is cubic Bezier mode. All coordinates are control points.

#### R Rectangle Mode

`R X Y width height rot isCCW round` rectangle mode is independent from other modes.

-   X/Y: top-left coordinate.
-   width: width.
-   height: height.
-   rot: rotation angle.
-   isCCW: whether counter-clockwise.
-   round: corner radius.

#### CIRCLE Circle Mode

`CIRCLE cx cy r isCCW` circle mode is independent from other modes.

-   cx/cy: center point coordinates.
-   r: radius.
-   isCCW: whether counter-clockwise.

### Complex Polygon Definition

```json
[[single polygon 1: outer frame], [single polygon 2: inner hole]]
```

A complex polygon can contain multiple single polygons. The first polygon is clockwise and represents the outer frame; all subsequent polygons are counter-clockwise and represent inner holes.

## POLY Polyline

The polyline is similar to `LINE` and `ARC`, but it preserves the concept of a continuous single line drawn at one time, and can be converted with `REGION`, `FILL`, and `POUR`.

```json
{ "type": "POLY", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":6.417,
  "netName":"GND",
  "layerId":1,
  "width":0.5,
  "path":["single polygon"],
}|
```

1. type polyline `POLY`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. netName net.
9. layerId layer.
10. width line width.
11. path see single polygon.

## FILL Fill

```json
{ "type": "FILL", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex": 0.794,
  "netName":"GND",
  "layerId":3,
  "width":10,
  "fillStyle":0,
  "path":["complex polygon"],
}|
```

1. type fill `FILL`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. netName net.
9. layerId layer.
10. width line width.
11. fillStyle fill style: 0 solid fill, 1 grid fill, 2 internal plane fill.
12. path see complex polygon chapter.
    1. For a polygon drawn in one go, there is only one single polygon here.
    2. For polygons drawn in combination mode, there are multiple single polygons here.

## REGION Region

Keepout regions are an important future feature. In addition to assisting manual design, they can also assist automatic placement and routing by providing automation tools with constraint information on area ranges in addition to design rules.

```json
{ "type": "REGION", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.901,
  "layerId":3,
  "width":1,
  "prohibitType":[1, 2, 5],
  "path":["complex polygon"],
  "name":"aa constraint",

}|
```

1. type region `REGION`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. layerId layer.
9. width line width.
10. prohibitType prohibit types, multiple can exist simultaneously.
    1. \*prohibit routing and placing fill regions (deprecated, but keep compatible when parsing)
    2. prohibit components
    3. prohibit vias
    4. \*prohibit copper pours and internal planes (deprecated, but keep compatible when parsing)
    5. prohibit routing
    6. prohibit placing fill regions
    7. prohibit copper pours
    8. prohibit internal planes
11. path see complex polygon chapter.
    1. For a polygon drawn in one go, there is only one single polygon here.
    2. For polygons drawn in combination mode, there are multiple single polygons here.
12. name name (optional).

## POUR Copper Pour Border

A substantial difference from previous copper pours is that complex polygons are supported, meaning copper pour regions can contain holes. In theory, polygons converted from text paths can be used as copper pour regions.
Copper pours are filled in the order they appear in the format.

```json
{ "type": "POUR", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.779,
  "netName":"GND",
  "layerId":1,
  "width":1,
  "name":"TOPGND",
  "order":4,
  "path":["complex polygon"],
  "pourType":["pour type"],
  "keepIsland":1,
}|
["POUR", "e100", 5, 1, 0.779, "GND", 1, 1, "TOPGND", 4, complex polygon, [pour type], 1]
```

1. type copper pour `POUR`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. netName net.
9. layerId layer.
10. width line width.
11. name copper pour name.
12. order copper pour priority.
13. path see complex polygon chapter.
14. pourType see pour types.
15. keepIsland whether to keep islands.

#### Pour Types

##### SOLID Solid Fill

```json
["SOLID", 2]
```

1. solid fill `SOLID`.
2. minimum copper pour neck width (production optimization; 0 means no production optimization).

```json
["POUR", "e100", "GND", 1, "BOTGND", 2, complex polygon, ["SOLID", 2], 1, 0]
```

```json
["POUR", "e100", "GND", 1, "BOTGND", 2, complex polygon, ["SOLID", 0], 1, 0]
```

##### LINE Line Fill

```json
["LINE", 0, 0, 10, 20]
```

1. line fill `LINE`.
2. fill mode: `0` grid, `1` horizontal, `2` vertical.
3. rotation angle.
4. line width.
5. line spacing.

```json
["POUR", "e100", "GND", 1, "", 9, complex polygon, ["LINE", 0, 0, 10, 20], 0.6, 1, 0, 0]
```

## POURED Copper Pour Result

```json
{ "type": "POURED", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "targetId":"e100",
  "strokeWidth":0,
  "fill":1,
  "path":["complex polygon"],
}|
```

1. type copper pour result `POURED`.
2. id primitive ID.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. targetId ID of the parent copper pour border `POUR`.
6. strokeWidth stroke width: 0 means no stroke.
7. fill whether filled.
8. path path, complex polygon.

## IMAGE Image

`IMAGE` is very similar to `REGION`, but in operation, `IMAGE` has no control points and cannot freely change its shape, only overall scaling, rotation, flipping, and translation.
When `IMAGE` is on a signal layer, from the DRC perspective it is a net-less rectangular area defined by `start`, `end`, `rotation angle`, and `whether mirrored`.

```json
{ "type": "IMAGE", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":5.5464,
  "layerId":31,
  "startX":200,
  "startY":200,
  "width":400,
  "height":400,
  "angle":45,
  "mirror":1,
  "path":["complex polygon"],
}|
```

1. type image `IMAGE`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. layerId layer.
9. startX top-left X.
10. startY top-left Y.
11. width width.
12. height height.
13. angle rotation angle, around `start` point.
14. mirror whether the original image is horizontally mirrored. Mirroring is performed around the center of the original image's BBox.
15. path multiple complex polygons, see complex polygon chapter. Raw data is stored here; no adjustment is needed throughout the lifecycle.

## TEARDROP Teardrop

Teardrops cannot be selected or directly operated. When any associated primitive changes, EDA should automatically make them disappear.

```json
{ "type": "TEARDROP", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "netName":"GND",
  "layerId":3,
  "path":"simple polygon",
  "groupId":0,
}|
```

1. type teardrop `TEARDROP`.
2. id ID.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. netName net.
6. layerId layer.
7. path simple polygon.
8. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.

## FPC_FILL FPC Reinforcement Fill

```json
{ "type": "FPC_FILL", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":7.7845,
  "layerId":3,
  "material":"3M468",
  "thickness":7.874,
  "path":"complex polygon",
}|
```

1. type fill `FPC_FILL`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. layerId layer.
9. material material.
    - PI
    - STEEL
    - FR4
    - 3M468
    - 3M9077
    - EMI_Shielding_Film
10. thickness thickness (note the unit is the same as other primitives).
11. path see complex polygon chapter.
