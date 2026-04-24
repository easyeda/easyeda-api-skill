# 实例值属性覆盖

## 文档头

```json
{ "type": "DOCHEAD" }||{ "docType": "INSTANCE", "uuid": "SCH-UNIQUE-ID_$5|e100_$1|e55_$6|e15_$8", "client": "clientID" }|
```

1. type：`DOCHEAD`，文档头标识
2. docType：`INSTANCE` 实例值属性覆盖
3. uuid：层次编号，工程内唯一，已`_`分割 id
    1. 第一个是顶层原理图编号
    2. 最后一个只到 Sheet 编号
    3. 中间所有的都是使用编号组合语法定位的 `Block Symbol`，如 `$1|e2`，其中 `$1` 为 Sheet 编号，`e2` 为 `Block Symbol` 编号
4. client：最终一致性的一个终端标识

## 属性覆盖

```json
{ "type": "INSTANCE_ATTR", "id": "e176",  "ticket": 1 }||data
```

1. type `INSTANCE_ATTR` 实例属性覆盖
2. id 图元编号
3. data 属性覆盖，数据签名为 `{ [parentId: string]: { [key: string]: string }| }|`

```json
{ "type": "DOCHEAD" }||{ "docType": "INSTANCE", "uuid": "SCH-UNIQUE-ID_$5|e100_$1|e55_$6|e15_$8", "client": "clientID" }|
{ "type": "INSTANCE_ATTR", "id": "e176",  "ticket": 1 }||{ "Designator": "U15", "ASDF": "1234" }|
{ "type": "INSTANCE_ATTR", "id": "e176e5",  "ticket": 1 }||{ "NUMBER": 2 }|
{ "type": "INSTANCE_ATTR", "id": "e178",  "ticket": 1 }||{ "Author": "abc" }|
```
