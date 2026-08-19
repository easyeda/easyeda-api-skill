# SCH\_Document class

原理图 &amp; 符号 / 文档操作类

## Signature

```typescript
export class SCH_Document 
```

## Remarks

对设计文档总体进行的操作

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

**_(BETA)_** 自动布局


</td></tr>
<tr><td>

[autoRouting(props)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 自动布线


</td></tr>
<tr><td>

[getCurrentFilterConfiguration()](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前画布过滤器配置


</td></tr>
<tr><td>

[getPrimitiveAtPoint(x, y)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 获取坐标点的图元


</td></tr>
<tr><td>

[getPrimitivesInRegion(left, right, top, bottom)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 获取区域内所有图元


</td></tr>
<tr><td>

[importChanges()](./SCH_Document.md)


</td><td>


</td><td>

从 PCB 导入变更


</td></tr>
<tr><td>

[navigateToCoordinates(x, y)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 定位到画布坐标


</td></tr>
<tr><td>

[navigateToRegion(left, right, top, bottom)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 定位到画布区域


</td></tr>
<tr><td>

[save()](./SCH_Document.md)


</td><td>


</td><td>

保存文档


</td></tr>
</tbody></table>

---

## 方法详情

### autolayout

# SCH\_Document.autoLayout() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

自动布局

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

_(Optional)_ 自动布局参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

自动布局结果

## Remarks

如不传入任何参数，将对所有器件进行自动布局

### autorouting

# SCH\_Document.autoRouting() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

自动布线

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

_(Optional)_ 自动布线参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

自动布线结果

## Remarks

如不传入任何参数，将对所有未布线的网络进行自动布线

### getcurrentfilterconfiguration

# SCH\_Document.getCurrentFilterConfiguration() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前画布过滤器配置

## Signature

```typescript
public getCurrentFilterConfiguration(): Promise<Record<string, boolean> | undefined>;
```


## Returns

Promise&lt;Record&lt;string, boolean&gt; \| undefined&gt;

当前画布过滤器配置，`undefined` 为获取失败

## Remarks

ADD since EDA v4.2

### getprimitiveatpoint

# SCH\_Document.getPrimitiveAtPoint() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取坐标点的图元

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

坐标点 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标点 Y


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md) \| undefined&gt;

坐标点的图元，如若坐标点无法找到图元，将返回 `undefined`

## Remarks

本操作和前端鼠标点击操作类似，将会获取指定坐标点上的图元 ADD since EDA v4.2

### getprimitivesinregion

# SCH\_Document.getPrimitivesInRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取区域内所有图元

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

矩形框第一 X 坐标


</td></tr>
<tr><td>

right


</td><td>

number


</td><td>

矩形框第二 X 坐标


</td></tr>
<tr><td>

top


</td><td>

number


</td><td>

矩形框第一 Y 坐标


</td></tr>
<tr><td>

bottom


</td><td>

number


</td><td>

矩形框第二 Y 坐标


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

区域内所有图元

## Remarks

本接口仅会返回完全包含在区域内的图元，如果图元有部分位于区域外，将被忽略 ADD since EDA v4.2

### importchanges

# SCH\_Document.importChanges() method

从 PCB 导入变更

## Signature

```typescript
public importChanges(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

导入操作是否成功，导入失败或游离原理图返回 `false`

### navigatetocoordinates

# SCH\_Document.navigateToCoordinates() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

定位到画布坐标

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

坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

本接口在前端画布上定位到指定的坐标；

此处的单位跨度为 0.01inch ADD since EDA v4.2

### navigatetoregion

# SCH\_Document.navigateToRegion() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

定位到画布区域

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

矩形框第一 X 坐标


</td></tr>
<tr><td>

right


</td><td>

number


</td><td>

矩形框第二 X 坐标


</td></tr>
<tr><td>

top


</td><td>

number


</td><td>

矩形框第一 Y 坐标


</td></tr>
<tr><td>

bottom


</td><td>

number


</td><td>

矩形框第二 Y 坐标


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

本接口在前端画布上定位到指定的区域；

例如：传入数据为 `{left: 0, right: 60, top: 100, bottom: -20}` =<!-- -->&gt; `navigateToRegion(0, 60, 100, -20)`<!-- -->， 则画布将会定位到以 `[30, 40]` 为中心的，`x` 轴方向长度为 `60`<!-- -->，`y` 轴方向长度为 `120` 的矩形范围；

本接口不进行缩放操作，但会生成指示定位中心及表示区域范围的矩形框；

此处的单位跨度为 0.01inch ADD since EDA v4.2

### save

# SCH\_Document.save() method

保存文档

## Signature

```typescript
public save(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
