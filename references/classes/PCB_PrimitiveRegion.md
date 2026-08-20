# PCB\_PrimitiveRegion class

PCB &amp; footprint / forbidden region and constrained region primitive class

## Signature

```typescript
export class PCB_PrimitiveRegion implements IPCB_PrimitiveAPI 
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

**_(BETA)_** Create Region


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** Delete Region


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** Get Region


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** Get Region


</td></tr>
<tr><td>

[getAll(layer, ruleType, primitiveLock)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** Get all Region


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, ruleType, primitiveLock)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** Get all Region primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveRegion.md)


</td><td>


</td><td>

**_(BETA)_** Modify Region


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveRegion.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Region

## Signature

```typescript
public create(layer: TPCB_LayersOfRegion, complexPolygon: IPCB_Polygon, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, regionName?: string, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveRegion | undefined>;
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

Layer


</td></tr>
<tr><td>

complexPolygon


</td><td>

[IPCB\_Polygon](./IPCB_Polygon.md)


</td><td>

Complex polygon object


</td></tr>
<tr><td>

ruleType


</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;


</td><td>

_(Optional)_ Region rule type


</td></tr>
<tr><td>

regionName


</td><td>

string


</td><td>

_(Optional)_ Region name


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

_(Optional)_ Line width


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md) \| undefined&gt;

Region primitive object

## Example


```javascript
// 1. 生成随机起点坐标，避免与画布上已有的区域重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 用 pcb_MathPolygon.createPolygon 构造矩形边界：宽 500、高 300
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);

// 3. 在顶层铜层创建禁止区域：规则 [2, 5] 即禁止元件 + 禁止布线，线宽 10mil，不锁定
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, [2, 5], '嘉立创示例_禁布区', 10, false);

// 4. 创建类保留现场，不删除图元
console.log('primitiveId:', region.getState_PrimitiveId());
console.log('primitiveType:', region.getState_PrimitiveType());
console.log('layer:', region.getState_Layer());
console.log('ruleType:', region.getState_RuleType());
console.log('regionName:', region.getState_RegionName());
```

### delete

# PCB\_PrimitiveRegion.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Region

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>;
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

Region primitive ID or Region primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试区域（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polygon2 = eda.pcb_MathPolygon.createPolygon(['R', x, y + 500, 500, 300, 0, 0]);
const region1 = await eda.pcb_PrimitiveRegion.create(1, polygon1, [2], '嘉立创示例_删除A');
const region2 = await eda.pcb_PrimitiveRegion.create(1, polygon2, [5], '嘉立创示例_删除B');

// 2. 记录删除前的区域数量
const beforeCount = (await eda.pcb_PrimitiveRegion.getAll()).length;

