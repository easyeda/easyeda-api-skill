# TPNL\_PrimitiveDimensionCoordinateSet type

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

尺寸标注坐标集

## Signature

```typescript
type TPNL_PrimitiveDimensionCoordinateSet
	= | IPNL_PrimitiveDimensionLengthCoordinateSet
		| IPNL_PrimitiveDimensionAngleCoordinateSet
		| IPNL_PrimitiveDimensionRadiusCoordinateSet
		| IPNL_PrimitiveDimensionSmartCoordinateSet;
```
## References

[IPNL\_PrimitiveDimensionLengthCoordinateSet](../interfaces/IPNL_PrimitiveDimensionLengthCoordinateSet.md)<!-- -->, [IPNL\_PrimitiveDimensionAngleCoordinateSet](../interfaces/IPNL_PrimitiveDimensionAngleCoordinateSet.md)<!-- -->, [IPNL\_PrimitiveDimensionRadiusCoordinateSet](../interfaces/IPNL_PrimitiveDimensionRadiusCoordinateSet.md)<!-- -->, [IPNL\_PrimitiveDimensionSmartCoordinateSet](../interfaces/IPNL_PrimitiveDimensionSmartCoordinateSet.md)

## Remarks

结构随 `dimensionType` 变化：长度标注用 `IPNL_PrimitiveDimensionLengthCoordinateSet`<!-- -->，角度标注用 `IPNL_PrimitiveDimensionAngleCoordinateSet`<!-- -->，半径标注用 `IPNL_PrimitiveDimensionRadiusCoordinateSet`<!-- -->，智能尺寸用 `IPNL_PrimitiveDimensionSmartCoordinateSet`<!-- -->；`dimensionType` 与坐标集结构需匹配，由实现层校验