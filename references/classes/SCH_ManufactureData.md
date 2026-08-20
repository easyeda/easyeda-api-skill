# SCH\_ManufactureData class

Schematic &amp; symbol / manufacture data class

## Signature

```typescript
export class SCH_ManufactureData 
```

## Remarks

Get the manufacture data files of the current schematic sheet and quick ordering

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[deleteBomTemplate(template)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Delete BOM template


</td></tr>
<tr><td>

[getAssemblyVariantsConfigs()](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the assembly variants configuration list


</td></tr>
<tr><td>

[getBomFile(fileName, fileType, template, filterOptions, statistics, property, columns, assemblyVariantsConfig)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get BOM file


</td></tr>
<tr><td>

[getBomTemplateFile(template)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get BOM template file


</td></tr>
<tr><td>

[getBomTemplates()](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get BOM template list


</td></tr>
<tr><td>

[getExportDocumentFile(fileName, fileType, typeSpecificParams, object, objectSpecificParams)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get Export document file


</td></tr>
<tr><td>

[getNetlistFile(fileName, netlistType)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the netlist file (Netlist)


</td></tr>
<tr><td>

[getSimulationNetlistFile(fileName, netlistType)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the simulation netlist file


</td></tr>
<tr><td>

[placeComponentsOrder(interactive, ignoreWarning)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Component ordering


</td></tr>
<tr><td>

[placeSmtComponentsOrder(interactive, ignoreWarning)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** SMT component ordering


</td></tr>
<tr><td>

[uploadBomTemplateFile(templateFile, template)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Upload a BOM template file


</td></tr>
</tbody></table>

---

## 方法详情

### deletebomtemplate

# SCH\_ManufactureData.deleteBomTemplate() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete BOM template

## Signature

```typescript
public deleteBomTemplate(template: string): Promise<boolean>;
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

template


</td><td>

string


</td><td>

BOM template name


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### getassemblyvariantsconfigs

# SCH\_ManufactureData.getAssemblyVariantsConfigs() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the assembly variants configuration list

## Signature

```typescript
public getAssemblyVariantsConfigs(): Promise<Array<{ text: string; value: string }>>;
```


## Returns

Promise&lt;Array&lt;{ text: string; value: string }&gt;&gt;

Assembly variants configuration list

### getbomfile

# SCH\_ManufactureData.getBomFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM file

## Signature

```typescript
public getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{ property: string; includeValue: string | false | true }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>, assemblyVariantsConfig?: { text: string; value: string }): Promise<File | undefined>;
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

fileType


</td><td>

'xlsx' \| 'csv'


</td><td>

_(Optional)_ File type


</td></tr>
<tr><td>

template


</td><td>

string


</td><td>

_(Optional)_ Template name


</td></tr>
<tr><td>

filterOptions


</td><td>

Array&lt;{ property: string; includeValue: string \| false \| true }&gt;


</td><td>

_(Optional)_ Filter rules, which should only contain the rules to be enabled. `property` is the rule name, and `includeValue` is the matched value


</td></tr>
<tr><td>

statistics


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Statistics, containing the names of all statistic items to be enabled


</td></tr>
<tr><td>

property


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Properties, containing the names of all properties to be enabled


</td></tr>
<tr><td>

columns


</td><td>

Array&lt;[IPCB\_BomPropertiesTableColumns](../interfaces/IPCB_BomPropertiesTableColumns.md)<!-- -->&gt;


</td><td>

_(Optional)_ Column properties and sorting. If `title`<!-- -->, `sort`<!-- -->, `group`<!-- -->, and `orderWeight` are not passed in, default values are used. `null` means \*\*none\*\* or \*\*empty\*\*


</td></tr>
<tr><td>

assemblyVariantsConfig


</td><td>

\{ text: string; value: string \}


</td><td>

_(Optional)_ Assembly variants configuration


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

BOM file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

### getbomtemplatefile

# SCH\_ManufactureData.getBomTemplateFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM template file

## Signature

```typescript
public getBomTemplateFile(template: string): Promise<File | undefined>;
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

template


</td><td>

string


</td><td>

BOM template name


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

BOM template file

### getbomtemplates

# SCH\_ManufactureData.getBomTemplates() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM template list

## Signature

```typescript
public getBomTemplates(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

BOM template list

### getexportdocumentfile

# SCH\_ManufactureData.getExportDocumentFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> - DEPRECATED since EDA v4.1

Get Export document file

## Signature

```typescript
public getExportDocumentFile(fileName?: string, fileType?: ESCH_ExportDocumentFileType, typeSpecificParams?: { theme?: undefined | 'Default' | 'White on Black' | 'Black on White'; lineWidth?: undefined | 'Default' | 'Always 1px' | 'Follow the Zoom Change'; displayAttributesAsMenu?: undefined | false | true; size?: undefined | string | { width: number; height: number; unit: ESYS_Unit.MILLIMETER | ESYS_Unit.INCH } }, object?: 'All Schematic' | 'Current Schematic' | 'Current Schematic Page' | string, objectSpecificParams?: { range?: undefined | 'All' | any; outputMethod?: undefined | 'Merged sheet' | 'Separated sheet' }): Promise<File | undefined>;
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

fileType


</td><td>

[ESCH\_ExportDocumentFileType](../enums/ESCH_ExportDocumentFileType.md)


</td><td>

_(Optional)_ File type


</td></tr>
<tr><td>

typeSpecificParams


</td><td>

{ theme?: undefined \| 'Default' \| 'White on Black' \| 'Black on White'; lineWidth?: undefined \| 'Default' \| 'Always 1px' \| 'Follow the Zoom Change'; displayAttributesAsMenu?: undefined \| false \| true; size?: undefined \| string \| { width: number; height: number; unit: [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) } }


</td><td>

_(Optional)_ Type-specific parameters


</td></tr>
<tr><td>

object


</td><td>

'All Schematic' \| 'Current Schematic' \| 'Current Schematic Page' \| string


</td><td>

_(Optional)_ Object


</td></tr>
<tr><td>

objectSpecificParams


</td><td>

{ range?: undefined \| 'All' \| any; outputMethod?: undefined \| 'Merged sheet' \| 'Separated sheet' }


</td><td>

_(Optional)_ Object-specific parameters


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Exported document file data (or archive)

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

### getnetlistfile

# SCH\_ManufactureData.getNetlistFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the netlist file (Netlist)

## Signature

```typescript
public getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>;
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

netlistType


</td><td>

[ESYS\_NetlistType](../enums/ESYS_NetlistType.md)


</td><td>

_(Optional)_ Netlist type


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Netlist file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

### getsimulationnetlistfile

# SCH\_ManufactureData.getSimulationNetlistFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the simulation netlist file

## Signature

```typescript
public getSimulationNetlistFile(fileName?: string, netlistType?: ESCH_SimulationNetlistType): Promise<File | undefined>;
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

netlistType


</td><td>

[ESCH\_SimulationNetlistType](../enums/ESCH_SimulationNetlistType.md)


</td><td>

_(Optional)_ Netlist type


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Simulation netlist file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

### placecomponentsorder

# SCH\_ManufactureData.placeComponentsOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Component ordering

## Signature

```typescript
public placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

interactive


</td><td>

boolean


</td><td>

_(Optional)_ Whether to enable interactive checking. If enabled, a popup will wait for user interaction, and the `ignoreWarning` parameter cannot be used to ignore warnings; that is, the `ignoreWarning` parameter will be ignored. If disabled, no EDA internal popup will appear after the call, and the program performs a silent check. If the ordering conditions are met, `true` will be returned and the ordering page will be opened in a new tab


</td></tr>
<tr><td>

ignoreWarning


</td><td>

boolean


</td><td>

_(Optional)_ Ignore warnings during non-interactive checking. If set to `true`<!-- -->, all check warning items will be ignored and the ordering data will be generated as much as possible; if set to `false`<!-- -->, any warning will interrupt execution and return `false`


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the ordering check passed

### placesmtcomponentsorder

# SCH\_ManufactureData.placeSmtComponentsOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

SMT component ordering

## Signature

```typescript
public placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

interactive


</td><td>

boolean


</td><td>

_(Optional)_ Whether to enable interactive checking. If enabled, a popup will wait for user interaction, and the `ignoreWarning` parameter cannot be used to ignore warnings; that is, the `ignoreWarning` parameter will be ignored. If disabled, no EDA internal popup will appear after the call, and the program performs a silent check. If the ordering conditions are met, `true` will be returned and the ordering page will be opened in a new tab


</td></tr>
<tr><td>

ignoreWarning


</td><td>

boolean


</td><td>

_(Optional)_ Ignore warnings during non-interactive checking. If set to `true`<!-- -->, all check warning items will be ignored and the ordering data will be generated as much as possible; if set to `false`<!-- -->, any warning will interrupt execution and return `false`


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the ordering check passed

### uploadbomtemplatefile

# SCH\_ManufactureData.uploadBomTemplateFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Upload a BOM template file

## Signature

```typescript
public uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;
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

templateFile


</td><td>

File


</td><td>

BOM template file


</td></tr>
<tr><td>

template


</td><td>

string


</td><td>

_(Optional)_ BOM template name. If it is `undefined`<!-- -->, the value is automatically taken from `templateFile`


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

BOM template name
