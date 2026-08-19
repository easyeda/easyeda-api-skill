# IPCB\_PrimitivePadHeatWelding interface

焊盘热焊优化参数

## Signature

```typescript
export interface IPCB_PrimitivePadHeatWelding 
```

## Remarks

当连接方式（[connectionMethod](./IPCB_PrimitivePadHeatWelding.md)<!-- -->）为直连（[DIRECT\_CONNECTED](../enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md)<!-- -->）、无连接（[NON\_CONNECTED](../enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md)<!-- -->）时，发散间距、发散线宽、发散角度的设置将被忽略

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[connectionMethod](./IPCB_PrimitivePadHeatWelding.md)


</td><td>


</td><td>

[EPCB\_PrimitivePadHeatWeldingConnectionMethod](../enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md)


</td><td>

连接方式


</td></tr>
<tr><td>

[divergenceAngle?](./IPCB_PrimitivePadHeatWelding.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 发散角度


</td></tr>
<tr><td>

[divergenceLineWidth?](./IPCB_PrimitivePadHeatWelding.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 发散线宽


</td></tr>
<tr><td>

[divergenceSpacing?](./IPCB_PrimitivePadHeatWelding.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 发散间距


</td></tr>
</tbody></table>

---

## 属性详情

### divergenceangle

# IPCB\_PrimitivePadHeatWelding.divergenceAngle property

发散角度

## Signature

```typescript
divergenceAngle?: number;
```

### divergencelinewidth

# IPCB\_PrimitivePadHeatWelding.divergenceLineWidth property

发散线宽

## Signature

```typescript
divergenceLineWidth?: number;
```

### divergencespacing

# IPCB\_PrimitivePadHeatWelding.divergenceSpacing property

发散间距

## Signature

```typescript
divergenceSpacing?: number;
```


---

## 方法详情

### connectionmethod

# IPCB\_PrimitivePadHeatWelding.connectionMethod property

连接方式

## Signature

```typescript
connectionMethod: EPCB_PrimitivePadHeatWeldingConnectionMethod;
```
