# ISCH\_SourceIdentity interface

源数据接口目标标识

## Signature

```typescript
interface ISCH_SourceIdentity
```

## Remarks

源数据接口不存在「当前图页」这一隐式上下文，每个方法的入参必须同时携带 `projectId` / `schematicName` / `pageName` 三段； `schematicName` 在工程内唯一，`pageName` 在其所属原理图内唯一，两者组合即全局唯一。 工程多开（PRO-156364）下还需 `branchUuid` 才能定位工程通道：显式给出时优先， 省略时按当前激活工程的当前分支回退（入参工程不是激活工程时无法回退，将返回 `PARAM_REQUIRED`<!-- -->）

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

[branchUuid?](./ISCH_SourceIdentity.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 分支 UUID

</td></tr>
<tr><td>

[pageName](./ISCH_SourceIdentity.md)

</td><td>

</td><td>

string

</td><td>

图页名称，在其所属原理图内唯一

</td></tr>
<tr><td>

[projectId](./ISCH_SourceIdentity.md)

</td><td>

</td><td>

string

</td><td>

工程 UUID

</td></tr>
<tr><td>

[schematicName](./ISCH_SourceIdentity.md)

</td><td>

</td><td>

string

</td><td>

原理图名称，在工程内唯一

</td></tr>
</tbody></table>

---

## 属性详情

### branchuuid

# ISCH\_SourceIdentity.branchUuid property

分支 UUID

## Signature

```typescript
branchUuid?: string;
```

## Remarks

显式给出时优先；省略时回退当前激活工程的当前分支。 v2 / 无分支工程请显式传 `''`<!-- -->（缺省与「无分支」在通道名上不可区分）

### pagename

# ISCH\_SourceIdentity.pageName property

图页名称，在其所属原理图内唯一

## Signature

```typescript
pageName: string;
```

### projectid

# ISCH\_SourceIdentity.projectId property

工程 UUID

## Signature

```typescript
projectId: string;
```

### schematicname

# ISCH\_SourceIdentity.schematicName property

原理图名称，在工程内唯一

## Signature

```typescript
schematicName: string;
```
