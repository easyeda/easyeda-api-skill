# IPCB\_ComplexPolygon class

复杂多边形

## 签名

```typescript
declare class IPCB_ComplexPolygon 
```

## 备注

复杂多边形可以包含多个单多边形，通过 [fill-rule](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule) 将其组合，以实现多边形的布尔运算。 目前嘉立创 EDA 专业版固定使用 [nonzero](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule#nonzero) 这个 fill-rule。


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[addSource(complexPolygon)](./IPCB_ComplexPolygon.md)


</td><td>


</td><td>

添加多边形数据


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
</tbody></table>

---

## 方法详情

### addsource

# IPCB\_ComplexPolygon.addSource() method

添加多边形数据

## 签名

```typescript
addSource(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

complexPolygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;


</td><td>

复杂多边形数据


</td></tr>
</tbody></table>



## 返回值

[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)

复杂多边形对象

### getsource

# IPCB\_ComplexPolygon.getSource() method

获取多边形数据

## 签名

```typescript
getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;
```


## 返回值

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

单多边形或复杂多边形数据

## 备注

如遇仅包含单一的单多边形，将会化简最外层的数组

### getsourcestrictcomplex

# IPCB\_ComplexPolygon.getSourceStrictComplex() method

获取复杂多边形数据

## 签名

```typescript
getSourceStrictComplex(): Array<TPCB_PolygonSourceArray>;
```


## 返回值

Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

复杂多边形数据

## 备注

强制返回复杂多边形格式数据，即使它仅包含单一的单多边形
