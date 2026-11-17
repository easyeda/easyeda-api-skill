# ISCH\_DocumentGetElementsInRegionOptions interface

区域查询选项

## Signature

```typescript
interface ISCH_DocumentGetElementsInRegionOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

与区域有交集即算命中，不要求元素整体落入；`types` 省略时返回全部 9 类可查询元素 （`Component` / `Wire` / `Text` / `Rectangle` / `Circle` / `Arc` / `Polygon` / `NetLabel` / `NetFlag`<!-- -->）

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

[region](./ISCH_DocumentGetElementsInRegionOptions.md)

</td><td>

</td><td>

[ISCH\_SourceRegion](./ISCH_SourceRegion.md)

</td><td>

查询区域

</td></tr>
<tr><td>

[types?](./ISCH_DocumentGetElementsInRegionOptions.md)

</td><td>

</td><td>

Array&lt;[ESCH\_SourceElementType](../enums/ESCH_SourceElementType.md)<!-- -->&gt;

</td><td>

_(Optional)_ 需要查询的元素类型集合，省略时返回全部 9 类可查询元素

</td></tr>
</tbody></table>

---

## 属性详情

### region

# ISCH\_DocumentGetElementsInRegionOptions.region property

查询区域

## Signature

```typescript
region: ISCH_SourceRegion;
```

### types

# ISCH\_DocumentGetElementsInRegionOptions.types property

需要查询的元素类型集合，省略时返回全部 9 类可查询元素

## Signature

```typescript
types?: Array<ESCH_SourceElementType>;
```
