# ISYS\_ReactComponentizationDialogVirtualRender interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

VirtualRender 类接口 用于在虚拟环境中渲染 React 组件

## Signature

```typescript
interface ISYS_ReactComponentizationDialogVirtualRender 
```

## Remarks

VirtualRender 使用 react-reconciler 实现虚拟 DOM 渲染， 不直接操作真实 DOM，而是通过消息机制与 EditorDesignPortal 通信。

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

[render](./ISYS_ReactComponentizationDialogVirtualRender.md)


</td><td>


</td><td>

(element: React.ReactNode) =&gt; void


</td><td>

**_(ALPHA)_** 渲染 React 元素


</td></tr>
</tbody></table>

---

## 属性详情

### render

# ISYS\_ReactComponentizationDialogVirtualRender.render property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

渲染 React 元素

## Signature

```typescript
render: (element: React.ReactNode) => void;
```
