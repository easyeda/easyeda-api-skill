# PCB\_Layer class

PCB &amp; footprint / layer operation class

## Signature

```typescript
export class PCB_Layer 
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

[addCustomLayer()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Add a custom layer


</td></tr>
<tr><td>

[deletePhysicalStackingConfiguration(configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Delete Physical stacking configuration


</td></tr>
<tr><td>

[getAllLayers()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Get the detailed properties of all layers


</td></tr>
<tr><td>

[getAllPhysicalStackingConfigurations(physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Get all Physical stacking configuration


</td></tr>
<tr><td>

[getCurrentLayer()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Get the detailed properties of the current layer


</td></tr>
<tr><td>

[getCurrentPhysicalStackingConfiguration()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Get Current physical stacking configuration


</td></tr>
<tr><td>

[getCurrentPhysicalStackingConfigurationName()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Get Current physical stacking configuration name


</td></tr>
<tr><td>

[getDefaultPhysicalStackingConfigurationName(physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Get the name of the default physical stacking configuration for new PCBs


</td></tr>
<tr><td>

[getPhysicalStackingConfiguration(configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Get Specify physical stacking configuration


</td></tr>
<tr><td>

[lockLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Lock the layer


</td></tr>
<tr><td>

[modifyLayer(layer, property)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Modify Layer properties


</td></tr>
<tr><td>

[overwriteCurrentPhysicalStackingConfiguration(physicalStackingConfiguration)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Overwrite current physical stacking configuration


</td></tr>
<tr><td>

[removeLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Remove Layer


</td></tr>
<tr><td>

[renamePhysicalStackingConfiguration(originalConfigurationName, configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Rename the physical stacking configuration


</td></tr>
<tr><td>

[savePhysicalStackingConfiguration(physicalStackingConfiguration, configurationName, physicalProps, allowOverwrite)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Save Physical stacking configuration


</td></tr>
<tr><td>

[selectLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

Select a layer


</td></tr>
<tr><td>

[setAsDefaultPhysicalStackingConfiguration(configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set as the default physical stacking configuration for new PCBs


</td></tr>
<tr><td>

[setInactiveLayerDisplayMode(displayMode)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set Inactive layer display mode


</td></tr>
<tr><td>

[setInactiveLayerTransparency(transparency)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set the inactive layer transparency


</td></tr>
<tr><td>

[setLayerColorConfiguration(colorConfiguration)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set the layer color configuration


</td></tr>
<tr><td>

[setLayerInvisible(layer, setOtherLayerVisible)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set the layer to invisible


</td></tr>
<tr><td>

[setLayerVisible(layer, setOtherLayerInvisible)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set the layer to visible


</td></tr>
<tr><td>

[setPcbType(pcbType)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set PCB type


</td></tr>
<tr><td>

[setTheNumberOfCopperLayers(numberOfLayers)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Set Number of copper layers


</td></tr>
<tr><td>

[unlockLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** Unlock the layer


</td></tr>
</tbody></table>

---

## 方法详情

### addcustomlayer

# PCB\_Layer.addCustomLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a custom layer

## Signature

```typescript
public addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>;
```


## Returns

Promise&lt;[TPCB\_LayersOfCustom](../types/TPCB_LayersOfCustom.md) \| undefined&gt;

The layer ID of the newly added custom layer. If it is `undefined`<!-- -->, the addition failed, possibly because the number of custom layers has reached the upper limit

## Example


```javascript
// 1. 先移除历史运行遗留的自定义层，保证案例可以反复执行
const layers = await eda.pcb_Layer.getAllLayers();
for (const item of layers.filter(l => l.type === 'CUSTOM')) {
  await eda.pcb_Layer.removeLayer(item.id);
}

// 2. 新增自定义层，返回新层的图层 ID（CUSTOM_1=71 起顺延分配）
const customLayerId = await eda.pcb_Layer.addCustomLayer();

// 3. 从图层列表确认新层已存在（保留现场，可在图层面板观察）
const after = await eda.pcb_Layer.getAllLayers();
const newLayer = after.find(l => l.id === customLayerId);

