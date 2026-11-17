# ISCH\_SourceRegion interface

源数据区域

## Signature

```typescript
interface ISCH_SourceRegion
```

## Remarks

轴对齐矩形，单位与源数据层一致（原理图为 10 mil）；`minX >= maxX` 或 `minY >= maxY` 时视为空区域

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

[maxX](./ISCH_SourceRegion.md)

</td><td>

</td><td>

number

</td><td>

区域最大 X 坐标

</td></tr>
<tr><td>

[maxY](./ISCH_SourceRegion.md)

</td><td>

</td><td>

number

</td><td>

区域最大 Y 坐标

</td></tr>
<tr><td>

[minX](./ISCH_SourceRegion.md)

</td><td>

</td><td>

number

</td><td>

区域最小 X 坐标

</td></tr>
<tr><td>

[minY](./ISCH_SourceRegion.md)

</td><td>

</td><td>

number

</td><td>

区域最小 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### maxx

# ISCH\_SourceRegion.maxX property

区域最大 X 坐标

## Signature

```typescript
maxX: number;
```

### maxy

# ISCH\_SourceRegion.maxY property

区域最大 Y 坐标

## Signature

```typescript
maxY: number;
```

### minx

# ISCH\_SourceRegion.minX property

区域最小 X 坐标

## Signature

```typescript
minX: number;
```

### miny

# ISCH\_SourceRegion.minY property

区域最小 Y 坐标

## Signature

```typescript
minY: number;
```
