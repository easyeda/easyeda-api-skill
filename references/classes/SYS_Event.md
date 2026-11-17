# SYS\_Event class

系统 / 事件类

## Signature

```typescript
class SYS_Event
```

## Remarks

注册系统级事件回调

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[addProgressBarEventListener(id, callFn, onlyOnce, actions)](./SYS_Event.md)

</td><td>

</td><td>

**_(BETA)_** 新增进度条事件监听

</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./SYS_Event.md)

</td><td>

</td><td>

查询事件监听是否存在

</td></tr>
<tr><td>

[removeEventListener(id)](./SYS_Event.md)

</td><td>

</td><td>

移除事件监听

</td></tr>
</tbody></table>

---

## 方法详情

### addprogressbareventlistener

# SYS\_Event.addProgressBarEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

新增进度条事件监听

## Signature

```typescript
function addProgressBarEventListener(
	id: string,
	callFn: (props: ISYS_ProgressBarEventProps) => void | Promise<void>,
	onlyOnce?: boolean,
	actions?: ESYS_ProgressBarAction[],
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

id

</td><td>

string

</td><td>

事件 ID，用以防止重复注册事件

</td></tr>
<tr><td>

callFn

</td><td>

(props: [ISYS\_ProgressBarEventProps](../interfaces/ISYS_ProgressBarEventProps.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;

</td><td>

事件触发时的回调函数，收到的参数见 [ISYS\_ProgressBarEventProps](../interfaces/ISYS_ProgressBarEventProps.md)

</td></tr>
<tr><td>

onlyOnce

</td><td>

boolean

</td><td>

_(Optional)_ 是否仅监听一次

</td></tr>
<tr><td>

actions

</td><td>

[ESYS\_ProgressBarAction](../enums/ESYS_ProgressBarAction.md)<!-- -->\[\]

</td><td>

_(Optional)_ 可选，仅监听指定操作类型的事件；不传时监听全部操作

</td></tr>
</tbody></table>

## Returns

void

## Remarks

在进度条整个生命周期的各阶段触发回调，同一个进度条会依次产生多个事件

单条进度条的典型触发序列为 `start` → 若干次 `update` → `complete`<!-- -->，或 `start` → 若干次 `update` → `close` / `destroy`<!-- -->，即回调会被多次调用；不需要全部阶段时请用 `actions` 过滤

编辑器内任意进度条都会触发本事件，包括扩展通过 [SYS\_LoadingAndProgressBar.showProgressBar()](./SYS_LoadingAndProgressBar.md) 创建的，以及编辑器内部功能（如打开工程、导出等）创建的；可依据 `progressBarId` / `title` 自行过滤

本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

同一 `id` 重复注册会覆盖此前的监听 ADD since EDA v4.1.103

## Example

```javascript
const listenerId = '嘉立创示例_进度条事件';

// 1. 先注册监听，再显示进度条
// 回调会在 start / update / complete（或 close、destroy）各阶段被多次调用，按 action 分发处理
eda.sys_Event.addProgressBarEventListener(listenerId, (props) => {
	switch (props.action) {
		case 'start':
			console.log('进度条开始：', props.progressBarId, props.title);
			break;
		case 'update':
			console.log('进度更新：', props.progress);
			break;
		case 'complete':
			console.log('任务完成');
			break;
		case 'close':
			console.log('用户关闭，此时进度：', props.progress);
			break;
		case 'destroy':
			console.log('进度条被主动销毁');
			break;
	}
});
eda.sys_LoadingAndProgressBar.showProgressBar(30, '嘉立创示例 正在处理');

// 2. 只关心用户关闭时用 actions 过滤，此时回调只会被触发一次
// eda.sys_Event.addProgressBarEventListener(listenerId, props => {}, false, ['close']);
// 3. 监听会持续存在；任务结束或不再需要时再移除
// eda.sys_Event.removeEventListener(listenerId);
```

### iseventlisteneralreadyexist

# SYS\_Event.isEventListenerAlreadyExist() method

查询事件监听是否存在

## Signature

```typescript
function isEventListenerAlreadyExist(id: string): boolean;
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

事件 ID

</td></tr>
</tbody></table>

## Returns

boolean

事件监听是否存在

## Remarks

ADD since EDA v4.1.99

## Example

```javascript
const listenerId = '嘉立创示例_进度条事件查询';

// 1. 注册前查询：应为 false
console.log('注册前：', eda.sys_Event.isEventListenerAlreadyExist(listenerId));

// 2. 注册后查询：应为 true
eda.sys_Event.addProgressBarEventListener(listenerId, () => {});
console.log('注册后：', eda.sys_Event.isEventListenerAlreadyExist(listenerId));

// 3. 清理监听
eda.sys_Event.removeEventListener(listenerId);
```

### removeeventlistener

# SYS\_Event.removeEventListener() method

移除事件监听

## Signature

```typescript
function removeEventListener(id: string): boolean;
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

事件 ID

</td></tr>
</tbody></table>

## Returns

boolean

是否移除指定事件监听

## Remarks

ADD since EDA v4.1.99

## Example

```javascript
const listenerId = '嘉立创示例_进度条事件移除';

// 1. 先注册一个监听作为移除目标
eda.sys_Event.addProgressBarEventListener(listenerId, () => {});
console.log('注册后存在：', eda.sys_Event.isEventListenerAlreadyExist(listenerId));

// 2. 移除该监听
console.log('移除结果：', eda.sys_Event.removeEventListener(listenerId));

// 3. 重复移除同一 id：返回 false（本就未注册）
console.log('重复移除：', eda.sys_Event.removeEventListener(listenerId));
```
