# IPNL\_CombinationTreeNode interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板组合树节点

## Signature

```typescript
interface IPNL_CombinationTreeNode
```

## Remarks

组合树里的一行，只带展示所需的信息（名字、层级位置、显隐与锁定），对应树上能看到的那一层。

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

[children](./IPNL_CombinationTreeNode.md)

</td><td>

</td><td>

Array&lt;[IPNL\_CombinationTreeNode](./IPNL_CombinationTreeNode.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_** 子组合节点数组

</td></tr>
<tr><td>

[combinationId](./IPNL_CombinationTreeNode.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 组合 ID

</td></tr>
<tr><td>

[displayId?](./IPNL_CombinationTreeNode.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** _(Optional)_ 组合展示 ID，可能为空

</td></tr>
<tr><td>

[elementIds](./IPNL_CombinationTreeNode.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

**_(ALPHA)_** 直接属于该组合的图元 ID 数组

</td></tr>
<tr><td>

[locked](./IPNL_CombinationTreeNode.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否锁定

</td></tr>
<tr><td>

[name](./IPNL_CombinationTreeNode.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 组合名称

</td></tr>
<tr><td>

[visible](./IPNL_CombinationTreeNode.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可见

</td></tr>
</tbody></table>

---

## 属性详情

### children

# IPNL\_CombinationTreeNode.children property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

子组合节点数组

## Signature

```typescript
children: Array<IPNL_CombinationTreeNode>;
```

### combinationid

# IPNL\_CombinationTreeNode.combinationId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组合 ID

## Signature

```typescript
combinationId: string;
```

### displayid

# IPNL\_CombinationTreeNode.displayId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组合展示 ID，可能为空

## Signature

```typescript
displayId?: string;
```

### elementids

# IPNL\_CombinationTreeNode.elementIds property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

直接属于该组合的图元 ID 数组

## Signature

```typescript
elementIds: Array<string>;
```

### locked

# IPNL\_CombinationTreeNode.locked property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否锁定

## Signature

```typescript
locked: boolean;
```

### name

# IPNL\_CombinationTreeNode.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

组合名称

## Signature

```typescript
name: string;
```

### visible

# IPNL\_CombinationTreeNode.visible property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可见

## Signature

```typescript
visible: boolean;
```
