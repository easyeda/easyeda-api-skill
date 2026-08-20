# SYS\_MessageBus class

System / message bus class

## Signature

```typescript
export class SYS_MessageBus 
```

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[createPrivateMessageBus()](./SYS_MessageBus.md)


</td><td>


</td><td>

Create Private message bus


</td></tr>
<tr><td>

[publish(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: publish a message


</td></tr>
<tr><td>

[publishPublic(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: publish a message


</td></tr>
<tr><td>

[pull(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: pull a message


</td></tr>
<tr><td>

[pullAsync(topic)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: pull a message (Promise version)


</td></tr>
<tr><td>

[pullAsyncPublic(topic)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: pull a message (Promise version)


</td></tr>
<tr><td>

[pullPublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: pull a message


</td></tr>
<tr><td>

[push(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: push a message


</td></tr>
<tr><td>

[pushPublic(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: push a message


</td></tr>
<tr><td>

[removePrivateMessageBus()](./SYS_MessageBus.md)


</td><td>


</td><td>

Remove Private message bus


</td></tr>
<tr><td>

[rpcCall(topic, message, timeout)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: call RPC service


</td></tr>
<tr><td>

[rpcCallPublic(topic, message, timeout)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: call RPC service


</td></tr>
<tr><td>

[rpcService(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: register RPC service


</td></tr>
<tr><td>

[rpcServicePublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: register RPC service


</td></tr>
<tr><td>

[subscribe(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: subscribe to a message


</td></tr>
<tr><td>

[subscribeOnce(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Private message bus: subscribe to a message once


</td></tr>
<tr><td>

[subscribeOncePublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: subscribe to a message once


</td></tr>
<tr><td>

[subscribePublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

Public message bus: subscribe to a message


</td></tr>
</tbody></table>

---

## 方法详情

### createprivatemessagebus

# SYS\_MessageBus.createPrivateMessageBus() method

Create Private message bus

## Signature

```typescript
public createPrivateMessageBus(): void;
```


## Returns

void

## Remarks

Generally, there is no need to call this method. The private message bus is automatically created when listening or sending messages

### publish

# SYS\_MessageBus.publish() method

Private message bus: publish a message

## Signature

```typescript
public publish(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

Message


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Broadcast the message to every Subscriber

### publishpublic

# SYS\_MessageBus.publishPublic() method

Public message bus: publish a message

## Signature

```typescript
public publishPublic(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

Message


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Broadcast the message to every Subscriber

### pull

# SYS\_MessageBus.pull() method

Private message bus: pull a message

## Signature

```typescript
public pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

Callback after a message is pulled


</td></tr>
</tbody></table>



## Returns

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

Message bus task

## Remarks

Only one message can be pulled at a time

### pullasync

# SYS\_MessageBus.pullAsync() method

Private message bus: pull a message (Promise version)

## Signature

```typescript
public pullAsync(topic: string): Promise<any>;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

The pulled message

## Remarks

Only one message can be pulled at a time. You can use `await` to wait for the message to be pulled

### pullasyncpublic

# SYS\_MessageBus.pullAsyncPublic() method

Public message bus: pull a message (Promise version)

## Signature

```typescript
public pullAsyncPublic(topic: string): Promise<any>;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

The pulled message

## Remarks

Only one message can be pulled at a time. You can use `await` to wait for the message to be pulled

### pullpublic

# SYS\_MessageBus.pullPublic() method

Public message bus: pull a message

## Signature

```typescript
public pullPublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

Callback after a message is pulled


</td></tr>
</tbody></table>



## Returns

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

Message bus task

## Remarks

Only one message can be pulled at a time

### push

# SYS\_MessageBus.push() method

Private message bus: push a message

## Signature

```typescript
public push(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

Message


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Each message can only be received by one Puller

### pushpublic

# SYS\_MessageBus.pushPublic() method

Public message bus: push a message

## Signature

```typescript
public pushPublic(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

Message


</td></tr>
</tbody></table>



## Returns

void

## Remarks

Each message can only be received by one Puller

### removeprivatemessagebus

# SYS\_MessageBus.removePrivateMessageBus() method

Remove Private message bus

## Signature

```typescript
public removePrivateMessageBus(): void;
```


## Returns

void

## Remarks

Generally, there is no need to call this method unless you know what you are doing

### rpccall

# SYS\_MessageBus.rpcCall() method

Private message bus: call RPC service

## Signature

```typescript
public rpcCall(topic: string, message?: any, timeout?: number): Promise<any>;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

_(Optional)_ Message


</td></tr>
<tr><td>

timeout


</td><td>

number


</td><td>

_(Optional)_ Timeout


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

RPC service return

### rpccallpublic

# SYS\_MessageBus.rpcCallPublic() method

Public message bus: call RPC service

## Signature

```typescript
public rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

_(Optional)_ Message


</td></tr>
<tr><td>

timeout


</td><td>

number


</td><td>

_(Optional)_ Timeout


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

RPC service return

### rpcservice

# SYS\_MessageBus.rpcService() method

Private message bus: register RPC service

## Signature

```typescript
public rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(...args: Array&lt;any&gt;) =&gt; any \| Promise&lt;any&gt;


</td><td>

Callback after receiving the message


</td></tr>
</tbody></table>



## Returns

void

### rpcservicepublic

# SYS\_MessageBus.rpcServicePublic() method

Public message bus: register RPC service

## Signature

```typescript
public rpcServicePublic(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(...args: Array&lt;any&gt;) =&gt; any \| Promise&lt;any&gt;


</td><td>

Callback after receiving the message


</td></tr>
</tbody></table>



## Returns

void

### subscribe

# SYS\_MessageBus.subscribe() method

Private message bus: subscribe to a message

## Signature

```typescript
public subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

Callback after receiving the message


</td></tr>
</tbody></table>



## Returns

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

Message bus task

## Remarks

Persistent subscription message

### subscribeonce

# SYS\_MessageBus.subscribeOnce() method

Private message bus: subscribe to a message once

## Signature

```typescript
public subscribeOnce(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

Callback after receiving the message


</td></tr>
</tbody></table>



## Returns

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

Message bus task

### subscribeoncepublic

# SYS\_MessageBus.subscribeOncePublic() method

Public message bus: subscribe to a message once

## Signature

```typescript
public subscribeOncePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

Callback after receiving the message


</td></tr>
</tbody></table>



## Returns

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

Message bus task

### subscribepublic

# SYS\_MessageBus.subscribePublic() method

Public message bus: subscribe to a message

## Signature

```typescript
public subscribePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

Theme


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

Callback after receiving the message


</td></tr>
</tbody></table>



## Returns

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

Message bus task

## Remarks

Persistent subscription message