// 3. 以 ID 数组形式批量删除两个区域
const deleted = await eda.pcb_PrimitiveRegion.delete([region1.getState_PrimitiveId(), region2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveRegion.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveRegion.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Region

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitiveRegion | undefined>;
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

Region primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md) \| undefined&gt;

Region primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两个测试区域（随机坐标避免重合），分别用不同规则便于区分
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon1 = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const polygon2 = eda.pcb_MathPolygon.createPolygon(['R', x, y + 500, 500, 300, 0, 0]);
const region1 = await eda.pcb_PrimitiveRegion.create(1, polygon1, [2], '嘉立创示例_区域A');
const region2 = await eda.pcb_PrimitiveRegion.create(1, polygon2, [5], '嘉立创示例_区域B');

// 2. 传单个 ID 字符串，返回单个区域对象
const single = await eda.pcb_PrimitiveRegion.get(region1.getState_PrimitiveId());

// 3. 传 ID 数组，返回区域对象数组
const arr = await eda.pcb_PrimitiveRegion.get([region1.getState_PrimitiveId(), region2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveRegion.delete([region1.getState_PrimitiveId(), region2.getState_PrimitiveId()]);

console.log('single ruleType:', single.getState_RuleType());
console.log('array length:', arr.length);
console.log('region2 ruleType:', arr[1].getState_RuleType());
```

### get_1

# PCB\_PrimitiveRegion.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Region

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveRegion>>;
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

Region primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;&gt;

Region primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveRegion.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Region

## Signature

```typescript
public getAll(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveRegion>>;
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

_(Optional)_ Layer


</td></tr>
<tr><td>

ruleType


</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;


</td><td>

_(Optional)_ Region rule type. Only primitives whose rule types are all consistent will be matched


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md)<!-- -->&gt;&gt;

Array of Region primitive objects

## Example


```javascript
// 1. 创建一个顶层测试区域作为过滤目标：规则 [2] 即禁止元件（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, [2], '嘉立创示例_过滤目标');
const regionId = region.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部区域
const all = await eda.pcb_PrimitiveRegion.getAll();

// 3. 按层过滤：只取顶层（1）的区域
const topLayer = await eda.pcb_PrimitiveRegion.getAll(1);

// 4. 按规则类型过滤：只取规则为 [2]（禁止元件）的区域，要求规则完全一致
const noComponents = await eda.pcb_PrimitiveRegion.getAll(undefined, [2]);

// 5. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveRegion.delete([regionId]);

console.log('total regions:', all.length);
console.log('top layer regions:', topLayer.length);
console.log('no-component regions:', noComponents.length);
console.log('marker region found:', noComponents.some(r => r.getState_PrimitiveId() === regionId));
```

### getallprimitiveid

# PCB\_PrimitiveRegion.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Region primitive IDs

## Signature

```typescript
public getAllPrimitiveId(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<string>>;
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

_(Optional)_ Layer


</td></tr>
<tr><td>

ruleType


</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->&gt;


</td><td>

_(Optional)_ Region rule type. Only primitives whose rule types are all consistent will be matched


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Region primitive IDs

## Example


```javascript
// 1. 创建一个顶层测试区域作为查找目标：规则 [2] 即禁止元件（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, [2], '嘉立创示例_ID查找目标');
const regionId = region.getState_PrimitiveId();

// 2. 获取全部区域的图元 ID
const allIds = await eda.pcb_PrimitiveRegion.getAllPrimitiveId();

// 3. 按层 + 规则类型过滤：只取顶层（1）禁止元件（[2]）区域的图元 ID
const filteredIds = await eda.pcb_PrimitiveRegion.getAllPrimitiveId(1, [2]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveRegion.delete([regionId]);

console.log('total region ids:', allIds.length);
console.log('filtered region ids:', filteredIds.length);
console.log('marker id in filtered list:', filteredIds.includes(regionId));
```

### modify

# PCB\_PrimitiveRegion.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Region

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitiveRegion, property: { layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.BOTTOM | EPCB_LayerId.MULTI | EPCB_LayerId.INNER_1 | EPCB_LayerId.INNER_2 | EPCB_LayerId.INNER_3 | EPCB_LayerId.INNER_4 | EPCB_LayerId.INNER_5 | EPCB_LayerId.INNER_6 | EPCB_LayerId.INNER_7 | EPCB_LayerId.INNER_8 | EPCB_LayerId.INNER_9 | EPCB_LayerId.INNER_10 | EPCB_LayerId.INNER_11 | EPCB_LayerId.INNER_12 | EPCB_LayerId.INNER_13 | EPCB_LayerId.INNER_14 | EPCB_LayerId.INNER_15 | EPCB_LayerId.INNER_16 | EPCB_LayerId.INNER_17 | EPCB_LayerId.INNER_18 | EPCB_LayerId.INNER_19 | EPCB_LayerId.INNER_20 | EPCB_LayerId.INNER_21 | EPCB_LayerId.INNER_22 | EPCB_LayerId.INNER_23 | EPCB_LayerId.INNER_24 | EPCB_LayerId.INNER_25 | EPCB_LayerId.INNER_26 | EPCB_LayerId.INNER_27 | EPCB_LayerId.INNER_28 | EPCB_LayerId.INNER_29 | EPCB_LayerId.INNER_30; complexPolygon?: undefined | IPCB_Polygon; ruleType?: undefined | EPCB_PrimitiveRegionRuleType[]; regionName?: undefined | string; lineWidth?: undefined | number; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveRegion | undefined>;
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

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MULTI](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_30](../enums/EPCB_LayerId.md)<!-- -->; complexPolygon?: undefined \| [IPCB\_Polygon](./IPCB_Polygon.md)<!-- -->; ruleType?: undefined \| [EPCB\_PrimitiveRegionRuleType](../enums/EPCB_PrimitiveRegionRuleType.md)<!-- -->\[\]; regionName?: undefined \| string; lineWidth?: undefined \| number; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveRegion](./IPCB_PrimitiveRegion.md) \| undefined&gt;

Region primitive object, `undefined` indicates that the modification failed

## Example


```javascript
// 1. 创建待修改的测试区域：顶层，规则 [2] 即禁止元件（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const polygon = eda.pcb_MathPolygon.createPolygon(['R', x, y, 500, 300, 0, 0]);
const region = await eda.pcb_PrimitiveRegion.create(1, polygon, [2], '嘉立创示例_待修改');
const regionId = region.getState_PrimitiveId();

// 2. 读取修改前的层与规则类型
const beforeLayer = region.getState_Layer();
const beforeRuleType = region.getState_RuleType();

// 3. 批量修改：层从顶层（1）换到底层（2），规则 [2] 禁止元件扩展为 [2, 5] 禁止元件 + 禁止布线
await eda.pcb_PrimitiveRegion.modify(regionId, { layer: 2, ruleType: [2, 5] });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveRegion.get(regionId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', regionId);
console.log('layer:', beforeLayer, '→', refreshed.getState_Layer());
console.log('ruleType:', JSON.stringify(beforeRuleType), '→', JSON.stringify(refreshed.getState_RuleType()));
```
