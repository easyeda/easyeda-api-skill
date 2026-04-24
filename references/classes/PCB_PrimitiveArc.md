# PCB\_PrimitiveArc class

PCB &amp; 封装 / 圆弧线图元类

## Signature

```typescript
declare class PCB_PrimitiveArc implements IPCB_PrimitiveAPI 
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Remarks

直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(net, layer, startX, startY, endX, endY, arcAngle, lineWidth, interactiveMode, primitiveLock)](./PCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 创建圆弧线


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 删除圆弧线


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 获取圆弧线


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 获取圆弧线


</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有圆弧线


</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有圆弧线的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveArc.md)


</td><td>


</td><td>

**_(BETA)_** 修改圆弧线


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveArc.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建圆弧线

## Signature

```typescript
create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, arcAngle: number, lineWidth?: number, interactiveMode?: EPCB_PrimitiveArcInteractiveMode, primitiveLock?: boolean): Promise<IPCB_PrimitiveArc | undefined>;
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

arcAngle


</td><td>

number


</td><td>

圆弧角度


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

_(Optional)_ 线宽


</td></tr>
<tr><td>

interactiveMode


</td><td>

[EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)


</td><td>

_(Optional)_ 交互模式


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

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| undefined&gt;

圆弧线图元对象

### delete

# PCB\_PrimitiveArc.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除圆弧线

## Signature

```typescript
delete(primitiveIds: string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;


</td><td>

圆弧线的图元 ID 或圆弧线图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取圆弧线

## Signature

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveArc | undefined>;
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

圆弧线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| undefined&gt;

圆弧线图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveArc.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取圆弧线

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveArc>>;
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

圆弧线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

圆弧线图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveArc.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有圆弧线

## Signature

```typescript
getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveArc>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)<!-- -->&gt;&gt;

圆弧线图元对象数组

### getallprimitiveid

# PCB\_PrimitiveArc.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有圆弧线的图元 ID

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

圆弧线的图元 ID 数组

### modify

# PCB\_PrimitiveArc.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改圆弧线

## Signature

```typescript
modify(primitiveId: string | IPCB_PrimitiveArc, property: {
        net?: string;
        layer?: TPCB_LayersOfLine;
        startX?: number;
        startY?: number;
        endX?: number;
        endY?: number;
        arcAngle?: number;
        lineWidth?: number;
        interactiveMode?: EPCB_PrimitiveArcInteractiveMode;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveArc | undefined>;
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

string \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: string; layer?: [TPCB\_LayersOfLine](../types/TPCB_LayersOfLine.md)<!-- -->; startX?: number; startY?: number; endX?: number; endY?: number; arcAngle?: number; lineWidth?: number; interactiveMode?: [EPCB\_PrimitiveArcInteractiveMode](../enums/EPCB_PrimitiveArcInteractiveMode.md)<!-- -->; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| undefined&gt;

圆弧线图元对象
