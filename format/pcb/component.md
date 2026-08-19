# Footprint System

PCB footprints use a Master/Instance model, describing footprints through override rules with minimal redundancy.

## COMPONENT Component Instance

Instances only contain attributes. Attributes with the same `Key` in the instance will override those in the `FOOTPRINT`.

```json
{ "type": "COMPONENT", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.22,
  "layerId":1,
  "positionX":150,
  "positionY":200,
  "angle":45,
  "attrs":{ "3D Model": "uuid", "3D Model Transform": "20,10,0,0,15,45,0,0,20" },
}|
```

1. type instance `COMPONENT`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. layerId layer (only top and bottom).
9. positionX position X.
10. positionY position Y.
11. angle rotation angle.
12. attrs custom attributes.
    - Fixed `3D Model` is the uuid of the 3D model. This uuid represents a record with doctype = 16 in the components table.
    - Fixed `3D Model Transform` is the 3D model transformation parameters.

```json
["ATTR", "e102", 0, "e8", 1, "Designator", "U1", 0, 1, "SimSun", 50, 10, 0, 0, 0, 1, 2, 15, 1, 1]
```

```json
["ATTR", "e103", 0, "e8", 1, "Footprint", "footprint-uuid", 0, 1, "SimSun", 50, 10, 0, 0, 0, 1, 2, 15, 1, 1]
```

```json
["ATTR", "e104", 0, "e8", 1, "Device", "device-uuid", 0, 1, "SimSun", 50, 10, 0, 0, 0, 1, 2, 15, 1, 1]
```

### Pad-Net Mapping `PAD_NET`

```json
{ "type": "PAD_NET", "id":"COMPONENT_UUID", "ticket": 1 }||
{
  "padNum":"a1",
  "padNet":"GND",
  "padId":"e125",
}|
```

1. type pad-net mapping `PAD_NET`.
2. id parent component instance ID.
3. ticket logical clock.
4. padNum pad number.
5. padNet net name.
6. padId pad ID inside the footprint (optional).

### Reuse Block Information `REUSE_BLOCK`

```json
{ "type": "REUSE_BLOCK", "id":"COMPONENT_UUID", "ticket": 1 }||
{
  "groupId":"$1e16",
  "channelId":"$2e5_$4e3",
}|
```

1. type reuse block information `REUSE_BLOCK`.
2. id parent component instance ID.
3. groupId group ID.
4. channelId channel ID.

### 3D Model Transform Special Notes

```json
{ "type": "COMPONENT", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.22,
  "layerId":1,
  "positionX":150,
  "positionY":200,
  "angle":45,
  "attrs":{ "3D Model": "uuid", "3D Model Transform": "20,10,0,0,15,45,0,0,20" },
}|
```

In the device, `3D Model Transform` is fixed as the transformation parameters required for the 3D model to match the device when it is [on the top layer], at [coordinates 0,0], and [rotation angle 0].

The parameters are:

1. sizeX: X-axis size.
2. sizeY: Y-axis size.
3. sizeZ: Z-axis size. There is a compatibility handling here: if 0, height is automatically adapted.
4. rotZ: rotation angle around Z axis.
5. rotX: rotation angle around X axis.
6. rotY: rotation angle around Y axis.
7. offX: X-axis offset.
8. offY: Y-axis offset.
9. offZ: Z-axis offset.

The algorithm for generating the 3D model transformation matrix from the 3D model transform parameters is as follows:

```python
cx = X-axis midpoint of the 3D model
cy = Y-axis midpoint of the 3D model
bz = minimum Z value of the 3D model

wx = X-axis width of the 3D model
wy = Y-axis width of the 3D model
wz = Z-axis width of the 3D model

ORIGIN = translate(-cx, -cy, -bz)
SCALE = scale(sizeX / wx, sizeY / wy, sizeZ / wz)
ROT = rotateZXY(rotZ, rotX, rotY)
OFFSET = translate(offX, offY, offZ)

MATRIX = OFFSET X ROT X SCALE X ORIGIN
```
