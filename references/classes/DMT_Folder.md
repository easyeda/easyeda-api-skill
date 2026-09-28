# DMT\_Folder class

Document tree / Folder class

## Signature

```typescript
class DMT_Folder
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

**_(BETA)_** Create Folder

</td></tr>
<tr><td>

[deleteFolder(teamUuid, folderUuid)](./DMT_Folder.md)

</td><td>

</td><td>

Delete Folder

</td></tr>
<tr><td>

[getAllFoldersUuid(teamUuid)](./DMT_Folder.md)

</td><td>

</td><td>

Get the UUIDs of all folders

</td></tr>
<tr><td>

[getFolderInfo(teamUuid, folderUuid)](./DMT_Folder.md)

</td><td>

</td><td>

Get Folder detailed properties

</td></tr>
<tr><td>

[modifyFolderDescription(teamUuid, folderUuid, description)](./DMT_Folder.md)

</td><td>

</td><td>

**_(BETA)_** Modify Folder description

</td></tr>
<tr><td>

[modifyFolderName(teamUuid, folderUuid, folderName)](./DMT_Folder.md)

</td><td>

</td><td>

Modify Folder name

</td></tr>
<tr><td>

[moveFolderToFolder(teamUuid, folderUuid, parentFolderUuid)](./DMT_Folder.md)

</td><td>

</td><td>

Move folder

</td></tr>
</tbody></table>

---

## 方法详情

### createfolder

# DMT\_Folder.createFolder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Folder

## Signature

```typescript
function createFolder(
	folderName: string,
	teamUuid: string,
	parentFolderUuid?: string,
	description?: string,
): Promise<string | undefined>;
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

Folder name

</td></tr>
<tr><td>

teamUuid

</td><td>

string

</td><td>

Team UUID

</td></tr>
<tr><td>

parentFolderUuid

</td><td>

string

</td><td>

_(Optional)_ Parent folder UUID. If not specified, it is the root folder

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_(Optional)_ Folder description

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

Folder UUID, if it is `undefined` creation fails

## Example

```javascript
// 1. 取当前工程所属团队，作为文件夹的归属
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 在团队根目录下创建测试文件夹
const folderUuid = await eda.dmt_Folder.createFolder('嘉立创示例_文件夹', teamUuid);

// 3. 等待工作区同步后回读，确认文件夹已落地
await new Promise(r => setTimeout(r, 1500));
const folderInfo = await eda.dmt_Folder.getFolderInfo(teamUuid, folderUuid);

console.log('folderUuid:', folderUuid);
console.log('name:', folderInfo?.name);
console.log('parentFolderUuid:', folderInfo?.parentFolderUuid === teamUuid ? '(团队根目录)' : folderInfo?.parentFolderUuid);
```

### deletefolder

# DMT\_Folder.deleteFolder() method

Delete Folder

## Signature

