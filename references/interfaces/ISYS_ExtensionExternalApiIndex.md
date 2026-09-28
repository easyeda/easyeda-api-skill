# ISYS\_ExtensionExternalApiIndex interface

external API 扁平索引（按命名空间分组）

## Signature

```typescript
interface ISYS_ExtensionExternalApiIndex
```

## Remarks

键结构：namespace -<!-- -->&gt; apiName -<!-- -->&gt; 注册者列表（按 priority 升序） 便于调用时 O(1) 查找并按优先级取第一个（最早注册优先）