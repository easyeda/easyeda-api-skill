# SYS\_Message class

系统 / 消息通知类

## 签名

```typescript
declare class SYS_Message 
```

## 备注

生成各种对用户的非侵入式提醒

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

移除跟随鼠标的提示

## 签名

```typescript
removeFollowMouseTip(tip?: string): Promise<void>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

tip


</td><td>

string


</td><td>

_（可选）_ 提示内容，如若传入，则仅当当前提示为指定内容时才移除


</td></tr>
</tbody></table>



## 返回值

Promise&lt;void&gt;

## 备注

移除当前或指定的跟随鼠标的提示

### showfollowmousetip

# SYS\_Message.showFollowMouseTip() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

展示跟随鼠标的提示

## 签名

```typescript
showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 展示时间，以毫秒（ms）为单位，如若不传入则持续展示，直到调用 [removeFollowMouseTip](./SYS_Message.md) 或被其它提示覆盖


</td></tr>
</tbody></table>



## 返回值

Promise&lt;void&gt;

## 备注

同一时间只能展示一条提示，如果展示新的提示，则之前的提示将被自动移除

### showtoastmessage

# SYS\_Message.showToastMessage() method

显示吐司消息

## 签名

```typescript
showToastMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 消息类型


</td></tr>
<tr><td>

timer


</td><td>

number


</td><td>

_（可选）_ 自动关闭倒计时秒数，`0` 为不自动关闭


</td></tr>
<tr><td>

bottomPanel


</td><td>

[ESYS\_BottomPanelTab](../enums/ESYS_BottomPanelTab.md)


</td><td>

_（可选）_ 展开底部信息面板


</td></tr>
<tr><td>

buttonTitle


</td><td>

string


</td><td>

_（可选）_ 回调按钮标题


</td></tr>
<tr><td>

buttonCallbackFn


</td><td>

string


</td><td>

_（可选）_ 回调函数内容，字符串形式，会被自动解析并执行


</td></tr>
</tbody></table>



## 返回值

void
