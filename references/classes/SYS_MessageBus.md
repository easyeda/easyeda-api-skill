# SYS\_MessageBus class

系统 / 消息总线类

## 签名

```typescript
declare class SYS_MessageBus 
```

## 备注


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[createPrivateMessageBus()](./SYS_MessageBus.md)


</td><td>


</td><td>

创建私有消息总线


</td></tr>
<tr><td>

[publish(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：发布消息


</td></tr>
<tr><td>

[publishPublic(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：发布消息


</td></tr>
<tr><td>

[pull(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：拉消息


</td></tr>
<tr><td>

[pullAsync(topic)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：拉消息 Promise 版本


</td></tr>
<tr><td>

[pullAsyncPublic(topic)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：拉消息 Promise 版本


</td></tr>
<tr><td>

[pullPublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：拉消息


</td></tr>
<tr><td>

[push(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：推消息


</td></tr>
<tr><td>

[pushPublic(topic, message)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：推消息


</td></tr>
<tr><td>

[removePrivateMessageBus()](./SYS_MessageBus.md)


</td><td>


</td><td>

移除私有消息总线


</td></tr>
<tr><td>

[rpcCall(topic, message, timeout)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：调用 RPC 服务


</td></tr>
<tr><td>

[rpcCallPublic(topic, message, timeout)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：调用 RPC 服务


</td></tr>
<tr><td>

[rpcService(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：注册 RPC 服务


</td></tr>
<tr><td>

[rpcServicePublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：注册 RPC 服务


</td></tr>
<tr><td>

[subscribe(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：订阅消息


</td></tr>
<tr><td>

[subscribeOnce(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

私有消息总线：订阅单次消息


</td></tr>
<tr><td>

[subscribeOncePublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：订阅单次消息


</td></tr>
<tr><td>

[subscribePublic(topic, callbackFn)](./SYS_MessageBus.md)


</td><td>


</td><td>

公共消息总线：订阅消息


</td></tr>
</tbody></table>

---

## 方法详情

### createprivatemessagebus

# SYS\_MessageBus.createPrivateMessageBus() method

创建私有消息总线

## 签名

```typescript
createPrivateMessageBus(): void;
```


## 返回值

void

## 备注

一般无需调用该方法，在进行监听或发送消息时会自动创建私有消息总线

### publish

# SYS\_MessageBus.publish() method

私有消息总线：发布消息

## 签名

```typescript
publish(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

消息


</td></tr>
</tbody></table>



## 返回值

void

## 备注

将消息广播给每一个 Subscriber

### publishpublic

# SYS\_MessageBus.publishPublic() method

公共消息总线：发布消息

## 签名

```typescript
publishPublic(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

消息


</td></tr>
</tbody></table>



## 返回值

void

## 备注

将消息广播给每一个 Subscriber

### pull

# SYS\_MessageBus.pull() method

私有消息总线：拉消息

## 签名

```typescript
pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

拉到消息后的回调


</td></tr>
</tbody></table>



## 返回值

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

消息总线任务

## 备注

每次只能拉一个消息

### pullasync

# SYS\_MessageBus.pullAsync() method

私有消息总线：拉消息 Promise 版本

## 签名

```typescript
pullAsync(topic: string): Promise<any>;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
</tbody></table>



## 返回值

Promise&lt;any&gt;

拉取到的消息

## 备注

每次只能拉一个消息，可以使用 `await` 等待消息拉取

### pullasyncpublic

# SYS\_MessageBus.pullAsyncPublic() method

公共消息总线：拉消息 Promise 版本

## 签名

```typescript
pullAsyncPublic(topic: string): Promise<any>;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
</tbody></table>



## 返回值

Promise&lt;any&gt;

拉取到的消息

## 备注

每次只能拉一个消息，可以使用 `await` 等待消息拉取

### pullpublic

# SYS\_MessageBus.pullPublic() method

公共消息总线：拉消息

## 签名

```typescript
pullPublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

拉到消息后的回调


</td></tr>
</tbody></table>



## 返回值

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

消息总线任务

## 备注

每次只能拉一个消息

### push

# SYS\_MessageBus.push() method

私有消息总线：推消息

## 签名

```typescript
push(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

消息


</td></tr>
</tbody></table>



## 返回值

void

## 备注

每个消息只有一个 Puller 可以收到

### pushpublic

# SYS\_MessageBus.pushPublic() method

公共消息总线：推消息

## 签名

```typescript
pushPublic(topic: string, message: any): void;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

消息


</td></tr>
</tbody></table>



## 返回值

void

## 备注

每个消息只有一个 Puller 可以收到

### removeprivatemessagebus

# SYS\_MessageBus.removePrivateMessageBus() method

移除私有消息总线

## 签名

```typescript
removePrivateMessageBus(): void;
```


## 返回值

void

## 备注

一般无需调用该方法，除非你知道自己在做什么

### rpccall

# SYS\_MessageBus.rpcCall() method

私有消息总线：调用 RPC 服务

## 签名

```typescript
rpcCall(topic: string, message?: any, timeout?: number): Promise<any>;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

_（可选）_ 消息


</td></tr>
<tr><td>

timeout


</td><td>

number


</td><td>

_（可选）_ 超时


</td></tr>
</tbody></table>



## 返回值

Promise&lt;any&gt;

RPC 服务返回

### rpccallpublic

# SYS\_MessageBus.rpcCallPublic() method

公共消息总线：调用 RPC 服务

## 签名

```typescript
rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

message


</td><td>

any


</td><td>

_（可选）_ 消息


</td></tr>
<tr><td>

timeout


</td><td>

number


</td><td>

_（可选）_ 超时


</td></tr>
</tbody></table>



## 返回值

Promise&lt;any&gt;

RPC 服务返回

### rpcservice

# SYS\_MessageBus.rpcService() method

私有消息总线：注册 RPC 服务

## 签名

```typescript
rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(...args: Array&lt;any&gt;) =&gt; any \| Promise&lt;any&gt;


</td><td>

接收到消息后的回调


</td></tr>
</tbody></table>



## 返回值

void

### rpcservicepublic

# SYS\_MessageBus.rpcServicePublic() method

公共消息总线：注册 RPC 服务

## 签名

```typescript
rpcServicePublic(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(...args: Array&lt;any&gt;) =&gt; any \| Promise&lt;any&gt;


</td><td>

接收到消息后的回调


</td></tr>
</tbody></table>



## 返回值

void

### subscribe

# SYS\_MessageBus.subscribe() method

私有消息总线：订阅消息

## 签名

```typescript
subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

接收到消息后的回调


</td></tr>
</tbody></table>



## 返回值

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

消息总线任务

## 备注

持久性订阅消息

### subscribeonce

# SYS\_MessageBus.subscribeOnce() method

私有消息总线：订阅单次消息

## 签名

```typescript
subscribeOnce(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

接收到消息后的回调


</td></tr>
</tbody></table>



## 返回值

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

消息总线任务

### subscribeoncepublic

# SYS\_MessageBus.subscribeOncePublic() method

公共消息总线：订阅单次消息

## 签名

```typescript
subscribeOncePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

接收到消息后的回调


</td></tr>
</tbody></table>



## 返回值

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

消息总线任务

### subscribepublic

# SYS\_MessageBus.subscribePublic() method

公共消息总线：订阅消息

## 签名

```typescript
subscribePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic


</td><td>

string


</td><td>

主题


</td></tr>
<tr><td>

callbackFn


</td><td>

(message: any) =&gt; void


</td><td>

接收到消息后的回调


</td></tr>
</tbody></table>



## 返回值

[ISYS\_MessageBusTask](../interfaces/ISYS_MessageBusTask.md)

消息总线任务

## 备注

持久性订阅消息
