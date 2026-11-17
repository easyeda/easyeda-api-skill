# IPCB\_AutoJobSnapshot interface

自动布线 / 自动布局作业实时快照

## Signature

```typescript
interface IPCB_AutoJobSnapshot
```

## Remarks

`getAutoJobLog` 的返回体：被调用时立刻返回，数据取自编辑器主线程缓存，不等待布线进程

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

[logs](./IPCB_AutoJobSnapshot.md)

</td><td>

</td><td>

Array&lt;[ISYS\_JobLogEntry](./ISYS_JobLogEntry.md)<!-- -->&gt;

</td><td>

引擎基础日志（按作业归档的全量日志）

</td></tr>
<tr><td>

[progress](./IPCB_AutoJobSnapshot.md)

</td><td>

</td><td>

[IPCB\_AutoJobProgress](./IPCB_AutoJobProgress.md) \| null

</td><td>

当前进度、布通率 / 适应度等统计数据；作业尚未上报过数据时为 `null`

</td></tr>
<tr><td>

[result](./IPCB_AutoJobSnapshot.md)

</td><td>

</td><td>

[IPCB\_AutoRouteIterationData](./IPCB_AutoRouteIterationData.md) \| [IPCB\_AutoLayoutIterationData](./IPCB_AutoLayoutIterationData.md) \| null

</td><td>

引擎当前迭代阶段的最优解（结构随作业引擎类型：布线为布线迭代数据，布局为布局迭代数据）；作业尚未上报过数据时为 `null`

</td></tr>
</tbody></table>

---

## 属性详情

### logs

# IPCB\_AutoJobSnapshot.logs property

引擎基础日志（按作业归档的全量日志）

## Signature

```typescript
logs: Array<ISYS_JobLogEntry>;
```

### progress

# IPCB\_AutoJobSnapshot.progress property

当前进度、布通率 / 适应度等统计数据；作业尚未上报过数据时为 `null`

## Signature

```typescript
progress: IPCB_AutoJobProgress | null;
```

### result

# IPCB\_AutoJobSnapshot.result property

引擎当前迭代阶段的最优解（结构随作业引擎类型：布线为布线迭代数据，布局为布局迭代数据）；作业尚未上报过数据时为 `null`

## Signature

```typescript
result: IPCB_AutoRouteIterationData | IPCB_AutoLayoutIterationData | null;
```
