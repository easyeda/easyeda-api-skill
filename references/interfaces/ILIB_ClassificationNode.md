# ILIB\_ClassificationNode interface

分类树节点（分类无 UUID，以名称为唯一标识）

## Signature

```typescript
interface ILIB_ClassificationNode
```

## Remarks

分类不限层级数，以名称字符串数组标识，如 `['一级', '二级', '三级']`

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

[children?](./ILIB_ClassificationNode.md)

</td><td>

</td><td>

Array&lt;[ILIB\_ClassificationNode](./ILIB_ClassificationNode.md)<!-- -->&gt;

</td><td>

_(Optional)_ 子分类节点数组

</td></tr>
<tr><td>

[name](./ILIB_ClassificationNode.md)

</td><td>

</td><td>

string

</td><td>

分类名称

</td></tr>
</tbody></table>

---

## 属性详情

### children

# ILIB\_ClassificationNode.children property

子分类节点数组

## Signature

```typescript
children?: Array<ILIB_ClassificationNode>;
```

### name

# ILIB\_ClassificationNode.name property

分类名称

## Signature

```typescript
name: string;
```
