# ISCH\_SourceNetlistRegionResult interface

网表查询结果

## Signature

```typescript
interface ISCH_SourceNetlistRegionResult
```

## Remarks

只返回至少有一个连接点落在区域内的网络；网络内引脚可以落在区域外，网表按网络为单位返回，不按区域裁切

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

[nets](./ISCH_SourceNetlistRegionResult.md)

</td><td>

</td><td>

Array&lt;[ISCH\_SourceNetlistNet](./ISCH_SourceNetlistNet.md)<!-- -->&gt;

</td><td>

网络列表

</td></tr>
</tbody></table>

---

## 属性详情

### nets

# ISCH\_SourceNetlistRegionResult.nets property

网络列表

## Signature

```typescript
nets: Array<ISCH_SourceNetlistNet>;
```
