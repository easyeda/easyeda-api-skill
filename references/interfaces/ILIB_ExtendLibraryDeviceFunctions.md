# ILIB\_ExtendLibraryDeviceFunctions interface

External library device functions

## Signature

```typescript
export interface ILIB_ExtendLibraryDeviceFunctions extends ILIB_ExtendLibraryFunctions 
```
**Extends:** [ILIB\_ExtendLibraryFunctions](./ILIB_ExtendLibraryFunctions.md)

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

[getList](./ILIB_ExtendLibraryDeviceFunctions.md)


</td><td>


</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./ILIB_ExtendLibrarySearchProperty.md)<!-- -->&lt;{ attributes?: undefined \| Record&lt;string, string&gt;; symbolType?: undefined \| [ELIB\_SymbolType.COMPONENT](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NET\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NET\_PORT](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.DRAWING](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NON\_ELECTRICAL](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.SHORT\_CIRCUIT\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.OFF\_PAGE\_CONNECTOR](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.DIFFERENTIAL\_PAIRS\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.CBB\_SYMBOL](../enums/ELIB_SymbolType.md) }&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./ILIB_ExtendLibrarySearchResult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md) &amp; { classification?: undefined \| string\[\] \| [ILIB\_ExtendLibraryClassificationIndex](./ILIB_ExtendLibraryClassificationIndex.md)<!-- -->; symbol?: undefined \| [ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md) &amp; { symbolType: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md) }; footprint?: undefined \| [ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md)<!-- -->; symbols?: undefined \| ([ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md) &amp; { symbolType: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md) })\[\]; footprints?: undefined \| [ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md)<!-- -->\[\]; model3d?: undefined \| [ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md) &amp; { adjustment?: undefined \| { size?: undefined \| { x: number; y: number; z: number }; rotation?: undefined \| { x: number; y: number; z: number }; offset?: undefined \| { x: number; y: number; z: number } } }; images?: undefined \| [ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md)<!-- -->\[\]; value?: undefined \| string; supplierPart?: undefined \| string; manufacturer?: undefined \| string; description?: undefined \| string; updateTime?: undefined \| number; createTime?: undefined \| number; attributes?: undefined \| Record&lt;string, string&gt; }&gt;&gt;


</td><td>


</td></tr>
<tr><td>

[getSupportedPreviewTypes](./ILIB_ExtendLibraryDeviceFunctions.md)


</td><td>


</td><td>

() =&gt; Promise&lt;Array&lt;[ELIB\_PreviewType](../enums/ELIB_PreviewType.md)<!-- -->&gt;&gt;


</td><td>

获取支持的预览类型


</td></tr>
<tr><td>

[getSupportedSymbolTypes](./ILIB_ExtendLibraryDeviceFunctions.md)


</td><td>


</td><td>

() =&gt; Promise&lt;Array&lt;[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->&gt;&gt;


</td><td>

获取支持的符号类型


</td></tr>
</tbody></table>

---

## 属性详情

### getlist

# ILIB\_ExtendLibraryDeviceFunctions.getList property

## Signature

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<{ attributes?: undefined | Record<string, string>; symbolType?: undefined | ELIB_SymbolType.COMPONENT | ELIB_SymbolType.NET_FLAG | ELIB_SymbolType.NET_PORT | ELIB_SymbolType.DRAWING | ELIB_SymbolType.NON_ELECTRICAL | ELIB_SymbolType.SHORT_CIRCUIT_FLAG | ELIB_SymbolType.OFF_PAGE_CONNECTOR | ELIB_SymbolType.DIFFERENTIAL_PAIRS_FLAG | ELIB_SymbolType.CBB_SYMBOL }>) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItemIndex & { classification?: undefined | string[] | ILIB_ExtendLibraryClassificationIndex; symbol?: undefined | ILIB_ExtendLibraryItem & { symbolType: ELIB_SymbolType }; footprint?: undefined | ILIB_ExtendLibraryItem; symbols?: undefined | (ILIB_ExtendLibraryItem & { symbolType: ELIB_SymbolType })[]; footprints?: undefined | ILIB_ExtendLibraryItem[]; model3d?: undefined | ILIB_ExtendLibraryItemIndex & { adjustment?: undefined | { size?: undefined | { x: number; y: number; z: number }; rotation?: undefined | { x: number; y: number; z: number }; offset?: undefined | { x: number; y: number; z: number } } }; images?: undefined | ILIB_ExtendLibraryItem[]; value?: undefined | string; supplierPart?: undefined | string; manufacturer?: undefined | string; description?: undefined | string; updateTime?: undefined | number; createTime?: undefined | number; attributes?: undefined | Record<string, string> }>>;
```

### getsupportedpreviewtypes

# ILIB\_ExtendLibraryDeviceFunctions.getSupportedPreviewTypes property

获取支持的预览类型

## Signature

```typescript
getSupportedPreviewTypes: () => Promise<Array<ELIB_PreviewType>>;
```

### getsupportedsymboltypes

# ILIB\_ExtendLibraryDeviceFunctions.getSupportedSymbolTypes property

获取支持的符号类型

## Signature

```typescript
getSupportedSymbolTypes: () => Promise<Array<ELIB_SymbolType>>;
```
