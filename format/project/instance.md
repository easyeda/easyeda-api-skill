# Instance Attribute Override

## Document Header

```json
{ "type": "DOCHEAD" }||{ "docType": "INSTANCE", "uuid": "SCH-UNIQUE-ID_$5|e100_$1|e55_$6|e15_$8", "client": "clientID" }|
```

1. type: `DOCHEAD`, document header identifier.
2. docType: `INSTANCE` instance attribute override.
3. uuid: hierarchical ID, unique within the project, IDs separated by `_`.
    1. The first is the top-level schematic ID.
    2. The last goes only to the sheet ID.
    3. All in between use the numbering combination syntax to locate `Block Symbol`, e.g. `$1|e2`, where `$1` is the sheet ID and `e2` is the `Block Symbol` ID.
4. client: terminal identifier for eventual consistency.

## Attribute Override

```json
{ "type": "INSTANCE_ATTR", "id": "e176",  "ticket": 1 }||data
```

1. type `INSTANCE_ATTR` instance attribute override.
2. id primitive ID.
3. data attribute override, data signature is `{ [parentId: string]: { [key: string]: string }| }|`

```json
{ "type": "DOCHEAD" }||{ "docType": "INSTANCE", "uuid": "SCH-UNIQUE-ID_$5|e100_$1|e55_$6|e15_$8", "client": "clientID" }|
{ "type": "INSTANCE_ATTR", "id": "e176",  "ticket": 1 }||{ "Designator": "U15", "ASDF": "1234" }|
{ "type": "INSTANCE_ATTR", "id": "e176e5",  "ticket": 1 }||{ "NUMBER": 2 }|
{ "type": "INSTANCE_ATTR", "id": "e178",  "ticket": 1 }||{ "Author": "abc" }|
```
