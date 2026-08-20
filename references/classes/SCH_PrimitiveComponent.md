# SCH\_PrimitiveComponent class

Schematic &amp; symbol / device primitive class

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

**_(BETA)_** Create Device


</td></tr>
<tr><td>

[createCbbSymbol(cbbSymbol, x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Create Reuse block symbol


</td></tr>
<tr><td>

[createNetFlag(identification, net, x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Create Net flag


</td></tr>
<tr><td>

[createNetPort(direction, net, x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Create Net port


</td></tr>
<tr><td>

[createShortCircuitFlag(x, y, rotation, mirror)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Create a short circuit flag


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Delete Device


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get Device


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get Device


</td></tr>
<tr><td>

[getAll(componentType, allSchematicPages)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get all Device


</td></tr>
<tr><td>

[getAllPinsByPrimitiveId(primitiveId)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get all pins associated with the device


</td></tr>
<tr><td>

[getAllPrimitiveId(componentType, allSchematicPages)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get all Device primitive IDs


</td></tr>
<tr><td>

[getAllPropertyNames()](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get The set of all property names of all devices


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Modify Device


</td></tr>
<tr><td>

[placeCbbSchematicPage(cbbSchematicPage, x, y, props)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Place reuse block schematic sheet


</td></tr>
<tr><td>

[placeComponentWithMouse(component, subPartName)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Place with the mouse device


</td></tr>
<tr><td>

[placeSymbolWithMouse(symbol, subPartName, properties)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Place with the mouse symbol


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_AnalogGround(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the device UUID associated with the AnalogGround net flag in the extension API


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_Ground(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the device UUID associated with the Ground net flag in the extension API


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_Power(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the device UUID associated with the Power net flag in the extension API


</td></tr>
<tr><td>

[setNetFlagComponentUuid\_ProtectGround(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the device UUID associated with the ProtectGround net flag in the extension API


</td></tr>
<tr><td>

[setNetPortComponentUuid\_BI(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the device UUID associated with the BI net port in the extension API


</td></tr>
<tr><td>

[setNetPortComponentUuid\_IN(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the device UUID associated with the IN net port in the extension API


</td></tr>
<tr><td>

[setNetPortComponentUuid\_OUT(component)](./SCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the device UUID associated with the OUT net port in the extension API


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveComponent.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Device

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

Associate library device


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

subPartName


</td><td>

string


</td><td>

_(Optional)_ Sub-part name


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is mirrored


</td></tr>
<tr><td>

addIntoBom


</td><td>

boolean


</td><td>

_(Optional)_ Whether Add to BOM


</td></tr>
<tr><td>

addIntoPcb


</td><td>

boolean


</td><td>

_(Optional)_ Whether Transfer to PCB


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

Device primitive object

## Example


```javascript
// 1. 从系统库搜索器件，随机坐标避免与画布已有器件重合（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建器件：搜索结果直接作为关联库器件传入，加入 BOM 并转到 PCB
const comp = await eda.sch_PrimitiveComponent.create(
  devices[0],  // 关联库器件
  x,           // 坐标 X
  y,           // 坐标 Y
  undefined,   // 子部件名称（多子部件器件才需要指定）
  0,           // 旋转角度
  false,       // 是否镜像
  true,        // 是否加入 BOM
  true         // 是否转到 PCB
);

// 3. 创建类保留现场，供在画布上观察摆放结果
console.log('primitiveId:', comp.getState_PrimitiveId());
console.log('designator:', comp.getState_Designator());
console.log('position:', comp.getState_X(), ',', comp.getState_Y());
console.log('addIntoBom:', comp.getState_AddIntoBom());
```

### createcbbsymbol

# SCH\_PrimitiveComponent.createCbbSymbol() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Reuse block symbol

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

Associated library reuse block symbol. `libraryUuid` is the UUID of the library where the CBB project is located, `cbbUuid` is the UUID of the CBB project, and `uuid` is the UUID of the symbol in the CBB project


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

mirror


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is mirrored


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveCbbSymbolComponent](./ISCH_PrimitiveCbbSymbolComponent.md) \| undefined&gt;

Reuse block symbol primitive object

## Example


```javascript
// 1. 从系统库搜索可用的复用模块
const cbbList = await eda.lib_Cbb.search('');
const cbb = cbbList[0];

// 2. 随机坐标避免与画布已有图元重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 3. 创建复用模块符号（cbbUuid 传模块工程 UUID，符号 uuid 可省略由模块默认提供）
const symbol = await eda.sch_PrimitiveComponent.createCbbSymbol(
  {
    libraryUuid: cbb.libraryUuid,  // CBB 工程所在库的 UUID
    cbbUuid: cbb.uuid              // CBB 工程的 UUID
  },
  x,      // 坐标 X
  y,      // 坐标 Y
  0,      // 旋转角度
  false   // 是否镜像
);

// 4. 创建类保留现场，供在画布上观察模块符号
console.log('primitiveId:', symbol.getState_PrimitiveId());
console.log('primitiveType:', symbol.getState_PrimitiveType());
console.log('position:', symbol.getState_X(), ',', symbol.getState_Y());
```

### createnetflag

# SCH\_PrimitiveComponent.createNetFlag() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Net flag

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

Identification type


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

Net name


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

mirror


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is mirrored


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

Device primitive object

## Example


```javascript
// 1. 随机坐标避免与画布已有图元重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建 Power 类型的网络标识，网络名为 VCC
const flag = await eda.sch_PrimitiveComponent.createNetFlag(
  'Power',            // 标识类型：'Power' / 'Ground' / 'AnalogGround' / 'ProtectGround'
  '嘉立创示例_VCC',   // 网络名称
  x,                  // 坐标 X
  y,                  // 坐标 Y
  0,                  // 旋转角度
  false               // 是否镜像
);

// 3. 创建类保留现场，供在画布上观察标识样式
console.log('primitiveId:', flag.getState_PrimitiveId());
console.log('net:', flag.getState_Net());
console.log('componentType:', flag.getState_ComponentType());
```

### createnetport

# SCH\_PrimitiveComponent.createNetPort() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Net port

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

Port direction


</td></tr>
<tr><td>

net


</td><td>

string


</td><td>

Net name


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

mirror


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is mirrored


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

Device primitive object

## Example


```javascript
// 1. 随机坐标避免与画布已有图元重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建输入方向的端口，网络名为 SIG_IN
const port = await eda.sch_PrimitiveComponent.createNetPort(
  'IN',               // 端口方向：'IN' / 'OUT' / 'BI'
  '嘉立创示例_SIG',   // 网络名称
  x,                  // 坐标 X
  y,                  // 坐标 Y
  0,                  // 旋转角度
  false               // 是否镜像
);

// 3. 创建类保留现场，供在画布上观察端口样式
console.log('primitiveId:', port.getState_PrimitiveId());
console.log('net:', port.getState_Net());
console.log('componentType:', port.getState_ComponentType());
```

### createshortcircuitflag

# SCH\_PrimitiveComponent.createShortCircuitFlag() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a short circuit flag

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

mirror


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is mirrored


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

Device primitive object

## Example


```javascript
// 1. 随机坐标避免与画布已有图元重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建短接标识（无网络名参数，仅位置与姿态）
const flag = await eda.sch_PrimitiveComponent.createShortCircuitFlag(
  x,      // 坐标 X
  y,      // 坐标 Y
  0,      // 旋转角度
  false   // 是否镜像
);

// 3. 创建类保留现场，供在画布上观察标识样式
console.log('primitiveId:', flag.getState_PrimitiveId());
console.log('componentType:', flag.getState_ComponentType());
console.log('position:', flag.getState_X(), ',', flag.getState_Y());
```

### delete

# SCH\_PrimitiveComponent.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Device

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

Device primitive ID or Device primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试器件（随机坐标避免重合，SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp1 = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const comp2 = await eda.sch_PrimitiveComponent.create(devices[0], x + 400, y);

// 2. 记录删除前的器件数量
const beforeCount = (await eda.sch_PrimitiveComponent.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两个器件
const deleted1 = await eda.sch_PrimitiveComponent.delete(comp1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitiveComponent.delete(comp2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveComponent.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Device

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

Device primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md) \| undefined&gt;

Device primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两个测试器件（随机坐标避免重合，SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp1 = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const comp2 = await eda.sch_PrimitiveComponent.create(devices[0], x + 400, y);

// 2. 传单个 ID 字符串，返回单个器件对象
const single = await eda.sch_PrimitiveComponent.get(comp1.getState_PrimitiveId());

// 3. 传 ID 数组，返回器件对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveComponent.get([
  comp1.getState_PrimitiveId(),
  comp2.getState_PrimitiveId()
]);

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([comp1.getState_PrimitiveId(), comp2.getState_PrimitiveId()]);

console.log('single designator:', single.getState_Designator());
console.log('array length:', arr.length);
console.log('comp2 designator:', arr[1].getState_Designator());
```

### get_1

# SCH\_PrimitiveComponent.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Device

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

Device primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;&gt;

Device primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveComponent.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Device

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

_(Optional)_ Device type


</td></tr>
<tr><td>

allSchematicPages


</td><td>

boolean


</td><td>

_(Optional)_ Whether to get the devices of all schematic sheets


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;&gt;

Array of Device primitive objects

## Example


```javascript
// 1. 创建一个普通元件和一个网络标识作为查找目标（随机坐标避免重合）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const flag = await eda.sch_PrimitiveComponent.createNetFlag('Power', '嘉立创示例_VCC', x + 600, y);
const compId = comp.getState_PrimitiveId();

// 2. 不传参数，取当前图页全部器件
const all = await eda.sch_PrimitiveComponent.getAll();

// 3. 传入类型 'netflag' 只取网络标识（ESCH_PrimitiveComponentType 值）
const flags = await eda.sch_PrimitiveComponent.getAll('netflag');

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId, flag.getState_PrimitiveId()]);

console.log('total components:', all.length);
console.log('marker comp found:', all.some(c => c.getState_PrimitiveId() === compId));
console.log('netflag count:', flags.length);
```

### getallpinsbyprimitiveid

# SCH\_PrimitiveComponent.getAllPinsByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all pins associated with the device

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

Device primitive ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)<!-- -->&gt; \| undefined&gt;

Device pin primitive array

## Example


```javascript
// 1. 创建一个带引脚的测试器件（随机坐标避免重合，SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();

// 2. 按图元 ID 取出该器件的全部引脚（返回纯数据对象，字段直接可读）
const pins = await eda.sch_PrimitiveComponent.getAllPinsByPrimitiveId(compId);

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('pin count:', pins.length);
console.log('first pin number:', pins[0].pinNumber);
console.log('first pin type:', pins[0].pinType);
```

### getallprimitiveid

# SCH\_PrimitiveComponent.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Device primitive IDs

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

_(Optional)_ Device type


</td></tr>
<tr><td>

allSchematicPages


</td><td>

boolean


</td><td>

_(Optional)_ Whether to get the devices of all schematic sheets


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Device primitive IDs

## Example


```javascript
// 1. 创建一个网络标识作为查找目标（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const flag = await eda.sch_PrimitiveComponent.createNetFlag('Power', '嘉立创示例_VCC', x, y);
const flagId = flag.getState_PrimitiveId();

// 2. 不传参数，取当前图页全部器件的图元 ID
const allIds = await eda.sch_PrimitiveComponent.getAllPrimitiveId();

// 3. 传入类型 'netflag' 只取网络标识的图元 ID
const flagIds = await eda.sch_PrimitiveComponent.getAllPrimitiveId('netflag');

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([flagId]);

console.log('total ids:', allIds.length);
console.log('netflag ids:', flagIds.length);
console.log('marker flag found:', flagIds.includes(flagId));
```

### getallpropertynames

# SCH\_PrimitiveComponent.getAllPropertyNames() method

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
// 1. 创建一个测试器件，保证画布上有带属性的器件（随机坐标避免重合）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);

// 2. 取所有器件出现过的属性名称集合
const names = await eda.sch_PrimitiveComponent.getAllPropertyNames();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([comp.getState_PrimitiveId()]);

console.log('property name count:', names.length);
console.log('names:', names.join(', '));
```

### modify

# SCH\_PrimitiveComponent.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Device

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

Primitive ID


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

Device primitive object

## Remarks

This method can only be used for modification when the device type is [COMPONENT](../enums/ESCH_PrimitiveComponentType.md)

## Example


```javascript
// 1. 创建待修改的测试器件（随机坐标避免与画布已有器件重合）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();

// 2. 读取修改前的位号、旋转与 X 坐标
const beforeDesignator = comp.getState_Designator();
const beforeRotation = comp.getState_Rotation();
const beforeX = comp.getState_X();

// 3. 批量修改：右移 400（约 101.6mm）、旋转 90 度、位号改为 U100
await eda.sch_PrimitiveComponent.modify(compId, {
  x: x + 400,
  rotation: 90,
  designator: '嘉立创示例_U100'
});

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitiveComponent.get(compId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', compId);
console.log('designator:', beforeDesignator, '→', refreshed.getState_Designator());
console.log('rotation:', beforeRotation, '→', refreshed.getState_Rotation());
console.log('x:', beforeX, '→', refreshed.getState_X());
```

### placecbbschematicpage

# SCH\_PrimitiveComponent.placeCbbSchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Place reuse block schematic sheet

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

Reuse block schematic sheet. `libraryUuid` is the UUID of the library where the CBB project is located, `cbbUuid` is the UUID of the CBB project, and `uuid` is the UUID of the schematic sheet in the CBB project


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

props


</td><td>

\{ reimportWhenNameRepeated?: undefined \| false \| true \}


</td><td>

_(Optional)_ Placement parameters: `reimportWhenNameRepeated` - whether to re-import when a module with the same name exists, default `true`<!-- -->. ADD since EDA v4.2


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Place whether the operation is successful

### placecomponentwithmouse

# SCH\_PrimitiveComponent.placeComponentWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Place with the mouse device

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

Associate library device


</td></tr>
<tr><td>

subPartName


</td><td>

string


</td><td>

_(Optional)_ Sub-part name


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the device was found

## Remarks

This API simulates clicking the placement button on the front end. The specified device will be bound to the current mouse and placed on the canvas when the user clicks subsequently

The return timing of this API does not wait for the user's placement operation. Once the device is bound to the mouse, this API will immediately return `true`

### placesymbolwithmouse

# SCH\_PrimitiveComponent.placeSymbolWithMouse() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Place with the mouse symbol

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

Associate library symbol


</td></tr>
<tr><td>

subPartName


</td><td>

string


</td><td>

_(Optional)_ Sub-part name


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

Whether the symbol was found

## Remarks

This API simulates clicking the placement button on the front end. The specified symbol will be bound to the current mouse and placed on the canvas when the user clicks subsequently

The return timing of this API does not wait for the user's placement operation. Once the symbol is bound to the mouse, this API will immediately return `true` ADD since API v0.2.26

### setnetflagcomponentuuid_analogground

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_AnalogGround() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the device UUID associated with the AnalogGround net flag in the extension API

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

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### setnetflagcomponentuuid_ground

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_Ground() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the device UUID associated with the Ground net flag in the extension API

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

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### setnetflagcomponentuuid_power

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_Power() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the device UUID associated with the Power net flag in the extension API

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

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### setnetflagcomponentuuid_protectground

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_ProtectGround() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the device UUID associated with the ProtectGround net flag in the extension API

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

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### setnetportcomponentuuid_bi

# SCH\_PrimitiveComponent.setNetPortComponentUuid\_BI() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the device UUID associated with the BI net port in the extension API

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

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### setnetportcomponentuuid_in

# SCH\_PrimitiveComponent.setNetPortComponentUuid\_IN() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the device UUID associated with the IN net port in the extension API

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

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

### setnetportcomponentuuid_out

# SCH\_PrimitiveComponent.setNetPortComponentUuid\_OUT() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the device UUID associated with the OUT net port in the extension API

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

Associate library device


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful
