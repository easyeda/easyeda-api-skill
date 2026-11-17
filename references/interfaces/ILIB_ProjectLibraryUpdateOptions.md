# ILIB\_ProjectLibraryUpdateOptions interface

工程库更新选项

## Signature

```typescript
interface ILIB_ProjectLibraryUpdateOptions
```

## Remarks

目标工程无需在前端打开；`primitiveIds` 省略时更新该工程库中全部可更新对象

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

[libraryPaths?](./ILIB_ProjectLibraryUpdateOptions.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

_(Optional)_ 按名称匹配时使用的库来源顺序

</td></tr>
<tr><td>

[primitiveIds?](./ILIB_ProjectLibraryUpdateOptions.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

_(Optional)_ 待更新的工程库对象 UUID 列表

</td></tr>
<tr><td>

[projectUuid](./ILIB_ProjectLibraryUpdateOptions.md)

</td><td>

</td><td>

string

</td><td>

目标工程 UUID

</td></tr>
</tbody></table>

---

## 属性详情

### librarypaths

# ILIB\_ProjectLibraryUpdateOptions.libraryPaths property

按名称匹配时使用的库来源顺序

## Signature

```typescript
libraryPaths?: Array<string>;
```

## Remarks

仅 [NAME](../enums/ELIB_ProjectLibraryUpdateMode.md) 模式生效，顺序即匹配优先级，取首个命中项； 省略时取  的当前配置

### primitiveids

# ILIB\_ProjectLibraryUpdateOptions.primitiveIds property

待更新的工程库对象 UUID 列表

## Signature

```typescript
primitiveIds?: Array<string>;
```

## Remarks

省略时更新该工程库中全部可更新对象；传入时仅处理列表内的对象，未匹配到的 UUID 会被忽略

### projectuuid

# ILIB\_ProjectLibraryUpdateOptions.projectUuid property

目标工程 UUID

## Signature

```typescript
projectUuid: string;
```
