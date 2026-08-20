# LIB\_Device class

Comprehensive library / device class

## Signature

```typescript
export class LIB_Device 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[copy(deviceUuid, libraryUuid, targetLibraryUuid, targetClassification, newDeviceName)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Copy Device


</td></tr>
<tr><td>

[create(libraryUuid, deviceName, classification, association, description, property)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Create Device


</td></tr>
<tr><td>

[delete(deviceUuid, libraryUuid)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Delete Device


</td></tr>
<tr><td>

[get(deviceUuid, libraryUuid)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Get all properties of the device


</td></tr>
<tr><td>

[getByLcscIds(lcscIds, libraryUuid, allowMultiMatch)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Get a device using an LCSC C number


</td></tr>
<tr><td>

[getByLcscIds(lcscIds, libraryUuid, allowMultiMatch)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Batch get devices using LCSC C numbers


</td></tr>
<tr><td>

[modify(deviceUuid, libraryUuid, deviceName, classification, association, description, property)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Modify Device


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, symbolType, itemsOfPage, page)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Search device


</td></tr>
<tr><td>

[searchByProperties(properties, libraryUuid, classification, symbolType, itemsOfPage, page)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** Search devices precisely by properties


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_Device.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Copy Device

## Signature

```typescript
public copy(deviceUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newDeviceName?: string): Promise<string | undefined>;
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

deviceUuid


</td><td>

string


</td><td>

Device UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

targetLibraryUuid


</td><td>

string


</td><td>

Target library UUID


</td></tr>
<tr><td>

targetClassification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification in the target library


</td></tr>
<tr><td>

newDeviceName


</td><td>

string


</td><td>

_(Optional)_ New device name. If a device with the same name exists in the target library, the copy will fail


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

UUID of the new device in the target library

## Example


```javascript
// 1. 获取个人库 UUID
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 2. 新建一个轻量器件作为复制来源
const sourceName = '嘉立创示例_复制源_' + Date.now();
const sourceUuid = await eda.lib_Device.create(libraryUuid, sourceName, [], { symbolType: 2 });

// 3. 复制到同一库，指定新名称避免同名冲突（分类传 [] = 不分类）
const newName = '嘉立创示例_复制品_' + Date.now();
const copiedUuid = await eda.lib_Device.copy(sourceUuid, libraryUuid, libraryUuid, [], newName);

// 创建类保留现场（原件与复制品都留在个人库中供观察）

console.log('sourceUuid:', sourceUuid);
console.log('copiedUuid:', copiedUuid);
console.log('newName:', newName);
```

### create

# LIB\_Device.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Device

## Signature

```typescript
public create(libraryUuid: string, deviceName: string, classification?: ILIB_ClassificationIndex | Array<string>, association?: { symbolType?: undefined | ELIB_SymbolType.COMPONENT | ELIB_SymbolType.NET_FLAG | ELIB_SymbolType.NET_PORT | ELIB_SymbolType.DRAWING | ELIB_SymbolType.NON_ELECTRICAL | ELIB_SymbolType.SHORT_CIRCUIT_FLAG | ELIB_SymbolType.OFF_PAGE_CONNECTOR | ELIB_SymbolType.DIFFERENTIAL_PAIRS_FLAG | ELIB_SymbolType.CBB_SYMBOL; symbolUuid?: undefined | string; symbol?: undefined | { uuid: string; libraryUuid: string }; footprintUuid?: undefined | string; footprint?: undefined | { uuid: string; libraryUuid: string }; model3D?: undefined | { uuid: string; libraryUuid: string }; imageData?: undefined | File | Blob }, description?: string, property?: ILIB_DeviceExtendPropertyItem): Promise<string | undefined>;
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

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

deviceName


</td><td>

string


</td><td>

Device name


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

association


</td><td>

{ symbolType?: undefined \| [ELIB\_SymbolType.COMPONENT](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NET\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NET\_PORT](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.DRAWING](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NON\_ELECTRICAL](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.SHORT\_CIRCUIT\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.OFF\_PAGE\_CONNECTOR](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.DIFFERENTIAL\_PAIRS\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.CBB\_SYMBOL](../enums/ELIB_SymbolType.md)<!-- -->; symbolUuid?: undefined \| string; symbol?: undefined \| { uuid: string; libraryUuid: string }; footprintUuid?: undefined \| string; footprint?: undefined \| { uuid: string; libraryUuid: string }; model3D?: undefined \| { uuid: string; libraryUuid: string }; imageData?: undefined \| File \| Blob }


</td><td>

_(Optional)_ Associate a symbol, footprint, and image. Specifying `symbolType` creates a new symbol; if no new symbol is needed, `symbolType` does not need to be specified. However, note that if no new symbol is created and no symbol association information is specified, the device cannot be created


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

property


</td><td>

[ILIB\_DeviceExtendPropertyItem](../interfaces/ILIB_DeviceExtendPropertyItem.md)


</td><td>

_(Optional)_ Other property, only `designator`<!-- -->, `addIntoBom`<!-- -->, `addIntoPcb` exists default value


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

Device UUID

## Example


```javascript
// 1. 获取个人库 UUID
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 2. 创建器件：新建元件符号（symbolType: 2）并设置默认属性
const deviceName = '嘉立创示例_新器件_' + Date.now();
const deviceUuid = await eda.lib_Device.create(
  libraryUuid,
  deviceName,
  [],
  { symbolType: 2 },
  '示例器件描述',
  { designator: 'R', addIntoBom: true, addIntoPcb: true }
);

