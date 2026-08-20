# SCH\_Event class

Schematic &amp; symbol / event class

## Signature

```typescript
export class SCH_Event 
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

[addMouseEventListener(id, eventType, callFn, onlyOnce)](./SCH_Event.md)


</td><td>


</td><td>

Add a mouse event listener


</td></tr>
<tr><td>

[addPrimitiveEventListener(id, eventType, callFn, onlyOnce)](./SCH_Event.md)


</td><td>


</td><td>

**_(BETA)_** Add a primitive event listener


</td></tr>
<tr><td>

[addSimulationEnginePullEventListener(id, eventType, callFn)](./SCH_Event.md)


</td><td>


</td><td>

**_(BETA)_** Register a simulation engine pull event listener


</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./SCH_Event.md)


</td><td>


</td><td>

Query whether the event listener exists


</td></tr>
<tr><td>

[removeEventListener(id)](./SCH_Event.md)


</td><td>


</td><td>

Remove Event listener


</td></tr>
</tbody></table>

---

## 方法详情

### addmouseeventlistener

# SCH\_Event.addMouseEventListener() method

Add a mouse event listener

## Signature

```typescript
public addMouseEventListener(id: string, eventType: 'all' | ESCH_MouseEventType, callFn: (eventType: ESCH_MouseEventType) => void | Promise<void>, onlyOnce?: boolean): void;
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

'all' \| [ESCH\_MouseEventType](../enums/ESCH_MouseEventType.md)


</td><td>

Event type


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [ESCH\_MouseEventType](../enums/ESCH_MouseEventType.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;


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
const listenerId = '嘉立创示例_sch_mouse_event';

// 1. 注册鼠标事件监听，eventType 用 'all' 接收全部鼠标事件，onlyOnce 为 false 持续监听
eda.sch_Event.addMouseEventListener(
  listenerId,
  'all',
  (eventType) => {
    // 回调在用户画布操作时触发
    console.log('mouseEvent:', eventType);
  },
  false
);

// 2. 回读确认注册成功
const registered = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.sch_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addprimitiveeventlistener

# SCH\_Event.addPrimitiveEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add a primitive event listener

## Signature

```typescript
public addPrimitiveEventListener(id: string, eventType: 'all' | ESCH_PrimitiveEventType, callFn: (eventType: ESCH_PrimitiveEventType, props: { primitiveIds: string[] }) => void | Promise<void>, onlyOnce?: boolean): void;
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

'all' \| [ESCH\_PrimitiveEventType](../enums/ESCH_PrimitiveEventType.md)


</td><td>

Event type


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [ESCH\_PrimitiveEventType](../enums/ESCH_PrimitiveEventType.md)<!-- -->, props: { primitiveIds: string\[\] }) =&gt; void \| Promise&lt;void&gt;


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
const listenerId = '嘉立创示例_sch_primitive_event';

// 1. 注册图元事件监听，eventType 用 'all' 接收全部图元事件
eda.sch_Event.addPrimitiveEventListener(
  listenerId,
  'all',
  (eventType, props) => {
    // 回调在画布图元变化时触发
    console.log('primitiveEvent:', eventType, JSON.stringify(props?.primitiveIds));
  },
  false
);

// 2. 回读确认注册成功
const registered = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.sch_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### addsimulationenginepulleventlistener

# SCH\_Event.addSimulationEnginePullEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Register a simulation engine pull event listener

## Signature

```typescript
public addSimulationEnginePullEventListener(id: string, eventType: 'all', callFn: (eventType: ESCH_DynamicSimulationEnginePullEventType | ESCH_SpiceSimulationEnginePullEventType, props: Record<string, any>) => void | Promise<void>): void;
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

(eventType: [ESCH\_DynamicSimulationEnginePullEventType](../enums/ESCH_DynamicSimulationEnginePullEventType.md) \| [ESCH\_SpiceSimulationEnginePullEventType](../enums/ESCH_SpiceSimulationEnginePullEventType.md)<!-- -->, props: Record&lt;string, any&gt;) =&gt; void \| Promise&lt;void&gt;


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
const listenerId = '嘉立创示例_sch_simulation_pull_event';

// 1. 注册仿真引擎拉取事件监听，eventType 固定传 'all'
eda.sch_Event.addSimulationEnginePullEventListener(
  listenerId,
  'all',
  (eventType, props) => {
    // 回调在仿真引擎拉取数据时触发
    console.log('pullEvent:', eventType, JSON.stringify(props));
  }
);

// 2. 回读确认注册成功
const registered = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 3. 清理监听
const removed = eda.sch_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### iseventlisteneralreadyexist

# SCH\_Event.isEventListenerAlreadyExist() method

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
const listenerId = '嘉立创示例_sch_event_exist';

// 1. 注册前查询：应为 false
const before = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('before:', before);

// 2. 注册一个鼠标事件监听使 id 生效
eda.sch_Event.addMouseEventListener(listenerId, 'all', () => {}, false);

// 3. 注册后查询：应为 true
const after = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('after:', after);

// 4. 移除后查询：应回到 false
eda.sch_Event.removeEventListener(listenerId);
const afterRemove = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('afterRemove:', afterRemove);
```

### removeeventlistener

# SCH\_Event.removeEventListener() method

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
const listenerId = '嘉立创示例_sch_event_remove';

// 1. 先注册一个鼠标事件监听作为移除目标
eda.sch_Event.addMouseEventListener(listenerId, 'all', () => {}, false);
const registered = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 2. 移除该监听
const removed = eda.sch_Event.removeEventListener(listenerId);
console.log('removed:', removed);

// 3. 回读确认已不存在
const existAfter = eda.sch_Event.isEventListenerAlreadyExist(listenerId);
console.log('existAfter:', existAfter);

// 4. 重复移除同一 id：返回 false（本就未注册）
const removedAgain = eda.sch_Event.removeEventListener(listenerId);
console.log('removedAgain:', removedAgain);
```
