# IPCB\_Polygon class

单多边形

## Signature

```typescript
declare class IPCB_Polygon 
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

**_(BETA)_** 将单多边形离散化为点数据


</td></tr>
<tr><td>

[getCenter()](./IPCB_Polygon.md)


</td><td>


</td><td>

**_(BETA)_** 获取单多边形中心点


</td></tr>
<tr><td>

[getSource()](./IPCB_Polygon.md)


</td><td>


</td><td>

获取单多边形数据


</td></tr>
</tbody></table>

---

## 方法详情

### discretize

# IPCB\_Polygon.discretize() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将单多边形离散化为点数据

## Signature

```typescript
discretize(options?: IPCB_DiscretizeOptions): Array<IPCB_DiscretizedPoint>;
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

_(Optional)_ 离散化选项


</td></tr>
</tbody></table>



## Returns

Array&lt;[IPCB\_DiscretizedPoint](../interfaces/IPCB_DiscretizedPoint.md)<!-- -->&gt;

离散化点数据

## Remarks

将单多边形的边界离散化为一系列点

### getcenter

# IPCB\_Polygon.getCenter() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取单多边形中心点

## Signature

```typescript
getCenter(): Promise<{
        x: number;
        y: number;
    }>;
```


## Returns

Promise&lt;{ x: number; y: number; }&gt;

单多边形中心点

### getsource

# IPCB\_Polygon.getSource() method

获取单多边形数据

## Signature

```typescript
getSource(): TPCB_PolygonSourceArray;
```


## Returns

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)

单多边形数据
