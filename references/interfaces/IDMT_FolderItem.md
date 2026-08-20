# IDMT\_FolderItem interface

Folder property

## Signature

```typescript
export interface IDMT_FolderItem 
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

[childrenFoldersUuid?](./IDMT_FolderItem.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ List of child folder UUIDs


</td></tr>
<tr><td>

[description?](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Folder description


</td></tr>
<tr><td>

[itemType](./IDMT_FolderItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.FOLDER](../enums/EDMT_ItemType.md)


</td><td>

Project type


</td></tr>
<tr><td>

[name](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

Folder name


</td></tr>
<tr><td>

[parentFolderUuid](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

Parent folder UUID


</td></tr>
<tr><td>

[teamUuid](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the team it belongs to


</td></tr>
<tr><td>

[uuid](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

Folder UUID


</td></tr>
</tbody></table>

---

## 属性详情

### childrenfoldersuuid

# IDMT\_FolderItem.childrenFoldersUuid property

List of child folder UUIDs

## Signature

```typescript
childrenFoldersUuid?: Array<string>;
```

### description

# IDMT\_FolderItem.description property

Folder description

## Signature

```typescript
description?: string;
```

### itemtype

# IDMT\_FolderItem.itemType property

Project type

## Signature

```typescript
readonly itemType: EDMT_ItemType.FOLDER;
```

### name

# IDMT\_FolderItem.name property

Folder name

## Signature

```typescript
name: string;
```

### parentfolderuuid

# IDMT\_FolderItem.parentFolderUuid property

Parent folder UUID

## Signature

```typescript
parentFolderUuid: string;
```

### teamuuid

# IDMT\_FolderItem.teamUuid property

UUID of the team it belongs to

## Signature

```typescript
teamUuid: string;
```

### uuid

# IDMT\_FolderItem.uuid property

Folder UUID

## Signature

```typescript
uuid: string;
```