console.log('customLayerId:', customLayerId);
console.log('newLayerName:', newLayer?.name);
console.log('customLayerCount:', after.filter(l => l.type === 'CUSTOM').length);
```

### deletephysicalstackingconfiguration

# PCB\_Layer.deletePhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Physical stacking configuration

## Signature

```typescript
public deletePhysicalStackingConfiguration(configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<boolean>;
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

configurationName


</td><td>

string


</td><td>

Configuration name


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ Physical properties. If not passed in, the current PCB properties are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether Successful

## Remarks

ADD since EDA v4.2

### getalllayers

# PCB\_Layer.getAllLayers() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the detailed properties of all layers

## Signature

```typescript
public getAllLayers(): Promise<Array<IPCB_LayerItem>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_LayerItem](../interfaces/IPCB_LayerItem.md)<!-- -->&gt;&gt;

Detailed properties of all layers

## Example


```javascript
// 1. 一次性取回当前 PCB 的全部图层
const layers = await eda.pcb_Layer.getAllLayers();

// 2. 查看顶层（TOP=1）的典型属性
const top = layers.find(l => l.id === 1);

// 3. 统计信号层（铜箔层）数量
const copperCount = layers.filter(l => l.type === 'SIGNAL').length;

console.log('totalCount:', layers.length);
console.log('topLayerName:', top?.name);
console.log('topLayerColor:', top?.color);
console.log('topLayerLocked:', top?.locked);
console.log('copperLayerCount:', copperCount);
```

### getallphysicalstackingconfigurations

# PCB\_Layer.getAllPhysicalStackingConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Physical stacking configuration

## Signature

```typescript
public getAllPhysicalStackingConfigurations(physicalProps?: IPCB_SubstratePhysicalProperties): Promise<Array<IPCB_PhysicalStackingConfiguration>>;
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

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ Physical properties. If not passed in, the current PCB properties are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md)<!-- -->&gt;&gt;

All physical stacking configurations

## Remarks

ADD since EDA v4.2

### getcurrentlayer

# PCB\_Layer.getCurrentLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the detailed properties of the current layer

## Signature

```typescript
public getCurrentLayer(): Promise<IPCB_LayerItem | undefined>;
```


## Returns

Promise&lt;[IPCB\_LayerItem](../interfaces/IPCB_LayerItem.md) \| undefined&gt;

Detailed properties of the current layer. `undefined` is returned when there is no active layer or no PCB canvas

## Remarks

ADD since EDA v4.2

### getcurrentphysicalstackingconfiguration

# PCB\_Layer.getCurrentPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Current physical stacking configuration

## Signature

```typescript
public getCurrentPhysicalStackingConfiguration(): Promise<IPCB_PhysicalStackingConfiguration | undefined>;
```


## Returns

Promise&lt;[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md) \| undefined&gt;

Current physical stacking configuration; `undefined` indicates that the retrieval failed

## Remarks

ADD since EDA v4.2

### getcurrentphysicalstackingconfigurationname

# PCB\_Layer.getCurrentPhysicalStackingConfigurationName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Current physical stacking configuration name

## Signature

```typescript
public getCurrentPhysicalStackingConfigurationName(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

Current physical stacking configuration name; `undefined` indicates that the retrieval failed

## Remarks

ADD since EDA v4.2

### getdefaultphysicalstackingconfigurationname

# PCB\_Layer.getDefaultPhysicalStackingConfigurationName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the name of the default physical stacking configuration for new PCBs

## Signature

```typescript
public getDefaultPhysicalStackingConfigurationName(physicalProps?: IPCB_SubstratePhysicalProperties): Promise<string | undefined>;
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

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ Physical properties. If not passed in, the current PCB properties are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

Default physical stacking configuration name of; `undefined` indicates that the retrieval failed

## Remarks

ADD since EDA v4.2

### getphysicalstackingconfiguration

# PCB\_Layer.getPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Specify physical stacking configuration

## Signature

