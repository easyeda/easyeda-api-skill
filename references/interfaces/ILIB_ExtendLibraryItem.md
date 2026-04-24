# ILIB\_ExtendLibraryItem interface

外部库元素

## Signature

```typescript
interface ILIB_ExtendLibraryItem extends ILIB_ExtendLibraryItemIndex 
```
**Extends:** [ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md)

## Remarks

此处需要传递 `url` 或 `data` 字段，如若同时传入，则取 `data` 的数据，忽略 `url` 字段

如若仅传入 `url` 字段，将会对其发起请求并尝试获取其库文件

`data` 的数据可为 Blob 格式或 DataURL 格式

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

[data?](./ILIB_ExtendLibraryItem.md)


</td><td>


</td><td>

string \| Blob


</td><td>

_(Optional)_ 库文件数据


</td></tr>
<tr><td>

[url?](./ILIB_ExtendLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 库文件地址


</td></tr>
</tbody></table>

---

## 属性详情

### data

# ILIB\_ExtendLibraryItem.data property

库文件数据

## Signature

```typescript
data?: string | Blob;
```

### url

# ILIB\_ExtendLibraryItem.url property

库文件地址

## Signature

```typescript
url?: string;
```
