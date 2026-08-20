# PCB\_ManufactureData class

PCB &amp; footprint / manufacture data class

## Signature

```typescript
export class PCB_ManufactureData 
```

## Remarks

Get the manufacture data files of the current PCB and quick ordering

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[deleteBomTemplate(template)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Delete BOM template


</td></tr>
<tr><td>

[get3DFile(fileName, fileType, element, modelMode, autoGenerateModels)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get 3D model file


</td></tr>
<tr><td>

[get3DShellFile(fileName, fileType)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the 3D shell file


</td></tr>
<tr><td>

[getAltiumDesignerFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get Altium Designer file


</td></tr>
<tr><td>

[getAutoLayoutJsonFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get Auto layout file (JSON)


</td></tr>
<tr><td>

[getAutoRouteJsonFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get Auto routing file (JSON)


</td></tr>
<tr><td>

[getAutoRouteJsonFileForJRouter(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the JRouter-specific auto routing file (JSON)


</td></tr>
<tr><td>

[getBomFile(fileName, fileType, template, filterOptions, statistics, property, columns)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get BOM file


</td></tr>
<tr><td>

[getBomTemplateFile(template)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get BOM template file


</td></tr>
<tr><td>

[getBomTemplates()](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get BOM template list


</td></tr>
<tr><td>

[getDsnFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get Auto routing file (DSN)


</td></tr>
<tr><td>

[getDxfFile(fileName, layers, objects)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get DXF file


</td></tr>
<tr><td>

[getFlyingProbeTestFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the flying probe test file


</td></tr>
<tr><td>

[getGerberFile(fileName, colorSilkscreen, unit, digitalFormat, other, layers, objects)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the PCB fabrication file (Gerber)


</td></tr>
<tr><td>

[getIdxFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get IDX file


</td></tr>
<tr><td>

[getIpc2581CFile(fileName, fileType, unit, oemNumber)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get IPC-2581C file


</td></tr>
<tr><td>

[getIpcD356AFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get IPC-D-356A file


</td></tr>
<tr><td>

[getManufactureData()](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Export the manufacture data


</td></tr>
<tr><td>

[getNetlistFile(fileName, netlistType)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the netlist file (Netlist)


</td></tr>
<tr><td>

[getOpenDatabaseDoublePlusFile(fileName, unit, otherData, layers, objects)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get ODB++ file


</td></tr>
<tr><td>

[getPadsFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get PADS file


</td></tr>
<tr><td>

[getPcbInfoFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get PCB information file


</td></tr>
<tr><td>

[getPdfFile(fileName, outputMethod, contentConfig, watermark, graphPageConfig)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get PDF file


</td></tr>
<tr><td>

[getPickAndPlaceFile(fileName, fileType, unit)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get Coordinate file (PickAndPlace)


</td></tr>
<tr><td>

[getTestPointFile(fileName, fileType)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Get the test point report file


</td></tr>
<tr><td>

[place3DShellOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 3D shell ordering


</td></tr>
<tr><td>

[placeComponentsOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Component ordering


</td></tr>
<tr><td>

[placePcbOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** PCB ordering


</td></tr>
<tr><td>

[placeSmtComponentsOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** SMT component ordering


</td></tr>
<tr><td>

[uploadBomTemplateFile(templateFile, template)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** Upload a BOM template file


</td></tr>
</tbody></table>

---

## 方法详情

### deletebomtemplate

# PCB\_ManufactureData.deleteBomTemplate() method

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

## Example


```javascript
// 删除指定的 BOM 模板
const success = await eda.pcb_ManufactureData.deleteBomTemplate('MyCustomTemplate');
if (success) {
    console.log('BOM 模板删除成功');
} else {
    console.log('删除失败，可能是默认模板或模板不存在');
}
```

### get3dfile

# PCB\_ManufactureData.get3DFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get 3D model file

## Signature

```typescript
public get3DFile(fileName?: string, fileType?: 'step' | 'obj', element?: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>, modelMode?: 'Outfit' | 'Parts', autoGenerateModels?: boolean): Promise<File | undefined>;
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

'step' \| 'obj'


</td><td>

_(Optional)_ File type


</td></tr>
<tr><td>

element


</td><td>

Array&lt;'Component Model' \| 'Via' \| 'Silkscreen' \| 'Wire In Signal Layer'&gt;


</td><td>

_(Optional)_ Exported objects


</td></tr>
<tr><td>

modelMode


</td><td>

'Outfit' \| 'Parts'


</td><td>

_(Optional)_ Export mode. `Outfit` = assembly, `Parts` = parts


</td></tr>
<tr><td>

autoGenerateModels


</td><td>

boolean


</td><td>

_(Optional)_ Whether to automatically generate a 3D model for components not bound to a 3D model (based on the "height" property of the component)


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

3D model file data

## Remarks

Please note: only component models imported in STEP format can be reflected in the exported STEP file

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 导出装配体模式的 STEP 文件（包含元件模型）
const stepFile = await eda.pcb_ManufactureData.get3DFile(
    'MyBoard_3D',
    'step',
    ['Component Model'],
    'Outfit',
    true
);
if (stepFile) {
    await eda.sys_FileSystem.saveFile(stepFile);
}

// 导出包含多种对象的完整 3D 模型
const full3DFile = await eda.pcb_ManufactureData.get3DFile(
    'Complete_3D_Model',
    'step',
    ['Component Model', 'Via', 'Silkscreen', 'Wire In Signal Layer'],
    'Outfit',
    true
);

// 导出零件模式 OBJ 文件
const objFile = await eda.pcb_ManufactureData.get3DFile(
    'MyBoard_OBJ',
    'obj',
    ['Component Model'],
    'Parts',
    false
);
```

### get3dshellfile

# PCB\_ManufactureData.get3DShellFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the 3D shell file

## Signature

```typescript
public get3DShellFile(fileName?: string, fileType?: 'stl' | 'step' | 'obj'): Promise<File | undefined>;
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

'stl' \| 'step' \| 'obj'


</td><td>

_(Optional)_ File type


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

3D shell file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 导出 STL 格式 3D 外壳
const stlFile = await eda.pcb_ManufactureData.get3DShellFile('Board_Shell', 'stl');
if (stlFile) {
    await eda.sys_FileSystem.saveFile(stlFile);
}

// 导出 STEP 格式 3D 外壳
const stepShellFile = await eda.pcb_ManufactureData.get3DShellFile('Board_Shell_STEP', 'step');
if (stepShellFile) {
    await eda.sys_FileSystem.saveFile(stepShellFile);
}
```

### getaltiumdesignerfile

# PCB\_ManufactureData.getAltiumDesignerFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Altium Designer file

## Signature

```typescript
public getAltiumDesignerFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Altium Designer file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
//获取 Altium Designer 格式文件
const adFile = await eda.pcb_ManufactureData.getAltiumDesignerFile('Converted_To_AD');
if (adFile) {
    await eda.sys_FileSystem.saveFile(adFile);
}
```

### getautolayoutjsonfile

# PCB\_ManufactureData.getAutoLayoutJsonFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Auto layout file (JSON)

## Signature

```typescript
public getAutoLayoutJsonFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Auto layout JSON file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
const autoLayoutJson = await eda.pcb_ManufactureData.getAutoLayoutJsonFile('AutoLayout_Json');
if (autoLayoutJson) {
    await eda.sys_FileSystem.saveFile(autoLayoutJson);
}
```

### getautoroutejsonfile

# PCB\_ManufactureData.getAutoRouteJsonFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Auto routing file (JSON)

## Signature

```typescript
public getAutoRouteJsonFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Auto routing JSON file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
const autoRouteJson = await eda.pcb_ManufactureData.getAutoRouteJsonFile('AutoRoute_Json');
if (autoRouteJson) {
    await eda.sys_FileSystem.saveFile(autoRouteJson);
}
```

### getautoroutejsonfileforjrouter

# PCB\_ManufactureData.getAutoRouteJsonFileForJRouter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the JRouter-specific auto routing file (JSON)

## Signature

```typescript
public getAutoRouteJsonFileForJRouter(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Auto routing JSON file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 1. 导出 JRouter 专用自动布线 JSON 文件（参数为目标文件名）
const jrouterFile = await eda.pcb_ManufactureData.getAutoRouteJsonFileForJRouter('嘉立创示例_JRouter');

// 2. 查看导出结果
console.log('导出文件名：', jrouterFile?.name);
console.log('文件大小：', jrouterFile?.size);
```

### getbomfile

# PCB\_ManufactureData.getBomFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM file

## Signature

```typescript
public getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{ property: string; includeValue: string | false | true }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

BOM file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 使用默认配置导出 BOM
const bomFile = await eda.pcb_ManufactureData.getBomFile('MyBOM', 'xlsx');
if (bomFile) {
    await eda.sys_FileSystem.saveFile(bomFile);
}

// 自定义 BOM 过滤和列配置
const bomFile = await eda.pcb_ManufactureData.getBomFile(
    'Custom_Production_BOM',
    'xlsx',
    undefined,
    [
        { property: 'Add into BOM', includeValue: 'yes' },
        { property: 'Convert to PCB', includeValue: 'yes' }
    ],
    ['No.', 'Quantity', 'Comment'],
    ['Name', 'Device', 'Designator', 'Supplier'],
    [
        { property: 'Designator', title: '位号', sort: 'asc', group: 'No', orderWeight: 10 },
        { property: 'Quantity', title: '数量', sort: 'desc', group: 'Yes', orderWeight: 9 }
    ]
);

// 导出 CSV 格式 BOM
const csvBomFile = await eda.pcb_ManufactureData.getBomFile(
    'Simple_BOM',
    'csv',
    undefined,
    [{ property: 'Add into BOM', includeValue: 'yes' }],
    ['No.', 'Quantity'],
    ['Designator', 'Footprint', 'Value']
);
```

### getbomtemplatefile

# PCB\_ManufactureData.getBomTemplateFile() method

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

## Example


```javascript
// 获取指定模板的文件
const templateFile = await eda.pcb_ManufactureData.getBomTemplateFile('MyCustomTemplate');
if (templateFile) {
    await eda.sys_FileSystem.saveFile(templateFile);
}
```

### getbomtemplates

# PCB\_ManufactureData.getBomTemplates() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM template list

## Signature

```typescript
public getBomTemplates(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

BOM template list

## Example


```javascript
// 获取所有可用的 BOM 模板
const templates = await eda.pcb_ManufactureData.getBomTemplates();
console.log('可用的 BOM 模板:', templates);
templates.forEach((template, index) => {
    console.log(`${index + 1}. ${template}`);
});
```

### getdsnfile

# PCB\_ManufactureData.getDsnFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Auto routing file (DSN)

## Signature

```typescript
public getDsnFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Auto routing DSN file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
const dsnFile = await eda.pcb_ManufactureData.getDsnFile('AutoRoute_DSN');
if (dsnFile) {
    await eda.sys_FileSystem.saveFile(dsnFile);
}
```

### getdxffile

# PCB\_ManufactureData.getDxfFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get DXF file

## Signature

```typescript
public getDxfFile(fileName?: string, layers?: Array<{ layerId: EPCB_LayerId; mirror: boolean }>, objects?: Array<string>): Promise<File | undefined>;
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

layers


</td><td>

Array&lt;{ layerId: [EPCB\_LayerId](../enums/EPCB_LayerId.md)<!-- -->; mirror: boolean }&gt;


</td><td>

_(Optional)_ Exported layers


</td></tr>
<tr><td>

objects


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Exported objects


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

DXF file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 1. 指定导出层：顶层铜层（layerId 1）和板框层（layerId 11），不镜像
const layers = [
    { layerId: 1, mirror: false },
    { layerId: 11, mirror: false }
];

// 2. 发起导出，25 秒内完成就输出文件信息
const dxfFile = await Promise.race([
    eda.pcb_ManufactureData.getDxfFile('嘉立创示例_DXF', layers),
    new Promise(resolve => setTimeout(() => resolve(undefined), 25000))
]);

// 3. 查看导出结果
if (dxfFile) {
    console.log('导出文件名：', dxfFile.name);
    console.log('文件大小：', dxfFile.size);
} else {
    console.log('导出超过 25 秒仍在后台进行，真实使用直接 await 等待完成即可');
}
```

### getflyingprobetestfile

# PCB\_ManufactureData.getFlyingProbeTestFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the flying probe test file

## Signature

```typescript
public getFlyingProbeTestFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Flying probe test file data

## Example


```javascript
// 保存飞针测试文件到本地
const flyingProbeFile = await eda.pcb_ManufactureData.getFlyingProbeTestFile('FlyingProbe_Test');
if (flyingProbeFile) {
    await eda.sys_FileSystem.saveFile(flyingProbeFile);
}
```

### getgerberfile

# PCB\_ManufactureData.getGerberFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the PCB fabrication file (Gerber)

## Signature

```typescript
public getGerberFile(fileName?: string, colorSilkscreen?: boolean, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.INCH, digitalFormat?: { integerNumber: number; decimalNumber: number }, other?: { metallicDrillingInformation: boolean; nonMetallicDrillingInformation: boolean; drillTable: boolean; flyingProbeTestingFile: boolean }, layers?: Array<{ layerId: EPCB_LayerId; isMirror: boolean }>, objects?: Array<'Pad' | 'Via' | 'Track' | 'Text' | 'Image' | 'Dimension' | 'BoardOutline' | 'BoardCutout' | 'CopperFilled' | 'SolidRegion' | 'FPCStiffener' | 'Line' | 'PlaneZone' | 'ComponentProperty' | 'ComponentSilkscreen' | 'TearDrop'>): Promise<File | undefined>;
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

colorSilkscreen


</td><td>

boolean


</td><td>

_(Optional)_ Whether to generate a color silkscreen fabrication file (EasyEDA-specific file)


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ Unit


</td></tr>
<tr><td>

digitalFormat


</td><td>

\{ integerNumber: number; decimalNumber: number \}


</td><td>

_(Optional)_ Digital format


</td></tr>
<tr><td>

other


</td><td>

\{ metallicDrillingInformation: boolean; nonMetallicDrillingInformation: boolean; drillTable: boolean; flyingProbeTestingFile: boolean \}


</td><td>

_(Optional)_ Other


</td></tr>
<tr><td>

layers


</td><td>

Array&lt;{ layerId: [EPCB\_LayerId](../enums/EPCB_LayerId.md)<!-- -->; isMirror: boolean }&gt;


</td><td>

_(Optional)_ Exported layers. By default, they are exported according to EasyEDA production requirements


</td></tr>
<tr><td>

objects


</td><td>

Array&lt;'Pad' \| 'Via' \| 'Track' \| 'Text' \| 'Image' \| 'Dimension' \| 'BoardOutline' \| 'BoardCutout' \| 'CopperFilled' \| 'SolidRegion' \| 'FPCStiffener' \| 'Line' \| 'PlaneZone' \| 'ComponentProperty' \| 'ComponentSilkscreen' \| 'TearDrop'&gt;


</td><td>

_(Optional)_ Exported objects. By default, they are exported according to EasyEDA production requirements


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PCB fabrication file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 导出默认的 Gerber 文件
const gerberFile = await eda.pcb_ManufactureData.getGerberFile('MyBoard_Gerber');
if (gerberFile) {
    console.log('Gerber 文件已生成:', gerberFile);
}

// 导出并保存到本地
const gerberFile = await eda.pcb_ManufactureData.getGerberFile(
    'MyBoard_Gerber',
    false,
    ESYS_Unit.MILLIMETER,
    { integerNumber: 2, decimalNumber: 6 }
);
if (gerberFile) {
    await eda.sys_FileSystem.saveFile(gerberFile,'Gerber.zip');
}

// 自定义导出层和对象
const gerberFile = await eda.pcb_ManufactureData.getGerberFile(
    'Custom_Gerber',
    false,
    ESYS_Unit.INCH,
    { integerNumber: 3, decimalNumber: 5 },
    { metallicDrillingInformation: true, nonMetallicDrillingInformation: true, drillTable: false, flyingProbeTestingFile: false },
    [{ layerId: EPCB_LayerId.TOP, isMirror: false }, { layerId: EPCB_LayerId.BOTTOM, isMirror: false }, { layerId: EPCB_LayerId.BOARD_OUTLINE, isMirror: false }],
    ['Pad', 'Via', 'Track', 'BoardOutline']
);
```

### getidxfile

# PCB\_ManufactureData.getIdxFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get IDX file

## Signature

```typescript
public getIdxFile(fileName?: string): Promise<File | undefined>;
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

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

IDX file

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
const idxFile = await eda.pcb_ManufactureData.getIdxFile('Design_Exchange');
if (idxFile) {
    await eda.sys_FileSystem.saveFile(idxFile);
}
```

### getipc2581cfile

# PCB\_ManufactureData.getIpc2581CFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get IPC-2581C file

## Signature

```typescript
public getIpc2581CFile(fileName?: string, fileType?: 'xml' | 'cvg' | '2581', unit?: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER, oemNumber?: 'Device' | 'Manufacturer Part' | 'Supplier Part' | 'Comment'): Promise<File | undefined>;
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

'xml' \| 'cvg' \| '2581'


</td><td>

_(Optional)_


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_


</td></tr>
<tr><td>

oemNumber


</td><td>

'Device' \| 'Manufacturer Part' \| 'Supplier Part' \| 'Comment'


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

IPC-2581C file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 1. 发起导出（XML 格式、毫米单位、OEM 编号取元件的 Device 属性），
//    25 秒内完成就输出文件信息
const ipcFile = await Promise.race([
    eda.pcb_ManufactureData.getIpc2581CFile('嘉立创示例_IPC2581C', 'xml', 'mm', 'Device'),
    new Promise(resolve => setTimeout(() => resolve(undefined), 25000))
]);

// 2. 查看导出结果
if (ipcFile) {
    console.log('导出文件名：', ipcFile.name);
    console.log('文件大小：', ipcFile.size);
} else {
    console.log('导出超过 25 秒仍在后台进行，真实使用直接 await 等待完成即可');
}
```

### getipcd356afile

# PCB\_ManufactureData.getIpcD356AFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get IPC-D-356A file

## Signature

```typescript
public getIpcD356AFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

IPC-D-356A file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
const ipcFile = await eda.pcb_ManufactureData.getIpcD356AFile('IPC_D356A_Test');
if (ipcFile) {
    await eda.sys_FileSystem.saveFile(ipcFile);
}
```

### getmanufacturedata

# PCB\_ManufactureData.getManufactureData() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Export the manufacture data

## Signature

```typescript
public getManufactureData(): Promise<File | undefined>;
```


## Returns

Promise&lt;File \| undefined&gt;

Manufacture data

## Remarks

This API corresponds to the one-click manufacture data export function of the private deployment edition

It will obtain the file data according to the configuration of the one-click manufacture data export popup on the front end

Note: This API is only valid for the private deployment edition. Calling it in other editions will always `throw Error`

## Example


```javascript
// 1. 按弹窗当前配置一键导出制造文件
try {
    const manufactureFile = await eda.pcb_ManufactureData.getManufactureData();
    console.log('制造文件大小：', manufactureFile?.size);
} catch (e) {
    // 非私有化部署版本调用会直接抛错，属预期行为
    console.log('当前版本不支持一键导出制造文件（仅私有化部署版本有效）');
}
```

### getnetlistfile

# PCB\_ManufactureData.getNetlistFile() method

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

## Example


```javascript
// 导出嘉立创 EDA 专业版格式网表
const netlistFile = await eda.pcb_ManufactureData.getNetlistFile(
    'MyNetlist',
    ESYS_NetlistType.JLCEDA_PRO
);
if (netlistFile) {
    await eda.sys_FileSystem.saveFile(netlistFile);
}

// 导出 Altium Designer 格式
const altiumNetlist = await eda.pcb_ManufactureData.getNetlistFile(
    'Netlist_Altium',
    ESYS_NetlistType.ALTIUM_DESIGNER
);

// 导出 PADS 格式
const padsNetlist = await eda.pcb_ManufactureData.getNetlistFile(
    'Netlist_PADS',
    ESYS_NetlistType.PADS
);
```

### getopendatabasedoubleplusfile

# PCB\_ManufactureData.getOpenDatabaseDoublePlusFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get ODB++ file

## Signature

```typescript
public getOpenDatabaseDoublePlusFile(fileName?: string, unit?: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER, otherData?: { metallizedDrilledHoles?: undefined | false | true; nonMetallizedDrilledHoles?: undefined | false | true; drillTable?: undefined | false | true; flyingProbeTestFile?: undefined | false | true }, layers?: Array<{ layerId: EPCB_LayerId; mirror: boolean }>, objects?: Array<{ objectName: string }>): Promise<File | undefined>;
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

unit


</td><td>

[ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ Unit


</td></tr>
<tr><td>

otherData


</td><td>

\{ metallizedDrilledHoles?: undefined \| false \| true; nonMetallizedDrilledHoles?: undefined \| false \| true; drillTable?: undefined \| false \| true; flyingProbeTestFile?: undefined \| false \| true \}


</td><td>

_(Optional)_ Other


</td></tr>
<tr><td>

layers


</td><td>

Array&lt;{ layerId: [EPCB\_LayerId](../enums/EPCB_LayerId.md)<!-- -->; mirror: boolean }&gt;


</td><td>

_(Optional)_ Exported layers. By default, they are exported according to EasyEDA production requirements


</td></tr>
<tr><td>

objects


</td><td>

Array&lt;{ objectName: string }&gt;


</td><td>

_(Optional)_ Exported objects. By default, they are exported according to EasyEDA production requirements


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

ODB++ file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 导出 ODB++ 文件，自定义单位和选项
const odbFile = await eda.pcb_ManufactureData.getOpenDatabaseDoublePlusFile(
    'MyBoard_ODB',
    ESYS_Unit.INCH,
    {
        metallizedDrilledHoles: true,
        nonMetallizedDrilledHoles: true,
        drillTable: true,
        flyingProbeTestFile: false
    }
);
if (odbFile) {
    await eda.sys_FileSystem.saveFile(odbFile);
}
```

### getpadsfile

# PCB\_ManufactureData.getPadsFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get PADS file

## Signature

```typescript
public getPadsFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PADS file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 获取 PADS 格式文件
const padsFile = await eda.pcb_ManufactureData.getPadsFile('Converted_To_PADS');
if (padsFile) {
    await eda.sys_FileSystem.saveFile(padsFile);
}
```

### getpcbinfofile

# PCB\_ManufactureData.getPcbInfoFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get PCB information file

## Signature

```typescript
public getPcbInfoFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PCB information file

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
const pcbInfoFile = await eda.pcb_ManufactureData.getPcbInfoFile('Board_Information');
if (pcbInfoFile) {
    await eda.sys_FileSystem.saveFile(pcbInfoFile);
}
```

### getpdffile

# PCB\_ManufactureData.getPdfFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get PDF file

## Signature

```typescript
public getPdfFile(fileName?: string, outputMethod?: EPCB_PdfOutputMethod, contentConfig?: { displayAttributesAsMenu: boolean; showOutlineOnly: boolean }, watermark?: { show?: undefined | false | true; content?: undefined | string; styleConfig?: undefined | { color: string; transparency: 'Opaque' | '75%' | '50%' | '25%'; font: string; fontSize: { unit: ESYS_Unit.MILLIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL; value: number }; style: { bold: boolean; italic: boolean; underline: boolean }; slope: 0 | 45 | 90; denseness: 'Single' | 'Sparse' | 'Std' | 'Dense' } }, graphPageConfig?: Array<Record<string, any>>): Promise<File | undefined>;
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

outputMethod


</td><td>

[EPCB\_PdfOutputMethod](../enums/EPCB_PdfOutputMethod.md)


</td><td>

_(Optional)_ Output method. ADD since EDA v4.2


</td></tr>
<tr><td>

contentConfig


</td><td>

\{ displayAttributesAsMenu: boolean; showOutlineOnly: boolean \}


</td><td>

_(Optional)_ Content configuration. ADD since EDA v4.2


</td></tr>
<tr><td>

watermark


</td><td>

{ show?: undefined \| false \| true; content?: undefined \| string; styleConfig?: undefined \| { color: string; transparency: 'Opaque' \| '75%' \| '50%' \| '25%'; font: string; fontSize: { unit: [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)<!-- -->; value: number }; style: { bold: boolean; italic: boolean; underline: boolean }; slope: 0 \| 45 \| 90; denseness: 'Single' \| 'Sparse' \| 'Std' \| 'Dense' } }


</td><td>

_(Optional)_ Watermark. ADD since EDA v4.2


</td></tr>
<tr><td>

graphPageConfig


</td><td>

Array&lt;Record&lt;string, any&gt;&gt;


</td><td>

_(Optional)_ Graph page configuration. ADD since EDA v4.2


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PDF file data (or archive)

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

REFACTOR since EDA v4.2

## Example


```javascript
// 导出多页 PDF（包含所有图层）
const pdfFile = await eda.pcb_ManufactureData.getPdfFile(
    'PCB_Documentation',
    EPCB_PdfOutputMethod.MULTI_PAGE_PDF
);
if (pdfFile) {
    await eda.sys_FileSystem.saveFile(pdfFile);
}
```

### getpickandplacefile

# PCB\_ManufactureData.getPickAndPlaceFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Coordinate file (PickAndPlace)

## Signature

```typescript
public getPickAndPlaceFile(fileName?: string, fileType?: 'xlsx' | 'csv', unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL): Promise<File | undefined>;
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

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ Unit


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Coordinate file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 导出毫米单位的 Excel 格式坐标文件
const pnpFile = await eda.pcb_ManufactureData.getPickAndPlaceFile(
    'PickAndPlace',
    'xlsx',
    ESYS_Unit.MILLIMETER
);
if (pnpFile) {
    await eda.sys_FileSystem.saveFile(pnpFile);
}

```

### gettestpointfile

# PCB\_ManufactureData.getTestPointFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the test point report file

## Signature

```typescript
public getTestPointFile(fileName?: string, fileType?: 'xlsx' | 'csv'): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Test point report file data

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example


```javascript
// 保存测试点报告文件到本地
const testPointFile = await eda.pcb_ManufactureData.getTestPointFile('Test_Point_Report', 'xlsx');
if (testPointFile) {
    await eda.sys_FileSystem.saveFile(testPointFile);
}
```

### place3dshellorder

# PCB\_ManufactureData.place3DShellOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

3D shell ordering

## Signature

```typescript
public place3DShellOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

Whether the ordering check passed. Until the input parameters are fully developed, the return value has no practical effect and does not wait for the execution result

## Remarks

This API currently only supports interactive checking. The input parameters have no effect for now and are reserved for future development

## Example


```javascript
// 1. 交互式下单检查：弹出检查弹窗等待确认，确认后打开下单页面
// const passed = await eda.pcb_ManufactureData.place3DShellOrder(true);

// 2. 静默检查：不弹任何弹窗，忽略警告并直接生成下单资料
// const passed = await eda.pcb_ManufactureData.place3DShellOrder(false, true);
// console.log('下单检查结果 ' + passed);

// 下单会真实打开订单页面并产生订单数据，案例中不实际执行
console.log('演示调用：place3DShellOrder(true) 交互式检查，或 place3DShellOrder(false, true) 静默下单');
```

### placecomponentsorder

# PCB\_ManufactureData.placeComponentsOrder() method

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

Whether the ordering check passed. Until the input parameters are fully developed, the return value has no practical effect and does not wait for the execution result

## Remarks

This API currently only supports interactive checking. The input parameters have no effect for now and are reserved for future development

## Example


```javascript
// 1. 交互式下单检查：弹出检查弹窗等待确认，确认后打开购买页面
// const passed = await eda.pcb_ManufactureData.placeComponentsOrder(true);

// 2. 静默检查：不弹任何弹窗，忽略警告并直接生成下单资料
// const passed = await eda.pcb_ManufactureData.placeComponentsOrder(false, true);
// console.log('下单检查结果 ' + passed);

// 下单会真实打开订单页面并产生订单数据，案例中不实际执行
console.log('演示调用：placeComponentsOrder(true) 交互式检查，或 placeComponentsOrder(false, true) 静默下单');
```

### placepcborder

# PCB\_ManufactureData.placePcbOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

PCB ordering

## Signature

```typescript
public placePcbOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

Whether the ordering check passed. Until the input parameters are fully developed, the return value has no practical effect and does not wait for the execution result

## Remarks

This API currently only supports interactive checking. The input parameters have no effect for now and are reserved for future development

## Example


```javascript
// 1. 交互式下单检查：弹出检查弹窗等待确认，确认后打开下单页面
// const passed = await eda.pcb_ManufactureData.placePcbOrder(true);

// 2. 静默检查：不弹任何弹窗，忽略警告并直接生成下单资料
// const passed = await eda.pcb_ManufactureData.placePcbOrder(false, true);
// console.log('下单检查结果 ' + passed);

// 下单会真实打开订单页面并产生订单数据，案例中不实际执行
console.log('演示调用：placePcbOrder(true) 交互式检查，或 placePcbOrder(false, true) 静默下单');
```

### placesmtcomponentsorder

# PCB\_ManufactureData.placeSmtComponentsOrder() method

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

Whether the ordering check passed. Until the input parameters are fully developed, the return value has no practical effect and does not wait for the execution result

## Remarks

This API currently only supports interactive checking. The input parameters have no effect for now and are reserved for future development

## Example


```javascript
// 1. 交互式下单检查：弹出检查弹窗等待确认，确认后打开下单页面
// const passed = await eda.pcb_ManufactureData.placeSmtComponentsOrder(true);

// 2. 静默检查：不弹任何弹窗，忽略警告并直接生成下单资料
// const passed = await eda.pcb_ManufactureData.placeSmtComponentsOrder(false, true);
// console.log('下单检查结果 ' + passed);

// 下单会真实打开订单页面并产生订单数据，案例中不实际执行
console.log('演示调用：placeSmtComponentsOrder(true) 交互式检查，或 placeSmtComponentsOrder(false, true) 静默下单');
```

### uploadbomtemplatefile

# PCB\_ManufactureData.uploadBomTemplateFile() method

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

## Example


```javascript
// 从文件选择器读取模板文件
const templateFile = await eda.sys_FileSystem.openReadFileDialog('.xlsx');
if (templateFile) {
    const templateName = await eda.pcb_ManufactureData.uploadBomTemplateFile(
        templateFile,
        'MyCustomTemplate'
    );
    if (templateName) {
        console.log('模板上传成功:', templateName);
    }
}
```
