# SYS\_FileManager class

System / file manager class

## Signature

```typescript
export class SYS_FileManager 
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

[extractLibInfo(data)](./SYS_FileManager.md)


</td><td>


</td><td>

Extract the library configuration information from the file


</td></tr>
<tr><td>

[extractProjectInfo(data)](./SYS_FileManager.md)


</td><td>


</td><td>

Extract the project configuration information from the file


</td></tr>
<tr><td>

[getCbbFileByCbbUuid(cbbUuid, libraryUuid, props)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Use reuse block UUID get reuse block file


</td></tr>
<tr><td>

[getDeviceFileByDeviceUuid(deviceUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

Use device UUID get device file


</td></tr>
<tr><td>

[getDocumentFile(fileName, password, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

Get Document file


</td></tr>
<tr><td>

[getDocumentFootprintSources()](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Get the document footprint source code


</td></tr>
<tr><td>

[getDocumentSource()](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Get Document source code


</td></tr>
<tr><td>

[getFootprintFileByFootprintUuid(footprintUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Use footprint UUID get footprint file


</td></tr>
<tr><td>

[getPanelLibraryFileByPanelLibraryUuid(panelLibraryUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Use panel library UUID get panel library file


</td></tr>
<tr><td>

[getProjectFile(fileName, password, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

Get Project file


</td></tr>
<tr><td>

[getProjectFileByProjectUuid(projectUuid, fileName, password, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Use project UUID get project file


</td></tr>
<tr><td>

[getSymbolFileBySymbolUuid(symbolUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Use symbol UUID get symbol file


</td></tr>
<tr><td>

[importProjectByProjectFile(projectFile, fileType, props, saveTo, librariesImportSetting)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Use project file import project


</td></tr>
<tr><td>

[importProjectByProjectFile(projectFile, fileType, props, saveTo, librariesImportSetting)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Use project file import project


</td></tr>
<tr><td>

[setDocumentSource(source)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** Modify Document source code


</td></tr>
</tbody></table>

---

## 方法详情

### extractlibinfo

# SYS\_FileManager.extractLibInfo() method

Extract the library configuration information from the file

## Signature

```typescript
public extractLibInfo(data: File | Array<File>): Promise<any>;
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

data


</td><td>

File \| Array&lt;File&gt;


</td><td>

Library file


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

Library configuration information

## Example


```javascript
// 1. 导出当前工程为文件
const projectFile = await eda.sys_FileManager.getProjectFile();

// 2. 从工程文件中提取库配置信息
const libInfo = await eda.sys_FileManager.extractLibInfo(projectFile);

// 3. 输出各类型库的引用数量（字段：devices / symbols / footprints / panelLibs）
console.log('器件数：', libInfo.devices.length);
console.log('符号数：', libInfo.symbols.length);
console.log('封装数：', libInfo.footprints.length);
console.log('面板库数：', libInfo.panelLibs.length);

// 4. 列出第一个封装的库信息（uuid 可用于后续按 UUID 下载封装文件）
const firstFootprint = libInfo.footprints[0];
console.log('首个封装标题：', firstFootprint?.title);
console.log('首个封装 uuid：', firstFootprint?.uuid);
```

### extractprojectinfo

# SYS\_FileManager.extractProjectInfo() method

Extract the project configuration information from the file

## Signature

```typescript
public extractProjectInfo(data: File): Promise<any>;
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

data


</td><td>

File


</td><td>

Project file


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

Project configuration information

## Example


```javascript
// 1. 导出当前工程为文件
const projectFile = await eda.sys_FileManager.getProjectFile();

// 2. 从工程文件中提取工程配置信息
const projectInfo = await eda.sys_FileManager.extractProjectInfo(projectFile);

// 3. 输出工程配置（title 是工程标题，editorVersion 是导出时的编辑器版本）
console.log('工程标题：', projectInfo.title);
console.log('编辑器版本：', projectInfo.editorVersion);
console.log('是否复用模块工程：', projectInfo.cbbProject);

