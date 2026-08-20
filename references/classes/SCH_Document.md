# SCH\_Document class

Schematic &amp; symbol / document operation class

## Signature

```typescript
export class SCH_Document 
```

## Remarks

Operations performed on the design document as a whole

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[autoLayout(props)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Auto layout


</td></tr>
<tr><td>

[autoRouting(props)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Auto routing


</td></tr>
<tr><td>

[getCurrentFilterConfiguration()](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get Current canvas filter configuration


</td></tr>
<tr><td>

[getPrimitiveAtPoint(x, y)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get The primitive at the coordinate point


</td></tr>
<tr><td>

[getPrimitivesInRegion(left, right, top, bottom)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get All primitives in the region


</td></tr>
<tr><td>

[importChanges()](./SCH_Document.md)


</td><td>


</td><td>

Import changes from the PCB


</td></tr>
<tr><td>

[navigateToCoordinates(x, y)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Locate to canvas coordinate


</td></tr>
<tr><td>

[navigateToRegion(left, right, top, bottom)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** Locate to canvas region


</td></tr>
<tr><td>

[save()](./SCH_Document.md)


</td><td>


</td><td>

Save Document


</td></tr>
</tbody></table>

---

## 方法详情

### autolayout

# SCH\_Document.autoLayout() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Auto layout

## Signature

```typescript
public autoLayout(props?: { uuids?: undefined | string[]; netlist?: undefined | { component: Record<string, { pinInfoMap: Record<string, { name: string; number: string; net: string; props: { 'Pin Number': string } }> }> }; designatorDeviceTypeMap?: undefined | Record<string, 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice'> }): Promise<any>;
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

props


</td><td>

{ uuids?: undefined \| string\[\]; netlist?: undefined \| { component: Record&lt;string, { pinInfoMap: Record&lt;string, { name: string; number: string; net: string; props: { 'Pin Number': string } }&gt; }&gt; }; designatorDeviceTypeMap?: undefined \| Record&lt;string, 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'&gt; }


</td><td>

_(Optional)_ Auto layout parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

Auto layout result

## Remarks

If no parameters are passed in, auto layout will be performed for all devices

## Example


```javascript
// 1. 创建测试原理图并打开（文档级 API 作用于当前激活的原理图）
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const schInfo = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(schInfo.page[0].uuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 对所有器件执行自动布局（空原理图无器件，立即返回结果对象）
const result = await eda.sch_Document.autoLayout();
console.log('result:', result);

// 3. 清理测试原理图
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.deleteSchematic(schematicUuid);
```

### autorouting

# SCH\_Document.autoRouting() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Auto routing

## Signature

```typescript
public autoRouting(props?: { uuids?: undefined | string[]; netlist?: undefined | { component: Record<string, { pinInfoMap: Record<string, { name: string; number: string; net: string; props: { 'Pin Number': string } }> }> }; designatorDeviceTypeMap?: undefined | Record<string, 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice'> }): Promise<any>;
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

props


</td><td>

{ uuids?: undefined \| string\[\]; netlist?: undefined \| { component: Record&lt;string, { pinInfoMap: Record&lt;string, { name: string; number: string; net: string; props: { 'Pin Number': string } }&gt; }&gt; }; designatorDeviceTypeMap?: undefined \| Record&lt;string, 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'&gt; }


</td><td>

_(Optional)_ Auto routing parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

Auto routing result

## Remarks

If no parameters are passed in, auto routing will be performed for all unrouted nets

## Example


```javascript
// 1. 创建测试原理图并打开
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1000));
const schInfo = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(schInfo.page[0].uuid);
await new Promise(r => setTimeout(r, 800));

// 2. 放置两个测试器件并取第一个引脚的坐标（关键字搜索当前版本异常，按 C 编号反查器件）
const devices = await eda.lib_Device.searchByProperties({ supplierId: 'C1523' }, undefined, undefined, undefined, 5, 1);
const sysLibUuid = await eda.lib_LibrariesList.getSystemLibraryUuid();
const device = { libraryUuid: sysLibUuid, uuid: devices[0].uuid };
const comp1 = await eda.sch_PrimitiveComponent.create(device, 800, 800);
const comp2 = await eda.sch_PrimitiveComponent.create(device, 1600, 800);
const pin1 = (await comp1.getAllPins())[0];
const pin2 = (await comp2.getAllPins())[0];

// 3. 在两个引脚上放同名接地标志，构成一个跨器件的 GND 网络
const flag1 = await eda.sch_PrimitiveComponent.createNetFlag('Ground', 'GND', pin1.getState_X(), pin1.getState_Y());
const flag2 = await eda.sch_PrimitiveComponent.createNetFlag('Ground', 'GND', pin2.getState_X(), pin2.getState_Y());
console.log('netFlagIds:', flag1.getState_PrimitiveId(), flag2.getState_PrimitiveId());

// 4. 统计布线前导线数，执行自动布线后再统计一次
const wiresBefore = (await eda.sch_PrimitiveWire.getAllPrimitiveId()).length;
const result = await eda.sch_Document.autoRouting();
const wiresAfter = (await eda.sch_PrimitiveWire.getAllPrimitiveId()).length;
console.log('result:', result);
console.log('wiresBefore:', wiresBefore, 'wiresAfter:', wiresAfter);

// 5. 清理测试原理图（器件与网络标志随文档一起删除）
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.deleteSchematic(schematicUuid);
```

### getcurrentfilterconfiguration

# SCH\_Document.getCurrentFilterConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Current canvas filter configuration

## Signature

```typescript
public getCurrentFilterConfiguration(): Promise<Record<string, boolean> | undefined>;
```


## Returns

Promise&lt;Record&lt;string, boolean&gt; \| undefined&gt;

Current canvas filter configuration; `undefined` indicates that the retrieval failed

## Remarks

ADD since EDA v4.2

### getprimitiveatpoint

# SCH\_Document.getPrimitiveAtPoint() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The primitive at the coordinate point

## Signature

```typescript
public getPrimitiveAtPoint(x: number, y: number): Promise<ISCH_Primitive | undefined>;
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

Coordinate point X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

Coordinate point Y


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md) \| undefined&gt;

The primitive at the coordinate point. If no primitive can be found at the coordinate point, `undefined` will be returned

## Remarks

This operation is similar to clicking with the mouse on the front end; it will get the primitive at the specified coordinate point ADD since EDA v4.2

### getprimitivesinregion

# SCH\_Document.getPrimitivesInRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get All primitives in the region

## Signature

```typescript
public getPrimitivesInRegion(left: number, right: number, top: number, bottom: number): Promise<Array<ISCH_Primitive>>;
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

left


</td><td>

number


</td><td>

First X coordinate of the rectangle


</td></tr>
<tr><td>

right


</td><td>

number


</td><td>

Second X coordinate of the rectangle


</td></tr>
<tr><td>

top


</td><td>

number


</td><td>

First Y coordinate of the rectangle


</td></tr>
<tr><td>

bottom


</td><td>

number


</td><td>

Second Y coordinate of the rectangle


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

All primitives in the region

## Remarks

This API only returns primitives that are completely contained in the region. If a primitive is partially outside the region, it will be ignored ADD since EDA v4.2

### importchanges

# SCH\_Document.importChanges() method

Import changes from the PCB

## Signature

```typescript
public importChanges(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the import operation is successful, import failed or a free schematic return `false`

## Example


```javascript
// 1. 创建测试原理图和测试 PCB
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));

// 2. 创建板子把原理图与 PCB 关联起来（返回板子名称）
const boardName = await eda.dmt_Board.createBoard(schematicUuid, pcbUuid);
await new Promise(r => setTimeout(r, 1500));
console.log('boardName:', boardName);

// 3. 打开原理图（图页级 UUID），从关联 PCB 导入变更
const schInfo = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(schInfo.page[0].uuid);
await new Promise(r => setTimeout(r, 1000));
const imported = await eda.sch_Document.importChanges();
console.log('imported:', imported);

// 4. 清理：删板子、删 PCB、删原理图
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Board.deleteBoard(boardName);
await new Promise(r => setTimeout(r, 1000));
await eda.dmt_Pcb.deletePcb(pcbUuid);
await new Promise(r => setTimeout(r, 500));
await eda.dmt_Schematic.deleteSchematic(schematicUuid);
```

### navigatetocoordinates

# SCH\_Document.navigateToCoordinates() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Locate to canvas coordinate

## Signature

```typescript
public navigateToCoordinates(x: number, y: number): Promise<boolean>;
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
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API positions on the front-end canvas to the specified coordinate;

The unit span here is 0.01inch ADD since EDA v4.2

### navigatetoregion

# SCH\_Document.navigateToRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Locate to canvas region

## Signature

```typescript
public navigateToRegion(left: number, right: number, top: number, bottom: number): Promise<boolean>;
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

left


</td><td>

number


</td><td>

First X coordinate of the rectangle


</td></tr>
<tr><td>

right


</td><td>

number


</td><td>

Second X coordinate of the rectangle


</td></tr>
<tr><td>

top


</td><td>

number


</td><td>

First Y coordinate of the rectangle


</td></tr>
<tr><td>

bottom


</td><td>

number


</td><td>

Second Y coordinate of the rectangle


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API positions on the front-end canvas to the specified region;

For example: the passed-in data is `{left: 0, right: 60, top: 100, bottom: -20}` =<!-- -->&gt; `navigateToRegion(0, 60, 100, -20)`<!-- -->, then the canvas will be positioned to a rectangular range centered at `[30, 40]` with a length of `60` in the x-axis direction and `120` in the y-axis direction;

This API does not perform zooming, but it will generate a rectangle frame indicating the positioning center and the region range;

The unit span here is 0.01inch ADD since EDA v4.2

### save

# SCH\_Document.save() method

Save Document

## Signature

```typescript
public save(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the save operation was successful. Errors such as save failure and upload failure all return `false`

## Example


```javascript
// 1. 创建测试原理图并打开（保存作用于当前激活的原理图，openDocument 传图页级 UUID）
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const schInfo = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(schInfo.page[0].uuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 保存当前原理图
const saved = await eda.sch_Document.save();
console.log('saved:', saved);

// 3. 清理测试原理图（删除前等 1.5s 让保存变更同步落地）
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.deleteSchematic(schematicUuid);
```
