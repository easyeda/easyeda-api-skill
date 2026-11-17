# EPNL\_LayerFixedScheme enum

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

固定图层方案

## Signature

```typescript
enum EPNL_LayerFixedScheme
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

DEFAULT

</td><td>

`'default'`

</td><td>

**_(ALPHA)_** 默认方案

</td></tr>
<tr><td>

EDIT\_BOARD

</td><td>

`'editBoard'`

</td><td>

**_(ALPHA)_** 编辑板框

</td></tr>
<tr><td>

EDIT\_GLUE

</td><td>

`'editGlue'`

</td><td>

**_(ALPHA)_** 编辑背胶

</td></tr>
<tr><td>

EDIT\_OPACITY

</td><td>

`'editOpacity'`

</td><td>

**_(ALPHA)_** 编辑遮盖

</td></tr>
<tr><td>

EDIT\_PRINT

</td><td>

`'editPrint'`

</td><td>

**_(ALPHA)_** 编辑打印

</td></tr>
<tr><td>

EDIT\_SIMULATION\_LIGHT

</td><td>

`'editSimulationLight'`

</td><td>

**_(ALPHA)_** 编辑灯光仿真

</td></tr>
</tbody></table>

## Remarks

编辑器内置的几套图层状态预设，按当下要调的工艺环节划分（编辑板框、编辑打印、编辑遮盖等）；自定义方案不用这里的取值，直接用方案名