// 4. 输出标签（工程未设置标签时 tags 为 undefined，兜底为空数组）
console.log('标签：', (projectInfo.tags ?? []).join('、'));
```

### getcbbfilebycbbuuid

# SYS\_FileManager.getCbbFileByCbbUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use reuse block UUID get reuse block file

## Signature

```typescript
public getCbbFileByCbbUuid(cbbUuid: string, libraryUuid?: string, props?: { fileName?: undefined | string; password?: undefined | string; fileType?: undefined | 'epro' | 'epro2'; templateSchematicUuid?: undefined | string; templatePcbUuid?: undefined | string }): Promise<File | undefined>;
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

cbbUuid


</td><td>

string


</td><td>

Reuse block UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID. It can be obtained using the APIs in [LIB\_LibrariesList](./LIB_LibrariesList.md)<!-- -->. If not passed in, it is the system library


</td></tr>
<tr><td>

props


</td><td>

{ fileName?: undefined \| string; password?: undefined \| string; fileType?: undefined \| 'epro' \| 'epro2'; templateSchematicUuid?: undefined \| string; templatePcbUuid?: undefined \| string }


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Reuse block file data, `undefined` indicates that the data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Team Module &gt; Download Module\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 列出系统库中的复用模块，取第一个的 UUID
const cbbList = await eda.lib_Cbb.search('', undefined, undefined, 5);
const cbb = cbbList[0];

// 2. 按复用模块 UUID 获取文件，props.fileName 指定导出文件名
const cbbFile = await eda.sys_FileManager.getCbbFileByCbbUuid(cbb.uuid, undefined, {
  fileName: '嘉立创示例_复用模块',
});

