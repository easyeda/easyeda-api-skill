# TPCB\_PrimitiveDimensionCoordinateSet type

Dimension coordinate set

## Signature

```typescript
export type TPCB_PrimitiveDimensionCoordinateSet = [number, number, number, number, number, number] | [number, number, number, number, number, number, number, number];
```

## Remarks

The dimension coordinate set has the following three [dimension types](../enums/EPCB_PrimitiveDimensionType.md)<!-- -->:

1. Radius dimension

`[x1, y1, x2, y2, x3, y3]`

- `{number}` `x1` - X of the endpoint on the circle/arc

- `{number}` `y1` - Y of the endpoint on the circle/arc

- `{number}` `x2` - X of the endpoint at the tail of the dimension line

- `{number}` `y2` - Y of the endpoint at the tail of the dimension line

- `{number}` `x3` - X of the bottom-left endpoint of the dimension text

- `{number}` `y3` - Y of the bottom-left endpoint of the dimension text

2. Length dimension

`[x1, y1, x2, y2, x3, y3, x4, y4]`

- `{number}` `x1` - X of the first measurement endpoint

- `{number}` `y1` - Y of the first measurement endpoint

- `{number}` `x2` - X of the first dimension arrow endpoint

- `{number}` `y2` - Y of the first dimension arrow endpoint

- `{number}` `x3` - X of the second dimension arrow endpoint

- `{number}` `y3` - Y of the second dimension arrow endpoint

- `{number}` `x4` - X of the second measurement endpoint

- `{number}` `y4` - Y of the second measurement endpoint

3. Angle dimension

`[x1, y1, x2, y2, x3, y3]`

- `{number}` `x1` - X of the first side endpoint

- `{number}` `y1` - Y of the first side endpoint

- `{number}` `x2` - X of the angle center

- `{number}` `y2` - Y of the angle center

- `{number}` `x3` - X of the second side endpoint

- `{number}` `y3` - Y of the second side endpoint