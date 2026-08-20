# SYS\_Dialog class

System / dialog class

## Signature

```typescript
export class SYS_Dialog 
```

## Remarks

Generate dialog windows

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[createDesignPortal()](./SYS_Dialog.md)


</td><td>


</td><td>

Create a communication entry for a componentized popup window


</td></tr>
<tr><td>

[showConfirmationMessage(content, title, mainButtonTitle, buttonTitle, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

Show a confirmation dialog


</td></tr>
<tr><td>

[showInformationMessage(content, title, buttonTitle)](./SYS_Dialog.md)


</td><td>


</td><td>

Show an information dialog


</td></tr>
<tr><td>

[showInputDialog(beforeContent, afterContent, title, type, value, otherProperty, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

**_(BETA)_** Show an input dialog


</td></tr>
<tr><td>

[showSelectDialog(options, beforeContent, afterContent, title, defaultOption, multiple, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

**_(BETA)_** Show a select dialog


</td></tr>
<tr><td>

[showSelectDialog(options, beforeContent, afterContent, title, defaultOption, multiple, callbackFn)](./SYS_Dialog.md)


</td><td>


</td><td>

**_(BETA)_** Show a multi-select dialog


</td></tr>
</tbody></table>

---

## 方法详情

### createdesignportal

# SYS\_Dialog.createDesignPortal() method

Create a communication entry for a componentized popup window

## Signature

```typescript
public createDesignPortal(): IDesignPortal;
```


## Returns

[IDesignPortal](../interfaces/IDesignPortal.md)

A communication object implementing IDesignPortal

## Remarks

Returns an IDesignPortal object, used by extensions in conjunction with the VirtualRender / virtual machine component of lc-editor-design-react. All communication (sending messages + receiving events) is encapsulated inside the object.

### showconfirmationmessage

# SYS\_Dialog.showConfirmationMessage() method

Show a confirmation dialog

## Signature

```typescript
public showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;
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

_(Optional)_ Popup window title


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

_(Optional)_ Callback function


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Show a window with confirmation and cancel buttons

### showinformationmessage

# SYS\_Dialog.showInformationMessage() method

Show an information dialog

## Signature

```typescript
public showInformationMessage(content: string, title?: string, buttonTitle?: string): void;
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

_(Optional)_ Popup window title


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

Show a text message window

### showinputdialog

# SYS\_Dialog.showInputDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Show an input dialog

## Signature

```typescript
public showInputDialog(beforeContent?: string, afterContent?: string, title?: string, type?: 'color' | 'date' | 'datetime-local' | 'email' | 'mouth' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week', value?: string | number, otherProperty?: { max?: undefined | number; maxlength?: undefined | number; min?: undefined | number; minlength?: undefined | number; multiple?: undefined | false | true; pattern?: undefined | RegExp; placeholder?: undefined | string; readonly?: undefined | false | true; step?: undefined | number }, callbackFn?: (value: any) => void): void;
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

_(Optional)_ Text above the input box


</td></tr>
<tr><td>

afterContent


</td><td>

string


</td><td>

_(Optional)_ Text below the input box


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ Popup window title


</td></tr>
<tr><td>

type


</td><td>

'color' \| 'date' \| 'datetime-local' \| 'email' \| 'mouth' \| 'number' \| 'password' \| 'tel' \| 'text' \| 'time' \| 'url' \| 'week'


</td><td>

_(Optional)_ Input box type


</td></tr>
<tr><td>

value


</td><td>

string \| number


</td><td>

_(Optional)_ Default value of the input box


</td></tr>
<tr><td>

otherProperty


</td><td>

\{ max?: undefined \| number; maxlength?: undefined \| number; min?: undefined \| number; minlength?: undefined \| number; multiple?: undefined \| false \| true; pattern?: undefined \| RegExp; placeholder?: undefined \| string; readonly?: undefined \| false \| true; step?: undefined \| number \}


</td><td>

_(Optional)_ Other parameters. Refer to [The HTML Input element](https://developer.mozilla.org/docs/Web/HTML/Element/input#attributes)


</td></tr>
<tr><td>

callbackFn


</td><td>

(value: any) =&gt; void


</td><td>

_(Optional)_ Callback function


</td></tr>
</tbody></table>



## Returns

void

The value entered by the user, always of type `string`<!-- -->, unless the user clicks the \*\*Cancel\*\* button

### showselectdialog

# SYS\_Dialog.showSelectDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Show a select dialog

## Signature

```typescript
public showSelectDialog(options: Array<string> | Array<{ value: string; displayContent: string }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: string, multiple?: false, callbackFn?: (value: string) => void | Promise<void>): void;
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

Array&lt;string&gt; \| Array&lt;{ value: string; displayContent: string }&gt;


</td><td>

Option list, which can be an array of strings or an array of objects. When `defaultOption` is not specified, the default value is the first item of the list. If it is an array of strings, the value and display content of the option remain the same. If it is an array of objects, `value` represents the value of the option, and `displayContent` represents the display content of the option


</td></tr>
<tr><td>

beforeContent


</td><td>

string


</td><td>

_(Optional)_ Text above the select box


</td></tr>
<tr><td>

afterContent


</td><td>

string


</td><td>

_(Optional)_ Text below the select box


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ Select box title


</td></tr>
<tr><td>

defaultOption


</td><td>

string


</td><td>

_(Optional)_ Default option, using the option value as the matching parameter. If the `multiple` parameter is `true`<!-- -->, an array of strings needs to be passed here


</td></tr>
<tr><td>

multiple


</td><td>

false


</td><td>

_(Optional)_ Whether multiple selection is supported. By default, it is a single-select box


</td></tr>
<tr><td>

callbackFn


</td><td>

(value: string) =&gt; void \| Promise&lt;void&gt;


</td><td>

_(Optional)_ Callback function


</td></tr>
</tbody></table>



## Returns

void

The value selected by the user, corresponding to the `value` field in the passed-in `options`

### showselectdialog_1

# SYS\_Dialog.showSelectDialog() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Show a multi-select dialog

## Signature

```typescript
public showSelectDialog(options: Array<string> | Array<{ value: string; displayContent: string }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: Array<string>, multiple?: true, callbackFn?: (value: Array<string>) => void | Promise<void>): void;
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

Array&lt;string&gt; \| Array&lt;{ value: string; displayContent: string }&gt;


</td><td>

Option list, which can be an array of strings or an array of objects. When `defaultOption` is not specified, the default value is the first item of the list. If it is an array of strings, the value and display content of the option remain the same. If it is an array of objects, `value` represents the value of the option, and `displayContent` represents the display content of the option


</td></tr>
<tr><td>

beforeContent


</td><td>

string


</td><td>

_(Optional)_ Text above the multi-select box


</td></tr>
<tr><td>

afterContent


</td><td>

string


</td><td>

_(Optional)_ Text below the multi-select box


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ Multi-select box title


</td></tr>
<tr><td>

defaultOption


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ Default option array, using the option values as matching parameters


</td></tr>
<tr><td>

multiple


</td><td>

true


</td><td>

_(Optional)_ Whether multiple selection is supported


</td></tr>
<tr><td>

callbackFn


</td><td>

(value: Array&lt;string&gt;) =&gt; void \| Promise&lt;void&gt;


</td><td>

_(Optional)_ Callback function


</td></tr>
</tbody></table>



## Returns

void

Array of the set of values selected by the user, corresponding to the `value` fields in the passed-in `options`
