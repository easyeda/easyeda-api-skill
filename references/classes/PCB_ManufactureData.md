# PCB\_ManufactureData class

PCB &amp; 封装 / 生产资料类

## Signature

```typescript
declare class PCB_ManufactureData 
```

## Remarks

获取当前 PCB 的生产资料文件及快捷下单

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

**_(BETA)_** 删除 BOM 模板


</td></tr>
<tr><td>

[get3DFile(fileName, fileType, element, modelMode, autoGenerateModels)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 3D 模型文件


</td></tr>
<tr><td>

[get3DShellFile(fileName, fileType)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 3D 外壳文件


</td></tr>
<tr><td>

[getAltiumDesignerFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 Altium Designer 文件


</td></tr>
<tr><td>

[getAutoLayoutJsonFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取自动布局文件（JSON）


</td></tr>
<tr><td>

[getAutoRouteJsonFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取自动布线文件（JSON）


</td></tr>
<tr><td>

[getAutoRouteJsonFileForJRouter(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 JRouter 专用自动布线文件（JSON）


</td></tr>
<tr><td>

[getBomFile(fileName, fileType, template, filterOptions, statistics, property, columns)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 BOM 文件


</td></tr>
<tr><td>

[getBomTemplateFile(template)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 BOM 模板文件


</td></tr>
<tr><td>

[getBomTemplates()](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 BOM 模板列表


</td></tr>
<tr><td>

[getDsnFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取自动布线文件（DSN）


</td></tr>
<tr><td>

[getDxfFile(fileName, layers, objects)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 DXF 文件


</td></tr>
<tr><td>

[getFlyingProbeTestFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取飞针测试文件


</td></tr>
<tr><td>

[getGerberFile(fileName, colorSilkscreen, unit, digitalFormat, other, layers, objects)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 PCB 制版文件（Gerber）


</td></tr>
<tr><td>

[getIdxFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 IDX 文件


</td></tr>
<tr><td>

[getIpcD356AFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 IPC-D-356A 文件


</td></tr>
<tr><td>

[getManufactureData()](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 导出制造文件


</td></tr>
<tr><td>

[getNetlistFile(fileName, netlistType)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取网表文件（Netlist）


</td></tr>
<tr><td>

[getOpenDatabaseDoublePlusFile(fileName, unit, otherData, layers, objects)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 ODB++ 文件


</td></tr>
<tr><td>

[getPadsFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 PADS 文件


</td></tr>
<tr><td>

[getPcbInfoFile(fileName)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 PCB 信息文件


</td></tr>
<tr><td>

[getPdfFile(fileName, outputMethod, contentConfig, watermark)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 PDF 文件


</td></tr>
<tr><td>

[getPickAndPlaceFile(fileName, fileType, unit)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取坐标文件（PickAndPlace）


</td></tr>
<tr><td>

[getTestPointFile(fileName, fileType)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取测试点报告文件


</td></tr>
<tr><td>

[place3DShellOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 3D 外壳下单


</td></tr>
<tr><td>

[placeComponentsOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 元件下单


</td></tr>
<tr><td>

[placePcbOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** PCB 下单


</td></tr>
<tr><td>

[placeSmtComponentsOrder(interactive, ignoreWarning)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** SMT 元件下单


</td></tr>
<tr><td>

[uploadBomTemplateFile(templateFile, template)](./PCB_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 上传 BOM 模板文件


</td></tr>
</tbody></table>

---

## 方法详情

### deletebomtemplate

# PCB\_ManufactureData.deleteBomTemplate() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除 BOM 模板

## Signature

```typescript
deleteBomTemplate(template: string): Promise<boolean>;
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

BOM 模板名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

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

获取 3D 模型文件

## Signature

```typescript
get3DFile(fileName?: string, fileType?: 'step' | 'obj', element?: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>, modelMode?: 'Outfit' | 'Parts', autoGenerateModels?: boolean): Promise<File | undefined>;
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

fileType


</td><td>

'step' \| 'obj'


</td><td>

_(Optional)_ 文件类型


</td></tr>
<tr><td>

element


</td><td>

Array&lt;'Component Model' \| 'Via' \| 'Silkscreen' \| 'Wire In Signal Layer'&gt;


</td><td>

_(Optional)_ 导出对象


</td></tr>
<tr><td>

modelMode


</td><td>

'Outfit' \| 'Parts'


</td><td>

_(Optional)_ 导出模式，`Outfit` = 装配体，`Parts` = 零件


</td></tr>
<tr><td>

autoGenerateModels


</td><td>

boolean


</td><td>

_(Optional)_ 是否为未绑定 3D 模型的元件自动生成 3D 模型（根据元件的"高度"属性）


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

3D 模型文件数据

## Remarks

请注意：只有以 STEP 格式导入的元件模型，才能在导出的 STEP 文件中体现

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 3D 外壳文件

## Signature

```typescript
get3DShellFile(fileName?: string, fileType?: 'stl' | 'step' | 'obj'): Promise<File | undefined>;
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

fileType


</td><td>

'stl' \| 'step' \| 'obj'


</td><td>

_(Optional)_ 文件类型


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

3D 外壳文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 Altium Designer 文件

## Signature

```typescript
getAltiumDesignerFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

Altium Designer 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取自动布局文件（JSON）

## Signature

```typescript
getAutoLayoutJsonFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

自动布局 JSON 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取自动布线文件（JSON）

## Signature

```typescript
getAutoRouteJsonFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

自动布线 JSON 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 JRouter 专用自动布线文件（JSON）

## Signature

```typescript
getAutoRouteJsonFileForJRouter(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

自动布线 JSON 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

### getbomfile

# PCB\_ManufactureData.getBomFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 BOM 文件

## Signature

```typescript
getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{
        property: string;
        includeValue: boolean | string;
    }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>): Promise<File | undefined>;
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

fileType


</td><td>

'xlsx' \| 'csv'


</td><td>

_(Optional)_ 文件类型


</td></tr>
<tr><td>

template


</td><td>

string


</td><td>

_(Optional)_ 模板名称


</td></tr>
<tr><td>

filterOptions


</td><td>

Array&lt;{ property: string; includeValue: boolean \| string; }&gt;


</td><td>

_(Optional)_ 过滤规则，仅应包含需要启用的规则，`property` 为规则名称，`includeValue` 为匹配的值


</td></tr>
<tr><td>

statistics


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 统计，包含所有需要启用的统计项的名称


</td></tr>
<tr><td>

property


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 属性，包含所有需要启用的属性的名称


</td></tr>
<tr><td>

columns


</td><td>

Array&lt;[IPCB\_BomPropertiesTableColumns](../interfaces/IPCB_BomPropertiesTableColumns.md)<!-- -->&gt;


</td><td>

_(Optional)_ 列的属性及排序，`title`<!-- -->、`sort`<!-- -->、`group`<!-- -->、`orderWeight` 不传入则取默认值，`null` 代表 \*\*无\*\* 或 \*\*空\*\*


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

BOM 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 BOM 模板文件

## Signature

```typescript
getBomTemplateFile(template: string): Promise<File | undefined>;
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

BOM 模板名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

BOM 模板文件

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

获取 BOM 模板列表

## Signature

```typescript
getBomTemplates(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

BOM 模板列表

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

获取自动布线文件（DSN）

## Signature

```typescript
getDsnFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

自动布线 DSN 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 DXF 文件

## Signature

```typescript
getDxfFile(fileName?: string, layers?: Array<{
        layerId: number;
        mirror: boolean;
    }>, objects?: Array<string>): Promise<File | undefined>;
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

layers


</td><td>

Array&lt;{ layerId: number; mirror: boolean; }&gt;


</td><td>

_(Optional)_ 导出层


</td></tr>
<tr><td>

objects


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 导出对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

DXF 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

### getflyingprobetestfile

# PCB\_ManufactureData.getFlyingProbeTestFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取飞针测试文件

## Signature

```typescript
getFlyingProbeTestFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

飞针测试文件数据

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

获取 PCB 制版文件（Gerber）

## Signature

```typescript
getGerberFile(fileName?: string, colorSilkscreen?: boolean, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.INCH, digitalFormat?: {
        integerNumber: number;
        decimalNumber: number;
    }, other?: {
        metallicDrillingInformation: boolean;
        nonMetallicDrillingInformation: boolean;
        drillTable: boolean;
        flyingProbeTestingFile: boolean;
    }, layers?: Array<{
        layerId: number;
        isMirror: boolean;
    }>, objects?: Array<'Pad' | 'Via' | 'Track' | 'Text' | 'Image' | 'Dimension' | 'BoardOutline' | 'BoardCutout' | 'CopperFilled' | 'SolidRegion' | 'FPCStiffener' | 'Line' | 'PlaneZone' | 'ComponentProperty' | 'ComponentSilkscreen' | 'TearDrop'>): Promise<File | undefined>;
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

colorSilkscreen


</td><td>

boolean


</td><td>

_(Optional)_ 是否生成彩色丝印制造文件（嘉立创专用文件）


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.INCH](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ 单位


</td></tr>
<tr><td>

digitalFormat


</td><td>

\{ integerNumber: number; decimalNumber: number; \}


</td><td>

_(Optional)_ 数字格式


</td></tr>
<tr><td>

other


</td><td>

\{ metallicDrillingInformation: boolean; nonMetallicDrillingInformation: boolean; drillTable: boolean; flyingProbeTestingFile: boolean; \}


</td><td>

_(Optional)_ 其它


</td></tr>
<tr><td>

layers


</td><td>

Array&lt;{ layerId: number; isMirror: boolean; }&gt;


</td><td>

_(Optional)_ 导出层，默认则按照嘉立创生产需求导出


</td></tr>
<tr><td>

objects


</td><td>

Array&lt;'Pad' \| 'Via' \| 'Track' \| 'Text' \| 'Image' \| 'Dimension' \| 'BoardOutline' \| 'BoardCutout' \| 'CopperFilled' \| 'SolidRegion' \| 'FPCStiffener' \| 'Line' \| 'PlaneZone' \| 'ComponentProperty' \| 'ComponentSilkscreen' \| 'TearDrop'&gt;


</td><td>

_(Optional)_ 导出对象，默认则按照嘉立创生产需求导出


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PCB 制版文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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
    [{ layerId: 1, isMirror: false }, { layerId: 2, isMirror: false }, { layerId: 11, isMirror: false }],
    ['Pad', 'Via', 'Track', 'BoardOutline']
);
```

### getidxfile

# PCB\_ManufactureData.getIdxFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 IDX 文件

## Signature

```typescript
getIdxFile(fileName?: string): Promise<File | undefined>;
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

IDX 文件

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

## Example


```javascript
const idxFile = await eda.pcb_ManufactureData.getIdxFile('Design_Exchange');
if (idxFile) {
    await eda.sys_FileSystem.saveFile(idxFile);
}
```

### getipcd356afile

# PCB\_ManufactureData.getIpcD356AFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 IPC-D-356A 文件

## Signature

```typescript
getIpcD356AFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

IPC-D-356A 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

导出制造文件

## Signature

```typescript
getManufactureData(): Promise<File | undefined>;
```


## Returns

Promise&lt;File \| undefined&gt;

制造文件

## Remarks

本接口对应私有化部署版本一键导出制造文件功能

将根据前端一键导出制造文件弹窗的配置获取其文件数据

注意：本接口仅私有化部署版本有效，如若在其他版本调用将始终 `throw Error`

### getnetlistfile

# PCB\_ManufactureData.getNetlistFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取网表文件（Netlist）

## Signature

```typescript
getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>;
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

netlistType


</td><td>

[ESYS\_NetlistType](../enums/ESYS_NetlistType.md)


</td><td>

_(Optional)_ 网表类型


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

网表文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 ODB++ 文件

## Signature

```typescript
getOpenDatabaseDoublePlusFile(fileName?: string, unit?: ESYS_Unit.INCH, otherData?: {
        metallizedDrilledHoles?: boolean;
        nonMetallizedDrilledHoles?: boolean;
        drillTable?: boolean;
        flyingProbeTestFile?: boolean;
    }, layers?: Array<{
        layerId: number;
        mirror: boolean;
    }>, objects?: Array<{
        objectName: string;
    }>): Promise<File | undefined>;
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

unit


</td><td>

[ESYS\_Unit.INCH](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ 单位


</td></tr>
<tr><td>

otherData


</td><td>

\{ metallizedDrilledHoles?: boolean; nonMetallizedDrilledHoles?: boolean; drillTable?: boolean; flyingProbeTestFile?: boolean; \}


</td><td>

_(Optional)_ 其它


</td></tr>
<tr><td>

layers


</td><td>

Array&lt;{ layerId: number; mirror: boolean; }&gt;


</td><td>

_(Optional)_ 导出层，默认则按照嘉立创生产需求导出


</td></tr>
<tr><td>

objects


</td><td>

Array&lt;{ objectName: string; }&gt;


</td><td>

_(Optional)_ 导出对象，默认则按照嘉立创生产需求导出


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

ODB++ 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 PADS 文件

## Signature

```typescript
getPadsFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PADS 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 PCB 信息文件

## Signature

```typescript
getPcbInfoFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PCB 信息文件

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取 PDF 文件

## Signature

```typescript
getPdfFile(fileName?: string, outputMethod?: EPCB_PdfOutputMethod, contentConfig?: {
        displayAttributesAsMenu: boolean;
        showOutlineOnly: boolean;
    }, watermark?: {
        show?: boolean;
        content?: string;
        styleConfig?: {
            color: string;
            transparency: 'Opaque' | '75%' | '50%' | '25%';
            font: string;
            fontSize: string;
            style: {
                blood: boolean;
                italic: boolean;
                underline: boolean;
            };
            slope: 0 | 45 | 90;
            denseness: 'Single' | 'Sparse' | 'Std' | 'Dense';
        };
    }): Promise<File | undefined>;
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

outputMethod


</td><td>

[EPCB\_PdfOutputMethod](../enums/EPCB_PdfOutputMethod.md)


</td><td>

_(Optional)_ 输出方式


</td></tr>
<tr><td>

contentConfig


</td><td>

\{ displayAttributesAsMenu: boolean; showOutlineOnly: boolean; \}


</td><td>

_(Optional)_ 内容配置


</td></tr>
<tr><td>

watermark


</td><td>

{ show?: boolean; content?: string; styleConfig?: { color: string; transparency: 'Opaque' \| '75%' \| '50%' \| '25%'; font: string; fontSize: string; style: { blood: boolean; italic: boolean; underline: boolean; }; slope: 0 \| 45 \| 90; denseness: 'Single' \| 'Sparse' \| 'Std' \| 'Dense'; }; }


</td><td>

_(Optional)_ 水印


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

PDF 文件数据（或压缩包）

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

`outputMethod`<!-- -->、`contentConfig`<!-- -->、`watermark` 参数暂不可用，等待后期规划

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

获取坐标文件（PickAndPlace）

## Signature

```typescript
getPickAndPlaceFile(fileName?: string, fileType?: 'xlsx' | 'csv', unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL): Promise<File | undefined>;
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

fileType


</td><td>

'xlsx' \| 'csv'


</td><td>

_(Optional)_ 文件类型


</td></tr>
<tr><td>

unit


</td><td>

[ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MIL](../enums/ESYS_Unit.md)


</td><td>

_(Optional)_ 单位


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

坐标文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

获取测试点报告文件

## Signature

```typescript
getTestPointFile(fileName?: string, fileType?: 'xlsx' | 'csv'): Promise<File | undefined>;
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

fileType


</td><td>

'xlsx' \| 'csv'


</td><td>

_(Optional)_ 文件类型


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

测试点报告文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

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

3D 外壳下单

## Signature

```typescript
place3DShellOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

_(Optional)_ 是否启用交互式检查

如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告， 即 `ignoreWarning` 参数将被忽略；

如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 `true` 并在新标签页打开下单页面


</td></tr>
<tr><td>

ignoreWarning


</td><td>

boolean


</td><td>

_(Optional)_ 在非交互式检查时忽略警告

如果设置为 `true`<!-- -->，将会忽略所有检查警告项并尽可能生成下单资料；

如果设置为 `false`<!-- -->，存在任意警告将中断执行并返回 `false` 的结果


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否通过下单检查

## Remarks

本接口暂时只支持交互式检查，入参暂无作用，预留后续开发

### placecomponentsorder

# PCB\_ManufactureData.placeComponentsOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

元件下单

## Signature

```typescript
placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

_(Optional)_ 是否启用交互式检查

如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告， 即 `ignoreWarning` 参数将被忽略；

如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 `true` 并在新标签页打开下单页面


</td></tr>
<tr><td>

ignoreWarning


</td><td>

boolean


</td><td>

_(Optional)_ 在非交互式检查时忽略警告

如果设置为 `true`<!-- -->，将会忽略所有检查警告项并尽可能生成下单资料；

如果设置为 `false`<!-- -->，存在任意警告将中断执行并返回 `false` 的结果


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否通过下单检查

## Remarks

本接口暂时只支持交互式检查，入参暂无作用，预留后续开发

### placepcborder

# PCB\_ManufactureData.placePcbOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

PCB 下单

## Signature

```typescript
placePcbOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

_(Optional)_ 是否启用交互式检查

如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告， 即 `ignoreWarning` 参数将被忽略；

如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 `true` 并在新标签页打开下单页面


</td></tr>
<tr><td>

ignoreWarning


</td><td>

boolean


</td><td>

_(Optional)_ 在非交互式检查时忽略警告

如果设置为 `true`<!-- -->，将会忽略所有检查警告项并尽可能生成下单资料；

如果设置为 `false`<!-- -->，存在任意警告将中断执行并返回 `false` 的结果


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否通过下单检查

## Remarks

本接口暂时只支持交互式检查，入参暂无作用，预留后续开发

### placesmtcomponentsorder

# PCB\_ManufactureData.placeSmtComponentsOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

SMT 元件下单

## Signature

```typescript
placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

_(Optional)_ 是否启用交互式检查

如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告， 即 `ignoreWarning` 参数将被忽略；

如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 `true` 并在新标签页打开下单页面


</td></tr>
<tr><td>

ignoreWarning


</td><td>

boolean


</td><td>

_(Optional)_ 在非交互式检查时忽略警告

如果设置为 `true`<!-- -->，将会忽略所有检查警告项并尽可能生成下单资料；

如果设置为 `false`<!-- -->，存在任意警告将中断执行并返回 `false` 的结果


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否通过下单检查

## Remarks

本接口暂时只支持交互式检查，入参暂无作用，预留后续开发

### uploadbomtemplatefile

# PCB\_ManufactureData.uploadBomTemplateFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

上传 BOM 模板文件

## Signature

```typescript
uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;
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

BOM 模板文件


</td></tr>
<tr><td>

template


</td><td>

string


</td><td>

_(Optional)_ BOM 模板名称，如若为 `undefined` 则自动从 `templateFile` 中取值


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

BOM 模板名称

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
