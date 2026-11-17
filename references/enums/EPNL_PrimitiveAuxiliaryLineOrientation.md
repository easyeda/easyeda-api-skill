# EPNL\_PrimitiveAuxiliaryLineOrientation enum

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

辅助线方向

## Signature

```typescript
enum EPNL_PrimitiveAuxiliaryLineOrientation
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

HORIZONTAL

</td><td>

`'horizontal'`

</td><td>

**_(ALPHA)_** 水平辅助线

</td></tr>
<tr><td>

VERTICAL

</td><td>

`'vertical'`

</td><td>

**_(ALPHA)_** 垂直辅助线

</td></tr>
</tbody></table>

## Remarks

辅助线只有水平与垂直两种方向，不存在任意角度：业务侧由 `rotation` 反推方向，`0 / 180 / 360` 为水平、`90 / 270` 为垂直，其它角度不属于任何辅助线（不参与坐标展示与吸附）。枚举值与业务 `AuxiliaryLineType` 的字符串取值一致