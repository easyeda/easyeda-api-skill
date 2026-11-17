# ISCH\_SourceDrcViolation interface

业务层 DRC 违规项

## Signature

```typescript
interface ISCH_SourceDrcViolation
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

[elements](./ISCH_SourceDrcViolation.md)

</td><td>

</td><td>

Array&lt;{ primitiveId: string; pinId?: string; }&gt;

</td><td>

涉及的图元与引脚

</td></tr>
<tr><td>

[message](./ISCH_SourceDrcViolation.md)

</td><td>

</td><td>

string

</td><td>

违规描述

</td></tr>
<tr><td>

[rule](./ISCH_SourceDrcViolation.md)

</td><td>

</td><td>

string

</td><td>

违规规则名称，如 `UNCONNECTED_PIN` / `NEAR_BUT_NOT_CONNECTED`

</td></tr>
<tr><td>

[severity](./ISCH_SourceDrcViolation.md)

</td><td>

</td><td>

string

</td><td>

严重程度，如 `error` / `warning`

</td></tr>
</tbody></table>

---

## 属性详情

### elements

# ISCH\_SourceDrcViolation.elements property

涉及的图元与引脚

## Signature

```typescript
elements: Array<{
	primitiveId: string;
	pinId?: string;
}>;
```

### message

# ISCH\_SourceDrcViolation.message property

违规描述

## Signature

```typescript
message: string;
```

### rule

# ISCH\_SourceDrcViolation.rule property

违规规则名称，如 `UNCONNECTED_PIN` / `NEAR_BUT_NOT_CONNECTED`

## Signature

```typescript
rule: string;
```

### severity

# ISCH\_SourceDrcViolation.severity property

严重程度，如 `error` / `warning`

## Signature

```typescript
severity: string;
```
