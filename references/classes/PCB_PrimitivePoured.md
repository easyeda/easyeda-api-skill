# PCB\_PrimitivePoured class

PCB &amp; 封装 / 覆铜填充图元类

## 签名

```typescript
declare class PCB_PrimitivePoured implements IPCB_PrimitiveAPI 
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

[delete(primitiveIds)](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 删除覆铜填充


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 获取覆铜填充


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 获取覆铜填充


</td></tr>
<tr><td>

[getAll()](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有覆铜填充图元


</td></tr>
<tr><td>

[getAllPrimitiveId()](./PCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有覆铜填充的图元 ID


</td></tr>
</tbody></table>

---

## 方法详情

### delete

# PCB\_PrimitivePoured.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除覆铜填充

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitivePoured | Array<string> | Array<IPCB_PrimitivePoured>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;


</td><td>

覆铜填充的图元 ID 或覆铜填充图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitivePoured.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取覆铜填充

## 签名

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitivePoured | undefined>;
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

覆铜填充的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md) \| undefined&gt;

覆铜填充图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitivePoured.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取覆铜填充

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePoured>>;
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

覆铜填充的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

覆铜填充图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitivePoured.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有覆铜填充图元

## 签名

```typescript
getAll(): Promise<Array<IPCB_PrimitivePoured>>;
```


## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitivePoured](./IPCB_PrimitivePoured.md)<!-- -->&gt;&gt;

覆铜填充图元对象数组

### getallprimitiveid

# PCB\_PrimitivePoured.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有覆铜填充的图元 ID

## 签名

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

覆铜填充的图元 ID 数组
