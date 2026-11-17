# ISYS\_ProgressBarEventProps interface

进度条事件参数

## Signature

```typescript
interface ISYS_ProgressBarEventProps
```

## Remarks

由 [SYS\_Event.addProgressBarEventListener()](../classes/SYS_Event.md) 的回调接收

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

[action](./ISYS_ProgressBarEventProps.md)

</td><td>

</td><td>

[ESYS\_ProgressBarAction](../enums/ESYS_ProgressBarAction.md)

</td><td>

事件操作，取值见 [ESYS\_ProgressBarAction](../enums/ESYS_ProgressBarAction.md)

</td></tr>
<tr><td>

[progress](./ISYS_ProgressBarEventProps.md)

</td><td>

</td><td>

number

</td><td>

当前进度，取值 `0-100`<!-- -->；`start` / `update` / `complete` 为聚合后的当前整数进度，`close` / `destroy` 为关闭瞬间的进度

</td></tr>
<tr><td>

[progressBarId](./ISYS_ProgressBarEventProps.md)

</td><td>

</td><td>

string

</td><td>

进度条 ID

</td></tr>
<tr><td>

[title?](./ISYS_ProgressBarEventProps.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 进度条标题，即 [SYS\_LoadingAndProgressBar.showProgressBar()](../classes/SYS_LoadingAndProgressBar.md) 的 `title`<!-- -->，未设置时省略该字段

</td></tr>
</tbody></table>

---

## 属性详情

### action

# ISYS\_ProgressBarEventProps.action property

事件操作，取值见 [ESYS\_ProgressBarAction](../enums/ESYS_ProgressBarAction.md)

## Signature

```typescript
action: ESYS_ProgressBarAction;
```

### progress

# ISYS\_ProgressBarEventProps.progress property

当前进度，取值 `0-100`<!-- -->；`start` / `update` / `complete` 为聚合后的当前整数进度，`close` / `destroy` 为关闭瞬间的进度

## Signature

```typescript
progress: number;
```

### progressbarid

# ISYS\_ProgressBarEventProps.progressBarId property

进度条 ID

## Signature

```typescript
progressBarId: string;
```

### title

# ISYS\_ProgressBarEventProps.title property

进度条标题，即 [SYS\_LoadingAndProgressBar.showProgressBar()](../classes/SYS_LoadingAndProgressBar.md) 的 `title`<!-- -->，未设置时省略该字段

## Signature

```typescript
title?: string;
```
