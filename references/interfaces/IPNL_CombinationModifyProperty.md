# IPNL\_CombinationModifyProperty interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板组合修改属性

## Signature

```typescript
interface IPNL_CombinationModifyProperty
```

## Remarks

部分更新语义：仅覆盖传入的字段，未传入字段保持原值；

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

[addCombinationIds?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** _(Optional)_ 要加入组合的子组合 ID 数组

</td></tr>
<tr><td>

[addElementIds?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** _(Optional)_ 要加入组合的图元 ID 数组

</td></tr>
<tr><td>

[locked?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 是否锁定

</td></tr>
<tr><td>

[name?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** _(Optional)_ 组合名称

</td></tr>
<tr><td>

[parentCombinationId?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

string \| null

</td><td>

**_(ALPHA)_** _(Optional)_ 父组合 ID，传 `null` 表示移动到顶层

</td></tr>
<tr><td>

[removeCombinationIds?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** _(Optional)_ 要从组合中移除的子组合 ID 数组

</td></tr>
<tr><td>

[removeElementIds?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** _(Optional)_ 要从组合中移除的图元 ID 数组

</td></tr>
<tr><td>

[visible?](./IPNL_CombinationModifyProperty.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 是否可见

</td></tr>
</tbody></table>

---

## 属性详情

### addcombinationids

# IPNL\_CombinationModifyProperty.addCombinationIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

要加入组合的子组合 ID 数组

## Signature

```typescript
addCombinationIds?: Array<string>;
```

### addelementids

# IPNL\_CombinationModifyProperty.addElementIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

要加入组合的图元 ID 数组

## Signature

```typescript
addElementIds?: Array<string>;
```

### locked

# IPNL\_CombinationModifyProperty.locked property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否锁定

## Signature

```typescript
locked?: boolean;
```

### name

# IPNL\_CombinationModifyProperty.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组合名称

## Signature

```typescript
name?: string;
```

### parentcombinationid

# IPNL\_CombinationModifyProperty.parentCombinationId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

父组合 ID，传 `null` 表示移动到顶层

## Signature

```typescript
parentCombinationId?: string | null;
```

### removecombinationids

# IPNL\_CombinationModifyProperty.removeCombinationIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

要从组合中移除的子组合 ID 数组

## Signature

```typescript
removeCombinationIds?: Array<string>;
```

### removeelementids

# IPNL\_CombinationModifyProperty.removeElementIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

要从组合中移除的图元 ID 数组

## Signature

```typescript
removeElementIds?: Array<string>;
```

### visible

# IPNL\_CombinationModifyProperty.visible property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可见

## Signature

```typescript
visible?: boolean;
```
