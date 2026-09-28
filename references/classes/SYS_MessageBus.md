# SYS\_MessageBus class

System / message bus class

## Signature

```typescript
class SYS_MessageBus
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
function createPrivateMessageBus(): void;
```

## Returns

void

## Remarks

Generally, there is no need to call this method. The private message bus is automatically created when listening or sending messages

## Example

```javascript
// 1. 手动创建私有消息总线（重复调用无副作用）
eda.sys_MessageBus.createPrivateMessageBus();

// 2. 订阅一个主题，验证总线已就绪
const task = eda.sys_MessageBus.subscribe('嘉立创示例_创建总线', (message) => {
	console.log('订阅者收到：', message);
});

// 3. 发布消息，回调立即触发
eda.sys_MessageBus.publish('嘉立创示例_创建总线', '总线已创建并可用');

// 4. 取消订阅，恢复原状
task.cancel();
console.log('已取消订阅');
```

### publish

# SYS\_MessageBus.publish() method

Private message bus: publish a message

## Signature

```typescript
function publish(topic: string, message: any): void;
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

## Example

```javascript
// 1. 两个不同模块订阅同一主题
const panelTask = eda.sys_MessageBus.subscribe('嘉立创示例_发布', (message) => {
	console.log('面板模块收到：', message);
});
const cacheTask = eda.sys_MessageBus.subscribe('嘉立创示例_发布', (message) => {
	console.log('缓存模块收到：', message);
});

// 2. 发布一条广播消息，两个订阅者都会收到
eda.sys_MessageBus.publish('嘉立创示例_发布', { source: '工程检查', result: '通过' });

// 3. 取消订阅，恢复原状
panelTask.cancel();
cacheTask.cancel();
console.log('已取消全部订阅');
```

### publishpublic

# SYS\_MessageBus.publishPublic() method

Public message bus: publish a message

## Signature

```typescript
function publishPublic(topic: string, message: any): void;
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

## Example

```javascript
// 1. 两个公共订阅者 + 一个私有订阅者（用于对照隔离性）
const publicTaskA = eda.sys_MessageBus.subscribePublic('嘉立创示例_公共发布', (message) => {
	console.log('公共订阅者 A 收到：', message);
});
const publicTaskB = eda.sys_MessageBus.subscribePublic('嘉立创示例_公共发布', (message) => {
	console.log('公共订阅者 B 收到：', message);
});
const privateTask = eda.sys_MessageBus.subscribe('嘉立创示例_公共发布', (message) => {
	console.log('私有订阅者收到：', message);
});

// 2. 在公共总线发布广播，只有公共订阅者会收到
eda.sys_MessageBus.publishPublic('嘉立创示例_公共发布', '工程已保存');

// 3. 取消订阅，恢复原状
publicTaskA.cancel();
publicTaskB.cancel();
privateTask.cancel();
console.log('已取消全部订阅');
```

### pull

# SYS\_MessageBus.pull() method

Private message bus: pull a message

## Signature

```typescript
function pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

## Example

```javascript
// 1. 注册拉取回调（每次只能拉一个消息）
let count = 0;
const task = eda.sys_MessageBus.pull('嘉立创示例_拉取', (message) => {
	count++;
	console.log('第', count, '次拉到：', message);
});

// 2. 推送两条消息：只有第一条会被这个 Puller 收到
eda.sys_MessageBus.push('嘉立创示例_拉取', '任务甲');
eda.sys_MessageBus.push('嘉立创示例_拉取', '任务乙');

console.log('拉取次数：', count);

// 3. 取消任务（未消费完的排队消息一并放弃）
task.cancel();
console.log('已取消拉取任务');
```

### pullasync

# SYS\_MessageBus.pullAsync() method

Private message bus: pull a message (Promise version)

## Signature

```typescript
function pullAsync(topic: string): Promise<any>;
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

## Example

```javascript
// 1. 先发起拉取（Promise 挂起等待消息）
const pending = eda.sys_MessageBus.pullAsync('嘉立创示例_异步拉取');

// 2. 推送消息，挂起的 Promise 随即满足
eda.sys_MessageBus.push('嘉立创示例_异步拉取', { task: '导出 BOM', done: true });

// 3. await 直接拿到拉到的消息
const message = await pending;
console.log('拉到的消息：', message);
```

### pullasyncpublic

# SYS\_MessageBus.pullAsyncPublic() method

Public message bus: pull a message (Promise version)

## Signature

```typescript
function pullAsyncPublic(topic: string): Promise<any>;
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

## Example

```javascript
// 1. 在公共总线发起拉取（Promise 挂起等待消息）
const pending = eda.sys_MessageBus.pullAsyncPublic('嘉立创示例_公共异步拉取');

// 2. 用 pushPublic 投递消息（私有总线的 push 到不了这里）
eda.sys_MessageBus.pushPublic('嘉立创示例_公共异步拉取', '跨扩展结果已就绪');

// 3. await 直接拿到拉到的消息
const message = await pending;
console.log('拉到的公共消息：', message);
```

### pullpublic

# SYS\_MessageBus.pullPublic() method

Public message bus: pull a message

## Signature

```typescript
function pullPublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

