# SCH\_Event class

原理图 &amp; 符号 / 事件类

## 签名

```typescript
declare class SCH_Event 
```

## 备注

注册事件回调


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[addMouseEventListener(id, eventType, callFn, onlyOnce)](./SCH_Event.md)


</td><td>


</td><td>

新增鼠标事件监听


</td></tr>
<tr><td>

[addPrimitiveEventListener(id, eventType, callFn, onlyOnce)](./SCH_Event.md)


</td><td>


</td><td>

**_(BETA)_** 新增图元事件监听


</td></tr>
<tr><td>

[addSimulationEnginePullEventListener(id, eventType, callFn)](./SCH_Event.md)


</td><td>


</td><td>

**_(BETA)_** 注册仿真引擎拉取事件监听


</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./SCH_Event.md)


</td><td>


</td><td>

查询事件监听是否存在


</td></tr>
<tr><td>

[removeEventListener(id)](./SCH_Event.md)


</td><td>


</td><td>

移除事件监听


</td></tr>
</tbody></table>

---

## 方法详情

### addmouseeventlistener

# SCH\_Event.addMouseEventListener() method

新增鼠标事件监听

## 签名

```typescript
addMouseEventListener(id: string, eventType: 'all' | ESCH_MouseEventType, callFn: (eventType: ESCH_MouseEventType) => void | Promise<void>, onlyOnce?: boolean): void;
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

事件 ID，用以防止重复注册事件


</td></tr>
<tr><td>

eventType


</td><td>

'all' \| [ESCH\_MouseEventType](../enums/ESCH_MouseEventType.md)


</td><td>

事件类型


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [ESCH\_MouseEventType](../enums/ESCH_MouseEventType.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;


</td><td>

事件触发时的回调函数


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_（可选）_ 是否仅监听一次


</td></tr>
</tbody></table>



## 返回值

void

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### addprimitiveeventlistener

# SCH\_Event.addPrimitiveEventListener() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

新增图元事件监听

## 签名

```typescript
addPrimitiveEventListener(id: string, eventType: 'all' | ESCH_PrimitiveEventType, callFn: (eventType: ESCH_PrimitiveEventType, props: {
        primitiveIds: Array<string>;
    }) => void | Promise<void>, onlyOnce?: boolean): void;
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

事件 ID，用以防止重复注册事件


</td></tr>
<tr><td>

eventType


</td><td>

'all' \| [ESCH\_PrimitiveEventType](../enums/ESCH_PrimitiveEventType.md)


</td><td>

事件类型


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [ESCH\_PrimitiveEventType](../enums/ESCH_PrimitiveEventType.md)<!-- -->, props: { primitiveIds: Array&lt;string&gt;; }) =&gt; void \| Promise&lt;void&gt;


</td><td>

事件触发时的回调函数


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>

_（可选）_ 是否仅监听一次


</td></tr>
</tbody></table>



## 返回值

void

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### addsimulationenginepulleventlistener

# SCH\_Event.addSimulationEnginePullEventListener() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

注册仿真引擎拉取事件监听

## 签名

```typescript
addSimulationEnginePullEventListener(id: string, eventType: 'all', callFn: (eventType: ESCH_DynamicSimulationEnginePullEventType | ESCH_SpiceSimulationEnginePullEventType, props: {
        [key: string]: any;
    }) => void | Promise<void>): void;
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

事件 ID，用以防止重复注册事件


</td></tr>
<tr><td>

eventType


</td><td>

'all'


</td><td>

事件类型


</td></tr>
<tr><td>

callFn


</td><td>

(eventType: [ESCH\_DynamicSimulationEnginePullEventType](../enums/ESCH_DynamicSimulationEnginePullEventType.md) \| [ESCH\_SpiceSimulationEnginePullEventType](../enums/ESCH_SpiceSimulationEnginePullEventType.md)<!-- -->, props: { \[key: string\]: any; }) =&gt; void \| Promise&lt;void&gt;


</td><td>

事件触发时的回调函数


</td></tr>
</tbody></table>



## 返回值

void

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### iseventlisteneralreadyexist

# SCH\_Event.isEventListenerAlreadyExist() method

查询事件监听是否存在

## 签名

```typescript
isEventListenerAlreadyExist(id: string): boolean;
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

事件 ID


</td></tr>
</tbody></table>



## 返回值

boolean

事件监听是否存在

### removeeventlistener

# SCH\_Event.removeEventListener() method

移除事件监听

## 签名

```typescript
removeEventListener(id: string): boolean;
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

事件 ID


</td></tr>
</tbody></table>



## 返回值

boolean

是否移除指定事件监听
