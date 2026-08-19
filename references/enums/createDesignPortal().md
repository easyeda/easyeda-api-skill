# createDesignPortal() function

创建一个组件化弹出窗口的通信入口（客户端 API）。

扩展可在任意环境（iframe / worker / Main）调用，返回一个 IDesignPortal 对象， 所有通信（发消息 + 收事件）均封装在对象内部，扩展无需感知 bus。

扩展结合 lc-editor-design-react 的 VirtualRender / 虚拟机组件使用：

```tsx
const portal = eda.sys_Dialog.createDesignPortal();
const root = new VirtualRender();
root.render(
  <PortalContext.Provider value={portal}>
    <MyDialog />
  </PortalContext.Provider>
);
```

## Signature

```typescript
export function createDesignPortal(): IDesignPortal;
```


## Returns

[IDesignPortal](../interfaces/IDesignPortal.md)