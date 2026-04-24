# ISYS\_FileSystemFileList interface

文件系统文件路径

## Signature

```typescript
interface ISYS_FileSystemFileList 
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[fileName](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

string


</td><td>

文件名（前后均无斜杠）


</td></tr>
<tr><td>

[fullPath](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

string


</td><td>

完整路径，包含文件名的绝对路径


</td></tr>
<tr><td>

[isDirectory](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

boolean


</td><td>

是否为目录


</td></tr>
<tr><td>

[relativePath?](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 相对路径，不包含前面的传入路径和文件名（当没有传入路径时，不存在相对路径），且前后均无斜杠


</td></tr>
<tr><td>

[subFiles?](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

Array&lt;[ISYS\_FileSystemFileList](./ISYS_FileSystemFileList.md)<!-- -->&gt;


</td><td>

_(Optional)_ 目录子文件


</td></tr>
</tbody></table>

---

## 属性详情

### filename

# ISYS\_FileSystemFileList.fileName property

文件名（前后均无斜杠）

## Signature

```typescript
fileName: string;
```

### fullpath

# ISYS\_FileSystemFileList.fullPath property

完整路径，包含文件名的绝对路径

## Signature

```typescript
fullPath: string;
```

### isdirectory

# ISYS\_FileSystemFileList.isDirectory property

是否为目录

## Signature

```typescript
isDirectory: boolean;
```

### relativepath

# ISYS\_FileSystemFileList.relativePath property

相对路径，不包含前面的传入路径和文件名（当没有传入路径时，不存在相对路径），且前后均无斜杠

## Signature

```typescript
relativePath?: string;
```

### subfiles

# ISYS\_FileSystemFileList.subFiles property

目录子文件

## Signature

```typescript
subFiles?: Array<ISYS_FileSystemFileList>;
```
