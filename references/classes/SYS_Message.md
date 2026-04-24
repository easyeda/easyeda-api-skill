# SYS\_Message class

系统 / 消息通知类

## Signature

```typescript
declare class SYS_Message 
```

## Remarks

生成各种对用户的非侵入式提醒

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[removeFollowMouseTip(tip)](./SYS_Message.md)


</td><td>


</td><td>

**_(BETA)_** 移除跟随鼠标的提示


</td></tr>
<tr><td>

[showFollowMouseTip(tip, msTimeout)](./SYS_Message.md)


</td><td>


</td><td>

**_(BETA)_** 展示跟随鼠标的提示


</td></tr>
<tr><td>

[showToastMessage(message, messageType, timer, bottomPanel, buttonTitle, buttonCallbackFn)](./SYS_Message.md)


</td><td>


</td><td>

显示吐司消息


</td></tr>
</tbody></table>

---

## 方法详情

### removefollowmousetip

# SYS\_Message.removeFollowMouseTip() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

移除跟随鼠标的提示

## Signature

```typescript
removeFollowMouseTip(tip?: string): Promise<void>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

tip


</td><td>

string


</td><td>

_(Optional)_ 提示内容，如若传入，则仅当当前提示为指定内容时才移除


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

移除当前或指定的跟随鼠标的提示

### showfollowmousetip

# SYS\_Message.showFollowMouseTip() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

展示跟随鼠标的提示

## Signature

```typescript
showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

tip


</td><td>

string


</td><td>

提示内容


</td></tr>
<tr><td>

msTimeout


</td><td>

number


</td><td>

_(Optional)_ 展示时间，以毫秒（ms）为单位，如若不传入则持续展示，直到调用 [removeFollowMouseTip](./SYS_Message.md) 或被其它提示覆盖


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

同一时间只能展示一条提示，如果展示新的提示，则之前的提示将被自动移除

### showtoastmessage

# SYS\_Message.showToastMessage() method

显示吐司消息

## Signature

```typescript
showToastMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

message


</td><td>

string


</td><td>

消息内容


</td></tr>
<tr><td>

messageType


</td><td>

[ESYS\_ToastMessageType](../enums/ESYS_ToastMessageType.md)


</td><td>

_(Optional)_ 消息类型


</td></tr>
<tr><td>

timer


</td><td>

number


</td><td>

_(Optional)_ 自动关闭倒计时秒数，`0` 为不自动关闭


</td></tr>
<tr><td>

bottomPanel


</td><td>

[ESYS\_BottomPanelTab](../enums/ESYS_BottomPanelTab.md)


</td><td>

_(Optional)_ 展开底部信息面板


</td></tr>
<tr><td>

buttonTitle


</td><td>

string


</td><td>

_(Optional)_ 回调按钮标题


</td></tr>
<tr><td>

buttonCallbackFn


</td><td>

string


</td><td>

_(Optional)_ 回调函数内容，字符串形式，会被自动解析并执行


</td></tr>
</tbody></table>



## Returns

void
