# SYS\_ToastMessage class

> 警告：此 API 现已弃用。
>
> 即将移除吐司消息类，合并入 [消息通知类](./SYS_Message.md)

系统 / 吐司消息类

## 签名

```typescript
declare class SYS_ToastMessage 
```

## 备注

在屏幕的边缘弹出简短的消息提醒，会在一定时间后自动消除

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[showMessage(message, messageType, timer, bottomPanel, buttonTitle, buttonCallbackFn)](./SYS_ToastMessage.md)


</td><td>


</td><td>

显示吐司消息


</td></tr>
</tbody></table>

---

## 方法详情

### showmessage

# SYS\_ToastMessage.showMessage() method

> 警告：此 API 现已弃用。
>
> 请使用 [SYS\_Message.showToastMessage()](./SYS_Message.md) 方法替代

显示吐司消息

## 签名

```typescript
showMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;
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
