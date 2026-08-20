# PCB\_Document class

PCB &amp; footprint / document operation class

## Signature

```typescript
export class PCB_Document 
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

[autoLayout()](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Auto layout


</td></tr>
<tr><td>

[autoRouting(props)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Auto routing


</td></tr>
<tr><td>

[clearRouting(type)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Clear routing


</td></tr>
<tr><td>

[convertCanvasOriginToDataOrigin(x, y)](./PCB_Document.md)


</td><td>


</td><td>

Input a canvas coordinate and return the data coordinate corresponding to that coordinate


</td></tr>
<tr><td>

[convertDataOriginToCanvasOrigin(x, y)](./PCB_Document.md)


</td><td>


</td><td>

Input a data coordinate and return the canvas coordinate corresponding to that coordinate


</td></tr>
<tr><td>

[getCalculatingRatlineStatus()](./PCB_Document.md)


</td><td>


</td><td>

Get the current ratline calculation function status


</td></tr>
<tr><td>

[getCanvasOrigin()](./PCB_Document.md)


</td><td>


</td><td>

Get the offset coordinate of the canvas origin relative to the data origin


</td></tr>
<tr><td>

[getCanvasUpdateCalculationStatus()](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Query the current canvas update calculation status


</td></tr>
<tr><td>

[getCurrentFilterConfiguration()](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get Current canvas filter configuration


</td></tr>
<tr><td>

[getPrimitiveAtPoint(x, y)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get The primitive at the coordinate point


</td></tr>
<tr><td>

[getPrimitivesInRegion(left, right, top, bottom, leftToRight)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Get All primitives in the region


</td></tr>
<tr><td>

[importAutoLayoutJsonFile(autoLayoutFile)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Import auto layout file (JSON)


</td></tr>
<tr><td>

[importAutoRouteJsonFile(autoRouteFile)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Import auto routing file (JSON)


</td></tr>
<tr><td>

[importAutoRouteSesFile(autoRouteFile)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Import auto routing file (SES)


</td></tr>
<tr><td>

[importChanges(uuid)](./PCB_Document.md)


</td><td>


</td><td>

Import changes from the schematic


</td></tr>
<tr><td>

[navigateToCoordinates(x, y)](./PCB_Document.md)


</td><td>


</td><td>

Locate to canvas coordinate


</td></tr>
<tr><td>

[navigateToRegion(left, right, top, bottom)](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Locate to canvas region


</td></tr>
<tr><td>

[save()](./PCB_Document.md)


</td><td>


</td><td>

Save Document


</td></tr>
<tr><td>

[setCanvasOrigin(offsetX, offsetY)](./PCB_Document.md)


</td><td>


</td><td>

Set the offset coordinate of the canvas origin relative to the data origin


</td></tr>
<tr><td>

[startCalculatingRatline()](./PCB_Document.md)


</td><td>


</td><td>

Start the ratline calculation function


</td></tr>
<tr><td>

[startCanvasUpdateCalculation()](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Start canvas update calculation


</td></tr>
<tr><td>

[stopCalculatingRatline()](./PCB_Document.md)


</td><td>


</td><td>

Stop the ratline calculation function


</td></tr>
<tr><td>

[stopCanvasUpdateCalculation()](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Stop canvas update calculation


</td></tr>
<tr><td>

[triggerCanvasUpdateCalculation()](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Trigger a canvas update calculation


</td></tr>
<tr><td>

[zoomToBoardOutline()](./PCB_Document.md)


</td><td>


</td><td>

**_(BETA)_** Zoom to the board outline (fit the board outline)


</td></tr>
</tbody></table>

---

## 方法详情

### autolayout

# PCB\_Document.autoLayout() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Auto layout

## Signature

```typescript
public autoLayout(): Promise<IPCB_AutoLayoutResult>;
```


## Returns

Promise&lt;[IPCB\_AutoLayoutResult](../interfaces/IPCB_AutoLayoutResult.md)<!-- -->&gt;

Auto layout result

## Remarks

ADD since EDA v3.2.162

### autorouting

# PCB\_Document.autoRouting() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Auto routing

## Signature

```typescript
public autoRouting(props?: IPCB_AutoRoutingProps): Promise<IPCB_AutoRoutingResult>;
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

[IPCB\_AutoRoutingProps](../interfaces/IPCB_AutoRoutingProps.md)


</td><td>

_(Optional)_ Auto routing parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_AutoRoutingResult](../interfaces/IPCB_AutoRoutingResult.md)<!-- -->&gt;

