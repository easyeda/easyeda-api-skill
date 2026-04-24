# SYS\_Dialog class

系统 / 对话框类

## Signature

```typescript
declare class SYS_Dialog 
```

## Remarks

生成对话框窗口

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[showConfirmationMessage(content, title, mainButtonTitle, buttonTitle, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

弹出确认窗口


</td></tr>
<tr><td>

[showInformationMessage(content, title, buttonTitle)](./SYS_Dialog.md)


</td><td>


</td><td>

弹出消息窗口


</td></tr>
<tr><td>

[showInputDialog(beforeContent, afterContent, title, type, value, otherProperty, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

**_(BETA)_** 弹出输入窗口


</td></tr>
<tr><td>

[showSelectDialog(options, beforeContent, afterContent, title, defaultOption, multiple, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

**_(BETA)_** 弹出选择窗口


</td></tr>
<tr><td>

[showSelectDialog(options, beforeContent, afterContent, title, defaultOption, multiple, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

**_(BETA)_** 弹出多选窗口


</td></tr>
</tbody></table>

---

## 方法详情

### showconfirmationmessage

# SYS\_Dialog.showConfirmationMessage() method

弹出确认窗口

## Signature

```typescript
showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;
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

消息文本，支持使用 `\n` 换行


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ 弹出窗口标题


</td></tr>
<tr><td>

mainButtonTitle


</td><td>

string


</td><td>

_(Optional)_ 主要按钮标题


</td></tr>
<tr><td>

buttonTitle


</td><td>

string


</td><td>

_(Optional)_ 主要按钮标题


</td></tr>
<tr><td>

callbackFn


</td><td>

(mainButtonClicked: boolean) =&gt; void


</td><td>

_(Optional)_ 回调函数


</td></tr>
</tbody></table>



## Returns

void

## Remarks

显示一个拥有确认和取消按钮的窗口

### showinformationmessage

# SYS\_Dialog.showInformationMessage() method

弹出消息窗口

## Signature

```typescript
showInformationMessage(content: string, title?: string, buttonTitle?: string): void;
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

消息文本，支持使用 `\n` 换行


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ 弹出窗口标题


</td></tr>
<tr><td>

buttonTitle


</td><td>

string


</td><td>

_(Optional)_ 按钮标题，为空则不显示按钮


</td></tr>
</tbody></table>



## Returns

void

## Remarks

显示一个文字消息窗口

### showinputdialog

# SYS\_Dialog.showInputDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

弹出输入窗口

## Signature

```typescript
showInputDialog(beforeContent?: string, afterContent?: string, title?: string, type?: 'color' | 'date' | 'datetime-local' | 'email' | 'mouth' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week', value?: string | number, otherProperty?: {
        max?: number;
        maxlength?: number;
        min?: number;
        minlength?: number;
        multiple?: boolean;
        pattern?: RegExp;
        placeholder?: string;
        readonly?: boolean;
        step?: number;
    }, callbackFn?: (value: any) => void): void;
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

beforeContent


</td><td>

string


</td><td>

_(Optional)_ 输入框上方文字


</td></tr>
<tr><td>

afterContent


</td><td>

string


</td><td>

_(Optional)_ 输入框下方文字


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ 弹出窗口标题


</td></tr>
<tr><td>

type


</td><td>

'color' \| 'date' \| 'datetime-local' \| 'email' \| 'mouth' \| 'number' \| 'password' \| 'tel' \| 'text' \| 'time' \| 'url' \| 'week'


</td><td>

_(Optional)_ 输入框类型


</td></tr>
<tr><td>

value


</td><td>

string \| number


</td><td>

_(Optional)_ 输入框默认值


</td></tr>
<tr><td>

otherProperty


</td><td>

\{ max?: number; maxlength?: number; min?: number; minlength?: number; multiple?: boolean; pattern?: RegExp; placeholder?: string; readonly?: boolean; step?: number; \}


</td><td>

_(Optional)_ 其它参数，可参考 [The HTML Input element](https://developer.mozilla.org/docs/Web/HTML/Element/input#attributes)


</td></tr>
<tr><td>

callbackFn


</td><td>

(value: any) =&gt; void


</td><td>

_(Optional)_ 回调函数


</td></tr>
</tbody></table>



## Returns

void

用户输入的值，始终为 `string` 类型，除非用户点击了 \*\*取消\*\* 按钮

### showselectdialog

# SYS\_Dialog.showSelectDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

弹出选择窗口

## Signature

```typescript
showSelectDialog(options: Array<string> | Array<{
        value: string;
        displayContent: string;
    }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: string, multiple?: false, callbackFn?: (value: string) => void | Promise<void>): void;
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

options


</td><td>

Array&lt;string&gt; \| Array&lt;{ value: string; displayContent: string; }&gt;


</td><td>

选项列表，可以为字符串数组或对象数组，在未指定 `defaultOption` 时，默认值为列表的第一项；

如若为字符串数组，则选项的值和选项的展示内容将保持一致；

如若为对象数组，则 `value` 表示选项的值，`displayContent` 表示选项的展示内容


</td></tr>
<tr><td>

beforeContent


</td><td>

string


</td><td>

_(Optional)_ 选择框上方文字


</td></tr>
<tr><td>

afterContent


</td><td>

string


</td><td>

_(Optional)_ 选择框下方文字


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ 选择框标题


</td></tr>
<tr><td>

defaultOption


</td><td>

string


</td><td>

_(Optional)_ 默认选项，以选项的值作为匹配参数，如若 `multiple` 参数为 `true`<!-- -->，则此处需要传入字符串数组


</td></tr>
<tr><td>

multiple


</td><td>

false


</td><td>

_(Optional)_ 是否支持多选，默认为单选框


</td></tr>
<tr><td>

callbackFn


</td><td>

(value: string) =&gt; void \| Promise&lt;void&gt;


</td><td>

_(Optional)_ 回调函数


</td></tr>
</tbody></table>



## Returns

void

用户选择的值，对应传入的 `options` 中的 `value` 字段

### showselectdialog_1

# SYS\_Dialog.showSelectDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

弹出多选窗口

## Signature

```typescript
showSelectDialog(options: Array<string> | Array<{
        value: string;
        displayContent: string;
    }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: Array<string>, multiple?: true, callbackFn?: (value: Array<string>) => void | Promise<void>): void;
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

options


</td><td>

Array&lt;string&gt; \| Array&lt;{ value: string; displayContent: string; }&gt;


</td><td>

选项列表，可以为字符串数组或对象数组，在未指定 `defaultOption` 时，默认值为列表的第一项；

如若为字符串数组，则选项的值和选项的展示内容将保持一致；

如若为对象数组，则 `value` 表示选项的值，`displayContent` 表示选项的展示内容


</td></tr>
<tr><td>

beforeContent


</td><td>

string


</td><td>

_(Optional)_ 多选框上方文字


</td></tr>
<tr><td>

afterContent


</td><td>

string


</td><td>

_(Optional)_ 多选框下方文字


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ 多选框标题


</td></tr>
<tr><td>

defaultOption


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 默认选项数组，以选项的值作为匹配参数


</td></tr>
<tr><td>

multiple


</td><td>

true


</td><td>

_(Optional)_ 是否支持多选


</td></tr>
<tr><td>

callbackFn


</td><td>

(value: Array&lt;string&gt;) =&gt; void \| Promise&lt;void&gt;


</td><td>

_(Optional)_ 回调函数


</td></tr>
</tbody></table>



## Returns

void

用户选择的值的集合数组，对应传入的 `options` 中的 `value` 字段
