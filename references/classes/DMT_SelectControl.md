# DMT\_SelectControl class

Document tree / selection control class

## Signature

```typescript
class DMT_SelectControl
```

## Remarks

Query and control of the selection focus in the document tree

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[getCurrentDocumentInfo()](./DMT_SelectControl.md)

</td><td>

</td><td>

**_(BETA)_** Get the properties of the current document

</td></tr>
</tbody></table>

---

## 方法详情

### getcurrentdocumentinfo

# DMT\_SelectControl.getCurrentDocumentInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the properties of the current document

## Signature

```typescript
function getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_EditorDocumentItem](../interfaces/IDMT_EditorDocumentItem.md) \| undefined&gt;

An object composed of the document type, UUID, the UUID of the project it belongs to, and the UUID of the library it belongs to. If it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the document type, UUID, and the UUID of the project or library it belongs to for the currently open document that has the last input focus

## Example

```javascript
// 1. 创建专用测试原理图（自带图页 p1），打开该页让焦点落到测试文档上
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
const pageUuid = info.page[0].uuid;
await eda.dmt_EditorControl.openDocument(pageUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 获取当前焦点文档的属性（documentType: 1=原理图, 3=PCB）
const doc = await eda.dmt_SelectControl.getCurrentDocumentInfo();

// 3. 输出文档类型、UUID、标签页与所属工程，确认正是刚打开的测试图页
console.log('documentType:', doc?.documentType);
console.log('documentUuid:', doc?.uuid);
console.log('tabId:', doc?.tabId);
console.log('parentProjectUuid:', doc?.parentProjectUuid);
console.log('isFocusedPage:', doc?.uuid === pageUuid);

// 4. 清理测试原理图（处于打开状态也可以直接删除）
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```
