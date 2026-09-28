# DMT\_Event class

Document tree / event class

## Signature

```typescript
class DMT_Event
```

## Remarks

Register an event callback

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[addEditorTabEventListener(id, eventType, callFn, onlyOnce)](./DMT_Event.md)

</td><td>

</td><td>

**_(BETA)_** Add an editor tab event listener

</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./DMT_Event.md)

</td><td>

</td><td>

Query whether the event listener exists

</td></tr>
<tr><td>

[removeEventListener(id)](./DMT_Event.md)

</td><td>

</td><td>

Remove Event listener

</td></tr>
</tbody></table>

---

## 方法详情

### addeditortabeventlistener

# DMT\_Event.addEditorTabEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Add an editor tab event listener

## Signature

```typescript
function addEditorTabEventListener(
	id: string,
	eventType: 'all' | EDMT_EditorTabEventType,
	callFn: (
		eventType: EDMT_EditorTabEventType,
		props: { documentType: EDMT_EditorDocumentType; title: string; tabId: string },
	) => void | Promise<void>,
	onlyOnce?: boolean,
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

Event ID, used to prevent duplicate event registration

</td></tr>
<tr><td>

eventType

</td><td>

'all' \| [EDMT\_EditorTabEventType](../enums/EDMT_EditorTabEventType.md)

</td><td>

Event type

</td></tr>
<tr><td>

callFn

</td><td>

(eventType: [EDMT\_EditorTabEventType](../enums/EDMT_EditorTabEventType.md)<!-- -->, props: { documentType: [EDMT\_EditorDocumentType](../enums/EDMT_EditorDocumentType.md)<!-- -->; title: string; tabId: string }) =&gt; void \| Promise&lt;void&gt;

</td><td>

The callback function triggered when the event fires

</td></tr>
<tr><td>

onlyOnce

</td><td>

boolean

</td><td>

_(Optional)_ Whether to listen only once

</td></tr>
</tbody></table>

## Returns

void

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

When the [tab event type](../enums/EDMT_EditorTabEventType.md) is [close](../enums/EDMT_EditorTabEventType.md) or [open](../enums/EDMT_EditorTabEventType.md)<!-- -->, the [switch](../enums/EDMT_EditorTabEventType.md) event will also be triggered

## Example

```javascript
const listenerId = '嘉立创示例_tab_add';

// 1. 打开一个原理图页，保证编辑器里存在可切换的标签页
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
await eda.dmt_EditorControl.openDocument(pages[0].uuid);

// 2. 注册 toggle 事件监听（回调里拿到事件类型与标签页属性）
let fired = null;
eda.dmt_Event.addEditorTabEventListener(
	listenerId,
	'toggle',
	(eventType, props) => {
		fired = { eventType, title: props?.title, tabId: props?.tabId };
	}
);

// 3. 回读确认注册成功（同 id 再注册也会被防重机制忽略）
const registered = eda.dmt_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 4. 切换一次标签页触发 toggle 事件，观察回调被调用
if (pages[1]) {
	await eda.dmt_EditorControl.openDocument(pages[1].uuid);
	await eda.dmt_EditorControl.openDocument(pages[0].uuid);
}
else {
	await eda.dmt_EditorControl.openDocument(pages[0].uuid);
}
await new Promise(r => setTimeout(r, 500));
console.log('fired:', fired ? JSON.stringify(fired) : 'null');

// 5. 清理监听，避免会话内残留
const removed = eda.dmt_Event.removeEventListener(listenerId);
console.log('removed:', removed);
```

### iseventlisteneralreadyexist

# DMT\_Event.isEventListenerAlreadyExist() method

Query whether the event listener exists

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

Event ID

</td></tr>
</tbody></table>

## Returns

boolean

Whether the event listener exists

## Example

```javascript
const listenerId = '嘉立创示例_tab_exist';

// 1. 注册前查询：应为 false
const before = eda.dmt_Event.isEventListenerAlreadyExist(listenerId);
console.log('before:', before);

// 2. 注册一个监听使 id 生效
eda.dmt_Event.addEditorTabEventListener(
	listenerId,
	'toggle',
	() => {}
);

// 3. 注册后查询：应为 true
const after = eda.dmt_Event.isEventListenerAlreadyExist(listenerId);
console.log('after:', after);

// 4. 移除后查询：应回到 false
eda.dmt_Event.removeEventListener(listenerId);
const afterRemove = eda.dmt_Event.isEventListenerAlreadyExist(listenerId);
console.log('afterRemove:', afterRemove);
```

### removeeventlistener

# DMT\_Event.removeEventListener() method

Remove Event listener

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

Event ID

</td></tr>
</tbody></table>

## Returns

boolean

Whether Remove Specify event listener

## Example

```javascript
const listenerId = '嘉立创示例_tab_remove';

// 1. 先注册一个监听作为移除目标
eda.dmt_Event.addEditorTabEventListener(
	listenerId,
	'toggle',
	() => {}
);
const registered = eda.dmt_Event.isEventListenerAlreadyExist(listenerId);
console.log('registered:', registered);

// 2. 移除该监听
const removed = eda.dmt_Event.removeEventListener(listenerId);
console.log('removed:', removed);

// 3. 回读确认已不存在
const existAfter = eda.dmt_Event.isEventListenerAlreadyExist(listenerId);
console.log('existAfter:', existAfter);

// 4. 重复移除同一 id：返回 false（本就未注册）
const removedAgain = eda.dmt_Event.removeEventListener(listenerId);
console.log('removedAgain:', removedAgain);
```
