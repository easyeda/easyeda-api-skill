# SYS\_WebSocket class

系统 / WebSocket 类

## 签名

```typescript
declare class SYS_WebSocket 
```

## 备注

与 WebSocket 服务器交互


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[close(id, code, reason, extensionUuid)](./SYS_WebSocket.md)


</td><td>


</td><td>

关闭 WebSocket 连接


</td></tr>
<tr><td>

[register(id, serviceUri, receiveMessageCallFn, connectedCallFn, protocols)](./SYS_WebSocket.md)


</td><td>


</td><td>

注册 WebSocket 连接


</td></tr>
<tr><td>

[send(id, data, extensionUuid)](./SYS_WebSocket.md)


</td><td>


</td><td>

向 WebSocket 服务器发送数据


</td></tr>
</tbody></table>

---

## 方法详情

### close

# SYS\_WebSocket.close() method

关闭 WebSocket 连接

## 签名

```typescript
close(id: string, code?: number, reason?: string, extensionUuid?: string): void;
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

id


</td><td>

string


</td><td>

自定义的 WebSocket ID


</td></tr>
<tr><td>

code


</td><td>

number


</td><td>

_（可选）_ 数字状态码，对应 [WebSocket.CloseEvent](https://developer.mozilla.org/docs/Web/API/CloseEvent/code) 内允许的状态码


</td></tr>
<tr><td>

reason


</td><td>

string


</td><td>

_（可选）_ 一个人类可读的字符串，解释连接关闭的原因


</td></tr>
<tr><td>

extensionUuid


</td><td>

string


</td><td>

_（可选）_ 扩展 UUID，一般不需要指定，仅当需要操作其它扩展建立的 WebSocket 连接时才需要指定为其它扩展的 UUID


</td></tr>
</tbody></table>



## 返回值

void

## 备注

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### register

# SYS\_WebSocket.register() method

注册 WebSocket 连接

## 签名

```typescript
register(id: string, serviceUri: string, receiveMessageCallFn?: (event: MessageEvent<any>) => void | Promise<void>, connectedCallFn?: () => void | Promise<void>, protocols?: string | Array<string>): void;
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

id


</td><td>

string


</td><td>

自定义 WebSocket ID


</td></tr>
<tr><td>

serviceUri


</td><td>

string


</td><td>

WebSocket 服务地址


</td></tr>
<tr><td>

receiveMessageCallFn


</td><td>

(event: MessageEvent&lt;any&gt;) =&gt; void \| Promise&lt;void&gt;


</td><td>

_（可选）_ 接收到消息时的回调函数


</td></tr>
<tr><td>

connectedCallFn


</td><td>

() =&gt; void \| Promise&lt;void&gt;


</td><td>

_（可选）_ 连接建立时的回调函数


</td></tr>
<tr><td>

protocols


</td><td>

string \| Array&lt;string&gt;


</td><td>

_（可选）_ 子协议


</td></tr>
</tbody></table>



## 返回值

void

## 备注

可以用来执行前检测 WebSocket 连接是否正常，但需要注意 \*\*不要尝试相同 ID 不同参数的连接\*\*，这会造成混乱： 如果存在指定 ID 且处于活跃状态中的 WebSocket 连接，那么其余参数的变更将不会被应用

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

### send

# SYS\_WebSocket.send() method

向 WebSocket 服务器发送数据

## 签名

```typescript
send(id: string, data: string | ArrayBuffer | Blob | ArrayBufferView, extensionUuid?: string): void;
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

id


</td><td>

string


</td><td>

自定义的 WebSocket ID


</td></tr>
<tr><td>

data


</td><td>

string \| ArrayBuffer \| Blob \| ArrayBufferView


</td><td>

发送的数据


</td></tr>
<tr><td>

extensionUuid


</td><td>

string


</td><td>

_（可选）_ 扩展 UUID，一般不需要指定，仅当需要操作其它扩展建立的 WebSocket 连接时才需要指定为其它扩展的 UUID


</td></tr>
</tbody></table>



## 返回值

void

## 备注

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
