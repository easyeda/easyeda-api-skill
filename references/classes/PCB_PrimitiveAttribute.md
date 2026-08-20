# PCB\_PrimitiveAttribute class

PCB &amp; footprint / property primitive class

## Signature

```typescript
export class PCB_PrimitiveAttribute implements IPCB_PrimitiveAPI 
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
public delete(primitiveIds: string | IPCB_PrimitiveAttribute | Array<string> | Array<IPCB_PrimitiveAttribute>): Promise<boolean>;
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
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
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
public get(primitiveIds: string): Promise<IPCB_PrimitiveAttribute | undefined>;
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
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
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
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveAttribute>>;
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
public getAll(parentPrimitiveId?: string, layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveAttribute>>;
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
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
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
public getAllPrimitiveId(parentPrimitiveId?: string, layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;
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
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
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
public modify(primitiveId: string | IPCB_PrimitiveAttribute, property: { layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.TOP_SOLDER_MASK | EPCB_LayerId.TOP_ASSEMBLY | EPCB_LayerId.BOTTOM | EPCB_LayerId.BOTTOM_SILKSCREEN | EPCB_LayerId.BOTTOM_SOLDER_MASK | EPCB_LayerId.BOTTOM_ASSEMBLY | EPCB_LayerId.DOCUMENT | EPCB_LayerId.MECHANICAL | EPCB_LayerId.INNER_1 | EPCB_LayerId.INNER_2 | EPCB_LayerId.INNER_3 | EPCB_LayerId.INNER_4 | EPCB_LayerId.INNER_5 | EPCB_LayerId.INNER_6 | EPCB_LayerId.INNER_7 | EPCB_LayerId.INNER_8 | EPCB_LayerId.INNER_9 | EPCB_LayerId.INNER_10 | EPCB_LayerId.INNER_11 | EPCB_LayerId.INNER_12 | EPCB_LayerId.INNER_13 | EPCB_LayerId.INNER_14 | EPCB_LayerId.INNER_15 | EPCB_LayerId.INNER_16 | EPCB_LayerId.INNER_17 | EPCB_LayerId.INNER_18 | EPCB_LayerId.INNER_19 | EPCB_LayerId.INNER_20 | EPCB_LayerId.INNER_21 | EPCB_LayerId.INNER_22 | EPCB_LayerId.INNER_23 | EPCB_LayerId.INNER_24 | EPCB_LayerId.INNER_25 | EPCB_LayerId.INNER_26 | EPCB_LayerId.INNER_27 | EPCB_LayerId.INNER_28 | EPCB_LayerId.INNER_29 | EPCB_LayerId.INNER_30 | EPCB_LayerId.CUSTOM_1 | EPCB_LayerId.CUSTOM_2 | EPCB_LayerId.CUSTOM_3 | EPCB_LayerId.CUSTOM_4 | EPCB_LayerId.CUSTOM_5 | EPCB_LayerId.CUSTOM_6 | EPCB_LayerId.CUSTOM_7 | EPCB_LayerId.CUSTOM_8 | EPCB_LayerId.CUSTOM_9 | EPCB_LayerId.CUSTOM_10 | EPCB_LayerId.CUSTOM_11 | EPCB_LayerId.CUSTOM_12 | EPCB_LayerId.CUSTOM_13 | EPCB_LayerId.CUSTOM_14 | EPCB_LayerId.CUSTOM_15 | EPCB_LayerId.CUSTOM_16 | EPCB_LayerId.CUSTOM_17 | EPCB_LayerId.CUSTOM_18 | EPCB_LayerId.CUSTOM_19 | EPCB_LayerId.CUSTOM_20 | EPCB_LayerId.CUSTOM_21 | EPCB_LayerId.CUSTOM_22 | EPCB_LayerId.CUSTOM_23 | EPCB_LayerId.CUSTOM_24 | EPCB_LayerId.CUSTOM_25 | EPCB_LayerId.CUSTOM_26 | EPCB_LayerId.CUSTOM_27 | EPCB_LayerId.CUSTOM_28 | EPCB_LayerId.CUSTOM_29 | EPCB_LayerId.CUSTOM_30 | EPCB_LayerId.DRILL_DRAWING; x?: undefined | number; y?: undefined | number; key?: undefined | string; value?: undefined | string; keyVisible?: undefined | false | true; valueVisible?: undefined | false | true; fontFamily?: undefined | string; fontSize?: undefined | number; lineWidth?: undefined | number; alignMode?: undefined | EPCB_PrimitiveStringAlignMode.LEFT_TOP | EPCB_PrimitiveStringAlignMode.LEFT_MIDDLE | EPCB_PrimitiveStringAlignMode.LEFT_BOTTOM | EPCB_PrimitiveStringAlignMode.CENTER_TOP | EPCB_PrimitiveStringAlignMode.CENTER | EPCB_PrimitiveStringAlignMode.CENTER_BOTTOM | EPCB_PrimitiveStringAlignMode.RIGHT_TOP | EPCB_PrimitiveStringAlignMode.RIGHT_MIDDLE | EPCB_PrimitiveStringAlignMode.RIGHT_BOTTOM; rotation?: undefined | number; reverse?: undefined | false | true; expansion?: undefined | number; mirror?: undefined | false | true; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveAttribute | undefined>;
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

{ layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MECHANICAL](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DRILL\_DRAWING](../enums/EPCB_LayerId.md)<!-- -->; x?: undefined \| number; y?: undefined \| number; key?: undefined \| string; value?: undefined \| string; keyVisible?: undefined \| false \| true; valueVisible?: undefined \| false \| true; fontFamily?: undefined \| string; fontSize?: undefined \| number; lineWidth?: undefined \| number; alignMode?: undefined \| [EPCB\_PrimitiveStringAlignMode.LEFT\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.LEFT\_MIDDLE](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.LEFT\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_MIDDLE](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md)<!-- -->; rotation?: undefined \| number; reverse?: undefined \| false \| true; expansion?: undefined \| number; mirror?: undefined \| false \| true; primitiveLock?: undefined \| false \| true }


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
//    按立创编号从系统库精确反查器件，返回项不含 libraryUuid，需补上才能用于 create
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
