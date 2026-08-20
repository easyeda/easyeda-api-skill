# PCB\_Event class

PCB &amp; footprint / event class

## Signature

```typescript
export class PCB_Event 
```

## Remarks

Register an event callback


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[addCrossProbeSelectEventListener(id, callFn)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a cross-probe selection event listener


</td></tr>
<tr><td>

[addMouseEventListener(id, eventType, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a mouse event listener


</td></tr>
<tr><td>

[addNetEventListener(id, eventType, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a net event listener


</td></tr>
<tr><td>

[addPrimitiveEventListener(id, eventType, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a primitive event listener


</td></tr>
<tr><td>

[addRayTracerEngine3DViewCameraChangeEventListener(id, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a ray tracer engine 3D preview camera change (dragging the 3D model) event listener


</td></tr>
<tr><td>

[addRayTracerEngine3DViewClickMaterialEventListener(id, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a ray tracer engine 3D preview material click event listener


</td></tr>
<tr><td>

[addRealTimeDrcResultEventListener(id, eventType, callFn)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a real-time DRC result event listener


</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./PCB_Event.md)


</td><td>


</td><td>

Query whether the event listener exists


</td></tr>
<tr><td>

[removeEventListener(id)](./PCB_Event.md)


</td><td>


</td><td>

Remove Event listener


</td></tr>
</tbody></table>

---

## 方法详情

### addcrossprobeselecteventlistener

# PCB\_Event.addCrossProbeSelectEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a cross-probe selection event listener

## Signature

```typescript
public addCrossProbeSelectEventListener(id: string, callFn: (props: any) => void | Promise<void>): void;
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

id


</td><td>

string


</td><td>

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

callFn


</td><td>

(props: any) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

## Example


```javascript
const listenerId = '嘉立创示例_cross_probe';

// 1. 注册交叉选择事件监听（回调在用户执行交叉选中时触发，本例不依赖实际触发）
eda.pcb_Event.addCrossProbeSelectEventListener(listenerId, (props) => {
  console.log('crossProbeSelect:', JSON.stringify(props));
});

// 2. 回读确认注册成功（同 id 重复注册会被防重机制忽略）
const registered = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addmouseeventlistener

# PCB\_Event.addMouseEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a mouse event listener

## Signature

```typescript
public addMouseEventListener(id: string, eventType: 'all' | EPCB_MouseEventType, callFn: (eventType: EPCB_MouseEventType, props: [{ primitiveId: string; primitiveType: EPCB_PrimitiveType; net?: undefined | string; designator?: undefined | string; parentComponentPrimitiveId?: undefined | string; parentComponentDesignator?: undefined | string }]) => void | Promise<void>, onlyOnce?: boolean): void;
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

id


</td><td>

string


</td><td>

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

eventType


</td><td>

'all' \| [EPCB\_MouseEventType](../enums/EPCB_MouseEventType.md)


</td><td>

Event type


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [EPCB\_MouseEventType](../enums/EPCB_MouseEventType.md)<!-- -->, props: \[{ primitiveId: string; primitiveType: [EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)<!-- -->; net?: undefined \| string; designator?: undefined \| string; parentComponentPrimitiveId?: undefined \| string; parentComponentDesignator?: undefined \| string }\]) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_(Optional)_ Whether to listen only once


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

## Example


```javascript
const listenerId = '嘉立创示例_mouse_event';

// 1. 注册鼠标事件监听，eventType 用 'all' 接收全部鼠标事件，onlyOnce 为 false 持续监听
eda.pcb_Event.addMouseEventListener(
  listenerId,
  'all',
  (eventType, props) => {
    // 回调在用户画布操作时触发；props 是命中图元的信息数组
    console.log('mouseEvent:', eventType, JSON.stringify(props));
  },
  false
);

// 2. 回读确认注册成功
const registered = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addneteventlistener

# PCB\_Event.addNetEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a net event listener

## Signature

```typescript
public addNetEventListener(id: string, eventType: 'all' | EPCB_NetEventType, callFn: (eventType: EPCB_NetEventType, props: [{ net: string }]) => void | Promise<void>, onlyOnce?: boolean): void;
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

id


</td><td>

string


</td><td>

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

eventType


</td><td>

'all' \| [EPCB\_NetEventType](../enums/EPCB_NetEventType.md)


</td><td>

Event type


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [EPCB\_NetEventType](../enums/EPCB_NetEventType.md)<!-- -->, props: \[{ net: string }\]) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_(Optional)_ Whether to listen only once


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Net select event only

1. When the net option is selected in the filter panel and a net is selected on the canvas

2. When a net is selected in Engineering Design -<!-- -->&gt; Nets

the event will be triggered

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

## Example


```javascript
const listenerId = '嘉立创示例_net_event';

// 1. 注册网络事件监听，eventType 用 'all' 接收全部网络事件
eda.pcb_Event.addNetEventListener(
  listenerId,
  'all',
  (eventType, props) => {
    // 回调在网络选中变化时触发；props 是网络信息数组
    console.log('netEvent:', eventType, JSON.stringify(props));
  },
  false
);

// 2. 回读确认注册成功
const registered = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addprimitiveeventlistener

# PCB\_Event.addPrimitiveEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a primitive event listener

## Signature

```typescript
public addPrimitiveEventListener(id: string, eventType: 'all' | EPCB_PrimitiveEventType, callFn: (eventType: EPCB_PrimitiveEventType, props: [{ primitiveId: string; primitiveType: EPCB_PrimitiveType; net?: undefined | string; designator?: undefined | string; parentComponentPrimitiveId?: undefined | string; parentComponentDesignator?: undefined | string }]) => void | Promise<void>, onlyOnce?: boolean): void;
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

id


</td><td>

string


</td><td>

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

eventType


</td><td>

'all' \| [EPCB\_PrimitiveEventType](../enums/EPCB_PrimitiveEventType.md)


</td><td>

Event type


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [EPCB\_PrimitiveEventType](../enums/EPCB_PrimitiveEventType.md)<!-- -->, props: \[{ primitiveId: string; primitiveType: [EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)<!-- -->; net?: undefined \| string; designator?: undefined \| string; parentComponentPrimitiveId?: undefined \| string; parentComponentDesignator?: undefined \| string }\]) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_(Optional)_ Whether to listen only once


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

## Example


```javascript
const listenerId = '嘉立创示例_primitive_event';
const events = [];

// 1. 注册图元事件监听，eventType 用 'all' 接收全部图元事件
eda.pcb_Event.addPrimitiveEventListener(
  listenerId,
  'all',
  (eventType, props) => {
    events.push({ eventType, primitiveType: props?.[0]?.primitiveType });
  },
  false
);

// 2. 创建一个测试焊盘，触发图元 add 事件
const pad = await eda.pcb_PrimitivePad.create(1, '1', 5000, 3000, 0, ['ELLIPSE', 60, 60], '', null, 0, 0, 0, false, 0);
await new Promise(r => setTimeout(r, 500));

// 3. 删除测试焊盘，再触发一次图元删除事件（同时清理测试图元）
await eda.pcb_PrimitivePad.delete([pad.getState_PrimitiveId()]);
await new Promise(r => setTimeout(r, 500));

// 4. 观察两次操作分别触发的事件
console.log('events:', JSON.stringify(events));

// 5. 清理监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addraytracerengine3dviewcamerachangeeventlistener

# PCB\_Event.addRayTracerEngine3DViewCameraChangeEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a ray tracer engine 3D preview camera change (dragging the 3D model) event listener

## Signature

```typescript
public addRayTracerEngine3DViewCameraChangeEventListener(id: string, callFn: (props: { position: { x: number; y: number; z: number }; rotation: { x: number; y: number; z: number }; focalLength: number }) => void | Promise<void>, onlyOnce?: boolean): void;
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

id


</td><td>

string


</td><td>

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

callFn


</td><td>

(props: { position: { x: number; y: number; z: number }; rotation: { x: number; y: number; z: number }; focalLength: number }) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_(Optional)_ Whether to listen only once


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error` ADD since EDA v4

## Example


```javascript
const listenerId = '嘉立创示例_3d_camera';

// 1. 注册相机变动监听（回调在 3D 预览拖动时触发，本例不依赖实际触发）
eda.pcb_Event.addRayTracerEngine3DViewCameraChangeEventListener(
  listenerId,
  (props) => {
    console.log('cameraChange:', JSON.stringify(props));
  }
);

// 2. 回读确认注册成功
const registered = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addraytracerengine3dviewclickmaterialeventlistener

# PCB\_Event.addRayTracerEngine3DViewClickMaterialEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a ray tracer engine 3D preview material click event listener

## Signature

```typescript
public addRayTracerEngine3DViewClickMaterialEventListener(id: string, callFn: (props: { materialId: number; material: any }) => void | Promise<void>, onlyOnce?: boolean): void;
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

id


</td><td>

string


</td><td>

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

callFn


</td><td>

(props: { materialId: number; material: any }) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_(Optional)_ Whether to listen only once


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error` ADD since EDA v4

## Example


```javascript
const listenerId = '嘉立创示例_3d_material';

// 1. 注册点击材质监听（回调在 3D 预览点击材质时触发，本例不依赖实际触发）
eda.pcb_Event.addRayTracerEngine3DViewClickMaterialEventListener(
  listenerId,
  (props) => {
    console.log('clickMaterial:', JSON.stringify(props));
  }
);

// 2. 回读确认注册成功
const registered = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addrealtimedrcresulteventlistener

# PCB\_Event.addRealTimeDrcResultEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a real-time DRC result event listener

## Signature

```typescript
public addRealTimeDrcResultEventListener(id: string, eventType: 'all', callFn: (eventType: undefined, props: [{ drcResult: any }]) => void | Promise<void>): void;
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

id


</td><td>

string


</td><td>

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

eventType


</td><td>

'all'


</td><td>

Event type


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: undefined, props: \[{ drcResult: any }\]) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

## Example


```javascript
const listenerId = '嘉立创示例_drc_result';

// 1. 注册实时 DRC 结果监听，eventType 固定为 'all'
eda.pcb_Event.addRealTimeDrcResultEventListener(
  listenerId,
  'all',
  (eventType, props) => {
    // 回调在实时 DRC 检出违规时触发；props 是 DRC 结果数组
    console.log('drcResult:', JSON.stringify(props));
  }
);

// 2. 回读确认注册成功
const registered = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### iseventlisteneralreadyexist

# PCB\_Event.isEventListenerAlreadyExist() method

Query whether the event listener exists

## Signature

```typescript
public isEventListenerAlreadyExist(id: string): boolean;
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

id


</td><td>

string


</td><td>

Event ID


</td></tr>
</tbody></table>



## Returns

boolean

Whether the event listener exists

## Example


```javascript
const listenerId = '嘉立创示例_event_exist';

// 1. 注册前查询：应为 false
const before = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('before:', before);

// 2. 注册一个鼠标事件监听使 id 生效
eda.pcb_Event.addMouseEventListener(listenerId, 'all', () => {}, false);

// 3. 注册后查询：应为 true
const after = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('after:', after);

// 4. 移除后查询：应回到 false
eda.pcb_Event.removeEventListener(listenerId);
const afterRemove = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('afterRemove:', afterRemove);
```

### removeeventlistener

# PCB\_Event.removeEventListener() method

Remove Event listener

## Signature

```typescript
public removeEventListener(id: string): boolean;
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

id


</td><td>

string


</td><td>

Event ID


</td></tr>
</tbody></table>



## Returns

boolean

Whether Remove Specify event listener

## Example


```javascript
const listenerId = '嘉立创示例_event_remove';

// 1. 先注册一个鼠标事件监听作为移除目标
eda.pcb_Event.addMouseEventListener(listenerId, 'all', () => {}, false);
const registered = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 2. 移除该监听
const removed = eda.pcb_Event.removeEventListener(listenerId);
console.log('removed:', removed);

// 3. 回读确认已不存在
const existAfter = eda.pcb_Event.isEventListenerAlreadyExist(listenerId);
console.log('existAfter:', existAfter);

// 4. 重复移除同一 id：返回 false（本就未注册）
const removedAgain = eda.pcb_Event.removeEventListener(listenerId);
console.log('removedAgain:', removedAgain);
```
