# Text System

## STRING Text

When `STRING` is on a signal layer, from the DRC perspective it is:

1. Net-less.
2. A BBox with `position` at 0,0, `rotation angle` 0, and `whether mirrored` 0.
3. A rectangular area after applying `position`, `rotation angle`, and `whether mirrored` transformations.

```json
{ "type": "STRING", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.2693,
  "layerId":1,
  "positionX":300,
  "positionY":600,
  "text":"any text",
  "fontFamily":"SimSun",
  "fontSize":50,
  "strokeWidth":10,
  "bold":0,
  "italic":0,
  "origin":5,
  "angle":15,
  "reverse":1,
  "reverseExpansion":0,
  "mirror":1,
  "width":100,
  "height":200,
  "path":["complex polygon"],
}|
["STRING", "e100", 0, 1, 0.2693, 1, 300, 600, "any text", "SimSun", 50, 10, 0, 0, 5, 15, 1, 0, 1]
```

1. type text `STRING`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. layerId layer.
9. positionX position X.
10. positionY position Y.
11. text content.
12. fontFamily font name.
13. fontSize font size.
14. strokeWidth stroke width.
15. bold whether bold.
16. italic whether italic.
17. origin alignment mode: `0` top-left, `1` top-center, `2` top-right, `3` middle-left, `4` middle-center, `5` middle-right, `6` bottom-left, `7` bottom-center, `8` bottom-right.
18. angle rotation angle.
19. reverse whether reverse expansion.
20. expansion reverse expansion size: size of the reverse expansion area, supports negative numbers.
21. mirror whether mirrored. Generally, when text appears on the bottom layer, this should also be adjusted to `1`.
22. width height, `null` if none.
23. height width, `null` if none.
24. path complex polygon array, `null` if none.
