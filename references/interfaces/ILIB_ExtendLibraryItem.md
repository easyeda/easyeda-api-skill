# ILIB\_ExtendLibraryItem interface

外部库元素

## 签名

```typescript
interface ILIB_ExtendLibraryItem extends ILIB_ExtendLibraryItemIndex 
```
**扩展自：**[ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md)

## 备注

此处需要传递 `url` 或 `data` 字段，如若同时传入，则取 `data` 的数据，忽略 `url` 字段

如若仅传入 `url` 字段，将会对其发起请求并尝试获取其库文件

`data` 的数据可为 Blob 格式或 DataURL 格式

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

[data?](./ILIB_ExtendLibraryItem.md)


</td><td>


</td><td>

string \| Blob


</td><td>

_（可选）_ 库文件数据


</td></tr>
<tr><td>

[url?](./ILIB_ExtendLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 库文件地址


</td></tr>
</tbody></table>

---

## 属性详情

### data

# ILIB\_ExtendLibraryItem.data property

库文件数据

## 签名

```typescript
data?: string | Blob;
```

### url

# ILIB\_ExtendLibraryItem.url property

库文件地址

## 签名

```typescript
url?: string;
```
