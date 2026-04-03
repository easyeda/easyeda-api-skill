# PCB\_PrimitiveFill class

PCB &amp; 封装 / 填充图元类

## 签名

```typescript
declare class PCB_PrimitiveFill implements IPCB_PrimitiveAPI 
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

[create(layer, complexPolygon, net, fillMode, lineWidth, primitiveLock)](./PCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 创建填充


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 删除填充


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 获取填充


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 获取填充


</td></tr>
<tr><td>

[getAll(layer, net, primitiveLock)](./PCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有填充


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, net, primitiveLock)](./PCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有填充的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveFill.md)


</td><td>


</td><td>

**_(BETA)_** 修改填充


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveFill.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建填充

## 签名

```typescript
create(layer: TPCB_LayersOfFill, complexPolygon: IPCB_Polygon, net?: string, fillMode?: EPCB_PrimitiveFillMode, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveFill | undefined>;
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

layer


</td><td>

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)


</td><td>

层


</td></tr>
<tr><td>

complexPolygon


</td><td>

[IPCB\_Polygon](./IPCB_Polygon.md)


</td><td>

复杂多边形对象


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_（可选）_ 网络名称


</td></tr>
<tr><td>

fillMode


</td><td>

[EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md)


</td><td>

_（可选）_ 填充模式


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

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

填充图元对象

### delete

# PCB\_PrimitiveFill.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除填充

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;


</td><td>

填充的图元 ID 或填充图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveFill.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取填充

## 签名

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveFill | undefined>;
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

填充的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

填充图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveFill.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取填充

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveFill>>;
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

填充的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;&gt;

填充图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveFill.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有填充

## 签名

```typescript
getAll(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveFill>>;
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

layer


</td><td>

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)


</td><td>

_（可选）_ 层


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_（可选）_ 网络名称


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

Promise&lt;Array&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;&gt;

填充图元对象数组

### getallprimitiveid

# PCB\_PrimitiveFill.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有填充的图元 ID

## 签名

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<string>>;
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

layer


</td><td>

[TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)


</td><td>

_（可选）_ 层


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

_（可选）_ 网络名称


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

填充的图元 ID 数组

### modify

# PCB\_PrimitiveFill.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改填充

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveFill, property: {
        layer?: TPCB_LayersOfFill;
        complexPolygon?: IPCB_Polygon;
        net?: string;
        fillMode?: EPCB_PrimitiveFillMode;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveFill | undefined>;
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

string \| [IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: [TPCB\_LayersOfFill](../types/TPCB_LayersOfFill.md)<!-- -->; complexPolygon?: [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; net?: string; fillMode?: [EPCB\_PrimitiveFillMode](../enums/EPCB_PrimitiveFillMode.md)<!-- -->; lineWidth?: number; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

填充图元对象，`undefined` 表示修改失败
