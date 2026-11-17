# ISCH\_PrimitiveGenericPortData type

网络端口查询结果

## Signature

```typescript
type ISCH_PrimitiveGenericPortData = ISCH_PrimitiveGenericPortProps
	& Required<Pick<ISCH_PrimitiveGenericPortProps, 'x' | 'y' | 'value' | 'rotation'>> & {
		primitiveId: string;
	};
```
## References

[ISCH\_PrimitiveGenericPortProps](../interfaces/ISCH_PrimitiveGenericPortProps.md)