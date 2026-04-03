# ILIB\_ExtendLibrarySearchProperty interface

外部库搜索参数

## 签名

```typescript
interface ILIB_ExtendLibrarySearchProperty<T> 
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

[page?](./ILIB_ExtendLibrarySearchProperty.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 页数


</td></tr>
<tr><td>

[pageSize?](./ILIB_ExtendLibrarySearchProperty.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 单页条目数


</td></tr>
<tr><td>

[query](./ILIB_ExtendLibrarySearchProperty.md)


</td><td>


</td><td>

T &amp; { wd?: string; listByTitles?: Array&lt;string&gt;; classification?: [ILIB\_ExtendLibraryClassificationIndex](./ILIB_ExtendLibraryClassificationIndex.md) \| Array&lt;string&gt;; }


</td><td>

查询参数


</td></tr>
</tbody></table>

---

## 属性详情

### page

# ILIB\_ExtendLibrarySearchProperty.page property

页数

## 签名

```typescript
page?: number;
```

### pagesize

# ILIB\_ExtendLibrarySearchProperty.pageSize property

单页条目数

## 签名

```typescript
pageSize?: number;
```

### query

# ILIB\_ExtendLibrarySearchProperty.query property

查询参数

## 签名

```typescript
query: T & {
        wd?: string;
        listByTitles?: Array<string>;
        classification?: ILIB_ExtendLibraryClassificationIndex | Array<string>;
    };
```
