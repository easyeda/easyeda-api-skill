# PCB\_PrimitiveVia class

PCB &amp; footprint / via primitive class

## Signature

```typescript
export class PCB_PrimitiveVia implements IPCB_PrimitiveAPI 
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

[create(net, x, y, holeDiameter, diameter, viaType, designRuleBlindViaName, solderMaskExpansion, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

Create Via


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Delete Via


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get Via


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get Via


</td></tr>
<tr><td>

[getAll(net, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get all Via


</td></tr>
<tr><td>

[getAllPrimitiveId(net, primitiveLock)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Get all Via primitive ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveVia.md)


</td><td>


</td><td>

**_(BETA)_** Modify Via


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveVia.create() method

Create Via

## Signature

```typescript
public create(net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType?: EPCB_PrimitiveViaType, designRuleBlindViaName?: string | null, solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, primitiveLock?: boolean): Promise<IPCB_PrimitiveVia | undefined>;
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

Net name


</td></tr>
<tr><td>

x


</td><td>

number


</td><td>

X coordinate


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

Y coordinate


</td></tr>
<tr><td>

holeDiameter


</td><td>

number


</td><td>

Hole diameter


</td></tr>
<tr><td>

diameter


</td><td>

number


</td><td>

Outer diameter


</td></tr>
<tr><td>

viaType


</td><td>

[EPCB\_PrimitiveViaType](../enums/EPCB_PrimitiveViaType.md)


</td><td>

_(Optional)_ Via type


</td></tr>
<tr><td>

designRuleBlindViaName


</td><td>

string \| null


</td><td>

_(Optional)_ Blind/buried via design rule item name, which defines the start and end layers of the via. `null` means it is not a blind/buried via


</td></tr>
<tr><td>

solderMaskExpansion


</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) \| null


</td><td>

_(Optional)_ Solder mask/paste mask expansion. `null` means following the rules


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

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

Via primitive object

## Example


```javascript
// 1. 生成随机放置坐标，避免与画布上已有的过孔重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 创建通孔：孔径 20mil、外径 40mil，不挂网络、不锁定（viaType 省略时默认通孔 0）
const via = await eda.pcb_PrimitiveVia.create('', x, y, 20, 40);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', via.getState_PrimitiveId());
console.log('primitiveType:', via.getState_PrimitiveType());
console.log('net:', via.getState_Net());
console.log('holeDiameter:', via.getState_HoleDiameter());
console.log('diameter:', via.getState_Diameter());
console.log('x:', via.getState_X(), 'y:', via.getState_Y());
```

### delete

# PCB\_PrimitiveVia.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Via

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;


</td><td>

Via primitive ID or Via primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试过孔（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const via1 = await eda.pcb_PrimitiveVia.create('', x, y, 20, 40);
const via2 = await eda.pcb_PrimitiveVia.create('', x, y + 500, 20, 40);

// 2. 记录删除前的过孔数量
const beforeCount = (await eda.pcb_PrimitiveVia.getAll()).length;

