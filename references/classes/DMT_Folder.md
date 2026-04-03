# DMT\_Folder class

文档树 / 文件夹类

## 签名

```typescript
declare class DMT_Folder 
```

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建文件夹

## 签名

```typescript
createFolder(folderName: string, teamUuid: string, parentFolderUuid?: string, description?: string): Promise<string | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 父文件夹 UUID，如若不指定，则为根文件夹


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_（可选）_ 文件夹描述


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

文件夹 UUID，如若为 `undefined` 则创建失败

### deletefolder

# DMT\_Folder.deleteFolder() method

删除文件夹

## 签名

```typescript
deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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



## 返回值

Promise&lt;boolean&gt;

操作是否成功

### getallfoldersuuid

# DMT\_Folder.getAllFoldersUuid() method

获取所有文件夹的 UUID

## 签名

```typescript
getAllFoldersUuid(teamUuid: string): Promise<Array<string>>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

teamUuid


</td><td>

string


</td><td>

团队 UUID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;string&gt;&gt;

文件夹 UUID 数组

## 备注

本接口忽略层级信息，将会返回所有层级的文件夹的 UUID 并放置于一维数组中

### getfolderinfo

# DMT\_Folder.getFolderInfo() method

获取文件夹详细属性

## 签名

```typescript
getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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



## 返回值

Promise&lt;[IDMT\_FolderItem](../interfaces/IDMT_FolderItem.md) \| undefined&gt;

文件夹属性，如若为 `undefined` 则获取失败

## 备注

当 [parentFolderUuid](../interfaces/IDMT_FolderItem.md) 等于 [teamUuid](../interfaces/IDMT_FolderItem.md) 时，代表当前文件夹为指定团队下的一级文件夹

### modifyfolderdescription

# DMT\_Folder.modifyFolderDescription() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改文件夹描述

## 签名

```typescript
modifyFolderDescription(teamUuid: string, folderUuid: string, description?: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 文件夹描述，如若为 `undefined` 则清空工程现有描述


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

是否修改成功

## 备注

修改文件夹描述需要与工作区系统进行交互，修改操作存在延迟，需要短暂等待后才会呈现效果

### modifyfoldername

# DMT\_Folder.modifyFolderName() method

修改文件夹名称

## 签名

```typescript
modifyFolderName(teamUuid: string, folderUuid: string, folderName: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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



## 返回值

Promise&lt;boolean&gt;

是否修改成功

### movefoldertofolder

# DMT\_Folder.moveFolderToFolder() method

移动文件夹

## 签名

```typescript
moveFolderToFolder(teamUuid: string, folderUuid: string, parentFolderUuid?: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 父文件夹 UUID，如若不指定，则默认为根文件夹


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

是否移动成功
