# SCH\_PrimitiveWire class

原理图 &amp; 符号 / 导线图元类

## Signature

```typescript
declare class SCH_PrimitiveWire implements ISCH_PrimitiveAPI 
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

[create(line, net, color, lineWidth, lineType)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 创建导线


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 删除导线


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 获取导线


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 获取导线


</td></tr>
<tr><td>

[getAll(net)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有导线


</td></tr>
<tr><td>

[getAllPrimitiveId(net)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有导线的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 修改导线


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveWire.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建导线

## Signature

```typescript
create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;
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

多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线，如若多段线彼此无任何连接则创建将会失败


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_(Optional)_ 网络名称，如若未指定，则遵循： 1. 没有坐标落在任何图元上，则默认为空网络； 2. 有一个坐标点在某个网络的图元上，则跟随该图元的网络； 3. 有多个坐标点在多个不同网络的图元上，则创建失败

如若已指定，则遵循： 1. 有一个或多个坐标点在其他网络的图元上，且其他图元并未显式（通常指的是包含网络标签或网络端口）指定网络，则其他图元跟随指定的网络； 2. 如若其他图元指定了网络，则创建失败


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_(Optional)_ 导线颜色，`null` 表示默认


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

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

导线图元对象

### delete

# SCH\_PrimitiveWire.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除导线

## Signature

```typescript
delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;


</td><td>

导线的图元 ID 或导线图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveWire.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取导线

## Signature

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;
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

导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

导线图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveWire.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取导线

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

导线图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveWire.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有导线

## Signature

```typescript
getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ 网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

导线图元对象数组

### getallprimitiveid

# SCH\_PrimitiveWire.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有导线的图元 ID

## Signature

```typescript
getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>;
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

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ 网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

导线的图元 ID 数组

### modify

# SCH\_PrimitiveWire.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改导线

## Signature

```typescript
modify(primitiveId: string | ISCH_PrimitiveWire, property: {
        line?: Array<number> | Array<Array<number>>;
        net?: string;
        color?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitiveWire | undefined>;
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

string \| [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)


</td><td>

导线的图元 ID 或导线图元对象


</td></tr>
<tr><td>

property


</td><td>

{ line?: Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;; net?: string; color?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

导线图元对象
