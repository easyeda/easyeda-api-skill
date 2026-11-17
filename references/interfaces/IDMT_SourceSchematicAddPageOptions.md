# IDMT\_SourceSchematicAddPageOptions interface

创建原理图图页选项

## Signature

```typescript
interface IDMT_SourceSchematicAddPageOptions
```

## Remarks

不指定 `pageName` 时由内部按现有规则命名

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

[pageName?](./IDMT_SourceSchematicAddPageOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 图页名称，省略则由内部按现有规则命名

</td></tr>
<tr><td>

[projectId](./IDMT_SourceSchematicAddPageOptions.md)

</td><td>

</td><td>

string

</td><td>

工程 UUID

</td></tr>
<tr><td>

[schematicName](./IDMT_SourceSchematicAddPageOptions.md)

</td><td>

</td><td>

string

</td><td>

目标原理图名称

</td></tr>
</tbody></table>

---

## 属性详情

### pagename

# IDMT\_SourceSchematicAddPageOptions.pageName property

图页名称，省略则由内部按现有规则命名

## Signature

```typescript
pageName?: string;
```

### projectid

# IDMT\_SourceSchematicAddPageOptions.projectId property

工程 UUID

## Signature

```typescript
projectId: string;
```

### schematicname

# IDMT\_SourceSchematicAddPageOptions.schematicName property

目标原理图名称

## Signature

```typescript
schematicName: string;
```
