# PCB\_PrimitivePolyline class

PCB &amp; 封装 / 折线图元类

## Signature

```typescript
declare class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI 
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


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

## Signature

```typescript
create(net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePolyline | undefined>;
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

_(Optional)_ 线宽


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

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

折线图元对象

### delete

# PCB\_PrimitivePolyline.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除折线

## Signature

```typescript
delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;


</td><td>

折线的图元 ID 或折线图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitivePolyline.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取折线

## Signature

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;
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

折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

折线图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitivePolyline.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取折线

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>;
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

折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;&gt;

折线图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitivePolyline.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有折线

## Signature

```typescript
getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePolyline>>;
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

net


</td><td>

string


</td><td>

_(Optional)_ 网络名称


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)


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

Promise&lt;Array&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md)<!-- -->&gt;&gt;

折线图元对象数组

### getallprimitiveid

# PCB\_PrimitivePolyline.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有折线的图元 ID

## Signature

```typescript
getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;
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

net


</td><td>

string


</td><td>

_(Optional)_ 网络名称


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)


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

折线的图元 ID 数组

### modify

# PCB\_PrimitivePolyline.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改折线

## Signature

```typescript
modify(primitiveId: string | IPCB_PrimitivePolyline, property: {
        net?: string;
        layer?: TPCB_LayersOfLine;
        polygon?: IPCB_Polygon;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitivePolyline | undefined>;
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



## Returns

Promise&lt;[IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| undefined&gt;

折线图元对象
