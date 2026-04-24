# ISCH\_PrimitiveBus class

总线图元

## Signature

```typescript
declare class ISCH_PrimitiveBus implements ISCH_Primitive 
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

[done()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_BusName()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

获取属性状态：总线名称


</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

获取属性状态：总线颜色


</td></tr>
<tr><td>

[getState\_Line()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

获取属性状态：多段线坐标组


</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

获取属性状态：线型


</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[setState\_BusName(busName)](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：总线名称


</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：总线颜色


</td></tr>
<tr><td>

[setState\_Line(line)](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：多段线坐标组


</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线型


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveBus.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveBus.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<ISCH_PrimitiveBus>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;

总线图元对象

### getstate_busname

# ISCH\_PrimitiveBus.getState\_BusName() method

获取属性状态：总线名称

## Signature

```typescript
getState_BusName(): string;
```


## Returns

string

总线名称

### getstate_color

# ISCH\_PrimitiveBus.getState\_Color() method

获取属性状态：总线颜色

## Signature

```typescript
getState_Color(): string | null;
```


## Returns

string \| null

总线颜色

### getstate_line

# ISCH\_PrimitiveBus.getState\_Line() method

获取属性状态：多段线坐标组

## Signature

```typescript
getState_Line(): Array<number> | Array<Array<number>>;
```


## Returns

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;

多段线坐标组

### getstate_linetype

# ISCH\_PrimitiveBus.getState\_LineType() method

获取属性状态：线型

## Signature

```typescript
getState_LineType(): ESCH_PrimitiveLineType | null;
```


## Returns

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

线型

### getstate_linewidth

# ISCH\_PrimitiveBus.getState\_LineWidth() method

获取属性状态：线宽

## Signature

```typescript
getState_LineWidth(): number | null;
```


## Returns

number \| null

线宽

### getstate_primitiveid

# ISCH\_PrimitiveBus.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveBus.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### isasync

# ISCH\_PrimitiveBus.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### setstate_busname

# ISCH\_PrimitiveBus.setState\_BusName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：总线名称

## Signature

```typescript
setState_BusName(busName: string): ISCH_PrimitiveBus;
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

busName


</td><td>

string


</td><td>

总线名称


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)

总线图元对象

### setstate_color

# ISCH\_PrimitiveBus.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：总线颜色

## Signature

```typescript
setState_Color(color: string | null): ISCH_PrimitiveBus;
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

总线颜色


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)

总线图元对象

### setstate_line

# ISCH\_PrimitiveBus.setState\_Line() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：多段线坐标组

## Signature

```typescript
setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveBus;
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

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

多段线坐标组


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)

总线图元对象

### setstate_linetype

# ISCH\_PrimitiveBus.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线型

## Signature

```typescript
setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveBus;
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

[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)

总线图元对象

### setstate_linewidth

# ISCH\_PrimitiveBus.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：线宽

## Signature

```typescript
setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveBus;
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

[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)

总线图元对象

### toasync

# ISCH\_PrimitiveBus.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): ISCH_PrimitiveBus;
```


## Returns

[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)

总线图元对象

### tosync

# ISCH\_PrimitiveBus.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): ISCH_PrimitiveBus;
```


## Returns

[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)

总线图元对象
