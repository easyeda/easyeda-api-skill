# ILIB\_ProjectLibraryUpdateResult interface

工程库更新结果

## Signature

```typescript
interface ILIB_ProjectLibraryUpdateResult
```

## Remarks

各数组仅包含本次实际更新的对象；未找到同名对象或更新失败的对象不包含在内

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

[failed](./ILIB_ProjectLibraryUpdateResult.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

更新失败的对象 UUID 列表

</td></tr>
<tr><td>

[mode](./ILIB_ProjectLibraryUpdateResult.md)

</td><td>

</td><td>

[ELIB\_ProjectLibraryUpdateMode](../enums/ELIB_ProjectLibraryUpdateMode.md)

</td><td>

本次使用的更新方式

</td></tr>
<tr><td>

[notFound](./ILIB_ProjectLibraryUpdateResult.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

未找到可更新来源的对象 UUID 列表（按名称匹配时即「未找到同名对象」）

</td></tr>
<tr><td>

[projectUuid](./ILIB_ProjectLibraryUpdateResult.md)

</td><td>

</td><td>

string

</td><td>

目标工程 UUID

</td></tr>
<tr><td>

[updatedDevices](./ILIB_ProjectLibraryUpdateResult.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

已更新的器件 UUID 列表

</td></tr>
<tr><td>

[updatedFootprints](./ILIB_ProjectLibraryUpdateResult.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

已更新的封装 UUID 列表

</td></tr>
<tr><td>

[updatedSymbols](./ILIB_ProjectLibraryUpdateResult.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

已更新的符号 UUID 列表

</td></tr>
</tbody></table>

---

## 属性详情

### failed

# ILIB\_ProjectLibraryUpdateResult.failed property

更新失败的对象 UUID 列表

## Signature

```typescript
failed: Array<string>;
```

### mode

# ILIB\_ProjectLibraryUpdateResult.mode property

本次使用的更新方式

## Signature

```typescript
mode: ELIB_ProjectLibraryUpdateMode;
```

### notfound

# ILIB\_ProjectLibraryUpdateResult.notFound property

未找到可更新来源的对象 UUID 列表（按名称匹配时即「未找到同名对象」）

## Signature

```typescript
notFound: Array<string>;
```

### projectuuid

# ILIB\_ProjectLibraryUpdateResult.projectUuid property

目标工程 UUID

## Signature

```typescript
projectUuid: string;
```

### updateddevices

# ILIB\_ProjectLibraryUpdateResult.updatedDevices property

已更新的器件 UUID 列表

## Signature

```typescript
updatedDevices: Array<string>;
```

### updatedfootprints

# ILIB\_ProjectLibraryUpdateResult.updatedFootprints property

已更新的封装 UUID 列表

## Signature

```typescript
updatedFootprints: Array<string>;
```

### updatedsymbols

# ILIB\_ProjectLibraryUpdateResult.updatedSymbols property

已更新的符号 UUID 列表

## Signature

```typescript
updatedSymbols: Array<string>;
```
