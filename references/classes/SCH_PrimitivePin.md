# SCH\_PrimitivePin class

原理图 &amp; 符号 / 引脚图元类

## 签名

```typescript
declare class SCH_PrimitivePin implements ISCH_PrimitiveAPI 
```
**实现自：**[ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## 备注

引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 [器件引脚图元](./ISCH_PrimitiveComponentPin.md)

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[create(x, y, pinNumber, pinName, rotation, pinLength, pinColor, pinShape, pinType)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 创建引脚


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 删除引脚


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 获取引脚


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 获取引脚


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有引脚


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有引脚的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 修改引脚


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitivePin.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建引脚

## 签名

```typescript
create(x: number, y: number, pinNumber: string, pinName?: string, rotation?: number, pinLength?: number, pinColor?: string | null, pinShape?: ESCH_PrimitivePinShape, pinType?: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>;
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

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

pinNumber


</td><td>

string


</td><td>

引脚编号


</td></tr>
<tr><td>

pinName


</td><td>

string


</td><td>

_（可选）_ 引脚名称


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_（可选）_ 旋转角度，可选 `0` `90` `180` `270`


</td></tr>
<tr><td>

pinLength


</td><td>

number


</td><td>

_（可选）_ 引脚长度


</td></tr>
<tr><td>

pinColor


</td><td>

string \| null


</td><td>

_（可选）_ 引脚颜色，`null` 表示默认


</td></tr>
<tr><td>

pinShape


</td><td>

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)


</td><td>

_（可选）_ 引脚形状


</td></tr>
<tr><td>

pinType


</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)


</td><td>

_（可选）_ 引脚类型


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| undefined&gt;

引脚图元对象

### delete

# SCH\_PrimitivePin.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除引脚

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>;
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

string \| [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;


</td><td>

引脚的图元 ID 或引脚图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitivePin.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取引脚

## 签名

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;
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

引脚的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md) \| undefined&gt;

引脚图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitivePin.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取引脚

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin>>;
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

引脚的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)<!-- -->&gt;&gt;

引脚图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitivePin.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有引脚

## 签名

```typescript
getAll(): Promise<Array<ISCH_PrimitivePin>>;
```


## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;&gt;

引脚图元对象数组

### getallprimitiveid

# SCH\_PrimitivePin.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有引脚的图元 ID

## 签名

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

引脚的图元 ID 数组

### modify

# SCH\_PrimitivePin.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改引脚

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitivePin | ISCH_PrimitiveComponentPin, property: {
        x?: number;
        y?: number;
        pinNumber?: string;
        pinName?: string;
        rotation?: number;
        pinLength?: number;
        pinColor?: string | null;
        pinShape?: ESCH_PrimitivePinShape;
        pinType?: ESCH_PrimitivePinType;
    }): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;
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

string \| [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: number; y?: number; pinNumber?: string; pinName?: string; rotation?: number; pinLength?: number; pinColor?: string \| null; pinShape?: [ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)<!-- -->; pinType?: [ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)<!-- -->; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md) \| undefined&gt;

引脚图元对象
