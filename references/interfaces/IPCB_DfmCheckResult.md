# IPCB\_DfmCheckResult interface

DFM 检查结果

## Signature

```typescript
interface IPCB_DfmCheckResult
```

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

[failedItems](./IPCB_DfmCheckResult.md)

</td><td>

</td><td>

number

</td><td>

检查失败的规则数量，大于 `0` 表示结果不完整

</td></tr>
<tr><td>

[issues](./IPCB_DfmCheckResult.md)

</td><td>

</td><td>

Array&lt;[IPCB\_DfmIssue](./IPCB_DfmIssue.md)<!-- -->&gt;

</td><td>

问题列表

</td></tr>
<tr><td>

[warnings](./IPCB_DfmCheckResult.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

检查过程警告，如 `DFM_NOT_CONFIGURED` 表示未配置任何规则

</td></tr>
</tbody></table>

---

## 属性详情

### faileditems

# IPCB\_DfmCheckResult.failedItems property

检查失败的规则数量，大于 `0` 表示结果不完整

## Signature

```typescript
failedItems: number;
```

### issues

# IPCB\_DfmCheckResult.issues property

问题列表

## Signature

```typescript
issues: Array<IPCB_DfmIssue>;
```

### warnings

# IPCB\_DfmCheckResult.warnings property

检查过程警告，如 `DFM_NOT_CONFIGURED` 表示未配置任何规则

## Signature

```typescript
warnings: Array<string>;
```
