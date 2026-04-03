# ILIB\_ExtendLibraryFunctions interface

外部库方法

## 签名

```typescript
interface ILIB_ExtendLibraryFunctions 
```

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

## 签名

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

## 签名

```typescript
getDetail: (uuid: string) => Promise<any>;
```

### getlist

# ILIB\_ExtendLibraryFunctions.getList property

获取列表

## 签名

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<any>) => Promise<ILIB_ExtendLibrarySearchResult<any>>;
```
