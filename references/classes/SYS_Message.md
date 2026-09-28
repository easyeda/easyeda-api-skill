# SYS\_Message class

System / message notification class

## Signature

```typescript
class SYS_Message
```

## Remarks

Generate various non-intrusive reminders for users

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

**_(BETA)_** Remove the follow-mouse tip

</td></tr>
<tr><td>

[showFollowMouseTip(tip, msTimeout)](./SYS_Message.md)

</td><td>

</td><td>

**_(BETA)_** Show the follow-mouse tip

</td></tr>
<tr><td>

[showToastMessage(message, messageType, timer, bottomPanel, buttonTitle, buttonCallbackFn)](./SYS_Message.md)

</td><td>

</td><td>

Show a toast message

</td></tr>
</tbody></table>

---

## 方法详情

### removefollowmousetip

# SYS\_Message.removeFollowMouseTip() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Remove the follow-mouse tip

## Signature

```typescript
function removeFollowMouseTip(tip?: string): Promise<void>;
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

_(Optional)_ Tip content. If passed in, the tip is only removed when the current tip matches the specified content

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Remarks

Remove the current or specified follow-mouse tip

## Example

```javascript
// 1. 展示一条持续提示（不传时间参数，不会自动消失）
eda.sys_Message.showFollowMouseTip('嘉立创示例_待移除的提示');
console.log('鼠标提示已显示');

// 2. 传入不匹配的内容：当前提示内容不同，不会被移除
eda.sys_Message.removeFollowMouseTip('嘉立创示例_另一条提示');
console.log('传入内容与当前提示不匹配，提示仍在显示');

// 3. 传入匹配的内容：内容一致时移除
eda.sys_Message.removeFollowMouseTip('嘉立创示例_待移除的提示');
console.log('传入内容与当前提示一致，提示已移除');

// 4. 不传参数：无论内容直接移除当前提示
eda.sys_Message.showFollowMouseTip('嘉立创示例_新的提示');
eda.sys_Message.removeFollowMouseTip();
console.log('不传参数已直接移除当前提示');
```

### showfollowmousetip

# SYS\_Message.showFollowMouseTip() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Show the follow-mouse tip

## Signature

```typescript
function showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;
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

Tip content

</td></tr>
<tr><td>

msTimeout

</td><td>

number

</td><td>

_(Optional)_ Display duration in milliseconds (ms). If not passed in, the tip is displayed continuously until [removeFollowMouseTip](./SYS_Message.md) is called or it is covered by another tip

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Remarks

Only one tip can be shown at a time. If a new tip is shown, the previous tip will be automatically removed

## Example

```javascript
// 1. 限时提示：2000 毫秒后自动消失，无需手动清理
eda.sys_Message.showFollowMouseTip('嘉立创示例_这条提示 2 秒后自动消失', 2000);
console.log('限时鼠标提示已显示，2 秒后自动消失');

// 2. 持续提示：不传时间参数则一直展示，直到被移除或被新提示覆盖
eda.sys_Message.showFollowMouseTip('嘉立创示例_这条提示会一直跟随鼠标');
console.log('持续鼠标提示已显示（新提示覆盖了上一条）');

// 3. 持续提示必须手动收尾，避免遗留（自建自删，保证案例可重复运行）
await new Promise(r => setTimeout(r, 1000));
eda.sys_Message.removeFollowMouseTip();
console.log('持续鼠标提示已手动移除');
```

### showtoastmessage

# SYS\_Message.showToastMessage() method

Show a toast message

## Signature

```typescript
function showToastMessage(
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
// 1. 最简调用：默认信息类型，默认 3 秒后自动关闭
eda.sys_Message.showToastMessage('嘉立创示例 工程已自动保存');
console.log('信息吐司已显示，3 秒后自动关闭');

// 2. 指定消息类型与倒计时秒数：成功图标，2 秒后自动关闭
eda.sys_Message.showToastMessage('嘉立创示例 导出完成', 'success', 2);
console.log('成功吐司已显示，2 秒后自动关闭');

// 3. 带回调按钮与底部面板联动：点击按钮执行回调并展开日志面板
eda.sys_Message.showToastMessage(
	'嘉立创示例 检查完成，详见日志面板',
	'warn',
	5,
	'log',
	'查看日志',
	'console.log("嘉立创示例 按钮回调被执行")'
);
console.log('警告吐司已显示，附带查看日志按钮，5 秒后自动关闭');
```
