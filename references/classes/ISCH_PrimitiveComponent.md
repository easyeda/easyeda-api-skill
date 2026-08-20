# ISCH\_PrimitiveComponent class

Device primitive

## Signature

```typescript
export class ISCH_PrimitiveComponent implements ISCH_Primitive 
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks


## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[async](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

异步


</td></tr>
<tr><td>

[designator?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_(Optional)_ Component 属性：位号


</td></tr>
<tr><td>

[mirror](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

是否镜像


</td></tr>
<tr><td>

[name?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_(Optional)_ Component 属性：名称


</td></tr>
<tr><td>

[otherProperty?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

Record&lt;string, string \| number \| boolean&gt;


</td><td>

_(Optional)_ 其它参数


</td></tr>
<tr><td>

[primitiveId?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_(Optional)_ 图元 ID


</td></tr>
<tr><td>

[rotation](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

number


</td><td>

旋转角度


</td></tr>
<tr><td>

[x](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

[y](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

number


</td><td>

坐标 Y


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas


</td></tr>
<tr><td>

[getAllPins()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Get all pins associated with the device


</td></tr>
<tr><td>

[getState\_AddIntoBom()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: whether to add BOM


</td></tr>
<tr><td>

[getState\_AddIntoPcb()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: whether to switch to PCB


</td></tr>
<tr><td>

[getState\_Component()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: associate library device


</td></tr>
<tr><td>

[getState\_ComponentType()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: device type


</td></tr>
<tr><td>

[getState\_Designator()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: designator


</td></tr>
<tr><td>

[getState\_Footprint()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: associate library footprint


</td></tr>
<tr><td>

[getState\_Manufacturer()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: manufacturer


</td></tr>
<tr><td>

[getState\_ManufacturerId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: manufacturer ID


</td></tr>
<tr><td>

[getState\_Mirror()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: whether it is mirrored


</td></tr>
<tr><td>

[getState\_Name()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: name


</td></tr>
<tr><td>

[getState\_Net()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: net name


</td></tr>
<tr><td>

[getState\_OtherProperty()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: other parameters


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: primitive ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: primitive type


</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: rotation angle


</td></tr>
<tr><td>

[getState\_SubPartName()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: sub-part name


</td></tr>
<tr><td>

[getState\_Supplier()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: supplier


</td></tr>
<tr><td>

[getState\_SupplierId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: supplier ID


</td></tr>
<tr><td>

[getState\_Symbol()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: associate library symbol


</td></tr>
<tr><td>

[getState\_UniqueId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: unique ID


</td></tr>
<tr><td>

[getState\_X()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: X coordinate


</td></tr>
<tr><td>

[getState\_Y()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Get the property state: Y coordinate


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Query whether the primitive is an async primitive


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state


</td></tr>
<tr><td>

[setState\_AddIntoBom(addIntoBom)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: whether to add BOM


</td></tr>
<tr><td>

[setState\_AddIntoPcb(addIntoPcb)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: whether to switch to PCB


</td></tr>
<tr><td>

[setState\_Designator(designator)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: designator


</td></tr>
<tr><td>

[setState\_Manufacturer(manufacturer)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: manufacturer


</td></tr>
<tr><td>

[setState\_ManufacturerId(manufacturerId)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: manufacturer ID


</td></tr>
<tr><td>

[setState\_Mirror(mirror)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: whether it is mirrored


</td></tr>
<tr><td>

[setState\_Name(name)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: name


</td></tr>
<tr><td>

[setState\_Net(net)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: net name


</td></tr>
<tr><td>

[setState\_OtherProperty(otherProperty)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: other parameters


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: rotation angle


</td></tr>
<tr><td>

[setState\_Supplier(supplier)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: supplier


</td></tr>
<tr><td>

[setState\_SupplierId(supplierId)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: supplier ID


</td></tr>
<tr><td>

[setState\_UniqueId(uniqueId)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: unique ID


</td></tr>
<tr><td>

[setState\_X(x)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: X coordinate


</td></tr>
<tr><td>

[setState\_Y(y)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: Y coordinate


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Convert Primitive to Async primitive


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

Convert Primitive to Sync primitive


</td></tr>
</tbody></table>

---

## 属性详情

### async

# ISCH\_PrimitiveComponent.async property

异步

## Signature

```typescript
protected async: boolean;
```

### designator

# ISCH\_PrimitiveComponent.designator property

Component 属性：位号

## Signature

```typescript
protected designator?: string;
```

### mirror

# ISCH\_PrimitiveComponent.mirror property

是否镜像

## Signature

```typescript
protected mirror: boolean;
```

### name

# ISCH\_PrimitiveComponent.name property

Component 属性：名称

## Signature

```typescript
protected name?: string;
```

### otherproperty

# ISCH\_PrimitiveComponent.otherProperty property

其它参数

## Signature

```typescript
protected otherProperty?: Record<string, string | number | boolean>;
```

### primitiveid

# ISCH\_PrimitiveComponent.primitiveId property

图元 ID

## Signature

```typescript
protected primitiveId?: string;
```

### rotation

# ISCH\_PrimitiveComponent.rotation property

旋转角度

## Signature

```typescript
protected rotation: number;
```

### x

# ISCH\_PrimitiveComponent.x property

坐标 X

## Signature

```typescript
protected x: number;
```

### y

# ISCH\_PrimitiveComponent.y property

坐标 Y

## Signature

```typescript
protected y: number;
```


---

## 方法详情

### done

# ISCH\_PrimitiveComponent.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
public done(): Promise<ISCH_PrimitiveComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);

// 3. 切换异步模式，累计两处修改（写正式位号 + 旋转 90°）
const asyncComp = comp.toAsync();
asyncComp.setState_Designator('C200');
asyncComp.setState_Rotation(90);

// 4. 一次性提交到画布
await asyncComp.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('designator: C? →', refetched.getState_Designator());
console.log('rotation: 0 →', refetched.getState_Rotation());
```

