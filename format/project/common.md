# Common Data

Each document carries basic information, creation information, and modification information, which are maintained by the project manager.

### Basic Information

```json
{ "type": "META", "ticket": 1 }||data
```

1. type "META" basic information.
2. data specific data, different for each document.

### Creation Information

Same for every document.

```json
{ "type": "META_CREATE", "ticket": 1 }||
{
    "creator": { "uuid":"UUID", "nickname":"nickname", "username":"username", },
    "createTime": 1725593026474,
}|
```

1. type "META_CREATE" creation information.
2. creator creator.
3. createTime creation time.

### Modification Information

```json
{ "type": "META_MODIFY", "ticket": 1 }||
{
    "modifier": { "uuid":"UUID", "nickname":"nickname", "username":"username", },
    "createTime": 1725593026474,
}|
```

1. type "META_MODIFY" modification information.
2. modifier modifier.
3. updateTime update time.
