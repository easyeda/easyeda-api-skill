# 通用格式

## 文档头

```json
{ "type": "DOCHEAD" }||{ "docType": "SCH_PAGE", "uuid": "UUID", "client": "clientID" }|
```

```json
{ "type": "DOCHEAD" }||{ "docType": "SYMBOL", "uuid": "UUID", "client": "clientID" }|
```

-   type："DOCHEAD"，文档头标识
-   docType：文档类型，"SCH_PAGE"：原理图、 "SYMBOL"：符号
-   uuid：文档唯一编号，工程内唯一
-   client：最终一致性的一个终端标识

## 画布配置

编辑器附加信息，用于数据分析等功能，目前已占用的一些字段

```json
{ "type": "CANVAS", "ticket": 1 }||
{
  "originX":0,
  "originY":0,
}|
```

1. type："CANVAS"，画布配置信息标识
2. ticket 逻辑时钟
3. originX 画布原点 X
4. originY 画布原点 Y
