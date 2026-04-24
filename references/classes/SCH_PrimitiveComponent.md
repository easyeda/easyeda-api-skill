# SCH\_PrimitiveComponent class

原理图 &amp; 符号 / 器件图元类

## Signature

```typescript
declare class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI 
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

[placeComponentWithMouse(component, subPartName)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 使用鼠标放置器件


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
create(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem, x: number, y: number, subPartName?: string, rotation?: number, mirror?: boolean, addIntoBom?: boolean, addIntoPcb?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


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

_(Optional)_ 子图块名称


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

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象

### createnetflag

# SCH\_PrimitiveComponent.createNetFlag() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建网络标识

## Signature

```typescript
createNetFlag(identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象

### createnetport

# SCH\_PrimitiveComponent.createNetPort() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建网络端口

## Signature

```typescript
createNetPort(direction: 'IN' | 'OUT' | 'BI', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象

### createshortcircuitflag

# SCH\_PrimitiveComponent.createShortCircuitFlag() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建短接标识

## Signature

```typescript
createShortCircuitFlag(x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象

### delete

# SCH\_PrimitiveComponent.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除器件

## Signature

```typescript
delete(primitiveIds: string | ISCH_PrimitiveComponent$1 | Array<string> | Array<ISCH_PrimitiveComponent$1>): Promise<boolean>;
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

string \| ISCH\_PrimitiveComponent$1 \| Array&lt;string&gt; \| Array&lt;ISCH\_PrimitiveComponent$1&gt;


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
get(primitiveIds: string): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveComponent$1>>;
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

Promise&lt;Array&lt;ISCH\_PrimitiveComponent$1&gt;&gt;

器件图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveComponent.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有器件

## Signature

```typescript
getAll(componentType?: ESCH_PrimitiveComponentType$1, allSchematicPages?: boolean): Promise<Array<ISCH_PrimitiveComponent$1>>;
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

[ESCH\_PrimitiveComponentType$1](../enums/ESCH_PrimitiveComponentType.md)


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

Promise&lt;Array&lt;ISCH\_PrimitiveComponent$1&gt;&gt;

器件图元对象数组

### getallpinsbyprimitiveid

# SCH\_PrimitiveComponent.getAllPinsByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件关联的所有引脚

## Signature

```typescript
getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;
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
getAllPrimitiveId(componentType?: ESCH_PrimitiveComponentType$1, allSchematicPages?: boolean): Promise<Array<string>>;
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

[ESCH\_PrimitiveComponentType$1](../enums/ESCH_PrimitiveComponentType.md)


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
getAllPropertyNames(): Promise<Array<string>>;
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
modify(primitiveId: string | ISCH_PrimitiveComponent$1, property: {
        x?: number;
        y?: number;
        rotation?: number;
        mirror?: boolean;
        addIntoBom?: boolean;
        addIntoPcb?: boolean;
        designator?: string | null;
        name?: string | null;
        uniqueId?: string | null;
        manufacturer?: string | null;
        manufacturerId?: string | null;
        supplier?: string | null;
        supplierId?: string | null;
        otherProperty?: {
            [key: string]: string | number | boolean;
        };
    }): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

string \| ISCH\_PrimitiveComponent$1


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

\{ x?: number; y?: number; rotation?: number; mirror?: boolean; addIntoBom?: boolean; addIntoPcb?: boolean; designator?: string \| null; name?: string \| null; uniqueId?: string \| null; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: \{ \[key: string\]: string \| number \| boolean; \}; \}


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象

## Remarks

仅当器件类型为 [COMPONENT](../enums/ESCH_PrimitiveComponentType.md) 时允许使用该方法进行修改

### placecomponentwithmouse

# SCH\_PrimitiveComponent.placeComponentWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用鼠标放置器件

## Signature

```typescript
placeComponentWithMouse(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem, subPartName?: string): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


</td><td>

关联库器件


</td></tr>
<tr><td>

subPartName


</td><td>

string


</td><td>

_(Optional)_


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否找到器件

## Remarks

本接口模拟前端点击放置按钮，指定的器件将绑定到当前鼠标，并在用户后续点击时放置于画布

本接口的返回时机并不会等待用户的放置操作，一旦器件被绑定到鼠标，本接口将立即返回 `true` 的结果

### setnetflagcomponentuuid_analogground

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_AnalogGround() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置在扩展 API 中 AnalogGround 网络标识关联的器件 UUID

## Signature

```typescript
setNetFlagComponentUuid_AnalogGround(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


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
setNetFlagComponentUuid_Ground(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


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
setNetFlagComponentUuid_Power(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


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
setNetFlagComponentUuid_ProtectGround(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


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
setNetPortComponentUuid_BI(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


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
setNetPortComponentUuid_IN(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


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
setNetPortComponentUuid_OUT(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md)


</td><td>

关联库器件


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功
