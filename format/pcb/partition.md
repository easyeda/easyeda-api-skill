# Partition Format

PCB introduces partition design. Partition design needs to mark partition information for many elements, so the following format is used.

## PARTITION Partition Primitive

```json
{ "type": "LAYER_PHYS","id": "UUID", "ticket": 1 }||
{
  "name":"Partition 1",
  "fileUuid":"SUB-PCB-UUID",
  "path":"complex polygon",
}|
```

1. type partition: `PARTITION`.
2. id primitive ID.
3. ticket logical clock.
4. name partition name.
5. fileUuid child drawing UUID.
6. path partition shape.

All primitives belonging to a partition must carry the corresponding partition primitive ID.

```json
{ "type": "VIA", "id":"viaUuid", "ticket": 1 }||
{
  "partitionId":"partitionId",// carries this id to indicate belonging to the corresponding partition
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
