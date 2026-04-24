# SCH\_ManufactureData class

原理图 &amp; 符号 / 生产资料类

## Signature

```typescript
declare class SCH_ManufactureData 
```

## Remarks

获取当前原理图图页的生产资料文件及快捷下单

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[getAssemblyVariantsConfigs()](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取装配体变量配置列表


</td></tr>
<tr><td>

[getBomFile(fileName, fileType, template, filterOptions, statistics, property, columns, assemblyVariantsConfig)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取 BOM 文件


</td></tr>
<tr><td>

[getExportDocumentFile(fileName, fileType, typeSpecificParams, object, objectSpecificParams)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取导出文档文件


</td></tr>
<tr><td>

[getNetlistFile(fileName, netlistType)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取网表文件（Netlist）


</td></tr>
<tr><td>

[getSimulationNetlistFile(fileName, netlistType)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 获取仿真网表文件


</td></tr>
<tr><td>

[placeComponentsOrder(interactive, ignoreWarning)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** 元件下单


</td></tr>
<tr><td>

[placeSmtComponentsOrder(interactive, ignoreWarning)](./SCH_ManufactureData.md)


</td><td>


</td><td>

**_(BETA)_** SMT 元件下单


</td></tr>
</tbody></table>

---

## 方法详情

### getassemblyvariantsconfigs

# SCH\_ManufactureData.getAssemblyVariantsConfigs() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取装配体变量配置列表

## Signature

```typescript
getAssemblyVariantsConfigs(): Promise<Array<{
        text: string;
        value: string;
    }>>;
```


## Returns

Promise&lt;Array&lt;{ text: string; value: string; }&gt;&gt;

装配体变量配置列表

### getbomfile

# SCH\_ManufactureData.getBomFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取 BOM 文件

## Signature

```typescript
getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{
        property: string;
        includeValue: boolean | string;
    }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>, assemblyVariantsConfig?: {
        text: string;
        value: string;
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
<tr><td>

assemblyVariantsConfig


</td><td>

\{ text: string; value: string; \}


</td><td>

_(Optional)_ 装配体变量配置


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

BOM 文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

### getexportdocumentfile

# SCH\_ManufactureData.getExportDocumentFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取导出文档文件

## Signature

```typescript
getExportDocumentFile(fileName?: string, fileType?: ESCH_ExportDocumentFileType, typeSpecificParams?: {
        theme?: 'Default' | 'White on Black' | 'Black on White';
        lineWidth?: 'Default' | 'Always 1px' | 'Follow the Zoom Change';
        displayAttributesAsMenu?: boolean;
        size?: 'Original Size' | string | {
            width: number;
            height: number;
            unit: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER;
        };
    }, object?: 'All Schematic' | 'Current Schematic' | 'Current Schematic Page' | string, objectSpecificParams?: {
        range?: 'All' | [number, number];
        outputMethod?: 'Merged sheet' | 'Separated sheet';
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

fileType


</td><td>

[ESCH\_ExportDocumentFileType](../enums/ESCH_ExportDocumentFileType.md)


</td><td>

_(Optional)_ 文件类型


</td></tr>
<tr><td>

typeSpecificParams


</td><td>

{ theme?: 'Default' \| 'White on Black' \| 'Black on White'; lineWidth?: 'Default' \| 'Always 1px' \| 'Follow the Zoom Change'; displayAttributesAsMenu?: boolean; size?: 'Original Size' \| string \| { width: number; height: number; unit: [ESYS\_Unit.INCH](../enums/ESYS_Unit.md) \| [ESYS\_Unit.MILLIMETER](../enums/ESYS_Unit.md)<!-- -->; }; }


</td><td>

_(Optional)_ 类型特定参数


</td></tr>
<tr><td>

object


</td><td>

'All Schematic' \| 'Current Schematic' \| 'Current Schematic Page' \| string


</td><td>

_(Optional)_ 对象


</td></tr>
<tr><td>

objectSpecificParams


</td><td>

{ range?: 'All' \| \[number, number\]; outputMethod?: 'Merged sheet' \| 'Separated sheet'; }


</td><td>

_(Optional)_ 对象特定参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

导出文档文件数据（或压缩包）

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

### getnetlistfile

# SCH\_ManufactureData.getNetlistFile() method

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

### getsimulationnetlistfile

# SCH\_ManufactureData.getSimulationNetlistFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取仿真网表文件

## Signature

```typescript
getSimulationNetlistFile(fileName?: string, netlistType?: ESCH_SimulationNetlistType): Promise<File | undefined>;
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

[ESCH\_SimulationNetlistType](../enums/ESCH_SimulationNetlistType.md)


</td><td>

_(Optional)_ 网表类型


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

仿真网表文件数据

## Remarks

可以使用 [SYS\_FileSystem.saveFile()](./SYS_FileSystem.md) 接口将文件导出到本地文件系统

### placecomponentsorder

# SCH\_ManufactureData.placeComponentsOrder() method

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

### placesmtcomponentsorder

# SCH\_ManufactureData.placeSmtComponentsOrder() method

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
