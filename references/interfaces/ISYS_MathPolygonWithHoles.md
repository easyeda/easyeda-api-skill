# ISYS\_MathPolygonWithHoles interface

带孔洞的多边形

## Signature

```typescript
export interface ISYS_MathPolygonWithHoles 
```

## Remarks

包含一个外环和零到多个孔洞（内环），保留完整的拓扑结构

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

孔洞（内环）数组


</td></tr>
<tr><td>

[outer](./ISYS_MathPolygonWithHoles.md)


</td><td>


</td><td>

Array&lt;[ISYS\_MathPoint](./ISYS_MathPoint.md)<!-- -->&gt;


</td><td>

外环


</td></tr>
</tbody></table>

---

## 属性详情

### holes

# ISYS\_MathPolygonWithHoles.holes property

孔洞（内环）数组

## Signature

```typescript
holes: Array<Array<ISYS_MathPoint>>;
```

### outer

# ISYS\_MathPolygonWithHoles.outer property

外环

## Signature

```typescript
outer: Array<ISYS_MathPoint>;
```
