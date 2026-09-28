# SYS\_ToastMessage class

> Warning: This API is now obsolete.
>
> The toast message class will soon be removed and merged into [the message notification class](./SYS_Message.md)

System / toast message class

## Signature

```typescript
class SYS_ToastMessage
```

## Remarks

Pops up a brief message notification at the edge of the screen, which will automatically disappear after a certain period of time

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[showMessage(message, messageType, timer, bottomPanel, buttonTitle, buttonCallbackFn)](./SYS_ToastMessage.md)

</td><td>

</td><td>

Show a toast message

</td></tr>
</tbody></table>

---

## 方法详情

### showmessage

# SYS\_ToastMessage.showMessage() method

> Warning: This API is now obsolete.
>
> Please use the [SYS\_Message.showToastMessage()](./SYS_Message.md) method instead

Show a toast message

## Signature

```typescript
function showMessage(
	message: string,
	messageType?: ESYS_ToastMessageType,
	timer?: number,
	bottomPanel?: ESYS_BottomPanelTab,
	buttonTitle?: string,
	buttonCallbackFn?: string,
): void;
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

Message content

</td></tr>
<tr><td>

messageType

</td><td>

[ESYS\_ToastMessageType](../enums/ESYS_ToastMessageType.md)

</td><td>

_(Optional)_ Message type

</td></tr>
<tr><td>

timer

</td><td>

number

</td><td>

_(Optional)_ Auto-close countdown in seconds. `0` means it will not auto-close

</td></tr>
<tr><td>

bottomPanel

</td><td>

[ESYS\_BottomPanelTab](../enums/ESYS_BottomPanelTab.md)

</td><td>

_(Optional)_ Expand the bottom information panel

</td></tr>
<tr><td>

buttonTitle

</td><td>

string

</td><td>

_(Optional)_ Callback button title

</td></tr>
<tr><td>

buttonCallbackFn

</td><td>

string

</td><td>

_(Optional)_ Callback function content, in string form. It will be automatically parsed and executed

</td></tr>
</tbody></table>

## Returns

void

## Example

```javascript
// 1. 最简调用：默认信息类型，倒计时结束后自动消失
eda.sys_ToastMessage.showMessage('嘉立创示例 工程已自动保存');
console.log('信息吐司已显示');

// 2. 指定消息类型与倒计时秒数：成功图标，2 秒后自动关闭
eda.sys_ToastMessage.showMessage('嘉立创示例 导出完成', 'success', 2);
console.log('成功吐司已显示，2 秒后自动关闭');

// 3. 带回调按钮与底部面板联动：点击按钮执行回调并展开日志面板
eda.sys_ToastMessage.showMessage(
	'嘉立创示例 检查完成，详见日志面板',
	'warn',
	5,
	'log',
	'查看日志',
	'console.log("嘉立创示例 按钮回调被执行")'
);
console.log('警告吐司已显示，附带查看日志按钮，5 秒后自动关闭');
```
