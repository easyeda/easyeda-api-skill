# SCH\_PrimitiveBus class

原理图 &amp; 符号 / 总线图元类

## Signature

```typescript
declare class SCH_PrimitiveBus implements ISCH_PrimitiveAPI 
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

[create(busName, line, color, lineWidth, lineType)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 创建总线


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 删除总线


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 获取总线


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 获取总线


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有总线


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有总线的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveBus.md)


</td><td>


</td><td>

**_(BETA)_** 修改总线


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveBus.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建总线

## Signature

```typescript
create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;
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
<tr><td>

line


</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线，如若多段线彼此无任何连接则创建将会失败


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ 总线颜色，`null` 表示默认


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
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

总线图元对象

### delete

# SCH\_PrimitiveBus.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除总线

## Signature

```typescript
delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;


</td><td>

总线的图元 ID 或总线图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveBus.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取总线

## Signature

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;
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

总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

总线图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveBus.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取总线

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;
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

总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

总线图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveBus.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有总线

## Signature

```typescript
getAll(): Promise<Array<ISCH_PrimitiveBus>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

总线图元对象数组

### getallprimitiveid

# SCH\_PrimitiveBus.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有总线的图元 ID

## Signature

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

总线的图元 ID 数组

### modify

# SCH\_PrimitiveBus.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改总线

## Signature

```typescript
modify(primitiveId: string | ISCH_PrimitiveBus, property: {
        busName?: string;
        line?: Array<number> | Array<Array<number>>;
        color?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitiveBus | undefined>;
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

string \| [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)


</td><td>

总线的图元 ID 或总线图元对象


</td></tr>
<tr><td>

property


</td><td>

{ busName?: string; line?: Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;; color?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

总线图元对象
