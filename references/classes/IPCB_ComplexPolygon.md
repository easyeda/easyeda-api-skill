# IPCB\_ComplexPolygon class

复杂多边形

## Signature

```typescript
declare class IPCB_ComplexPolygon 
```

## Remarks

复杂多边形可以包含多个单多边形，通过 [fill-rule](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule) 将其组合，以实现多边形的布尔运算。 目前嘉立创 EDA 专业版固定使用 [nonzero](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule#nonzero) 这个 fill-rule。


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[addSource(complexPolygon)](./IPCB_ComplexPolygon.md)


</td><td>


</td><td>

添加多边形数据


</td></tr>
<tr><td>

[getCenter()](./IPCB_ComplexPolygon.md)


</td><td>


</td><td>

**_(BETA)_** 获取复杂多边形中心点


</td></tr>
<tr><td>

[getSource()](./IPCB_ComplexPolygon.md)


</td><td>


</td><td>

获取多边形数据


</td></tr>
<tr><td>

[getSourceStrictComplex()](./IPCB_ComplexPolygon.md)


</td><td>


</td><td>

获取复杂多边形数据


</td></tr>
<tr><td>

[toPolygon()](./IPCB_ComplexPolygon.md)


</td><td>


</td><td>

拆分为单多边形数组


</td></tr>
</tbody></table>

---

## 方法详情

### addsource

# IPCB\_ComplexPolygon.addSource() method

添加多边形数据

## Signature

```typescript
addSource(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

complexPolygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;


</td><td>

复杂多边形数据


</td></tr>
</tbody></table>



## Returns

[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)

复杂多边形对象

### getcenter

# IPCB\_ComplexPolygon.getCenter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取复杂多边形中心点

## Signature

```typescript
getCenter(): {
        x: number;
        y: number;
    };
```


## Returns

\{ x: number; y: number; \}

复杂多边形中心点

### getsource

# IPCB\_ComplexPolygon.getSource() method

获取多边形数据

## Signature

```typescript
getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;
```


## Returns

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

单多边形或复杂多边形数据

## Remarks

如遇仅包含单一的单多边形，将会化简最外层的数组

### getsourcestrictcomplex

# IPCB\_ComplexPolygon.getSourceStrictComplex() method

获取复杂多边形数据

## Signature

```typescript
getSourceStrictComplex(): Array<TPCB_PolygonSourceArray>;
```


## Returns

Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

复杂多边形数据

## Remarks

强制返回复杂多边形格式数据，即使它仅包含单一的单多边形

### topolygon

# IPCB\_ComplexPolygon.toPolygon() method

拆分为单多边形数组

## Signature

```typescript
toPolygon(): Array<IPCB_Polygon>;
```


## Returns

Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;

单多边形数组

## Remarks

将复杂多边形拆分为单多边形对象数组
