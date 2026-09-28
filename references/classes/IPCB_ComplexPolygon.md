# IPCB\_ComplexPolygon class

Complex polygon

## Signature

```typescript
class IPCB_ComplexPolygon
```

## Remarks

developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule \| fill-rule<!-- -->} to combine them to achieve Boolean operations on polygons.

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

Add Polygon data

</td></tr>
<tr><td>

[getCenter()](./IPCB_ComplexPolygon.md)

</td><td>

</td><td>

**_(BETA)_** Get Complex polygon center point

</td></tr>
<tr><td>

[getSource()](./IPCB_ComplexPolygon.md)

</td><td>

</td><td>

Get Polygon data

</td></tr>
<tr><td>

[getSourceStrictComplex()](./IPCB_ComplexPolygon.md)

</td><td>

</td><td>

Get Complex polygon data

</td></tr>
<tr><td>

[toPolygon()](./IPCB_ComplexPolygon.md)

</td><td>

</td><td>

Split is single polygon array

</td></tr>
</tbody></table>

---

## 方法详情

### addsource

# IPCB\_ComplexPolygon.addSource() method

Add Polygon data

## Signature

```typescript
function addSource(
	complexPolygon:
		| TPCB_PolygonSourceArray
		| Array<TPCB_PolygonSourceArray>
		| IPCB_Polygon
		| Array<IPCB_Polygon>,
): IPCB_ComplexPolygon;
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

Complex polygon data

</td></tr>
</tbody></table>

## Returns

[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)

Complex polygon object

## Example

```javascript
// 1. 先创建一个矩形外框复杂多边形（纯数据对象，此时画布上还看不到）
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon(['R', 1000, 1000, 500, 300, 0, 0]);

// 2. 再创建一个圆形单多边形对象，作为要追加的第二块数据
const circlePolygon = eda.pcb_MathPolygon.createPolygon(['CIRCLE', 1250, 1150, 80]);

// 3. 追加进复杂多边形（返回对象本身，支持链式调用）
complexPolygon.addSource(circlePolygon);

// 4. 用组合后的复杂多边形创建填充图元，让结果在画布上可见
const fill = await eda.pcb_PrimitiveFill.create(1, complexPolygon, '', 0, 10, false);

// 修改类保留现场，供观察填充结果
console.log('primitiveId:', fill.getState_PrimitiveId());
console.log('polygonCount:', complexPolygon.getSourceStrictComplex().length);
```

### getcenter

# IPCB\_ComplexPolygon.getCenter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Complex polygon center point

## Signature

```typescript
function getCenter(): Promise<{ x: number; y: number }>;
```

## Returns

Promise&lt;{ x: number; y: number }&gt;

Complex polygon center point

### getsource

# IPCB\_ComplexPolygon.getSource() method

Get Polygon data

## Signature

```typescript
function getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;
```

## Returns

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

Single polygon or complex polygon data

## Remarks

If it only contains a single polygon, the outermost array will be simplified

## Example

```javascript
// 1. 用单个单多边形构建：getSource 会化简最外层数组
const single = eda.pcb_MathPolygon.createComplexPolygon(['R', 1000, 1000, 500, 300, 0, 0]);

// 2. 用多个单多边形构建：getSource 返回二维数组
const multi = eda.pcb_MathPolygon.createComplexPolygon([
	['R', 2000, 1000, 500, 300, 0, 0],
	['CIRCLE', 3000, 1150, 100],
]);

console.log('singleSource:', JSON.stringify(single.getSource()));
console.log('multiSource:', JSON.stringify(multi.getSource()));
```

### getsourcestrictcomplex

# IPCB\_ComplexPolygon.getSourceStrictComplex() method

Get Complex polygon data

## Signature

```typescript
function getSourceStrictComplex(): Array<TPCB_PolygonSourceArray>;
```

## Returns

Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;

Complex polygon data

## Remarks

Forcibly return data in complex polygon format, even if it only contains a single polygon

## Example

```javascript
// 1. 只放入一个单多边形构建复杂多边形
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon(['R', 1000, 1000, 500, 300, 0, 0]);

// 2. 对比两种读取方式：区别在嵌套深度，不在是否为数组
const simplified = complexPolygon.getSource(); // 一维：首元素是模式标记 "R"
const strict = complexPolygon.getSourceStrictComplex(); // 二维：首元素是单多边形数组

console.log('simplifiedFirstItem:', typeof simplified[0]);
console.log('strictFirstItemIsArray:', Array.isArray(strict[0]));
console.log('strictPolygonCount:', strict.length);
```

### topolygon

# IPCB\_ComplexPolygon.toPolygon() method

Split is single polygon array

## Signature

```typescript
function toPolygon(): Array<IPCB_Polygon>;
```

## Returns

Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;

Single polygon array

## Remarks

Will complex polygon split is single polygon array of objects

## Example

```javascript
// 1. 用两个单多边形（矩形 + 圆形）构建复杂多边形
const complexPolygon = eda.pcb_MathPolygon.createComplexPolygon([
	['R', 1000, 1000, 500, 300, 0, 0],
	['CIRCLE', 3000, 1150, 100],
]);

// 2. 拆分为单多边形对象数组
const polygons = complexPolygon.toPolygon();

// 3. 逐个读取单多边形的数据
polygons.forEach((polygon, index) => {
	console.log(`polygon${index + 1}:`, JSON.stringify(polygon.getSource()));
});
console.log('count:', polygons.length);
```
