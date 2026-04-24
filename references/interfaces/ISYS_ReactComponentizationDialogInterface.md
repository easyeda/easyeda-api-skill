# ISYS\_ReactComponentizationDialogInterface interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

React 组件化弹出窗口接口

## Signature

```typescript
interface ISYS_ReactComponentizationDialogInterface 
```

## Remarks

此接口提供了创建 React 组件化弹出窗口所需的所有功能。 通过此接口，用户可以使用 lc-editor-design 提供的预制组件创建自定义弹窗。

## Example


```typescript
const { Components, WorkerPortal, VirtualRender } = await eda.sys_Dialog.createReactComponentizationDialogInterface(
  {
    createContext: React.createContext,
    useContext: React.useContext,
    useRef: React.useRef,
    useEffect: React.useEffect,
    createElement: React.createElement,
  },
  {
    default: Reconciler,
    constants: {
      ContinuousEventPriority,
      DiscreteEventPriority,
      DefaultEventPriority,
      ConcurrentRoot,
    },
  },
);

const portal = new WorkerPortal();
const root = new VirtualRender();

function MyDialog() {
  return (
    <Modal defaultTop={100} defaultLeft={100} defaultWidth={800} defaultHeight={600}>
      <Dialog title="My Dialog">
        <Input placeholder="Enter text" />
      </Dialog>
    </Modal>
  );
}

root.render(
  <portal.Provider>
    <MyDialog />
  </portal.Provider>,
);
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

[Components](./ISYS_ReactComponentizationDialogInterface.md)


</td><td>


</td><td>

[LC\_DESIGN\_COMPONENTS](../types/LC_DESIGN_COMPONENTS.md)


</td><td>

**_(ALPHA)_** 预制组件


</td></tr>
<tr><td>

[LC\_DESIGN\_COMPONENTS\_NAMES](./ISYS_ReactComponentizationDialogInterface.md)


</td><td>


</td><td>

typeof LC\_DESIGN\_COMPONENTS\_NAMES


</td><td>

**_(ALPHA)_** 组件名称常量


</td></tr>
<tr><td>

[VirtualRender](./ISYS_ReactComponentizationDialogInterface.md)


</td><td>


</td><td>

new () =&gt; [ISYS\_ReactComponentizationDialogVirtualRender](./ISYS_ReactComponentizationDialogVirtualRender.md)


</td><td>

**_(ALPHA)_** VirtualRender 类


</td></tr>
<tr><td>

[WorkerPortal](./ISYS_ReactComponentizationDialogInterface.md)


</td><td>


</td><td>

new () =&gt; [ISYS\_ReactComponentizationDialogWorkerPortal](./ISYS_ReactComponentizationDialogWorkerPortal.md)


</td><td>

**_(ALPHA)_** WorkerPortal 类


</td></tr>
</tbody></table>

---

## 属性详情

### components

# ISYS\_ReactComponentizationDialogInterface.Components property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

预制组件

## Signature

```typescript
Components: LC_DESIGN_COMPONENTS;
```

## Remarks

包含所有 lc-editor-design 提供的预制组件，如 Modal、Dialog、Input、Button 等。

### lc_design_components_names

# ISYS\_ReactComponentizationDialogInterface.LC\_DESIGN\_COMPONENTS\_NAMES property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组件名称常量

## Signature

```typescript
LC_DESIGN_COMPONENTS_NAMES: typeof LC_DESIGN_COMPONENTS_NAMES;
```

## Remarks

包含所有预制组件的名称常量，用于类型安全的组件引用。

### virtualrender

# ISYS\_ReactComponentizationDialogInterface.VirtualRender property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

VirtualRender 类

## Signature

```typescript
VirtualRender: new () => ISYS_ReactComponentizationDialogVirtualRender;
```

## Remarks

用于在虚拟环境中渲染 React 组件。 需要实例化后使用。

### workerportal

# ISYS\_ReactComponentizationDialogInterface.WorkerPortal property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

WorkerPortal 类

## Signature

```typescript
WorkerPortal: new () => ISYS_ReactComponentizationDialogWorkerPortal;
```

## Remarks

用于管理组件的生命周期和事件处理。 需要实例化后使用。
