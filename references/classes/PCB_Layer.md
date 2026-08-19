# PCB\_Layer class

PCB &amp; 封装 / 图层操作类

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

**_(BETA)_** 新增自定义层


</td></tr>
<tr><td>

[deletePhysicalStackingConfiguration(configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 删除物理叠层配置


</td></tr>
<tr><td>

[getAllLayers()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有图层的详细属性


</td></tr>
<tr><td>

[getAllPhysicalStackingConfigurations(physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有物理叠层配置


</td></tr>
<tr><td>

[getCurrentLayer()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前图层的详细属性


</td></tr>
<tr><td>

[getCurrentPhysicalStackingConfiguration()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前物理叠层配置


</td></tr>
<tr><td>

[getCurrentPhysicalStackingConfigurationName()](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前物理叠层配置名称


</td></tr>
<tr><td>

[getDefaultPhysicalStackingConfigurationName(physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 获取新建 PCB 默认物理叠层配置的名称


</td></tr>
<tr><td>

[getPhysicalStackingConfiguration(configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定物理叠层配置


</td></tr>
<tr><td>

[lockLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 锁定层


</td></tr>
<tr><td>

[modifyLayer(layer, property)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 修改图层属性


</td></tr>
<tr><td>

[overwriteCurrentPhysicalStackingConfiguration(physicalStackingConfiguration)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 覆写当前物理叠层配置


</td></tr>
<tr><td>

[removeLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 移除层


</td></tr>
<tr><td>

[renamePhysicalStackingConfiguration(originalConfigurationName, configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 重命名物理叠层配置


</td></tr>
<tr><td>

[savePhysicalStackingConfiguration(physicalStackingConfiguration, configurationName, physicalProps, allowOverwrite)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 保存物理叠层配置


</td></tr>
<tr><td>

[selectLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

选中图层


</td></tr>
<tr><td>

[setAsDefaultPhysicalStackingConfiguration(configurationName, physicalProps)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 设置为新建 PCB 默认物理叠层配置


</td></tr>
<tr><td>

[setInactiveLayerDisplayMode(displayMode)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 设置非激活层展示模式


</td></tr>
<tr><td>

[setInactiveLayerTransparency(transparency)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 设置非激活层透明度


</td></tr>
<tr><td>

[setLayerColorConfiguration(colorConfiguration)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 设置层颜色配置


</td></tr>
<tr><td>

[setLayerInvisible(layer, setOtherLayerVisible)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 将层设置为不可见


</td></tr>
<tr><td>

[setLayerVisible(layer, setOtherLayerInvisible)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 将层设置为可见


</td></tr>
<tr><td>

[setPcbType(pcbType)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 设置 PCB 类型


</td></tr>
<tr><td>

[setTheNumberOfCopperLayers(numberOfLayers)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 设置铜箔层数


</td></tr>
<tr><td>

[unlockLayer(layer)](./PCB_Layer.md)


</td><td>


</td><td>

**_(BETA)_** 取消锁定层


</td></tr>
</tbody></table>

---

## 方法详情

### addcustomlayer

# PCB\_Layer.addCustomLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

新增自定义层

## Signature

```typescript
public addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>;
```


## Returns

Promise&lt;[TPCB\_LayersOfCustom](../types/TPCB_LayersOfCustom.md) \| undefined&gt;

新增的自定义层的图层 ID，如若为 `undefined` 则为新增失败，可能是自定义层数量已达到上限

### deletephysicalstackingconfiguration

# PCB\_Layer.deletePhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除物理叠层配置

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

配置名称


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ 物理属性，如若不传入则默认为当前 PCB 属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除是否成功

## Remarks

ADD since EDA v4.2

### getalllayers

# PCB\_Layer.getAllLayers() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有图层的详细属性

## Signature

```typescript
public getAllLayers(): Promise<Array<IPCB_LayerItem>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_LayerItem](../interfaces/IPCB_LayerItem.md)<!-- -->&gt;&gt;

所有图层的详细属性

### getallphysicalstackingconfigurations

# PCB\_Layer.getAllPhysicalStackingConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有物理叠层配置

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

_(Optional)_ 物理属性，如若不传入则默认为当前 PCB 属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md)<!-- -->&gt;&gt;

所有物理叠层配置

## Remarks

ADD since EDA v4.2

### getcurrentlayer

# PCB\_Layer.getCurrentLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前图层的详细属性

## Signature

```typescript
public getCurrentLayer(): Promise<IPCB_LayerItem | undefined>;
```


## Returns

Promise&lt;[IPCB\_LayerItem](../interfaces/IPCB_LayerItem.md) \| undefined&gt;

当前图层的详细属性，无激活层或无 PCB 画布时返回 `undefined`

## Remarks

ADD since EDA v4.2

### getcurrentphysicalstackingconfiguration

# PCB\_Layer.getCurrentPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前物理叠层配置

## Signature

```typescript
public getCurrentPhysicalStackingConfiguration(): Promise<IPCB_PhysicalStackingConfiguration | undefined>;
```


## Returns

Promise&lt;[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md) \| undefined&gt;

当前物理叠层配置，`undefined` 为获取失败

## Remarks

ADD since EDA v4.2

### getcurrentphysicalstackingconfigurationname

# PCB\_Layer.getCurrentPhysicalStackingConfigurationName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前物理叠层配置名称

## Signature

```typescript
public getCurrentPhysicalStackingConfigurationName(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

当前物理叠层配置名称，`undefined` 为获取失败

## Remarks

ADD since EDA v4.2

### getdefaultphysicalstackingconfigurationname

# PCB\_Layer.getDefaultPhysicalStackingConfigurationName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取新建 PCB 默认物理叠层配置的名称

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

_(Optional)_ 物理属性，如若不传入则默认为当前 PCB 属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

默认物理叠层配置的名称，`undefined` 为获取失败

## Remarks

ADD since EDA v4.2

### getphysicalstackingconfiguration

# PCB\_Layer.getPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取指定物理叠层配置

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

配置名称


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ 物理属性，如若不传入则默认为当前 PCB 属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PhysicalStackingConfiguration](../interfaces/IPCB_PhysicalStackingConfiguration.md) \| undefined&gt;

物理叠层配置，`undefined` 为不存在该物理叠层

## Remarks

ADD since EDA v4.2

### locklayer

# PCB\_Layer.lockLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

锁定层

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

_(Optional)_ 层，如若不指定任何层则默认为所有层


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### modifylayer

# PCB\_Layer.modifyLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改图层属性

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

层


</td></tr>
<tr><td>

property


</td><td>

{ name?: undefined \| string; type?: undefined \| [EPCB\_LayerType.SIGNAL](../enums/EPCB_LayerType.md) \| [EPCB\_LayerType.INTERNAL\_ELECTRICAL](../enums/EPCB_LayerType.md)<!-- -->; color?: undefined \| string; transparency?: undefined \| number }


</td><td>

属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

修改后的图层属性，如若为 `undefined` 则代表修改失败或图层不存在

## Remarks

仅内层和自定义层允许修改名称；仅内层允许修改类型, 透明度仅支持0-100之间的数

### overwritecurrentphysicalstackingconfiguration

# PCB\_Layer.overwriteCurrentPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

覆写当前物理叠层配置

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

覆写是否成功

## Remarks

将会覆写 PCB 当前的物理叠层配置，请注意数据丢失风险

如果传入的物理叠层配置不符合当前 PCB 的物理属性，将会直接返回 `false` 且不进行修改 ADD since EDA v4.2

### removelayer

# PCB\_Layer.removeLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

移除层

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

层


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

当前仅支持移除自定义层

### renamephysicalstackingconfiguration

# PCB\_Layer.renamePhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

重命名物理叠层配置

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

原物理叠层配置名称


</td></tr>
<tr><td>

configurationName


</td><td>

string


</td><td>

新物理叠层配置名称


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ 物理属性，如若不传入则默认为当前 PCB 属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

重命名是否成功

## Remarks

ADD since EDA v4.2

### savephysicalstackingconfiguration

# PCB\_Layer.savePhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

保存物理叠层配置

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

物理叠层配置


</td></tr>
<tr><td>

configurationName


</td><td>

string


</td><td>

配置名称


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ 物理属性，如若不传入则默认为当前 PCB 属性


</td></tr>
<tr><td>

allowOverwrite


</td><td>

boolean


</td><td>

_(Optional)_ 是否允许覆写同名物理叠层配置，`false` 则将在遇到同名物理叠层配置时返回 `false`<!-- -->，请注意可能的数据丢失风险


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

保存是否成功

## Remarks

ADD since EDA v4.2

### selectlayer

# PCB\_Layer.selectLayer() method

选中图层

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

层


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功，不存在指定层将返回 `false`

### setasdefaultphysicalstackingconfiguration

# PCB\_Layer.setAsDefaultPhysicalStackingConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置为新建 PCB 默认物理叠层配置

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

配置名称


</td></tr>
<tr><td>

physicalProps


</td><td>

[IPCB\_SubstratePhysicalProperties](../interfaces/IPCB_SubstratePhysicalProperties.md)


</td><td>

_(Optional)_ 物理属性，如若不传入则默认为当前 PCB 属性


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

设置是否成功

## Remarks

返回值为结果导向，重复设置相同的物理叠层为默认物理叠层也将返回 `true` ADD since EDA v4.2

### setinactivelayerdisplaymode

# PCB\_Layer.setInactiveLayerDisplayMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置非激活层展示模式

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

_(Optional)_ 展示模式


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否设置成功

### setinactivelayertransparency

# PCB\_Layer.setInactiveLayerTransparency() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置非激活层透明度

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

透明度，范围 `0-100`


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setlayercolorconfiguration

# PCB\_Layer.setLayerColorConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置层颜色配置

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

颜色配置


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setlayerinvisible

# PCB\_Layer.setLayerInvisible() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将层设置为不可见

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

_(Optional)_ 层，如若不指定任何层则默认为所有层


</td></tr>
<tr><td>

setOtherLayerVisible


</td><td>

boolean


</td><td>

_(Optional)_ 是否将其它层设置为可见


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setlayervisible

# PCB\_Layer.setLayerVisible() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将层设置为可见

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

_(Optional)_ 层，如若不指定任何层则默认为所有层


</td></tr>
<tr><td>

setOtherLayerInvisible


</td><td>

boolean


</td><td>

_(Optional)_ 是否将其它层设置为不可见


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### setpcbtype

# PCB\_Layer.setPcbType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置 PCB 类型

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

PCB 类型


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

此处主要是为了适配 FPC 软板的设计，如若将 PCB 类型设置为 FPC 软板，将会新增 FPC 补强层图层。

请注意：

1. 嘉立创暂不支持超过 2 层铜箔层的 FPC 软板生产；

2. 将 PCB 类型从 FPC 软板切换为普通板材时需要预先删除 FPC 补强层上的任何图元，否则将无法切换并返回 `false` 的结果。

### setthenumberofcopperlayers

# PCB\_Layer.setTheNumberOfCopperLayers() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置铜箔层数

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

铜箔层数


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

新建的 PCB 文档默认拥有两层铜箔层

### unlocklayer

# PCB\_Layer.unlockLayer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

取消锁定层

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

_(Optional)_ 层，如若不指定任何层则默认为所有层


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功