Auto routing result

## Remarks

If no parameters are passed in, auto routing will be performed for all unrouted nets ADD since EDA v3.2.162

## Example


```javascript
// 对所有未布线的网络进行自动布线
const result = await eda.pcb_Document.autoRouting();
console.log(`布线完成：${result.routedNets}/${result.totalNets}`);

// 指定网络进行自动布线，并忽略部分网络
const result = await eda.pcb_Document.autoRouting({
    nets: ['VCC', 'GND', 'SDA', 'SCL'],
    ignoreNets: ['NC'],
    cornerStyle: EPCB_AutoRoutingCornerStyle.DEGREE_45,
    optimization: EPCB_AutoRoutingOptimization.COMPLETION,
});
```

### clearrouting

# PCB\_Document.clearRouting() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Clear routing

## Signature

```typescript
public clearRouting(type?: 'all' | 'net' | 'connection'): Promise<boolean>;
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

type


</td><td>

'all' \| 'net' \| 'connection'


</td><td>

_(Optional)_ Clear type. If you need to specify a clear type, select the specified primitive in advance


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

### convertcanvasorigintodataorigin

# PCB\_Document.convertCanvasOriginToDataOrigin() method

Input a canvas coordinate and return the data coordinate corresponding to that coordinate

## Signature

```typescript
public convertCanvasOriginToDataOrigin(x: number, y: number): Promise<{ x: number; y: number }>;
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


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ x: number; y: number }&gt;

Data origin coordinate

## Remarks

The coordinates displayed on the EasyEDA front end are all relative to the canvas origin; the EasyEDA API uses the data origin; when creating a PCB, the default canvas origin equals the data origin

## Example


```javascript
// 1. 创建测试 PCB 并打开（文档级 API 作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 换算画布坐标 (300, 400)。新建 PCB 画布原点与数据原点重合，换算值不变
const before = await eda.pcb_Document.convertCanvasOriginToDataOrigin(300, 400);
console.log('before:', JSON.stringify(before));

// 3. 设置画布原点偏移后再换算同一坐标，观察映射随之变化
await eda.pcb_Document.setCanvasOrigin(50, 100);
const after = await eda.pcb_Document.convertCanvasOriginToDataOrigin(300, 400);
console.log('after:', JSON.stringify(after));

// 4. 清理测试 PCB（偏移随文档一起删除）
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### convertdataorigintocanvasorigin

# PCB\_Document.convertDataOriginToCanvasOrigin() method

Input a data coordinate and return the canvas coordinate corresponding to that coordinate

## Signature

```typescript
public convertDataOriginToCanvasOrigin(x: number, y: number): Promise<{ x: number; y: number }>;
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

Data origin X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

Data origin Y


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ x: number; y: number }&gt;

Canvas origin coordinate

## Remarks

The coordinates displayed on the EasyEDA front end are all relative to the canvas origin; the EasyEDA API uses the data origin; when creating a PCB, the default canvas origin equals the data origin

## Example


