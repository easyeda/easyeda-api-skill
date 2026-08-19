# registerDesignPortalHost() function

注册组件化弹出窗口服务端（仅在 Main 环境调用一次）。

监听客户端（iframe / worker / Main）经 bus 发来的 create/update/detach 消息， 驱动 Main 端的 EditorDesignPortal 实际渲染组件，并将组件事件回传给客户端。

## Signature

```typescript
export function registerDesignPortalHost(): void;
```


## Returns

void