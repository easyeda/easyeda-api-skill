# PCB\_PrimitiveComponent class

PCB &amp; footprint / device primitive class

## Signature

```typescript
export class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI 
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

[create(component, layer, x, y, rotation, primitiveLock)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Create Device


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Delete Device


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get Device


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get Device


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get all Device


</td></tr>
<tr><td>

[getAllPinsByPrimitiveId(primitiveId)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get all pads associated with the device


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get all Device primitive IDs


</td></tr>
<tr><td>

[getAllPropertyNames()](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get The set of all property names of all devices


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Modify Device


</td></tr>
<tr><td>

[placeComponentWithMouse(component)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Place with the mouse device


</td></tr>
<tr><td>

[placeFootprintWithMouse(footprint, properties)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Place with the mouse footprint


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveComponent.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Device

## Signature

```typescript
public create(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem | { libraryType: ELIB_LibraryType.FOOTPRINT; libraryUuid: string; uuid: string } | ILIB_FootprintItem | ILIB_FootprintSearchItem, layer: TPCB_LayersOfComponent, x: number, y: number, rotation?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveComponent | undefined>;
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

component


</td><td>

{ libraryUuid: string; uuid: string } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md) \| { libraryType: [ELIB\_LibraryType.FOOTPRINT](../enums/ELIB_LibraryType.md)<!-- -->; libraryUuid: string; uuid: string } \| [ILIB\_FootprintItem](../interfaces/ILIB_FootprintItem.md) \| [ILIB\_FootprintSearchItem](../interfaces/ILIB_FootprintSearchItem.md)


</td><td>

Associate library device


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfComponent](../types/TPCB_LayersOfComponent.md)


</td><td>

Layer


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

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle


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

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md) \| undefined&gt;

Device primitive object

## Example


```javascript
// 1. 按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
//    坐标取随机值，避免与画布上已有的器件重合
const x = 20000 + Math.floor(Math.random() * 80000);
const y = 20000 + Math.floor(Math.random() * 80000);
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();

// 2. 放置到顶层（1），旋转 90°，不锁定
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, x, y, 90, false);

// 3. 创建类保留现场，不删除器件
console.log('primitiveId:', comp.getState_PrimitiveId());
console.log('designator:', comp.getState_Designator());
console.log('name:', comp.getState_Name());
console.log('footprint:', comp.getState_Footprint());
console.log('layer:', comp.getState_Layer());
console.log('x:', comp.getState_X(), 'y:', comp.getState_Y());
console.log('rotation:', comp.getState_Rotation());
```

### delete

# PCB\_PrimitiveComponent.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Device

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)<!-- -->&gt;


</td><td>

Device primitive ID or Device primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 放置一个待删除的测试器件（随机坐标避免与画布已有器件重合）：
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const x = 20000 + Math.floor(Math.random() * 80000);
const y = 20000 + Math.floor(Math.random() * 80000);
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, x, y);
const compId = comp.getState_PrimitiveId();

// 2. 记录删除前的器件图元 ID 列表
const beforeIds = await eda.pcb_PrimitiveComponent.getAllPrimitiveId();
const beforeContains = beforeIds.includes(compId);

// 3. 以 ID 数组形式删除该器件
const deleted = await eda.pcb_PrimitiveComponent.delete([compId]);

// 4. 验证删除后 ID 列表不再包含该器件
const afterIds = await eda.pcb_PrimitiveComponent.getAllPrimitiveId();

console.log('deleted:', deleted);
console.log('beforeContains:', beforeContains);
console.log('afterContains:', afterIds.includes(compId));
console.log('component count:', beforeIds.length, '→', afterIds.length);
```

### get

# PCB\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Device

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitiveComponent | undefined>;
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

Device primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md) \| undefined&gt;

Device primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 放置一个测试器件：
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 传单个 ID 字符串，返回单个器件对象
const single = await eda.pcb_PrimitiveComponent.get(compId);

// 3. 传 ID 数组，返回器件对象数组
const arr = await eda.pcb_PrimitiveComponent.get([compId]);

// 4. 清理测试器件
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('designator:', single.getState_Designator());
console.log('footprint:', single.getState_Footprint());
console.log('x:', single.getState_X(), 'y:', single.getState_Y());
console.log('array length:', arr.length);
console.log('sameId:', arr[0].getState_PrimitiveId() === compId);
```

