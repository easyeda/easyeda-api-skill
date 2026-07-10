# EDMT\_EditorTabEventType enum

编辑器标签页事件类型

## Signature

```typescript
declare enum EDMT_EditorTabEventType 
```

## Enumeration Members

<table><thead><tr><th>

Member


</th><th>

Value


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

CLOSE


</td><td>

`"close"`


</td><td>

关闭


</td></tr>
<tr><td>

OPEN


</td><td>

`"open"`


</td><td>

打开


</td></tr>
<tr><td>

TOGGLE


</td><td>

`"toggle"`


</td><td>

切换


</td></tr>
</tbody></table>

## Remarks

在类型为 [关闭](./EDMT_EditorTabEventType.md) 或 [打开](./EDMT_EditorTabEventType.md) 时，均会同时触发 [切换](./EDMT_EditorTabEventType.md) 事件