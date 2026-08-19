# PCB\_PrimitivePour class

PCB &amp; 封装 / 覆铜边框图元类

## Signature

```typescript
export class PCB_PrimitivePour implements IPCB_PrimitiveAPI 
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

[create(net, layer, complexPolygon, pourFillMethod, preserveSilos, pourName, pourPriority, lineWidth, primitiveLock)](./PCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 创建覆铜边框


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 删除覆铜边框


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 获取覆铜边框


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 获取覆铜边框


</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./PCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有覆铜边框图元


</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./PCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有覆铜边框的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitivePour.md)


</td><td>


</td><td>

**_(BETA)_** 修改覆铜边框


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitivePour.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建覆铜边框

## Signature

```typescript
public create(net: string, layer: TPCB_LayersOfCopper, complexPolygon: IPCB_Polygon, pourFillMethod?: EPCB_PrimitivePourFillMethod, preserveSilos?: boolean, pourName?: string, pourPriority?: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePour | undefined>;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)


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

pourFillMethod


</td><td>

[EPCB\_PrimitivePourFillMethod](../enums/EPCB_PrimitivePourFillMethod.md)


</td><td>

_(Optional)_ 覆铜填充方法


</td></tr>
<tr><td>

preserveSilos


</td><td>

boolean


</td><td>

_(Optional)_ 是否保留孤岛


</td></tr>
<tr><td>

pourName


</td><td>

string


</td><td>

_(Optional)_ 覆铜名称


</td></tr>
<tr><td>

pourPriority


</td><td>

number


</td><td>

_(Optional)_ 覆铜优先级


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

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| undefined&gt;

覆铜边框图元对象

### delete

# PCB\_PrimitivePour.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除覆铜边框

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;


</td><td>

覆铜边框的图元 ID 或覆铜边框图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitivePour.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取覆铜边框

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitivePour | undefined>;
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

覆铜边框的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| undefined&gt;

覆铜边框图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitivePour.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取覆铜边框

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePour>>;
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

覆铜边框的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;&gt;

覆铜边框图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitivePour.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有覆铜边框图元

## Signature

```typescript
public getAll(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePour>>;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)


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

Promise&lt;Array&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)<!-- -->&gt;&gt;

覆铜边框图元对象数组

### getallprimitiveid

# PCB\_PrimitivePour.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有覆铜边框的图元 ID

## Signature

```typescript
public getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<string>>;
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

[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)


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

覆铜边框的图元 ID 数组

### modify

# PCB\_PrimitivePour.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改覆铜边框

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitivePour, property: { net?: undefined | string; layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.BOTTOM | EPCB_LayerId.INNER_1 | EPCB_LayerId.INNER_2 | EPCB_LayerId.INNER_3 | EPCB_LayerId.INNER_4 | EPCB_LayerId.INNER_5 | EPCB_LayerId.INNER_6 | EPCB_LayerId.INNER_7 | EPCB_LayerId.INNER_8 | EPCB_LayerId.INNER_9 | EPCB_LayerId.INNER_10 | EPCB_LayerId.INNER_11 | EPCB_LayerId.INNER_12 | EPCB_LayerId.INNER_13 | EPCB_LayerId.INNER_14 | EPCB_LayerId.INNER_15 | EPCB_LayerId.INNER_16 | EPCB_LayerId.INNER_17 | EPCB_LayerId.INNER_18 | EPCB_LayerId.INNER_19 | EPCB_LayerId.INNER_20 | EPCB_LayerId.INNER_21 | EPCB_LayerId.INNER_22 | EPCB_LayerId.INNER_23 | EPCB_LayerId.INNER_24 | EPCB_LayerId.INNER_25 | EPCB_LayerId.INNER_26 | EPCB_LayerId.INNER_27 | EPCB_LayerId.INNER_28 | EPCB_LayerId.INNER_29 | EPCB_LayerId.INNER_30; complexPolygon?: undefined | IPCB_Polygon; pourFillMethod?: undefined | EPCB_PrimitivePourFillMethod.GRID45 | EPCB_PrimitivePourFillMethod.GRID | EPCB_PrimitivePourFillMethod.SOLID; preserveSilos?: undefined | false | true; pourName?: undefined | string; pourPriority?: undefined | number; lineWidth?: undefined | number; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitivePour | undefined>;
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

string \| [IPCB\_PrimitivePour](./IPCB_PrimitivePour.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: undefined \| string; layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_30](../enums/EPCB_LayerId.md)<!-- -->; complexPolygon?: undefined \| [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; pourFillMethod?: undefined \| [EPCB\_PrimitivePourFillMethod.GRID45](../enums/EPCB_PrimitivePourFillMethod.md) \| [EPCB\_PrimitivePourFillMethod.GRID](../enums/EPCB_PrimitivePourFillMethod.md) \| [EPCB\_PrimitivePourFillMethod.SOLID](../enums/EPCB_PrimitivePourFillMethod.md)<!-- -->; preserveSilos?: undefined \| false \| true; pourName?: undefined \| string; pourPriority?: undefined \| number; lineWidth?: undefined \| number; primitiveLock?: undefined \| false \| true }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitivePour](./IPCB_PrimitivePour.md) \| undefined&gt;

覆铜边框图元对象，`undefined` 表示修改失败
