# ISYS\_ReactComponentizationDialogWorkerPortal interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

WorkerPortal 类接口 用于管理组件的生命周期和事件处理

## Signature

```typescript
interface ISYS_ReactComponentizationDialogWorkerPortal 
```

## Remarks

WorkerPortal 负责在虚拟环境中创建、更新和销毁组件， 并通过消息机制与 EditorDesignPortal 通信。

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

[bindEvent](./ISYS_ReactComponentizationDialogWorkerPortal.md)


</td><td>


</td><td>

(handle: string, callback: (event: unknown) =&gt; void) =&gt; void


</td><td>

**_(ALPHA)_** 绑定事件处理器


</td></tr>
<tr><td>

[createComponent](./ISYS_ReactComponentizationDialogWorkerPortal.md)


</td><td>


</td><td>

(handle: string, type: string, props: Record&lt;string, unknown&gt;, parent: string) =&gt; void


</td><td>

**_(ALPHA)_** 创建组件


</td></tr>
<tr><td>

[detachComponent](./ISYS_ReactComponentizationDialogWorkerPortal.md)


</td><td>


</td><td>

(handle: string) =&gt; void


</td><td>

**_(ALPHA)_** 销毁组件


</td></tr>
<tr><td>

[dispatchEvent](./ISYS_ReactComponentizationDialogWorkerPortal.md)


</td><td>


</td><td>

(handle: string, event: unknown) =&gt; void


</td><td>

**_(ALPHA)_** 触发事件


</td></tr>
<tr><td>

[Provider](./ISYS_ReactComponentizationDialogWorkerPortal.md)


</td><td>


</td><td>

React.ComponentType&lt;React.PropsWithChildren&lt;unknown&gt;&gt;


</td><td>

**_(ALPHA)_** Provider 组件 用于提供 PortalContext 给子组件


</td></tr>
<tr><td>

[updateComponent](./ISYS_ReactComponentizationDialogWorkerPortal.md)


</td><td>


</td><td>

(handle: string, props: Record&lt;string, unknown&gt;) =&gt; void


</td><td>

**_(ALPHA)_** 更新组件


</td></tr>
</tbody></table>

---

## 属性详情

### bindevent

# ISYS\_ReactComponentizationDialogWorkerPortal.bindEvent property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

绑定事件处理器

## Signature

```typescript
bindEvent: (handle: string, callback: (event: unknown) => void) => void;
```

### createcomponent

# ISYS\_ReactComponentizationDialogWorkerPortal.createComponent property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建组件

## Signature

```typescript
createComponent: (handle: string, type: string, props: Record<string, unknown>, parent: string) => void;
```

### detachcomponent

# ISYS\_ReactComponentizationDialogWorkerPortal.detachComponent property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

销毁组件

## Signature

```typescript
detachComponent: (handle: string) => void;
```

### dispatchevent

# ISYS\_ReactComponentizationDialogWorkerPortal.dispatchEvent property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

触发事件

## Signature

```typescript
dispatchEvent: (handle: string, event: unknown) => void;
```

### provider

# ISYS\_ReactComponentizationDialogWorkerPortal.Provider property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Provider 组件 用于提供 PortalContext 给子组件

## Signature

```typescript
Provider: React.ComponentType<React.PropsWithChildren<unknown>>;
```

### updatecomponent

# ISYS\_ReactComponentizationDialogWorkerPortal.updateComponent property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

更新组件

## Signature

```typescript
updateComponent: (handle: string, props: Record<string, unknown>) => void;
```
