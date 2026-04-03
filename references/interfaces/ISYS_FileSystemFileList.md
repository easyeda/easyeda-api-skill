# ISYS\_FileSystemFileList interface

文件系统文件路径

## 签名

```typescript
interface ISYS_FileSystemFileList 
```

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


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

_（可选）_ 相对路径，不包含前面的传入路径和文件名（当没有传入路径时，不存在相对路径），且前后均无斜杠


</td></tr>
<tr><td>

[subFiles?](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

Array&lt;[ISYS\_FileSystemFileList](./ISYS_FileSystemFileList.md)<!-- -->&gt;


</td><td>

_（可选）_ 目录子文件


</td></tr>
</tbody></table>

---

## 属性详情

### filename

# ISYS\_FileSystemFileList.fileName property

文件名（前后均无斜杠）

## 签名

```typescript
fileName: string;
```

### fullpath

# ISYS\_FileSystemFileList.fullPath property

完整路径，包含文件名的绝对路径

## 签名

```typescript
fullPath: string;
```

### isdirectory

# ISYS\_FileSystemFileList.isDirectory property

是否为目录

## 签名

```typescript
isDirectory: boolean;
```

### relativepath

# ISYS\_FileSystemFileList.relativePath property

相对路径，不包含前面的传入路径和文件名（当没有传入路径时，不存在相对路径），且前后均无斜杠

## 签名

```typescript
relativePath?: string;
```

### subfiles

# ISYS\_FileSystemFileList.subFiles property

目录子文件

## 签名

```typescript
subFiles?: Array<ISYS_FileSystemFileList>;
```
