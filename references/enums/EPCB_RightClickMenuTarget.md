# EPCB\_RightClickMenuTarget enum

PCB / 右键菜单目标位置

## Signature

```typescript
enum EPCB_RightClickMenuTarget
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

CANVAS\_BLANK

</td><td>

`'canvasBlank'`

</td><td>

空白画布右击

</td></tr>
<tr><td>

DRAW\_PAD

</td><td>

`'drawPad'`

</td><td>

放置焊盘过程中右击

</td></tr>
<tr><td>

DRAW\_POLYGON

</td><td>

`'drawPolygon'`

</td><td>

绘制铺铜过程中右击

</td></tr>
<tr><td>

DRAW\_TRACK

</td><td>

`'drawTrack'`

</td><td>

布线过程中右击

</td></tr>
<tr><td>

DRAW\_VIA

</td><td>

`'drawVia'`

</td><td>

放置过孔过程中右击

</td></tr>
<tr><td>

MODIFY\_POLYGON

</td><td>

`'modifyPolygon'`

</td><td>

编辑铺铜控制点过程中右击

</td></tr>
<tr><td>

SELECT\_2D\_LINE

</td><td>

`'select2DLine'`

</td><td>

选中 2D 线右击

</td></tr>
<tr><td>

SELECT\_BLEND

</td><td>

`'selectBlend'`

</td><td>

选中块（组合对象）右击

</td></tr>
<tr><td>

SELECT\_COMPONENT

</td><td>

`'selectComponent'`

</td><td>

选中元件右击

</td></tr>
<tr><td>

SELECT\_IMAGE

</td><td>

`'selectImage'`

</td><td>

选中图片右击

</td></tr>
<tr><td>

SELECT\_PAD

</td><td>

`'selectPad'`

</td><td>

选中焊盘右击

</td></tr>
<tr><td>

SELECT\_RATLINE

</td><td>

`'selectRatline'`

</td><td>

选中飞线右击

</td></tr>
<tr><td>

SELECT\_TEXT

</td><td>

`'selectText'`

</td><td>

选中文本右击

</td></tr>
<tr><td>

SELECT\_TRACK

</td><td>

`'selectTrack'`

</td><td>

选中导线右击

</td></tr>
<tr><td>

SELECT\_VIA

</td><td>

`'selectVia'`

</td><td>

选中过孔右击

</td></tr>
</tbody></table>

## Remarks

用于指定要操作的是 PCB 画布中的哪一个右键菜单

同一目标位置在界面上对应一类被右击的对象，例如右击一个元件、右击一根导线、右击空白画布

扩展只能操作本篇枚举列出的位置，其它位置不对外开放