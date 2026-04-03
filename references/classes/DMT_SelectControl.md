# DMT\_SelectControl class

文档树 / 选择控制类

## 签名

```typescript
declare class DMT_SelectControl 
```

## 备注

在文档树内进行选择焦点的查询、控制

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前文档的属性

## 签名

```typescript
getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;
```


## 返回值

Promise&lt;[IDMT\_EditorDocumentItem](../interfaces/IDMT_EditorDocumentItem.md) \| undefined&gt;

文档类型、UUID、所属工程的 UUID、所属库的 UUID 组成的对象，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的文档的文档类型、UUID、所属工程的 UUID 或所属库的 UUID
