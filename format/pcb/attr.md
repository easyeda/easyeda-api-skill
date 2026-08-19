# ATTR Attribute

Attributes are used to describe properties that the PCB or FOOTPRINT may need to display on the drawing.

```json
{ "type": "ATTR", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.072,
  "parentId":"",
  "layerId":1,
  "positionX":200,
  "positionY":150,
  "key":"DESIGNATOR",
  "value":"U1",
  "keyVisible":0,
  "valueVisible":1,
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
```

1. type attribute `ATTR`.
2. id primitive ID, unique within the document.
3. ticket logical clock.
4. partitionId partition ID it belongs to, null means no partition. Ignored for footprints.
5. groupId group ID: 0 no group, non-zero is the group flag, same flag means same group.
6. locked whether locked.
7. zIndex Z-axis height.
8. parentId affiliation ID, left blank means current block-level primitive.
9. layerId layer.
10. positionX position X: fixed to `null` for attributes that have never been displayed.
11. positionY position Y: fixed to `null` for attributes that have never been displayed.
12. key Key.
13. value Value.
14. keyVisible whether to display Key.
15. valueVisible whether to display Value.
16. fontFamily font name.
17. fontSize font size.
18. strokeWidth stroke width.
19. bold whether bold.
20. italic whether italic.
21. origin alignment mode: `0` top-left, `1` top-center, `2` top-right, `3` middle-left, `4` middle-center, `5` middle-right, `6` bottom-left, `7` bottom-center, `8` bottom-right.
22. angle rotation angle.
23. reverse whether reverse expansion.
24. reverseExpansion reverse expansion size: size of the reverse expansion area, supports negative numbers.
25. mirror whether mirrored. Generally, when text appears on the bottom layer, this should also be adjusted to `1`.
26. width height, `null` if none.
27. height width, `null` if none.
28. path complex polygon array, `null` if none.
