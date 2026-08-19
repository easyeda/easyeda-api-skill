# ESYS\_ImportProjectBoardOutlineSource enum

导入工程板边框来源

## Signature

```typescript
export enum ESYS_ImportProjectBoardOutlineSource 
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


</td></tr>
<tr><td>

FROM\_MECHANICAL\_LAYER\_1


</td><td>

`'mechanical'`


</td><td>


</td></tr>
</tbody></table>

## Remarks

仅 `fileType` 为 `Altium Designer` 或 `Protel` 时才可以指定该属性，否则将被忽略