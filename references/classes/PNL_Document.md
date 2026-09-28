# PNL\_Document class

Panel / document operation class

## Signature

```typescript
class PNL_Document
```

## Remarks

Operations performed on the design document as a whole

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[save()](./PNL_Document.md)

</td><td>

</td><td>

**_(BETA)_** Save Document

</td></tr>
</tbody></table>

---

## 方法详情

### save

# PNL\_Document.save() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Save Document

## Signature

```typescript
function save(): Promise<boolean>;
```

## Returns

Promise&lt;boolean&gt;

Whether the save operation was successful. Errors such as save failure and upload failure all return `false`

## Example

```javascript
// 1. 创建测试面板并打开（save 只对已打开的面板生效）
const panelUuid = await eda.dmt_Panel.createPanel();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(panelUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 保存面板文档
const saved = await eda.pnl_Document.save();
console.log('saved:', saved);

// 3. 删除本例创建的测试面板，保持工程整洁
const deleted = await eda.dmt_Panel.deletePanel(panelUuid);
console.log('deleted:', deleted);
```
