# PCB\_MathPolygon class

PCB &amp; 封装 / 多边形数学类

## 签名

```typescript
declare class PCB_MathPolygon 
```

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

## 签名

```typescript
calculateBBoxHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
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

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;


</td><td>


</td></tr>
</tbody></table>



## 返回值

number

### calculatebboxwidth

# PCB\_MathPolygon.calculateBBoxWidth() method

## 签名

```typescript
calculateBBoxWidth(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
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

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt;


</td><td>


</td></tr>
</tbody></table>



## 返回值

number

### convertimagetocomplexpolygon

# PCB\_MathPolygon.convertImageToComplexPolygon() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将图像转换为复杂多边形对象

## 签名

```typescript
convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>;
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

_（可选）_ 容差，取值范围 `0`<!-- -->-`1`


</td></tr>
<tr><td>

simplification


</td><td>

number


</td><td>

_（可选）_ 简化，取值范围 `0`<!-- -->-`1`


</td></tr>
<tr><td>

smoothing


</td><td>

number


</td><td>

_（可选）_ 平滑，取值范围 `0`<!-- -->-`1.33`


</td></tr>
<tr><td>

despeckling


</td><td>

number


</td><td>

_（可选）_ 去斑，取值范围 `0`<!-- -->-`5`


</td></tr>
<tr><td>

whiteAsBackgroundColor


</td><td>

boolean


</td><td>

_（可选）_ 是否白色作为背景色


</td></tr>
<tr><td>

inversion


</td><td>

boolean


</td><td>

_（可选）_ 是否反相


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined&gt;

复杂多边形对象

### createcomplexpolygon

# PCB\_MathPolygon.createComplexPolygon() method

创建复杂多边形

## 签名

```typescript
createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;
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

[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined

复杂多边形对象，`undefined` 表示数据不合法

### createpolygon

# PCB\_MathPolygon.createPolygon() method

创建单多边形

## 签名

```typescript
createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;
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

polygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)


</td><td>

单多边形数据


</td></tr>
</tbody></table>



## 返回值

[IPCB\_Polygon](./IPCB_Polygon.md) \| undefined

单多边形对象，`undefined` 表示数据不合法

### splitpolygon

# PCB\_MathPolygon.splitPolygon() method

拆分单多边形

## 签名

```typescript
splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;
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

complexPolygons


</td><td>

Array&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)<!-- -->&gt;


</td><td>

复杂多边形


</td></tr>
</tbody></table>



## 返回值

Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;

单多边形数组