// 创建类保留现场（新器件留在个人库中供观察）

console.log('deviceUuid:', deviceUuid);
console.log('deviceName:', deviceName);
```

### delete

# LIB\_Device.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Device

## Signature

```typescript
public delete(deviceUuid: string, libraryUuid: string): Promise<boolean>;
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

deviceUuid


</td><td>

string


</td><td>

Device UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 获取个人库 UUID 并新建删除对象
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const deviceUuid = await eda.lib_Device.create(
  libraryUuid,
  '嘉立创示例_待删除_' + Date.now(),
  [],
  { symbolType: 2 }
);

// 2. 删除该器件
const deleted = await eda.lib_Device.delete(deviceUuid, libraryUuid);

console.log('deviceUuid:', deviceUuid);
console.log('deleted:', deleted);
```

### get

# LIB\_Device.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all properties of the device

## Signature

```typescript
public get(deviceUuid: string, libraryUuid?: string): Promise<ILIB_DeviceItem | undefined>;
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

deviceUuid


</td><td>

string


</td><td>

Device UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| undefined&gt;

Device property

### getbylcscids

# LIB\_Device.getByLcscIds() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get a device using an LCSC C number

## Signature

```typescript
public getByLcscIds<T extends boolean>(lcscIds: string, libraryUuid?: string, allowMultiMatch?: T): Promise<T extends true ? ILIB_DeviceSearchItem | undefined : Array<ILIB_DeviceSearchItem>>;
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

lcscIds


</td><td>

string


</td><td>

LCSC C number


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

allowMultiMatch


</td><td>

T


</td><td>

_(Optional)_ Whether a single LCSC C number is allowed to match multiple results


</td></tr>
</tbody></table>



## Returns

Promise&lt;T extends true ? [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md) \| undefined : Array&lt;[ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)<!-- -->&gt;&gt;

Searched device properties

## Remarks

By default, if multiple devices with the same C number are matched in the same library, only the first result will be returned;

If you want to return multiple results, set `allowMultiMatch` to `true`<!-- -->;

This API is temporarily unavailable in the private deployment environment

### getbylcscids_1

# LIB\_Device.getByLcscIds() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Batch get devices using LCSC C numbers

## Signature

```typescript
public getByLcscIds(lcscIds: Array<string>, libraryUuid?: string, allowMultiMatch?: boolean): Promise<Array<ILIB_DeviceSearchItem>>;
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

lcscIds


</td><td>

Array&lt;string&gt;


</td><td>

Array of LCSC C numbers


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

allowMultiMatch


</td><td>

boolean


</td><td>

_(Optional)_ Whether a single LCSC C number is allowed to match multiple results


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)<!-- -->&gt;&gt;

List of searched device properties

## Remarks

By default, if multiple devices with the same C number are matched in the same library, only the first result will be returned;

If you want to return multiple results, set `allowMultiMatch` to `true`<!-- -->;

This API is temporarily unavailable in the private deployment environment

## Example


```javascript
// 1. 单个 C 编号查询（默认搜索系统库）
const one = await eda.lib_Device.getByLcscIds('C1523');
console.log('single count:', one.length);
console.log('[0] uuid:', one[0].uuid, 'supplierId:', one[0].supplierId);

// 2. 批量查询多个 C 编号
const many = await eda.lib_Device.getByLcscIds(['C1523', 'C17168']);
console.log('batch count:', many.length);
many.forEach((item, i) => {
  console.log('[' + i + '] uuid:', item.uuid, 'supplierId:', item.supplierId);
});
```

### modify

# LIB\_Device.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Device

## Signature

