# PNL\_Event class

面板 / 事件类

## Signature

```typescript
class PNL_Event
```

## Remarks

订阅编辑器里发生的事：图元的新增 / 修改 / 删除、鼠标选中与移动。 回调只给必要信息（事件类型 + 相关 ID），要完整数据再调对应查询接口。 监听器按扩展内唯一的 ID 管理，可以只触发一次。