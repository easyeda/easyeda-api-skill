# IDMT\_SourcePcbAddOptions interface

创建 PCB 选项

## Signature

```typescript
interface IDMT_SourcePcbAddOptions
```

## Remarks

不指定 `pcbName` 时由内部按现有规则命名

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

[boardName?](./IDMT_SourcePcbAddOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ PCB 所属板子名称，省略则为游离 PCB

</td></tr>
<tr><td>

[pcbName?](./IDMT_SourcePcbAddOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ PCB 名称，省略则由内部按现有规则命名

</td></tr>
<tr><td>

[projectId](./IDMT_SourcePcbAddOptions.md)

</td><td>

</td><td>

string

</td><td>

工程 UUID

</td></tr>
</tbody></table>

---

## 属性详情

### boardname

# IDMT\_SourcePcbAddOptions.boardName property

PCB 所属板子名称，省略则为游离 PCB

## Signature

```typescript
boardName?: string;
```

### pcbname

# IDMT\_SourcePcbAddOptions.pcbName property

PCB 名称，省略则由内部按现有规则命名

## Signature

```typescript
pcbName?: string;
```

### projectid

# IDMT\_SourcePcbAddOptions.projectId property

工程 UUID

## Signature

```typescript
projectId: string;
```