```typescript
public modify(deviceUuid: string, libraryUuid: string, deviceName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, association?: { symbolUuid?: undefined | string; symbol?: undefined | { uuid: string; libraryUuid: string }; footprintUuid?: undefined | null | string; footprint?: undefined | null | { uuid: string; libraryUuid: string }; model3D?: undefined | null | { uuid: string; libraryUuid: string }; imageData?: undefined | null | File | Blob }, description?: string | null, property?: { name?: undefined | null | string; designator?: undefined | string; addIntoBom?: undefined | false | true; addIntoPcb?: undefined | false | true; net?: undefined | string; manufacturer?: undefined | null | string; manufacturerId?: undefined | null | string; supplier?: undefined | null | string; supplierId?: undefined | null | string; otherProperty?: undefined | Record<string, undefined | null | string | number | false | true> }): Promise<boolean>;
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

deviceUuid


</td><td>

string


</td><td>

Device UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

deviceName


</td><td>

string


</td><td>

_(Optional)_ Device name


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt; \| null


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

association


</td><td>

\{ symbolUuid?: undefined \| string; symbol?: undefined \| \{ uuid: string; libraryUuid: string \}; footprintUuid?: undefined \| null \| string; footprint?: undefined \| null \| \{ uuid: string; libraryUuid: string \}; model3D?: undefined \| null \| \{ uuid: string; libraryUuid: string \}; imageData?: undefined \| null \| File \| Blob \}


</td><td>

_(Optional)_ Associated symbol, footprint, image


</td></tr>
<tr><td>

description


</td><td>

string \| null


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

property


</td><td>

{ name?: undefined \| null \| string; designator?: undefined \| string; addIntoBom?: undefined \| false \| true; addIntoPcb?: undefined \| false \| true; net?: undefined \| string; manufacturer?: undefined \| null \| string; manufacturerId?: undefined \| null \| string; supplier?: undefined \| null \| string; supplierId?: undefined \| null \| string; otherProperty?: undefined \| Record&lt;string, undefined \| null \| string \| number \| false \| true&gt; }


</td><td>

_(Optional)_ Other property


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

If you want to clear certain properties, set their values to `null`

## Example


```javascript
// 1. 获取个人库 UUID 并新建修改对象
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const deviceUuid = await eda.lib_Device.create(
  libraryUuid,
  '嘉立创示例_修改前_' + Date.now(),
  [],
  { symbolType: 2 },
  '修改前的描述'
);

// 2. 修改名称和描述（分类保持不变传 []）
const newName = '嘉立创示例_修改后_' + Date.now();
const modified = await eda.lib_Device.modify(deviceUuid, libraryUuid, newName, [], '修改后的描述');

// 3. 再补充修改扩展属性（位号、制造商）
await eda.lib_Device.modify(deviceUuid, libraryUuid, undefined, [], undefined, { designator: 'R', manufacturer: '嘉立创' });

// 修改类保留现场

console.log('deviceUuid:', deviceUuid);
console.log('modified:', modified);
console.log('newName:', newName);
```

### search

# LIB\_Device.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Search device

## Signature

```typescript
public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>;
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

key


</td><td>

string


</td><td>

Search keyword


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification, defaults to all


</td></tr>
<tr><td>

symbolType


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

_(Optional)_ Symbol type, defaults to all


</td></tr>
<tr><td>

itemsOfPage


</td><td>

number


</td><td>

_(Optional)_ Number of search results per page


</td></tr>
<tr><td>

page


</td><td>

number


</td><td>

_(Optional)_ Page count


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)<!-- -->&gt;&gt;

List of searched device properties

## Example


```javascript
// 1. 按关键字搜索系统库中的器件，每页 5 条
const results = await eda.lib_Device.search('0402', undefined, undefined, undefined, 5, 1);

// 2. 输出搜索结果
console.log('count:', results.length);
results.forEach((item, i) => {
  console.log('[' + i + '] name:', item.name, 'uuid:', item.uuid, 'supplierId:', item.supplierId);
});
```

### searchbyproperties

# LIB\_Device.searchByProperties() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Search devices precisely by properties

## Signature

```typescript
public searchByProperties(properties: ILIB_DevicePropertiesForSearch, libraryUuid?: string, classification?: Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>;
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

properties


</td><td>

[ILIB\_DevicePropertiesForSearch](../interfaces/ILIB_DevicePropertiesForSearch.md)


</td><td>

Property


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

classification


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Classification, defaults to all ADD since EDA v4


</td></tr>
<tr><td>

symbolType


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

_(Optional)_ Symbol type, defaults to all


</td></tr>
<tr><td>

itemsOfPage


</td><td>

number


</td><td>

_(Optional)_ Number of search results per page


</td></tr>
<tr><td>

page


</td><td>

number


</td><td>

_(Optional)_ Page count


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)<!-- -->&gt;&gt;

List of searched device properties

## Example


```javascript
// 1. 按立创 C 编号精确搜索，每页 5 条
const results = await eda.lib_Device.searchByProperties(
  { supplierId: 'C1523' },
  undefined,
  undefined,
  undefined,
  5,
  1
);

// 2. 输出搜索结果
console.log('count:', results.length);
results.forEach((item, i) => {
  console.log('[' + i + '] name:', item.name, 'uuid:', item.uuid, 'supplierId:', item.supplierId);
});
```