### getallpins

# ISCH\_PrimitiveComponent.getAllPins() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all pins associated with the device

## Signature

```typescript
public getAllPins(): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)<!-- -->&gt; \| undefined&gt;

Device pin primitive array

## Example


```javascript
// 1. 放置一个测试器件（C0402 电容有两个引脚，SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 获取器件全部引脚（C0402 电容返回 2 个引脚图元）
const pins = await comp.getAllPins();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('pinCount:', pins.length);
```

### getstate_addintobom

# ISCH\_PrimitiveComponent.getState\_AddIntoBom() method

Get the property state: whether to add BOM

## Signature

```typescript
public getState_AddIntoBom(): boolean | undefined;
```


## Returns

boolean \| undefined

Whether Add to BOM

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取是否加入 BOM（默认 true）
const addIntoBom = comp.getState_AddIntoBom();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('addIntoBom:', addIntoBom);
```

### getstate_addintopcb

# ISCH\_PrimitiveComponent.getState\_AddIntoPcb() method

Get the property state: whether to switch to PCB

## Signature

```typescript
public getState_AddIntoPcb(): boolean | undefined;
```


## Returns

boolean \| undefined

Whether Transfer to PCB

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取是否转到 PCB（默认 true）
const addIntoPcb = comp.getState_AddIntoPcb();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('addIntoPcb:', addIntoPcb);
```

### getstate_component

# ISCH\_PrimitiveComponent.getState\_Component() method

Get the property state: associate library device

## Signature

```typescript
public getState_Component(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;
```


## Returns

{ libraryUuid: string; uuid: string; name?: undefined \| string } \| undefined

Associate library device

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取关联的库器件（含所属库 uuid 和器件 uuid）
const component = comp.getState_Component();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('component:', JSON.stringify(component));
```

### getstate_componenttype

# ISCH\_PrimitiveComponent.getState\_ComponentType() method

Get the property state: device type

## Signature

```typescript
public getState_ComponentType(): ESCH_PrimitiveComponentType;
```


## Returns

[ESCH\_PrimitiveComponentType](../enums/ESCH_PrimitiveComponentType.md)

Device type

## Example


```javascript
// 1. 放置一个测试器件（普通元件，SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取器件类型（普通元件为 'part'）
const componentType = comp.getState_ComponentType();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('componentType:', componentType);
```

### getstate_designator

# ISCH\_PrimitiveComponent.getState\_Designator() method

Get the property state: designator

## Signature

```typescript
public getState_Designator(): string | undefined;
```


## Returns

string \| undefined

Designator

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取位号（未分配时是带问号的临时位号，如 C?）
const designator = comp.getState_Designator();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('designator:', designator);
```

### getstate_footprint

# ISCH\_PrimitiveComponent.getState\_Footprint() method

Get the property state: associate library footprint

## Signature

```typescript
public getState_Footprint(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;
```


## Returns

{ libraryUuid: string; uuid: string; name?: undefined \| string } \| undefined

Associate library footprint

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取关联的库封装（器件未绑定封装时为 undefined）
const footprint = comp.getState_Footprint();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('footprint:', JSON.stringify(footprint));
```

### getstate_manufacturer

# ISCH\_PrimitiveComponent.getState\_Manufacturer() method

Get the property state: manufacturer

## Signature

```typescript
public getState_Manufacturer(): string | undefined;
```


## Returns

string \| undefined

Manufacturer

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取制造商（库器件未填写时为 undefined）
const manufacturer = comp.getState_Manufacturer();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('manufacturer:', manufacturer);
```

### getstate_manufacturerid

# ISCH\_PrimitiveComponent.getState\_ManufacturerId() method

Get the property state: manufacturer ID

## Signature

```typescript
public getState_ManufacturerId(): string | undefined;
```


## Returns

string \| undefined

Manufacturer ID

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取制造商编号（库器件未填写时为 undefined）
const manufacturerId = comp.getState_ManufacturerId();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('manufacturerId:', manufacturerId);
```

### getstate_mirror

# ISCH\_PrimitiveComponent.getState\_Mirror() method

Get the property state: whether it is mirrored

## Signature

```typescript
public getState_Mirror(): boolean;
```


## Returns

boolean

Whether it is mirrored

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取镜像状态（默认 false）
const mirror = comp.getState_Mirror();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('mirror:', mirror);
```

### getstate_name

# ISCH\_PrimitiveComponent.getState\_Name() method

Get the property state: name

## Signature

```typescript
public getState_Name(): string | undefined;
```


## Returns

string \| undefined

Name

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取名称（默认继承库器件名）
const name = comp.getState_Name();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('name:', name);
```

### getstate_net

# ISCH\_PrimitiveComponent.getState\_Net() method

Get the property state: net name

## Signature

```typescript
public getState_Net(): string | undefined;
```


## Returns

string \| undefined

Net name

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取器件级网络名（普通元件为 undefined，引脚网络需查引脚对象）
const net = comp.getState_Net();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('net:', net);
```

### getstate_otherproperty

# ISCH\_PrimitiveComponent.getState\_OtherProperty() method

Get the property state: other parameters

## Signature

```typescript
public getState_OtherProperty(): Record<string, string | number | boolean> | undefined;
```


## Returns

Record&lt;string, string \| number \| boolean&gt; \| undefined

Other parameters

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取全部自定义参数（Record<键, 值>，未设置时为 undefined）
const otherProperty = comp.getState_OtherProperty();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('otherProperty:', JSON.stringify(otherProperty));
```

### getstate_primitiveid

# ISCH\_PrimitiveComponent.getState\_PrimitiveId() method

Get the property state: primitive ID

## Signature

```typescript
public getState_PrimitiveId(): string;
```


## Returns

string

Primitive ID

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);

// 2. 读取图元 ID
const compId = comp.getState_PrimitiveId();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('compId:', compId);
```

### getstate_primitivetype

# ISCH\_PrimitiveComponent.getState\_PrimitiveType() method

Get the property state: primitive type

## Signature

```typescript
public getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

Primitive type

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取图元类型（器件图元为 'Component'）
const primitiveType = comp.getState_PrimitiveType();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('primitiveType:', primitiveType);
```

### getstate_rotation

# ISCH\_PrimitiveComponent.getState\_Rotation() method

Get the property state: rotation angle

## Signature

```typescript
public getState_Rotation(): number;
```


## Returns

number

Rotation angle

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取旋转角度（默认 0）
const rotation = comp.getState_Rotation();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('rotation:', rotation);
```

### getstate_subpartname

# ISCH\_PrimitiveComponent.getState\_SubPartName() method

Get the property state: sub-part name

## Signature

```typescript
public getState_SubPartName(): string | undefined;
```


## Returns

string \| undefined

Sub-part name

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取子部件名称（单子部件器件为 undefined）
const subPartName = comp.getState_SubPartName();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('subPartName:', subPartName);
```

### getstate_supplier

# ISCH\_PrimitiveComponent.getState\_Supplier() method

Get the property state: supplier

## Signature

```typescript
public getState_Supplier(): string | undefined;
```


## Returns

string \| undefined

Supplier

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取供应商（库器件未填写时为 undefined）
const supplier = comp.getState_Supplier();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('supplier:', supplier);
```

### getstate_supplierid

# ISCH\_PrimitiveComponent.getState\_SupplierId() method

Get the property state: supplier ID

## Signature

```typescript
public getState_SupplierId(): string | undefined;
```


## Returns

string \| undefined

Supplier ID

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取供应商编号（库器件未填写时为 undefined）
const supplierId = comp.getState_SupplierId();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('supplierId:', supplierId);
```

### getstate_symbol

# ISCH\_PrimitiveComponent.getState\_Symbol() method

Get the property state: associate library symbol

## Signature

```typescript
public getState_Symbol(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;
```


## Returns

{ libraryUuid: string; uuid: string; name?: undefined \| string } \| undefined

Associate library symbol

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取关联的库符号
const symbol = comp.getState_Symbol();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('symbol:', JSON.stringify(symbol));
```

### getstate_uniqueid

# ISCH\_PrimitiveComponent.getState\_UniqueId() method

Get the property state: unique ID

## Signature

```typescript
public getState_UniqueId(): string | undefined;
```


## Returns

string \| undefined

Unique ID

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取唯一 ID
const uniqueId = comp.getState_UniqueId();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('uniqueId:', uniqueId);
```

### getstate_x

# ISCH\_PrimitiveComponent.getState\_X() method

Get the property state: X coordinate

## Signature

```typescript
public getState_X(): number;
```


## Returns

number

X coordinate

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil，100 ≈ 25.4mm）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取放置位置的 X 坐标
const x = comp.getState_X();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('x:', x);
```

### getstate_y

# ISCH\_PrimitiveComponent.getState\_Y() method

Get the property state: Y coordinate

## Signature

```typescript
public getState_Y(): number;
```


## Returns

number

Y coordinate

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil，100 ≈ 25.4mm）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 读取放置位置的 Y 坐标（与放置时传入值一致）
const y = comp.getState_Y();

// 3. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('y:', y);
```

### isasync

# ISCH\_PrimitiveComponent.isAsync() method

Query whether the primitive is an async primitive

## Signature

```typescript
public isAsync(): boolean;
```


## Returns

boolean

Whether Is async primitive

## Example


```javascript
// 1. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], 600, 600);
const compId = comp.getState_PrimitiveId();

// 2. 查询创建后的默认模式（新创建的图元默认为异步）
const isAsyncOnCreate = comp.isAsync();

// 3. 转为同步后再查一次，对比两种模式
const syncComp = comp.toSync();
const isAsyncAfterToSync = syncComp.isAsync();

// 4. 清理测试器件（查询类需要清理）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('isAsync on create:', isAsyncOnCreate);
console.log('isAsync after toSync:', isAsyncAfterToSync);
```

### reset

# ISCH\_PrimitiveComponent.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
public reset(): Promise<ISCH_PrimitiveComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，记录画布上的位号
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();
const before = comp.getState_Designator();

// 3. 异步模式写入一个错误位号，但不提交，直接重置丢弃
const asyncComp = comp.toAsync();
asyncComp.setState_Designator('WRONG');
await asyncComp.reset();

// 4. 从画布重新读取，位号仍是重置前的值（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(compId);

console.log('designator:', before, '→', refetched.getState_Designator());
```

### setstate_addintobom

# ISCH\_PrimitiveComponent.setState\_AddIntoBom() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether to add BOM

## Signature

```typescript
public setState_AddIntoBom(addIntoBom: boolean | undefined): ISCH_PrimitiveComponent;
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

addIntoBom


</td><td>

boolean \| undefined


</td><td>

Whether Add to BOM


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_AddIntoBom();

// 3. 切换异步模式，改为不加入 BOM 后提交
const asyncComp = comp.toAsync();
asyncComp.setState_AddIntoBom(false);
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('addIntoBom:', before, '→', refetched.getState_AddIntoBom());
```

### setstate_addintopcb

# ISCH\_PrimitiveComponent.setState\_AddIntoPcb() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether to switch to PCB

## Signature

```typescript
public setState_AddIntoPcb(addIntoPcb: boolean | undefined): ISCH_PrimitiveComponent;
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

addIntoPcb


</td><td>

boolean \| undefined


</td><td>

Whether Transfer to PCB


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件（SCH 坐标单位 10mil）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_AddIntoPcb();

// 3. 切换异步模式，改为不转 PCB 后提交
const asyncComp = comp.toAsync();
asyncComp.setState_AddIntoPcb(false);
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('addIntoPcb:', before, '→', refetched.getState_AddIntoPcb());
```

### setstate_designator

# ISCH\_PrimitiveComponent.setState\_Designator() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: designator

## Signature

```typescript
public setState_Designator(designator: string | undefined): ISCH_PrimitiveComponent;
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

designator


</td><td>

string \| undefined


</td><td>

Designator


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取自动分配的临时位号（如 C?）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_Designator();

// 3. 切换异步模式，写入正式位号后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Designator('C100');
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('designator:', before, '→', refetched.getState_Designator());
```

### setstate_manufacturer

# ISCH\_PrimitiveComponent.setState\_Manufacturer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: manufacturer

## Signature

```typescript
public setState_Manufacturer(manufacturer: string | undefined): ISCH_PrimitiveComponent;
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

manufacturer


</td><td>

string \| undefined


</td><td>

Manufacturer


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认制造商
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_Manufacturer();

// 3. 切换异步模式，写入制造商后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Manufacturer('YAGEO');
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('manufacturer:', before, '→', refetched.getState_Manufacturer());
```

### setstate_manufacturerid

# ISCH\_PrimitiveComponent.setState\_ManufacturerId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: manufacturer ID

## Signature

```typescript
public setState_ManufacturerId(manufacturerId: string | undefined): ISCH_PrimitiveComponent;
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

manufacturerId


</td><td>

string \| undefined


</td><td>

Manufacturer ID


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认制造商编号
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_ManufacturerId();

// 3. 切换异步模式，写入 MPN 后提交
const asyncComp = comp.toAsync();
asyncComp.setState_ManufacturerId('CC0402KRX7R7BB104');
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('manufacturerId:', before, '→', refetched.getState_ManufacturerId());
```

### setstate_mirror

# ISCH\_PrimitiveComponent.setState\_Mirror() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is mirrored

## Signature

```typescript
public setState_Mirror(mirror: boolean): ISCH_PrimitiveComponent;
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

mirror


</td><td>

boolean


</td><td>

Whether it is mirrored


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认镜像状态（false）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_Mirror();

// 3. 切换异步模式，开启镜像后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Mirror(true);
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('mirror:', before, '→', refetched.getState_Mirror());
```

### setstate_name

# ISCH\_PrimitiveComponent.setState\_Name() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: name

## Signature

```typescript
public setState_Name(name: string | undefined): ISCH_PrimitiveComponent;
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

name


</td><td>

string \| undefined


</td><td>

Name


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认名称（继承库器件名）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_Name();

// 3. 切换异步模式，写入用途名后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Name('12V输入滤波电容');
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('name:', before, '→', refetched.getState_Name());
```

### setstate_net

# ISCH\_PrimitiveComponent.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
public setState_Net(net: string | undefined): ISCH_PrimitiveComponent;
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

net


</td><td>

string \| undefined


</td><td>

Net name


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认网络名
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_Net();

// 3. 切换异步模式，写入网络名后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Net('VCC');
await asyncComp.done();

// 4. 从画布重新读取，普通元件读回空串（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('net:', before, '→', refetched.getState_Net());
```

### setstate_otherproperty

# ISCH\_PrimitiveComponent.setState\_OtherProperty() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: other parameters

## Signature

```typescript
public setState_OtherProperty(otherProperty: Record<string, string | number | boolean>): ISCH_PrimitiveComponent;
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

otherProperty


</td><td>

Record&lt;string, string \| number \| boolean&gt;


</td><td>

Other parameters


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认参数集
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_OtherProperty();

// 3. 切换异步模式，写入规格参数组后提交
const asyncComp = comp.toAsync();
asyncComp.setState_OtherProperty({ Capacitance: '100nF', Voltage: '50V', Tolerance: '±10%' });
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('otherProperty:', JSON.stringify(before), '→', JSON.stringify(refetched.getState_OtherProperty()));
```

### setstate_rotation

# ISCH\_PrimitiveComponent.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: rotation angle

## Signature

```typescript
public setState_Rotation(rotation: number): ISCH_PrimitiveComponent;
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

rotation


</td><td>

number


</td><td>

Rotation angle


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认角度（0）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_Rotation();

// 3. 切换异步模式，旋转 90° 后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Rotation(90);
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### setstate_supplier

# ISCH\_PrimitiveComponent.setState\_Supplier() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: supplier

## Signature

```typescript
public setState_Supplier(supplier: string | undefined): ISCH_PrimitiveComponent;
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

supplier


</td><td>

string \| undefined


</td><td>

Supplier


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认供应商
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_Supplier();

// 3. 切换异步模式，写入供应商后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Supplier('LCSC');
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('supplier:', before, '→', refetched.getState_Supplier());
```

### setstate_supplierid

# ISCH\_PrimitiveComponent.setState\_SupplierId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: supplier ID

## Signature

```typescript
public setState_SupplierId(supplierId: string | undefined): ISCH_PrimitiveComponent;
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

supplierId


</td><td>

string \| undefined


</td><td>

Supplier ID


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取默认供应商编号
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_SupplierId();

// 3. 切换异步模式，写入编号后提交
const asyncComp = comp.toAsync();
asyncComp.setState_SupplierId('C1546');
await asyncComp.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('supplierId:', before, '→', refetched.getState_SupplierId());
```

### setstate_uniqueid

# ISCH\_PrimitiveComponent.setState\_UniqueId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: unique ID

## Signature

```typescript
public setState_UniqueId(uniqueId: string | undefined): ISCH_PrimitiveComponent;
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

uniqueId


</td><td>

string \| undefined


</td><td>

Unique ID


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，读取系统分配的唯一 ID
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const before = comp.getState_UniqueId();

// 3. 切换异步模式，写入新唯一 ID 后提交
const asyncComp = comp.toAsync();
asyncComp.setState_UniqueId('example-unique-id-001');
await asyncComp.done();

// 4. 从画布重新读取，观察写入结果（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('uniqueId:', before, '→', refetched.getState_UniqueId());
```

### setstate_x

# ISCH\_PrimitiveComponent.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: X coordinate

## Signature

```typescript
public setState_X(x: number): ISCH_PrimitiveComponent;
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
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，记录初始 X 坐标
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);

// 3. 切换异步模式，向右移动 200 单位（约 5mm）后提交
const asyncComp = comp.toAsync();
asyncComp.setState_X(x + 200);
await asyncComp.done();

// 4. 从画布重新读取，确认移动已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('x:', x, '→', refetched.getState_X());
```

### setstate_y

# ISCH\_PrimitiveComponent.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Y coordinate

## Signature

```typescript
public setState_Y(y: number): ISCH_PrimitiveComponent;
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

y


</td><td>

number


</td><td>

Y coordinate


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Device primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件，记录初始 Y 坐标
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);

// 3. 切换异步模式，移动 200 单位（约 5mm）后提交
const asyncComp = comp.toAsync();
asyncComp.setState_Y(y + 200);
await asyncComp.done();

// 4. 从画布重新读取，确认移动已生效（读回值与设置值同号）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('y:', y, '+200 →', refetched.getState_Y());
```

### toasync

# ISCH\_PrimitiveComponent.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
public toAsync(): ISCH_PrimitiveComponent;
```


## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Arc line primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件（创建后默认处于异步模式）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);

// 3. 显式转换为异步图元（同步图元由此回到异步模式）
const asyncComp = comp.toAsync();
asyncComp.setState_Designator('C300');

// 4. 提交到画布
await asyncComp.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(comp.getState_PrimitiveId());

console.log('isAsync:', comp.isAsync());
console.log('designator: C? →', refetched.getState_Designator());
```

### tosync

# ISCH\_PrimitiveComponent.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
public toSync(): ISCH_PrimitiveComponent;
```


## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

Arc line primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试器件重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 放置一个测试器件（创建后默认处于异步模式）
const devices = await eda.lib_Device.search('C0402');
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();

// 3. 转换为同步图元
const syncComp = comp.toSync();

// 4. 同步模式下写位号，立即生效，无需 done()
syncComp.setState_Designator('C400');

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveComponent.get(compId);

console.log('isAsync after toSync:', syncComp.isAsync());
console.log('designator: C? →', refetched.getState_Designator());
```
