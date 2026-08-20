# SYS\_FileSystem class

System / file system interaction class

## Signature

```typescript
export class SYS_FileSystem 
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

[createDirectoryInFileSystem(folderPath)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** In file system in create folder


</td></tr>
<tr><td>

[createObjectURL(blob)](./SYS_FileSystem.md)


</td><td>


</td><td>

Create ObjectURL


</td></tr>
<tr><td>

[deleteFileInFileSystem(uri, force)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Delete a file in the file system


</td></tr>
<tr><td>

[existsPathInFileSystem(uri)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Check whether a file or directory exists in the file system


</td></tr>
<tr><td>

[getDocumentsPath()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Get the document directory path


</td></tr>
<tr><td>

[getEdaPath()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Get the EDA document directory path


</td></tr>
<tr><td>

[getExtensionFile(uri)](./SYS_FileSystem.md)


</td><td>


</td><td>

Get a file from the extension


</td></tr>
<tr><td>

[getLibrariesPaths()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Get the library directory paths


</td></tr>
<tr><td>

[getProjectsPaths()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Get the project directory paths


</td></tr>
<tr><td>

[listFilesOfFileSystem(folderPath, recursive)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** View the file list under a file system path


</td></tr>
<tr><td>

[openReadFileDialog(filenameExtensions, multiFiles)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Open the read-file dialog


</td></tr>
<tr><td>

[openReadFileDialog(filenameExtensions, multiFiles)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Open the read-file dialog


</td></tr>
<tr><td>

[openReadFolderDialog()](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Open the read-folder dialog


</td></tr>
<tr><td>

[readFileFromFileSystem(uri)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Read a file from the file system


</td></tr>
<tr><td>

[revokeObjectURL(url)](./SYS_FileSystem.md)


</td><td>


</td><td>

Revoke the ObjectURL


</td></tr>
<tr><td>

[saveFile(fileData, fileName)](./SYS_FileSystem.md)


</td><td>


</td><td>

Save File


</td></tr>
<tr><td>

[saveFileToFileSystem(uri, fileData, fileName, force)](./SYS_FileSystem.md)


</td><td>


</td><td>

**_(BETA)_** Write a file to the file system


</td></tr>
</tbody></table>

---

## 方法详情

### createdirectoryinfilesystem

# SYS\_FileSystem.createDirectoryInFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

In file system in create folder

## Signature

```typescript
public createDirectoryInFileSystem(folderPath: string): Promise<boolean>;
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

Folder path


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Create Whether the operation is successful

## Remarks

Supports recursively creating multi-level directories

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error` ADD since EDA v3.2.166

### createobjecturl

# SYS\_FileSystem.createObjectURL() method

Create ObjectURL

## Signature

```typescript
public createObjectURL(blob: Blob | File): string;
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

blob


</td><td>

Blob \| File


</td><td>

Blob or File object


</td></tr>
</tbody></table>



## Returns

string

ObjectURL string

## Remarks

Create an ObjectURL pointing to the passed-in Blob / File object ADD since EDA v3.2.162

## Example


```javascript
// 1. 构造一段文本数据
const blob = new Blob(['嘉立创示例数据'], { type: 'text/plain' });

// 2. 创建 ObjectURL（同步方法，直接返回字符串）
const url = eda.sys_FileSystem.createObjectURL(blob);

console.log('ObjectURL：', url);
```

### deletefileinfilesystem

# SYS\_FileSystem.deleteFileInFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete a file in the file system

## Signature

```typescript
public deleteFileInFileSystem(uri: string, force?: boolean): Promise<boolean>;
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

File resource locator. If it ends with a slash `/` (a backslash `\` on Windows), it is recognized as a folder; if it does not end with a slash, it is recognized as a complete file name, in which case the `fileName` parameter is ignored


</td></tr>
<tr><td>

force


</td><td>

boolean


</td><td>

_(Optional)_ Force delete the folder (whether to force delete the folder when the target is a folder containing files)


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Remarks

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### existspathinfilesystem

# SYS\_FileSystem.existsPathInFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Check whether a file or directory exists in the file system

## Signature

```typescript
public existsPathInFileSystem(uri: string): Promise<boolean>;
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

File resource locator. An absolute path containing the complete file name is required


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the file or directory exists

## Remarks

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error` ADD since EDA v3.2.167

### getdocumentspath

# SYS\_FileSystem.getDocumentsPath() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the document directory path

## Signature

```typescript
public getDocumentsPath(): Promise<string>;
```


## Returns

Promise&lt;string&gt;

Document directory path

## Remarks

In the returned path, the end does not contain a slash `/` (or a backslash `\`<!-- -->)

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### getedapath

# SYS\_FileSystem.getEdaPath() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the EDA document directory path

## Signature

```typescript
public getEdaPath(): Promise<string>;
```


## Returns

Promise&lt;string&gt;

EDA document directory path

## Remarks

In the returned path, the end does not contain a slash `/` (or a backslash `\`<!-- -->)

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### getextensionfile

# SYS\_FileSystem.getExtensionFile() method

Get a file from the extension

## Signature

```typescript
public getExtensionFile(uri: string): Promise<File | undefined>;
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

File path


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

File format file

## Example


```javascript
// 1. 读取扩展安装目录下的 extension.json
const file = await eda.sys_FileSystem.getExtensionFile('extension.json');

// 2. 输出文件信息（size 单位为字节，内容可用 file.text() 读取）
console.log('文件名：', file.name);
console.log('文件大小：', file.size);
```

