# OBJ Binary Embedded Object

Files and other data are encoded into the following primitive to be embedded in the page as images and files, which can be downloaded as attachments or displayed directly.

```json
{ "type": "OBJ", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":5.286,
  "layerId":15,
  "fileName":"a.png",
  "startX":200,
  "startY":300,
  "width":10,
  "height":20,
  "angle":0,
  "mirror":1,
  "path":"blob:1234ade2f",
}|
["OBJ", "e662", 0, 1, 5.286, 15, "a.png", 200, 300, 10, 20, 0, 1, "blob:1234ade2f"]
```

1. type binary embedded object identifier: OBJ.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. layerId layer.
9. fileName file name.
10. startX top-left X.
11. startY top-left Y.
12. width width.
13. height height.
14. angle rotation angle, around `top-left`.
15. mirror whether the original image is horizontally mirrored. Mirroring is performed around the center of the original image's BBox.
16. path binary data.
    1. General format, compatible with `Data URLs`: `data:[<mediatype>][;base64],<data>`
        - e.g. `data:image/png;base64,asdfasdfwer`
    2. BLOB reference format, `blob:hashid`.
