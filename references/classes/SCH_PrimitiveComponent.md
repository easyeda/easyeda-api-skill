# SCH\_PrimitiveComponent class

原理图 &amp; 符号 / 器件图元类

## Signature

```typescript
export class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(component, x, y, subPartName, rotation, mirror, addIntoBom, addIntoPcb)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 创建器件


</td></tr>
<tr><td>

[createCbbSymbol(cbbSymbol, x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 创建复用模块符号


</td></tr>
<tr><td>

[createNetFlag(identification, net, x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 创建网络标识


</td></tr>
<tr><td>

[createNetPort(direction, net, x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 创建网络端口


</td></tr>
<tr><td>

[createShortCircuitFlag(x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 创建短接标识


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 删除器件


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件


</td></tr>
<tr><td>

[getAll(componentType, allSchematicPages)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有器件


</td></tr>
<tr><td>

[getAllPinsByPrimitiveId(primitiveId)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件关联的所有引脚


</td></tr>
<tr><td>

[getAllPrimitiveId(componentType, allSchematicPages)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有器件的图元 ID


</td></tr>
<tr><td>

[getAllPropertyNames()](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有器件的所有属性名称集合


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 修改器件


</td></tr>
<tr><td>

[placeCbbSchematicPage(cbbSchematicPage, x, y, props)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 放置复用模块原理图图页


</td></tr>
<tr><td>

[placeComponentWithMouse(component, subPartName)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 使用鼠标放置器件


</td></tr>
<tr><td>

[placeSymbolWithMouse(symbol, subPartName, properties)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 使用鼠标放置符号


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_AnalogGround(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置在扩展 API 中 AnalogGround 网络标识关联的器件 UUID


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_Ground(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置在扩展 API 中 Ground 网络标识关联的器件 UUID


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_Power(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置在扩展 API 中 Power 网络标识关联的器件 UUID


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_ProtectGround(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置在扩展 API 中 ProtectGround 网络标识关联的器件 UUID


</td></tr>
<tr><td>

[setNetPortComponentUuid\_BI(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置在扩展 API 中 BI 网络端口关联的器件 UUID


</td></tr>
<tr><td>

[setNetPortComponentUuid\_IN(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置在扩展 API 中 IN 网络端口关联的器件 UUID


</td></tr>
<tr><td>

[setNetPortComponentUuid\_OUT(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置在扩展 API 中 OUT 网络端口关联的器件 UUID


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveComponent.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建器件

## Signature

```typescript
public create(component: { libraryType?: undefined | ELIB_LibraryType.DEVICE; libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem | { libraryType: ELIB_LibraryType.SYMBOL; libraryUuid: string; uuid: string } | ILIB_SymbolItem | ILIB_SymbolSearchItem, x: number, y: number, subPartName?: string, rotation?: number, mirror?: boolean, addIntoBom?: boolean, addIntoPcb?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
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

{ libraryType?: undefined \| [ELIB\_LibraryType.DEVICE](../enums/ELIB_LibraryType.md)<!-- -->; libraryUuid: string; uuid: string } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md) \| { libraryType: [ELIB\_LibraryType.SYMBOL](../enums/ELIB_LibraryType.md)<!-- -->; libraryUuid: string; uuid: string } \| [ILIB\_SymbolItem](../interfaces/ILIB_SymbolItem.md) \| [ILIB\_SymbolSearchItem](../interfaces/ILIB_SymbolSearchItem.md)


</td><td>

关联库器件


</td></tr>
<tr><td>

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

subPartName


</td><td>

string


</td><td>

_(Optional)_ 子部件名称


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否镜像


</td></tr>
<tr><td>

addIntoBom


</td><td>

boolean


</td><td>

_(Optional)_ 是否加入 BOM


</td></tr>
<tr><td>

addIntoPcb


</td><td>

boolean


</td><td>

_(Optional)_ 是否转到 PCB


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

器件图元对象

### createcbbsymbol

# SCH\_PrimitiveComponent.createCbbSymbol() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建复用模块符号

## Signature

```typescript
public createCbbSymbol(cbbSymbol: { libraryUuid: string; cbbUuid: string; uuid?: undefined | string }, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveCbbSymbolComponent | undefined>;
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

cbbSymbol


</td><td>

\{ libraryUuid: string; cbbUuid: string; uuid?: undefined \| string \}


</td><td>

关联库复用模块符号，`libraryUuid` 是 CBB 工程所在库的 UUID，`cbbUuid` 是 CBB 工程的 UUID，`uuid` 是 CBB 工程内符号的 UUID


</td></tr>
<tr><td>

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否镜像


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCbbSymbolComponent](./ISCH_PrimitiveCbbSymbolComponent.md) \| undefined&gt;

复用模块符号图元对象

### createnetflag

# SCH\_PrimitiveComponent.createNetFlag() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建网络标识

## Signature

```typescript
public createNetFlag(identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
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

identification


</td><td>

'Power' \| 'Ground' \| 'AnalogGround' \| 'ProtectGround'


</td><td>

标识类型


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

网络名称


</td></tr>
<tr><td>

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否镜像


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

器件图元对象

### createnetport

# SCH\_PrimitiveComponent.createNetPort() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建网络端口

## Signature

```typescript
public createNetPort(direction: 'IN' | 'OUT' | 'BI', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
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

direction


</td><td>

'IN' \| 'OUT' \| 'BI'


</td><td>

端口方向


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

网络名称


</td></tr>
<tr><td>

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否镜像


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

器件图元对象

### createshortcircuitflag

# SCH\_PrimitiveComponent.createShortCircuitFlag() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建短接标识

## Signature

```typescript
public createShortCircuitFlag(x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
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

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否镜像


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

器件图元对象

### delete

# SCH\_PrimitiveComponent.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除器件

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveComponent | Array<string> | Array<ISCH_PrimitiveComponent>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;


</td><td>

器件的图元 ID 或器件图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveComponent | undefined>;
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

器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

器件图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveComponent>>;
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

器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;&gt;

器件图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveComponent.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有器件

## Signature

```typescript
public getAll(componentType?: ESCH_PrimitiveComponentType, allSchematicPages?: boolean): Promise<Array<ISCH_PrimitiveComponent>>;
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

componentType


</td><td>

[ESCH\_PrimitiveComponentType](../enums/ESCH_PrimitiveComponentType.md)


</td><td>

_(Optional)_ 器件类型


</td></tr>
<tr><td>

allSchematicPages


</td><td>

boolean


</td><td>

_(Optional)_ 是否获取所有原理图图页的器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;&gt;

器件图元对象数组

### getallpinsbyprimitiveid

# SCH\_PrimitiveComponent.getAllPinsByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件关联的所有引脚

## Signature

```typescript
public getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;
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

器件图元 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)<!-- -->&gt; \| undefined&gt;

器件引脚图元数组

### getallprimitiveid

# SCH\_PrimitiveComponent.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有器件的图元 ID

## Signature

```typescript
public getAllPrimitiveId(componentType?: ESCH_PrimitiveComponentType, allSchematicPages?: boolean): Promise<Array<string>>;
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

componentType


</td><td>

[ESCH\_PrimitiveComponentType](../enums/ESCH_PrimitiveComponentType.md)


</td><td>

_(Optional)_ 器件类型


</td></tr>
<tr><td>

allSchematicPages


</td><td>

boolean


</td><td>

_(Optional)_ 是否获取所有原理图图页的器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

器件的图元 ID 数组

### getallpropertynames

# SCH\_PrimitiveComponent.getAllPropertyNames() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有器件的所有属性名称集合

## Signature

```typescript
public getAllPropertyNames(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

所有器件的所有属性名称集合

### modify

# SCH\_PrimitiveComponent.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改器件

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveComponent, property: { x?: undefined | number; y?: undefined | number; rotation?: undefined | number; mirror?: undefined | false | true; addIntoBom?: undefined | false | true; addIntoPcb?: undefined | false | true; designator?: undefined | null | string; name?: undefined | null | string; uniqueId?: undefined | null | string; manufacturer?: undefined | null | string; manufacturerId?: undefined | null | string; supplier?: undefined | null | string; supplierId?: undefined | null | string; otherProperty?: undefined | Record<string, string | number | false | true> }): Promise<ISCH_PrimitiveComponent | undefined>;
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

string \| [ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: undefined \| number; y?: undefined \| number; rotation?: undefined \| number; mirror?: undefined \| false \| true; addIntoBom?: undefined \| false \| true; addIntoPcb?: undefined \| false \| true; designator?: undefined \| null \| string; name?: undefined \| null \| string; uniqueId?: undefined \| null \| string; manufacturer?: undefined \| null \| string; manufacturerId?: undefined \| null \| string; supplier?: undefined \| null \| string; supplierId?: undefined \| null \| string; otherProperty?: undefined \| Record&lt;string, string \| number \| false \| true&gt; }


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

器件图元对象

## Remarks

仅当器件类型为 [COMPONENT](../enums/ESCH_PrimitiveComponentType.md) 时允许使用该方法进行修改

### placecbbschematicpage

# SCH\_PrimitiveComponent.placeCbbSchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

放置复用模块原理图图页

## Signature

```typescript
public placeCbbSchematicPage(cbbSchematicPage: { libraryUuid: string; cbbUuid: string; uuid: string }, x: number, y: number, props?: { reimportWhenNameRepeated?: undefined | false | true }): Promise<boolean>;
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

cbbSchematicPage


</td><td>

\{ libraryUuid: string; cbbUuid: string; uuid: string \}


</td><td>

复用模块原理图图页，`libraryUuid` 是 CBB 工程所在库的 UUID，`cbbUuid` 是 CBB 工程的 UUID，`uuid` 是 CBB 工程内原理图图页的 UUID


</td></tr>
<tr><td>

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

props


</td><td>

\{ reimportWhenNameRepeated?: undefined \| false \| true \}


</td><td>

_(Optional)_ 放置参数：`reimportWhenNameRepeated` 当存在重名模块时是否重新引入，默认 `true` ADD since EDA v4.2


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

放置操作是否成功

### placecomponentwithmouse

# SCH\_PrimitiveComponent.placeComponentWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用鼠标放置器件

## Signature

```typescript
public placeComponentWithMouse(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, subPartName?: string): Promise<boolean>;
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

关联库器件


</td></tr>
<tr><td>

subPartName


</td><td>

string


</td><td>

_(Optional)_ 子部件名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否找到器件

## Remarks

本接口模拟前端点击放置按钮，指定的器件将绑定到当前鼠标，并在用户后续点击时放置于画布

本接口的返回时机并不会等待用户的放置操作，一旦器件被绑定到鼠标，本接口将立即返回 `true` 的结果

### placesymbolwithmouse

# SCH\_PrimitiveComponent.placeSymbolWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用鼠标放置符号

## Signature

```typescript
public placeSymbolWithMouse(symbol: { libraryUuid: string; uuid: string } | ILIB_SymbolItem | ILIB_SymbolSearchItem, subPartName?: string, properties?: Record<string, boolean | number | string | undefined>): Promise<boolean>;
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

symbol


</td><td>

{ libraryUuid: string; uuid: string } \| [ILIB\_SymbolItem](../interfaces/ILIB_SymbolItem.md) \| [ILIB\_SymbolSearchItem](../interfaces/ILIB_SymbolSearchItem.md)


</td><td>

关联库符号


</td></tr>
<tr><td>

subPartName


</td><td>

string


</td><td>

_(Optional)_ 子部件名称


</td></tr>
<tr><td>

properties


</td><td>

Record&lt;string, boolean \| number \| string \| undefined&gt;


</td><td>

_(Optional)_ 器件属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否找到符号

## Remarks

本接口模拟前端点击放置按钮，指定的符号将绑定到当前鼠标，并在用户后续点击时放置于画布

本接口的返回时机并不会等待用户的放置操作，一旦符号被绑定到鼠标，本接口将立即返回 `true` 的结果 ADD since API v0.2.26

### setnetflagcomponentuuid_analogground

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_AnalogGround() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 AnalogGround 网络标识关联的器件 UUID

## Signature

```typescript
public setNetFlagComponentUuid_AnalogGround(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setnetflagcomponentuuid_ground

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_Ground() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 Ground 网络标识关联的器件 UUID

## Signature

```typescript
public setNetFlagComponentUuid_Ground(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setnetflagcomponentuuid_power

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_Power() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 Power 网络标识关联的器件 UUID

## Signature

```typescript
public setNetFlagComponentUuid_Power(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setnetflagcomponentuuid_protectground

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_ProtectGround() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 ProtectGround 网络标识关联的器件 UUID

## Signature

```typescript
public setNetFlagComponentUuid_ProtectGround(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setnetportcomponentuuid_bi

# SCH\_PrimitiveComponent.setNetPortComponentUuid\_BI() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 BI 网络端口关联的器件 UUID

## Signature

```typescript
public setNetPortComponentUuid_BI(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setnetportcomponentuuid_in

# SCH\_PrimitiveComponent.setNetPortComponentUuid\_IN() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 IN 网络端口关联的器件 UUID

## Signature

```typescript
public setNetPortComponentUuid_IN(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setnetportcomponentuuid_out

# SCH\_PrimitiveComponent.setNetPortComponentUuid\_OUT() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 OUT 网络端口关联的器件 UUID

## Signature

```typescript
public setNetPortComponentUuid_OUT(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功
