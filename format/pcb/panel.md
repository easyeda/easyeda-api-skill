# Panelization

```json
{ "type": "PANELIZE", "ticket": 1 }||
{
  "on":1,
  "row":2,
  "column":3,
  "rowSpacing":5.5,
  "columnSpacing":6.1,
  "onlyOutline":1,
}|
```

1. type panelization `PANELIZE`.
2. ticket logical clock.
3. on whether enabled.
4. row number of rows.
5. column number of columns.
6. rowSpacing row spacing.
7. columnSpacing column spacing.
8. onlyOutline whether to panelize outline only.

```json
{ "type": "PANELIZE_STAMP", "ticket": 1 }||
{
  "direction":1,
  "on":1,
  "stampHoleGroupQuantity":3,
  "stampHoleDiameter":8,
  "stampHoleQuantityPerGroup":0,
  "stampHoleSpacing":1,
}|
```

1. type stamp hole parameters: `PANELIZE_STAMP`.
2. ticket logical clock.
3. direction direction: `0` horizontal, `1` vertical.
4. on whether enabled (if not enabled, V-CUT is used).
5. stampHoleGroupQuantity number of stamp hole groups.
6. stampHoleDiameter stamp hole diameter.
7. stampHoleQuantityPerGroup number of stamp holes per group.
8. stampHoleSpacing stamp hole spacing.

```json
{ "type": "PANELIZE_SIDE", "ticket": 1 }||
{
  "direction":0,
  "on":1,
  "sideHeight":5,
  "positionHoleDiameter":3,
  "markDiameter":2,
  "markExpansion":1,
}|
```

1. type process edge parameters: `PANELIZE_SIDE`.
2. ticket logical clock.
3. direction direction: `0` horizontal, `1` vertical.
4. on whether enabled (if not enabled, process edge is not used).
5. sideHeight process edge height.
6. positionHoleDiameter positioning hole diameter (`0` means no positioning hole).
7. markDiameter Mark dot diameter (`0` means Mark dot disabled).
8. markExpansion Mark dot solder mask expansion.