```javascript
// 1. 创建测试 PCB 并打开（文档级 API 作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 换算数据坐标 (300, 400)。新建 PCB 画布原点与数据原点重合，换算值不变
const before = await eda.pcb_Document.convertDataOriginToCanvasOrigin(300, 400);
console.log('before:', JSON.stringify(before));

// 3. 设置画布原点偏移后再换算同一坐标，观察映射随之变化
await eda.pcb_Document.setCanvasOrigin(50, 100);
const after = await eda.pcb_Document.convertDataOriginToCanvasOrigin(300, 400);
console.log('after:', JSON.stringify(after));

// 4. 清理测试 PCB（偏移随文档一起删除）
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### getcalculatingratlinestatus

# PCB\_Document.getCalculatingRatlineStatus() method

> Warning: This API is now obsolete.
>
> since EDA v4.2

Get the current ratline calculation function status

## Signature

```typescript
public getCalculatingRatlineStatus(): Promise<EPCB_DocumentRatlineCalculatingActiveStatus | undefined>;
```


## Returns

Promise&lt;[EPCB\_DocumentRatlineCalculatingActiveStatus](../enums/EPCB_DocumentRatlineCalculatingActiveStatus.md) \| undefined&gt;

Function state

### getcanvasorigin

# PCB\_Document.getCanvasOrigin() method

Get the offset coordinate of the canvas origin relative to the data origin

## Signature

```typescript
public getCanvasOrigin(): Promise<{ offsetX: number; offsetY: number }>;
```


## Returns

Promise&lt;{ offsetX: number; offsetY: number }&gt;

The offset coordinate of the canvas origin relative to the data origin

## Remarks

The coordinates displayed on the EasyEDA Pro front end are all relative to the canvas origin;

The EasyEDA Pro API uses the data origin;

If the returned data is `{ canvasOriginOffsetX: 100, canvasOriginOffsetY: 200 }`<!-- -->, it means the canvas origin is at a position 100 units to the right and 200 units up from the data origin;

The units here are data-level units, which are equivalent to mil on the canvas level in span

### getcanvasupdatecalculationstatus

# PCB\_Document.getCanvasUpdateCalculationStatus() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Query the current canvas update calculation status

## Signature

```typescript
public getCanvasUpdateCalculationStatus(): Promise<EPCB_DocumentCanvasUpdateCalculationActiveStatus | undefined>;
```


## Returns

Promise&lt;[EPCB\_DocumentCanvasUpdateCalculationActiveStatus](../enums/EPCB_DocumentCanvasUpdateCalculationActiveStatus.md) \| undefined&gt;

Canvas update calculation function status

## Remarks

Canvas update calculation includes canvas render updates, property panel updates, etc. ADD since EDA v4.2

### getcurrentfilterconfiguration

# PCB\_Document.getCurrentFilterConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Current canvas filter configuration

## Signature

```typescript
public getCurrentFilterConfiguration(): Promise<Record<string, any> | undefined>;
```


## Returns

Promise&lt;Record&lt;string, any&gt; \| undefined&gt;

Current canvas filter configuration; `undefined` indicates that the retrieval failed

### getprimitiveatpoint

# PCB\_Document.getPrimitiveAtPoint() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get The primitive at the coordinate point

## Signature

```typescript
public getPrimitiveAtPoint(x: number, y: number): Promise<IPCB_Primitive | undefined>;
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

Promise&lt;[IPCB\_Primitive](../interfaces/IPCB_Primitive.md) \| undefined&gt;

The primitive at the coordinate point. If no primitive can be found at the coordinate point, `undefined` will be returned

## Remarks

This operation is similar to clicking with the mouse on the front end; it will get the primitive at the specified coordinate point

## Example


```javascript
// 1. 创建测试 PCB 并打开
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 在 (500, 500) 放一个测试焊盘作为拾取目标
const pad = await eda.pcb_PrimitivePad.create(1, '1', 500, 500, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const padId = pad.getState_PrimitiveId();

// 3. 拾取焊盘中心点，返回该焊盘图元
const hit = await eda.pcb_Document.getPrimitiveAtPoint(500, 500);
console.log('hitPrimitiveId:', hit.getState_PrimitiveId());

// 4. 拾取空白坐标点，返回 undefined
const miss = await eda.pcb_Document.getPrimitiveAtPoint(90000, 90000);
console.log('空白坐标点：', miss === undefined ? '未找到图元' : '找到图元');

// 5. 清理测试图元和测试 PCB
await eda.pcb_PrimitivePad.delete([padId]);
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### getprimitivesinregion

# PCB\_Document.getPrimitivesInRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get All primitives in the region

## Signature

```typescript
public getPrimitivesInRegion(left: number, right: number, top: number, bottom: number, leftToRight?: boolean): Promise<Array<IPCB_Primitive>>;
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
<tr><td>

leftToRight


</td><td>

boolean


</td><td>

_(Optional)_ Whether to only get primitives that are fully enclosed by the box selection. If `false`<!-- -->, primitives touched by the selection are also obtained


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;&gt;

All primitives in the region

## Example


```javascript
// 1. 创建测试 PCB 并打开
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 放两个测试焊盘：一个在 (500, 500)，一个在 (3000, 3000)
const padA = await eda.pcb_PrimitivePad.create(1, '1', 500, 500, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
const padB = await eda.pcb_PrimitivePad.create(1, '2', 3000, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);

// 3. 小区域 (0,1000,1000,0) 只盖住第一个焊盘
const small = await eda.pcb_Document.getPrimitivesInRegion(0, 1000, 1000, 0);
console.log('smallRegionCount:', small.length);

// 4. 大区域 (0,4000,4000,0) 盖住两个焊盘，完全框选模式
const big = await eda.pcb_Document.getPrimitivesInRegion(0, 4000, 4000, 0, true);
console.log('bigRegionCount:', big.length);

// 5. 清理测试图元和测试 PCB
await eda.pcb_PrimitivePad.delete([padA.getState_PrimitiveId(), padB.getState_PrimitiveId()]);
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### importautolayoutjsonfile

# PCB\_Document.importAutoLayoutJsonFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Import auto layout file (JSON)

## Signature

```typescript
public importAutoLayoutJsonFile(autoLayoutFile: File): Promise<boolean>;
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

