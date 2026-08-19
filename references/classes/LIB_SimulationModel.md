# LIB\_SimulationModel class

综合库 / 仿真模型类

## Signature

```typescript
export class LIB_SimulationModel 
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

[copy(simulationModelUuid, libraryUuid, targetLibraryUuid, targetClassification, newSimulationModelName)](./LIB_SimulationModel.md)


</td><td>


</td><td>

**_(BETA)_** 复制仿真模型


</td></tr>
<tr><td>

[create(libraryUuid, model, classification, description)](./LIB_SimulationModel.md)


</td><td>


</td><td>

**_(BETA)_** 创建仿真模型


</td></tr>
<tr><td>

[delete(simulationModelUuid, libraryUuid)](./LIB_SimulationModel.md)


</td><td>


</td><td>

**_(BETA)_** 删除仿真模型


</td></tr>
<tr><td>

[get(simulationModelUuid, libraryUuid)](./LIB_SimulationModel.md)


</td><td>


</td><td>

**_(BETA)_** 获取仿真模型的所有属性


</td></tr>
<tr><td>

[modify(simulationModelUuid, libraryUuid, modelProps, classification, description)](./LIB_SimulationModel.md)


</td><td>


</td><td>

**_(BETA)_** 修改仿真模型


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, simulationModelType, itemsOfPage, page)](./LIB_SimulationModel.md)


</td><td>


</td><td>

**_(BETA)_** 搜索仿真模型


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_SimulationModel.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制仿真模型

## Signature

```typescript
public copy(simulationModelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: Array<string>, newSimulationModelName?: string): Promise<string | undefined>;
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

simulationModelUuid


</td><td>

string


</td><td>

仿真模型 UUID


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

Array&lt;string&gt;


</td><td>

_(Optional)_ 目标库内的分类


</td></tr>
<tr><td>

newSimulationModelName


</td><td>

string


</td><td>

_(Optional)_ 新仿真模型名称，如若目标库内存在重名符号将导致复制失败


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

目标库内新仿真模型的 UUID

## Remarks

ADD since EDA v3.2.167

### create

# LIB\_SimulationModel.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建仿真模型

## Signature

```typescript
public create(libraryUuid: string, model: { modelType: 'Ngspice' } & ({ modelFile: Blob; modelName?: undefined | string; modelCategory?: undefined | string; modelPin?: undefined | string } | { modelData: string; modelName?: undefined | string; modelCategory?: undefined | string; modelPin?: undefined | string }), classification?: Array<string>, description?: string): Promise<string | undefined>;
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

model


</td><td>

{ modelType: 'Ngspice' } &amp; ({ modelFile: Blob; modelName?: undefined \| string; modelCategory?: undefined \| string; modelPin?: undefined \| string } \| { modelData: string; modelName?: undefined \| string; modelCategory?: undefined \| string; modelPin?: undefined \| string })


</td><td>

仿真模型数据


</td></tr>
<tr><td>

classification


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ 描述


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

仿真模型 UUID

## Remarks

ADD since EDA v3.2.167

### delete

# LIB\_SimulationModel.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除仿真模型

## Signature

```typescript
public delete(simulationModelUuid: string, libraryUuid: string): Promise<boolean>;
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

simulationModelUuid


</td><td>

string


</td><td>

仿真模型 UUID


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

## Remarks

ADD since EDA v3.2.167

### get

# LIB\_SimulationModel.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取仿真模型的所有属性

## Signature

```typescript
public get(simulationModelUuid: string, libraryUuid?: string): Promise<ILIB_SimulationModelItem | undefined>;
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

simulationModelUuid


</td><td>

string


</td><td>

仿真模型 UUID


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

Promise&lt;[ILIB\_SimulationModelItem](../interfaces/ILIB_SimulationModelItem.md) \| undefined&gt;

仿真模型属性

## Remarks

注意：本接口仅私有化部署版本有效，如若在其他版本调用将始终 `throw Error` ADD since EDA v3.2.167

### modify

# LIB\_SimulationModel.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改仿真模型

## Signature

```typescript
public modify(simulationModelUuid: string, libraryUuid: string, modelProps?: { modelName?: undefined | string; modelCategory?: undefined | string; modelPin?: undefined | string }, classification?: Array<string> | null, description?: string | null): Promise<boolean>;
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

simulationModelUuid


</td><td>

string


</td><td>

仿真模型 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

modelProps


</td><td>

\{ modelName?: undefined \| string; modelCategory?: undefined \| string; modelPin?: undefined \| string \}


</td><td>

_(Optional)_ 仿真模型属性


</td></tr>
<tr><td>

classification


</td><td>

Array&lt;string&gt; \| null


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

description


</td><td>

string \| null


</td><td>

_(Optional)_ 描述


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

如希望清除某些属性，则将其的值设置为 `null` ADD since EDA v3.2.167

### search

# LIB\_SimulationModel.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

搜索仿真模型

## Signature

```typescript
public search(key: string, libraryUuid?: string, classification?: Array<string>, simulationModelType?: ELIB_SimulationModelType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_SimulationModelSearchItem>>;
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

Array&lt;string&gt;


</td><td>

_(Optional)_ 分类，默认为全部


</td></tr>
<tr><td>

simulationModelType


</td><td>

[ELIB\_SimulationModelType](../enums/ELIB_SimulationModelType.md)


</td><td>

_(Optional)_ 仿真模型类型，默认为全部


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

Promise&lt;Array&lt;[ILIB\_SimulationModelSearchItem](../interfaces/ILIB_SimulationModelSearchItem.md)<!-- -->&gt;&gt;

搜索到的仿真模型属性列表

## Remarks

ADD since EDA v3.2.167
