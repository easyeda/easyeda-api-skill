# DMT\_Folder class

文档树 / 文件夹类

## Signature

```typescript
declare class DMT_Folder 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[createFolder(folderName, teamUuid, parentFolderUuid, description)](./DMT_Folder.md)


</td><td>


</td><td>

**_(BETA)_** 创建文件夹


</td></tr>
<tr><td>

[deleteFolder(teamUuid, folderUuid)](./DMT_Folder.md)


</td><td>


</td><td>

删除文件夹


</td></tr>
<tr><td>

[getAllFoldersUuid(teamUuid)](./DMT_Folder.md)


</td><td>


</td><td>

获取所有文件夹的 UUID


</td></tr>
<tr><td>

[getFolderInfo(teamUuid, folderUuid)](./DMT_Folder.md)


</td><td>


</td><td>

获取文件夹详细属性


</td></tr>
<tr><td>

[modifyFolderDescription(teamUuid, folderUuid, description)](./DMT_Folder.md)


</td><td>


</td><td>

**_(BETA)_** 修改文件夹描述


</td></tr>
<tr><td>

[modifyFolderName(teamUuid, folderUuid, folderName)](./DMT_Folder.md)


</td><td>


</td><td>

修改文件夹名称


</td></tr>
<tr><td>

[moveFolderToFolder(teamUuid, folderUuid, parentFolderUuid)](./DMT_Folder.md)


</td><td>


</td><td>

移动文件夹


</td></tr>
</tbody></table>

---

## 方法详情

### createfolder

# DMT\_Folder.createFolder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建文件夹

## Signature

```typescript
createFolder(folderName: string, teamUuid: string, parentFolderUuid?: string, description?: string): Promise<string | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

folderName


</td><td>

string


</td><td>

文件夹名称


</td></tr>
<tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
<tr><td>

parentFolderUuid


</td><td>

string


</td><td>

_(Optional)_ 父文件夹 UUID，如若不指定，则为根文件夹


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ 文件夹描述


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

文件夹 UUID，如若为 `undefined` 则创建失败

### deletefolder

# DMT\_Folder.deleteFolder() method

删除文件夹

## Signature

```typescript
deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

文件夹 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### getallfoldersuuid

# DMT\_Folder.getAllFoldersUuid() method

获取所有文件夹的 UUID

## Signature

```typescript
getAllFoldersUuid(teamUuid: string): Promise<Array<string>>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

文件夹 UUID 数组

## Remarks

本接口忽略层级信息，将会返回所有层级的文件夹的 UUID 并放置于一维数组中

### getfolderinfo

# DMT\_Folder.getFolderInfo() method

获取文件夹详细属性

## Signature

```typescript
getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

文件夹 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_FolderItem](../interfaces/IDMT_FolderItem.md) \| undefined&gt;

文件夹属性，如若为 `undefined` 则获取失败

## Remarks

当 [parentFolderUuid](../interfaces/IDMT_FolderItem.md) 等于 [teamUuid](../interfaces/IDMT_FolderItem.md) 时，代表当前文件夹为指定团队下的一级文件夹

### modifyfolderdescription

# DMT\_Folder.modifyFolderDescription() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改文件夹描述

## Signature

```typescript
modifyFolderDescription(teamUuid: string, folderUuid: string, description?: string): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

文件夹 UUID


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ 文件夹描述，如若为 `undefined` 则清空工程现有描述


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否修改成功

## Remarks

修改文件夹描述需要与工作区系统进行交互，修改操作存在延迟，需要短暂等待后才会呈现效果

### modifyfoldername

# DMT\_Folder.modifyFolderName() method

修改文件夹名称

## Signature

```typescript
modifyFolderName(teamUuid: string, folderUuid: string, folderName: string): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

文件夹 UUID


</td></tr>
<tr><td>

folderName


</td><td>

string


</td><td>

文件夹名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否修改成功

### movefoldertofolder

# DMT\_Folder.moveFolderToFolder() method

移动文件夹

## Signature

```typescript
moveFolderToFolder(teamUuid: string, folderUuid: string, parentFolderUuid?: string): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
<tr><td>

folderUuid


</td><td>

string


</td><td>

文件夹 UUID


</td></tr>
<tr><td>

parentFolderUuid


</td><td>

string


</td><td>

_(Optional)_ 父文件夹 UUID，如若不指定，则默认为根文件夹


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否移动成功
