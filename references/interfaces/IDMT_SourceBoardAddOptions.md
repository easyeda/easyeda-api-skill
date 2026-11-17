# IDMT\_SourceBoardAddOptions interface

创建板子选项

## Signature

```typescript
interface IDMT_SourceBoardAddOptions
```

## Remarks

创建板子时内部自动创建与之关联的原理图与 PCB 文档，无需另行创建

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

[boardName?](./IDMT_SourceBoardAddOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 板子名称，省略则由内部按现有规则命名

</td></tr>
<tr><td>

[projectId](./IDMT_SourceBoardAddOptions.md)

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

# IDMT\_SourceBoardAddOptions.boardName property

板子名称，省略则由内部按现有规则命名

## Signature

```typescript
boardName?: string;
```

### projectid

# IDMT\_SourceBoardAddOptions.projectId property

工程 UUID

## Signature

```typescript
projectId: string;
```
