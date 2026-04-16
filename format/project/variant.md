# 变体

## 文档头

```json
{ "type": "DOCHEAD" }||{ "docType": "VARIANT", "uuid": "UUID", "client": "clientID" }|
```

1. type：`DOCHEAD`，文档头标识
2. docType：`VARIANT` 变体数据
3. uuid: 唯一标识，随机 id
4. client：最终一致性的一个终端标识

## META 基本信息

```json
{ "type": "META", "ticket": 1 }||
{
	/** 名称 */
	"title": string,
	/** 描述 */
	"description": string,
	/** 原理图 */
	"schematicId": string,
	/** 排序 */
	"zIndex": number,
	/** 是否有未归组 */
	"notGrouped": boolean,
}|
```
