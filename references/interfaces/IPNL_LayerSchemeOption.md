# IPNL\_LayerSchemeOption interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

图层方案里某一层的状态

## Signature

```typescript
interface IPNL_LayerSchemeOption
```

## Remarks

一个方案由若干项组成，一项对应一个图层，记下这层在该方案下是否可见、是否锁定、是否当前激活。 方案里没列出的图层切换时保持原状，不会被重置。

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

[actived?](./IPNL_LayerSchemeOption.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 这一层是否为当前激活层

</td></tr>
<tr><td>

[backgroundSelector?](./IPNL_LayerSchemeOption.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** _(Optional)_ 业务侧的背景选择器标识，目前协议里有字段但没有生产者，读出来一般为 `undefined`

</td></tr>
<tr><td>

[id](./IPNL_LayerSchemeOption.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 图层 ID，取值见图层枚举

</td></tr>
<tr><td>

[locked?](./IPNL_LayerSchemeOption.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 这一层是否锁定

</td></tr>
<tr><td>

[name](./IPNL_LayerSchemeOption.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 图层显示名

</td></tr>
<tr><td>

[visible](./IPNL_LayerSchemeOption.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 这一层是否可见

</td></tr>
</tbody></table>

---

## 属性详情

### actived

# IPNL\_LayerSchemeOption.actived property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

这一层是否为当前激活层

## Signature

```typescript
actived?: boolean;
```

### backgroundselector

# IPNL\_LayerSchemeOption.backgroundSelector property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

业务侧的背景选择器标识，目前协议里有字段但没有生产者，读出来一般为 `undefined`

## Signature

```typescript
backgroundSelector?: string;
```

### id

# IPNL\_LayerSchemeOption.id property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

图层 ID，取值见图层枚举

## Signature

```typescript
id: number;
```

### locked

# IPNL\_LayerSchemeOption.locked property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

这一层是否锁定

## Signature

```typescript
locked?: boolean;
```

### name

# IPNL\_LayerSchemeOption.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

图层显示名

## Signature

```typescript
name: string;
```

### visible

# IPNL\_LayerSchemeOption.visible property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

这一层是否可见

## Signature

```typescript
visible: boolean;
```
