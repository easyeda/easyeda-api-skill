# PCB\_MathPolygon class

PCB &amp; 封装 / 多边形数学类

## Signature

```typescript
declare class PCB_MathPolygon 
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

[calculateBBoxHeight(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[calculateBBoxWidth(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[convertImageToComplexPolygon(imageBlob, imageWidth, imageHeight, tolerance, simplification, smoothing, despeckling, whiteAsBackgroundColor, inversion)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** 将图像转换为复杂多边形对象


</td></tr>
<tr><td>

[createComplexPolygon(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

创建复杂多边形


</td></tr>
<tr><td>

[createPolygon(polygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

创建单多边形


</td></tr>
<tr><td>

[splitPolygon(complexPolygons)](./PCB_MathPolygon.md)


</td><td>


</td><td>

拆分单多边形


</td></tr>
</tbody></table>

---

## 方法详情

### calculatebboxheight

# PCB\_MathPolygon.calculateBBoxHeight() method

## Signature

```typescript
calculateBBoxHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
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

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;


</td><td>


</td></tr>
</tbody></table>



## Returns

number

### calculatebboxwidth

# PCB\_MathPolygon.calculateBBoxWidth() method

## Signature

```typescript
calculateBBoxWidth(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
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

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;


</td><td>


</td></tr>
</tbody></table>



## Returns

number

### convertimagetocomplexpolygon

# PCB\_MathPolygon.convertImageToComplexPolygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将图像转换为复杂多边形对象

## Signature

```typescript
convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>;
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

imageBlob


</td><td>

Blob


</td><td>

图像 Blob 文件，可以使用  方法从文件系统读取文件


</td></tr>
<tr><td>

imageWidth


</td><td>

number


</td><td>

图像宽度


</td></tr>
<tr><td>

imageHeight


</td><td>

number


</td><td>

图像高度


</td></tr>
<tr><td>

tolerance


</td><td>

number


</td><td>

_(Optional)_ 容差，取值范围 `0`<!-- -->-`1`


</td></tr>
<tr><td>

simplification


</td><td>

number


</td><td>

_(Optional)_ 简化，取值范围 `0`<!-- -->-`1`


</td></tr>
<tr><td>

smoothing


</td><td>

number


</td><td>

_(Optional)_ 平滑，取值范围 `0`<!-- -->-`1.33`


</td></tr>
<tr><td>

despeckling


</td><td>

number


</td><td>

_(Optional)_ 去斑，取值范围 `0`<!-- -->-`5`


</td></tr>
<tr><td>

whiteAsBackgroundColor


</td><td>

boolean


</td><td>

_(Optional)_ 是否白色作为背景色


</td></tr>
<tr><td>

inversion


</td><td>

boolean


</td><td>

_(Optional)_ 是否反相


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined&gt;

复杂多边形对象

### createcomplexpolygon

# PCB\_MathPolygon.createComplexPolygon() method

创建复杂多边形

## Signature

```typescript
createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;
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

[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined

复杂多边形对象，`undefined` 表示数据不合法

### createpolygon

# PCB\_MathPolygon.createPolygon() method

创建单多边形

## Signature

```typescript
createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;
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

polygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)


</td><td>

单多边形数据


</td></tr>
</tbody></table>



## Returns

[IPCB\_Polygon](./IPCB_Polygon.md) \| undefined

单多边形对象，`undefined` 表示数据不合法

### splitpolygon

# PCB\_MathPolygon.splitPolygon() method

拆分单多边形

## Signature

```typescript
splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;
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

complexPolygons


</td><td>

Array&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)<!-- -->&gt;


</td><td>

复杂多边形


</td></tr>
</tbody></table>



## Returns

Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;

单多边形数组
