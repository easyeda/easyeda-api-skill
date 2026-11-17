# ISCH\_DocumentRegionGeometry interface

区域查询图形几何

## Signature

```typescript
interface ISCH_DocumentRegionGeometry
```

## Remarks

仅图形元素携带，各图元只填其对应字段：矩形填 `x` / `y` / `width` / `height`<!-- -->，圆形填 `cx` / `cy` / `radius`<!-- -->，圆弧与多边形填 `points`

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

[cx?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 圆心 X 坐标（仅圆形携带）

</td></tr>
<tr><td>

[cy?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 圆心 Y 坐标（仅圆形携带）

</td></tr>
<tr><td>

[height?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 矩形高度（仅矩形携带）

</td></tr>
<tr><td>

[points?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

Array&lt;Array&lt;number&gt;&gt;

</td><td>

_(Optional)_ 点序列（仅圆弧与多边形携带）

</td></tr>
<tr><td>

[radius?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 半径（仅圆形携带）

</td></tr>
<tr><td>

[width?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 矩形宽度（仅矩形携带）

</td></tr>
<tr><td>

[x?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 矩形 X 坐标（仅矩形携带）

</td></tr>
<tr><td>

[y?](./ISCH_DocumentRegionGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 矩形 Y 坐标（仅矩形携带）

</td></tr>
</tbody></table>

---

## 属性详情

### cx

# ISCH\_DocumentRegionGeometry.cx property

圆心 X 坐标（仅圆形携带）

## Signature

```typescript
cx?: number;
```

### cy

# ISCH\_DocumentRegionGeometry.cy property

圆心 Y 坐标（仅圆形携带）

## Signature

```typescript
cy?: number;
```

### height

# ISCH\_DocumentRegionGeometry.height property

矩形高度（仅矩形携带）

## Signature

```typescript
height?: number;
```

### points

# ISCH\_DocumentRegionGeometry.points property

点序列（仅圆弧与多边形携带）

## Signature

```typescript
points?: Array<Array<number>>;
```

### radius

# ISCH\_DocumentRegionGeometry.radius property

半径（仅圆形携带）

## Signature

```typescript
radius?: number;
```

### width

# ISCH\_DocumentRegionGeometry.width property

矩形宽度（仅矩形携带）

## Signature

```typescript
width?: number;
```

### x

# ISCH\_DocumentRegionGeometry.x property

矩形 X 坐标（仅矩形携带）

## Signature

```typescript
x?: number;
```

### y

# ISCH\_DocumentRegionGeometry.y property

矩形 Y 坐标（仅矩形携带）

## Signature

```typescript
y?: number;
```
