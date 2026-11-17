# ISCH\_SourceDocumentFunctionGroup interface

功能分组信息

## Signature

```typescript
interface ISCH_SourceDocumentFunctionGroup
```

## Remarks

[groupId](./ISCH_SourceDocumentFunctionGroup.md) 为不透明字符串，调用方只能透传，不能解析；同一工程打开期间重复查询同一页得到相同 [groupId](./ISCH_SourceDocumentFunctionGroup.md)<!-- -->，工程重开后可能变化

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

[groupId](./ISCH_SourceDocumentFunctionGroup.md)

</td><td>

</td><td>

string

</td><td>

功能分组编号

</td></tr>
<tr><td>

[members](./ISCH_SourceDocumentFunctionGroup.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

分组内成员图元 ID 列表

</td></tr>
<tr><td>

[nets](./ISCH_SourceDocumentFunctionGroup.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

分组涉及的网络名称列表

</td></tr>
</tbody></table>

---

## 属性详情

### groupid

# ISCH\_SourceDocumentFunctionGroup.groupId property

功能分组编号

## Signature

```typescript
groupId: string;
```

### members

# ISCH\_SourceDocumentFunctionGroup.members property

分组内成员图元 ID 列表

## Signature

```typescript
members: Array<string>;
```

### nets

# ISCH\_SourceDocumentFunctionGroup.nets property

分组涉及的网络名称列表

## Signature

```typescript
nets: Array<string>;
```
