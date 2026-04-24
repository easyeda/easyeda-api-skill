# PCB\_PrimitiveComponent class

PCB &amp; 封装 / 器件图元类

## Signature

```typescript
declare class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI 
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

**_(BETA)_** 创建器件


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 删除器件


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有器件


</td></tr>
<tr><td>

[getAllPinsByPrimitiveId(primitiveId)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件关联的所有焊盘


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有器件的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 修改器件


</td></tr>
<tr><td>

[placeComponentWithMouse(component)](./PCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 使用鼠标放置器件


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveComponent.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建器件

## Signature

```typescript
create(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem | {
        libraryType: ELIB_LibraryType.FOOTPRINT;
        libraryUuid: string;
        uuid: string;
    } | ILIB_FootprintItem | ILIB_FootprintSearchItem, layer: TPCB_LayersOfComponent, x: number, y: number, rotation?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveComponent | undefined>;
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

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](../interfaces/ILIB_DeviceItem.md) \| [ILIB\_DeviceSearchItem](../interfaces/ILIB_DeviceSearchItem.md) \| { libraryType: [ELIB\_LibraryType.FOOTPRINT](../enums/ELIB_LibraryType.md)<!-- -->; libraryUuid: string; uuid: string; } \| [ILIB\_FootprintItem](../interfaces/ILIB_FootprintItem.md) \| [ILIB\_FootprintSearchItem](../interfaces/ILIB_FootprintSearchItem.md)


</td><td>

关联库器件


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfComponent](../types/TPCB_LayersOfComponent.md)


</td><td>

层


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

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md) \| undefined&gt;

器件图元对象

### delete

# PCB\_PrimitiveComponent.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除器件

## Signature

```typescript
delete(primitiveIds: string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>): Promise<boolean>;
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

器件的图元 ID 或器件图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件

## Signature

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveComponent | undefined>;
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

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md) \| undefined&gt;

器件图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveComponent>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)<!-- -->&gt;&gt;

器件图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveComponent.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有器件

## Signature

```typescript
getAll(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveComponent>>;
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

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)<!-- -->&gt;&gt;

器件图元对象数组

### getallpinsbyprimitiveid

# PCB\_PrimitiveComponent.getAllPinsByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件关联的所有焊盘

## Signature

```typescript
getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>;
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

Promise&lt;Array&lt;[IPCB\_PrimitiveComponentPad](./IPCB_PrimitiveComponentPad.md)<!-- -->&gt; \| undefined&gt;

器件焊盘图元数组

### getallprimitiveid

# PCB\_PrimitiveComponent.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有器件的图元 ID

## Signature

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<string>>;
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

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

器件的图元 ID 数组

### modify

# PCB\_PrimitiveComponent.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改器件

## Signature

```typescript
modify(primitiveId: string | IPCB_PrimitiveComponent, property: {
        layer?: TPCB_LayersOfComponent;
        x?: number;
        y?: number;
        rotation?: number;
        primitiveLock?: boolean;
        addIntoBom?: boolean;
        designator?: string | null;
        name?: string | null;
        uniqueId?: string | null;
        manufacturer?: string | null;
        manufacturerId?: string | null;
        supplier?: string | null;
        supplierId?: string | null;
        otherProperty?: {
            [key: string]: any;
        };
    }): Promise<IPCB_PrimitiveComponent | undefined>;
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

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: [TPCB\_LayersOfComponent](../types/TPCB_LayersOfComponent.md)<!-- -->; x?: number; y?: number; rotation?: number; primitiveLock?: boolean; addIntoBom?: boolean; designator?: string \| null; name?: string \| null; uniqueId?: string \| null; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: { \[key: string\]: any; }; }


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md) \| undefined&gt;

器件图元对象

### placecomponentwithmouse

# PCB\_PrimitiveComponent.placeComponentWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

使用鼠标放置器件

## Signature

```typescript
placeComponentWithMouse(component: {
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

是否找到器件

## Remarks

本接口模拟前端点击放置按钮，指定的器件将绑定到当前鼠标，并在用户后续点击时放置于画布

本接口的返回时机并不会等待用户的放置操作，一旦器件被绑定到鼠标，本接口将立即返回 `true` 的结果