// 3. 输出复用模块与文件信息（size 单位为字节）
console.log('复用模块名：', cbb.name);
console.log('文件名：', cbbFile.name);
console.log('文件大小：', cbbFile.size);
```

### getdevicefilebydeviceuuid

# SYS\_FileManager.getDeviceFileByDeviceUuid() method

Use device UUID get device file

## Signature

```typescript
public getDeviceFileByDeviceUuid(deviceUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;
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

deviceUuid


</td><td>

string \| Array&lt;string&gt;


</td><td>

Device UUID or device UUID list


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID. It can be obtained using the APIs in [LIB\_LibrariesList](./LIB_LibrariesList.md)<!-- -->. If not passed in, it is the system library


</td></tr>
<tr><td>

fileType


</td><td>

'elibz' \| 'elibz2'


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Device file data, `undefined` indicates that the data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Team Library &gt; Download Library\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 按立创编号精确搜索系统库器件，取第一个的 UUID
const deviceList = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const device = deviceList[0];

// 2. 按器件 UUID 获取器件文件
const deviceFile = await eda.sys_FileManager.getDeviceFileByDeviceUuid(device.uuid);

// 3. 输出器件与文件信息（size 单位为字节）
console.log('器件名：', device.name);
console.log('文件名：', deviceFile.name);
console.log('文件大小：', deviceFile.size);
```

### getdocumentfile

# SYS\_FileManager.getDocumentFile() method

Get Document file

## Signature

```typescript
public getDocumentFile(fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;
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

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
<tr><td>

password


</td><td>

string


</td><td>

_(Optional)_ Encrypted password


</td></tr>
<tr><td>

fileType


</td><td>

'epro' \| 'epro2'


</td><td>

_(Optional)_ File format


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Document file data, `undefined` indicates that it is currently not open document or data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Engineering Design &gt; File Export\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 导出当前文档为文件（文件名自动带上 epro2 扩展名）
const documentFile = await eda.sys_FileManager.getDocumentFile('嘉立创示例_文档导出');

// 2. 输出文件信息（size 单位为字节）
console.log('文件名：', documentFile.name);
console.log('文件大小：', documentFile.size);
```

### getdocumentfootprintsources

# SYS\_FileManager.getDocumentFootprintSources() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the document footprint source code

## Signature

```typescript
public getDocumentFootprintSources(): Promise<Array<{ footprintUuid: string; documentSource: string }>>;
```


## Returns

Promise&lt;Array&lt;{ footprintUuid: string; documentSource: string }&gt;&gt;

Document footprint source code data. An empty array is returned if the data retrieval fails

## Example


```javascript
// 1. 获取当前文档全部封装源码
const sources = await eda.sys_FileManager.getDocumentFootprintSources();

// 2. 输出封装数量与每个封装的源码长度
console.log('封装数量：', sources.length);
sources.forEach((item, i) => {
  console.log('[' + i + '] footprintUuid：', item.footprintUuid, '源码长度：', item.documentSource.length);
});
```

### getdocumentsource

# SYS\_FileManager.getDocumentSource() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Document source code

## Signature

```typescript
public getDocumentSource(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

Document source code data, `undefined` indicates that it is currently not open document or data retrieval failed

## Example


```javascript
// 1. 读取当前文档源码
const source = await eda.sys_FileManager.getDocumentSource();

// 2. 输出源码长度与前 60 字符预览（DOCHEAD 开头的 JSON 分段结构）
console.log('源码长度：', source.length);
console.log('源码预览：', source.slice(0, 60));
```

### getfootprintfilebyfootprintuuid

# SYS\_FileManager.getFootprintFileByFootprintUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use footprint UUID get footprint file

## Signature

```typescript
public getFootprintFileByFootprintUuid(footprintUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;
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

footprintUuid


</td><td>

string \| Array&lt;string&gt;


</td><td>

Footprint UUID or footprint UUID list


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID. It can be obtained using the APIs in [LIB\_LibrariesList](./LIB_LibrariesList.md)<!-- -->. If not passed in, it is the system library


</td></tr>
<tr><td>

fileType


</td><td>

'elibz' \| 'elibz2'


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Footprint file data, `undefined` indicates that the data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Team Library &gt; Download Library\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 列出系统库封装，取第一个的 UUID
const footprintList = await eda.lib_Footprint.search('', undefined, [], undefined, 5, 1);
const footprint = footprintList[0];

// 2. 按封装 UUID 获取封装文件
const footprintFile = await eda.sys_FileManager.getFootprintFileByFootprintUuid(footprint.uuid);

// 3. 输出封装与文件信息（size 单位为字节）
console.log('封装名：', footprint.name);
console.log('文件名：', footprintFile.name);
console.log('文件大小：', footprintFile.size);
```

### getpanellibraryfilebypanellibraryuuid

# SYS\_FileManager.getPanelLibraryFileByPanelLibraryUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use panel library UUID get panel library file

## Signature

```typescript
public getPanelLibraryFileByPanelLibraryUuid(panelLibraryUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;
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

panelLibraryUuid


</td><td>

string \| Array&lt;string&gt;


</td><td>

Panel library UUID or panel library UUID list


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID. It can be obtained using the APIs in [LIB\_LibrariesList](./LIB_LibrariesList.md)<!-- -->. If not passed in, it is the system library


</td></tr>
<tr><td>

fileType


</td><td>

'elibz' \| 'elibz2'


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Panel library file data, `undefined` indicates that the data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Team Library &gt; Download Library\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 列出系统库面板库，取第一个的 UUID
const panelList = await eda.lib_PanelLibrary.search('', undefined, undefined, 5);
const panel = panelList[0];

// 2. 按面板库 UUID 获取面板库文件
const panelFile = await eda.sys_FileManager.getPanelLibraryFileByPanelLibraryUuid(panel.uuid);

// 3. 输出面板库与文件信息（size 单位为字节）
console.log('面板库名：', panel.name);
console.log('文件名：', panelFile.name);
console.log('文件大小：', panelFile.size);
```

### getprojectfile

# SYS\_FileManager.getProjectFile() method

Get Project file

## Signature

```typescript
public getProjectFile(fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;
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

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
<tr><td>

password


</td><td>

string


</td><td>

_(Optional)_ Encrypted password


</td></tr>
<tr><td>

fileType


</td><td>

'epro' \| 'epro2'


</td><td>

_(Optional)_ File format


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Project file data, `undefined` indicates that it is currently not open project or data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Project Management &gt; Download Project\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 导出当前工程为文件（文件名自动带上 epro2 扩展名）
const projectFile = await eda.sys_FileManager.getProjectFile('嘉立创示例_工程导出');

// 2. 输出文件信息（size 单位为字节）
console.log('文件名：', projectFile.name);
console.log('文件大小：', projectFile.size);
```

### getprojectfilebyprojectuuid

# SYS\_FileManager.getProjectFileByProjectUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use project UUID get project file

## Signature

```typescript
public getProjectFileByProjectUuid(projectUuid: string, fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;
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

projectUuid


</td><td>

string


</td><td>

Project UUID


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
<tr><td>

password


</td><td>

string


</td><td>

_(Optional)_ Encrypted password


</td></tr>
<tr><td>

fileType


</td><td>

'epro' \| 'epro2'


</td><td>

_(Optional)_ File format


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Project file data, `undefined` indicates that it is currently not open project or data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Project Management &gt; Download Project\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 获取当前工程的 UUID
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

// 2. 按工程 UUID 下载工程文件（文件名自动带上 epro2 扩展名）
const projectFile = await eda.sys_FileManager.getProjectFileByProjectUuid(projectInfo.uuid, '嘉立创示例_按UUID导出');

// 3. 输出文件信息（size 单位为字节）
console.log('文件名：', projectFile.name);
console.log('文件大小：', projectFile.size);
```

### getsymbolfilebysymboluuid

# SYS\_FileManager.getSymbolFileBySymbolUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use symbol UUID get symbol file

## Signature

```typescript
public getSymbolFileBySymbolUuid(symbolUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;
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

symbolUuid


</td><td>

string \| Array&lt;string&gt;


</td><td>

Symbol UUID or symbol UUID list


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID. It can be obtained using the APIs in [LIB\_LibrariesList](./LIB_LibrariesList.md)<!-- -->. If not passed in, it is the system library


</td></tr>
<tr><td>

fileType


</td><td>

'elibz' \| 'elibz2'


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Symbol file data, `undefined` indicates that the data retrieval failed

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

Note: This API requires the \*\*Team Library &gt; Download Library\*\* permission. Calling it without permission will always `throw Error`

## Example


```javascript
// 1. 列出系统库符号，取第一个的 UUID
const symbolList = await eda.lib_Symbol.search('', undefined, [], undefined, 5, 1);
const symbol = symbolList[0];

// 2. 按符号 UUID 获取符号文件
const symbolFile = await eda.sys_FileManager.getSymbolFileBySymbolUuid(symbol.uuid);

// 3. 输出符号与文件信息（size 单位为字节）
console.log('符号名：', symbol.name);
console.log('文件名：', symbolFile.name);
console.log('文件大小：', symbolFile.size);
```

### importprojectbyprojectfile

# SYS\_FileManager.importProjectByProjectFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use project file import project

## Signature

```typescript
public importProjectByProjectFile(projectFile: File, fileType?: 'JLCEDA' | 'JLCEDA Pro' | 'EasyEDA' | 'EasyEDA Pro' | 'Allegro' | 'OrCAD' | 'EAGLE' | 'KiCad' | 'PADS' | 'LTspice', props?: { importOption?: undefined | ESYS_ImportProjectImportOption.IMPORT_DOCUMENT | ESYS_ImportProjectImportOption.EXTRACT_LIBRARIES | ESYS_ImportProjectImportOption.IMPORT_DOCUMENT_EXTRACT_LIBRARIES; schematicObjectStyle?: undefined | ESYS_ImportProjectSchematicObjectStyle.USE_SYSTEM_THEME | ESYS_ImportProjectSchematicObjectStyle.USE_SOURCE_FILE_STYLE; associateFootprint?: undefined | false | true; associate3DModel?: undefined | false | true; importFootprintNotesLayer?: undefined | false | true }, saveTo?: { operation: 'New Project'; newProjectOwnerTeamUuid: string; newProjectOwnerFolderUuid?: undefined | string; newProjectName?: undefined | string; newProjectFriendlyName?: undefined | string; newProjectDescription?: undefined | string; newProjectCollaborationMode?: undefined | EDMT_ProjectCollaborationMode.STRICT | EDMT_ProjectCollaborationMode.FREE } | { operation: 'Existing Project'; existingProjectUuid: string }, librariesImportSetting?: { ownerTeamUuid: string; deviceClassification?: undefined | string[]; symbolClassification?: undefined | string[]; footprintClassification?: undefined | string[]; createDeviceForSingleSymbol?: undefined | false | true; updateExistingLibrariesWithTheSameName?: undefined | false | true }): Promise<IDMT_BriefProjectItem | undefined>;
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

projectFile


</td><td>

File


</td><td>

Project file


</td></tr>
<tr><td>

fileType


</td><td>

'JLCEDA' \| 'JLCEDA Pro' \| 'EasyEDA' \| 'EasyEDA Pro' \| 'Allegro' \| 'OrCAD' \| 'EAGLE' \| 'KiCad' \| 'PADS' \| 'LTspice'


</td><td>

_(Optional)_ File type


</td></tr>
<tr><td>

props


</td><td>

{ importOption?: undefined \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT\_EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md)<!-- -->; schematicObjectStyle?: undefined \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SYSTEM\_THEME](../enums/ESYS_ImportProjectSchematicObjectStyle.md) \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SOURCE\_FILE\_STYLE](../enums/ESYS_ImportProjectSchematicObjectStyle.md)<!-- -->; associateFootprint?: undefined \| false \| true; associate3DModel?: undefined \| false \| true; importFootprintNotesLayer?: undefined \| false \| true }


