# ESCH\_SourcePinSide enum

引脚所在边

## Signature

```typescript
enum ESCH_SourcePinSide
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

从本体下侧引出

</td></tr>
<tr><td>

LEFT

</td><td>

`'left'`

</td><td>

从本体左侧引出

</td></tr>
<tr><td>

RIGHT

</td><td>

`'right'`

</td><td>

从本体右侧引出

</td></tr>
<tr><td>

TOP

</td><td>

`'top'`

</td><td>

从本体上侧引出

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

表示引脚从器件本体的哪一侧引出，坐标系与源数据一致（Y 轴向上）； 无法判定时返回 `unknown`