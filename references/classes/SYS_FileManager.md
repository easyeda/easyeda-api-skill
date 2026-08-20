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
