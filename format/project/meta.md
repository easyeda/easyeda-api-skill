# Basic Information

### Project Config

Stores project configuration data, previously kept in the backend project details.

```json
{ "type": "META", "ticket": 1 }||{ "name": "name", "default_sheet": "default_sheet_uuid"}|
```

1. name project name.
2. default_sheet default sheet of the project.

### Board

```json
{ "type": "META", "ticket": 1 }||{ "title": "title", "sort": 1}|
```

1. title board name.
2. sort sort weight.

### Schematic

```json
{ "type": "META", "ticket": 1 }||{ "name": "name", "board":"", "source": "", "version": ""}|
```

1. name name.
2. board uuid of the board it belongs to, empty if none.
3. source source document uuid.
4. version version, update time of the source document.

### Schematic Page

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Page Name",
    "schematic": "SID",
    "description": "description",
    "sort": 0.5,
    "source": "",
    "version": "",
}|
```

1. name name.
2. schematic uuid of the schematic it belongs to.
3. description description.
4. sort sort weight.
5. source source document uuid.
6. version version, update time of the source document.

### PCB

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "PCB Name",
    "board": "boardId",
    "description": "description",
    "parentId":"",
    "sort": 0.5,
    "source": "",
    "version": "",
}|
```

1. name name.
2. board uuid of the board it belongs to, empty if none.
3. description description.
4. parentId parent PCB UUID, empty if none.
5. sort sort weight.
6. source source document uuid.
7. version version, update time of the source document.

Child PCB

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Child PCB Name",
    "board": "",
    "description": "description",
    "parentId":"UUID",
    "sort": 0.2,
    "source": "",
    "version": "",
}|
```

### Panel

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Panel Name",
    "description": "description",
    "sort": 0.5,
}|
```

1. name name.
2. description description.
3. sort sort weight.

### Symbol

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "description",
    "type": 2,
    "tags": "tag1",
    "source": "",
    "version": "",
}|
```

1. name name.
2. description description.
3. type symbol type.
4. tags classification tags.
5. source source document uuid.
6. version version, update time of the source document.

### Footprint

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "description",
    "type": 4,
    "tags": "tag1",
    "source": "",
    "version": "",
    "pcb": "",
}|
```

1. name name.
2. description description.
3. type footprint type.
4. tags classification tags.
5. source source document uuid.
6. version version, update time of the source document.
7. pcb uuid of the pcb it belongs to, empty by default. Only special footprints have this field.

Special Footprint

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "description",
    "type": 4,
    "tags": "tag1",
    "source": "",
    "version": "",
    "pcb": "pcbUuid",
}|
```

### Device

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "description",
    "type": 4,
    "tags": "tag1",
    "source": "",
    "version": "",
    "attributes": {},
    "images": "",
}|
```

1. name name.
2. description description.
3. tags classification tags.
4. source source document uuid.
5. version version, update time of the source document.
6. attributes device attributes Key-Value.
7. images image links.
