# SYS\_FileSystem class

系统 / 文件系统交互类

## Signature

```typescript
declare class SYS_FileSystem 
```

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[deleteFileInFileSystem(uri, force)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 删除文件系统内的文件


</td></tr>
<tr><td>

[getDocumentsPath()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 获取文档目录路径


</td></tr>
<tr><td>

[getEdaPath()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 获取 EDA 文档目录路径


</td></tr>
<tr><td>

[getExtensionFile(uri)](./SYS_FileSystem.md)


</td><td>


</td><td>

获取扩展内的文件


</td></tr>
<tr><td>

[getLibrariesPaths()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 获取库目录路径


</td></tr>
<tr><td>

[getProjectsPaths()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 获取工程目录路径


</td></tr>
<tr><td>

[listFilesOfFileSystem(folderPath, recursive)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 查看文件系统路径下的文件列表


</td></tr>
<tr><td>

[openReadFileDialog(filenameExtensions, multiFiles)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 打开读入文件窗口


</td></tr>
<tr><td>

[openReadFileDialog(filenameExtensions, multiFiles)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 打开读入文件窗口


</td></tr>
<tr><td>

[readFileFromFileSystem(uri)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 从文件系统读取文件


</td></tr>
<tr><td>

[saveFile(fileData, fileName)](./SYS_FileSystem.md)


</td><td>


</td><td>

保存文件


</td></tr>
<tr><td>

[saveFileToFileSystem(uri, fileData, fileName, force)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** 向文件系统写入文件


</td></tr>
</tbody></table>

---

## 方法详情

### deletefileinfilesystem

# SYS\_FileSystem.deleteFileInFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除文件系统内的文件

## Signature

```typescript
deleteFileInFileSystem(uri: string, force?: boolean): Promise<boolean>;
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

uri


</td><td>

string


</td><td>

文件资源定位符

如若结尾为斜杠 `/`<!-- -->（Windows 为反斜杠 `\`<!-- -->），则识别为文件夹；

如若结尾非斜杠，则识别为完整文件名，此时 `fileName` 参数将被忽略


</td></tr>
<tr><td>

force


</td><td>

boolean


</td><td>

_(Optional)_ 强制删除文件夹（当欲删除的是文件夹且文件夹内有文件时，是否强制删除该文件夹）


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

## Remarks

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### getdocumentspath

# SYS\_FileSystem.getDocumentsPath() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文档目录路径

## Signature

```typescript
getDocumentsPath(): Promise<string>;
```


## Returns

Promise&lt;string&gt;

文档目录路径

## Remarks

返回的路径中，结尾不包含斜杠 `/`<!-- -->（或反斜杠 `\`<!-- -->）

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### getedapath

# SYS\_FileSystem.getEdaPath() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 EDA 文档目录路径

## Signature

```typescript
getEdaPath(): Promise<string>;
```


## Returns

Promise&lt;string&gt;

EDA 文档目录路径

## Remarks

返回的路径中，结尾不包含斜杠 `/`<!-- -->（或反斜杠 `\`<!-- -->）

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### getextensionfile

# SYS\_FileSystem.getExtensionFile() method

获取扩展内的文件

## Signature

```typescript
getExtensionFile(uri: string): Promise<File | undefined>;
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

uri


</td><td>

string


</td><td>

文件路径


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

File 格式文件

### getlibrariespaths

# SYS\_FileSystem.getLibrariesPaths() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取库目录路径

## Signature

```typescript
getLibrariesPaths(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

库目录路径数组

## Remarks

注意 1：本接口仅全离线客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### getprojectspaths

# SYS\_FileSystem.getProjectsPaths() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取工程目录路径

## Signature

```typescript
getProjectsPaths(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

工程目录路径数组

## Remarks

注意 1：本接口仅半、全离线客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### listfilesoffilesystem

# SYS\_FileSystem.listFilesOfFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

查看文件系统路径下的文件列表

## Signature

```typescript
listFilesOfFileSystem(folderPath: string, recursive?: boolean): Promise<Array<ISYS_FileSystemFileList>>;
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

folderPath


</td><td>

string


</td><td>

目录路径


</td></tr>
<tr><td>

recursive


</td><td>

boolean


</td><td>

_(Optional)_ 是否递归获取所有子文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISYS\_FileSystemFileList](../interfaces/ISYS_FileSystemFileList.md)<!-- -->&gt;&gt;

当前目录下的文件列表

## Remarks

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### openreadfiledialog

# SYS\_FileSystem.openReadFileDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

打开读入文件窗口

## Signature

```typescript
openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: true): Promise<Array<File> | undefined>;
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

filenameExtensions


</td><td>

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ 文件扩展名


</td></tr>
<tr><td>

multiFiles


</td><td>

true


</td><td>

_(Optional)_ 是否允许读取多文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;File&gt; \| undefined&gt;

File 格式文件数组

### openreadfiledialog_1

# SYS\_FileSystem.openReadFileDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

打开读入文件窗口

## Signature

```typescript
openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: false): Promise<File | undefined>;
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

filenameExtensions


</td><td>

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ 文件扩展名


</td></tr>
<tr><td>

multiFiles


</td><td>

false


</td><td>

_(Optional)_ 是否允许读取多文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

File 格式文件

### readfilefromfilesystem

# SYS\_FileSystem.readFileFromFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

从文件系统读取文件

## Signature

```typescript
readFileFromFileSystem(uri: string): Promise<File | undefined>;
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

uri


</td><td>

string


</td><td>

文件资源定位符，需要包含完整的文件名称的绝对路径


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

File 格式文件

## Remarks

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### savefile

# SYS\_FileSystem.saveFile() method

保存文件

## Signature

```typescript
saveFile(fileData: File | Blob, fileName?: string): Promise<void>;
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

fileData


</td><td>

File \| Blob


</td><td>

文件数据


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ 文件名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

调用浏览器下载接口或 Electron 保存文件接口，将传入的文件流保存到本地

### savefiletofilesystem

# SYS\_FileSystem.saveFileToFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

向文件系统写入文件

## Signature

```typescript
saveFileToFileSystem(uri: string, fileData: File | Blob, fileName?: string, force?: boolean): Promise<boolean>;
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

uri


</td><td>

string


</td><td>

文件资源定位符

如若结尾为斜杠 `/`<!-- -->（Windows 为反斜杠 `\`<!-- -->），则识别为文件夹；

如若结尾非斜杠，则识别为完整文件名，此时 `fileName` 参数将被忽略


</td></tr>
<tr><td>

fileData


</td><td>

File \| Blob


</td><td>

文件数据


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ 文件名称


</td></tr>
<tr><td>

force


</td><td>

boolean


</td><td>

_(Optional)_ 强制写入（文件存在则覆盖文件）


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

写入操作是否成功，如若不允许覆盖但文件已存在将返回 `false` 的结果

## Remarks

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
