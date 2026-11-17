# IPNL\_LayerScheme interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

图层方案

## Signature

```typescript
interface IPNL_LayerScheme
```

## Remarks

一套「哪些层可见、哪些层锁定、当前激活哪层」的组合，切换方案就一次性把这三类状态换掉

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

[label](./IPNL_LayerScheme.md)

</td><td>

</td><td>

[EPNL\_LayerFixedScheme](../enums/EPNL_LayerFixedScheme.md) \| string

</td><td>

**_(ALPHA)_** 方案标识（固定方案枚举，或自定义方案名称）

</td></tr>
<tr><td>

[mode](./IPNL_LayerScheme.md)

</td><td>

</td><td>

[EPNL\_LayerMode](../enums/EPNL_LayerMode.md)

</td><td>

**_(ALPHA)_** 方案模式

</td></tr>
<tr><td>

[name](./IPNL_LayerScheme.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 方案名称

</td></tr>
<tr><td>

[options](./IPNL_LayerScheme.md)

</td><td>

</td><td>

Array&lt;[IPNL\_LayerSchemeOption](./IPNL_LayerSchemeOption.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_** 各图层状态

</td></tr>
</tbody></table>

---

## 属性详情

### label

# IPNL\_LayerScheme.label property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

方案标识（固定方案枚举，或自定义方案名称）

## Signature

```typescript
label: EPNL_LayerFixedScheme | string;
```

### mode

# IPNL\_LayerScheme.mode property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

方案模式

## Signature

```typescript
mode: EPNL_LayerMode;
```

### name

# IPNL\_LayerScheme.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

方案名称

## Signature

```typescript
name: string;
```

### options

# IPNL\_LayerScheme.options property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

各图层状态

## Signature

```typescript
options: Array<IPNL_LayerSchemeOption>;
```
