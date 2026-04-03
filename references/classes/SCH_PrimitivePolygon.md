# SCH\_PrimitivePolygon class

原理图 &amp; 符号 / 多边形（折线）图元类

## 签名

```typescript
declare class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI 
```
**实现自：**[ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[create(line, color, fillColor, lineWidth, lineType)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 创建多边形


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 删除多边形


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 获取多边形


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 获取多边形


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有多边形


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有多边形的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitivePolygon.md)


</td><td>


</td><td>

**_(BETA)_** 修改多边形


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitivePolygon.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建多边形

## 签名

```typescript
create(line: Array<number>, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitivePolygon | undefined>;
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

line


</td><td>

Array&lt;number&gt;


</td><td>

坐标组，连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_（可选）_ 颜色，`null` 表示默认


</td></tr>
<tr><td>

fillColor


</td><td>

string \| null


</td><td>

_（可选）_ 填充颜色，`none` 表示无填充，`null` 表示默认


</td></tr>
<tr><td>

lineWidth


</td><td>

number \| null


</td><td>

_（可选）_ 线宽，范围 `1-10`<!-- -->，`null` 表示默认


</td></tr>
<tr><td>

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

_（可选）_ 线型，`null` 表示默认


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

多边形图元对象

### delete

# SCH\_PrimitivePolygon.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除多边形

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;
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

primitiveIds


</td><td>

string \| [ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;


</td><td>

多边形的图元 ID 或多边形图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitivePolygon.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取多边形

## 签名

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitivePolygon | undefined>;
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

primitiveIds


</td><td>

string


</td><td>

多边形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

多边形图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitivePolygon.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取多边形

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePolygon>>;
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

primitiveIds


</td><td>

Array&lt;string&gt;


</td><td>

多边形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;&gt;

多边形图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitivePolygon.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有多边形

## 签名

```typescript
getAll(): Promise<Array<ISCH_PrimitivePolygon>>;
```


## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;&gt;

多边形图元对象数组

### getallprimitiveid

# SCH\_PrimitivePolygon.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有多边形的图元 ID

## 签名

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

多边形的图元 ID 数组

### modify

# SCH\_PrimitivePolygon.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改多边形

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitivePolygon, property: {
        line?: Array<number>;
        color?: string | null;
        fillColor?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitivePolygon | undefined>;
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

primitiveId


</td><td>

string \| [ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ line?: Array&lt;number&gt;; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md) \| undefined&gt;

多边形图元对象
