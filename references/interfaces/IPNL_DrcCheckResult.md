# IPNL\_DrcCheckResult interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板设计规则检查结果

## Signature

```typescript
interface IPNL_DrcCheckResult
```

## Remarks

各类计数为本次检查命中的问题数量；`fatalErrorCount > 0` 表示存在阻断导出 / 下单的致命问题

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

[errorCount](./IPNL_DrcCheckResult.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 错误数量

</td></tr>
<tr><td>

[fatalErrorCount](./IPNL_DrcCheckResult.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 致命错误数量

</td></tr>
<tr><td>

[infoCount](./IPNL_DrcCheckResult.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 提示数量

</td></tr>
<tr><td>

[warnCount](./IPNL_DrcCheckResult.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 警告数量

</td></tr>
</tbody></table>

---

## 属性详情

### errorcount

# IPNL\_DrcCheckResult.errorCount property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

错误数量

## Signature

```typescript
errorCount: number;
```

### fatalerrorcount

# IPNL\_DrcCheckResult.fatalErrorCount property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

致命错误数量

## Signature

```typescript
fatalErrorCount: number;
```

### infocount

# IPNL\_DrcCheckResult.infoCount property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

提示数量

## Signature

```typescript
infoCount: number;
```

### warncount

# IPNL\_DrcCheckResult.warnCount property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

警告数量

## Signature

```typescript
warnCount: number;
```
