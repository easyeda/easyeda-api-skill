# IDMT\_SourceSchematicUpdatePageOptions interface

图页属性修改选项

## Signature

```typescript
interface IDMT_SourceSchematicUpdatePageOptions
```

## Remarks

改名用 `newPageName` / `newSchematicName`<!-- -->，与身份字段 `pageName` / `schematicName` 区分，避免「改的是谁」与「改成什么」混在一起

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

[grid?](./IDMT_SourceSchematicUpdatePageOptions.md)

</td><td>

</td><td>

[IDMT\_SourceSchematicGrid](./IDMT_SourceSchematicGrid.md)

</td><td>

_(Optional)_ 格栅属性

</td></tr>
<tr><td>

[newPageName?](./IDMT_SourceSchematicUpdatePageOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 修改后的图页名称，即 `Page.name`

</td></tr>
<tr><td>

[newSchematicName?](./IDMT_SourceSchematicUpdatePageOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 修改后的原理图名称，即 `Schematic.name`

</td></tr>
<tr><td>

[pageName](./IDMT_SourceSchematicUpdatePageOptions.md)

</td><td>

</td><td>

string

</td><td>

目标图页名称

</td></tr>
<tr><td>

[projectId](./IDMT_SourceSchematicUpdatePageOptions.md)

</td><td>

</td><td>

string

</td><td>

工程 UUID

</td></tr>
<tr><td>

[schematicName](./IDMT_SourceSchematicUpdatePageOptions.md)

</td><td>

</td><td>

string

</td><td>

目标原理图名称

</td></tr>
</tbody></table>

---

## 属性详情

### grid

# IDMT\_SourceSchematicUpdatePageOptions.grid property

格栅属性

## Signature

```typescript
grid?: IDMT_SourceSchematicGrid;
```

### newpagename

# IDMT\_SourceSchematicUpdatePageOptions.newPageName property

修改后的图页名称，即 `Page.name`

## Signature

```typescript
newPageName?: string;
```

### newschematicname

# IDMT\_SourceSchematicUpdatePageOptions.newSchematicName property

修改后的原理图名称，即 `Schematic.name`

## Signature

```typescript
newSchematicName?: string;
```

### pagename

# IDMT\_SourceSchematicUpdatePageOptions.pageName property

目标图页名称

## Signature

```typescript
pageName: string;
```

### projectid

# IDMT\_SourceSchematicUpdatePageOptions.projectId property

工程 UUID

## Signature

```typescript
projectId: string;
```

### schematicname

# IDMT\_SourceSchematicUpdatePageOptions.schematicName property

目标原理图名称

## Signature

```typescript
schematicName: string;
```
