# ISYS\_PcbComparisonResponse interface

PCB comparison response

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

_(Optional)_ Comparison result (present when `success = true`<!-- -->)


</td></tr>
<tr><td>

[error?](./ISYS_PcbComparisonResponse.md)


</td><td>


</td><td>

{ code: [TSYS\_PcbComparisonErrorCode](../types/TSYS_PcbComparisonErrorCode.md)<!-- -->; message: string }


</td><td>

_(Optional)_ Error (present when `success = false`<!-- -->)


</td></tr>
<tr><td>

[success](./ISYS_PcbComparisonResponse.md)


</td><td>


</td><td>

boolean


</td><td>

Whether Successful


</td></tr>
</tbody></table>

---

## 属性详情

### data

# ISYS\_PcbComparisonResponse.data property

Comparison result (present when `success = true`<!-- -->)

## Signature

```typescript
data?: any;
```

### error

# ISYS\_PcbComparisonResponse.error property

Error (present when `success = false`<!-- -->)

## Signature

```typescript
error?: { code: TSYS_PcbComparisonErrorCode; message: string };
```

### success

# ISYS\_PcbComparisonResponse.success property

Whether Successful

## Signature

```typescript
success: boolean;
```
