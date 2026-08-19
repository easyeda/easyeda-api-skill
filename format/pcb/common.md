# Common Format

This chapter details the format specification of the EasyEDA PCB file. PCB files mainly consist of the following parts:

- **Common Format**: Document header, canvas, layer, physical layer, preferences, etc.
- **Partition Format**: Partition definitions.
- **Basic Primitives**: Nets, primitive configurations, groups, silkscreen configurations, associations, attributes, etc.
- **Pads and Vias**: Pads and vias.
- **Shape Primitives**: Lines, arcs, polygon systems, polylines, fills, regions, copper pours, images, teardrops, etc.
- **Binary Objects**: Embedded objects.
- **3D Shell**: Shells, creases, entities, bosses.
- **Text System**: Text.
- **Attributes**: Attributes.
- **Dimension Tools**: Dimension annotations.
- **Footprint System**: Component instances.
- **Panelization**: Panelization parameters.
- **Design Rules**: Rule templates, rules.



## Document Header

```json
{ "type": "DOCHEAD" }||{ "docType": "PCB", "uuid": "UUID", "client": "clientID" }|
```

```json
{ "type": "DOCHEAD" }||{ "docType": "FOOTPRINT", "uuid": "UUID", "client": "clientID" }|
```

-   type: "DOCHEAD", document header identifier.
-   docType: document type, "PCB" PCB, "FOOTPRINT" footprint.
-   uuid: document unique ID, unique within the project.
-   client: terminal identifier for eventual consistency.

## CANVAS Canvas Configuration

```json
{ "type": "CANVAS", "ticket": 1 }||
{
  "originX":0,
  "originY":0,
  "unit":"mm",
  "gridXSize":10,
  "gridYSize":10,
  "snapXSize":1,
  "snapYSize":1,
  "altSnapXSize":0.1,
  "altSnapYSize":0.1,
  "gridType":1,
  "multiGridType":0,
  "multiGridRatio":5,
}|
```

1. type canvas configuration `CANVAS`.
2. ticket logical clock.
3. originX canvas origin X.
4. originY canvas origin Y.
5. unit **display** unit (does not affect the unit of data in the format).
6. gridXSize grid size X.
7. gridYSize grid size Y.
8. snapXSize snap size X.
9. snapYSize snap size Y.
10. altSnapXSize Alt snap size X.
11. altSnapYSize Alt snap size Y.
12. gridType grid type: `0` none, `1` grid, `2` dot.
13. multiGridType bold grid type: `0` none, `1` grid, `2` dot.
14. multiGridRatio bold grid ratio: number.

## LAYER Layer Configuration

-   The order in which `SIGNAL`, `PLANE`, and `SUBSTRATE` appear implies their physical stacking order.
-   The number of `SIGNAL`, `PLANE`, and `SUBSTRATE` layers is unlimited.
-   The format does not assume a stable relationship between layer number and layer; specific implementation is decided by the tool.

```json
{ "type": "LAYER","id": 0, "ticket": 1 }||
{
  "layerType":"TOP",
  "layerName":"Top Layer",
  "status":1,
  "activeColor":"#FF0000",
  "activateTransparency":0.5,
  "inactiveColor":"#880000",
  "inactiveTransparency":0.3,
}|
```

1. type layer `LAYER`.
2. id layer number, unique.
3. ticket logical clock.
4. layerType layer type.
5. layerName layer alias, must be unique.
6. status status: `1` used, `2` displayed, `4` locked. Can be combined by addition, e.g.
    - used and displayed: 3 = 1 + 2
    - used and locked but not displayed: 5 = 1 + 4
    - used, displayed, and locked: 7 = 1 + 2 + 4
7. activeColor active color.
8. activateTransparency active transparency.
9. inactiveColor inactive color.
10. inactiveTransparency inactive transparency.

