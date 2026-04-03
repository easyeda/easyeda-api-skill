# SCH\_PrimitiveWire class

原理图 &amp; 符号 / 导线图元类

## 签名

```typescript
declare class SCH_PrimitiveWire implements ISCH_PrimitiveAPI 
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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建导线

## 签名

```typescript
create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;
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

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线，如若多段线彼此无任何连接则创建将会失败


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_（可选）_ 网络名称，如若未指定，则遵循： 1. 没有坐标落在任何图元上，则默认为空网络； 2. 有一个坐标点在某个网络的图元上，则跟随该图元的网络； 3. 有多个坐标点在多个不同网络的图元上，则创建失败

如若已指定，则遵循： 1. 有一个或多个坐标点在其他网络的图元上，且其他图元并未显式（通常指的是包含网络标签或网络端口）指定网络，则其他图元跟随指定的网络； 2. 如若其他图元指定了网络，则创建失败


</td></tr>
<tr><td>

color


</td><td>

string \| null


</td><td>

_（可选）_ 导线颜色，`null` 表示默认


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

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

导线图元对象

### delete

# SCH\_PrimitiveWire.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除导线

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;


</td><td>

导线的图元 ID 或导线图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveWire.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取导线

## 签名

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;
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

导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

导线图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveWire.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取导线

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

导线图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveWire.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有导线

## 签名

```typescript
getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

_（可选）_ 网络名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;&gt;

导线图元对象数组

### getallprimitiveid

# SCH\_PrimitiveWire.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有导线的图元 ID

## 签名

```typescript
getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>;
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

net


</td><td>

string \| Array&lt;string&gt;


</td><td>

_（可选）_ 网络名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;string&gt;&gt;

导线的图元 ID 数组

### modify

# SCH\_PrimitiveWire.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改导线

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveWire, property: {
        line?: Array<number> | Array<Array<number>>;
        net?: string;
        color?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitiveWire | undefined>;
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



## 返回值

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md) \| undefined&gt;

导线图元对象
