# PCB\_PrimitiveRegion class

PCB &amp; 封装 / 禁止区域和约束区域图元类

## Signature

```typescript
declare class PCB_PrimitiveRegion implements IPCB_PrimitiveAPI 
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

[create(layer, complexPolygon, ruleType, regionName, lineWidth, primitiveLock)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 创建区域


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 删除区域


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 获取区域


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 获取区域


</td></tr>
<tr><td>

[getAll(layer, ruleType, primitiveLock)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有区域


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, ruleType, primitiveLock)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有区域的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** 修改区域


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveRegion.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建区域

## Signature

```typescript
create(layer: TPCB_LayersOfRegion, complexPolygon: IPCB_Polygon, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, regionName?: string, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveRegion | undefined>;
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

[TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)


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

ruleType


</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;


</td><td>

_(Optional)_ 区域规则类型


</td></tr>
<tr><td>

regionName


</td><td>

string


</td><td>

_(Optional)_ 区域名称


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

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md) \| undefined&gt;

区域图元对象

### delete

# PCB\_PrimitiveRegion.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除区域

## Signature

```typescript
delete(primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;


</td><td>

区域的图元 ID 或区域图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveRegion.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取区域

## Signature

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveRegion | undefined>;
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

区域的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md) \| undefined&gt;

区域图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveRegion.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取区域

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveRegion>>;
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

区域的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;&gt;

区域图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveRegion.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有区域

## Signature

```typescript
getAll(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveRegion>>;
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

[TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)


</td><td>

_(Optional)_ 层


</td></tr>
<tr><td>

ruleType


</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;


</td><td>

_(Optional)_ 区域规则类型，只会匹配所有规则类型均一致的图元


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

Promise&lt;Array&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;&gt;

区域图元对象数组

### getallprimitiveid

# PCB\_PrimitiveRegion.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有区域的图元 ID

## Signature

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<string>>;
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

[TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)


</td><td>

_(Optional)_ 层


</td></tr>
<tr><td>

ruleType


</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;


</td><td>

_(Optional)_ 区域规则类型，只会匹配所有规则类型均一致的图元


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

区域的图元 ID 数组

### modify

# PCB\_PrimitiveRegion.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改区域

## Signature

```typescript
modify(primitiveId: string | IPCB_PrimitiveRegion, property: {
        layer?: TPCB_LayersOfRegion;
        complexPolygon?: IPCB_Polygon;
        ruleType?: Array<EPCB_PrimitiveRegionRuleType>;
        regionName?: string;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveRegion | undefined>;
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

string \| [IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: [TPCB\_LayersOfRegion](../types/TPCB_LayersOfRegion.md)<!-- -->; complexPolygon?: [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; ruleType?: Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;; regionName?: string; lineWidth?: number; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md) \| undefined&gt;

区域图元对象，`undefined` 表示修改失败
