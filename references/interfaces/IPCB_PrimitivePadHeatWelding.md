# IPCB\_PrimitivePadHeatWelding interface

Pad thermal relief optimization parameters

## Signature

```typescript
export interface IPCB_PrimitivePadHeatWelding 
```

## Remarks

When the connection method ([connectionMethod](./IPCB_PrimitivePadHeatWelding.md)<!-- -->) is direct connection ([DIRECT\_CONNECTED](../enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md)<!-- -->) or no connection ([NON\_CONNECTED](../enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md)<!-- -->), the settings of divergence spacing, divergence line width, and divergence angle will be ignored

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

Connection method


</td></tr>
<tr><td>

[divergenceAngle?](./IPCB_PrimitivePadHeatWelding.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Divergence angle


</td></tr>
<tr><td>

[divergenceLineWidth?](./IPCB_PrimitivePadHeatWelding.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Divergence line width


</td></tr>
<tr><td>

[divergenceSpacing?](./IPCB_PrimitivePadHeatWelding.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Divergence spacing


</td></tr>
</tbody></table>

---

## 属性详情

### divergenceangle

# IPCB\_PrimitivePadHeatWelding.divergenceAngle property

Divergence angle

## Signature

```typescript
divergenceAngle?: number;
```

### divergencelinewidth

# IPCB\_PrimitivePadHeatWelding.divergenceLineWidth property

Divergence line width

## Signature

```typescript
divergenceLineWidth?: number;
```

### divergencespacing

# IPCB\_PrimitivePadHeatWelding.divergenceSpacing property

Divergence spacing

## Signature

```typescript
divergenceSpacing?: number;
```


---

## 方法详情

### connectionmethod

# IPCB\_PrimitivePadHeatWelding.connectionMethod property

Connection method

## Signature

```typescript
connectionMethod: EPCB_PrimitivePadHeatWeldingConnectionMethod;
```