// 3. 以 ID 数组形式批量删除两个过孔
const deleted = await eda.pcb_PrimitiveVia.delete([via1.getState_PrimitiveId(), via2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveVia.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveVia.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Via

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>;
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

Via primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

Via primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两个测试过孔（随机坐标避免重合），尺寸不同便于区分
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const via1 = await eda.pcb_PrimitiveVia.create('', x, y, 20, 40);
const via2 = await eda.pcb_PrimitiveVia.create('', x, y + 500, 30, 60);

// 2. 传单个 ID 字符串，返回单个过孔对象
const single = await eda.pcb_PrimitiveVia.get(via1.getState_PrimitiveId());

// 3. 传 ID 数组，返回过孔对象数组
const arr = await eda.pcb_PrimitiveVia.get([via1.getState_PrimitiveId(), via2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveVia.delete([via1.getState_PrimitiveId(), via2.getState_PrimitiveId()]);

console.log('single holeDiameter:', single.getState_HoleDiameter());
console.log('array length:', arr.length);
console.log('via2 diameter:', arr[1].getState_Diameter());
```

### get_1

# PCB\_PrimitiveVia.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Via

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>;
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

Via primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

Via primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveVia.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Via

## Signature

```typescript
public getAll(net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveVia>>;
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

_(Optional)_ Net name


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

Promise&lt;Array&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

Array of Via primitive objects

## Example


```javascript
// 1. 创建一个挂网络的测试过孔作为过滤目标（网络不存在会自动创建，随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('嘉立创示例_NET1', x, y, 20, 40);
const viaId = via.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部过孔
const all = await eda.pcb_PrimitiveVia.getAll();

// 3. 按网络过滤：只取挂在该网络下的过孔
const netVias = await eda.pcb_PrimitiveVia.getAll('嘉立创示例_NET1');

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveVia.delete([viaId]);

console.log('total vias:', all.length);
console.log('vias on demo net:', netVias.length);
console.log('marker via found:', netVias.some(v => v.getState_PrimitiveId() === viaId));
```

### getallprimitiveid

# PCB\_PrimitiveVia.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Via primitive ID

## Signature

```typescript
public getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>;
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

_(Optional)_ Net name


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

Array of Via primitive IDs

## Example


```javascript
// 1. 创建一个挂网络的测试过孔作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('嘉立创示例_NET1', x, y, 20, 40);
const viaId = via.getState_PrimitiveId();

// 2. 获取全部过孔的图元 ID
const allIds = await eda.pcb_PrimitiveVia.getAllPrimitiveId();

// 3. 按网络过滤：只取挂在该网络下过孔的图元 ID
const netIds = await eda.pcb_PrimitiveVia.getAllPrimitiveId('嘉立创示例_NET1');

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveVia.delete([viaId]);

console.log('total via ids:', allIds.length);
console.log('demo net via ids:', netIds.length);
console.log('marker id in filtered list:', netIds.includes(viaId));
```

### modify

# PCB\_PrimitiveVia.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Via

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitiveVia, property: { net?: undefined | string; x?: undefined | number; y?: undefined | number; holeDiameter?: undefined | number; diameter?: undefined | number; viaType?: undefined | EPCB_PrimitiveViaType.VIA | EPCB_PrimitiveViaType.BLIND | EPCB_PrimitiveViaType.SUTURE; designRuleBlindViaName?: undefined | null | string; solderMaskExpansion?: undefined | null | IPCB_PrimitiveSolderMaskAndPasteMaskExpansion; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveVia | undefined>;
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

string \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ net?: undefined \| string; x?: undefined \| number; y?: undefined \| number; holeDiameter?: undefined \| number; diameter?: undefined \| number; viaType?: undefined \| [EPCB\_PrimitiveViaType.VIA](../enums/EPCB_PrimitiveViaType.md) \| [EPCB\_PrimitiveViaType.BLIND](../enums/EPCB_PrimitiveViaType.md) \| [EPCB\_PrimitiveViaType.SUTURE](../enums/EPCB_PrimitiveViaType.md)<!-- -->; designRuleBlindViaName?: undefined \| null \| string; solderMaskExpansion?: undefined \| null \| [IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](../interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)<!-- -->; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| undefined&gt;

Via primitive object

## Example


```javascript
// 1. 创建待修改的测试过孔：孔径 20mil、外径 40mil（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const via = await eda.pcb_PrimitiveVia.create('', x, y, 20, 40);
const viaId = via.getState_PrimitiveId();

// 2. 读取修改前的孔径与外径
const beforeHole = via.getState_HoleDiameter();
const beforeDiameter = via.getState_Diameter();

// 3. 批量修改：孔径从 20 调大到 30，外径从 40 调大到 60
await eda.pcb_PrimitiveVia.modify(viaId, { holeDiameter: 30, diameter: 60 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveVia.get(viaId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', viaId);
console.log('holeDiameter:', beforeHole, '→', refreshed.getState_HoleDiameter());
console.log('diameter:', beforeDiameter, '→', refreshed.getState_Diameter());
```
