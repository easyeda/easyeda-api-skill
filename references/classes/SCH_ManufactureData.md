# SCH\_ManufactureData class

Schematic &amp; symbol / manufacture data class

## Signature

```typescript
class SCH_ManufactureData
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

[getPngFile(fileName, resolution)](./SCH_ManufactureData.md)

</td><td>

</td><td>

**_(BETA)_** 获取 PNG 文件

</td></tr>
<tr><td>

[getSimulationNetlistFile(fileName, netlistType)](./SCH_ManufactureData.md)

</td><td>

</td><td>

**_(BETA)_** Get the simulation netlist file

</td></tr>
<tr><td>

[getSvgFile(fileName)](./SCH_ManufactureData.md)

</td><td>

</td><td>

**_(BETA)_** 获取 SVG 文件

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
function deleteBomTemplate(template: string): Promise<boolean>;
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
// 1. 查看当前账号下的 BOM 模板
const templates = await eda.sch_ManufactureData.getBomTemplates();
console.log('当前模板：', templates.join('、'));

// 2. 删除一个不存在的模板名，验证 API 的返回行为（不影响任何已有模板）
const success = await eda.sch_ManufactureData.deleteBomTemplate('嘉立创示例_不存在的模板');
console.log('删除不存在模板的返回值：', success);
```

### getassemblyvariantsconfigs

# SCH\_ManufactureData.getAssemblyVariantsConfigs() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the assembly variants configuration list

## Signature

```typescript
function getAssemblyVariantsConfigs(): Promise<Array<{ text: string; value: string }>>;
```

## Returns

Promise&lt;Array&lt;{ text: string; value: string }&gt;&gt;

Assembly variants configuration list

## Example

```javascript
// 1. 获取全部装配体变量配置
const variantsConfigs = await eda.sch_ManufactureData.getAssemblyVariantsConfigs();

// 2. 逐个查看
console.log('配置数量：', variantsConfigs.length);
variantsConfigs.forEach((config, index) => console.log(`配置 ${index + 1}：`, config.text, config.value));
```

### getbomfile

# SCH\_ManufactureData.getBomFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM file

## Signature

```typescript
function getBomFile(
	fileName?: string,
	fileType?: 'xlsx' | 'csv',
	template?: string,
	filterOptions?: Array<{ property: string; includeValue: boolean | string }>,
	statistics?: Array<string>,
	property?: Array<string>,
	columns?: Array<IPCB_BomPropertiesTableColumns>,
	assemblyVariantsConfig?: { text: string; value: string },
): Promise<File | undefined>;
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

Array&lt;{ property: string; includeValue: boolean \| string }&gt;

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

## Example

```javascript
// 1. 导出 xlsx 格式 BOM，只包含标记了加入 BOM 的元件
const bomFile = await eda.sch_ManufactureData.getBomFile(
	'嘉立创示例_BOM',
	'xlsx',
	undefined,
	[{ property: 'Add into BOM', includeValue: 'yes' }]
);

// 2. 查看导出结果
console.log('导出文件名：', bomFile?.name);
console.log('文件大小：', bomFile?.size);
```

### getbomtemplatefile

# SCH\_ManufactureData.getBomTemplateFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM template file

## Signature

```typescript
function getBomTemplateFile(template: string): Promise<File | undefined>;
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
// 1. 先拿到账号下可用的 BOM 模板列表
const templates = await eda.sch_ManufactureData.getBomTemplates();
console.log('可用模板：', templates.join('、'));

// 2. 导出第一个模板的文件
const templateFile = await eda.sch_ManufactureData.getBomTemplateFile(templates[0]);

