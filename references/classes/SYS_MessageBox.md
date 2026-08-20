# SYS\_MessageBox class

> Warning: This API is now obsolete.
>
> Renamed to [SYS\_Dialog](./SYS_Dialog.md)

System / message box class

## Signature

```typescript
export class SYS_MessageBox 
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

### showinformationmessage

# SYS\_MessageBox.showInformationMessage() method

> Warning: This API is now obsolete.
>
> Please use [SYS\_Dialog.showInformationMessage()](./SYS_Dialog.md) instead

Show a message box

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
