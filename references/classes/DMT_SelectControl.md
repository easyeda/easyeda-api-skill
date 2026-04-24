# DMT\_SelectControl class

文档树 / 选择控制类

## Signature

```typescript
declare class DMT_SelectControl 
```

## Remarks

在文档树内进行选择焦点的查询、控制

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

**_(BETA)_** 获取当前文档的属性


</td></tr>
</tbody></table>

---

## 方法详情

### getcurrentdocumentinfo

# DMT\_SelectControl.getCurrentDocumentInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前文档的属性

## Signature

```typescript
getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_EditorDocumentItem](../interfaces/IDMT_EditorDocumentItem.md) \| undefined&gt;

文档类型、UUID、所属工程的 UUID、所属库的 UUID 组成的对象，如若为 `undefined` 则获取失败

## Remarks

将会获取当前打开且拥有最后输入焦点的文档的文档类型、UUID、所属工程的 UUID 或所属库的 UUID
