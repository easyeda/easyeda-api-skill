# TPCB\_PrimitivePadHole type

Pad drilling

## Signature

```typescript
export type TPCB_PrimitivePadHole = [EPCB_PrimitivePadHoleType.ROUND, number] | [EPCB_PrimitivePadHoleType.SLOT, number, number];
```
## References


[EPCB\_PrimitivePadHoleType.ROUND](../enums/EPCB_PrimitivePadHoleType.md)<!-- -->, [EPCB\_PrimitivePadHoleType.SLOT](../enums/EPCB_PrimitivePadHoleType.md)

## Remarks

Pad drilling currently has the following two [types](../enums/EPCB_PrimitivePadHoleType.md)<!-- -->:

1. Circle

`[EPCB_PrimitivePadHoleType.ROUND, diameter]`

- `{number}` `diameter` - diameter

2. Slot

`[EPCB_PrimitivePadHoleType.SLOT, diameter, length]`

- `{number}` `length` - Length. The length cannot be smaller than the diameter; if it is, the length value follows the diameter

- `{number}` `diameter` - diameter