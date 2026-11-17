# EPNL\_LayerId enum

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板工艺图层

## Signature

```typescript
enum EPNL_LayerId
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

APPLY\_ALL

</td><td>

`99`

</td><td>

**_(ALPHA)_** 虚构的导出层：归入此层的图元都会被导出（用于输出文件时追加额外图元）， 不是「应用到全部层」的操作语义，也不对用户绘制开放

</td></tr>
<tr><td>

ASSIST

</td><td>

`8`

</td><td>

**_(ALPHA)_** 辅助绘图层

</td></tr>
<tr><td>

BOARD

</td><td>

`3`

</td><td>

**_(ALPHA)_** 板框层（外形轮廓）

</td></tr>
<tr><td>

BOARD\_HOLE

</td><td>

`4`

</td><td>

**_(ALPHA)_** 槽孔层

</td></tr>
<tr><td>

BOUNDARY

</td><td>

`-1`

</td><td>

**_(ALPHA)_** 图页-边界层：画布材质外框（板框外的材料范围），不是工艺层，不参与图层的可见性 / 锁定工艺语义

</td></tr>
<tr><td>

BUN

</td><td>

`7`

</td><td>

**_(ALPHA)_** 鼓包层（凸起结构，导出时自动生成外扩背胶线）

</td></tr>
<tr><td>

GLUE\_HOLE

</td><td>

`5`

</td><td>

**_(ALPHA)_** 背胶挖切层

</td></tr>
<tr><td>

LIGHT

</td><td>

`6`

</td><td>

**_(ALPHA)_** 灯光仿真层

</td></tr>
<tr><td>

OPACITY

</td><td>

`2`

</td><td>

**_(ALPHA)_** 遮盖控制层（白底 / 黑底）

</td></tr>
<tr><td>

PRINT

</td><td>

`1`

</td><td>

**_(ALPHA)_** 打印层（UV 打印图案）

</td></tr>
</tbody></table>

## Remarks

面板只有一套固定图层：材质外框一层，加打印、遮盖、板框、槽孔、背胶、灯光、鼓包、辅助八个工艺层，用户不能自己加层。 数值不可重编号；「全部层」那项是导出时用的虚拟层，不对应画布上的真实图层。