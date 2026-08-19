# DIMENSION Dimension Tool Set

```json
{ "type": "DIMENSION", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":2.221,
  "type":"RADIUS",
  "layerId":3,
  "unit":"mm",
  "strokeWidth":0.5,
  "precision":3,
  "textFollow":1,
  "coords": [100 200 300 400 400 400],
}|
["DIMENSION", "e101", 0, 1, 2.221, "RADIUS", 3, "mm", 0.5, 3, 1, [100 200 300 400 400 400]]
```

1. type dimension tool `DIMENSION`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. type dimension type: `RADIUS` radius, `LENGTH` length, `ANGLE` angle.
9. layerId layer.
10. unit unit: `mm`, `cm`, `inch`, `mil`.
11. strokeWidth line width.
12. precision precision.
13. textFollow whether text follows: `1` tool automatically decides text position, `0` always use the position of `ATTR`.
14. coords coordinate set X1 Y1 X2 Y2 X3 Y3 ... different dimension types define coordinates differently.

```json
["ATTR", "e102", 0, "e101", 1, 200, 150, "VALUE", "1234mm", 0, 1, "SimSun", 50, 10, 0, 0, 0, 2, 15, 1, 1]
```

`DIMENSION` needs to be accompanied by an attribute with Key `VALUE` to express the text part of the dimension tool. EDA should ignore unnecessary properties such as `whether to display Key` and `whether to display Value`.

### RADIUS Radius Tool

The first coordinate of the coordinate set is the endpoint touching the ARC, and the last coordinate is the default endpoint for displaying text, as shown below.

![image](/storage/images/cn/format/pcb/dimension/dim_radius.png)

### LENGTH Length Tool

The coordinate set only needs four points, as shown below.

![image](/storage/images/cn/format/pcb/dimension/dim_length.png)

### ANGLE Angle Tool

The coordinate set needs 3 points, as shown below.

![image](/storage/images/cn/format/pcb/dimension/dim_angle.png)
