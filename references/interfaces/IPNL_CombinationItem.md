# IPNL\_CombinationItem interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板组合信息

## Signature

```typescript
interface IPNL_CombinationItem
```

## Remarks

一个组合容器当前的状态：名字、所属父组合、直接装了哪些图元和子组合、以及显隐与锁定。 只列直接成员，下层的图元和子组合要顺着 ID 继续查。

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

[combinationId](./IPNL_CombinationItem.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 组合 ID

</td></tr>
<tr><td>

[combinationIds](./IPNL_CombinationItem.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** 直接属于该组合的子组合 ID 数组

</td></tr>
<tr><td>

[displayId?](./IPNL_CombinationItem.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** _(Optional)_ 组合展示 ID（编辑器左侧组合树中显示的编号），可能为空

</td></tr>
<tr><td>

[elementIds](./IPNL_CombinationItem.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** 直接属于该组合的图元 ID 数组

</td></tr>
<tr><td>

[locked](./IPNL_CombinationItem.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否锁定

</td></tr>
<tr><td>

[name](./IPNL_CombinationItem.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 组合名称

</td></tr>
<tr><td>

[parentCombinationId](./IPNL_CombinationItem.md)

</td><td>

</td><td>

string \| null

</td><td>

**_(ALPHA)_** 父组合 ID，顶层组合为 `null`

</td></tr>
<tr><td>

[visible](./IPNL_CombinationItem.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可见

</td></tr>
</tbody></table>

---

## 属性详情

### combinationid

# IPNL\_CombinationItem.combinationId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组合 ID

## Signature

```typescript
combinationId: string;
```

### combinationids

# IPNL\_CombinationItem.combinationIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

直接属于该组合的子组合 ID 数组

## Signature

```typescript
combinationIds: Array<string>;
```

### displayid

# IPNL\_CombinationItem.displayId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组合展示 ID（编辑器左侧组合树中显示的编号），可能为空

## Signature

```typescript
displayId?: string;
```

### elementids

# IPNL\_CombinationItem.elementIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

直接属于该组合的图元 ID 数组

## Signature

```typescript
elementIds: Array<string>;
```

### locked

# IPNL\_CombinationItem.locked property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否锁定

## Signature

```typescript
locked: boolean;
```

### name

# IPNL\_CombinationItem.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组合名称

## Signature

```typescript
name: string;
```

### parentcombinationid

# IPNL\_CombinationItem.parentCombinationId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

父组合 ID，顶层组合为 `null`

## Signature

```typescript
parentCombinationId: string | null;
```

### visible

# IPNL\_CombinationItem.visible property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可见

## Signature

```typescript
visible: boolean;
```