```typescript
public getPhysicalStackingConfiguration(configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<IPCB_PhysicalStackingConfiguration | undefined>;
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

configurationName


</td><td>

string


</td><td>

Configuration name


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ Physical properties. If not passed in, the current PCB properties are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md) \| undefined&gt;

Physical stacking configuration, `undefined` is does not exist this physical stacking

## Remarks

ADD since EDA v4.2

### locklayer

# PCB\_Layer.lockLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Lock the layer

## Signature

```typescript
public lockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md) \| Array&lt;[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md)<!-- -->&gt;


</td><td>

_(Optional)_ Layer. If no layer is specified, all layers are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 锁定顶层（TOP=1）与底层（BOTTOM=2），传入层数组
const lockResult = await eda.pcb_Layer.lockLayer([1, 2]);

// 2. 从图层列表确认锁定状态
const layers = await eda.pcb_Layer.getAllLayers();
const top = layers.find(l => l.id === 1);

// 3. 恢复现场：解锁这两层，避免影响后续编辑
const restoreResult = await eda.pcb_Layer.unlockLayer([1, 2]);

console.log('lockResult:', lockResult);
console.log('topLockedNow:', top?.locked);
console.log('restoreResult:', restoreResult);
```

### modifylayer

# PCB\_Layer.modifyLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Layer properties

## Signature

```typescript
public modifyLayer(layer: TPCB_LayersInTheSelectable, property: { name?: undefined | string; type?: undefined | EPCB_LayerType.SIGNAL | EPCB_LayerType.INTERNAL_ELECTRICAL; color?: undefined | string; transparency?: undefined | number }): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md)


</td><td>

Layer


</td></tr>
<tr><td>

property


</td><td>

{ name?: undefined \| string; type?: undefined \| [EPCB\_LayerType.SIGNAL](../enums/EPCB_LayerType.md) \| [EPCB\_LayerType.INTERNAL\_ELECTRICAL](../enums/EPCB_LayerType.md)<!-- -->; color?: undefined \| string; transparency?: undefined \| number }


</td><td>

Property


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

The modified layer properties. If it is `undefined`<!-- -->, the modification failed or the layer does not exist

## Remarks

Only inner layers and custom layers can have their names modified; only inner layers can have their types modified. Transparency only supports values between 0-100

## Example


```javascript
// 1. 新增一个自定义层作为修改对象
const customLayerId = await eda.pcb_Layer.addCustomLayer();

// 2. 读取修改前的名称与颜色
const before = (await eda.pcb_Layer.getAllLayers()).find(l => l.id === customLayerId);

// 3. 修改名称、颜色与透明度（保留现场供观察）
const modifyResult = await eda.pcb_Layer.modifyLayer(customLayerId, {
  name: '嘉立创示例_工艺说明',
  color: '#FF6600',
  transparency: 30,
});

// 4. 重新读取图层列表确认修改生效
const after = (await eda.pcb_Layer.getAllLayers()).find(l => l.id === customLayerId);

console.log('modifyResult:', modifyResult);
console.log('nameBefore:', before?.name, '→ nameAfter:', after?.name);
console.log('colorBefore:', before?.color, '→ colorAfter:', after?.color);
```

### overwritecurrentphysicalstackingconfiguration

# PCB\_Layer.overwriteCurrentPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Overwrite current physical stacking configuration

## Signature

```typescript
public overwriteCurrentPhysicalStackingConfiguration(physicalStackingConfiguration: IPCB_PhysicalStackingConfiguration): Promise<boolean>;
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

physicalStackingConfiguration


</td><td>

[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md)


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Overwrite whether it is successful

## Remarks

It will overwrite the current physical stacking configuration of the PCB. Please note the risk of data loss

If the passed-in physical stacking configuration does not match the physical properties of the current PCB, `false` will be returned directly without modification ADD since EDA v4.2

### removelayer

# PCB\_Layer.removeLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Remove Layer

## Signature

```typescript
public removeLayer(layer: TPCB_LayersOfCustom): Promise<boolean>;
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

[TPCB\_LayersOfCustom](../types/TPCB_LayersOfCustom.md)


