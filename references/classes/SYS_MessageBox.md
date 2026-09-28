# SYS\_MessageBox class

> Warning: This API is now obsolete.
>
> Renamed to [SYS\_Dialog](./SYS_Dialog.md)

System / message box class

## Signature

```typescript
class SYS_MessageBox
```

## Remarks

Generate message boxes

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[showConfirmationMessage(content, title, mainButtonTitle, buttonTitle, callbackFn)](./SYS_MessageBox.md)

</td><td>

</td><td>

Show a confirmation box

</td></tr>
<tr><td>

[showInformationMessage(content, title, buttonTitle)](./SYS_MessageBox.md)

</td><td>

</td><td>

Show a message box

</td></tr>
</tbody></table>

---

## 方法详情

### showconfirmationmessage

# SYS\_MessageBox.showConfirmationMessage() method

> Warning: This API is now obsolete.
>
> Please use [SYS\_Dialog.showConfirmationMessage()](./SYS_Dialog.md) instead

Show a confirmation box

## Signature

```typescript
function showConfirmationMessage(
	content: string,
	title?: string,
	mainButtonTitle?: string,
	buttonTitle?: string,
	callbackFn?: (mainButtonClicked: boolean) => void,
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

content

</td><td>

string

</td><td>

Message text. Line breaks can be used with `\n`

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

_(Optional)_ Confirmation box title

</td></tr>
<tr><td>

mainButtonTitle

</td><td>

string

</td><td>

_(Optional)_ Primary button title

</td></tr>
<tr><td>

buttonTitle

</td><td>

string

</td><td>

_(Optional)_ Primary button title

</td></tr>
<tr><td>

callbackFn

</td><td>

(mainButtonClicked: boolean) =&gt; void

</td><td>

_(Optional)_ Callback function. To call a function inside the extension, prefix the function name with the extension's unique ID, separated by a Western period `.`

</td></tr>
</tbody></table>

## Returns

void

## Remarks

Show a confirmation box with confirm and cancel buttons

## Example

```javascript
// 1. 弹出确认窗口，等待用户点击
eda.sys_MessageBox.showConfirmationMessage(
	'即将删除选中的 3 个图元，是否继续？',
	'删除确认', // 窗口标题
	'删除', // 主按钮（确认）
	'取消', // 次按钮（取消）
	(mainButtonClicked) => {
		if (mainButtonClicked) {
			console.log('用户点击了主按钮（删除）');
		}
		else {
			console.log('用户点击了次按钮（取消）');
		}
	}
);

// 2. 窗口已弹出，本方法无返回值；回调需用户点击按钮后才会触发
console.log('已弹出确认窗口');
```

### showinformationmessage

# SYS\_MessageBox.showInformationMessage() method

> Warning: This API is now obsolete.
>
> Please use [SYS\_Dialog.showInformationMessage()](./SYS_Dialog.md) instead

Show a message box

## Signature

```typescript
function showInformationMessage(content: string, title?: string, buttonTitle?: string): void;
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

content

</td><td>

string

</td><td>

Message text. Line breaks can be used with `\n`

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

_(Optional)_ Message box title

</td></tr>
<tr><td>

buttonTitle

</td><td>

string

</td><td>

_(Optional)_ Button title. If empty, the button is not displayed

</td></tr>
</tbody></table>

## Returns

void

## Remarks

Show a text message box

## Example

```javascript
// 1. 弹出消息窗口（content 用 \n 换行展示两行内容）
eda.sys_MessageBox.showInformationMessage('DRC 检查完成\n 共检查 128 个图元，未发现违规', '检查结果', '知道了');

// 2. 窗口立即弹出；本方法无返回值，也不阻塞后续代码
console.log('已弹出消息窗口');
```
