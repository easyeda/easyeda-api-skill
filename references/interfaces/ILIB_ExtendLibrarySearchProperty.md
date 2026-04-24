# ILIB\_ExtendLibrarySearchProperty interface

外部库搜索参数

## Signature

```typescript
interface ILIB_ExtendLibrarySearchProperty<T> 
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

[page?](./ILIB_ExtendLibrarySearchProperty.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 页数


</td></tr>
<tr><td>

[pageSize?](./ILIB_ExtendLibrarySearchProperty.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 单页条目数


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

## Signature

```typescript
page?: number;
```

### pagesize

# ILIB\_ExtendLibrarySearchProperty.pageSize property

单页条目数

## Signature

```typescript
pageSize?: number;
```

### query

# ILIB\_ExtendLibrarySearchProperty.query property

查询参数

## Signature

```typescript
query: T & {
        wd?: string;
        listByTitles?: Array<string>;
        classification?: ILIB_ExtendLibraryClassificationIndex | Array<string>;
    };
```
