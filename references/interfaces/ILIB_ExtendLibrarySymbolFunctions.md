# ILIB\_ExtendLibrarySymbolFunctions interface

外部库符号方法

## Signature

```typescript
export interface ILIB_ExtendLibrarySymbolFunctions extends ILIB_ExtendLibraryFunctions 
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

[getList](./ILIB_ExtendLibrarySymbolFunctions.md)


</td><td>


</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./ILIB_ExtendLibrarySearchProperty.md)<!-- -->&lt;{ symbolType?: undefined \| [ELIB\_SymbolType.COMPONENT](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NET\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NET\_PORT](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.DRAWING](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.NON\_ELECTRICAL](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.SHORT\_CIRCUIT\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.OFF\_PAGE\_CONNECTOR](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.DIFFERENTIAL\_PAIRS\_FLAG](../enums/ELIB_SymbolType.md) \| [ELIB\_SymbolType.CBB\_SYMBOL](../enums/ELIB_SymbolType.md) }&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./ILIB_ExtendLibrarySearchResult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md) &amp; [ILIB\_ExtendLibrarySearchResultDataLine](./ILIB_ExtendLibrarySearchResultDataLine.md) &amp; { symbolType: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md) }&gt;&gt;


</td><td>


</td></tr>
<tr><td>

[getSupportedSymbolTypes](./ILIB_ExtendLibrarySymbolFunctions.md)


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

# ILIB\_ExtendLibrarySymbolFunctions.getList property

## Signature

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<{ symbolType?: undefined | ELIB_SymbolType.COMPONENT | ELIB_SymbolType.NET_FLAG | ELIB_SymbolType.NET_PORT | ELIB_SymbolType.DRAWING | ELIB_SymbolType.NON_ELECTRICAL | ELIB_SymbolType.SHORT_CIRCUIT_FLAG | ELIB_SymbolType.OFF_PAGE_CONNECTOR | ELIB_SymbolType.DIFFERENTIAL_PAIRS_FLAG | ELIB_SymbolType.CBB_SYMBOL }>) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItem & ILIB_ExtendLibrarySearchResultDataLine & { symbolType: ELIB_SymbolType }>>;
```

### getsupportedsymboltypes

# ILIB\_ExtendLibrarySymbolFunctions.getSupportedSymbolTypes property

获取支持的符号类型

## Signature

```typescript
getSupportedSymbolTypes: () => Promise<Array<ELIB_SymbolType>>;
```
