# TPCB\_PrimitivePadHole type

焊盘钻孔

## 签名

```typescript
type TPCB_PrimitivePadHole = [EPCB_PrimitivePadHoleType.ROUND, number] | [EPCB_PrimitivePadHoleType.SLOT, number, number];
```
## 引用


[EPCB\_PrimitivePadHoleType.ROUND](../enums/EPCB_PrimitivePadHoleType.md)<!-- -->, [EPCB\_PrimitivePadHoleType.SLOT](../enums/EPCB_PrimitivePadHoleType.md)

## 备注

焊盘钻孔当前存在以下两种 [类型](../enums/EPCB_PrimitivePadHoleType.md)<!-- -->：

① 圆形

`[EPCB_PrimitivePadHoleType.ROUND, diameter]`

- `{number}` `diameter` - 直径

② 插槽

`[EPCB_PrimitivePadHoleType.SLOT, diameter, length]`

- `{number}` `length` - 长度，长度不能小于直径,长度小于直径的话长度的值跟随直径

- `{number}` `diameter` - 直径