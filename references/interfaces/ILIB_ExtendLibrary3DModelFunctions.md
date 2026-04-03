# ILIB\_ExtendLibrary3DModelFunctions interface

外部库 3D 模型方法

## 签名

```typescript
interface ILIB_ExtendLibrary3DModelFunctions extends ILIB_ExtendLibraryFunctions 
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

[getList](./ILIB_ExtendLibrary3DModelFunctions.md)


</td><td>


</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./ILIB_ExtendLibrarySearchProperty.md)<!-- -->&lt;{}&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./ILIB_ExtendLibrarySearchResult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md) &amp; [ILIB\_ExtendLibrarySearchResultDataLine](./ILIB_ExtendLibrarySearchResultDataLine.md) &amp; { modelType: 'step'; }&gt;&gt;


</td><td>


</td></tr>
</tbody></table>

---

## 属性详情

### getlist

# ILIB\_ExtendLibrary3DModelFunctions.getList property

## 签名

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<{}>) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItemIndex & ILIB_ExtendLibrarySearchResultDataLine & {
        modelType: 'step';
    }>>;
```