</td><td>

_(Optional)_ Import parameters. Refer to the configuration items in the \*\*Import\*\* window of the EDA front end


</td></tr>
<tr><td>

saveTo


</td><td>

{ operation: 'New Project'; newProjectOwnerTeamUuid: string; newProjectOwnerFolderUuid?: undefined \| string; newProjectName?: undefined \| string; newProjectFriendlyName?: undefined \| string; newProjectDescription?: undefined \| string; newProjectCollaborationMode?: undefined \| [EDMT\_ProjectCollaborationMode.STRICT](../enums/EDMT_ProjectCollaborationMode.md) \| [EDMT\_ProjectCollaborationMode.FREE](../enums/EDMT_ProjectCollaborationMode.md) } \| { operation: 'Existing Project'; existingProjectUuid: string }


</td><td>

_(Optional)_ Save To project parameter


</td></tr>
<tr><td>

librariesImportSetting


</td><td>

\{ ownerTeamUuid: string; deviceClassification?: undefined \| string\[\]; symbolClassification?: undefined \| string\[\]; footprintClassification?: undefined \| string\[\]; createDeviceForSingleSymbol?: undefined \| false \| true; updateExistingLibrariesWithTheSameName?: undefined \| false \| true \}


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_BriefProjectItem](../interfaces/IDMT_BriefProjectItem.md) \| undefined&gt;

