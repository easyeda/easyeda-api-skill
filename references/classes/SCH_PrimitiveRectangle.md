# SCH\_PrimitiveRectangle class

原理图 &amp; 符号 / 矩形图元类

## 签名

```typescript
declare class SCH_PrimitiveRectangle implements ISCH_PrimitiveAPI 
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

[create(topLeftX, topLeftY, width, height, cornerRadius, rotation, color, fillColor, lineWidth, lineType, fillStyle)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

创建矩形


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

删除矩形


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 获取矩形


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 获取矩形


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取所有矩形


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

获取所有矩形的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveRectangle.md)


</td><td>


</td><td>

**_(BETA)_** 修改矩形


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveRectangle.create() method

创建矩形

## 签名

```typescript
create(topLeftX: number, topLeftY: number, width: number, height: number, cornerRadius?: number, rotation?: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveRectangle | undefined>;
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

topLeftX


</td><td>

number


</td><td>

左上点 X


</td></tr>
<tr><td>

topLeftY


</td><td>

number


</td><td>

左上点 Y


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

宽


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

高


</td></tr>
<tr><td>

cornerRadius


</td><td>

number


</td><td>

_（可选）_ 圆角半径


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_（可选）_ 旋转角度，绕左上点旋转，可选 `0` `90` `180` `270`


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
<tr><td>

fillStyle


</td><td>

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null


</td><td>

_（可选）_ 填充样式，`null` 表示默认


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| undefined&gt;

矩形图元对象

### delete

# SCH\_PrimitiveRectangle.delete() method

删除矩形

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;


</td><td>

矩形的图元 ID 或矩形图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveRectangle.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取矩形

## 签名

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveRectangle | undefined>;
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

矩形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| undefined&gt;

矩形图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveRectangle.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取矩形

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveRectangle>>;
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

矩形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;&gt;

矩形图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveRectangle.getAll() method

获取所有矩形

## 签名

```typescript
getAll(): Promise<Array<ISCH_PrimitiveRectangle>>;
```


## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;&gt;

矩形图元对象数组

### getallprimitiveid

# SCH\_PrimitiveRectangle.getAllPrimitiveId() method

获取所有矩形的图元 ID

## 签名

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

矩形的图元 ID 数组

### modify

# SCH\_PrimitiveRectangle.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改矩形

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveRectangle, property: {
        topLeftX?: number;
        topLeftY?: number;
        width?: number;
        height?: number;
        cornerRadius?: number;
        rotation?: number;
        color?: string | null;
        fillColor?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
        fillStyle?: ESCH_PrimitiveFillStyle | null;
    }): Promise<ISCH_PrimitiveRectangle | undefined>;
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

string \| [ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ topLeftX?: number; topLeftY?: number; width?: number; height?: number; cornerRadius?: number; rotation?: number; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null; fillStyle?: [ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md) \| undefined&gt;

矩形图元对象
