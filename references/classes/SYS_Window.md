# SYS\_Window class

系统 / 窗口类

## Signature

```typescript
declare class SYS_Window 
```

## Remarks

为了保证安全性，仅提供有限的窗口跳转与监听支持，更多操作请使用内联框架窗口 [SYS\_IFrame](./SYS_IFrame.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[addEventListener(type, listener, options)](./SYS_Window.md)


</td><td>


</td><td>

新增事件监听


</td></tr>
<tr><td>

[getCurrentTheme()](./SYS_Window.md)


</td><td>


</td><td>

获取当前主题


</td></tr>
<tr><td>

[getUrlAnchor()](./SYS_Window.md)


</td><td>


</td><td>

获取 URL 锚点


</td></tr>
<tr><td>

[getUrlParam(key)](./SYS_Window.md)


</td><td>


</td><td>

获取 URL 参数


</td></tr>
<tr><td>

[open(url, target)](./SYS_Window.md)


</td><td>


</td><td>

打开资源窗口


</td></tr>
<tr><td>

[openUI(uiName, args)](./SYS_Window.md)


</td><td>


</td><td>

打开 UI 窗口


</td></tr>
<tr><td>

[removeEventListener(removableObject)](./SYS_Window.md)


</td><td>


</td><td>

移除事件监听


</td></tr>
<tr><td>

[urlPushState(url)](./SYS_Window.md)


</td><td>


</td><td>

追加新的 URL 历史记录栈信息


</td></tr>
<tr><td>

[urlReplaceState(url)](./SYS_Window.md)


</td><td>


</td><td>

修改当前的 URL 历史记录栈信息


</td></tr>
</tbody></table>

---

## 方法详情

### addeventlistener

# SYS\_Window.addEventListener() method

新增事件监听

## Signature

```typescript
addEventListener(type: ESYS_WindowEventType, listener: (ev: any) => any, options?: {
        capture?: boolean;
        once?: boolean;
        passive?: boolean;
        signal?: AbortSignal;
    }): ISYS_WindowEventListenerRemovableObject | undefined;
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

type


</td><td>

[ESYS\_WindowEventType](../enums/ESYS_WindowEventType.md)


</td><td>

事件类型，当前支持 `blur` `focus`


</td></tr>
<tr><td>

listener


</td><td>

(ev: any) =&gt; any


</td><td>

事件监听回调


</td></tr>
<tr><td>

options


</td><td>

\{ capture?: boolean; once?: boolean; passive?: boolean; signal?: AbortSignal; \}


</td><td>

_(Optional)_ 可选参数


</td></tr>
</tbody></table>



## Returns

[ISYS\_WindowEventListenerRemovableObject](../interfaces/ISYS_WindowEventListenerRemovableObject.md) \| undefined

事件监听方法，用于移除事件监听，如若为 `undefined` 则表示创建事件监听失败

### getcurrenttheme

# SYS\_Window.getCurrentTheme() method

获取当前主题

## Signature

```typescript
getCurrentTheme(): Promise<ESYS_Theme>;
```


## Returns

Promise&lt;[ESYS\_Theme](../enums/ESYS_Theme.md)<!-- -->&gt;

当前主题

## Remarks

获取当前 EDA 主题，\*\*浅色\*\* 或 \*\*深色\*\*

### geturlanchor

# SYS\_Window.getUrlAnchor() method

获取 URL 锚点

## Signature

```typescript
getUrlAnchor(): string;
```


## Returns

string

URL 锚点值

### geturlparam

# SYS\_Window.getUrlParam() method

获取 URL 参数

## Signature

```typescript
getUrlParam(key: string): string | null;
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

key


</td><td>

string


</td><td>

参数名


</td></tr>
</tbody></table>



## Returns

string \| null

参数值

### open

# SYS\_Window.open() method

打开资源窗口

## Signature

```typescript
open(url: string, target?: ESYS_WindowOpenTarget): void;
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

url


</td><td>

string


</td><td>

欲加载资源的 URL 或路径


</td></tr>
<tr><td>

target


</td><td>

[ESYS\_WindowOpenTarget](../enums/ESYS_WindowOpenTarget.md)


</td><td>

_(Optional)_ 上下文目标


</td></tr>
</tbody></table>



## Returns

void

### openui

# SYS\_Window.openUI() method

打开 UI 窗口

## Signature

```typescript
openUI(uiName: string, args?: {
        [key: string]: any;
    }): Promise<void>;
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

uiName


</td><td>

string


</td><td>

UI 名称


</td></tr>
<tr><td>

args


</td><td>

\{ \[key: string\]: any; \}


</td><td>

_(Optional)_ 可选参数对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知

### removeeventlistener

# SYS\_Window.removeEventListener() method

移除事件监听

## Signature

```typescript
removeEventListener(removableObject: ISYS_WindowEventListenerRemovableObject): void;
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

removableObject


</td><td>

[ISYS\_WindowEventListenerRemovableObject](../interfaces/ISYS_WindowEventListenerRemovableObject.md)


</td><td>

窗口事件监听可移除对象


</td></tr>
</tbody></table>



## Returns

void

### urlpushstate

# SYS\_Window.urlPushState() method

追加新的 URL 历史记录栈信息

## Signature

```typescript
urlPushState(url: string): void;
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

url


</td><td>

string


</td><td>

URL


</td></tr>
</tbody></table>



## Returns

void

### urlreplacestate

# SYS\_Window.urlReplaceState() method

修改当前的 URL 历史记录栈信息

## Signature

```typescript
urlReplaceState(url: string): void;
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

url


</td><td>

string


</td><td>

URL


</td></tr>
</tbody></table>



## Returns

void
