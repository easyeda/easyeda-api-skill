# ELIB\_SymbolPinSide enum

符号引脚所在边

## Signature

```typescript
enum ELIB_SymbolPinSide
```

## Enumeration Members

<table><thead><tr><th>

Member

</th><th>

Value

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

BOTTOM

</td><td>

`'bottom'`

</td><td>

从符号本体下侧引出

</td></tr>
<tr><td>

LEFT

</td><td>

`'left'`

</td><td>

从符号本体左侧引出

</td></tr>
<tr><td>

RIGHT

</td><td>

`'right'`

</td><td>

从符号本体右侧引出

</td></tr>
<tr><td>

TOP

</td><td>

`'top'`

</td><td>

从符号本体上侧引出

</td></tr>
<tr><td>

UNKNOWN

</td><td>

`'unknown'`

</td><td>

无法判定（如引脚嵌套在图形内部）

</td></tr>
</tbody></table>

## Remarks

引脚图元本身只记录 [rotation](../interfaces/ILIB_SymbolPinGeometry.md)<!-- -->，不直接给出所在边； 本枚举是对该角度的语义化归并，取值与 `rotation` 的对应关系为：

- `0` → `RIGHT` - `90` → `TOP` - `180` → `LEFT` - `270` → `BOTTOM`

引脚嵌套在图形内部、无法由角度判定时返回 `UNKNOWN`