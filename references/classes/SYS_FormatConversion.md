# SYS\_FormatConversion class

系统 / 格式转换（Chameleon）类

## Signature

```typescript
declare class SYS_FormatConversion 
```

## Remarks

与其它板级 EDA 软件进行交叉文件格式转换

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

**_(BETA)_** 转换 Altium Designer 库到多个嘉立创库文件（每个器件一个文件）


</td></tr>
<tr><td>

[convertAltiumDesignerLibrariesToEasyEDASingleFile(file)](./SYS_FormatConversion.md)


</td><td>


</td><td>

**_(BETA)_** 转换 Altium Designer 库到单个嘉立创库文件


</td></tr>
<tr><td>

[convertDisaLibrariesToEasyEDAMultiFiles(file)](./SYS_FormatConversion.md)


</td><td>


</td><td>

**_(BETA)_** 转换 T/DISA 4001 库到多个嘉立创库文件（每个器件一个文件）


</td></tr>
<tr><td>

[convertDisaLibrariesToEasyEDASingleFile(file)](./SYS_FormatConversion.md)


</td><td>


</td><td>

**_(BETA)_** 转换 T/DISA 4001 库到单个嘉立创库文件


</td></tr>
</tbody></table>

---

## 方法详情

### convertaltiumdesignerlibrariestoeasyedamultifiles

# SYS\_FormatConversion.convertAltiumDesignerLibrariesToEasyEDAMultiFiles() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换 Altium Designer 库到多个嘉立创库文件（每个器件一个文件）

## Signature

```typescript
convertAltiumDesignerLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;
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

Altium Designer 库文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;File&gt;&gt;

多个嘉立创库文件

### convertaltiumdesignerlibrariestoeasyedasinglefile

# SYS\_FormatConversion.convertAltiumDesignerLibrariesToEasyEDASingleFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换 Altium Designer 库到单个嘉立创库文件

## Signature

```typescript
convertAltiumDesignerLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;
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

Altium Designer 库文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

嘉立创库文件

### convertdisalibrariestoeasyedamultifiles

# SYS\_FormatConversion.convertDisaLibrariesToEasyEDAMultiFiles() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换 T/DISA 4001 库到多个嘉立创库文件（每个器件一个文件）

## Signature

```typescript
convertDisaLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;
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

T/DISA 4001 库文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;File&gt;&gt;

多个嘉立创库文件

### convertdisalibrariestoeasyedasinglefile

# SYS\_FormatConversion.convertDisaLibrariesToEasyEDASingleFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换 T/DISA 4001 库到单个嘉立创库文件

## Signature

```typescript
convertDisaLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;
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

T/DISA 4001 库文件


</td></tr>
</tbody></table>



## Returns

Promise&lt;File \| undefined&gt;

嘉立创库文件
