# ESCH\_DynamicSimulationEnginePushEventType enum

动态仿真引擎推送事件类型

## 签名

```typescript
declare enum ESCH_DynamicSimulationEnginePushEventType 
```

## 枚举成员

<table><thead><tr><th>

成员


</th><th>

值


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

ENGINE\_ERROR


</td><td>

`"ENGINE_ERROR"`


</td><td>

错误


</td></tr>
<tr><td>

ENGINE\_LOG


</td><td>

`"ENGINE_LOG"`


</td><td>

实时日志


</td></tr>
<tr><td>

SESSION\_STATE


</td><td>

`"SESSION_STATE"`


</td><td>

状态变化（RUNNING/PAUSED/STOPPED...）


</td></tr>
<tr><td>

STREAM\_DATA


</td><td>

`"STREAM_DATA"`


</td><td>

实时数据帧（波形点/节点电压/内部量）


</td></tr>
<tr><td>

STREAM\_SNAPSHOT


</td><td>

`"STREAM_SNAPSHOT"`


</td><td>

一次快照（可选，用于 UI 刷新）


</td></tr>
</tbody></table>