# TEXT Text

```json
{ "type": "TEXT", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 4.12,
    "positionX": 109,
    "positionY": 804.5,
    "rotation": 0,
    "value": "any characters doukeyi@!@#$",
    "color": "#fff",
    "fillColor": "#fff",
    "fontFamily": "SimSun",
    "fontSize": 12,
    "strikeout": false,
    "underline": false,
    "italic": false,
    "fontWeight": false,
    "vAlign": 0 ,
    "hAlign": 2,
}|
```

1. type primitive name: TEXT.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. positionX text coordinate X.
9. positionY text coordinate Y.
10. rotation rotation angle, around text coordinate.
11. value text content: any characters.
12. color color.
13. fillColor background color.
14. fontFamily font name.
15. fontSize font size, same unit as coordinates.
16. strikeout whether to strike out.
17. underline whether to underline.
18. italic whether italic.
19. fontWeight whether bold.
20. vAlign vertical alignment: 0 top, 1 middle, 2 bottom.
21. hAlign horizontal alignment: 0 left, 1 center, 2 right.
