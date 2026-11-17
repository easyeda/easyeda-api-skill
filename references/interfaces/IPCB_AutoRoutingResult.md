# IPCB\_AutoRoutingResult interface

Auto routing result

## Signature

```typescript
interface IPCB_AutoRoutingResult
```

## Remarks

布通率应按 `successNetsCount / totalNetsCount` 计算，两者是同一统计口径的分子与分母，请勿与全板网络总数混用

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

[duration](./IPCB_AutoRoutingResult.md)

</td><td>

</td><td>

number

</td><td>

Auto routing duration (milliseconds)

</td></tr>
<tr><td>

[failedNets](./IPCB_AutoRoutingResult.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

List of net names that failed to be routed

</td></tr>
<tr><td>

[success](./IPCB_AutoRoutingResult.md)

</td><td>

</td><td>

boolean

</td><td>

自动布线是否成功启动

</td></tr>
<tr><td>

[successNetsCount](./IPCB_AutoRoutingResult.md)

</td><td>

</td><td>

number

</td><td>

Number of nets that were routed successfully

</td></tr>
<tr><td>

[totalNetsCount](./IPCB_AutoRoutingResult.md)

</td><td>

</td><td>

number

</td><td>

参与本次自动布线的网络总数

</td></tr>
</tbody></table>

---

## 属性详情

### duration

# IPCB\_AutoRoutingResult.duration property

Auto routing duration (milliseconds)

## Signature

```typescript
duration: number;
```

### failednets

# IPCB\_AutoRoutingResult.failedNets property

List of net names that failed to be routed

## Signature

```typescript
failedNets: Array<string>;
```

### success

# IPCB\_AutoRoutingResult.success property

自动布线是否成功启动

## Signature

```typescript
success: boolean;
```

## Remarks

仅表示布线流程是否正常发起并走完，不代表所有网络都布通；判断布通情况请看 `successNetsCount` 与 `failedNets`

### successnetscount

# IPCB\_AutoRoutingResult.successNetsCount property

Number of nets that were routed successfully

## Signature

```typescript
successNetsCount: number;
```

### totalnetscount

# IPCB\_AutoRoutingResult.totalNetsCount property

参与本次自动布线的网络总数

## Signature

```typescript
totalNetsCount: number;
```

## Remarks

统计口径受入参过滤影响：`props.layers` 会剔除停用层上的网络，`props.RoutingNets` / `ignoreNets` 会收窄或排除网络， 因此该值可能小于全板网络总数，不能直接当作全板网络数使用
