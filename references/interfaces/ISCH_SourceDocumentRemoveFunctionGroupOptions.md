# ISCH\_SourceDocumentRemoveFunctionGroupOptions interface

功能分组删除选项

## Signature

```typescript
interface ISCH_SourceDocumentRemoveFunctionGroupOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

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

[groupId](./ISCH_SourceDocumentRemoveFunctionGroupOptions.md)

</td><td>

</td><td>

string

</td><td>

功能分组编号

</td></tr>
<tr><td>

[withWires?](./ISCH_SourceDocumentRemoveFunctionGroupOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否连带删除走线，缺省为 `false` 即保留走线

</td></tr>
</tbody></table>

---

## 属性详情

### groupid

# ISCH\_SourceDocumentRemoveFunctionGroupOptions.groupId property

功能分组编号

## Signature

```typescript
groupId: string;
```

### withwires

# ISCH\_SourceDocumentRemoveFunctionGroupOptions.withWires property

是否连带删除走线，缺省为 `false` 即保留走线

## Signature

```typescript
withWires?: boolean;
```
