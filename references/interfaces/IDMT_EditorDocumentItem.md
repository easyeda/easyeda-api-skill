# IDMT\_EditorDocumentItem interface

Editor document object

## Signature

```typescript
export interface IDMT_EditorDocumentItem 
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[documentType](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

[EDMT\_EditorDocumentType](../enums/EDMT_EditorDocumentType.md)


</td><td>

Document type


</td></tr>
<tr><td>

[parentLibraryUuid?](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Library document UUID of the library it belongs to


</td></tr>
<tr><td>

[parentProjectUuid?](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Document UUID of the project it belongs to


</td></tr>
<tr><td>

[tabId](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

Tab ID of the document


</td></tr>
<tr><td>

[uuid](./IDMT_EditorDocumentItem.md)


</td><td>


</td><td>

string


</td><td>

Document UUID


</td></tr>
</tbody></table>

---

## 属性详情

### documenttype

# IDMT\_EditorDocumentItem.documentType property

Document type

## Signature

```typescript
documentType: EDMT_EditorDocumentType;
```

### parentlibraryuuid

# IDMT\_EditorDocumentItem.parentLibraryUuid property

Library document UUID of the library it belongs to

## Signature

```typescript
parentLibraryUuid?: string;
```

### parentprojectuuid

# IDMT\_EditorDocumentItem.parentProjectUuid property

Document UUID of the project it belongs to

## Signature

```typescript
parentProjectUuid?: string;
```

### tabid

# IDMT\_EditorDocumentItem.tabId property

Tab ID of the document

## Signature

```typescript
tabId: string;
```

### uuid

# IDMT\_EditorDocumentItem.uuid property

Document UUID

## Signature

```typescript
uuid: string;
```