## Example

```javascript
// 1. 在公共总线注册拉取回调（一次性）
const task = eda.sys_MessageBus.pullPublic('嘉立创示例_公共拉取', (message) => {
	console.log('公共总线拉到：', message);
});

// 2. 用 pushPublic 投递消息，回调立即触发
eda.sys_MessageBus.pushPublic('嘉立创示例_公共拉取', '公共任务甲');

// 3. 取消任务，恢复原状
task.cancel();
console.log('已取消公共拉取任务');
```

### push

# SYS\_MessageBus.push() method

Private message bus: push a message

## Signature

```typescript
function push(topic: string, message: any): void;
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

## Example

```javascript
// 1. 先推送消息（此时还没有 Puller，消息排队保留）
eda.sys_MessageBus.push('嘉立创示例_推送', '先推后拉的消息');

// 2. 再注册拉取回调，排队的消息立即交付
const task = eda.sys_MessageBus.pull('嘉立创示例_推送', (message) => {
	console.log('拉到排队消息：', message);
});

// 3. 常规顺序演示：先注册再推送
const task2 = eda.sys_MessageBus.pull('嘉立创示例_推送', (message) => {
	console.log('拉到实时消息：', message);
});
eda.sys_MessageBus.push('嘉立创示例_推送', '先拉后推的消息');

// 4. 取消任务，恢复原状
task.cancel();
task2.cancel();
console.log('已取消拉取任务');
```

### pushpublic

# SYS\_MessageBus.pushPublic() method

Public message bus: push a message

## Signature

```typescript
function pushPublic(topic: string, message: any): void;
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

## Example

```javascript
// 1. 在公共总线注册两个取件方（竞争关系）
let receivedByA = false;
const taskA = eda.sys_MessageBus.pullPublic('嘉立创示例_公共推送', () => {
	receivedByA = true;
});
const taskB = eda.sys_MessageBus.pullPublic('嘉立创示例_公共推送', (message) => {
	console.log('取件方 B 拉到：', message);
});

// 2. 推送一条消息：先注册的取件方 A 拿走，B 收不到
eda.sys_MessageBus.pushPublic('嘉立创示例_公共推送', '跨扩展任务');

console.log('取件方 A 是否收到：', receivedByA);

// 3. 取消任务，恢复原状
taskA.cancel();
taskB.cancel();
console.log('已取消公共拉取任务');
```

### removeprivatemessagebus

# SYS\_MessageBus.removePrivateMessageBus() method

Remove Private message bus

## Signature

```typescript
function removePrivateMessageBus(): void;
```

## Returns

void

## Remarks

Generally, there is no need to call this method unless you know what you are doing

## Example

```javascript
// 1. 订阅一个主题并验证能收到消息
let received = null;
eda.sys_MessageBus.subscribe('嘉立创示例_移除总线', (message) => {
	received = message;
});
eda.sys_MessageBus.publish('嘉立创示例_移除总线', '移除前的消息');
console.log('移除前收到：', received);

// 2. 移除私有消息总线，原有订阅全部失效
eda.sys_MessageBus.removePrivateMessageBus();
eda.sys_MessageBus.publish('嘉立创示例_移除总线', '移除后的消息');
console.log('移除后订阅者是否还收到：', received);

// 3. 再次订阅，总线自动重建恢复正常
eda.sys_MessageBus.subscribe('嘉立创示例_移除总线', (message) => {
	received = message;
});
eda.sys_MessageBus.publish('嘉立创示例_移除总线', '重建后的消息');
console.log('重建后收到：', received);
```

### rpccall

# SYS\_MessageBus.rpcCall() method

Private message bus: call RPC service

## Signature

```typescript
function rpcCall(topic: string, message?: any, timeout?: number): Promise<any>;
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

## Example

```javascript
// 1. 注册一个 DRC 检查服务（message 是单个参数，用对象打包请求字段）
eda.sys_MessageBus.rpcService('嘉立创示例_RPC调用', (message) => {
	return `检查完成：${message.rule}，发现 ${message.count} 处问题`;
});

// 2. 发起 RPC 调用，await 直接拿到服务返回值
const reply = await eda.sys_MessageBus.rpcCall('嘉立创示例_RPC调用', {
	rule: '间距约束',
	count: 2,
});
console.log('服务返回：', reply);
```

### rpccallpublic

# SYS\_MessageBus.rpcCallPublic() method

Public message bus: call RPC service

## Signature

```typescript
function rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>;
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

## Example

```javascript
// 1. 在公共总线注册一个库查询服务
eda.sys_MessageBus.rpcServicePublic('嘉立创示例_公共RPC调用', (message) => {
	return { name: message, stock: 1200 };
});

// 2. 调用公共 RPC 服务，await 拿到返回值
const reply = await eda.sys_MessageBus.rpcCallPublic('嘉立创示例_公共RPC调用', '0402 电阻');
console.log('查询结果：', reply.name, '库存', reply.stock);
```

### rpcservice

# SYS\_MessageBus.rpcService() method

Private message bus: register RPC service

## Signature