### getlibrariespaths

# SYS\_FileSystem.getLibrariesPaths() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the library directory paths

## Signature

```typescript
public getLibrariesPaths(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of library directory paths

## Remarks

Note 1: This API is only valid for fully offline clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### getprojectspaths

# SYS\_FileSystem.getProjectsPaths() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the project directory paths

## Signature

```typescript
public getProjectsPaths(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of project directory paths

## Remarks

Note 1: This API is only valid for semi-offline and fully offline clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### listfilesoffilesystem

# SYS\_FileSystem.listFilesOfFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

View the file list under a file system path

## Signature

```typescript
public listFilesOfFileSystem(folderPath: string, recursive?: boolean): Promise<Array<ISYS_FileSystemFileList>>;
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

Directory path


</td></tr>
<tr><td>

recursive


</td><td>

boolean


</td><td>

_(Optional)_ Whether to recursively get all sub-files


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISYS\_FileSystemFileList](../interfaces/ISYS_FileSystemFileList.md)<!-- -->&gt;&gt;

File list in the current directory

## Remarks

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### openreadfiledialog

# SYS\_FileSystem.openReadFileDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open the read-file dialog

## Signature

```typescript
public openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: true): Promise<Array<File> | undefined>;
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

_(Optional)_ File extension


</td></tr>
<tr><td>

multiFiles


</td><td>

true


</td><td>

_(Optional)_ Whether multiple files are allowed to be read


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;File&gt; \| undefined&gt;

File format file array

## Example


```javascript
// 1. 打开选择窗口（限定 .json 文件，单选；用户选择前 Promise 一直挂起）
eda.sys_FileSystem.openReadFileDialog('.json').then(file => {
  // 用户完成选择后触发；直接关闭窗口时 file 为 undefined
  if (file) {
    console.log('已选择文件：', file.name);
  }
});

// 2. 窗口已弹出，主流程不等待用户操作
console.log('已打开文件选择窗口');
```

### openreadfiledialog_1

# SYS\_FileSystem.openReadFileDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open the read-file dialog

## Signature

```typescript
public openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: false): Promise<File | undefined>;
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

_(Optional)_ File extension


</td></tr>
<tr><td>

multiFiles


</td><td>

false


</td><td>

_(Optional)_ Whether multiple files are allowed to be read


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

File format file

### openreadfolderdialog

# SYS\_FileSystem.openReadFolderDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open the read-folder dialog

## Signature

```typescript
public openReadFolderDialog(): Promise<Array<{ relativePath: string; file: File }>>;
```


## Returns

Promise&lt;Array&lt;{ relativePath: string; file: File }&gt;&gt;

All read files and their path information

## Remarks

developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory \| MDN<!-- -->} ADD since EDA v4.2

### readfilefromfilesystem

# SYS\_FileSystem.readFileFromFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Read a file from the file system

## Signature

```typescript
public readFileFromFileSystem(uri: string): Promise<File | undefined>;
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

File resource locator. An absolute path containing the complete file name is required


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

File format file

## Remarks

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### revokeobjecturl

# SYS\_FileSystem.revokeObjectURL() method

Revoke the ObjectURL

## Signature

```typescript
public revokeObjectURL(url: string): void;
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

url


</td><td>

string


</td><td>

ObjectURL string


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Revoke the specified ObjectURL ADD since EDA v3.2.162

## Example


```javascript
// 1. 先创建一个 ObjectURL
const blob = new Blob(['嘉立创示例数据']);
const url = eda.sys_FileSystem.createObjectURL(blob);
console.log('创建的 ObjectURL：', url);

// 2. 用完后吊销（同步方法，无返回值）
eda.sys_FileSystem.revokeObjectURL(url);
console.log('已吊销');
```

### savefile

# SYS\_FileSystem.saveFile() method

Save File

## Signature

```typescript
public saveFile(fileData: File | Blob, fileName?: string): Promise<void>;
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

File data


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

Calls the browser download API or the Electron save-file API to save the passed-in file stream locally

## Example


```javascript
// 1. 构造要保存的 CSV 内容
const content = '编号,器件,数量\n1,C0402,10\n2,C0603,20';
const blob = new Blob([content], { type: 'text/csv' });

// 2. 保存到本地（完成后 Promise 才结束）
await eda.sys_FileSystem.saveFile(blob, '嘉立创示例_BOM导出.csv');

console.log('已保存文件：', '嘉立创示例_BOM导出.csv', blob.size, '字节');
```

### savefiletofilesystem

# SYS\_FileSystem.saveFileToFileSystem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Write a file to the file system

## Signature

```typescript
public saveFileToFileSystem(uri: string, fileData: File | Blob, fileName?: string, force?: boolean): Promise<boolean>;
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

File resource locator. If it ends with a slash `/` (a backslash `\` on Windows), it is recognized as a folder; if it does not end with a slash, it is recognized as a complete file name, in which case the `fileName` parameter is ignored


</td></tr>
<tr><td>

fileData


</td><td>

File \| Blob


</td><td>

File data


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
<tr><td>

force


</td><td>

boolean


</td><td>

_(Optional)_ Force write (overwrite the file if it exists)


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the write operation was successful. If overwriting is not allowed but the file already exists, `false` is returned

## Remarks

Note 1: This API is only valid for clients. Calling it in a browser environment will always `throw Error`

Note 2: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`
