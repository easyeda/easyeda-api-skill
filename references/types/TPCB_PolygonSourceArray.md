# TPCB\_PolygonSourceArray type

Single polygon source array

## Signature

```typescript
export type TPCB_PolygonSourceArray = Array<'L' | 'ARC' | 'CARC' | 'C' | 'R' | 'CIRCLE' | number>;
```

## Remarks

A single polygon is a region described by an unbroken line whose start and end coincide. If the start and end do not coincide, they will be automatically closed.

Example of the data format of a single polygon:

`[300, 200, 'L', 400, 200, 'ARC', 400, 220, 15, 'C', 200, 500, 400, 300, 100, 100]`

`['R', 100, 200, 300, 300, 0, 0]`

`['CIRCLE', 100, 200, 5]`

The data of a single polygon is composed of the following modes:

1. L line mode

`x1 y1 L x2 y3 x3 y3 ...`

- `{number}` `x` - X coordinate of the line point

- `{number}` `y` - Y coordinate of the line point

② ARC/CARC arc mode

`ARC` is two-point arc interaction, and `CARC` is center arc interaction

`startX startY ARC arcAngle endX endY`

`startX startY CARC arcAngle endX endY`

- `{number}` `startX` - Start X

- `{number}` `startY` - Start Y

- `{number}` `arcAngle` - Arc angle (negative values rotate clockwise; in degrees)

- `{number}` `endX` - End X

- `{number}` `endY` - End Y

3. C cubic Bezier mode

`x1 y1 C x2 y2 x3 y3 x4 y4 ...`

- `{number}` `x` - Control point X

- `{number}` `y` - Control point Y

④ R rectangle mode

`R x y width height rot round`

- `{number}` `x` - top-left point X

- `{number}` `y` - top-left point Y

- `{number}` `width` - width

- `{number}` `height` - height

- `{number}` `rotation` - rotation angle

- `{number}` `round` - corner radius

5. CIRCLE mode

`CIRCLE cx cy radius`

- `{number}` `cx` - center point X

- `{number}` `xy` - center point Y

- `{number}` `radius` - radius