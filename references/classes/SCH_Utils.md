# SCH\_Utils class

Schematic &amp; symbol / utility class

## Signature

```typescript
class SCH_Utils
```

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[splitLines(lines)](./SCH_Utils.md)

</td><td>

</td><td>

**_(BETA)_** Split polyline

</td></tr>
</tbody></table>

---

## 方法详情

### splitlines

# SCH\_Utils.splitLines() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Split polyline

## Signature

```typescript
function splitLines(
	lines: Array<number | Array<number>>,
): Array<Array<number | Array<number>>> | undefined;
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

lines

</td><td>

Array&lt;number \| Array&lt;number&gt;&gt;

</td><td>

Polyline coordinate group. Each segment is a continuous line described by `[x1, y1, x2, y2, x3, y3]`

</td></tr>
</tbody></table>

## Returns

Array&lt;Array&lt;number \| Array&lt;number&gt;&gt;&gt; \| undefined

## Remarks

Splits polyline coordinate groups that have no connections to each other into multiple polylines. Regardless of whether there are multiple polylines, this function wraps an extra layer of array around the input data; it is recommended for scenarios containing polylines such as [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) and [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

## Example

```javascript
// 1. 一条连续线的扁平坐标（SCH 坐标单位是 10mil，100 ≈ 25.4mm）
const flatLine = [100, 100, 400, 100, 400, 300];
const single = eda.sch_Utils.splitLines(flatLine);
console.log('单条连续线：', JSON.stringify(single), '，多段线条数：', single.length);

// 2. 相互断开的两条线——各自保留为列表中的独立条目
const separated = eda.sch_Utils.splitLines([
	[100, 100, 300, 100],
	[500, 100, 700, 100, 700, 300],
]);
console.log('断开的两条线：', JSON.stringify(separated), '，多段线条数：', separated.length);

// 3. 实际场景：读取画布上导线的坐标数据（嵌套段数组）并归一化
const wire = await eda.sch_PrimitiveWire.create([800, 300, 1200, 300, 1200, 500]);
const lineData = wire.getState_Line();
console.log('导线原始坐标：', JSON.stringify(lineData));
const polylines = eda.sch_Utils.splitLines(lineData);
console.log('导线归一化结果：', JSON.stringify(polylines), '，多段线条数：', polylines.length);

// 4. 清理测试图元（查询演示，保持画布干净）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);
```
