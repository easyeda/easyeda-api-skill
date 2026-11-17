# EPNL\_SelectionMode enum

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

框选模式

## Signature

```typescript
enum EPNL_SelectionMode
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

CONTINUOUS

</td><td>

`'continuousSelection'`

</td><td>

**_(ALPHA)_** 连续选择：每次点击在已有选中集上累加

</td></tr>
<tr><td>

LINE\_TOUCHED

</td><td>

`'lineTouched'`

</td><td>

**_(ALPHA)_** 与框选线接触即选中

</td></tr>
<tr><td>

NORMAL

</td><td>

`'normal'`

</td><td>

**_(ALPHA)_** 普通框选（默认）；业务 `SelectionMode.normal` 取值为空字符串

</td></tr>
<tr><td>

POLYGON\_INSIDE

</td><td>

`'polygonInside'`

</td><td>

**_(ALPHA)_** 完全框在多边形内的图元才选中

</td></tr>
<tr><td>

POLYGON\_OUTSIDE

</td><td>

`'polygonOutside'`

</td><td>

**_(ALPHA)_** 与多边形相交的图元都选中

</td></tr>
<tr><td>

RECTANGLE\_INSIDE

</td><td>

`'rectangleInside'`

</td><td>

**_(ALPHA)_** 完全框在矩形内的图元才选中

</td></tr>
<tr><td>

RECTANGLE\_OUTSIDE

</td><td>

`'rectangleOutside'`

</td><td>

**_(ALPHA)_** 与矩形相交的图元都选中（框外算）

</td></tr>
</tbody></table>

## Remarks

除 [EPNL\_SelectionMode.NORMAL](./EPNL_SelectionMode.md) 外，各枚举值与业务 `SelectionMode` 的字符串取值一致，但 `NORMAL` 在本 API 为 `'normal'`<!-- -->、在业务为 `''`<!-- -->（空字符串），实现层需显式映射，不能透传