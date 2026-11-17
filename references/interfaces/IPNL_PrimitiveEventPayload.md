# IPNL\_PrimitiveEventPayload interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

图元事件数据

## Signature

```typescript
interface IPNL_PrimitiveEventPayload
```

## Remarks

一次回调对应一次操作，批量操作合并为一条回调，事件数据里带本次涉及的全部图元，不会按图元拆成多次

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

[primitiveIds](./IPNL_PrimitiveEventPayload.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** 本次操作涉及的图元 ID 数组

</td></tr>
<tr><td>

[primitiveTypes](./IPNL_PrimitiveEventPayload.md)

</td><td>

</td><td>

Array&lt;[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_** 各图元对应的类型，与 `primitiveIds` 同下标一一对应

</td></tr>
</tbody></table>

---

## 属性详情

### primitiveids

# IPNL\_PrimitiveEventPayload.primitiveIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

本次操作涉及的图元 ID 数组

## Signature

```typescript
primitiveIds: Array<string>;
```

### primitivetypes

# IPNL\_PrimitiveEventPayload.primitiveTypes property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

各图元对应的类型，与 `primitiveIds` 同下标一一对应

## Signature

```typescript
primitiveTypes: Array<EPNL_PrimitiveType>;
```
