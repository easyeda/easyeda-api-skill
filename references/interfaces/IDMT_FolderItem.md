# IDMT\_FolderItem interface

文件夹属性

## Signature

```typescript
interface IDMT_FolderItem 
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

_(Optional)_ 子文件夹 UUID 列表


</td></tr>
<tr><td>

[description?](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 文件夹描述


</td></tr>
<tr><td>

[itemType](./IDMT_FolderItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.FOLDER](../enums/EDMT_ItemType.md)


</td><td>

项目类型


</td></tr>
<tr><td>

[name](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

文件夹名称


</td></tr>
<tr><td>

[parentFolderUuid](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

父文件夹 UUID


</td></tr>
<tr><td>

[teamUuid](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

所属团队 UUID


</td></tr>
<tr><td>

[uuid](./IDMT_FolderItem.md)


</td><td>


</td><td>

string


</td><td>

文件夹 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### childrenfoldersuuid

# IDMT\_FolderItem.childrenFoldersUuid property

子文件夹 UUID 列表

## Signature

```typescript
childrenFoldersUuid?: Array<string>;
```

### description

# IDMT\_FolderItem.description property

文件夹描述

## Signature

```typescript
description?: string;
```

### itemtype

# IDMT\_FolderItem.itemType property

项目类型

## Signature

```typescript
readonly itemType: EDMT_ItemType.FOLDER;
```

### name

# IDMT\_FolderItem.name property

文件夹名称

## Signature

```typescript
name: string;
```

### parentfolderuuid

# IDMT\_FolderItem.parentFolderUuid property

父文件夹 UUID

## Signature

```typescript
parentFolderUuid: string;
```

### teamuuid

# IDMT\_FolderItem.teamUuid property

所属团队 UUID

## Signature

```typescript
teamUuid: string;
```

### uuid

# IDMT\_FolderItem.uuid property

文件夹 UUID

## Signature

```typescript
uuid: string;
```
