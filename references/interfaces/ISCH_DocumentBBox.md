# ISCH\_DocumentBBox interface

轴对齐包围盒

## Signature

```typescript
interface ISCH_DocumentBBox
```

## Remarks

坐标系为原理图自身坐标系，坐标单位为 \*\*10 mil\*\*（与原理图图元坐标一致）； `minX <= maxX`<!-- -->、`minY <= maxY`

与 PCB 侧的 `IPCB_DocumentBBox` 结构相同但单位不同，两者不可混用

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

[maxX](./ISCH_DocumentBBox.md)

</td><td>

</td><td>

number

</td><td>

右边界 X 坐标

</td></tr>
<tr><td>

[maxY](./ISCH_DocumentBBox.md)

</td><td>

</td><td>

number

</td><td>

上边界 Y 坐标

</td></tr>
<tr><td>

[minX](./ISCH_DocumentBBox.md)

</td><td>

</td><td>

number

</td><td>

左边界 X 坐标

</td></tr>
<tr><td>

[minY](./ISCH_DocumentBBox.md)

</td><td>

</td><td>

number

</td><td>

下边界 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### maxx

# ISCH\_DocumentBBox.maxX property

右边界 X 坐标

## Signature

```typescript
maxX: number;
```

### maxy

# ISCH\_DocumentBBox.maxY property

上边界 Y 坐标

## Signature

```typescript
maxY: number;
```

### minx

# ISCH\_DocumentBBox.minX property

左边界 X 坐标

## Signature

```typescript
minX: number;
```

### miny

# ISCH\_DocumentBBox.minY property

下边界 Y 坐标

## Signature

```typescript
minY: number;
```