```typescript
function deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>;
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

Team UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

Folder UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example

```javascript
// 1. 取当前工程所属团队
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 创建专用测试文件夹（避免动到用户现有目录）
const folderUuid = await eda.dmt_Folder.createFolder('嘉立创示例_待删除', teamUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 删除该文件夹
const deleted = await eda.dmt_Folder.deleteFolder(teamUuid, folderUuid);

// 4. 回读确认已删除（返回 undefined 说明文件夹已不存在）
await new Promise(r => setTimeout(r, 1000));
const folderInfo = await eda.dmt_Folder.getFolderInfo(teamUuid, folderUuid);

console.log('deleted:', deleted);
console.log('folderInfo after delete:', folderInfo === undefined ? '已不存在' : '仍存在');
```

### getallfoldersuuid

# DMT\_Folder.getAllFoldersUuid() method

Get the UUIDs of all folders

## Signature

```typescript
function getAllFoldersUuid(teamUuid: string): Promise<Array<string>>;
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

Team UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Folder UUID array

## Remarks

This API ignores hierarchy information. It will return the UUIDs of folders at all levels and place them in a one-dimensional array

## Example

```javascript
// 1. 取当前工程所属团队
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 创建一个测试文件夹，保证列表里有新近创建的对象
const folderUuid = await eda.dmt_Folder.createFolder('嘉立创示例_盘点', teamUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 获取所有文件夹 UUID，确认测试文件夹在列
const allUuids = await eda.dmt_Folder.getAllFoldersUuid(teamUuid);

console.log('folderUuid:', folderUuid);
console.log('total folders:', allUuids.length);
console.log('test folder included:', allUuids.includes(folderUuid));

// 4. 清理测试文件夹（查询类案例不留测试对象）
await eda.dmt_Folder.deleteFolder(teamUuid, folderUuid);
```

### getfolderinfo

# DMT\_Folder.getFolderInfo() method

Get Folder detailed properties

## Signature

```typescript
function getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>;
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

Team UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

Folder UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IDMT\_FolderItem](../interfaces/IDMT_FolderItem.md) \| undefined&gt;

Folder property; if it is `undefined`<!-- -->, the retrieval failed

## Remarks

When [parentFolderUuid](../interfaces/IDMT_FolderItem.md) equals [teamUuid](../interfaces/IDMT_FolderItem.md)<!-- -->, it means the current folder is a first-level folder under the specified team

## Example

```javascript
// 1. 取当前工程所属团队
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 创建带描述的测试文件夹，等 1.5s 让工作区同步
const folderUuid = await eda.dmt_Folder.createFolder('嘉立创示例_查询', teamUuid, undefined, '嘉立创示例：初始描述');
await new Promise(r => setTimeout(r, 1500));

// 3. 查询文件夹详细属性
const folderInfo = await eda.dmt_Folder.getFolderInfo(teamUuid, folderUuid);

console.log('folderUuid:', folderUuid);
console.log('folderInfo:', JSON.stringify({
	name: folderInfo?.name,
	description: folderInfo?.description,
	parentFolderUuid: folderInfo?.parentFolderUuid,
	teamUuid: folderInfo?.teamUuid,
}));

// 4. 清理测试文件夹（查询类案例不留测试对象）
await eda.dmt_Folder.deleteFolder(teamUuid, folderUuid);
```

### modifyfolderdescription

# DMT\_Folder.modifyFolderDescription() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Folder description

## Signature

```typescript
function modifyFolderDescription(
	teamUuid: string,
	folderUuid: string,
	description?: string,
): Promise<boolean>;
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

Team UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

Folder UUID

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_(Optional)_ Folder description. If it is `undefined`<!-- -->, the existing project description is cleared

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether Modify Successful

## Remarks

Modifying the folder description requires interaction with the workspace system. The modification is delayed and takes effect only after a short wait

## Example

```javascript
// 1. 取当前工程所属团队
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 创建带初始描述的测试文件夹，等 1.5s 让工作区同步
const folderUuid = await eda.dmt_Folder.createFolder('嘉立创示例_改描述', teamUuid, undefined, '嘉立创示例：旧描述');
await new Promise(r => setTimeout(r, 1500));

// 3. 修改文件夹描述
const modified = await eda.dmt_Folder.modifyFolderDescription(teamUuid, folderUuid, '嘉立创示例：更新后的描述');

// 4. 等 1s 让工作区同步，再回读验证
await new Promise(r => setTimeout(r, 1000));
const folderInfo = await eda.dmt_Folder.getFolderInfo(teamUuid, folderUuid);

console.log('modified:', modified);
console.log('description:', folderInfo?.description);
```

### modifyfoldername

# DMT\_Folder.modifyFolderName() method

Modify Folder name

## Signature

```typescript
function modifyFolderName(
	teamUuid: string,
	folderUuid: string,
	folderName: string,
): Promise<boolean>;
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

Team UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

Folder UUID

</td></tr>
<tr><td>

folderName

</td><td>

string

</td><td>

Folder name

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether Modify Successful

## Example

```javascript
// 1. 取当前工程所属团队
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 创建测试文件夹并等待工作区同步
const folderUuid = await eda.dmt_Folder.createFolder('嘉立创示例_旧名称', teamUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 修改文件夹名称
const renamed = await eda.dmt_Folder.modifyFolderName(teamUuid, folderUuid, '嘉立创示例_新名称');

// 4. 等 1s 后回读，验证名称已更新
await new Promise(r => setTimeout(r, 1000));
const folderInfo = await eda.dmt_Folder.getFolderInfo(teamUuid, folderUuid);

console.log('renamed:', renamed);
console.log('name:', folderInfo?.name);
```

### movefoldertofolder

# DMT\_Folder.moveFolderToFolder() method

Move folder

## Signature

```typescript
function moveFolderToFolder(
	teamUuid: string,
	folderUuid: string,
	parentFolderUuid?: string,
): Promise<boolean>;
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

Team UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

Folder UUID

</td></tr>
<tr><td>

parentFolderUuid

</td><td>

string

</td><td>

_(Optional)_ Parent folder UUID. If not specified, it defaults to the root folder

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the move is successful

## Example

```javascript
// 1. 取当前工程所属团队
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();
const teamUuid = projectInfo.teamUuid;

// 2. 创建父、子两个测试文件夹，等 1.5s 让工作区同步
const parentUuid = await eda.dmt_Folder.createFolder('嘉立创示例_父目录', teamUuid);
const childUuid = await eda.dmt_Folder.createFolder('嘉立创示例_子目录', teamUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 把子目录移动到父目录下
const moved = await eda.dmt_Folder.moveFolderToFolder(teamUuid, childUuid, parentUuid);

// 4. 等 1s 后回读，验证子目录的父级已变为父目录
await new Promise(r => setTimeout(r, 1000));
const childInfo = await eda.dmt_Folder.getFolderInfo(teamUuid, childUuid);

console.log('moved:', moved);
console.log('child parentFolderUuid:', childInfo?.parentFolderUuid, '(expect:', `${parentUuid})`);
```