```json
["LAYER",2,"BOTTOM","Bottom Layer",1,"#0000ff",1,"#00007f",1]
["LAYER",3,"TOP_SILK","Top Silkscreen Layer",1,"#ffcc00",1,"#7f6600",1]
["LAYER",4,"BOT_SILK","Bottom Silkscreen Layer",1,"#66cc33",1,"#336619",1]
["LAYER",5,"TOP_SOLDER_MASK","Top Solder Mask Layer",1,"#800080",1,"#400040",1]
["LAYER",6,"BOT_SOLDER_MASK","Bottom Solder Mask Layer",1,"#aa00ff",1,"#55007f",1]
["LAYER",7,"TOP_PASTE_MASK","Top Paste Mask Layer",1,"#808080",1,"#404040",1]
["LAYER",8,"BOT_PASTE_MASK","Bottom Paste Mask Layer",1,"#800000",1,"#400000",1]
["LAYER",9,"TOP_ASSEMBLY","Top Assembly Layer",1,"#33cc99",1,"#19664c",1]
["LAYER",10,"BOT_ASSEMBLY","Bottom Assembly Layer",1,"#5555ff",1,"#2a2a7f",1]
["LAYER",11,"OUTLINE","Board Outline Layer",1,"#ff00ff",1,"#7f007f",1]
["LAYER",12,"MULTI","Multi-Layer",1,"#c0c0c0",1,"#606060",1]
["LAYER",13,"DOCUMENT","Document Layer",1,"#ffffff",1,"#7f7f7f",1]
["LAYER",14,"MECHANICAL","Mechanical Layer",1,"#f022f0",1,"#781178",1]
["LAYER",50,"SUBSTRATE","Dialectric1",3,"#999966",1,"#4c4c33",1]
["LAYER",15,"SIGNAL","Inner1",3,"#999966",1,"#4c4c33",1]
["LAYER",52,"SUBSTRATE","Dialectric3",3,"#999966",1,"#4c4c33",1]
["LAYER",51,"SUBSTRATE","Dialectric2",3,"#999966",1,"#4c4c33",1]
["LAYER",17,"SIGNAL","Inner2",3,"#008000",1,"#004000",1]
["LAYER",58,"SUBSTRATE","Dialectric9",3,"#999966",1,"#4c4c33",1]
["LAYER",16,"SIGNAL","Inner3",3,"#999966",1,"#4c4c33",1]
["LAYER",53,"SUBSTRATE","Dialectric4",3,"#999966",1,"#4c4c33",1]
["LAYER",47,"HOLE","Hole Layer",1,"#222222",1,"#111111",1]
["LAYER",48,"SHELL","3D Shell Layer",1,"#222222",1,"#111111",1]
["LAYER",49,"TOP_SHELL","Top 3D Shell Layer",1,"#222222",1,"#111111",1]
["LAYER",50,"BOT_SHELL","Bottom 3D Shell Layer",1,"#222222",1,"#111111",1]
```

## LAYER_PHYS Layer Physical Properties Configuration

```json
{ "type": "LAYER_PHYS","id": 0, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":1,
  "permittivity":0,
  "lossTangent":0,
  "isKeepIsland":0,
}|
```

1. type layer physical properties `LAYER_PHYS`.
2. id layer number.
3. ticket logical clock.
4. material layer material.
5. thickness thickness.
6. permittivity permittivity.
7. lossTangent loss tangent.
8. isKeepIsland whether to keep islands on internal plane layers.

```json
{ "type": "LAYER_PHYS","id": 2, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":1,
  "permittivity":0,
  "lossTangent":0,
  "isKeepIsland":0,
}|
```

```json
{ "type": "LAYER_PHYS","id": 15, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":1,
  "permittivity":0,
  "lossTangent":0,
  "isKeepIsland":1,
}|
```

```json
{ "type": "LAYER_PHYS","id": 50, "ticket": 1 }||
{
  "material":"COPPER",
  "thickness":10,
  "permittivity":4.5,
  "lossTangent":0.02,
  "isKeepIsland":0,
}|
```

## ACTIVE_LAYER Active Layer Configuration

```json
{ "type": "ACTIVE_LAYER", "ticket": 1 }||
{
  "layerId":0,
}|
```

1. type current active layer `ACTIVE_LAYER`.
2. ticket logical clock.
3. layerId layer index.

