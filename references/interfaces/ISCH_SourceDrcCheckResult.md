# ISCH\_SourceDrcCheckResult interface

业务层 DRC 检查结果

## Signature

```typescript
interface ISCH_SourceDrcCheckResult
```

## Remarks

`passed` 等价于 `violations` 中无 `severity` 为 `error` 的项

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

[passed](./ISCH_SourceDrcCheckResult.md)

</td><td>

</td><td>

boolean

</td><td>

是否通过检查

</td></tr>
<tr><td>

[violations](./ISCH_SourceDrcCheckResult.md)

</td><td>

</td><td>

Array&lt;[ISCH\_SourceDrcViolation](./ISCH_SourceDrcViolation.md)<!-- -->&gt;

</td><td>

违规项列表

</td></tr>
</tbody></table>

---

## 属性详情

### passed

# ISCH\_SourceDrcCheckResult.passed property

是否通过检查

## Signature

```typescript
passed: boolean;
```

### violations

# ISCH\_SourceDrcCheckResult.violations property

违规项列表

## Signature

```typescript
violations: Array<ISCH_SourceDrcViolation>;
```