</td><td>

Layer


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Currently only custom layers can be removed

## Example


```javascript
// 1. 新增一个自定义层作为移除对象
const customLayerId = await eda.pcb_Layer.addCustomLayer();

// 2. 移除该自定义层，返回操作是否成功
const removeResult = await eda.pcb_Layer.removeLayer(customLayerId);

// 3. 确认该层已从图层列表消失
const rest = (await eda.pcb_Layer.getAllLayers()).filter(l => l.type === 'CUSTOM');

console.log('removeResult:', removeResult);
console.log('removedLayerId:', customLayerId);
console.log('customLayerLeft:', rest.length);
```

### renamephysicalstackingconfiguration

# PCB\_Layer.renamePhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Rename the physical stacking configuration

## Signature

```typescript
public renamePhysicalStackingConfiguration(originalConfigurationName: string, configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<boolean>;
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

originalConfigurationName


</td><td>

string


</td><td>

Original physical stacking configuration name


</td></tr>
<tr><td>

configurationName


</td><td>

string


</td><td>

New physical stacking configuration name


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ Physical properties. If not passed in, the current PCB properties are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the rename was successful

## Remarks

ADD since EDA v4.2

### savephysicalstackingconfiguration

# PCB\_Layer.savePhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Save Physical stacking configuration

## Signature

```typescript
public savePhysicalStackingConfiguration(physicalStackingConfiguration: IPCB_PhysicalStackingConfiguration, configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties, allowOverwrite?: boolean): Promise<boolean>;
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

physicalStackingConfiguration


</td><td>

[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md)


</td><td>

Physical stacking configuration


</td></tr>
<tr><td>

configurationName


</td><td>

string


</td><td>

Configuration name


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ Physical properties. If not passed in, the current PCB properties are used by default


</td></tr>
<tr><td>

allowOverwrite


</td><td>

boolean


</td><td>

_(Optional)_ Whether to allow overwriting a physical stacking configuration with the same name. If `false`<!-- -->, `false` will be returned when a configuration with the same name is encountered. Please note the possible risk of data loss


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Save Whether Successful

## Remarks

ADD since EDA v4.2

### selectlayer

# PCB\_Layer.selectLayer() method

Select a layer

## Signature

```typescript
public selectLayer(layer: TPCB_LayersInTheSelectable): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md)


</td><td>

Layer


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation was successful. `false` is returned if the specified layer does not exist

## Example


```javascript
// 1. 切换当前工作层到底层（BOTTOM=2）
const selectResult = await eda.pcb_Layer.selectLayer(2);

// 2. 再切回顶层（TOP=1），恢复常用工作层
const restoreResult = await eda.pcb_Layer.selectLayer(1);

