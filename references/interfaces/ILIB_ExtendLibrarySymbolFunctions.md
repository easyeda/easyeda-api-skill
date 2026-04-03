# ILIB\_ExtendLibrarySymbolFunctions interface

外部库符号方法

## 签名

```typescript
interface ILIB_ExtendLibrarySymbolFunctions extends ILIB_ExtendLibraryFunctions 
```
**扩展自：**[ILIB\_ExtendLibraryFunctions](./ILIB_ExtendLibraryFunctions.md)

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[getList](./ILIB_ExtendLibrarySymbolFunctions.md)


</td><td>


</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./ILIB_ExtendLibrarySearchProperty.md)<!-- -->&lt;{ symbolType?: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->; }&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./ILIB_ExtendLibrarySearchResult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md) &amp; [ILIB\_ExtendLibrarySearchResultDataLine](./ILIB_ExtendLibrarySearchResultDataLine.md) &amp; { symbolType: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->; }&gt;&gt;


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

## 签名

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<{
        symbolType?: ELIB_SymbolType;
    }>) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItem & ILIB_ExtendLibrarySearchResultDataLine & {
        symbolType: ELIB_SymbolType;
    }>>;
```

### getsupportedsymboltypes

# ILIB\_ExtendLibrarySymbolFunctions.getSupportedSymbolTypes property

获取支持的符号类型

## 签名

```typescript
getSupportedSymbolTypes: () => Promise<Array<ELIB_SymbolType>>;
```
