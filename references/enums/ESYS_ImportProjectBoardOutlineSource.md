# ESYS\_ImportProjectBoardOutlineSource enum

Import project board outline source

## Signature

```typescript
enum ESYS_ImportProjectBoardOutlineSource
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

FROM\_KEEPOUT\_LAYER

</td><td>

`'keepout'`

</td><td>

从 Keepout 层

</td></tr>
<tr><td>

FROM\_MECHANICAL\_LAYER\_1

</td><td>

`'mechanical'`

</td><td>

从机械层 1

</td></tr>
</tbody></table>

## Remarks

This property can only be specified when `fileType` is `Altium Designer` or `Protel`<!-- -->; otherwise it will be ignored