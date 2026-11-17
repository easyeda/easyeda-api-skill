# TDMT\_SourceProjectDocumentTree type

源数据工程文档树

## Signature

```typescript
type TDMT_SourceProjectDocumentTree = Array<
	IDMT_BoardItem | IDMT_SchematicItem | IDMT_PcbItem | IDMT_PanelItem
>;
```
## References

[IDMT\_BoardItem](../interfaces/IDMT_BoardItem.md)<!-- -->, [IDMT\_SchematicItem](../interfaces/IDMT_SchematicItem.md)<!-- -->, [IDMT\_PcbItem](../interfaces/IDMT_PcbItem.md)<!-- -->, [IDMT\_PanelItem](../interfaces/IDMT_PanelItem.md)

## Remarks

与工程内文档数据同构，供按 `schematicName` / `pageName` 进一步定位具体文档