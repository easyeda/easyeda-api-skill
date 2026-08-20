# ISYS\_FileSystemFileList interface

File system file path

## Signature

```typescript
export interface ISYS_FileSystemFileList 
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

File name (no slashes at the beginning or end)


</td></tr>
<tr><td>

[fullPath](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

string


</td><td>

Full path, an absolute path including the file name


</td></tr>
<tr><td>

[isDirectory](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

boolean


</td><td>

Whether it is a directory


</td></tr>
<tr><td>

[relativePath?](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Relative path, not including the passed-in path and file name (when no path is passed in, there is no relative path), with no slashes at the beginning or end


</td></tr>
<tr><td>

[subFiles?](./ISYS_FileSystemFileList.md)


</td><td>


</td><td>

Array&lt;[ISYS\_FileSystemFileList](./ISYS_FileSystemFileList.md)<!-- -->&gt;


</td><td>

_(Optional)_ Sub-files of the directory


</td></tr>
</tbody></table>

---

## 属性详情

### filename

# ISYS\_FileSystemFileList.fileName property

File name (no slashes at the beginning or end)

## Signature

```typescript
fileName: string;
```

### fullpath

# ISYS\_FileSystemFileList.fullPath property

Full path, an absolute path including the file name

## Signature

```typescript
fullPath: string;
```

### isdirectory

# ISYS\_FileSystemFileList.isDirectory property

Whether it is a directory

## Signature

```typescript
isDirectory: boolean;
```

### relativepath

# ISYS\_FileSystemFileList.relativePath property

Relative path, not including the passed-in path and file name (when no path is passed in, there is no relative path), with no slashes at the beginning or end

## Signature

```typescript
relativePath?: string;
```

### subfiles

# ISYS\_FileSystemFileList.subFiles property

Sub-files of the directory

## Signature

```typescript
subFiles?: Array<ISYS_FileSystemFileList>;
```
