# EPNL\_ExpandShapeType enum

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

形状扩展方式

## Signature

```typescript
enum EPNL_ExpandShapeType
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

EXPAND\_IN

</td><td>

`'expandIn'`

</td><td>

**_(ALPHA)_** 向内收缩

</td></tr>
<tr><td>

EXPAND\_OUT

</td><td>

`'expandOut'`

</td><td>

**_(ALPHA)_** 向外扩展

</td></tr>
<tr><td>

SCALE

</td><td>

`'scale'`

</td><td>

**_(ALPHA)_** 按比例缩放

</td></tr>
</tbody></table>

## Remarks

决定轮廓怎么变：向内缩、向外扩，或者按比例整体缩放。前两者是等距变化（每边各增 / 减同样的距离），后者是等比缩放