# DMT\_Event class

文档树 / 事件类

## Signature

```typescript
declare class DMT_Event 
```

## Remarks

注册事件回调


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

**_(BETA)_** 新增编辑器标签页事件监听


</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./DMT_Event.md)


</td><td>


</td><td>

查询事件监听是否存在


</td></tr>
<tr><td>

[removeEventListener(id)](./DMT_Event.md)


</td><td>


</td><td>

移除事件监听


</td></tr>
</tbody></table>

---

## 方法详情

### addeditortabeventlistener

# DMT\_Event.addEditorTabEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

新增编辑器标签页事件监听

## Signature

```typescript
addEditorTabEventListener(id: string, eventType: 'all' | EDMT_EditorTabEventType, callFn: (eventType: EDMT_EditorTabEventType, props: {
        documentType: EDMT_EditorDocumentType;
        title: string;
        tabId: string;
    }) => void | Promise<void>, onlyOnce?: boolean): void;
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

eventType


</td><td>

'all' \| [EDMT\_EditorTabEventType](../enums/EDMT_EditorTabEventType.md)


</td><td>

事件类型


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [EDMT\_EditorTabEventType](../enums/EDMT_EditorTabEventType.md)<!-- -->, props: { documentType: [EDMT\_EditorDocumentType](../enums/EDMT_EditorDocumentType.md)<!-- -->; title: string; tabId: string; }) =&gt; void \| Promise&lt;void&gt;


</td><td>

事件触发时的回调函数


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_(Optional)_ 是否仅监听一次


</td></tr>
</tbody></table>



## Returns

void

## Remarks

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

在 [标签页事件类型](../enums/EDMT_EditorTabEventType.md) 为 [关闭](../enums/EDMT_EditorTabEventType.md) 或 [打开](../enums/EDMT_EditorTabEventType.md) 时，均会同时触发 [切换](../enums/EDMT_EditorTabEventType.md) 事件

### iseventlisteneralreadyexist

# DMT\_Event.isEventListenerAlreadyExist() method

查询事件监听是否存在

## Signature

```typescript
isEventListenerAlreadyExist(id: string): boolean;
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

### removeeventlistener

# DMT\_Event.removeEventListener() method

移除事件监听

## Signature

```typescript
removeEventListener(id: string): boolean;
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
