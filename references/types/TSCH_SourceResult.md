# TSCH\_SourceResult type

源数据接口返回信封

## Signature

```typescript
type TSCH_SourceResult<T> = { ok: true; value: T } | { ok: false; error: ISCH_SourceError };
```
## References

[ISCH\_SourceError](../interfaces/ISCH_SourceError.md)

## Remarks

`ok` 表示本次调用是否成功；失败时 `ok` 为 `false` 并携带 `error`<!-- -->，成功时 `ok` 为 `true` 并携带 `value`<!-- -->；失败不抛异常

\*\*写入异步生效\*\*：写接口返回 `ok` 只表示 Source 数据已更新；落盘与编辑器文档快照异步刷新， `sch_Netlist` / `sch_Drc` / 区域查询等接口通常需等待约 1 秒后才能读到本次改动； 写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->，不要把紧随其后的旧快照当成写入失败