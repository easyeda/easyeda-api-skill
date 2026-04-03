# PCB\_PrimitiveVia class

PCB &amp; 封装 / 过孔图元类

## 签名

```typescript
declare class PCB_PrimitiveVia implements IPCB_PrimitiveAPI 
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

[create(net, x, y, holeDiameter, diameter, viaType, designRuleBlindViaName, solderMaskExpansion, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

创建过孔


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 删除过孔


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 获取过孔


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 获取过孔


</td></tr>
<tr><td>

[getAll(net, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有过孔


</td></tr>
<tr><td>

[getAllPrimitiveId(net, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有过孔图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** 修改过孔


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveVia.create() method

创建过孔

## 签名

```typescript
create(net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType?: EPCB_PrimitiveViaType, designRuleBlindViaName?: string | null, solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, primitiveLock?: boolean): Promise<IPCB_PrimitiveVia | undefined>;
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

holeDiameter


</td><td>

number


</td><td>

孔径


</td></tr>
<tr><td>

diameter


</td><td>

number


</td><td>

外径


</td></tr>
<tr><td>

viaType


</td><td>

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)


</td><td>

_（可选）_ 过孔类型


</td></tr>
<tr><td>

designRuleBlindViaName


</td><td>

string \| null


</td><td>

_（可选）_ 盲埋孔设计规则项名称，定义过孔的开始层与结束层，`null` 表示非盲埋孔


</td></tr>
<tr><td>

solderMaskExpansion


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

_（可选）_ 阻焊/助焊扩展，`null` 表示跟随规则


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

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

过孔图元对象

### delete

# PCB\_PrimitiveVia.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除过孔

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;


</td><td>

过孔的图元 ID 或过孔图元对象


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveVia.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取过孔

## 签名

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>;
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

过孔的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

过孔图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveVia.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取过孔

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>;
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

过孔的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

过孔图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveVia.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有过孔

## 签名

```typescript
getAll(net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveVia>>;
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

primitiveLock


</td><td>

boolean


</td><td>

_（可选）_ 是否锁定


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

过孔图元对象数组

### getallprimitiveid

# PCB\_PrimitiveVia.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有过孔图元 ID

## 签名

```typescript
getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>;
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

primitiveLock


</td><td>

boolean


</td><td>

_（可选）_ 是否锁定


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;string&gt;&gt;

过孔的图元 ID 数组

### modify

# PCB\_PrimitiveVia.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改过孔

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveVia, property: {
        net?: string;
        x?: number;
        y?: number;
        holeDiameter?: number;
        diameter?: number;
        viaType?: EPCB_PrimitiveViaType;
        designRuleBlindViaName?: string | null;
        solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveVia | undefined>;
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

string \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: string; x?: number; y?: number; holeDiameter?: number; diameter?: number; viaType?: [EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)<!-- -->; designRuleBlindViaName?: string \| null; solderMaskExpansion?: [IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

过孔图元对象
