# SCH\_SimulationEngine class

Schematic &amp; symbol / simulation engine class

## Signature

```typescript
export class SCH_SimulationEngine 
```

## Remarks

Controls the docking and interaction of the simulation engine

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[pushData(eventType, props)](./SCH_SimulationEngine.md)


</td><td>


</td><td>

Send data to the simulation kernel


</td></tr>
</tbody></table>

---

## 方法详情

### pushdata

# SCH\_SimulationEngine.pushData() method

Send data to the simulation kernel

## Signature

```typescript
public pushData(eventType: ESCH_DynamicSimulationEnginePushEventType | ESCH_SpiceSimulationEnginePushEventType, props: Record<string, any>): void;
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

eventType


</td><td>

[ESCH\_DynamicSimulationEnginePushEventType](../enums/ESCH_DynamicSimulationEnginePushEventType.md) \| [ESCH\_SpiceSimulationEnginePushEventType](../enums/ESCH_SpiceSimulationEnginePushEventType.md)


</td><td>

Event type


</td></tr>
<tr><td>

props


</td><td>

Record&lt;string, any&gt;


</td><td>

Data


</td></tr>
</tbody></table>



## Returns

void
