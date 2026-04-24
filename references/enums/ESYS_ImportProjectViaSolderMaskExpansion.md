# ESYS\_ImportProjectViaSolderMaskExpansion enum

导入工程过孔阻焊扩展

## Signature

```typescript
declare enum ESYS_ImportProjectViaSolderMaskExpansion 
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

ALL\_COVER\_OIL


</td><td>

`"cover"`


</td><td>

全部盖油


</td></tr>
<tr><td>

FOLLOW\_ORIGINAL\_SETTING


</td><td>

`"custom"`


</td><td>

跟随源设置


</td></tr>
</tbody></table>

## Remarks

仅 `fileType` 为 `Altium Designer` 或 `Protel` 时才可以指定该属性，否则将被忽略