# SCH\_PrimitivePin class

Schematic &amp; symbol / pin primitive class

## Signature

```typescript
export class SCH_PrimitivePin implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Remarks

Pin primitives are only available in the symbol editor. In a schematic sheet, the pin associated with a symbol is called [a device pin primitive](./ISCH_PrimitiveComponentPin.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(x, y, pinNumber, pinName, rotation, pinLength, pinColor, pinShape, pinType)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Create Pin


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Delete Pin


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get Pin


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get Pin


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get all Pin


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Get all Pin primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** Modify Pin


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitivePin.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Pin

## Signature

```typescript
public create(x: number, y: number, pinNumber: string, pinName?: string, rotation?: number, pinLength?: number, pinColor?: string | null, pinShape?: ESCH_PrimitivePinShape, pinType?: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>;
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

pinNumber


</td><td>

string


</td><td>

Pin number


</td></tr>
<tr><td>

pinName


</td><td>

string


</td><td>

_(Optional)_ Pin name


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle. Options: `0` `90` `180` `270`


</td></tr>
<tr><td>

pinLength


</td><td>

number


</td><td>

_(Optional)_ Pin length


</td></tr>
<tr><td>

pinColor


</td><td>

string \| null


</td><td>

_(Optional)_ Pin color, `null` indicates the default


</td></tr>
<tr><td>

pinShape


</td><td>

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)


</td><td>

_(Optional)_ Pin shape


</td></tr>
<tr><td>

pinType


</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)


</td><td>

_(Optional)_ Pin type


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| undefined&gt;

Pin primitive object

## Example


```javascript
// 0. 引脚图元仅符号编辑器可用：优先复用测试符号，没有则新建后打开
//    （当前版本非空关键字 search 会抛错，用空关键字列出后按名称过滤）
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('', libUuid, [], undefined, 100, 1);
const hit = found.find(s => s.name === '嘉立创示例_Pin测试符号');
const symUuid = hit ? hit.uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 随机放置坐标，避免与符号上已有引脚重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建编号 1、名为 CLK 的引脚：朝向 90 度、长 20、红色、时钟形状、输入类型
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 90, 20, '#FF0000', 'Clock', 'IN');

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', pin.getState_PrimitiveId());
console.log('primitiveType:', pin.getState_PrimitiveType());
console.log('pinNumber:', pin.getState_PinNumber(), 'pinName:', pin.getState_PinName());
console.log('x:', pin.getState_X(), 'y:', pin.getState_Y());
console.log('pinLength:', pin.getState_PinLength());
console.log('pinColor:', pin.getState_PinColor());
console.log('pinShape:', pin.getState_PinShape(), 'pinType:', pin.getState_pinType());
```

### delete

# SCH\_PrimitivePin.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Pin

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>;
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

string \| [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;


</td><td>

Pin primitive ID or Pin primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 0. 引脚图元仅符号编辑器可用：优先复用测试符号，没有则新建后打开
//    （当前版本非空关键字 search 会抛错，用空关键字列出后按名称过滤）
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('', libUuid, [], undefined, 100, 1);
const hit = found.find(s => s.name === '嘉立创示例_Pin测试符号');
const symUuid = hit ? hit.uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 创建两个待删除的测试引脚（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const pin1 = await eda.sch_PrimitivePin.create(x, y, '1', 'DEL1', 0, 10, null, 'None', 'Passive');
const pin2 = await eda.sch_PrimitivePin.create(x, y + 200, '2', 'DEL2', 0, 10, null, 'None', 'Passive');

// 2. 记录删除前的引脚数量
const beforeCount = (await eda.sch_PrimitivePin.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两个引脚
const deleted1 = await eda.sch_PrimitivePin.delete(pin1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitivePin.delete(pin2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitivePin.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitivePin.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Pin

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;
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

Pin primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md) \| undefined&gt;

Pin primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 0. 引脚图元仅符号编辑器可用：优先复用测试符号，没有则新建后打开
//    （当前版本非空关键字 search 会抛错，用空关键字列出后按名称过滤）
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('', libUuid, [], undefined, 100, 1);
const hit = found.find(s => s.name === '嘉立创示例_Pin测试符号');
const symUuid = hit ? hit.uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建两个测试引脚（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const pin1 = await eda.sch_PrimitivePin.create(x, y, '1', 'INA', 0, 10, null, 'None', 'IN');
const pin2 = await eda.sch_PrimitivePin.create(x, y + 200, '2', 'INB', 0, 10, null, 'None', 'OUT');
const id1 = pin1.getState_PrimitiveId();
const id2 = pin2.getState_PrimitiveId();

// 2. 传单个 ID 字符串，返回单个引脚对象
const single = await eda.sch_PrimitivePin.get(id1);

// 3. 传 ID 数组，返回引脚对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitivePin.get([id1, id2]);

// 4. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([id1, id2]);

console.log('single pinNumber:', single.getState_PinNumber());
console.log('array length:', arr.length);
console.log('pin2 name:', arr[1].getState_PinName());
console.log('pin2 type:', arr[1].getState_pinType());
```

### get_1

# SCH\_PrimitivePin.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Pin

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin>>;
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

Pin primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)<!-- -->&gt;&gt;

Pin primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitivePin.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Pin

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitivePin>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;&gt;

Array of Pin primitive objects

## Example


```javascript
// 0. 引脚图元仅符号编辑器可用：优先复用测试符号，没有则新建后打开
//    （当前版本非空关键字 search 会抛错，用空关键字列出后按名称过滤）
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('', libUuid, [], undefined, 100, 1);
const hit = found.find(s => s.name === '嘉立创示例_Pin测试符号');
const symUuid = hit ? hit.uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 创建一个测试引脚作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const pin = await eda.sch_PrimitivePin.create(x, y, '9', 'MARK', 0, 10, null, 'None', 'Passive');
const pinId = pin.getState_PrimitiveId();

// 2. 获取当前符号上的全部引脚
const all = await eda.sch_PrimitivePin.getAll();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pinId]);

console.log('total pins:', all.length);
console.log('marker pin found:', all.some(p => p.getState_PrimitiveId() === pinId));
console.log('marker pinName:', all.find(p => p.getState_PrimitiveId() === pinId).getState_PinName());
```

### getallprimitiveid

# SCH\_PrimitivePin.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Pin primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Pin primitive IDs

## Example


```javascript
// 0. 引脚图元仅符号编辑器可用：优先复用测试符号，没有则新建后打开
//    （当前版本非空关键字 search 会抛错，用空关键字列出后按名称过滤）
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('', libUuid, [], undefined, 100, 1);
const hit = found.find(s => s.name === '嘉立创示例_Pin测试符号');
const symUuid = hit ? hit.uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 创建一个测试引脚作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const pin = await eda.sch_PrimitivePin.create(x, y, '8', 'IDS', 0, 10, null, 'None', 'Passive');
const pinId = pin.getState_PrimitiveId();

// 2. 获取全部引脚的图元 ID
const allIds = await eda.sch_PrimitivePin.getAllPrimitiveId();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pinId]);

