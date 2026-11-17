# ISCH\_SourcePrimitiveComponentGetOptions interface

器件查询选项

## Signature

```typescript
interface ISCH_SourcePrimitiveComponentGetOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

`primitiveId` 与 `designator` 二选一，同时给出将返回 [PARAM\_CONFLICT](../enums/ESCH_SourceErrorCode.md)<!-- -->，均未给出将返回 [PARAM\_REQUIRED](../enums/ESCH_SourceErrorCode.md)

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

[designator?](./ISCH_SourcePrimitiveComponentGetOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 位号

</td></tr>
<tr><td>

[primitiveId?](./ISCH_SourcePrimitiveComponentGetOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 图元 ID

</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_SourcePrimitiveComponentGetOptions.designator property

位号

## Signature

```typescript
designator?: string;
```

### primitiveid

# ISCH\_SourcePrimitiveComponentGetOptions.primitiveId property

图元 ID

## Signature

```typescript
primitiveId?: string;
```