// 3. 查看导出结果
console.log('模板文件大小：', templateFile?.size);
```

### getbomtemplates

# SCH\_ManufactureData.getBomTemplates() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get BOM template list

## Signature

```typescript
function getBomTemplates(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

BOM template list

## Example

```javascript
// 1. 获取全部 BOM 模板名
const templates = await eda.sch_ManufactureData.getBomTemplates();

// 2. 逐个查看
console.log('模板数量：', templates.length);
templates.forEach((name, index) => console.log(`模板 ${index + 1}：`, name));
```

### getexportdocumentfile

# SCH\_ManufactureData.getExportDocumentFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> - DEPRECATED since EDA v4.1

Get Export document file

## Signature

```typescript
function getExportDocumentFile(
	fileName?: string,
	fileType?: ESCH_ExportDocumentFileType,
	typeSpecificParams?: {
		theme?: 'Default' | 'White on Black' | 'Black on White';
		lineWidth?: 'Default' | 'Always 1px' | 'Follow the Zoom Change';
		displayAttributesAsMenu?: boolean;
		size?:
			| 'Original Size'
			| string
			| { width: number; height: number; unit: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER };
	},
	object?: 'All Schematic' | 'Current Schematic' | 'Current Schematic Page' | string,
	objectSpecificParams?: {
		range?: 'All' | [number, number];
		outputMethod?: 'Merged sheet' | 'Separated sheet';
	},
): Promise<File | undefined>;
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

{ theme?: 'Default' \| 'White on Black' \| 'Black on White'; lineWidth?: 'Default' \| 'Always 1px' \| 'Follow the Zoom Change'; displayAttributesAsMenu?: boolean; size?: 'Original Size' \| string \| { width: number; height: number; unit: [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md) } }

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

{ range?: 'All' \| \[number, number\]; outputMethod?: 'Merged sheet' \| 'Separated sheet' }

</td><td>

_(Optional)_ Object-specific parameters

</td></tr>
</tbody></table>

## Returns

Promise&lt;File \| undefined&gt;

Exported document file data (or archive)

## Remarks

You can use [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) API export the file to the local file system

## Example

```javascript
// 1. 把当前图页导出为 PDF（'PDF' 对应 ESCH_ExportDocumentFileType.PDF）
// const pdfFile = await eda.sch_ManufactureData.getExportDocumentFile(
// '嘉立创示例_原理图',
// 'PDF',
// undefined,
// 'Current Schematic Page'
// );
// console.log('导出文件名：', pdfFile?.name);
// 2. 也可以导出 PNG 位图，并通过类型特定参数控制主题和线宽
// const pngFile = await eda.sch_ManufactureData.getExportDocumentFile(
// '嘉立创示例_原理图',
// 'PNG',
// { theme: 'Black on White', lineWidth: 'Always 1px' },
// 'All Schematic',
// { outputMethod: 'Separated sheet' }  // 多图页时逐页分张输出
// );
// console.log('导出文件名：', pngFile?.name);
// 3. 拿到文件后用 sys_FileSystem.saveFile() 保存到本地
console.log('演示调用：getExportDocumentFile(文件名, 文件类型, 显示参数, 导出范围, 多页参数)');
```

### getnetlistfile

# SCH\_ManufactureData.getNetlistFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the netlist file (Netlist)

## Signature

```typescript
function getNetlistFile(
	fileName?: string,
	netlistType?: ESYS_NetlistType,
): Promise<File | undefined>;
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
// 1. 导出 Altium Designer 格式的网表（'Protel2' 对应 ESYS_NetlistType.ALTIUM_DESIGNER）
try {
	const netlistFile = await eda.sch_ManufactureData.getNetlistFile('嘉立创示例_网表', 'Protel2');
	console.log('导出文件名：', netlistFile?.name);
	console.log('文件大小：', netlistFile?.size);
}
catch (e) {
	// 原理图数据不满足网表校验（如引脚编号重复）时会抛错
	console.log('当前原理图数据不满足网表导出要求，导出未完成');
}
```

### getpngfile

# SCH\_ManufactureData.getPngFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 PNG 文件

## Signature

```typescript
function getPngFile(
	fileName?: string,
	resolution?: ISCH_ExportPngResolution,
): Promise<File | undefined>;
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

resolution

</td><td>

[ISCH\_ExportPngResolution](../interfaces/ISCH_ExportPngResolution.md)

</td><td>

_(Optional)_ 导出图片分辨率，见 [ISCH\_ExportPngResolution](../interfaces/ISCH_ExportPngResolution.md)

</td></tr>
</tbody></table>

## Returns

Promise&lt;File \| undefined&gt;

PNG 文件数据（或压缩包）

## Remarks

ADD since EDA v3.2.183 支持按长宽分辨率导出高清图片（最大 4096）； 支持只传入 `width` 或 `height` 中的任意一个，另一侧将按原始比例自动拉伸输出； `width` 与 `height` 均不传时，按当前一倍分辨率输出

/ EDA v4.1.23

### getsimulationnetlistfile

# SCH\_ManufactureData.getSimulationNetlistFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the simulation netlist file

## Signature

```typescript
function getSimulationNetlistFile(
	fileName?: string,
	netlistType?: ESCH_SimulationNetlistType,
): Promise<File | undefined>;
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

## Example

```javascript
// 1. 导出 Ngspice 仿真网表（'Ngspice' 对应 ESCH_SimulationNetlistType.NGSPICE）
// const simNetlistFile = await eda.sch_ManufactureData.getSimulationNetlistFile('嘉立创示例_仿真网表', 'Ngspice');
// console.log('导出文件名：', simNetlistFile?.name);
// console.log('文件大小：', simNetlistFile?.size);
// 2. 拿到文件后用 sys_FileSystem.saveFile() 保存到本地，或交给仿真工具直接使用
console.log('演示调用：getSimulationNetlistFile(文件名, 网表类型)');
```

### getsvgfile

# SCH\_ManufactureData.getSvgFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 SVG 文件

## Signature

```typescript
function getSvgFile(fileName?: string): Promise<File | undefined>;
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

SVG 文件数据（或压缩包）

## Remarks

ADD since EDA v3.2.183 多图页时会导出为压缩包（zip）

/ EDA v4.1.23

### placecomponentsorder

# SCH\_ManufactureData.placeComponentsOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Component ordering

## Signature

```typescript
function placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

## Example

```javascript
// 1. 交互式下单检查：弹出检查弹窗等待确认，确认后打开购买页面
// const passed = await eda.sch_ManufactureData.placeComponentsOrder(true);
// 2. 静默检查：不弹任何弹窗，忽略警告并直接生成下单资料
// const passed = await eda.sch_ManufactureData.placeComponentsOrder(false, true);
// console.log('下单检查结果 ' + passed);
// 下单会真实打开订单页面并产生订单数据，案例中不实际执行
console.log('演示调用：placeComponentsOrder(true) 交互式检查，或 placeComponentsOrder(false, true) 静默下单');
```

### placesmtcomponentsorder

# SCH\_ManufactureData.placeSmtComponentsOrder() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

SMT component ordering

## Signature

```typescript
function placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

## Example

```javascript
// 1. 交互式下单检查：弹出检查弹窗等待确认，确认后打开下单页面
// const passed = await eda.sch_ManufactureData.placeSmtComponentsOrder(true);
// 2. 静默检查：不弹任何弹窗，忽略警告并直接生成下单资料
// const passed = await eda.sch_ManufactureData.placeSmtComponentsOrder(false, true);
// console.log('下单检查结果 ' + passed);
// 下单会真实打开订单页面并产生订单数据，案例中不实际执行
console.log('演示调用：placeSmtComponentsOrder(true) 交互式检查，或 placeSmtComponentsOrder(false, true) 静默下单');
```

### uploadbomtemplatefile

# SCH\_ManufactureData.uploadBomTemplateFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Upload a BOM template file

## Signature

```typescript
function uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;
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
// 1. 从本地选择模板文件（弹窗需要用户交互）
// const templateFile = await eda.sys_FileSystem.openReadFileDialog('.xlsx');
// 2. 上传为新的 BOM 模板（第二参数指定模板名，不传则从文件名取）
// const templateName = await eda.sch_ManufactureData.uploadBomTemplateFile(templateFile, '嘉立创示例_模板');
// console.log('上传后的模板名 ' + templateName);
// 3. 上传后用 getBomTemplates 查看列表确认，不再需要时用 deleteBomTemplate 删除
console.log('演示流程：openReadFileDialog 读取 xlsx → uploadBomTemplateFile 上传 → getBomTemplates 确认');
```
