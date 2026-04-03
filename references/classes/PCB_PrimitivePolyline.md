# PCB\_PrimitivePolyline class

PCB &amp; 封装 / 折线图元类

## 签名

```typescript
declare class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI 
```
**实现自：**[IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[create(net, layer, polygon, lineWidth, primitiveLock)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

创建折线


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** 删除折线


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** 获取折线


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** 获取折线


</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有折线


</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有折线的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitivePolyline.md)


</td><td>


</td><td>

**_(BETA)_** 修改折线


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitivePolyline.create() method

创建折线

## 签名

```typescript
create(net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePolyline | undefined>;
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

polygon


</td><td>

[IPCB\_Polygon](./IPCB_Polygon.md)


</td><td>

单多边形对象


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

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

折线图元对象

### delete

# PCB\_PrimitivePolyline.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除折线

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;


</td><td>

折线的图元 ID 或折线图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitivePolyline.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取折线

## 签名

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;
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

折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

折线图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitivePolyline.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取折线

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>;
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

折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;&gt;

折线图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitivePolyline.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有折线

## 签名

```typescript
getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePolyline>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;&gt;

折线图元对象数组

### getallprimitiveid

# PCB\_PrimitivePolyline.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有折线的图元 ID

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

# PCB\_PrimitivePolyline.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改折线

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitivePolyline, property: {
        net?: string;
        layer?: TPCB_LayersOfLine;
        polygon?: IPCB_Polygon;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitivePolyline | undefined>;
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

string \| [IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: string; layer?: [TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)<!-- -->; polygon?: [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; lineWidth?: number; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

折线图元对象
