# PIN Number

![image](/storage/images/cn/format/schematic/pin/pin.png)

As shown in the figure:
-   The `position X/Y` of all PINs is the endpoint farthest from the black rectangle.
-   PIN 1 is 0-degree rotation direction, pin style 0.
-   PIN 2 is 90-degree rotation direction, pin style 1.
-   PIN 3 is 180-degree rotation direction, pin style 2.
-   PIN 4 is 270-degree rotation direction, pin style 3.

```json
{ "type": "PIN", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 2.8772,
    "display": true,
    "electric": 0,
    "positionX": 350,
    "positionY": 170,
    "length": 20,
    "rotation": 0,
    "color": "#880000",
    "pinShape": 3,
}|
```

1. type primitive name: PIN.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. display whether to display.
9. electric electrical characteristic: 0 UNKNOWN, 1 INPUT, 2 OUTPUT, 3 BI.
10. positionX position X.
11. positionY position Y.
12. length pin length.
13. rotation rotation angle: 0, 90, 180, 270.
14. color pin color.
15. pinShape pin style: 1 Clock, 2 DOT; supports bitwise OR, e.g. 3 = 1 | 2.
    Example: `0` no addition, `1` Clock, `2` DOT, `3` Clock & DOT.

```json
{ "type": "ATTR", "id": "e184", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e102", "key":"NAME", "value":"VCC", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

PIN must have the NAME attribute.

```json
{ "type": "ATTR", "id": "e185", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e102", "key":"NUMBER", "value":"1", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

PIN must have the NUMBER attribute.
