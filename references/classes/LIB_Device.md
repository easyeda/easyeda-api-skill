# LIB\_Device class

综合库 / 器件类

## Signature

```typescript
declare class LIB_Device 
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

**_(BETA)_** 复制器件


</td></tr>
<tr><td>

[create(libraryUuid, deviceName, classification, association, description, property)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** 创建器件


</td></tr>
<tr><td>

[delete(deviceUuid, libraryUuid)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** 删除器件


</td></tr>
<tr><td>

[get(deviceUuid, libraryUuid)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件的所有属性


</td></tr>
<tr><td>

[getByLcscIds(lcscIds, libraryUuid, allowMultiMatch)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** 使用立创 C 编号获取器件


</td></tr>
<tr><td>

[getByLcscIds(lcscIds, libraryUuid, allowMultiMatch)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** 使用立创 C 编号批量获取器件


</td></tr>
<tr><td>

[modify(deviceUuid, libraryUuid, deviceName, classification, association, description, property)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** 修改器件


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, symbolType, itemsOfPage, page)](./LIB_Device.md)


</td><td>


</td><td>

**_(BETA)_** 搜索器件


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_Device.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制器件

## Signature

```typescript
copy(deviceUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newDeviceName?: string): Promise<string | undefined>;
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

器件 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

targetLibraryUuid


</td><td>

string


</td><td>

目标库 UUID


</td></tr>
<tr><td>

targetClassification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 目标库内的分类


</td></tr>
<tr><td>

newDeviceName


</td><td>

string


</td><td>

_(Optional)_ 新器件名称，如若目标库内存在重名器件将导致复制失败


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

目标库内新器件的 UUID

### create

# LIB\_Device.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建器件

## Signature

```typescript
create(libraryUuid: string, deviceName: string, classification?: ILIB_ClassificationIndex | Array<string>, association?: {
        symbolType?: ELIB_SymbolType;
        symbolUuid?: string;
        symbol?: {
            uuid: string;
            libraryUuid: string;
        };
        footprintUuid?: string;
        footprint?: {
            uuid: string;
            libraryUuid: string;
        };
        model3D?: {
            uuid: string;
            libraryUuid: string;
        };
        imageData?: File | Blob;
    }, description?: string, property?: ILIB_DeviceExtendPropertyItem): Promise<string | undefined>;
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

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

deviceName


</td><td>

string


</td><td>

器件名称


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

association


</td><td>

{ symbolType?: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->; symbolUuid?: string; symbol?: { uuid: string; libraryUuid: string; }; footprintUuid?: string; footprint?: { uuid: string; libraryUuid: string; }; model3D?: { uuid: string; libraryUuid: string; }; imageData?: File \| Blob; }


</td><td>

_(Optional)_ 关联符号、封装、图像，指定 `symbolType` 则创建新符号，无需新建符号则无需指定 `symbolType`<!-- -->，但请注意，如若不新建符号也不指定符号的关联信息将无法创建器件


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ 描述


</td></tr>
<tr><td>

property


</td><td>

[ILIB\_DeviceExtendPropertyItem](../interfaces/ILIB_DeviceExtendPropertyItem.md)


</td><td>

_(Optional)_ 其它属性，仅 `designator`<!-- -->、`addIntoBom`<!-- -->、`addIntoPcb` 存在默认值


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

器件 UUID

### delete

# LIB\_Device.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除器件

## Signature

```typescript
delete(deviceUuid: string, libraryUuid: string): Promise<boolean>;
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

器件 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### get

# LIB\_Device.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件的所有属性

## Signature

```typescript
get(deviceUuid: string, libraryUuid?: string): Promise<ILIB_DeviceItem | undefined>;
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

器件 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| undefined&gt;

器件属性

### getbylcscids

# LIB\_Device.getByLcscIds() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用立创 C 编号获取器件

## Signature

```typescript
getByLcscIds<T extends boolean>(lcscIds: string, libraryUuid?: string, allowMultiMatch?: T): Promise<T extends true ? ILIB_DeviceSearchItem | undefined : Array<ILIB_DeviceSearchItem>>;
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

