# SYS\_FormatConversion class

System / format conversion (Chameleon) class

## Signature

```typescript
export class SYS_FormatConversion 
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
public convertAltiumDesignerLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;
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

### convertaltiumdesignerlibrariestoeasyedasinglefile

# SYS\_FormatConversion.convertAltiumDesignerLibrariesToEasyEDASingleFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert Altium Designer libraries to a single EasyEDA library file

## Signature

```typescript
public convertAltiumDesignerLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;
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

### convertdisalibrariestoeasyedamultifiles

# SYS\_FormatConversion.convertDisaLibrariesToEasyEDAMultiFiles() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert T/DISA 4001 libraries to multiple EasyEDA library files (one file per device)

## Signature

```typescript
public convertDisaLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;
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

### convertdisalibrariestoeasyedasinglefile

# SYS\_FormatConversion.convertDisaLibrariesToEasyEDASingleFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert T/DISA 4001 libraries to a single EasyEDA library file

## Signature

```typescript
public convertDisaLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;
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
