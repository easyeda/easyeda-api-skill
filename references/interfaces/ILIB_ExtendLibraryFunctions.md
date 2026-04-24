# ILIB\_ExtendLibraryFunctions interface

外部库方法

## Signature

```typescript
interface ILIB_ExtendLibraryFunctions 
```

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

[getClassificationTree](./ILIB_ExtendLibraryFunctions.md)


</td><td>


</td><td>

() =&gt; Promise&lt;Array&lt;{ name: string; uuid?: string; children?: Array&lt;{ name: string; uuid?: string; }&gt; \| undefined; }&gt;&gt;


</td><td>

获取分类树


</td></tr>
<tr><td>

[getDetail](./ILIB_ExtendLibraryFunctions.md)


</td><td>


</td><td>

(uuid: string) =&gt; Promise&lt;any&gt;


</td><td>

获取详细信息


</td></tr>
<tr><td>

[getList](./ILIB_ExtendLibraryFunctions.md)


</td><td>


</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./ILIB_ExtendLibrarySearchProperty.md)<!-- -->&lt;any&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./ILIB_ExtendLibrarySearchResult.md)<!-- -->&lt;any&gt;&gt;


</td><td>

获取列表


</td></tr>
</tbody></table>

---

## 属性详情

### getclassificationtree

# ILIB\_ExtendLibraryFunctions.getClassificationTree property

获取分类树

## Signature

```typescript
getClassificationTree: () => Promise<Array<{
        name: string;
        uuid?: string;
        children?: Array<{
            name: string;
            uuid?: string;
        }> | undefined;
    }>>;
```

### getdetail

# ILIB\_ExtendLibraryFunctions.getDetail property

获取详细信息

## Signature

```typescript
getDetail: (uuid: string) => Promise<any>;
```

### getlist

# ILIB\_ExtendLibraryFunctions.getList property

获取列表

## Signature

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<any>) => Promise<ILIB_ExtendLibrarySearchResult<any>>;
```