console.log('selectResult:', selectResult);
console.log('restoreResult:', restoreResult);
```

### setasdefaultphysicalstackingconfiguration

# PCB\_Layer.setAsDefaultPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set as the default physical stacking configuration for new PCBs

## Signature

```typescript
public setAsDefaultPhysicalStackingConfiguration(configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<boolean>;
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

configurationName


</td><td>

string


</td><td>

Configuration name


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ Physical properties. If not passed in, the current PCB properties are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Set Whether Successful

## Remarks

The return value is result-oriented. Repeatedly setting the same physical stacking as the default will also return `true` ADD since EDA v4.2

### setinactivelayerdisplaymode

# PCB\_Layer.setInactiveLayerDisplayMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set Inactive layer display mode

## Signature

```typescript
public setInactiveLayerDisplayMode(displayMode?: EPCB_InactiveLayerDisplayMode): Promise<boolean>;
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

displayMode


</td><td>

[EPCB\_InactiveLayerDisplayMode](../enums/EPCB_InactiveLayerDisplayMode.md)


</td><td>

_(Optional)_ Display mode


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether Set Successful

## Example


```javascript
// 1. 将非激活层设为置灰模式（TURN_GRAY=1）
const setResult = await eda.pcb_Layer.setInactiveLayerDisplayMode(1);

// 2. 恢复为正常亮度（NORMAL_BRIGHTNESS=0），避免影响日常查看
const restoreResult = await eda.pcb_Layer.setInactiveLayerDisplayMode(0);

console.log('setResult:', setResult);
console.log('restoreResult:', restoreResult);
```

### setinactivelayertransparency

# PCB\_Layer.setInactiveLayerTransparency() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the inactive layer transparency

## Signature

```typescript
public setInactiveLayerTransparency(transparency: number): Promise<boolean>;
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

transparency


</td><td>

number


</td><td>

Transparency, range `0-100`


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 将非激活层透明度设为 60，让当前编辑层更突出
const setResult = await eda.pcb_Layer.setInactiveLayerTransparency(60);

// 2. 恢复为 0（不透明），避免影响日常查看
const restoreResult = await eda.pcb_Layer.setInactiveLayerTransparency(0);

console.log('setResult:', setResult);
console.log('restoreResult:', restoreResult);
```

### setlayercolorconfiguration

# PCB\_Layer.setLayerColorConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the layer color configuration

## Signature

```typescript
public setLayerColorConfiguration(colorConfiguration: EPCB_LayerColorConfiguration): Promise<boolean>;
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

colorConfiguration


</td><td>

[EPCB\_LayerColorConfiguration](../enums/EPCB_LayerColorConfiguration.md)


</td><td>

Color configuration


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 记录切换前顶层的颜色
const before = (await eda.pcb_Layer.getAllLayers()).find(l => l.id === 1);

// 2. 切换为 Altium Designer 配色（ALTIUM_DESIGNER=2）
const setResult = await eda.pcb_Layer.setLayerColorConfiguration(2);

// 3. 查看切换后顶层的颜色
const after = (await eda.pcb_Layer.getAllLayers()).find(l => l.id === 1);

// 4. 恢复嘉立创 EDA 默认配色（EASYEDA=1）
const restoreResult = await eda.pcb_Layer.setLayerColorConfiguration(1);

console.log('setResult:', setResult);
console.log('topColorBefore:', before?.color, '→ topColorAfter:', after?.color);
console.log('restoreResult:', restoreResult);
```

### setlayerinvisible

# PCB\_Layer.setLayerInvisible() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the layer to invisible

## Signature

```typescript
public setLayerInvisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerVisible?: boolean): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md) \| Array&lt;[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md)<!-- -->&gt;


</td><td>

_(Optional)_ Layer. If no layer is specified, all layers are used by default


</td></tr>
<tr><td>

setOtherLayerVisible


</td><td>

boolean


</td><td>

_(Optional)_ Whether to set other layers to visible


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 隐藏底层丝印层（BOTTOM_SILKSCREEN=4）
const hideResult = await eda.pcb_Layer.setLayerInvisible(4);

// 2. 从图层列表确认显隐状态（HIDDEN=2）
const layers = await eda.pcb_Layer.getAllLayers();
const silk = layers.find(l => l.id === 4);

// 3. 恢复可见，避免影响后续查看
const restoreResult = await eda.pcb_Layer.setLayerVisible(4);

console.log('hideResult:', hideResult);
console.log('silkLayerStatus:', silk?.layerStatus);
console.log('restoreResult:', restoreResult);
```

### setlayervisible

# PCB\_Layer.setLayerVisible() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the layer to visible

## Signature

```typescript
public setLayerVisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerInvisible?: boolean): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md) \| Array&lt;[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md)<!-- -->&gt;


</td><td>

_(Optional)_ Layer. If no layer is specified, all layers are used by default


</td></tr>
<tr><td>

setOtherLayerInvisible


</td><td>

boolean


</td><td>

_(Optional)_ Whether to set other layers to invisible


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 先隐藏底层丝印层（BOTTOM_SILKSCREEN=4）制造初始状态
await eda.pcb_Layer.setLayerInvisible(4);

// 2. 恢复底层丝印层可见
const showResult = await eda.pcb_Layer.setLayerVisible(4);

