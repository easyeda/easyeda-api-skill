# IPNL\_EventPayload interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板事件数据

## Signature

```typescript
interface IPNL_EventPayload
```

## Remarks

只携带定位事件所需的最小信息，完整数据请调用对应查询接口获取

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

[layer?](./IPNL_EventPayload.md)

</td><td>

</td><td>

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

**_(ALPHA)_** _(Optional)_ 相关图层：图层状态变化事件携带被改变的图层，其余事件不携带

</td></tr>
<tr><td>

[primitiveIds?](./IPNL_EventPayload.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** _(Optional)_ 相关图元 ID：选中变化事件为本次选中集合，绘制结束事件为新增图元，其余事件不携带

</td></tr>
<tr><td>

[type](./IPNL_EventPayload.md)

</td><td>

</td><td>

[EPNL\_EventType](../enums/EPNL_EventType.md)

</td><td>

**_(ALPHA)_** 事件类型

</td></tr>
</tbody></table>

---

## 属性详情

### layer

# IPNL\_EventPayload.layer property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

相关图层：图层状态变化事件携带被改变的图层，其余事件不携带

## Signature

```typescript
layer?: EPNL_LayerId;
```

### primitiveids

# IPNL\_EventPayload.primitiveIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

相关图元 ID：选中变化事件为本次选中集合，绘制结束事件为新增图元，其余事件不携带

## Signature

```typescript
primitiveIds?: Array<string>;
```

### type

# IPNL\_EventPayload.type property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

事件类型

## Signature

```typescript
type: EPNL_EventType;
```
