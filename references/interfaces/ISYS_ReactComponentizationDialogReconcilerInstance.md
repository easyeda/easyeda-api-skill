# ISYS\_ReactComponentizationDialogReconcilerInstance interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

React Reconciler 实例接口 用于接收扩展的 react-reconciler 实例

## Signature

```typescript
interface ISYS_ReactComponentizationDialogReconcilerInstance 
```

## Remarks

此接口定义了从扩展传递的 react-reconciler 实例。 react-reconciler 是 React 的自定义渲染器，用于实现虚拟 DOM 渲染。

## Example


```typescript
const ReconcilerInstance = {
  default: Reconciler,
  constants: {
    ContinuousEventPriority,
    DiscreteEventPriority,
    DefaultEventPriority,
    ConcurrentRoot,
  },
};
```

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

[constants](./ISYS_ReactComponentizationDialogReconcilerInstance.md)


</td><td>


</td><td>

\{ ContinuousEventPriority: number; DiscreteEventPriority: number; DefaultEventPriority: number; ConcurrentRoot: number; \}


</td><td>

**_(ALPHA)_** Reconciler 常量


</td></tr>
<tr><td>

[default](./ISYS_ReactComponentizationDialogReconcilerInstance.md)


</td><td>


</td><td>

any


</td><td>

**_(ALPHA)_** Reconciler 构造函数


</td></tr>
</tbody></table>

---

## 属性详情

### constants

# ISYS\_ReactComponentizationDialogReconcilerInstance.constants property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reconciler 常量

## Signature

```typescript
constants: {
        ContinuousEventPriority: number;
        DiscreteEventPriority: number;
        DefaultEventPriority: number;
        ConcurrentRoot: number;
    };
```

### default

# ISYS\_ReactComponentizationDialogReconcilerInstance.default property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reconciler 构造函数

## Signature

```typescript
default: any;
```
