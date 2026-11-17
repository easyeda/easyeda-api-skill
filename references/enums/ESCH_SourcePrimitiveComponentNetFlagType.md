# ESCH\_SourcePrimitiveComponentNetFlagType enum

网络符号类型

## Signature

```typescript
enum ESCH_SourcePrimitiveComponentNetFlagType
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

ANALOG\_GROUND

</td><td>

`'AnalogGround'`

</td><td>

模拟地符号（`rotation = 0` 时朝下、引脚在上方）

</td></tr>
<tr><td>

GROUND

</td><td>

`'Ground'`

</td><td>

地符号（如 GND；`rotation = 0` 时朝下、引脚在上方）

</td></tr>
<tr><td>

POWER

</td><td>

`'Power'`

</td><td>

电源符号（如 VCC；`rotation = 0` 时朝上、引脚在下方）

</td></tr>
<tr><td>

PROTECT\_GROUND

</td><td>

`'ProtectGround'`

</td><td>

保护地符号（`rotation = 0` 时朝下、引脚在上方）

</td></tr>
</tbody></table>

## Remarks

沿用现有网络符号类型集合