autoLayoutFile


</td><td>

File


</td><td>

The JSON file to import


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the import operation is successful

## Remarks

You can use  to read in a file

## Example


```javascript
// 1. 创建测试 PCB 并打开（导入作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 构造布局 JSON 文件对象（真实场景：readFileFromFileSystem 读取外部导出的文件）
const layoutFile = new File([JSON.stringify({})], 'auto-layout.json', { type: 'application/json' });

// 3. 导入自动布局文件
const imported = await eda.pcb_Document.importAutoLayoutJsonFile(layoutFile);
console.log('imported:', imported);

// 4. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### importautoroutejsonfile

# PCB\_Document.importAutoRouteJsonFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Import auto routing file (JSON)

## Signature

```typescript
public importAutoRouteJsonFile(autoRouteFile: File): Promise<boolean>;
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

autoRouteFile


</td><td>

File


</td><td>

The JSON file to import


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the import operation is successful

## Remarks

You can use  to read in a file

## Example


```javascript
// 1. 创建测试 PCB 并打开（导入作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 构造布线 JSON 文件对象（真实场景：readFileFromFileSystem 读取外部导出的文件）
const routeFile = new File([JSON.stringify({})], 'auto-route.json', { type: 'application/json' });

// 3. 导入自动布线文件
const imported = await eda.pcb_Document.importAutoRouteJsonFile(routeFile);
console.log('imported:', imported);

// 4. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### importautoroutesesfile

# PCB\_Document.importAutoRouteSesFile() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Import auto routing file (SES)

## Signature

```typescript
public importAutoRouteSesFile(autoRouteFile: File): Promise<boolean>;
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

autoRouteFile


</td><td>

File


</td><td>

The SES file to import


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the import operation is successful

## Remarks

You can use  to read in a file

### importchanges

# PCB\_Document.importChanges() method

Import changes from the schematic

## Signature

```typescript
public importChanges(uuid?: string): Promise<boolean>;
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

uuid


</td><td>

string


</td><td>

_(Optional)_ Schematic UUID. By default, the schematic associated with the same Board is used


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the import operation was successful. If the import fails or the free PCB has no schematic UUID passed in, `false` is returned

## Example


```javascript
// 1. 创建测试原理图和测试 PCB
const schUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));

// 2. 创建板子把原理图与 PCB 关联起来（返回板子名称）
const boardName = await eda.dmt_Board.createBoard(schUuid, pcbUuid);
await new Promise(r => setTimeout(r, 1500));
console.log('boardName:', boardName);

// 3. 打开 PCB 并从关联原理图导入变更
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));
const imported = await eda.pcb_Document.importChanges();
console.log('imported:', imported);

// 4. 清理：删板子、删 PCB、删原理图
await eda.dmt_Board.deleteBoard(boardName);
await new Promise(r => setTimeout(r, 1000));
await eda.dmt_Pcb.deletePcb(pcbUuid);
await eda.dmt_Schematic.deleteSchematic(schUuid);
```

### navigatetocoordinates

# PCB\_Document.navigateToCoordinates() method

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

This API positions on the front-end canvas to the specified data-level coordinate;

If you want the front-end canvas coordinate to be consistent with the passed-in data during this operation, it is recommended to call the [PCB\_Document.setCanvasOrigin()](./PCB_Document.md) method and set the offset to zero;

The units here are data-level units, which are equivalent to mil on the canvas level in span

## Example


```javascript
// 1. 创建测试 PCB 并打开（视口操作作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 定位到数据坐标 (1000, 800)
const navigated = await eda.pcb_Document.navigateToCoordinates(1000, 800);
console.log('navigated:', navigated);

// 3. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### navigatetoregion

# PCB\_Document.navigateToRegion() method

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

This API positions on the front-end canvas to the specified region. The region data is an offset relative to the data origin;

For example: the passed-in data is `{left: 0, right: 60, top: 100, bottom: -20}` =<!-- -->&gt; `navigateToRegion(0, 60, 100, -20)`<!-- -->, then the canvas will be positioned to a rectangular range centered at `[30, 40]` with a length of `60` in the x-axis direction and `120` in the y-axis direction;

This API does not perform zooming, but it will generate a rectangle frame indicating the positioning center and the region range;

