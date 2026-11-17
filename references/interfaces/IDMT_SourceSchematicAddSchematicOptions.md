# IDMT\_SourceSchematicAddSchematicOptions interface

创建原理图选项

## Signature

```typescript
interface IDMT_SourceSchematicAddSchematicOptions
```

## Remarks

不指定 `schematicName` 时由内部按现有规则命名

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

[boardName?](./IDMT_SourceSchematicAddSchematicOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 原理图所属板子名称，省略则归入默认板子

</td></tr>
<tr><td>

[projectId](./IDMT_SourceSchematicAddSchematicOptions.md)

</td><td>

</td><td>

string

</td><td>

工程 UUID

</td></tr>
<tr><td>

[schematicName?](./IDMT_SourceSchematicAddSchematicOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 原理图名称，省略则由内部按现有规则命名

</td></tr>
</tbody></table>

---

## 属性详情

### boardname

# IDMT\_SourceSchematicAddSchematicOptions.boardName property

原理图所属板子名称，省略则归入默认板子

## Signature

```typescript
boardName?: string;
```

### projectid

# IDMT\_SourceSchematicAddSchematicOptions.projectId property

工程 UUID

## Signature

```typescript
projectId: string;
```

### schematicname

# IDMT\_SourceSchematicAddSchematicOptions.schematicName property

原理图名称，省略则由内部按现有规则命名

## Signature

```typescript
schematicName?: string;
```
