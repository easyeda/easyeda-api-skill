# ATTR Attribute

ATTR is a relatively generic primitive that means:

1. It expresses one of multiple attributes composed of a KEY-VALUE pair.
2. It can be displayed on the canvas and controls what content is displayed, as well as style and position.

When the affiliation ID is not specified, it defaults to the current block-level primitive.

```json
{ "type": "ATTR", "id": "UUID", "ticket": 1 }||
{ "partId": "", "groupId": 0, "locked": false, "zIndex": 0.1, "parentId": "UUID", "key":"string", "value":"string", "keyVisible":false, "valueVisible":false, "positionX":200, "positionY":200, "rotation":0, "color":null, "fillColor":null, "fontFamily":null, "fontSize":null, "strikeout":null, "underline":null, "italic":null, "fontWeight":null, "vAlign":0, "hAlign":2,}|
```

1. type attribute name: ATTR.
2. id unique ID.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. parentId affiliation ID: the primitive it belongs to, `""` means it belongs to the current block. _Default block is the file._
9. key attribute Key.
10. value attribute Value.
11. keyVisible whether to display Key.
12. valueVisible whether to display Value.
13. positionX position X: fixed to `null` for attributes that have never been displayed.
14. positionY position Y: fixed to `null` for attributes that have never been displayed.
15. rotation rotation angle, rotated around `position`.
16. color color.
17. fillColor background color.
18. fontFamily font name.
19. fontSize font size, same unit as coordinates.
20. strikeout whether to strike out.
21. underline whether to underline.
22. italic whether italic.
23. fontWeight whether bold.
24. vAlign vertical alignment: 0 top, 1 middle, 2 bottom.
25. hAlign horizontal alignment: 0 left, 1 center, 2 right.

When the attribute Value contains the `~` character, XTools needs to implement overline text from the start to the end: text is overlined starting at odd-numbered `~` and ending at even-numbered `~`.
