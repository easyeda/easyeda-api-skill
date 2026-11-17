# IDMT\_SourcePcbUpdateOptions interface

修改 PCB 选项

## Signature

```typescript
interface IDMT_SourcePcbUpdateOptions
```

## Remarks

改名用 `newPcbName`<!-- -->，与身份字段 `pcbName` 区分，避免「改的是谁」与「改成什么」混在一起

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

[newPcbName?](./IDMT_SourcePcbUpdateOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 修改后的 PCB 名称

</td></tr>
<tr><td>

[pcbName](./IDMT_SourcePcbUpdateOptions.md)

</td><td>

</td><td>

string

</td><td>

目标 PCB 名称

</td></tr>
<tr><td>

[projectId](./IDMT_SourcePcbUpdateOptions.md)

</td><td>

</td><td>

string

</td><td>

工程 UUID

</td></tr>
</tbody></table>

---

## 属性详情

### newpcbname

# IDMT\_SourcePcbUpdateOptions.newPcbName property

修改后的 PCB 名称

## Signature

```typescript
newPcbName?: string;
```

### pcbname

# IDMT\_SourcePcbUpdateOptions.pcbName property

目标 PCB 名称

## Signature

```typescript
pcbName: string;
```

### projectid

# IDMT\_SourcePcbUpdateOptions.projectId property

工程 UUID

## Signature

```typescript
projectId: string;
```
