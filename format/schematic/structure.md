# Structural Primitives

## PART Sub-Library

`PART` only exists on symbol pages.
Even single-Part devices must have a `PART`; the sub-library ID is left empty `""`.

```json
{ "type": "PART","id":"partId", "ticket": 1 }||{"BBOX": [-10, -20, 10, 20]}|
```

1. type sub-library primitive: PART.
2. id sub-library ID.
3. ticket logical clock.
4. Inner parameters: Key-Value
    - Reserved `BBOX` is the bounding box that just encloses all primitives under the PART, defined by any two diagonal points.
      **XTools core logic should not rely on this property.**
    - Others are editor additional information for data analysis and other functions, optional.

All primitives on the symbol page carry the corresponding sub-library ID to indicate they belong to that sub-library.

```json
{ "type": "WIRE", "id": "UUID", "ticket": 1 }||
{
    "partId": "partId", // symbol primitives carry this sub-library id
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

## GROUP Group Control

```json
{ "type": "GROUP", "id": "UUID", "ticket": 1 }||{ "groupId": "1", "parentId": "0", "title": "Logo" }|
```

1. type group control `GROUP`.
2. id unique ID.
3. ticket logical clock.
4. groupId group ID, cannot be 0.
5. parentId parent group ID, 0 means no parent.
6. title group name, empty string `""` if no name.
