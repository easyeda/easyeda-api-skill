# EasyEDA File Format

## V2.2 File Format

V2.2 file format: [lceda-pro-file-format-v2.2_2022.12.15.zip](https://image.lceda.cn/files/lceda-pro-file-format-v2.2_2022.12.15.zip)

Hint: This is not the latest file format specification, but it contains most of the format details.

## V3 File Format

V3 uses a brand-new source format, completely different from previous formats.

Hint: EasyEDA 3.0 fully redesigned the project format, using the concept of logs for incremental storage of project changes; and switched from the array offset design style in 2.0 to a key-value style, making future format evolution easier, compatibility code development simpler, and readability improved.

V3 file format (example files included in the zip):
- [lceda-pro-file-format-v3_2025.10.21.zip](https://image.lceda.cn/files/lceda-pro-file-format-v3_2025.10.21.zip)
- [lceda-pro-file-format-v3_2025.10.21.md](https://image.lceda.cn/files/lceda-pro-file-format-v3_2025.10.21.md)
- [lceda-pro-file-format-v3_2025.10.21.pdf](https://image.lceda.cn/files/lceda-pro-file-format-v3_2025.10.21.pdf)

### Format Details Documents

- [Project Format](/en/format/project/index.md)
- [Schematic Format](/en/format/schematic/index.md)
- [PCB Format](/en/format/pcb/index.md)

### Basic Document Format

#### Document Conventions

-   All project data is stored in a log document. The first line of each change record must be the file header `DOCTYPE` to distinguish different document types. `DOCTYPE` exists as a `block-level element` in the project log.
-   Each line consists of two valid JSON objects concatenated together. The first object is used by the eventual consistency framework for parsing, and the latter is the `atomic structural object`.
-   Key names use camelCase, with the first letter of each word capitalized (except the first word), and no underscores or other separators between words.
-   All primitives must carry a `unique ID` within the file.
-   `Rotation angle` is positive in the counter-clockwise direction, and angles are always in degrees.
-   Unless otherwise specified, all coordinates, lengths, and sizes use `0.01 inch` as the unit.
-   All colors are expressed as `"#RRGGBB"`. To indicate no color (fully transparent), use `""`.
-   All properties described as `whether XXXX` are encoded with `1` for yes and `0` for no.
-   Parts not explicitly described in these conventions (such as escaping) follow [RFC 7195 The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc7159).

#### Type Categories

- **Common Data**: Includes basic information, creation information, modification information, etc.
- **Basic Information**: Includes metadata for project config, board, schematic, PCB, panel, symbol, footprint, device, etc.
- **BLOB True-Color Image**: True-color image data format.
- **Instance Attribute Override**: Instance attribute override format.
- **Variant**: Variant data format.
- **Component Grouping**: Component grouping data format.

#### Document Header

-   All data must begin with a document header to distinguish different document types.
-   When parsing line by line, encountering a document header means the following data belongs to that document until the next document header is encountered.

```json
{ "type": "DOCHEAD" }||{ "docType": "SCH_PAGE", "uuid": "UUID", "client": "clientID" }|
```

1. type: "DOCHEAD", document header identifier.
2. docType: document type.
3. uuid: document unique ID, unique within the project.
4. client: terminal identifier for eventual consistency.

###### docType Document Types

-   Project config `PROJECT_CONFIG`
-   Board `BOARD`
-   Schematic `SCH`
-   Schematic page `SCH_PAGE`
-   PCB `PCB`
-   Panel `PANEL`
-   Symbol `SYMBOL`
-   Footprint `FOOTPRINT`
-   Device `DEVICE`
-   True-color image `BLOB`
-   Instance attributes `INSTANCE`

#### Data Format

```json
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{["key": string]: any}|
```

The identifier `||` splits a record into inner and outer layers:

1. Outer layer data: used by the eventual consistency framework to ensure data consistency.
    1. type: data type.
    2. id: unique ID, must be unique within the specific type in the document.
    3. ticket: logical clock, only used by the eventual consistency framework to ensure data uniqueness.
2. Inner layer data: primitive atomic data, a `key-value` object. Specific contents are detailed in the corresponding document for each type.

The reason for splitting into inner and outer layers is that in the eventual consistency framework, the specific primitive data does not need to be concerned; only the outer layer data is needed to ensure data uniqueness, reducing unnecessary JSON parsing and saving memory.

```json
{ "type": "META", "ticket": 1}||{"name": "name"}|
```

Some data can only retain one record within a document. The `type` field alone can indicate uniqueness, so the `id` field is omitted. The `id` field is only used to distinguish multiple records of the same type.

#### Eventual Consistency

-   In Storage 3.0, adding, deleting, or modifying data adds a record to the log, so multiple records in the log may represent the same data.
-   The eventual consistency framework decides which record to keep based on the `type`, `id`, and `ticket` fields.

ps: For more details, please refer to the eventual consistency design document. Here we only explain the use of relevant fields.

###### Two records with the same type and id

```json
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{"data": 1}|
```

```json
{ "type": "TYPE", "id": "UUID", "ticket": 2}||{"data": 2}|
```

The eventual consistency framework compares the `ticket` field and keeps the record with the larger ticket. In the example above, the record with `data` 2 is kept.

###### Same type, same id, and same ticket

```json
{ "type": "DOCHEAD" }||{ "docType": "SCH_PAGE", "uuid": "UUID", "client": "1" }|
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{"data": 1}|
```

```json
{ "type": "DOCHEAD" }||{ "docType": "SCH_PAGE", "uuid": "UUID", "client": "2" }|
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{"data": 2}|
```

Then the `client` field in the document header is compared, and the record with the smaller client identifier is kept. In the example above, the record with `data` 1 is kept.

#### Deletion

##### Atomic Data Deletion

```json
{ "type": "TYPE", "id": "UUID", "ticket": 1}||""
```

Deleting data actually means setting the inner layer data to an empty string.

##### Document Deletion

```json
{ "type": "DELETE_DOC", "ticket": 1}||{"isDelete": true}|
```

1. type `DELETE_DOC` document deletion identifier.
2. isDelete whether deleted.

-   Document deletion actually adds a deletion marker and does not directly delete document data from the log, to facilitate undoing document deletion and maintaining data consistency.
-   All deleted data is retained in the log. If users want to remove deleted data records from the project, they should clone the project. Log snapshots will not clear related deletion records.
