# IPCB\_Polygon class

Single polygon

## Signature

```typescript
export class IPCB_Polygon 
```

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[discretize(options)](./IPCB_Polygon.md)


</td><td>


</td><td>

**_(BETA)_** Discretize a single polygon into point data


</td></tr>
<tr><td>

[getCenter()](./IPCB_Polygon.md)


</td><td>


</td><td>

**_(BETA)_** Get Single polygon center point


</td></tr>
<tr><td>

[getSource()](./IPCB_Polygon.md)


</td><td>


</td><td>

Get Single polygon data


</td></tr>
</tbody></table>

---

## 方法详情

### discretize

# IPCB\_Polygon.discretize() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Discretize a single polygon into point data

## Signature

```typescript
public discretize(options?: IPCB_DiscretizeOptions): Promise<Array<IPCB_DiscretizedPoint>>;
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

### getcenter

# IPCB\_Polygon.getCenter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Single polygon center point

## Signature

```typescript
public getCenter(): Promise<{ x: number; y: number }>;
```


## Returns

Promise&lt;{ x: number; y: number }&gt;

Single polygon center point

### getsource

# IPCB\_Polygon.getSource() method

Get Single polygon data

## Signature

```typescript
public getSource(): TPCB_PolygonSourceArray;
```


## Returns

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)

Single polygon data

## Example


```javascript
// 1. 用矩形模式（R x y width height rot round）创建一块单多边形
const rectPolygon = eda.pcb_MathPolygon.createPolygon(['R', 1000, 1000, 500, 300, 0, 0]);

// 2. 再用圆形模式（CIRCLE x y radius）创建一块，展示不同模式的源数据形态
const circlePolygon = eda.pcb_MathPolygon.createPolygon(['CIRCLE', 2000, 1150, 100]);

// 3. 读取源数组：矩形是 "R" 打头的参数序列，圆形是 "CIRCLE" 打头
console.log('rectSource:', JSON.stringify(rectPolygon.getSource()));
console.log('circleSource:', JSON.stringify(circlePolygon.getSource()));

// 4. 源数组可以直接喂回 createPolygon 复制出一块等价的多边形（数据回环）
const copied = eda.pcb_MathPolygon.createPolygon(rectPolygon.getSource());
console.log('roundTripMatch:', JSON.stringify(copied.getSource()) === JSON.stringify(rectPolygon.getSource()));
```
