# ILIB\_LibraryFileImportResult interface

库文件导入结果

## Signature

```typescript
interface ILIB_LibraryFileImportResult
```

## Remarks

各数组仅包含本次导入新增的条目；已存在且被覆盖更新的条目不包含在内

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

[cbbs](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

Array&lt;[ILIB\_LibraryInfo](./ILIB_LibraryInfo.md)<!-- -->&gt;

</td><td>

新增的复用模块

</td></tr>
<tr><td>

[devices](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

Array&lt;[ILIB\_LibraryInfo](./ILIB_LibraryInfo.md)<!-- -->&gt;

</td><td>

新增的器件

</td></tr>
<tr><td>

[footprints](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

Array&lt;[ILIB\_LibraryInfo](./ILIB_LibraryInfo.md)<!-- -->&gt;

</td><td>

新增的封装

</td></tr>
<tr><td>

[libraryName](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

string

</td><td>

目标库名称

</td></tr>
<tr><td>

[libraryUuid](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

string

</td><td>

目标库 UUID

</td></tr>
<tr><td>

[mode](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

[ESYS\_LibraryFileImportMode](../enums/ESYS_LibraryFileImportMode.md)

</td><td>

导入方式：本次是新建库还是覆盖已有同名库

</td></tr>
<tr><td>

[models3D](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

Array&lt;[ILIB\_LibraryInfo](./ILIB_LibraryInfo.md)<!-- -->&gt;

</td><td>

新增的 3D 模型

</td></tr>
<tr><td>

[panelLibraries](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

Array&lt;[ILIB\_LibraryInfo](./ILIB_LibraryInfo.md)<!-- -->&gt;

</td><td>

新增的面板库

</td></tr>
<tr><td>

[symbols](./ILIB_LibraryFileImportResult.md)

</td><td>

</td><td>

Array&lt;[ILIB\_LibraryInfo](./ILIB_LibraryInfo.md)<!-- -->&gt;

</td><td>

新增的符号

</td></tr>
</tbody></table>

---

## 属性详情

### cbbs

# ILIB\_LibraryFileImportResult.cbbs property

新增的复用模块

## Signature

```typescript
cbbs: Array<ILIB_LibraryInfo>;
```

### devices

# ILIB\_LibraryFileImportResult.devices property

新增的器件

## Signature

```typescript
devices: Array<ILIB_LibraryInfo>;
```

### footprints

# ILIB\_LibraryFileImportResult.footprints property

新增的封装

## Signature

```typescript
footprints: Array<ILIB_LibraryInfo>;
```

### libraryname

# ILIB\_LibraryFileImportResult.libraryName property

目标库名称

## Signature

```typescript
libraryName: string;
```

### libraryuuid

# ILIB\_LibraryFileImportResult.libraryUuid property

目标库 UUID

## Signature

```typescript
libraryUuid: string;
```

### mode

# ILIB\_LibraryFileImportResult.mode property

导入方式：本次是新建库还是覆盖已有同名库

## Signature

```typescript
mode: ESYS_LibraryFileImportMode;
```

### models3d

# ILIB\_LibraryFileImportResult.models3D property

新增的 3D 模型

## Signature

```typescript
models3D: Array<ILIB_LibraryInfo>;
```

### panellibraries

# ILIB\_LibraryFileImportResult.panelLibraries property

新增的面板库

## Signature

```typescript
panelLibraries: Array<ILIB_LibraryInfo>;
```

### symbols

# ILIB\_LibraryFileImportResult.symbols property

新增的符号

## Signature

```typescript
symbols: Array<ILIB_LibraryInfo>;
```
