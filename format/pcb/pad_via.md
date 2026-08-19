# Pads and Vias

## VIA Via

Vias are generally used to connect circuits between different layers.
For multi-layer boards, there are generally the following modes:
Through-hole: from `start layer` to `end layer`, through top and bottom.
Blind via: only one of `start layer` or `end layer` is top or bottom.
Buried via: neither `start layer` nor `end layer` is top or bottom.

```json
{ "type": "VIA", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":3.223,
  "netName":"GND",
  "ruleName":"asdf",
  "centerX":100,
  "centerY":200,
  "holeDiameter":5,
  "viaDiameter":9,
  "viaType":0,
  "topSolderExpansion":null,
  "bottomSolderExpansion":null,
  "unusedInnerLayers":[17],
}|
```

1. type via `VIA`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. netName NET.
9. ruleName via layer type: design rule name, defines start and end layers of the via.
10. centerX coordinate X.
11. centerY coordinate Y.
12. holeDiameter hole diameter.
13. viaDiameter pad diameter.
14. viaType via type: 0 normal via, 1 stitching via.
15. topSolderExpansion top solder mask expansion: `null` means follow rule.
16. bottomSolderExpansion bottom solder mask expansion: `null` means follow rule.
17. unusedInnerLayers hidden pad layers (optional): array of layers where pads are hidden.

## PAD Pad

Pads are generally used for soldering components to the circuit board.
Pads either run through the entire board or only on the top or bottom layer, so there are only top, bottom, and multi-layer options.

```json
{ "type": "PAD", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":6.234,
  "netName":"GND",
  "layerId":0,
  "num":"1",
  "centerX":100,
  "centerY":200,
  "padAngle":15,
  "hole":["reference hole"],
  "defaultPad":["reference pad"],
  "specialPad":[[0, 1, ["reference pad"]]],
  "padOffsetX":10,
  "padOffsetY":-5,
  "relativeAngle":30,
  "plated":1,
  "padType":null,
  "topSolderExpansion":0.5,
  "bottomSolderExpansion":0.4,
  "topPasteExpansion":null,
  "bottomPasteExpansion":0,
  "connectMode":0,
  "spokeSpace":10,
  "spokeWidth":5,
  "spokeAngle":45,
  "unusedInnerLayers":[15, 17],
}|
```

1. type pad `PAD`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. netName net.
9. layerId layer (only top, bottom, multi-layer).
10. num pad number.
11. centerX pad origin X.
12. centerY pad origin Y.
13. padAngle pad rotation angle.
14. hole hole: reference hole, `null` means no hole.
15. defaultPad default pad: reference pad.
16. specialPad special pads (multiple groups, each group defined as follows).
    1. start layer.
    2. end layer.
    3. reference pad.
17. padOffsetX hole offset X.
18. padOffsetY hole offset Y.
19. relativeAngle hole rotation relative to pad.
20. plated whether plated hole wall.
21. padType pad function: 0 normal pad, 1 test point, 2 fiducial.
22. topSolderExpansion top solder mask expansion: `null` means follow rule.
23. bottomSolderExpansion bottom solder mask expansion: `null` means follow rule.
24. topPasteExpansion top paste mask expansion: `null` means follow rule.
25. bottomPasteExpansion bottom paste mask expansion: `null` means follow rule.
26. connectMode thermal relief - connection mode: `null` means follow rule, other data same as design rules.
27. spokeSpace thermal relief - spoke spacing: `null` means follow rule, other data same as design rules.
28. spokeWidth thermal relief - spoke width: `null` means follow rule, other data same as design rules.
29. spokeAngle thermal relief - spoke angle: `null` means follow rule, other data same as design rules.
30. unusedInnerLayers hidden pad layers (optional): array of layers where pads are hidden.

### Hole

1. Slot hole
    1. Slot hole `ROUND`
    2. width
    3. height
2. Square hole
    1. Square hole `RECT`
    2. width
    3. height

### Pad

Hole rotation and pad rotation are independent.

1. Oblong pad
    1. Oblong pad `ROUND`
    2. width
    3. height
2. Square pad
    1. Square pad `RECT`
    2. width
    3. height
    4. corner radius
3. Regular polygon pad
    1. Regular polygon pad `NGON` (name from 3DSMAX)
    2. diameter
    3. number of sides (> 2)
4. Polygon pad
    1. Polygon pad `POLY`
    2. reference complex polygon, relative position to hole as origin
