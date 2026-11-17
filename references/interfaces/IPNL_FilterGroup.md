# IPNL\_FilterGroup interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

过滤分组

## Signature

```typescript
interface IPNL_FilterGroup
```

## Remarks

把过滤项按含义归成一组，过滤面板上就是一块区域，比如按对象状态分一组、按图元类型分一组。 每组有一个代表「全部」的项，勾它等于把这一组里的项整体打开或关闭。

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

[allKey](./IPNL_FilterGroup.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 本组「全部」项的标识，勾选它等于整组一起开关

</td></tr>
<tr><td>

[items](./IPNL_FilterGroup.md)

</td><td>

</td><td>

Array&lt;[IPNL\_FilterItem](./IPNL_FilterItem.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_** 本组包含的过滤项

</td></tr>
<tr><td>

[title](./IPNL_FilterGroup.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 分组名，如按对象状态分组、按图元类型分组

</td></tr>
</tbody></table>

---

## 属性详情

### allkey

# IPNL\_FilterGroup.allKey property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

本组「全部」项的标识，勾选它等于整组一起开关

## Signature

```typescript
allKey: string;
```

### items

# IPNL\_FilterGroup.items property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

本组包含的过滤项

## Signature

```typescript
items: Array<IPNL_FilterItem>;
```

### title

# IPNL\_FilterGroup.title property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

分组名，如按对象状态分组、按图元类型分组

## Signature

```typescript
title: string;
```
