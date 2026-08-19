# SYS\_FileManager class

系统 / 文件管理类

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

提取文件内的库配置信息


</td></tr>
<tr><td>

[extractProjectInfo(data)](./SYS_FileManager.md)


</td><td>


</td><td>

提取文件内的工程配置信息


</td></tr>
<tr><td>

[getCbbFileByCbbUuid(cbbUuid, libraryUuid, props)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 使用复用模块 UUID 获取复用模块文件


</td></tr>
<tr><td>

[getDeviceFileByDeviceUuid(deviceUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

使用器件 UUID 获取器件文件


</td></tr>
<tr><td>

[getDocumentFile(fileName, password, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

获取文档文件


</td></tr>
<tr><td>

[getDocumentFootprintSources()](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 获取文档封装源码


</td></tr>
<tr><td>

[getDocumentSource()](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 获取文档源码


</td></tr>
<tr><td>

[getFootprintFileByFootprintUuid(footprintUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 使用封装 UUID 获取封装文件


</td></tr>
<tr><td>

[getPanelLibraryFileByPanelLibraryUuid(panelLibraryUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 使用面板库 UUID 获取面板库文件


</td></tr>
<tr><td>

[getProjectFile(fileName, password, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

获取工程文件


</td></tr>
<tr><td>

[getProjectFileByProjectUuid(projectUuid, fileName, password, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 使用工程 UUID 获取工程文件


</td></tr>
<tr><td>

[getSymbolFileBySymbolUuid(symbolUuid, libraryUuid, fileType)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 使用符号 UUID 获取符号文件


</td></tr>
<tr><td>

[importProjectByProjectFile(projectFile, fileType, props, saveTo, librariesImportSetting)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 使用工程文件导入工程


</td></tr>
<tr><td>

[importProjectByProjectFile(projectFile, fileType, props, saveTo, librariesImportSetting)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 使用工程文件导入工程


</td></tr>
<tr><td>

[setDocumentSource(source)](./SYS_FileManager.md)


</td><td>


</td><td>

**_(BETA)_** 修改文档源码


</td></tr>
</tbody></table>

---

## 方法详情

### extractlibinfo

# SYS\_FileManager.extractLibInfo() method

提取文件内的库配置信息

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

库文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

库配置信息

### extractprojectinfo

# SYS\_FileManager.extractProjectInfo() method

提取文件内的工程配置信息

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

工程文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

工程配置信息

### getcbbfilebycbbuuid

# SYS\_FileManager.getCbbFileByCbbUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用复用模块 UUID 获取复用模块文件

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

复用模块 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取，如若不传入，则为系统库


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

复用模块文件数据，`undefined` 表示数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队模块 &gt; 下载模块\*\* 权限，没有权限调用将始终 `throw Error`

### getdevicefilebydeviceuuid

# SYS\_FileManager.getDeviceFileByDeviceUuid() method

使用器件 UUID 获取器件文件

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

器件 UUID 或器件 UUID 列表


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取，如若不传入，则为系统库


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

器件文件数据，`undefined` 表示数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队库 &gt; 下载库\*\* 权限，没有权限调用将始终 `throw Error`

### getdocumentfile

# SYS\_FileManager.getDocumentFile() method

获取文档文件

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

_(Optional)_ 文件名


</td></tr>
<tr><td>

password


</td><td>

string


</td><td>

_(Optional)_ 加密密码


</td></tr>
<tr><td>

fileType


</td><td>

'epro' \| 'epro2'


</td><td>

_(Optional)_ 文件格式


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

文档文件数据，`undefined` 表示当前未打开文档或数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*工程设计图 &gt; 文件导出\*\* 权限，没有权限调用将始终 `throw Error`

### getdocumentfootprintsources

# SYS\_FileManager.getDocumentFootprintSources() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文档封装源码

## Signature

```typescript
public getDocumentFootprintSources(): Promise<Array<{ footprintUuid: string; documentSource: string }>>;
```


## Returns

Promise&lt;Array&lt;{ footprintUuid: string; documentSource: string }&gt;&gt;

文档封装源码数据，数据获取失败将返回空数组

### getdocumentsource

# SYS\_FileManager.getDocumentSource() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文档源码

## Signature

```typescript
public getDocumentSource(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

文档源码数据，`undefined` 表示当前未打开文档或数据获取失败

### getfootprintfilebyfootprintuuid

# SYS\_FileManager.getFootprintFileByFootprintUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用封装 UUID 获取封装文件

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

封装 UUID 或封装 UUID 列表


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取，如若不传入，则为系统库


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

封装文件数据，`undefined` 表示数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队库 &gt; 下载库\*\* 权限，没有权限调用将始终 `throw Error`

### getpanellibraryfilebypanellibraryuuid

# SYS\_FileManager.getPanelLibraryFileByPanelLibraryUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用面板库 UUID 获取面板库文件

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

面板库 UUID 或面板库 UUID 列表


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取，如若不传入，则为系统库


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

面板库文件数据，`undefined` 表示数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队库 &gt; 下载库\*\* 权限，没有权限调用将始终 `throw Error`

### getprojectfile

# SYS\_FileManager.getProjectFile() method

获取工程文件

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

_(Optional)_ 文件名


</td></tr>
<tr><td>

password


</td><td>

string


</td><td>

_(Optional)_ 加密密码


</td></tr>
<tr><td>

fileType


</td><td>

'epro' \| 'epro2'


</td><td>

_(Optional)_ 文件格式


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

工程文件数据，`undefined` 表示当前未打开工程或数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*工程管理 &gt; 下载工程\*\* 权限，没有权限调用将始终 `throw Error`

### getprojectfilebyprojectuuid

# SYS\_FileManager.getProjectFileByProjectUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用工程 UUID 获取工程文件

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

工程 UUID


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ 文件名


</td></tr>
<tr><td>

password


</td><td>

string


</td><td>

_(Optional)_ 加密密码


</td></tr>
<tr><td>

fileType


</td><td>

'epro' \| 'epro2'


</td><td>

_(Optional)_ 文件格式


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

工程文件数据，`undefined` 表示当前未打开工程或数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*工程管理 &gt; 下载工程\*\* 权限，没有权限调用将始终 `throw Error`

### getsymbolfilebysymboluuid

# SYS\_FileManager.getSymbolFileBySymbolUuid() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用符号 UUID 获取符号文件

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

符号 UUID 或符号 UUID 列表


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取，如若不传入，则为系统库


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

符号文件数据，`undefined` 表示数据获取失败

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队库 &gt; 下载库\*\* 权限，没有权限调用将始终 `throw Error`

### importprojectbyprojectfile

# SYS\_FileManager.importProjectByProjectFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用工程文件导入工程

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

工程文件


</td></tr>
<tr><td>

fileType


</td><td>

'JLCEDA' \| 'JLCEDA Pro' \| 'EasyEDA' \| 'EasyEDA Pro' \| 'Allegro' \| 'OrCAD' \| 'EAGLE' \| 'KiCad' \| 'PADS' \| 'LTspice'


</td><td>

_(Optional)_ 文件类型


</td></tr>
<tr><td>

props


</td><td>

{ importOption?: undefined \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT\_EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md)<!-- -->; schematicObjectStyle?: undefined \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SYSTEM\_THEME](../enums/ESYS_ImportProjectSchematicObjectStyle.md) \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SOURCE\_FILE\_STYLE](../enums/ESYS_ImportProjectSchematicObjectStyle.md)<!-- -->; associateFootprint?: undefined \| false \| true; associate3DModel?: undefined \| false \| true; importFootprintNotesLayer?: undefined \| false \| true }


</td><td>

_(Optional)_ 导入参数，参考 EDA 前端 \*\*导入\*\* 窗口内的配置项


</td></tr>
<tr><td>

saveTo


</td><td>

{ operation: 'New Project'; newProjectOwnerTeamUuid: string; newProjectOwnerFolderUuid?: undefined \| string; newProjectName?: undefined \| string; newProjectFriendlyName?: undefined \| string; newProjectDescription?: undefined \| string; newProjectCollaborationMode?: undefined \| [EDMT\_ProjectCollaborationMode.STRICT](../enums/EDMT_ProjectCollaborationMode.md) \| [EDMT\_ProjectCollaborationMode.FREE](../enums/EDMT_ProjectCollaborationMode.md) } \| { operation: 'Existing Project'; existingProjectUuid: string }


</td><td>

_(Optional)_ 保存到工程参数


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

导入的工程的简略工程属性

## Remarks

暂不支持提取库的相关配置，如果需求提取库，将会按照默认配置提取

### importprojectbyprojectfile_1

# SYS\_FileManager.importProjectByProjectFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用工程文件导入工程

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

工程文件


</td></tr>
<tr><td>

fileType


</td><td>

'Altium Designer' \| 'Protel'


</td><td>

_(Optional)_ 文件类型


</td></tr>
<tr><td>

props


</td><td>

{ importOption?: undefined \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md) \| [ESYS\_ImportProjectImportOption.IMPORT\_DOCUMENT\_EXTRACT\_LIBRARIES](../enums/ESYS_ImportProjectImportOption.md)<!-- -->; viaSolderMaskExpansion?: undefined \| [ESYS\_ImportProjectViaSolderMaskExpansion.ALL\_COVER\_OIL](../enums/ESYS_ImportProjectViaSolderMaskExpansion.md) \| [ESYS\_ImportProjectViaSolderMaskExpansion.FOLLOW\_ORIGINAL\_SETTING](../enums/ESYS_ImportProjectViaSolderMaskExpansion.md)<!-- -->; boardOutlineSource?: undefined \| [ESYS\_ImportProjectBoardOutlineSource.FROM\_KEEPOUT\_LAYER](../enums/ESYS_ImportProjectBoardOutlineSource.md) \| [ESYS\_ImportProjectBoardOutlineSource.FROM\_MECHANICAL\_LAYER\_1](../enums/ESYS_ImportProjectBoardOutlineSource.md)<!-- -->; schematicObjectStyle?: undefined \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SYSTEM\_THEME](../enums/ESYS_ImportProjectSchematicObjectStyle.md) \| [ESYS\_ImportProjectSchematicObjectStyle.USE\_SOURCE\_FILE\_STYLE](../enums/ESYS_ImportProjectSchematicObjectStyle.md)<!-- -->; associateFootprint?: undefined \| false \| true; associate3DModel?: undefined \| false \| true; importFootprintNotesLayer?: undefined \| false \| true }


</td><td>

_(Optional)_ 导入参数，参考 EDA 前端 \*\*导入\*\* 窗口内的配置项


</td></tr>
<tr><td>

saveTo


</td><td>

{ operation: 'New Project'; newProjectOwnerTeamUuid: string; newProjectOwnerFolderUuid?: undefined \| string; newProjectName?: undefined \| string; newProjectFriendlyName?: undefined \| string; newProjectDescription?: undefined \| string; newProjectCollaborationMode?: undefined \| [EDMT\_ProjectCollaborationMode.STRICT](../enums/EDMT_ProjectCollaborationMode.md) \| [EDMT\_ProjectCollaborationMode.FREE](../enums/EDMT_ProjectCollaborationMode.md) } \| { operation: 'Existing Project'; existingProjectUuid: string }


</td><td>

_(Optional)_ 保存到工程参数


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

导入的工程的简略工程属性

## Remarks

暂不支持提取库的相关配置，如果需求提取库，将会按照默认配置提取

### setdocumentsource

# SYS\_FileManager.setDocumentSource() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改文档源码

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

文档源码


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否修改成功，如果输入的文档源码格式错误，将返回 `false` 的结果
