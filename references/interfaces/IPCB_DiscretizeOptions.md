# IPCB\_DiscretizeOptions interface

Discretization options

## Signature

```typescript
interface IPCB_DiscretizeOptions
```

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

[tolerance?](./IPCB_DiscretizeOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 弦高容差，即弧/曲线被弦（相邻离散点连线）近似时允许的最大偏差

</td></tr>
</tbody></table>

---

## 属性详情

### tolerance

# IPCB\_DiscretizeOptions.tolerance property

弦高容差，即弧/曲线被弦（相邻离散点连线）近似时允许的最大偏差

## Signature

```typescript
tolerance?: number;
```

## Remarks

容差越小，离散点越密集，对曲线近似越精确；单位与多边形坐标一致