## SILK_OPTS Silkscreen Configuration

Silkscreen configuration is currently mainly used for colored silkscreen processes.

```json
{ "type": "SILK_OPTS","id": 3, "ticket": 1 }||
{
  "defaultColor":"#ffffff",
  "baseColor":"#000000",
}|
```

1. type silkscreen configuration: SILK_OPTS.
2. id layer number: only top silkscreen and bottom silkscreen.
3. ticket logical clock.
4. defaultColor default color.
5. baseColor base color.

```json
{ "type": "SILK_OPTS","id": 4, "ticket": 1 }||
{
  "defaultColor":"#020202",
  "baseColor":"#aaaaaa",
}|
```

## PREFERENCE Preferences

```json
{ "type": "PREFERENCE", "ticket": 1 }||
{
  "startTrackWidthFollowLast":0,
  "lastTrackWidth":10,
  "startViaSizeFollowLast":0,
  "lastViaInnerDiameter":39.37,
  "lastViaDiameter":78.74,
  "snap":1,
  "routingMode":2,
  "routingCorner":"L45",
  "removeLoop":1,
  "rotatingObject":0,
  "trackFollow":0,
  "stretchTrackMinCorner":1,
  "preferenceConfig":null,
  "realTimeUpdateUnusedLayers":0,
  "unusedPadRange":3,
  "pushVia":"OPTIMIZA_OPEN",
  "pathOptimization4BePushed":0,
  "currentPathOptimization4BePushed":"OPTIMIZA_WEAK",
  "removeCircuitsContainingVias":1,
  "removeAntenna":1,
}|
```

1. type preferences `PREFERENCE`.
2. ticket logical clock.
3. startTrackWidthFollowLast whether starting track width follows last setting.
4. lastTrackWidth last track width.
5. startViaSizeFollowLast whether starting via size follows last setting.
6. lastViaInnerDiameter last via inner diameter.
7. lastViaDiameter last via outer diameter.
8. snap whether auto-snap.
9. routingMode routing mode: `0` none, `1` push, `2` hug, `3` block.
10. routingCorner routing corner mode.
    - `"L45"` line 45 degrees.
    - `"L90"` line 90 degrees.
    - `"R45"` arc 45 degrees.
    - `"R90"` arc 90 degrees.
    - `"L"` free-angle line.
    - `"R"` free-angle arc.
11. removeLoop whether routing automatically removes loops.
12. rotatingObject whether single-object rotation.
13. trackFollow whether tracks follow footprint movement.
14. stretchTrackMinCorner stretch track minimum corner ratio (to track width).
15. preferenceConfig layer stack preference source.
16. realTimeUpdateUnusedLayers whether to automatically remove unused pads.
17. unusedPadRange range for removing unused pads.
    1. all.
    2. pads only.
    3. vias only.
18. pushVia push via.
19. pathOptimization4BePushed path optimization (single segment / whole segment).
20. currentPathOptimization4BePushed current track path optimization.
21. removeCircuitsContainingVias whether to remove loops containing vias.
22. removeAntenna whether to remove antennas.

## ITEM_ORDER Primitive Order Suggestion

Provides a primitive order suggestion for the PCB. The PCB can arrange primitive order according to this information. This information can only appear once.

```json
{ "type": "ITEM_ORDER",  "ticket": 1 }||{ "ids":["e2", "e1"] }|
```

1. type primitive order suggestion: ITEM_ORDER.
2. ticket logical clock.
3. ids primitive IDs, two encoding forms:
    1. Normal ID: form `/^[a-z]+\d+$/i`, e.g. `e1`, `e123`.
    2. Footprint instance ID: form `/^[a-z]+\d+[a-z]+\d+$/i`, used for silkscreen in footprints, e.g. `e1e5`, `e12e22`.

To explain why it is called a "suggestion": if `e1` is a top-layer primitive and `e2` is a bottom-layer primitive, then

```json
{ "type": "ITEM_ORDER",  "ticket": 1 }||{ "ids":["e2", "e1"] }|
```

the default is still `e1` on top, unless some special operation causes the bottom layer to be brought to the front.