The units here are data-level units, which are equivalent to mil on the canvas level in span

## Example


```javascript
// 1. 创建测试 PCB 并打开（视口操作作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 定位到矩形区域：X 从 0 到 2000，Y 从 2000 到 0（视口将以中心 (1000,1000) 呈现）
const navigated = await eda.pcb_Document.navigateToRegion(0, 2000, 2000, 0);
console.log('navigated:', navigated);

// 3. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### save

# PCB\_Document.save() method

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
// 1. 创建测试 PCB 并打开（保存作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 保存当前 PCB
const saved = await eda.pcb_Document.save();
console.log('saved:', saved);

// 3. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### setcanvasorigin

# PCB\_Document.setCanvasOrigin() method

Set the offset coordinate of the canvas origin relative to the data origin

## Signature

```typescript
public setCanvasOrigin(offsetX: number, offsetY: number): Promise<boolean>;
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

offsetX


</td><td>

number


</td><td>

X coordinate offset of the canvas origin relative to the data origin


</td></tr>
<tr><td>

offsetY


</td><td>

number


</td><td>

Y coordinate offset of the canvas origin relative to the data origin


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

The coordinates displayed on the EasyEDA Pro front end are all relative to the canvas origin;

The EasyEDA Pro API uses the data origin;

If you want the front-end canvas coordinate to be consistent with the data during API operations, it is recommended to call this method and set the offset to zero, i.e. `setCanvasOrigin(0, 0)`<!-- -->;

The units here are data-level units, which are equivalent to mil on the canvas level in span

## Example


```javascript
// 1. 创建测试 PCB 并打开（原点设置作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 设置画布原点偏移为 (50, 100)
const set = await eda.pcb_Document.setCanvasOrigin(50, 100);
console.log('set:', set);

// 3. 读回偏移验证已生效
const origin = await eda.pcb_Document.getCanvasOrigin();
console.log('origin:', JSON.stringify(origin));

// 4. 清理测试 PCB（偏移随文档一起删除）
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### startcalculatingratline

# PCB\_Document.startCalculatingRatline() method

> Warning: This API is now obsolete.
>
> since EDA v4.2

Start the ratline calculation function

## Signature

```typescript
public startCalculatingRatline(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

A ratline calculation will be triggered when starting

## Example


```javascript
// 1. 创建测试 PCB 并打开（飞线开关作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 启动飞线计算
const started = await eda.pcb_Document.startCalculatingRatline();
console.log('started:', started);

// 3. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### startcanvasupdatecalculation

# PCB\_Document.startCanvasUpdateCalculation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Start canvas update calculation

## Signature

```typescript
public startCanvasUpdateCalculation(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Canvas update calculation includes canvas render updates, property panel updates, etc.

If you do not understand the meaning of this switch, do not call this API for any operation ADD since EDA v4.2

### stopcalculatingratline

# PCB\_Document.stopCalculatingRatline() method

> Warning: This API is now obsolete.
>
> since EDA v4.2

Stop the ratline calculation function

## Signature

```typescript
public stopCalculatingRatline(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 创建测试 PCB 并打开（飞线开关作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 停止飞线计算
const stopped = await eda.pcb_Document.stopCalculatingRatline();
console.log('stopped:', stopped);

// 3. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### stopcanvasupdatecalculation

# PCB\_Document.stopCanvasUpdateCalculation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Stop canvas update calculation

## Signature

```typescript
public stopCanvasUpdateCalculation(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Canvas update calculation includes canvas render updates, property panel updates, etc.

If you do not understand the meaning of this switch, do not call this API for any operation ADD since EDA v4.2

### triggercanvasupdatecalculation

# PCB\_Document.triggerCanvasUpdateCalculation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Trigger a canvas update calculation

## Signature

```typescript
public triggerCanvasUpdateCalculation(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Canvas update calculation includes canvas render updates, property panel updates, etc.

If you do not understand the meaning of this switch, do not call this API for any operation ADD since EDA v4.2

### zoomtoboardoutline

# PCB\_Document.zoomToBoardOutline() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Zoom to the board outline (fit the board outline)

## Signature

```typescript
public zoomToBoardOutline(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 创建测试 PCB 并打开（视口操作作用于当前激活的 PCB）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 缩放到板框
const zoomed = await eda.pcb_Document.zoomToBoardOutline();
console.log('zoomed:', zoomed);

// 3. 清理测试 PCB
await eda.dmt_Pcb.deletePcb(pcbUuid);
```