```typescript
function rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;
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

## Example

```javascript
// 1. 注册同步服务：直接返回计算结果
eda.sys_MessageBus.rpcService('嘉立创示例_RPC服务_同步', (message) => {
	return `同步响应：${message}`;
});

// 2. 注册异步服务：返回 Promise，处理完才响应
eda.sys_MessageBus.rpcService('嘉立创示例_RPC服务_异步', async (message) => {
	await new Promise(resolve => setTimeout(resolve, 200));
	return `异步响应：${message}`;
});

// 3. 分别调用两种服务验证
console.log(await eda.sys_MessageBus.rpcCall('嘉立创示例_RPC服务_同步', '参数甲'));
console.log(await eda.sys_MessageBus.rpcCall('嘉立创示例_RPC服务_异步', '参数乙'));
```

### rpcservicepublic

# SYS\_MessageBus.rpcServicePublic() method

Public message bus: register RPC service

## Signature

```typescript
function rpcServicePublic(
	topic: string,
	callbackFn: (...args: Array<any>) => any | Promise<any>,
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

## Example

```javascript
// 1. 在公共总线注册一个工程信息服务
eda.sys_MessageBus.rpcServicePublic('嘉立创示例_公共RPC服务', (message) => {
	return `当前工程《示例工程》的${message}已就绪`;
});

// 2. 用 rpcCallPublic 调用自己注册的公共服务（跨扩展调用同理）
const reply = await eda.sys_MessageBus.rpcCallPublic('嘉立创示例_公共RPC服务', '原理图数据');
console.log('公共服务返回：', reply);
```

### subscribe

# SYS\_MessageBus.subscribe() method

Private message bus: subscribe to a message

## Signature

```typescript
function subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

## Example

```javascript
// 1. 持久订阅主题
const received = [];
const task = eda.sys_MessageBus.subscribe('嘉立创示例_订阅', (message) => {
	received.push(message);
});

// 2. 连续发布多条消息，每条都能收到
eda.sys_MessageBus.publish('嘉立创示例_订阅', '第一条');
eda.sys_MessageBus.publish('嘉立创示例_订阅', '第二条');
console.log('已收到：', received.join('、'));

// 3. cancel 之后不再接收
task.cancel();
eda.sys_MessageBus.publish('嘉立创示例_订阅', '取消后的消息');
console.log('cancel 后仍停留在：', received.join('、'));
```

### subscribeonce

# SYS\_MessageBus.subscribeOnce() method

Private message bus: subscribe to a message once

## Signature

```typescript
function subscribeOnce(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

## Example

```javascript
// 1. 注册单次订阅
let received = null;
const task = eda.sys_MessageBus.subscribeOnce('嘉立创示例_单次订阅', (message) => {
	received = message;
});

// 2. 发布两条消息：只有第一条触发回调
eda.sys_MessageBus.publish('嘉立创示例_单次订阅', '首次触发');
eda.sys_MessageBus.publish('嘉立创示例_单次订阅', '第二次发布');
console.log('实际收到：', received);

// 3. 消息未到时也可以主动 cancel 放弃等待
task.cancel();
console.log('已清理单次订阅任务');
```

### subscribeoncepublic

# SYS\_MessageBus.subscribeOncePublic() method

Public message bus: subscribe to a message once

## Signature

```typescript
function subscribeOncePublic(
	topic: string,
	callbackFn: (message: any) => void,
): ISYS_MessageBusTask;
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

## Example

```javascript
// 1. 在公共总线注册单次订阅
let received = null;
eda.sys_MessageBus.subscribeOncePublic('嘉立创示例_公共单次订阅', (message) => {
	received = message;
});

// 2. 连续两条公共广播：只有第一条触发
eda.sys_MessageBus.publishPublic('嘉立创示例_公共单次订阅', '首次广播');
eda.sys_MessageBus.publishPublic('嘉立创示例_公共单次订阅', '第二次广播');
console.log('实际收到：', received);

// 3. 私有总线的 publish 与公共订阅互不相通（隔离验证）
eda.sys_MessageBus.publish('嘉立创示例_公共单次订阅', '私有消息');
console.log('私有消息到达后仍停留在：', received);
```

### subscribepublic

# SYS\_MessageBus.subscribePublic() method

Public message bus: subscribe to a message

## Signature

```typescript
function subscribePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

## Example

```javascript
// 1. 在公共总线持久订阅主题
const received = [];
const task = eda.sys_MessageBus.subscribePublic('嘉立创示例_公共订阅', (message) => {
	received.push(message);
});

// 2. 公共广播两条都能收到；私有 publish 不会到达
eda.sys_MessageBus.publishPublic('嘉立创示例_公共订阅', '公共甲');
eda.sys_MessageBus.publishPublic('嘉立创示例_公共订阅', '公共乙');
eda.sys_MessageBus.publish('嘉立创示例_公共订阅', '私有丙');
console.log('已收到：', received.join('、'));

// 3. cancel 之后不再接收
task.cancel();
eda.sys_MessageBus.publishPublic('嘉立创示例_公共订阅', '取消后广播');
console.log('cancel 后仍停留在：', received.join('、'));
```
