# SYS\_MessageBox class

> 警告：此 API 现已弃用。
>
> 已更名为 [SYS\_Dialog](./SYS_Dialog.md)

系统 / 消息框类

## 签名

```typescript
declare class SYS_MessageBox 
```

## 备注

生成消息提示框

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[showConfirmationMessage(content, title, mainButtonTitle, buttonTitle, callbackFn)](./SYS_MessageBox.md)


</td><td>


</td><td>

显示确认框


</td></tr>
<tr><td>

[showInformationMessage(content, title, buttonTitle)](./SYS_MessageBox.md)


</td><td>


</td><td>

显示消息框


</td></tr>
</tbody></table>

---

## 方法详情

### showconfirmationmessage

# SYS\_MessageBox.showConfirmationMessage() method

> 警告：此 API 现已弃用。
>
> 请使用 [SYS\_Dialog.showConfirmationMessage()](./SYS_Dialog.md) 替代

显示确认框

## 签名

```typescript
showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;
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

content


</td><td>

string


</td><td>

消息文本，支持使用 `\n` 换行


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_（可选）_ 确认框标题


</td></tr>
<tr><td>

mainButtonTitle


</td><td>

string


</td><td>

_（可选）_ 主要按钮标题


</td></tr>
<tr><td>

buttonTitle


</td><td>

string


</td><td>

_（可选）_ 主要按钮标题


</td></tr>
<tr><td>

callbackFn


</td><td>

(mainButtonClicked: boolean) =&gt; void


</td><td>

_（可选）_ 回调函数，如需调用扩展内的函数，请在函数名前加上扩展的唯一 ID，以西文句号 `.` 分隔


</td></tr>
</tbody></table>



## 返回值

void

## 备注

显示一个拥有确认和取消按钮的确认框

### showinformationmessage

# SYS\_MessageBox.showInformationMessage() method

> 警告：此 API 现已弃用。
>
> 请使用 [SYS\_Dialog.showInformationMessage()](./SYS_Dialog.md) 替代

显示消息框

## 签名

```typescript
showInformationMessage(content: string, title?: string, buttonTitle?: string): void;
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

content


</td><td>

string


</td><td>

消息文本，支持使用 `\n` 换行


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_（可选）_ 消息框标题


</td></tr>
<tr><td>

buttonTitle


</td><td>

string


</td><td>

_（可选）_ 按钮标题，为空则不显示按钮


</td></tr>
</tbody></table>



## 返回值

void

## 备注

显示一个文字消息提示框