Brief project properties of the imported project

## Remarks

Extracting library-related configurations is not supported yet. If the library needs to be extracted, it will be extracted according to the default configuration

### importprojectbyprojectfile_1

# SYS\_FileManager.importProjectByProjectFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use project file import project

## Signature

```typescript
public importProjectByProjectFile(projectFile: File, fileType?: 'Altium Designer' | 'Protel', props?: { importOption?: undefined | ESYS_ImportProjectImportOption.IMPORT_DOCUMENT | ESYS_ImportProjectImportOption.EXTRACT_LIBRARIES | ESYS_ImportProjectImportOption.IMPORT_DOCUMENT_EXTRACT_LIBRARIES; viaSolderMaskExpansion?: undefined | ESYS_ImportProjectViaSolderMaskExpansion.ALL_COVER_OIL | ESYS_ImportProjectViaSolderMaskExpansion.FOLLOW_ORIGINAL_SETTING; boardOutlineSource?: undefined | ESYS_ImportProjectBoardOutlineSource.FROM_KEEPOUT_LAYER | ESYS_ImportProjectBoardOutlineSource.FROM_MECHANICAL_LAYER_1; schematicObjectStyle?: undefined | ESYS_ImportProjectSchematicObjectStyle.USE_SYSTEM_THEME | ESYS_ImportProjectSchematicObjectStyle.USE_SOURCE_FILE_STYLE; associateFootprint?: undefined | false | true; associate3DModel?: undefined | false | true; importFootprintNotesLayer?: undefined | false | true }, saveTo?: { operation: 'New Project'; newProjectOwnerTeamUuid: string; newProjectOwnerFolderUuid?: undefined | string; newProjectName?: undefined | string; newProjectFriendlyName?: undefined | string; newProjectDescription?: undefined | string; newProjectCollaborationMode?: undefined | EDMT_ProjectCollaborationMode.STRICT | EDMT_ProjectCollaborationMode.FREE } | { operation: 'Existing Project'; existingProjectUuid: string }, librariesImportSetting?: { ownerTeamUuid: string; deviceClassification?: undefined | string[]; symbolClassification?: undefined | string[]; footprintClassification?: undefined | string[]; createDeviceForSingleSymbol?: undefined | false | true; updateExistingLibrariesWithTheSameName?: undefined | false | true }): Promise<IDMT_BriefProjectItem | undefined>;
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

projectFile


</td><td>

File


</td><td>

Project file


</td></tr>
<tr><td>

fileType


</td><td>

'Altium Designer' \| 'Protel'


</td><td>

_(Optional)_ File type


</td></tr>
<tr><td>

props


</td><td>

{ importOption?: undefined \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT\_EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md)<!-- -->; viaSolderMaskExpansion?: undefined \| [ESYS\_ImportProjectViaSolderMaskExpansion.ALL\_COVER\_OIL](../enums/ESYS_ImportProjectViaSolderMaskExpansion.md) \| [ESYS\_ImportProjectViaSolderMaskExpansion.FOLLOW\_ORIGINAL\_SETTING](../enums/ESYS_ImportProjectViaSolderMaskExpansion.md)<!-- -->; boardOutlineSource?: undefined \| [ESYS\_ImportProjectBoardOutlineSource.FROM\_KEEPOUT\_LAYER](../enums/ESYS_ImportProjectBoardOutlineSource.md) \| [ESYS\_ImportProjectBoardOutlineSource.FROM\_MECHANICAL\_LAYER\_1](../enums/ESYS_ImportProjectBoardOutlineSource.md)<!-- -->; schematicObjectStyle?: undefined \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SYSTEM\_THEME](../enums/ESYS_ImportProjectSchematicObjectStyle.md) \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SOURCE\_FILE\_STYLE](../enums/ESYS_ImportProjectSchematicObjectStyle.md)<!-- -->; associateFootprint?: undefined \| false \| true; associate3DModel?: undefined \| false \| true; importFootprintNotesLayer?: undefined \| false \| true }


</td><td>

_(Optional)_ Import parameters. Refer to the configuration items in the \*\*Import\*\* window of the EDA front end


</td></tr>
<tr><td>

saveTo


</td><td>

{ operation: 'New Project'; newProjectOwnerTeamUuid: string; newProjectOwnerFolderUuid?: undefined \| string; newProjectName?: undefined \| string; newProjectFriendlyName?: undefined \| string; newProjectDescription?: undefined \| string; newProjectCollaborationMode?: undefined \| [EDMT\_ProjectCollaborationMode.STRICT](../enums/EDMT_ProjectCollaborationMode.md) \| [EDMT\_ProjectCollaborationMode.FREE](../enums/EDMT_ProjectCollaborationMode.md) } \| { operation: 'Existing Project'; existingProjectUuid: string }


</td><td>

_(Optional)_ Save To project parameter


</td></tr>
<tr><td>

librariesImportSetting


</td><td>

\{ ownerTeamUuid: string; deviceClassification?: undefined \| string\[\]; symbolClassification?: undefined \| string\[\]; footprintClassification?: undefined \| string\[\]; createDeviceForSingleSymbol?: undefined \| false \| true; updateExistingLibrariesWithTheSameName?: undefined \| false \| true \}


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_BriefProjectItem](../interfaces/IDMT_BriefProjectItem.md) \| undefined&gt;

Brief project properties of the imported project

## Remarks

Extracting library-related configurations is not supported yet. If the library needs to be extracted, it will be extracted according to the default configuration

### setdocumentsource

# SYS\_FileManager.setDocumentSource() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Document source code

## Signature

```typescript
public setDocumentSource(source: string): Promise<boolean>;
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

source


</td><td>

string


</td><td>

Document source code


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the modification was successful. If the input document source code format is incorrect, `false` is returned

## Example


```javascript
// 1. 读取当前文档源码
const source = await eda.sys_FileManager.getDocumentSource();

// 2. 把源码原样写回文档（源码格式合法，返回 true 表示修改成功）
const modified = await eda.sys_FileManager.setDocumentSource(source);

// 3. 输出修改结果
console.log('修改结果：', modified);
```
