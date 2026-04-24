# SCH\_PrimitiveCircle class

原理图 &amp; 符号 / 圆图元类

## Signature

```typescript
declare class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(centerX, centerY, radius, color, fillColor, lineWidth, lineType, fillStyle)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 创建圆


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 删除圆


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 获取圆


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 获取圆


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有圆


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有圆的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveCircle.md)


</td><td>


</td><td>

**_(BETA)_** 修改圆


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveCircle.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建圆

## Signature

```typescript
create(centerX: number, centerY: number, radius: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle>;
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

centerX


</td><td>

number


</td><td>

圆心 X


</td></tr>
<tr><td>

centerY


</td><td>

number


</td><td>

圆心 Y


</td></tr>
<tr><td>

radius


</td><td>

number


</td><td>

半径


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ 颜色，`null` 表示默认


</td></tr>
<tr><td>

fillColor


</td><td>

string \| null


</td><td>

_(Optional)_ 填充颜色，`none` 表示无填充，`null` 表示默认


</td></tr>
<tr><td>

lineWidth


</td><td>

number \| null


</td><td>

_(Optional)_ 线宽，范围 `1-10`<!-- -->，`null` 表示默认


</td></tr>
<tr><td>

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

_(Optional)_ 线型，`null` 表示默认


</td></tr>
<tr><td>

fillStyle


</td><td>

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null


</td><td>

_(Optional)_ 填充样式，`null` 表示默认


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;

圆图元对象

### delete

# SCH\_PrimitiveCircle.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除圆

## Signature

```typescript
delete(primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>;
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

primitiveIds


</td><td>

string \| [ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;


</td><td>

圆的图元 ID 或圆图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveCircle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取圆

## Signature

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>;
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

primitiveIds


</td><td>

string


</td><td>

圆的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

圆图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveCircle.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取圆

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>;
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

primitiveIds


</td><td>

Array&lt;string&gt;


</td><td>

圆的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;&gt;

圆图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveCircle.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有圆

## Signature

```typescript
getAll(): Promise<Array<ISCH_PrimitiveCircle>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;&gt;

圆图元对象数组

### getallprimitiveid

# SCH\_PrimitiveCircle.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有圆的图元 ID

## Signature

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

圆的图元 ID 数组

### modify

# SCH\_PrimitiveCircle.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改圆

## Signature

```typescript
modify(primitiveId: string | ISCH_PrimitiveCircle, property: {
        centerX?: number;
        centerY?: number;
        radius?: number;
        color?: string | null;
        fillColor?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
        fillStyle?: ESCH_PrimitiveFillStyle | null;
    }): Promise<ISCH_PrimitiveCircle | undefined>;
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

primitiveId


</td><td>

string \| [ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ centerX?: number; centerY?: number; radius?: number; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null; fillStyle?: [ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md) \| undefined&gt;

圆图元对象
