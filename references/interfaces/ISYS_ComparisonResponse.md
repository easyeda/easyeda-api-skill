# ISYS\_ComparisonResponse interface

对比响应返回结果

## Signature

```typescript
interface ISYS_ComparisonResponse
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

[data?](./ISYS_ComparisonResponse.md)

</td><td>

</td><td>

any

</td><td>

_(Optional)_ 对比结果（`success = true` 时存在）

</td></tr>
<tr><td>

[error?](./ISYS_ComparisonResponse.md)

</td><td>

</td><td>

{ code: [TSYS\_ComparisonErrorCode](../types/TSYS_ComparisonErrorCode.md)<!-- -->; message: string }

</td><td>

_(Optional)_ 错误（`success = false` 时存在）

</td></tr>
<tr><td>

[success](./ISYS_ComparisonResponse.md)

</td><td>

</td><td>

boolean

</td><td>

是否成功

</td></tr>
</tbody></table>

---

## 属性详情

### data

# ISYS\_ComparisonResponse.data property

对比结果（`success = true` 时存在）

## Signature

```typescript
data?: any;
```

### error

# ISYS\_ComparisonResponse.error property

错误（`success = false` 时存在）

## Signature

```typescript
error?: { code: TSYS_ComparisonErrorCode; message: string };
```

### success

# ISYS\_ComparisonResponse.success property

是否成功

## Signature

```typescript
success: boolean;
```
