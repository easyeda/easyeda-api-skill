# IPNL\_FilterConfiguration interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

过滤方案

## Signature

```typescript
interface IPNL_FilterConfiguration
```

## Remarks

一套完整的选择过滤器设置，带名字，能整套切换。 面板自带两个方案：常规方案让锁定的图元无法被选中，另一个方案把未生效的图元直接隐藏。 切换方案后，原本选中、但新方案里已不满足条件的图元会被取消选中。

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

[groups](./IPNL_FilterConfiguration.md)

</td><td>

</td><td>

Array&lt;[IPNL\_FilterGroup](./IPNL_FilterGroup.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_** 方案包含的分组

</td></tr>
<tr><td>

[name](./IPNL_FilterConfiguration.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 方案名称（应用时按名称匹配）

</td></tr>
</tbody></table>

---

## 属性详情

### groups

# IPNL\_FilterConfiguration.groups property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

方案包含的分组

## Signature

```typescript
groups: Array<IPNL_FilterGroup>;
```

### name

# IPNL\_FilterConfiguration.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

方案名称（应用时按名称匹配）

## Signature

```typescript
name: string;
```