### get_1

# PCB\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Device

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveComponent>>;
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

Device primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)<!-- -->&gt;&gt;

Device primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveComponent.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Device

## Signature

```typescript
public getAll(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveComponent>>;
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

[TPCB\_LayersOfComponent](../types/TPCB_LayersOfComponent.md)


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

Promise&lt;Array&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)<!-- -->&gt;&gt;

Array of Device primitive objects

## Example


```javascript
// 1. 放置一个测试器件作为过滤参照：
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部器件
const all = await eda.pcb_PrimitiveComponent.getAll();

// 3. 按层过滤：只取顶层（1）器件
const topComps = await eda.pcb_PrimitiveComponent.getAll(1);

// 4. 清理测试器件
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('total components:', all.length);
console.log('top layer components:', topComps.length);
console.log('fixture included:', all.some(c => c.getState_PrimitiveId() === compId));
console.log('designators:', all.map(c => c.getState_Designator()).join(', '));
```

### getallpinsbyprimitiveid

# PCB\_PrimitiveComponent.getAllPinsByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all pads associated with the device

## Signature

```typescript
public getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>;
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

string


</td><td>

Device primitive ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveComponentPad](./IPCB_PrimitiveComponentPad.md)<!-- -->&gt; \| undefined&gt;

Device pad primitive array

## Example


```javascript
// 1. 放置一个测试器件：
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 取出该器件的全部焊盘图元对象
const pins = await eda.pcb_PrimitiveComponent.getAllPinsByPrimitiveId(compId);

// 3. 读取每个焊盘的归属与坐标，确认都属于该器件
const parentIds = pins.map(pin => pin.getState_ParentComponentPrimitiveId());

// 4. 清理测试器件（焊盘随器件一起删除）
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('pinCount:', pins.length);
console.log('allBelongToComponent:', parentIds.every(id => id === compId));
console.log('firstPin:', 'x:', pins[0].getState_X(), 'y:', pins[0].getState_Y());
console.log('firstPinParentId:', parentIds[0]);
```

### getallprimitiveid

# PCB\_PrimitiveComponent.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Device primitive IDs

## Signature

```typescript
public getAllPrimitiveId(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<string>>;
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

[TPCB\_LayersOfComponent](../types/TPCB_LayersOfComponent.md)


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

Array of Device primitive IDs

## Example


```javascript
// 1. 放置一个测试器件作为过滤参照：
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 不带参数：获取全部器件的图元 ID
const allIds = await eda.pcb_PrimitiveComponent.getAllPrimitiveId();

// 3. 按层过滤：只取顶层（1）器件的图元 ID
const topIds = await eda.pcb_PrimitiveComponent.getAllPrimitiveId(1);

// 4. 清理测试器件
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('total ids:', allIds.length);
console.log('top layer ids:', topIds.length);
console.log('fixture included:', allIds.includes(compId));
console.log('firstId:', allIds[0]);
```

### getallpropertynames

# PCB\_PrimitiveComponent.getAllPropertyNames() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The set of all property names of all devices

## Signature

```typescript
public getAllPropertyNames(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

The set of all property names of all devices

## Example


```javascript
// 1. 放置一个测试器件：
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, 5000, 5000);
const compId = comp.getState_PrimitiveId();

// 2. 获取 PCB 上所有器件的属性名称集合（无参数）
const names = await eda.pcb_PrimitiveComponent.getAllPropertyNames();

// 3. 清理测试器件
await eda.pcb_PrimitiveComponent.delete([compId]);

console.log('property name count:', names.length);
console.log('names:', names.join(', '));
```

### modify

# PCB\_PrimitiveComponent.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Device

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitiveComponent, property: { layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.BOTTOM; x?: undefined | number; y?: undefined | number; rotation?: undefined | number; primitiveLock?: undefined | false | true; addIntoBom?: undefined | false | true; designator?: undefined | null | string; name?: undefined | null | string; uniqueId?: undefined | null | string; manufacturer?: undefined | null | string; manufacturerId?: undefined | null | string; supplier?: undefined | null | string; supplierId?: undefined | null | string; otherProperty?: undefined | Record<string, any> }): Promise<IPCB_PrimitiveComponent | undefined>;
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

