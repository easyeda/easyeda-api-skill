# PCB\_Event class

PCB &amp; 封装 / 事件类

## Signature

```typescript
declare class PCB_Event 
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

[addCrossProbeSelectEventListener(id, callFn)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** 新增交叉选择事件监听


</td></tr>
<tr><td>

[addMouseEventListener(id, eventType, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** 新增鼠标事件监听


</td></tr>
<tr><td>

[addNetEventListener(id, eventType, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** 新增网络事件监听


</td></tr>
<tr><td>

[addPrimitiveEventListener(id, eventType, callFn, onlyOnce)](./PCB_Event.md)


</td><td>


</td><td>

**_(BETA)_** 新增图元事件监听


</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./PCB_Event.md)


</td><td>


</td><td>

查询事件监听是否存在


</td></tr>
<tr><td>

[removeEventListener(id)](./PCB_Event.md)


</td><td>


</td><td>

移除事件监听


</td></tr>
</tbody></table>

---

## 方法详情

### addcrossprobeselecteventlistener

# PCB\_Event.addCrossProbeSelectEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

新增交叉选择事件监听

## Signature

```typescript
addCrossProbeSelectEventListener(id: string, callFn: (props: any) => void | Promise<void>): void;
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

(props: any) =&gt; void \| Promise&lt;void&gt;


</td><td>

事件触发时的回调函数


</td></tr>
</tbody></table>



## Returns

void

## Remarks

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### addmouseeventlistener

# PCB\_Event.addMouseEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

新增鼠标事件监听

## Signature

```typescript
addMouseEventListener(id: string, eventType: 'all' | EPCB_MouseEventType, callFn: (eventType: EPCB_MouseEventType, props: [
        {
            primitiveId: string;
            primitiveType: EPCB_PrimitiveType;
            net?: string;
            designator?: string;
            parentComponentPrimitiveId?: string;
            parentComponentDesignator?: string;
        }
    ]) => void | Promise<void>, onlyOnce?: boolean): void;
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

'all' \| EPCB\_MouseEventType


</td><td>

事件类型


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: EPCB\_MouseEventType, props: \[ { primitiveId: string; primitiveType: [EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)<!-- -->; net?: string; designator?: string; parentComponentPrimitiveId?: string; parentComponentDesignator?: string; } \]) =&gt; void \| Promise&lt;void&gt;


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

### addneteventlistener

# PCB\_Event.addNetEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

新增网络事件监听

## Signature

```typescript
addNetEventListener(id: string, eventType: 'all' | EPCB_NetEventType, callFn: (eventType: EPCB_NetEventType, props: [{
        net: string;
    }]) => void | Promise<void>, onlyOnce?: boolean): void;
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

'all' \| EPCB\_NetEventType


</td><td>

事件类型


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: EPCB\_NetEventType, props: \[{ net: string; }\]) =&gt; void \| Promise&lt;void&gt;


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

网络选中事件仅

①在过滤面板选中网络选项并在画布选中网络时

②在工程设计 -<!-- -->&gt; 网络内选中网络时

会被触发

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### addprimitiveeventlistener

# PCB\_Event.addPrimitiveEventListener() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

新增图元事件监听

## Signature

```typescript
addPrimitiveEventListener(id: string, eventType: 'all' | EPCB_PrimitiveEventType, callFn: (eventType: EPCB_PrimitiveEventType, props: [
        {
            primitiveId: string;
            primitiveType: EPCB_PrimitiveType;
            net?: string;
            designator?: string;
            parentComponentPrimitiveId?: string;
            parentComponentDesignator?: string;
        }
    ]) => void | Promise<void>, onlyOnce?: boolean): void;
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

'all' \| EPCB\_PrimitiveEventType


</td><td>

事件类型


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: EPCB\_PrimitiveEventType, props: \[ { primitiveId: string; primitiveType: [EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)<!-- -->; net?: string; designator?: string; parentComponentPrimitiveId?: string; parentComponentDesignator?: string; } \]) =&gt; void \| Promise&lt;void&gt;


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

### iseventlisteneralreadyexist

# PCB\_Event.isEventListenerAlreadyExist() method

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

# PCB\_Event.removeEventListener() method

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