console.log('total pin ids:', allIds.length);
console.log('marker id in list:', allIds.includes(pinId));
```

### modify

# SCH\_PrimitivePin.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Pin

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitivePin | ISCH_PrimitiveComponentPin, property: { x?: undefined | number; y?: undefined | number; pinNumber?: undefined | string; pinName?: undefined | string; rotation?: undefined | number; pinLength?: undefined | number; pinColor?: undefined | null | string; pinShape?: undefined | ESCH_PrimitivePinShape.NONE | ESCH_PrimitivePinShape.INVERTED | ESCH_PrimitivePinShape.CLOCK | ESCH_PrimitivePinShape.INVERTED_CLOCK; pinType?: undefined | ESCH_PrimitivePinType.IN | ESCH_PrimitivePinType.OUT | ESCH_PrimitivePinType.BI | ESCH_PrimitivePinType.PASSIVE | ESCH_PrimitivePinType.OPEN_COLLECTOR | ESCH_PrimitivePinType.OPEN_EMITTER | ESCH_PrimitivePinType.POWER | ESCH_PrimitivePinType.GROUND | ESCH_PrimitivePinType.HIZ | ESCH_PrimitivePinType.TERMINATOR | ESCH_PrimitivePinType.UNDEFINED; noConnected?: undefined | false | true; otherProperty?: undefined | Record<string, string | number | false | true> }): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;
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

string \| [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: undefined \| number; y?: undefined \| number; pinNumber?: undefined \| string; pinName?: undefined \| string; rotation?: undefined \| number; pinLength?: undefined \| number; pinColor?: undefined \| null \| string; pinShape?: undefined \| [ESCH\_PrimitivePinShape.NONE](../enums/ESCH_PrimitivePinShape.md) \| [ESCH\_PrimitivePinShape.INVERTED](../enums/ESCH_PrimitivePinShape.md) \| [ESCH\_PrimitivePinShape.CLOCK](../enums/ESCH_PrimitivePinShape.md) \| [ESCH\_PrimitivePinShape.INVERTED\_CLOCK](../enums/ESCH_PrimitivePinShape.md)<!-- -->; pinType?: undefined \| [ESCH\_PrimitivePinType.IN](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.OUT](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.BI](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.PASSIVE](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.OPEN\_COLLECTOR](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.OPEN\_EMITTER](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.POWER](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.GROUND](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.HIZ](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.TERMINATOR](../enums/ESCH_PrimitivePinType.md) \| [ESCH\_PrimitivePinType.UNDEFINED](../enums/ESCH_PrimitivePinType.md)<!-- -->; noConnected?: undefined \| false \| true; otherProperty?: undefined \| Record&lt;string, string \| number \| false \| true&gt; }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md) \| [ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md) \| undefined&gt;

Pin primitive object

## Example


```javascript
// 0. 引脚图元仅符号编辑器可用：优先复用测试符号，没有则新建后打开
//    （当前版本非空关键字 search 会抛错，用空关键字列出后按名称过滤）
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('', libUuid, [], undefined, 100, 1);
const hit = found.find(s => s.name === '嘉立创示例_Pin测试符号');
const symUuid = hit ? hit.uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 创建待修改的测试引脚（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const pinId = pin.getState_PrimitiveId();

// 2. 记录修改前的编号、名称与长度
const beforeNumber = pin.getState_PinNumber();
const beforeName = pin.getState_PinName();
const beforeLength = pin.getState_PinLength();

// 3. 批量修改：编号 1 → 7、名称 CLK → XTAL、长度 10 → 20、朝向 0 → 90 度
await eda.sch_PrimitivePin.modify(pinId, { pinNumber: '7', pinName: 'XTAL', pinLength: 20, rotation: 90 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitivePin.get(pinId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', pinId);
console.log('pinNumber:', beforeNumber, '→', refreshed.getState_PinNumber());
console.log('pinName:', beforeName, '→', refreshed.getState_PinName());
console.log('pinLength:', beforeLength, '→', refreshed.getState_PinLength());
console.log('rotation:', pin.getState_Rotation(), '→', refreshed.getState_Rotation());
```
