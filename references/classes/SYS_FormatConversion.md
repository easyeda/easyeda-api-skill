# SYS\_FormatConversion class

System / format conversion (Chameleon) class

## Signature

```typescript
class SYS_FormatConversion
```

## Remarks

Perform cross file format conversion with other board-level EDA software

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[convertAltiumDesignerLibrariesToEasyEDAMultiFiles(file)](./SYS_FormatConversion.md)

</td><td>

</td><td>

**_(BETA)_** Convert Altium Designer libraries to multiple EasyEDA library files (one file per device)

</td></tr>
<tr><td>

[convertAltiumDesignerLibrariesToEasyEDASingleFile(file)](./SYS_FormatConversion.md)

</td><td>

</td><td>

**_(BETA)_** Convert Altium Designer libraries to a single EasyEDA library file

</td></tr>
<tr><td>

[convertDisaLibrariesToEasyEDAMultiFiles(file)](./SYS_FormatConversion.md)

</td><td>

</td><td>

**_(BETA)_** Convert T/DISA 4001 libraries to multiple EasyEDA library files (one file per device)

</td></tr>
<tr><td>

[convertDisaLibrariesToEasyEDASingleFile(file)](./SYS_FormatConversion.md)

</td><td>

</td><td>

**_(BETA)_** Convert T/DISA 4001 libraries to a single EasyEDA library file

</td></tr>
</tbody></table>

---

## 方法详情

### convertaltiumdesignerlibrariestoeasyedamultifiles

# SYS\_FormatConversion.convertAltiumDesignerLibrariesToEasyEDAMultiFiles() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert Altium Designer libraries to multiple EasyEDA library files (one file per device)

## Signature

```typescript
function convertAltiumDesignerLibrariesToEasyEDAMultiFiles(
	file: File | Array<File>,
): Promise<Array<File>>;
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

file

</td><td>

File \| Array&lt;File&gt;

</td><td>

Altium Designer library file

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;File&gt;&gt;

Multiple EasyEDA library files

## Example

```javascript
// 1. 准备 Altium Designer 库文件（真实场景用 sys_FileSystem.openReadFileDialog
// 选取用户文件，此处直接构造 File 对象演示调用）
const schLib = new File(['占位内容，真实场景为 .SchLib 文件内容'], '嘉立创示例_元件库.SchLib');
const pcbLib = new File(['占位内容，真实场景为 .PcbLib 文件内容'], '嘉立创示例_封装库.PcbLib');

// 2. 转换为多个嘉立创库文件（每个器件一个文件）
const libFiles = await eda.sys_FormatConversion.convertAltiumDesignerLibrariesToEasyEDAMultiFiles([schLib, pcbLib]);

// 3. 输出转换得到的库文件列表
console.log('转换得到库文件数：', libFiles.length);
libFiles.forEach((file, index) => {
	console.log(`第 ${index + 1} 个文件：`, file.name);
});
```

### convertaltiumdesignerlibrariestoeasyedasinglefile

# SYS\_FormatConversion.convertAltiumDesignerLibrariesToEasyEDASingleFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert Altium Designer libraries to a single EasyEDA library file

## Signature

```typescript
function convertAltiumDesignerLibrariesToEasyEDASingleFile(
	file: File | Array<File>,
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

file

</td><td>

File \| Array&lt;File&gt;

</td><td>

Altium Designer library file

</td></tr>
</tbody></table>

## Returns

Promise&lt;File \| undefined&gt;

EasyEDA library file

## Example

```javascript
// 1. 准备 Altium Designer 库文件（真实场景用 sys_FileSystem.openReadFileDialog
// 选取用户文件，此处直接构造 File 对象演示调用）
const schLib = new File(['占位内容，真实场景为 .SchLib 文件内容'], '嘉立创示例_元件库.SchLib');

// 2. 转换为单个嘉立创库文件
const easyedaLib = await eda.sys_FormatConversion.convertAltiumDesignerLibrariesToEasyEDASingleFile(schLib);

// 3. 输出转换得到的库文件信息
console.log('库文件名：', easyedaLib.name);
console.log('文件大小：', easyedaLib.size, '字节');
```

### convertdisalibrariestoeasyedamultifiles

# SYS\_FormatConversion.convertDisaLibrariesToEasyEDAMultiFiles() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert T/DISA 4001 libraries to multiple EasyEDA library files (one file per device)

## Signature

```typescript
function convertDisaLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;
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

file

</td><td>

File \| Array&lt;File&gt;

</td><td>

T/DISA 4001 library file

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;File&gt;&gt;

Multiple EasyEDA library files

## Example

```javascript
// 1. 准备 T/DISA 4001 库文件（真实场景用 sys_FileSystem.openReadFileDialog
// 选取用户文件，此处直接构造 File 对象演示调用）
const disaLib = new File(['占位内容，真实场景为 T/DISA 4001 库文件内容'], '嘉立创示例_旧版器件库.lib');

// 2. 转换为多个嘉立创库文件（每个器件一个文件）
const libFiles = await eda.sys_FormatConversion.convertDisaLibrariesToEasyEDAMultiFiles(disaLib);

// 3. 输出转换得到的库文件列表（空数组表示没有可转换的器件）
console.log('转换得到库文件数：', libFiles.length);
libFiles.forEach((file, index) => {
	console.log(`第 ${index + 1} 个文件：`, file.name);
});
```

### convertdisalibrariestoeasyedasinglefile

# SYS\_FormatConversion.convertDisaLibrariesToEasyEDASingleFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert T/DISA 4001 libraries to a single EasyEDA library file

## Signature

```typescript
function convertDisaLibrariesToEasyEDASingleFile(
	file: File | Array<File>,
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

file

</td><td>

File \| Array&lt;File&gt;

</td><td>

T/DISA 4001 library file

</td></tr>
</tbody></table>

## Returns

Promise&lt;File \| undefined&gt;

EasyEDA library file

## Example

```javascript
// 1. 准备 T/DISA 4001 库文件（真实场景用 sys_FileSystem.openReadFileDialog
// 选取用户文件，此处直接构造 File 对象演示调用）
const disaLib = new File(['占位内容，真实场景为 T/DISA 4001 库文件内容'], '嘉立创示例_旧版器件库.lib');

// 2. 转换为单个嘉立创库文件
const easyedaLib = await eda.sys_FormatConversion.convertDisaLibrariesToEasyEDASingleFile(disaLib);

// 3. 输出转换得到的库文件信息
console.log('库文件名：', easyedaLib.name);
console.log('文件大小：', easyedaLib.size, '字节');
```
