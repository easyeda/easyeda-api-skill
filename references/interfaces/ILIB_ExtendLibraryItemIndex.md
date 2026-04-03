# ILIB\_ExtendLibraryItemIndex interface

外部库元素索引

## 签名

```typescript
interface ILIB_ExtendLibraryItemIndex 
```

## 备注

支持外部库使用名称或 UUID 作为元素的唯一 ID 索引

正常情况下，希望每个库都拥有 UUID，但可能部分系统开发时不存在 UUID 字段（或可以做类似用途的字段）

此处仅传入 `name` 字段时，将把 `name` 做唯一 ID 用途，不可有重名的数据

如若传入 `uuid` 和 `name` 字段，则只有 `uuid` 不可重复

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

[name](./ILIB_ExtendLibraryItemIndex.md)


</td><td>


</td><td>

string


</td><td>

库名称


</td></tr>
<tr><td>

[uuid?](./ILIB_ExtendLibraryItemIndex.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 库 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### name

# ILIB\_ExtendLibraryItemIndex.name property

库名称

## 签名

```typescript
name: string;
```

### uuid

# ILIB\_ExtendLibraryItemIndex.uuid property

库 UUID

## 签名

```typescript
uuid?: string;
```
