# EPNL\_MouseEventType enum

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

鼠标事件类型

## Signature

```typescript
enum EPNL_MouseEventType
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

CLEAR\_SELECTED

</td><td>

`'clearSelected'`

</td><td>

**_(ALPHA)_** 取消选中

</td></tr>
<tr><td>

MOVE

</td><td>

`'move'`

</td><td>

**_(ALPHA)_** 鼠标移动

</td></tr>
<tr><td>

SELECTED

</td><td>

`'selected'`

</td><td>

**_(ALPHA)_** 选中图元

</td></tr>
</tbody></table>

## Remarks

鼠标在画布上操作时上报的事件类型；面板没有网络、位号概念，只留选中与移动