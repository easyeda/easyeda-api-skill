# PCB\_PrimitiveObject class

PCB &amp; 封装 / 二进制内嵌对象图元类

## Signature

```typescript
declare class PCB_PrimitiveObject implements IPCB_PrimitiveAPI 
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Remarks

彩色丝印图像属于二进制内嵌对象，需要使用二进制内嵌对象的方法创建和修改

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(layer, topLeftX, topLeftY, binaryData, width, height, rotation, mirror, fileName, primitiveLock)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 创建二进制内嵌对象


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 删除二进制内嵌对象


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取二进制内嵌对象


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取二进制内嵌对象


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有二进制内嵌对象


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有二进制内嵌对象的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 修改二进制内嵌对象


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveObject.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建二进制内嵌对象

## Signature

```typescript
create(layer: TPCB_LayersOfObject, topLeftX: number, topLeftY: number, binaryData: string, width: number, height: number, rotation?: number, mirror?: boolean, fileName?: string, primitiveLock?: boolean): Promise<IPCB_PrimitiveObject | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

layer


</td><td>

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)


</td><td>

层


</td></tr>
<tr><td>

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

binaryData


</td><td>

string


</td><td>

二进制数据


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

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否水平镜像


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ 文件名


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| undefined&gt;

- 二进制内嵌对象图元对象

### delete

# PCB\_PrimitiveObject.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除二进制内嵌对象

## Signature

```typescript
delete(primitiveIds: string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

primitiveIds


</td><td>

string \| [IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;


</td><td>

二进制内嵌对象的图元 ID 或二进制内嵌对象图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取二进制内嵌对象

## Signature

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveObject | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

primitiveIds


</td><td>

string


</td><td>

二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| undefined&gt;

二进制内嵌对象图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取二进制内嵌对象

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveObject>>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

primitiveIds


</td><td>

Array&lt;string&gt;


</td><td>

二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;&gt;

二进制内嵌对象图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveObject.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有二进制内嵌对象

## Signature

```typescript
getAll(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveObject>>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

layer


</td><td>

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)


</td><td>

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;&gt;

二进制内嵌对象图元对象数组

### getallprimitiveid

# PCB\_PrimitiveObject.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有二进制内嵌对象的图元 ID

## Signature

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<string>>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

layer


</td><td>

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)


</td><td>

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

二进制内嵌对象的图元 ID 数组

### modify

# PCB\_PrimitiveObject.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改二进制内嵌对象

## Signature

```typescript
modify(primitiveId: string | IPCB_PrimitiveObject, property: {
        layer?: TPCB_LayersOfObject;
        topLeftX?: number;
        topLeftY?: number;
        binaryData?: string;
        width?: number;
        height?: number;
        rotation?: number;
        mirror?: boolean;
        fileName?: string;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveObject | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

primitiveId


</td><td>

string \| [IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: [TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)<!-- -->; topLeftX?: number; topLeftY?: number; binaryData?: string; width?: number; height?: number; rotation?: number; mirror?: boolean; fileName?: string; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md) \| undefined&gt;

二进制内嵌对象图元对象，`undefined` 表示修改失败
