# IDMT\_EditorDocumentItem interface

编辑器文档对象

## 签名

```typescript
interface IDMT_EditorDocumentItem 
```

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[documentType](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

[EDMT\_EditorDocumentType](../enums/EDMT_EditorDocumentType.md)


</td><td>

文档类型


</td></tr>
<tr><td>

[parentLibraryUuid?](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 库文档所属库 UUID


</td></tr>
<tr><td>

[parentProjectUuid?](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 文档所属工程 UUID


</td></tr>
<tr><td>

[tabId](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

文档的标签页 ID


</td></tr>
<tr><td>

[uuid](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

文档 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### documenttype

# IDMT\_EditorDocumentItem.documentType property

文档类型

## 签名

```typescript
documentType: EDMT_EditorDocumentType;
```

### parentlibraryuuid

# IDMT\_EditorDocumentItem.parentLibraryUuid property

库文档所属库 UUID

## 签名

```typescript
parentLibraryUuid?: string;
```

### parentprojectuuid

# IDMT\_EditorDocumentItem.parentProjectUuid property

文档所属工程 UUID

## 签名

```typescript
parentProjectUuid?: string;
```

### tabid

# IDMT\_EditorDocumentItem.tabId property

文档的标签页 ID

## 签名

```typescript
tabId: string;
```

### uuid

# IDMT\_EditorDocumentItem.uuid property

文档 UUID

## 签名

```typescript
uuid: string;
```