// 3. 从图层列表确认显隐状态（SHOW=1）
const layers = await eda.pcb_Layer.getAllLayers();
const silk = layers.find(l => l.id === 4);

console.log('showResult:', showResult);
console.log('silkLayerStatus:', silk?.layerStatus);
```

### setpcbtype

# PCB\_Layer.setPcbType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set PCB type

## Signature

```typescript
public setPcbType(pcbType: EPCB_PcbPlateType): Promise<boolean>;
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

pcbType


</td><td>

[EPCB\_PcbPlateType](../enums/EPCB_PcbPlateType.md)


</td><td>

PCB type


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This is mainly to support FPC flexible board design. If the PCB type is set to FPC flexible board, an FPC stiffener layer will be added.

Please note:

1. EasyEDA does not yet support FPC flexible board production with more than 2 copper layers;

2. When switching the PCB type from FPC flexible board to ordinary board, any primitives on the FPC stiffener layer must be deleted in advance; otherwise, the switch will fail and `false` will be returned.

## Example


```javascript
// 1. 记录切换前的图层总数
const before = await eda.pcb_Layer.getAllLayers();

// 2. 切换为 FPC 软板（FPC=2），自动新增补强层
const fpcResult = await eda.pcb_Layer.setPcbType(2);

// 3. 查看切换后的图层总数变化
const fpcLayers = await eda.pcb_Layer.getAllLayers();

// 4. 切回普通板材（NORMAL=1），恢复原板材类型
const restoreResult = await eda.pcb_Layer.setPcbType(1);

console.log('fpcResult:', fpcResult);
console.log('layerCountBefore:', before.length, '→ layerCountAfter:', fpcLayers.length);
console.log('restoreResult:', restoreResult);
```

### setthenumberofcopperlayers

# PCB\_Layer.setTheNumberOfCopperLayers() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set Number of copper layers

## Signature

```typescript
public setTheNumberOfCopperLayers(numberOfLayers: TPCB_NumberOfCopperLayers): Promise<boolean>;
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

numberOfLayers


</td><td>

[TPCB\_NumberOfCopperLayers](../types/TPCB_NumberOfCopperLayers.md)


</td><td>

Number of copper layers


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

A newly created PCB document has two copper layers by default

## Example


```javascript
// 1. 记录调整前的信号层（铜箔层）数量
const before = (await eda.pcb_Layer.getAllLayers()).filter(l => l.type === 'SIGNAL').length;

// 2. 将铜箔层数调整为 4 层，新增 INNER_1（15）、INNER_2（16）两个内层
const setResult = await eda.pcb_Layer.setTheNumberOfCopperLayers(4);

// 3. 确认内层已加入图层列表
const afterLayers = await eda.pcb_Layer.getAllLayers();
const after = afterLayers.filter(l => l.type === 'SIGNAL').length;
const inner1 = afterLayers.find(l => l.id === 15);

// 4. 恢复为 2 层板，移除空的内层（内层上有图元时无法减少层数）
const restoreResult = await eda.pcb_Layer.setTheNumberOfCopperLayers(2);

console.log('setResult:', setResult);
console.log('copperCountBefore:', before, '→ copperCountAfter:', after);
console.log('inner1Name:', inner1?.name);
console.log('restoreResult:', restoreResult);
```

### unlocklayer

# PCB\_Layer.unlockLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Unlock the layer

## Signature

```typescript
public unlockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md) \| Array&lt;[TPCB\_LayersInTheSelectable](../types/TPCB_LayersInTheSelectable.md)<!-- -->&gt;


</td><td>

_(Optional)_ Layer. If no layer is specified, all layers are used by default


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 先锁定顶层（TOP=1）制造初始状态
await eda.pcb_Layer.lockLayer(1);

// 2. 解锁顶层，返回操作是否成功
const unlockResult = await eda.pcb_Layer.unlockLayer(1);

// 3. 从图层列表确认锁定已解除
const layers = await eda.pcb_Layer.getAllLayers();
const top = layers.find(l => l.id === 1);

console.log('unlockResult:', unlockResult);
console.log('topStillLocked:', top?.locked);
```
