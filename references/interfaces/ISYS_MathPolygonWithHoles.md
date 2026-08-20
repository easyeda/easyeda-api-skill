# ISYS\_MathPolygonWithHoles interface

Polygon with holes

## Signature

```typescript
export interface ISYS_MathPolygonWithHoles 
```

## Remarks

Contains one outer ring and zero to multiple holes (inner rings), preserving the complete topology

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

[holes](./ISYS_MathPolygonWithHoles.md)


</td><td>


</td><td>

Array&lt;Array&lt;[ISYS\_MathPoint](./ISYS_MathPoint.md)<!-- -->&gt;&gt;


</td><td>

Array of holes (inner rings)


</td></tr>
<tr><td>

[outer](./ISYS_MathPolygonWithHoles.md)


</td><td>


</td><td>

Array&lt;[ISYS\_MathPoint](./ISYS_MathPoint.md)<!-- -->&gt;


</td><td>

Outer ring


</td></tr>
</tbody></table>

---

## 属性详情

### holes

# ISYS\_MathPolygonWithHoles.holes property

Array of holes (inner rings)

## Signature

```typescript
holes: Array<Array<ISYS_MathPoint>>;
```

### outer

# ISYS\_MathPolygonWithHoles.outer property

Outer ring

## Signature

```typescript
outer: Array<ISYS_MathPoint>;
```
