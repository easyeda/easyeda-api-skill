# SCH\_Utils class

原理图 &amp; 符号 / 工具类

## Signature

```typescript
declare class SCH_Utils 
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

**_(BETA)_** 拆分多段线


</td></tr>
</tbody></table>

---

## 方法详情

### splitlines

# SCH\_Utils.splitLines() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

拆分多段线

## Signature

```typescript
splitLines(lines: Array<number | Array<number>>): Array<Array<number | Array<number>>> | undefined;
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

多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线


</td></tr>
</tbody></table>



## Returns

Array&lt;Array&lt;number \| Array&lt;number&gt;&gt;&gt; \| undefined

## Remarks

将相互之间无任何连接的多段线坐标组拆分成多个多段线，无论是否有多个多段线，本函数都会在输入数据的基础上包裹一层数组； 建议用于 [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) 和 [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) 等包含多段线的场景
