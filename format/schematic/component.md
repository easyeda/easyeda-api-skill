# COMPONENT

-   `COMPONENT` references a Symbol. Since a Symbol supports multiple Parts, it carries a `sub-library ID` to indicate which one; for a single-Part device, the default value `""` is used.
-   A `COMPONENT` can bind many `ATTR`s; specific attribute behavior is defined by the tool.

### Symbol Types

| Symbol Type ID | Symbol Type     | Description                                                                                                                                                                                                                   |
| :-------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2               | Part Symbol     | Common device.                                                                                                                                                                                                               |
| 17              | Block Symbol    | Hierarchical symbol.                                                                                                                                                                                                         |
| 18              | NetFlag Symbol  | Global net symbol.                                                                                                                                                                                                         |
| 19              | NetPort Symbol  | Hierarchical net export symbol.                                                                                                                                                                                              |
| 20              | Sheet Symbol    | Provides a reuse mechanism for schematic sheets.                                                                                                                                                                             |
| 21              | NoneElec Symbol | Non-electrical symbol. NoneElec is a class of non-electrical primitives without `PIN`.<br>Can also be used as a reuse mechanism for special icons, copyright statements, etc.<br>NoneElec stands for None Electrical. |
| 22              | Short Symbol    | Short Symbol is a special Symbol that must have two `PIN`s.<br>All nets connected to the `PIN`s of the same `Short Symbol` are electrically shorted.<br>For example, if net A is connected to PIN1 and net B to PIN2, A and B are the same net. |

### Component Primitive

```json
{ "type": "COMPONENT", "id": "UUID", "ticket": 1 }||
{
    "partId": "e176",
    "groupId": 0,
    "positionX": 300,
    "positionY": 200,
    "rotation": 15,
    "isMirror": false,
    "data": {},
}|
```

1. type COMPONENT identifier: COMPONENT.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID.
5. groupId group ID, cannot be 0, empty by default when none.
6. zIndex Z-axis height: all non-attribute child elements are distributed within Z0 ~ Z9, e.g. Z of 23.554 means child elements are auto-distributed within 23.5540 ~ 23.5549.
7. positionX position X.
8. positionY position Y.
9. rotation rotation angle, around `position`.
10. isMirror whether mirrored.
11. data pure data attributes: additional information for internal editor logic.

The Symbol referenced by a Component is transformed in the following order:

1. Rotate counter-clockwise around the origin (0,0) by the `rotation angle`.
2. If `isMirror` is `1`, mirror horizontally around the Y-axis at the origin (0,0).
3. Translate by `position`.

Or equivalently (but more cumbersome to implement):

1. Translate by `position`.
2. Rotate counter-clockwise around `position` by the `rotation angle`.
3. If `isMirror` is `1`, mirror horizontally around the Y-axis at `position`.

```json
{ "type": "ATTR", "id": "e187", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Device", "value":"device-uuid-1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

Device uuid, consistent with the file name corresponding to the device in project.json.

```json
{ "type": "ATTR", "id": "e188", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Symbol", "value":"symbol-uuid-1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

An `ATTR` inside `COMPONENT` with the same name as one in the template will override it. Overriding Symbol affects the binding between the device and the symbol.

```json
{ "type": "ATTR", "id": "e188", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Footprint", "value":"footprint-uuid-1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

An `ATTR` inside `COMPONENT` with the same name as one in the template will override it. Overriding Footprint affects the binding between the device and the footprint.

```json
{ "type": "ATTR", "id": "e188", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176", "key":"Designator", "value":"U1", "keyVisible":true, "valueVisible":true, "positionX":300, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

An `ATTR` inside `COMPONENT` with the same name as one in the template will override it.

```json
{ "type": "ATTR", "id": "e180", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": true, "zIndex": 0.1, "parentId": "e176e5", "key":"NUMBER", "value":"1", "keyVisible":true, "valueVisible":true, "positionX":108, "positionY":804.5, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

The key to `PIN` attribute override lies in the `parentId` of `ATTR`.
The ID has two parts, e.g. `e176e5`, where `e176` is the `COMPONENT` ID and `e5` is the `PIN` ID in the template.