string \| [IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md)<!-- -->; x?: undefined \| number; y?: undefined \| number; rotation?: undefined \| number; primitiveLock?: undefined \| false \| true; addIntoBom?: undefined \| false \| true; designator?: undefined \| null \| string; name?: undefined \| null \| string; uniqueId?: undefined \| null \| string; manufacturer?: undefined \| null \| string; manufacturerId?: undefined \| null \| string; supplier?: undefined \| null \| string; supplierId?: undefined \| null \| string; otherProperty?: undefined \| Record&lt;string, any&gt; }


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md) \| undefined&gt;

Device primitive object

## Example


```javascript
// 1. 放置待修改的测试器件（随机坐标避免与画布已有器件重合）：
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
const x = 20000 + Math.floor(Math.random() * 80000);
const y = 20000 + Math.floor(Math.random() * 80000);
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const comp = await eda.pcb_PrimitiveComponent.create({ libraryUuid: sysLibUuid, uuid: devices[0].uuid }, 1, x, y);
const compId = comp.getState_PrimitiveId();

// 2. 读取修改前的位置与旋转角度
const beforeX = comp.getState_X();
const beforeY = comp.getState_Y();
const beforeRotation = comp.getState_Rotation();

// 3. 批量修改：平移 500mil，旋转 0° → 90°
await eda.pcb_PrimitiveComponent.modify(compId, { x: beforeX + 500, y: beforeY + 500, rotation: 90 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveComponent.get(compId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', compId);
console.log('x:', beforeX, '→', refreshed.getState_X());
console.log('y:', beforeY, '→', refreshed.getState_Y());
console.log('rotation:', beforeRotation, '→', refreshed.getState_Rotation());
```

### placecomponentwithmouse

# PCB\_PrimitiveComponent.placeComponentWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Place with the mouse device

## Signature

```typescript
public placeComponentWithMouse(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

component


</td><td>

{ libraryUuid: string; uuid: string } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


</td><td>

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the device was found

## Remarks

This API simulates clicking the placement button on the front end. The specified device will be bound to the current mouse and placed on the canvas when the user clicks subsequently

The return timing of this API does not wait for the user's placement operation. Once the device is bound to the mouse, this API will immediately return `true`

### placefootprintwithmouse

# PCB\_PrimitiveComponent.placeFootprintWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Place with the mouse footprint

## Signature

```typescript
public placeFootprintWithMouse(footprint: { libraryUuid: string; uuid: string } | ILIB_FootprintItem | ILIB_FootprintSearchItem, properties?: Record<string, boolean | number | string | undefined>): Promise<boolean>;
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

footprint


</td><td>

{ libraryUuid: string; uuid: string } \| [ILIB\_FootprintItem](../interfaces/ILIB_FootprintItem.md) \| [ILIB\_FootprintSearchItem](../interfaces/ILIB_FootprintSearchItem.md)


</td><td>

Associate library footprint


</td></tr>
<tr><td>

properties


</td><td>

Record&lt;string, boolean \| number \| string \| undefined&gt;


</td><td>

_(Optional)_ Device property


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the footprint was found

## Remarks

This API simulates clicking the placement button on the front end. The specified footprint will be bound to the current mouse and placed on the canvas when the user clicks subsequently

The return timing of this API does not wait for the user's placement operation. Once the footprint is bound to the mouse, this API will immediately return `true` ADD since API v0.2.26
