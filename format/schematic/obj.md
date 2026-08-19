# OBJ Binary Embedded Object

Embedded images and files on the page, which can be downloaded as attachments or displayed directly (decided by EDA, not required by the format).

```json
{ "type": "OBJ", "id": "UUID", "ticket": 1 }||
{
    "partId": "",
    "groupId": 0,
    "locked": false,
    "zIndex": 9.0876,
    "fileName": "a.txt",
    "startX": 200,
    "startY": 300,
    "width": 10,
    "height": 20,
    "rotation": 0,
	"isMirror": false,
	"content": "data:text/plain;base64,MTIzNA==",
}|
```

1. type binary embedded object identifier: OBJ.
2. id ID, unique within the file.
3. ticket logical clock.
4. partId sub-library ID, exclusive to symbol pages; ignored on schematics.
5. groupId group ID, cannot be 0, empty by default when none.
6. locked whether locked.
7. zIndex Z-axis height.
8. fileName file name.
9. startX top-left X.
10. startY top-left Y.
11. width width.
12. height height.
13. rotation rotation angle, around `top-left`.
14. isMirror whether mirrored.
15. content binary data, two modes.
    1. General format, compatible with `Data URLs`: `data:[<mediatype>][;base64],<data>`
        - e.g. `data:image/png;base64,asdfasdfwer`
        - e.g. `data:text/html,<html></html>`
    2. BLOB reference mode, `blob:hashid`.
