# SCH\_SimulationEngine class

原理图 &amp; 符号 / 仿真引擎类

## 签名

```typescript
declare class SCH_SimulationEngine 
```

## 备注

控制仿真引擎的对接和交互

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[pushData(eventType, props)](./SCH_SimulationEngine.md)


</td><td>


</td><td>

向仿真内核发送数据


</td></tr>
</tbody></table>

---

## 方法详情

### pushdata

# SCH\_SimulationEngine.pushData() method

向仿真内核发送数据

## 签名

```typescript
pushData(eventType: ESCH_DynamicSimulationEnginePushEventType | ESCH_SpiceSimulationEnginePushEventType, props: {
        [key: string]: any;
    }): void;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

eventType


</td><td>

[ESCH\_DynamicSimulationEnginePushEventType](../enums/ESCH_DynamicSimulationEnginePushEventType.md) \| [ESCH\_SpiceSimulationEnginePushEventType](../enums/ESCH_SpiceSimulationEnginePushEventType.md)


</td><td>

事件类型


</td></tr>
<tr><td>

props


</td><td>

\{ \[key: string\]: any; \}


</td><td>

数据


</td></tr>
</tbody></table>



## 返回值

void
