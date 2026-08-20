# SYS\_Message class

System / message notification class

## Signature

```typescript
export class SYS_Message 
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
public removeFollowMouseTip(tip?: string): Promise<void>;
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

### showfollowmousetip

# SYS\_Message.showFollowMouseTip() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Show the follow-mouse tip

## Signature

```typescript
public showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;
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

### showtoastmessage

# SYS\_Message.showToastMessage() method

Show a toast message

## Signature

```typescript
public showToastMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;
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
