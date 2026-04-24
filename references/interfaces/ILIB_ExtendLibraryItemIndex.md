# ILIB\_ExtendLibraryItemIndex interface

外部库元素索引

## Signature

```typescript
interface ILIB_ExtendLibraryItemIndex 
```

## Remarks

支持外部库使用名称或 UUID 作为元素的唯一 ID 索引

正常情况下，希望每个库都拥有 UUID，但可能部分系统开发时不存在 UUID 字段（或可以做类似用途的字段）

此处仅传入 `name` 字段时，将把 `name` 做唯一 ID 用途，不可有重名的数据

如若传入 `uuid` 和 `name` 字段，则只有 `uuid` 不可重复

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

_(Optional)_ 库 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### name

# ILIB\_ExtendLibraryItemIndex.name property

库名称

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_ExtendLibraryItemIndex.uuid property

库 UUID

## Signature

```typescript
uuid?: string;
```
