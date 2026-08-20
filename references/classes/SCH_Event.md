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
