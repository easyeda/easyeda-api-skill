# ILIB\_ClassificationNode interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

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

**_(ALPHA)_** _(Optional)_ 子分类节点数组

</td></tr>
<tr><td>

[name](./ILIB_ClassificationNode.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 分类名称

</td></tr>
</tbody></table>

---

## 属性详情

### children

# ILIB\_ClassificationNode.children property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

子分类节点数组

## Signature

```typescript
children?: Array<ILIB_ClassificationNode>;
```

### name

# ILIB\_ClassificationNode.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

分类名称

## Signature

```typescript
name: string;
```
