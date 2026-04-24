# ISCH\_PrimitivePolygon class

多边形（折线）图元

## Signature

```typescript
declare class ISCH_PrimitivePolygon implements ISCH_Primitive 
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

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

[done()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

获取属性状态：颜色


</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

获取属性状态：填充颜色


</td></tr>
<tr><td>

[getState\_Line()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

获取属性状态：坐标组


</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

获取属性状态：线型


</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：颜色


</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：填充颜色


</td></tr>
<tr><td>

[setState\_Line(line)](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标组


</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线型


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitivePolygon.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitivePolygon.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): ISCH_PrimitivePolygon;
```


## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象

### getstate_color

# ISCH\_PrimitivePolygon.getState\_Color() method

获取属性状态：颜色

## Signature

```typescript
getState_Color(): string | null;
```


## Returns

string \| null

颜色

### getstate_fillcolor

# ISCH\_PrimitivePolygon.getState\_FillColor() method

获取属性状态：填充颜色

## Signature

```typescript
getState_FillColor(): string | null;
```


## Returns

string \| null

填充颜色

### getstate_line

# ISCH\_PrimitivePolygon.getState\_Line() method

获取属性状态：坐标组

## Signature

```typescript
getState_Line(): Array<number>;
```


## Returns

Array&lt;number&gt;

坐标组

### getstate_linetype

# ISCH\_PrimitivePolygon.getState\_LineType() method

获取属性状态：线型

## Signature

```typescript
getState_LineType(): ESCH_PrimitiveLineType | null;
```


## Returns

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

线型

### getstate_linewidth

# ISCH\_PrimitivePolygon.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number | null;
```


## Returns

number \| null

线宽

### getstate_primitiveid

# ISCH\_PrimitivePolygon.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitivePolygon.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### isasync

# ISCH\_PrimitivePolygon.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# ISCH\_PrimitivePolygon.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<ISCH_PrimitivePolygon>;
```


## Returns

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;

多边形图元对象

### setstate_color

# ISCH\_PrimitivePolygon.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：颜色

## Signature

```typescript
setState_Color(color: string | null): ISCH_PrimitivePolygon;
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

color


</td><td>

string \| null


</td><td>

颜色


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象

### setstate_fillcolor

# ISCH\_PrimitivePolygon.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：填充颜色

## Signature

```typescript
setState_FillColor(fillColor: string | null): ISCH_PrimitivePolygon;
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

fillColor


</td><td>

string \| null


</td><td>

填充颜色


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象

### setstate_line

# ISCH\_PrimitivePolygon.setState\_Line() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标组

## Signature

```typescript
setState_Line(line: Array<number>): ISCH_PrimitivePolygon;
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

line


</td><td>

Array&lt;number&gt;


</td><td>

坐标组


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象

### setstate_linetype

# ISCH\_PrimitivePolygon.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线型

## Signature

```typescript
setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitivePolygon;
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

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

线型


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象

### setstate_linewidth

# ISCH\_PrimitivePolygon.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number | null): ISCH_PrimitivePolygon;
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

lineWidth


</td><td>

number \| null


</td><td>

线宽


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象

### toasync

# ISCH\_PrimitivePolygon.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): ISCH_PrimitivePolygon;
```


## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象

### tosync

# ISCH\_PrimitivePolygon.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): ISCH_PrimitivePolygon;
```


## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

多边形图元对象
