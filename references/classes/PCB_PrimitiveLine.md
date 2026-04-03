# PCB\_PrimitiveLine class

PCB &amp; 封装 / 直线图元类

## 签名

```typescript
declare class PCB_PrimitiveLine implements IPCB_PrimitiveAPI 
```
**实现自：**[IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## 备注

直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[create(net, layer, startX, startY, endX, endY, lineWidth, primitiveLock)](./PCB_PrimitiveLine.md)


</td><td>


</td><td>

创建直线


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveLine.md)


</td><td>


</td><td>

**_(BETA)_** 删除直线


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveLine.md)


</td><td>


</td><td>

**_(BETA)_** 获取直线


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveLine.md)


</td><td>


</td><td>

**_(BETA)_** 获取直线


</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitiveLine.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有直线


</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitiveLine.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有直线的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveLine.md)


</td><td>


</td><td>

**_(BETA)_** 修改直线


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveLine.create() method

创建直线

## 签名

```typescript
create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveLine | undefined>;
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

string


</td><td>

网络名称


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)


</td><td>

层


</td></tr>
<tr><td>

startX


</td><td>

number


</td><td>

起始位置 X


</td></tr>
<tr><td>

startY


</td><td>

number


</td><td>

起始位置 Y


</td></tr>
<tr><td>

endX


</td><td>

number


</td><td>

终止位置 X


</td></tr>
<tr><td>

endY


</td><td>

number


</td><td>

终止位置 Y


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

_（可选）_ 线宽


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_（可选）_ 是否锁定


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| undefined&gt;

直线图元对象

### delete

# PCB\_PrimitiveLine.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除直线

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;


</td><td>

直线的图元 ID 或直线图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveLine.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取直线

## 签名

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveLine | undefined>;
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

直线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| undefined&gt;

直线图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveLine.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取直线

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveLine>>;
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

直线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;&gt;

直线图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveLine.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有直线

## 签名

```typescript
getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveLine>>;
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

string


</td><td>

_（可选）_ 网络名称


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)


</td><td>

_（可选）_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_（可选）_ 是否锁定


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)<!-- -->&gt;&gt;

直线图元对象数组

### getallprimitiveid

# PCB\_PrimitiveLine.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有直线的图元 ID

## 签名

```typescript
getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;
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

string


</td><td>

_（可选）_ 网络名称


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)


</td><td>

_（可选）_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_（可选）_ 是否锁定


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;string&gt;&gt;

折线的图元 ID 数组

### modify

# PCB\_PrimitiveLine.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改直线

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveLine, property: {
        net?: string;
        layer?: TPCB_LayersOfLine;
        startX?: number;
        startY?: number;
        endX?: number;
        endY?: number;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveLine | undefined>;
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

string \| [IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: string; layer?: [TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)<!-- -->; startX?: number; startY?: number; endX?: number; endY?: number; lineWidth?: number; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| undefined&gt;

直线图元对象
