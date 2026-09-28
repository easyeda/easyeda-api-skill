# PCB\_PrimitiveAttribute class

PCB &amp; footprint / property primitive class

## Signature

```typescript
class PCB_PrimitiveAttribute implements IPCB_PrimitiveAPI
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

[delete(primitiveIds)](./PCB_PrimitiveAttribute.md)

</td><td>

</td><td>

**_(BETA)_** Delete Property

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveAttribute.md)

</td><td>

</td><td>

**_(BETA)_** Get Property

</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveAttribute.md)

</td><td>

</td><td>

**_(BETA)_** Get Property

</td></tr>
<tr><td>

[getAll(parentPrimitiveId, layer, primitiveLock)](./PCB_PrimitiveAttribute.md)

</td><td>

</td><td>

**_(BETA)_** Get all Property

</td></tr>
<tr><td>

[getAllPrimitiveId(parentPrimitiveId, layer, primitiveLock)](./PCB_PrimitiveAttribute.md)

</td><td>

</td><td>

**_(BETA)_** Get all Property primitive IDs

</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveAttribute.md)

</td><td>

</td><td>

**_(BETA)_** Modify Text

</td></tr>
</tbody></table>

---

## 方法详情

### delete

# PCB\_PrimitiveAttribute.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Property

## Signature

```typescript
function delete(primitiveIds: string | IPCB_PrimitiveAttribute | Array<string> | Array<IPCB_PrimitiveAttribute>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)<!-- -->&gt;

</td><td>

Property primitive ID or Text primitive object

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 放置测试器件（随机坐标避免与画布已有器件重合）：
// 按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const x = 20000 + Math.floor(Math.random() * 80000);
const y = 20000 + Math.floor(Math.random() * 80000);
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, x, y);
const compId = comp.getState_PrimitiveId();

// 2. 给器件添加一条自定义属性作为删除目标
await comp.setAttribute('嘉立创示例_Tolerance', '1%', true, true);

// 3. 找到自定义属性的图元并记录删除前的属性数量
const attrIds = await eda.pcb_PrimitiveAttribute.getAllPrimitiveId(compId);
const attrs = await eda.pcb_PrimitiveAttribute.get(attrIds);
const target = attrs.find(a => a.getState_Key() === '嘉立创示例_Tolerance');
const beforeCount = attrs.length;

// 4. 以 ID 字符串形式删除该属性
const deleted = await eda.pcb_PrimitiveAttribute.delete(target.getState_PrimitiveId());

// 5. 删除类保留现场（器件留在画布上，属性已删除）
const afterCount = (await eda.pcb_PrimitiveAttribute.getAllPrimitiveId(compId)).length;

console.log('deleted:', deleted);
console.log('attribute count:', beforeCount, '→', afterCount);
```

### get

# PCB\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Property

## Signature

```typescript
function get(primitiveIds: string): Promise<IPCB_PrimitiveAttribute | undefined>;
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

Property primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md) \| undefined&gt;

Attribute primitive object, `undefined` indicates that the retrieval failed

## Example

```javascript
// 1. 放置一个测试器件（属性图元随器件生成，无法单独创建）：
// 按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 取出器件的全部属性图元 ID
const attrIds = await eda.pcb_PrimitiveAttribute.getAllPrimitiveId(compId);

// 3. 传 ID 数组，返回属性对象数组
const arr = await eda.pcb_PrimitiveAttribute.get(attrIds);

// 4. 传单个 ID 字符串，返回单个属性对象
const single = await eda.pcb_PrimitiveAttribute.get(attrIds[0]);

// 5. 清理测试器件（属性图元随器件一起删除）
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('array length:', arr.length);
console.log('keys:', arr.map(a => a.getState_Key()).join(', '));
console.log('single value:', single.getState_Value());
```

### get_1

# PCB\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Property

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveAttribute>>;
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

Property primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)<!-- -->&gt;&gt;

Property primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveAttribute.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Property

## Signature

```typescript
function getAll(
	parentPrimitiveId?: string,
	layer?: TPCB_LayersOfImage,
	primitiveLock?: boolean,
): Promise<Array<IPCB_PrimitiveAttribute>>;
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

parentPrimitiveId

</td><td>

string

</td><td>

_(Optional)_ Associated parent primitive ID

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)

</td><td>

_(Optional)_ Layer

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

Promise&lt;Array&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)<!-- -->&gt;&gt;

Array of Property primitive objects

## Example

```javascript
// 1. 放置一个测试器件（属性图元随器件生成，无法单独创建）：
// 按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部属性
const all = await eda.pcb_PrimitiveAttribute.getAll();

