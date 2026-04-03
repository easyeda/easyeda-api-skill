# SCH\_PrimitiveBus class

原理图 &amp; 符号 / 总线图元类

## 签名

```typescript
declare class SCH_PrimitiveBus implements ISCH_PrimitiveAPI 
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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建总线

## 签名

```typescript
create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;
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

_（可选）_ 总线颜色，`null` 表示默认


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

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

总线图元对象

### delete

# SCH\_PrimitiveBus.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除总线

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;


</td><td>

总线的图元 ID 或总线图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveBus.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取总线

## 签名

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;
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

总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

总线图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveBus.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取总线

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;
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

总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

总线图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveBus.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有总线

## 签名

```typescript
getAll(): Promise<Array<ISCH_PrimitiveBus>>;
```


## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md)<!-- -->&gt;&gt;

总线图元对象数组

### getallprimitiveid

# SCH\_PrimitiveBus.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有总线的图元 ID

## 签名

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

总线的图元 ID 数组

### modify

# SCH\_PrimitiveBus.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改总线

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveBus, property: {
        busName?: string;
        line?: Array<number> | Array<Array<number>>;
        color?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitiveBus | undefined>;
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



## 返回值

Promise&lt;[ISCH\_PrimitiveBus](./ISCH_PrimitiveBus.md) \| undefined&gt;

总线图元对象
