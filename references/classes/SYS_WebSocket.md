# SYS\_WebSocket class

System / WebSocket class

## Signature

```typescript
export class SYS_WebSocket 
```

## Remarks

Interact with the WebSocket server


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[close(id, code, reason, extensionUuid)](./SYS_WebSocket.md)


</td><td>


</td><td>

Close the WebSocket connection


</td></tr>
<tr><td>

[register(id, serviceUri, receiveMessageCallFn, connectedCallFn, protocols)](./SYS_WebSocket.md)


</td><td>


</td><td>

Register a WebSocket connection


</td></tr>
<tr><td>

[send(id, data, extensionUuid)](./SYS_WebSocket.md)


</td><td>


</td><td>

Send data to the WebSocket server


</td></tr>
</tbody></table>

---

## 方法详情

### close

# SYS\_WebSocket.close() method

Close the WebSocket connection

## Signature

```typescript
public close(id: string, code?: number, reason?: string, extensionUuid?: string): void;
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

id


</td><td>

string


</td><td>

Custom WebSocket ID


</td></tr>
<tr><td>

code


</td><td>

number


</td><td>

_(Optional)_ Numeric status code, corresponding to the codes allowed in [WebSocket.CloseEvent](https://developer.mozilla.org/docs/Web/API/CloseEvent/code)


</td></tr>
<tr><td>

reason


</td><td>

string


</td><td>

_(Optional)_ A human-readable string explaining why the connection was closed


</td></tr>
<tr><td>

extensionUuid


</td><td>

string


</td><td>

_(Optional)_ Extension UUID. Generally it does not need to be specified. It only needs to be specified as another extension's UUID when you need to operate on a WebSocket connection established by another extension


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### register

# SYS\_WebSocket.register() method

Register a WebSocket connection

## Signature

```typescript
public register(id: string, serviceUri: string, receiveMessageCallFn?: (event: MessageEvent<any>) => void | Promise<void>, connectedCallFn?: () => void | Promise<void>, protocols?: string | Array<string>): void;
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

id


</td><td>

string


</td><td>

Custom WebSocket ID


</td></tr>
<tr><td>

serviceUri


</td><td>

string


</td><td>

WebSocket service URI


</td></tr>
<tr><td>

receiveMessageCallFn


</td><td>

(event: MessageEvent&lt;any&gt;) =&gt; void \| Promise&lt;void&gt;


</td><td>

_(Optional)_ Callback function when a message is received


</td></tr>
<tr><td>

connectedCallFn


</td><td>

() =&gt; void \| Promise&lt;void&gt;


</td><td>

_(Optional)_ Callback function when the connection is established


</td></tr>
<tr><td>

protocols


</td><td>

string \| Array&lt;string&gt;


</td><td>

_(Optional)_ Sub-protocols


</td></tr>
</tbody></table>



## Returns

void

## Remarks

It can be used to detect whether the WebSocket connection is normal before execution, but note that \*\*do not attempt connections with the same ID but different parameters\*\*, as this will cause confusion: if a WebSocket connection with the specified ID is active, changes to other parameters will not be applied

Note: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

### send

# SYS\_WebSocket.send() method

Send data to the WebSocket server

## Signature

```typescript
public send(id: string, data: string | Blob | BufferSource, extensionUuid?: string): void;
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

id


</td><td>

string


</td><td>

Custom WebSocket ID


</td></tr>
<tr><td>

data


</td><td>

string \| Blob \| BufferSource


</td><td>

Data to send


</td></tr>
<tr><td>

extensionUuid


</td><td>

string


</td><td>

_(Optional)_ Extension UUID. Generally it does not need to be specified. It only needs to be specified as another extension's UUID when you need to operate on a WebSocket connection established by another extension


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Note: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`
