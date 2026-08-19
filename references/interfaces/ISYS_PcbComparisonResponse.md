# ISYS\_PcbComparisonResponse interface

PCB 对比响应

## Signature

```typescript
export interface ISYS_PcbComparisonResponse 
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

[data?](./ISYS_PcbComparisonResponse.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ 对比结果（`success = true` 时存在）


</td></tr>
<tr><td>

[error?](./ISYS_PcbComparisonResponse.md)


</td><td>


</td><td>

{ code: [TSYS\_PcbComparisonErrorCode](../types/TSYS_PcbComparisonErrorCode.md)<!-- -->; message: string }


</td><td>

_(Optional)_ 错误（`success = false` 时存在）


</td></tr>
<tr><td>

[success](./ISYS_PcbComparisonResponse.md)


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

# ISYS\_PcbComparisonResponse.data property

对比结果（`success = true` 时存在）

## Signature

```typescript
data?: any;
```

### error

# ISYS\_PcbComparisonResponse.error property

错误（`success = false` 时存在）

## Signature

```typescript
error?: { code: TSYS_PcbComparisonErrorCode; message: string };
```

### success

# ISYS\_PcbComparisonResponse.success property

是否成功

## Signature

```typescript
success: boolean;
```
