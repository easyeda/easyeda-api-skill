# 元件分组

## 文档头

```json
{ "type": "DOCHEAD" }||{ "docType": "COMPONENT_GROUP", "uuid": "UUID", "client": "clientID" }|
```

1. type：`DOCHEAD`，文档头标识
2. docType：`COMPONENT_GROUP` 元件分组
3. uuid: 唯一标识，随机 id
4. client：最终一致性的一个终端标识

### META 基本信息

```json
{ "type": "META", "ticket": 1 }||
{
	/** 名称 */
	"title": string,
	/** 子 元件分组的 父 元件分组 uuid */
	"parent": string,
	/** 属于直接变体的元件分组 不参与 元件分组树构建 */
	"belong": string,
	/** 元件分组树中排序 */
	"zIndex": number,
	/** 原理图 */
	"schematicId": string,
}|
```

### GROUP_INDEX 元件分组在变体的排序

```json
{ "type": "GROUP_INDEX", "ticket": 1, "id": "variantId" }||
{
	"zIndex": 1,
}|
```

1. type：`GROUP_INDEX`
2. ticket: 逻辑时钟
3. id：变体 uuid
4. zIndex：在变体中的排序

### GROUP_DATA 属性数据

```json
{ "type": "GROUP_DATA", "id": "e176@uuid",  "ticket": 1 }||data
```

1. type `GROUP_DATA` 属性数据
2. id 组合 id,以`@`分割：
    1. 第一个是图元 id
    2. 第二个是实例页 id
3. data 属性覆盖，数据签名为 `{ [key: string]: string }| `

```json
{ "type": "GROUP_DATA", "id": "e176@uuid1",  "ticket": 1 }||{ "Designator": "U15", "ASDF": "1234" }|
{ "type": "GROUP_DATA", "id": "e177@uuid1",  "ticket": 2 }||{ "NUMBER": 2 }|
{ "type": "GROUP_DATA", "id": "e176@uuid2",  "ticket": 3 }||{ "Author": "abc" }|
```
