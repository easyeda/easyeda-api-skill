# IPCB\_AutoRouteIterationData interface

自动布线引擎当前迭代阶段的最优解

## Signature

```typescript
interface IPCB_AutoRouteIterationData
```

## Remarks

透传布线引擎每次迭代上报的最优解格式化数据；几何字段（`traces` / `vias`<!-- -->）为引擎原始结构，扩展消费时按需取用

## Properties

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[finish?](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 自动布线是否结束

</td></tr>
<tr><td>

[iterationId](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

number

</td><td>

迭代 ID

</td></tr>
<tr><td>

[progress](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

number

</td><td>

当前进度 \[0, 1\]

</td></tr>
<tr><td>

[routabitity?](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 布通率 \[0, 1\]

</td></tr>
<tr><td>

[stage](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

number

</td><td>

迭代阶段

</td></tr>
<tr><td>

[time?](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 耗时

</td></tr>
<tr><td>

[traces](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

Array&lt;Record&lt;string, unknown&gt;&gt;

</td><td>

导线数据（引擎原始结构：path/layer/width/net）

</td></tr>
<tr><td>

[vias](./IPCB_AutoRouteIterationData.md)

</td><td>

</td><td>

Array&lt;Record&lt;string, unknown&gt;&gt;

</td><td>

过孔数据（引擎原始结构：location/size/net）

</td></tr>
</tbody></table>

---

## 属性详情

### finish

# IPCB\_AutoRouteIterationData.finish property

自动布线是否结束

## Signature

```typescript
finish?: boolean;
```

### iterationid

# IPCB\_AutoRouteIterationData.iterationId property

迭代 ID

## Signature

```typescript
iterationId: number;
```

### progress

# IPCB\_AutoRouteIterationData.progress property

当前进度 \[0, 1\]

## Signature

```typescript
progress: number;
```

### routabitity

# IPCB\_AutoRouteIterationData.routabitity property

布通率 \[0, 1\]

## Signature

```typescript
routabitity?: number;
```

### stage

# IPCB\_AutoRouteIterationData.stage property

迭代阶段

## Signature

```typescript
stage: number;
```

### time

# IPCB\_AutoRouteIterationData.time property

耗时

## Signature

```typescript
time?: string;
```

### traces

# IPCB\_AutoRouteIterationData.traces property

导线数据（引擎原始结构：path/layer/width/net）

## Signature

```typescript
traces: Array<Record<string, unknown>>;
```

### vias

# IPCB\_AutoRouteIterationData.vias property

过孔数据（引擎原始结构：location/size/net）

## Signature

```typescript
vias: Array<Record<string, unknown>>;
```
