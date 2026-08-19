# Basic Primitive Format

## NET Net Information Configuration

Net information is different from AD's design.

-   AD requires it here.
-   This format only fills it in when there are special `net types` and `net colors`.
    The design difference stems from whether there is a dedicated net settings interface listing all nets for configuration.

```json
{ "type": "NET","id": "A", "ticket": 1 }||
{
  "netType":"High Speed",
  "specialColor":"#666666",
  "hideRetLine":0,
  "differentialName":"AASDF",
  "isPositiveNet":1,
  "equalLengthGroupName":"ABC",
}|
```

1. type net configuration `NET`.
2. id unique identifier, net name.
3. ticket logical clock.
4. netType net type: `null` means no type.
5. specialColor special color: `null` means no special color.
6. hideRetLine whether to hide airwires.
7. differentialName differential pair name: `null` means not a differential pair.
8. isPositiveNet whether positive net of differential pair.
9. equalLengthGroupName equal-length group name: `null` means not in an length-matching group.

```json
{ "type": "NET","id": "B", "ticket": 1 }||
{
  "netType":null,
  "specialColor":"#666666",
  "hideRetLine":1,
  "differentialName":"AASDF",
  "isPositiveNet":0,
  "equalLengthGroupName":"ABC",
}|
```

```json
{ "type": "NET","id": "C", "ticket": 1 }||
{
  "netType":"High Speed",
  "specialColor":null,
  "hideRetLine":1,
  "differentialName":null,
  "isPositiveNet":0,
  "equalLengthGroupName":null,
}|
```

## PRIMITIVE Primitive Configuration

```json
{ "type": "PRIMITIVE","id": "VIA", "ticket": 1 }||
{
  "display":1,
  "pick":0,
}|
```

1. type primitive configuration `PRIMITIVE`.
2. id unique identifier, primitive name.
3. ticket logical clock.
4. display whether displayed.
5. pick whether pickable.

```json
{ "type": "PRIMITIVE","id": "PAD", "ticket": 1 }||
{
  "display":0,
  "pick":1,
}|
```

## GROUP Group Configuration

Through group configuration, each group is given a name. If there is no name, EDA decides how to display the default group name.

```json
{ "type": "GROUP","id": "2", "ticket": 1 }||
{
  "groupName":"ABCD",
}|
```

1. type group configuration `GROUP`.
2. id group number.
3. ticket logical clock.
4. groupName name.

```json
{ "type": "GROUP","id": "5", "ticket": 1 }||
{
  "groupName":"Chinese Name",
}|
```

## CONNECT Primitive Association

Primitive association is used to express the internal combination logic of primitives, such as:

-   Teardrops and their connections to `LINE`, `ARC`, `PAD`, `VIA`.
-   Pads and their related pin 3D outline `FILL`.
-   `CREASE` and `BOSS` / `SHELL_ENTITY` connections in 3D shells.
-   PCB overrides for primitives inside footprints.

Only one-to-many relationships are supported.

```json
{ "type": "CONNECT","id": "e3", "ticket": 1 }||{ "relatedIds":["e15", "e18", "e100"] }|
```

1. type primitive association `CONNECT`.
2. id main primitive ID.
3. ticket logical clock.
4. relatedIds associated primitive IDs.

Many-to-many relationships can be expressed with multiple records; there is no corresponding scenario at present.

```json
{ "type": "CONNECT","id": "e4", "ticket": 1 }||{ "relatedIds":["e5", "e6"] }|
```

```json
{ "type": "CONNECT","id": "e5", "ticket": 1 }||{ "relatedIds":["e4", "e6"] }|
```

```json
{ "type": "CONNECT","id": "e6", "ticket": 1 }||{ "relatedIds":["e4", "e5"] }|
```

For PCB overrides of primitives inside footprints, use the form `/^[a-z]+\d+[a-z]+\d+$/i` to combine footprint and inner primitive IDs to reference, as follows:

```json
["DOCTYPE", "PCB", "1.0"]
["COMPONENT", "e13", 5, 1, ...]
["VIA", "e13e20", 0, "GND", "asdf", ....]
["PAD", "e13e25", 1, "GND", 0, "1", ....]
["CONNECT", "e13", ["e13e20", "e13e25"]]
```

Footprint content is as follows:

```json
["DOCTYPE", "FOOTPRINT", "1.0"]
["VIA", "e20", 0, "GND", "sss", ....]
["PAD", "e25", 1, "GND", 0, "3", ....]
```

## PROP Additional Primitive Properties

Some primitive properties are not required and are relatively generic, so `PROP` is used to assist in describing them.

```json
{ "type": "PROP", "id":"UUID", "ticket": 1 }||{ "color":"#22ee44" }|
```

1. type additional primitive properties: PROP.
2. id ID of the primitive being attached, two encoding forms:
    1. Normal ID: form `/^[a-z]+\d+$/i`, e.g. `e1`, `e123`.
    2. Footprint instance ID: form `/^[a-z]+\d+[a-z]+\d+$/i`, used for silkscreen in footprints, e.g. `e1e5`, `e12e22`.
3. color special color.

```json
{ "type": "PROP", "id":"e7e25", "ticket": 1 }||{ "color":"#22ee44" }|
```

To override primitives inside a footprint, use this composite ID form.

## EQLEN_GRP

```json
{ "type": "EQLEN_GRP", "id":"UUID", "ticket": 1 }||
{
  "name":"equal length pad group 2",
  "sort":1.97,
  "pads":
    [
        ["U1:1", "U2:3"],
        ["U1:2", "U1:a"]
    ],
}|
```

1. type equal-length group: `EQLEN_GRP`.
2. id unique ID.
3. ticket logical clock.
4. name equal-length group name, unique within the project.
5. sort sort order.
6. pads array identifying pads by `designator:pad number`.
