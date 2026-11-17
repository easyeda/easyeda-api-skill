# ESCH\_SourceErrorCode enum

源数据接口错误码

## Signature

```typescript
enum ESCH_SourceErrorCode
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

ATTRIBUTE\_KEY\_NOT\_FOUND

</td><td>

`'ATTRIBUTE_KEY_NOT_FOUND'`

</td><td>

属性 key 在该器件上不存在

</td></tr>
<tr><td>

BOARD\_NOT\_FOUND

</td><td>

`'BOARD_NOT_FOUND'`

</td><td>

工程内不存在该名称的板子

</td></tr>
<tr><td>

DESIGNATOR\_INVALID

</td><td>

`'DESIGNATOR_INVALID'`

</td><td>

位号格式非法

</td></tr>
<tr><td>

DEVICE\_AMBIGUOUS

</td><td>

`'DEVICE_AMBIGUOUS'`

</td><td>

该库内此名称命中多条，无法唯一确定

</td></tr>
<tr><td>

DEVICE\_NOT\_FOUND

</td><td>

`'DEVICE_NOT_FOUND'`

</td><td>

该库内不存在此名称的器件

</td></tr>
<tr><td>

DUPLICATE\_DESIGNATOR

</td><td>

`'DUPLICATE_DESIGNATOR'`

</td><td>

位号在本页内重复

</td></tr>
<tr><td>

GROUP\_NOT\_FOUND

</td><td>

`'GROUP_NOT_FOUND'`

</td><td>

功能分组编号不存在或已失效

</td></tr>
<tr><td>

INTERNAL\_ERROR

</td><td>

`'INTERNAL_ERROR'`

</td><td>

内部错误

</td></tr>
<tr><td>

NET\_CONFLICT

</td><td>

`'NET_CONFLICT'`

</td><td>

单网络模式（`wireMultipleNet = false`<!-- -->）下，一次连接会合并多个已命名网络

</td></tr>
<tr><td>

NET\_NOT\_FOUND

</td><td>

`'NET_NOT_FOUND'`

</td><td>

网络名不存在

</td></tr>
<tr><td>

NO\_CONNECT\_BLOCKED

</td><td>

`'NO_CONNECT_BLOCKED'`

</td><td>

分量内含 NO\_CONNECT 标记，整次网络聚合放弃

</td></tr>
<tr><td>

NOT\_IMPLEMENTED

</td><td>

`'NOT_IMPLEMENTED'`

</td><td>

接口尚未实现（占位实现）

</td></tr>
<tr><td>

PAGE\_NOT\_FOUND

</td><td>

`'PAGE_NOT_FOUND'`

</td><td>

该原理图内不存在该名称的图页

</td></tr>
<tr><td>

PARAM\_CONFLICT

</td><td>

`'PARAM_CONFLICT'`

</td><td>

互斥参数同时给出

</td></tr>
<tr><td>

PARAM\_INVALID

</td><td>

`'PARAM_INVALID'`

</td><td>

参数取值非法（格式正确但取值不在允许范围内，如旋转角度非 90° 的整倍数）

</td></tr>
<tr><td>

PARAM\_REQUIRED

</td><td>

`'PARAM_REQUIRED'`

</td><td>

必填参数缺失

</td></tr>
<tr><td>

PCB\_NOT\_FOUND

</td><td>

`'PCB_NOT_FOUND'`

</td><td>

工程内不存在该名称的 PCB

</td></tr>
<tr><td>

PIN\_NOT\_FOUND

</td><td>

`'PIN_NOT_FOUND'`

</td><td>

引脚 ID 不存在或不属于该器件

</td></tr>
<tr><td>

PRIMITIVE\_NOT\_FOUND

</td><td>

`'PRIMITIVE_NOT_FOUND'`

</td><td>

图元 ID 不存在

</td></tr>
<tr><td>

PRIMITIVE\_TYPE\_MISMATCH

</td><td>

`'PRIMITIVE_TYPE_MISMATCH'`

</td><td>

图元 ID 存在但类型不符

</td></tr>
<tr><td>

PROJECT\_NOT\_FOUND

</td><td>

`'PROJECT_NOT_FOUND'`

</td><td>

工程不存在或未载入

</td></tr>
<tr><td>

REGION\_INVALID

</td><td>

`'REGION_INVALID'`

</td><td>

区域非法（`minX >= maxX` 或 `minY >= maxY`<!-- -->，即空区域）

</td></tr>
<tr><td>

REPLACE\_REJECTED

</td><td>

`'REPLACE_REJECTED'`

</td><td>

替换被内部容差判定否决

</td></tr>
<tr><td>

SCHEMATIC\_NOT\_FOUND

</td><td>

`'SCHEMATIC_NOT_FOUND'`

</td><td>

工程内不存在该名称的原理图

</td></tr>
<tr><td>

WIRE\_GEOMETRY\_INVALID

</td><td>

`'WIRE_GEOMETRY_INVALID'`

</td><td>

走线几何非法（非正交、首尾不相接）

</td></tr>
</tbody></table>

## Remarks

源数据接口统一失败反馈，任何失败均通过 [ISCH\_SourceError](../interfaces/ISCH_SourceError.md) 携带错误码与业务明文返回，不抛异常