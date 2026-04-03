# ILIB\_ExtendLibraryDeviceFunctions interface

外部库器件方法

## 签名

```typescript
interface ILIB_ExtendLibraryDeviceFunctions extends ILIB_ExtendLibraryFunctions 
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

[getList](./ILIB_ExtendLibraryDeviceFunctions.md)


</td><td>


</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./ILIB_ExtendLibrarySearchProperty.md)<!-- -->&lt;{ attributes?: { \[key: string\]: string; }; symbolType?: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->; }&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./ILIB_ExtendLibrarySearchResult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md) &amp; { classification?: [ILIB\_ExtendLibraryClassificationIndex](./ILIB_ExtendLibraryClassificationIndex.md) \| Array&lt;string&gt;; symbol?: [ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md) &amp; { symbolType: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->; }; footprint?: [ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md)<!-- -->; model3d?: [ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md) &amp; { adjustment?: { size?: { x: number; y: number; z: number; }; rotation?: { x: number; y: number; z: number; }; offset?: { x: number; y: number; z: number; }; }; }; value?: string; supplierPart?: string; manufacturer?: string; description?: string; updateTime?: number; createTime?: number; attributes?: { \[key: string\]: string; }; }&gt;&gt;


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

## 签名

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<{
        attributes?: {
            [key: string]: string;
        };
        symbolType?: ELIB_SymbolType;
    }>) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItemIndex & {
        classification?: ILIB_ExtendLibraryClassificationIndex | Array<string>;
        symbol?: ILIB_ExtendLibraryItem & {
            symbolType: ELIB_SymbolType;
        };
        footprint?: ILIB_ExtendLibraryItem;
        model3d?: ILIB_ExtendLibraryItemIndex & {
            adjustment?: {
                size?: {
                    x: number;
                    y: number;
                    z: number;
                };
                rotation?: {
                    x: number;
                    y: number;
                    z: number;
                };
                offset?: {
                    x: number;
                    y: number;
                    z: number;
                };
            };
        };
        value?: string;
        supplierPart?: string;
        manufacturer?: string;
        description?: string;
        updateTime?: number;
        createTime?: number;
        attributes?: {
            [key: string]: string;
        };
    }>>;
```

### getsupportedpreviewtypes

# ILIB\_ExtendLibraryDeviceFunctions.getSupportedPreviewTypes property

获取支持的预览类型

## 签名

```typescript
getSupportedPreviewTypes: () => Promise<Array<ELIB_PreviewType>>;
```

### getsupportedsymboltypes

# ILIB\_ExtendLibraryDeviceFunctions.getSupportedSymbolTypes property

获取支持的符号类型

## 签名

```typescript
getSupportedSymbolTypes: () => Promise<Array<ELIB_SymbolType>>;
```
