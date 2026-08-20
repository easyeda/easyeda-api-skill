# PCB\_MathPolygon class

PCB &amp; footprint / polygon math class

## Signature

```typescript
export class PCB_MathPolygon 
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

[calculateHeight(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Calculate complex polygon BBox height


</td></tr>
<tr><td>

[calculateWidth(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Calculate complex polygon BBox width


</td></tr>
<tr><td>

[convertImageToComplexPolygon(imageBlob, imageWidth, imageHeight, tolerance, simplification, smoothing, despeckling, whiteAsBackgroundColor, inversion)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Convert Image to Complex polygon object


</td></tr>
<tr><td>

[createComplexPolygon(complexPolygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

Create Complex polygon


</td></tr>
<tr><td>

[createPolygon(polygon)](./PCB_MathPolygon.md)


</td><td>


</td><td>

Create Single polygon


</td></tr>
<tr><td>

[discretize(polygon, options)](./PCB_MathPolygon.md)


</td><td>


</td><td>

**_(BETA)_** Discretize a single polygon into point data


</td></tr>
<tr><td>

[splitPolygon(complexPolygons)](./PCB_MathPolygon.md)


</td><td>


</td><td>

Split single polygon


</td></tr>
</tbody></table>

---

## 方法详情

### calculatebboxheight

# PCB\_MathPolygon.calculateBBoxHeight() method

## Signature

```typescript
public calculateBBoxHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
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

### calculateheight

# PCB\_MathPolygon.calculateHeight() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Calculate complex polygon BBox height

## Signature

```typescript
public calculateHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon): number;
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

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| [IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)


</td><td>

Complex polygon


</td></tr>
</tbody></table>



## Returns

number

BBox height

### calculatewidth

# PCB\_MathPolygon.calculateWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Calculate complex polygon BBox width

## Signature

```typescript
public calculateWidth(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon): number;
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

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| [IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)


</td><td>

Complex polygon


</td></tr>
</tbody></table>



## Returns

number

BBox width

### convertimagetocomplexpolygon

# PCB\_MathPolygon.convertImageToComplexPolygon() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Convert Image to Complex polygon object

## Signature

```typescript
public convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>;
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

Image Blob file. You can use the  method to read a file from the file system


</td></tr>
<tr><td>

imageWidth


</td><td>

number


</td><td>

Image width


</td></tr>
<tr><td>

imageHeight


</td><td>

number


</td><td>

Image height


</td></tr>
<tr><td>

tolerance


</td><td>

number


</td><td>

_(Optional)_ Tolerance, value range `0`<!-- -->-`1`


</td></tr>
<tr><td>

simplification


</td><td>

number


</td><td>

_(Optional)_ Simplification, value range `0`<!-- -->-`1`


</td></tr>
<tr><td>

smoothing


</td><td>

number


</td><td>

_(Optional)_ Smoothing, value range `0`<!-- -->-`1.33`


</td></tr>
<tr><td>

despeckling


</td><td>

number


</td><td>

_(Optional)_ Despeckling, value range `0`<!-- -->-`5`


</td></tr>
<tr><td>

whiteAsBackgroundColor


</td><td>

boolean


</td><td>

_(Optional)_ Whether to use white as the background color


</td></tr>
<tr><td>

inversion


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is inverted


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined&gt;

Complex polygon object

### createcomplexpolygon

# PCB\_MathPolygon.createComplexPolygon() method

Create Complex polygon

## Signature

```typescript
public createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;
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

[IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md) \| undefined

Complex polygon object. `undefined` indicates that the data is invalid

### createpolygon

# PCB\_MathPolygon.createPolygon() method

Create Single polygon

## Signature

```typescript
public createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;
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

Single polygon data


</td></tr>
</tbody></table>



## Returns

[IPCB\_Polygon](./IPCB_Polygon.md) \| undefined

Single polygon object. `undefined` indicates that the data is invalid

### discretize

# PCB\_MathPolygon.discretize() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Discretize a single polygon into point data

## Signature

```typescript
public discretize(polygon: IPCB_Polygon | TPCB_PolygonSourceArray, options?: IPCB_DiscretizeOptions): Promise<Array<IPCB_DiscretizedPoint>>;
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

[IPCB\_Polygon](./IPCB_Polygon.md) \| [TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)


</td><td>

Single polygon object


</td></tr>
<tr><td>

options


</td><td>

[IPCB\_DiscretizeOptions](../interfaces/IPCB_DiscretizeOptions.md)


</td><td>

_(Optional)_ Discretization options


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_DiscretizedPoint](../interfaces/IPCB_DiscretizedPoint.md)<!-- -->&gt;&gt;

Discretized point data

## Remarks

Discretize the boundary of a single polygon into a series of points

### splitpolygon

# PCB\_MathPolygon.splitPolygon() method

Split single polygon

## Signature

```typescript
public splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;
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

Complex polygon


</td></tr>
</tbody></table>



## Returns

Array&lt;[IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->&gt;

Single polygon array
