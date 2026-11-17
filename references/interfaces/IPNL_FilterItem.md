# IPNL\_FilterItem interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

过滤项

## Signature

```typescript
interface IPNL_FilterItem
```

## Remarks

选择过滤器里可以单独开关的一类对象，比如「文本」「圆弧」「锁定的图元」。 一个过滤项对应画布上的两个开关：勾选框决定框选、点选时这类对象能不能被选中，眼睛图标决定它在画布上是否显示。 两个开关互不影响：只取消勾选时对象选不中但仍然画在画布上，只点掉眼睛时对象看不见但仍然可选。

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

[checked?](./IPNL_FilterItem.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 勾选框：框选、点选时这类对象能否被选中

</td></tr>
<tr><td>

[key](./IPNL_FilterItem.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 过滤项标识，勾选状态按它记录，切换方案不变

</td></tr>
<tr><td>

[title](./IPNL_FilterItem.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 界面上显示的名字

</td></tr>
<tr><td>

[visible?](./IPNL_FilterItem.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 眼睛开关：这类对象在画布上是否显示

</td></tr>
</tbody></table>

---

## 属性详情

### checked

# IPNL\_FilterItem.checked property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

勾选框：框选、点选时这类对象能否被选中

## Signature

```typescript
checked?: boolean;
```

### key

# IPNL\_FilterItem.key property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

过滤项标识，勾选状态按它记录，切换方案不变

## Signature

```typescript
key: string;
```

### title

# IPNL\_FilterItem.title property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

界面上显示的名字

## Signature

```typescript
title: string;
```

### visible

# IPNL\_FilterItem.visible property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

眼睛开关：这类对象在画布上是否显示

## Signature

```typescript
visible?: boolean;
```