// 3. 按父图元过滤：只取该器件的属性
const own = await eda.pcb_PrimitiveAttribute.getAll(compId);

// 4. 叠加层过滤：属性默认在顶层丝印（3）
const silkscreen = await eda.pcb_PrimitiveAttribute.getAll(compId, 3);

// 5. 清理测试器件（属性图元随器件一起删除）
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('total attributes:', all.length);
console.log('component attributes:', own.length);
console.log('top silkscreen attributes:', silkscreen.length);
console.log('keys:', own.map(a => a.getState_Key()).join(', '));
```

### getallprimitiveid

# PCB\_PrimitiveAttribute.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Property primitive IDs

## Signature

```typescript
function getAllPrimitiveId(
	parentPrimitiveId?: string,
	layer?: TPCB_LayersOfImage,
	primitiveLock?: boolean,
): Promise<Array<string>>;
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

parentPrimitiveId

</td><td>

string

</td><td>

_(Optional)_ Associated parent primitive ID

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)

</td><td>

_(Optional)_ Layer

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

Array of Property primitive IDs

## Example

```javascript
// 1. 放置一个测试器件（属性图元随器件生成，无法单独创建）：
// 按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 获取 PCB 上全部属性的图元 ID
const allIds = await eda.pcb_PrimitiveAttribute.getAllPrimitiveId();

// 3. 按父图元过滤：只取该器件的属性图元 ID
const ownIds = await eda.pcb_PrimitiveAttribute.getAllPrimitiveId(compId);

// 4. 清理测试器件（属性图元随器件一起删除）
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('total attribute ids:', allIds.length);
console.log('component attribute ids:', ownIds.length);
console.log('component ids all in total list:', ownIds.every(id => allIds.includes(id)));
```

### modify

# PCB\_PrimitiveAttribute.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Text

## Signature

```typescript
function modify(
	primitiveId: string | IPCB_PrimitiveAttribute,
	property: {
		layer?: TPCB_LayersOfImage;
		x?: number;
		y?: number;
		key?: string;
		value?: string;
		keyVisible?: boolean;
		valueVisible?: boolean;
		fontFamily?: string;
		fontSize?: number;
		lineWidth?: number;
		alignMode?: EPCB_PrimitiveStringAlignMode;
		rotation?: number;
		reverse?: boolean;
		expansion?: number;
		mirror?: boolean;
		primitiveLock?: boolean;
	},
): Promise<IPCB_PrimitiveAttribute | undefined>;
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

string \| [IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)

</td><td>

Primitive ID

</td></tr>
<tr><td>

property

</td><td>

{ layer?: [TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)<!-- -->; x?: number; y?: number; key?: string; value?: string; keyVisible?: boolean; valueVisible?: boolean; fontFamily?: string; fontSize?: number; lineWidth?: number; alignMode?: [EPCB\_PrimitiveStringAlignMode](../enums/EPCB_PrimitiveStringAlignMode.md)<!-- -->; rotation?: number; reverse?: boolean; expansion?: number; mirror?: boolean; primitiveLock?: boolean }

</td><td>

Modify Parameter

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md) \| undefined&gt;

Text primitive object

## Example

```javascript
// 1. 放置测试器件并添加自定义属性（随机坐标避免与画布已有器件重合）：
// 按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const x = 20000 + Math.floor(Math.random() * 80000);
const y = 20000 + Math.floor(Math.random() * 80000);
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, x, y);
const compId = comp.getState_PrimitiveId();
await comp.setAttribute('嘉立创示例_Tolerance', '1%', true, true);

// 2. 找到自定义属性的图元并读取修改前的值
const attrIds = await eda.pcb_PrimitiveAttribute.getAllPrimitiveId(compId);
const attrs = await eda.pcb_PrimitiveAttribute.get(attrIds);
const target = attrs.find(a => a.getState_Key() === '嘉立创示例_Tolerance');
const beforeValue = target.getState_Value();
const beforeFontSize = target.getState_FontSize();

// 3. 批量修改：属性值 1% → 5%，字号 45 → 60
await eda.pcb_PrimitiveAttribute.modify(target.getState_PrimitiveId(), { value: '5%', fontSize: 60 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveAttribute.get(target.getState_PrimitiveId());

// 5. 修改类保留现场，供观察修改结果
console.log('value:', beforeValue, '→', refreshed.getState_Value());
console.log('fontSize:', beforeFontSize, '→', refreshed.getState_FontSize());
```
