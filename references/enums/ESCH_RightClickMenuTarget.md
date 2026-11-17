# ESCH\_RightClickMenuTarget enum

原理图 / 右键菜单目标位置

## Signature

```typescript
enum ESCH_RightClickMenuTarget
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

BLOCK\_SYMBOL

</td><td>

`'blockSymbol'`

</td><td>

复用模块符号右击

</td></tr>
<tr><td>

BUS

</td><td>

`'bus'`

</td><td>

总线右击

</td></tr>
<tr><td>

BUS\_ENTRY

</td><td>

`'busEntry'`

</td><td>

总线分支右击

</td></tr>
<tr><td>

CANVAS

</td><td>

`'canvas'`

</td><td>

空白画布右击

</td></tr>
<tr><td>

CONTROL\_DOT

</td><td>

`'controlDot'`

</td><td>

控制点右击

</td></tr>
<tr><td>

DIFF\_PAIRS\_FLAG

</td><td>

`'diffPairsFlag'`

</td><td>

差分对标识右击

</td></tr>
<tr><td>

HARNESS\_CONNECTOR

</td><td>

`'harnessConnector'`

</td><td>

线束连接器右击

</td></tr>
<tr><td>

HARNESS\_ENTRY

</td><td>

`'harnessEntry'`

</td><td>

线束入口右击

</td></tr>
<tr><td>

NAME

</td><td>

`'name'`

</td><td>

图元名称属性右击

</td></tr>
<tr><td>

NET\_FLAG

</td><td>

`'netFlag'`

</td><td>

网络标识（电源 / 地等）右击

</td></tr>
<tr><td>

NET\_LABEL

</td><td>

`'netLabel'`

</td><td>

网络标签右击

</td></tr>
<tr><td>

NET\_PORT

</td><td>

`'netPort'`

</td><td>

网络端口右击

</td></tr>
<tr><td>

NO\_CONNECT

</td><td>

`'noConnect'`

</td><td>

非连接标识右击

</td></tr>
<tr><td>

OFF\_PAGE\_CONNECTOR

</td><td>

`'offPageConnector'`

</td><td>

跨页连接器右击

</td></tr>
<tr><td>

OTHERS

</td><td>

`'others'`

</td><td>

其它图元（多边形、折线、圆弧、矩形、圆形等）右击

</td></tr>
<tr><td>

PIN

</td><td>

`'pin'`

</td><td>

引脚右击

</td></tr>
<tr><td>

PROPERTY

</td><td>

`'property'`

</td><td>

图元普通属性右击

</td></tr>
<tr><td>

SHORT\_SYMBOL

</td><td>

`'shortSymbol'`

</td><td>

短线标识右击

</td></tr>
<tr><td>

SIGNAL\_HARNESS

</td><td>

`'signalHarness'`

</td><td>

信号线束右击

</td></tr>
<tr><td>

SYMBOL

</td><td>

`'symbol'`

</td><td>

器件符号右击

</td></tr>
<tr><td>

TABLE

</td><td>

`'table'`

</td><td>

表格右击

</td></tr>
<tr><td>

TABLE\_CELL

</td><td>

`'tableCell'`

</td><td>

表格单元格右击

</td></tr>
<tr><td>

TEXT

</td><td>

`'text'`

</td><td>

文本右击

</td></tr>
<tr><td>

WIRE

</td><td>

`'wire'`

</td><td>

导线右击

</td></tr>
</tbody></table>

## Remarks

用于指定要操作的是原理图画布中的哪一个右键菜单

同一目标位置在界面上对应一类被右击的对象，例如右击一个器件符号、右击一根导线、右击空白画布

扩展只能操作本篇枚举列出的位置，其它位置不对外开放