立创 C 编号


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

allowMultiMatch


</td><td>

T


</td><td>

_(Optional)_ 是否允许单个立创 C 编号匹配多个结果


</td></tr>
</tbody></table>



## Returns

Promise&lt;T extends true ? [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md) \| undefined : Array&lt;[ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)<!-- -->&gt;&gt;

搜索到的器件属性

## Remarks

默认情况下，如果在同一个库内匹配到多个相同 C 编号的器件，将只会返回第一个结果；

如果希望返回多个结果，请将 `allowMultiMatch` 置为 `true`<!-- -->；

私有化部署环境暂无法使用本接口

### getbylcscids_1

# LIB\_Device.getByLcscIds() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用立创 C 编号批量获取器件

## Signature

```typescript
getByLcscIds(lcscIds: Array<string>, libraryUuid?: string, allowMultiMatch?: boolean): Promise<Array<ILIB_DeviceSearchItem>>;
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

立创 C 编号数组


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

allowMultiMatch


</td><td>

boolean


</td><td>

_(Optional)_ 是否允许单个立创 C 编号匹配多个结果


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)<!-- -->&gt;&gt;

搜索到的器件属性的列表

## Remarks

默认情况下，如果在同一个库内匹配到多个相同 C 编号的器件，将只会返回第一个结果；

如果希望返回多个结果，请将 `allowMultiMatch` 置为 `true`<!-- -->；

私有化部署环境暂无法使用本接口

### modify

# LIB\_Device.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改器件

## Signature

```typescript
modify(deviceUuid: string, libraryUuid: string, deviceName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, association?: {
        symbolUuid?: string;
        symbol?: {
            uuid: string;
            libraryUuid: string;
        };
        footprintUuid?: string | null;
        footprint?: {
            uuid: string;
            libraryUuid: string;
        } | null;
        model3D?: {
            uuid: string;
            libraryUuid: string;
        } | null;
        imageData?: File | Blob | null;
    }, description?: string | null, property?: {
        name?: string | null;
        designator?: string;
        addIntoBom?: boolean;
        addIntoPcb?: boolean;
        net?: string;
        manufacturer?: string | null;
        manufacturerId?: string | null;
        supplier?: string | null;
        supplierId?: string | null;
        otherProperty?: {
            [key: string]: boolean | number | string | undefined | null;
        };
    }): Promise<boolean>;
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

器件 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

deviceName


</td><td>

string


</td><td>

_(Optional)_ 器件名称


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt; \| null


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

association


</td><td>

\{ symbolUuid?: string; symbol?: \{ uuid: string; libraryUuid: string; \}; footprintUuid?: string \| null; footprint?: \{ uuid: string; libraryUuid: string; \} \| null; model3D?: \{ uuid: string; libraryUuid: string; \} \| null; imageData?: File \| Blob \| null; \}


</td><td>

_(Optional)_ 关联符号、封装、图像


</td></tr>
<tr><td>

description


</td><td>

string \| null


</td><td>

_(Optional)_ 描述


</td></tr>
<tr><td>

property


</td><td>

\{ name?: string \| null; designator?: string; addIntoBom?: boolean; addIntoPcb?: boolean; net?: string; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: \{ \[key: string\]: boolean \| number \| string \| undefined \| null; \}; \}


</td><td>

_(Optional)_ 其它属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

如希望清除某些属性，则将其的值设置为 `null`

### search

# LIB\_Device.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

搜索器件

## Signature

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>;
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

搜索关键字


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 分类，默认为全部


</td></tr>
<tr><td>

symbolType


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

_(Optional)_ 符号类型，默认为全部


</td></tr>
<tr><td>

itemsOfPage


</td><td>

number


</td><td>

_(Optional)_ 一页搜索结果的数量


</td></tr>
<tr><td>

page


</td><td>

number


</td><td>

_(Optional)_ 页数


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)<!-- -->&gt;&gt;

搜索到的器件属性的列表
