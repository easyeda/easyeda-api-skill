# SYS\_Window class

System / window class

## Signature

```typescript
export class SYS_Window 
```

## Remarks

For security, only limited window navigation and listening support is provided. For more operations, use the iframe window [SYS\_IFrame](./SYS_IFrame.md)


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

Add an event listener


</td></tr>
<tr><td>

[getCurrentTheme()](./SYS_Window.md)


</td><td>


</td><td>

Get Current theme


</td></tr>
<tr><td>

[getUrlAnchor()](./SYS_Window.md)


</td><td>


</td><td>

Get the URL anchor


</td></tr>
<tr><td>

[getUrlParam(key)](./SYS_Window.md)


</td><td>


</td><td>

Get URL parameter


</td></tr>
<tr><td>

[getViewportSize()](./SYS_Window.md)


</td><td>


</td><td>

Get the current viewport size of the page


</td></tr>
<tr><td>

[hideStartPageQuickStartItems(items)](./SYS_Window.md)


</td><td>


</td><td>

Hide start page quick start items


</td></tr>
<tr><td>

[hideStartPageSupportFloatBarItems()](./SYS_Window.md)


</td><td>


</td><td>

Hide the start page support information floating components


</td></tr>
<tr><td>

[open(url, target)](./SYS_Window.md)


</td><td>


</td><td>

Open a resource window


</td></tr>
<tr><td>

[openUI(uiName, args)](./SYS_Window.md)


</td><td>


</td><td>

Open UI window


</td></tr>
<tr><td>

[removeEventListener(removableObject)](./SYS_Window.md)


</td><td>


</td><td>

Remove Event listener


</td></tr>
<tr><td>

[urlPushState(url)](./SYS_Window.md)


</td><td>


</td><td>

Append new URL history stack information


</td></tr>
<tr><td>

[urlReplaceState(url)](./SYS_Window.md)


</td><td>


</td><td>

Modify the current URL history stack information


</td></tr>
</tbody></table>

---

## 方法详情

### addeventlistener

# SYS\_Window.addEventListener() method

Add an event listener

## Signature

```typescript
public addEventListener(type: ESYS_WindowEventType, listener: (ev: any) => any, options?: { capture?: undefined | false | true; once?: undefined | false | true; passive?: undefined | false | true; signal?: undefined | AbortSignal }): ISYS_WindowEventListenerRemovableObject | undefined;
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

Event type, current support `blur` `focus`


</td></tr>
<tr><td>

listener


</td><td>

(ev: any) =&gt; any


</td><td>

Event listener callback


</td></tr>
<tr><td>

options


</td><td>

\{ capture?: undefined \| false \| true; once?: undefined \| false \| true; passive?: undefined \| false \| true; signal?: undefined \| AbortSignal \}


</td><td>

_(Optional)_ Optional parameters


</td></tr>
</tbody></table>



## Returns

[ISYS\_WindowEventListenerRemovableObject](../interfaces/ISYS_WindowEventListenerRemovableObject.md) \| undefined

Event listener method, used to remove the event listener. If it is `undefined`<!-- -->, it means creating the event listener failed

## Example


```javascript
// 1. 注册 focus 监听（真实场景由用户切换窗口焦点触发，这里用合成事件模拟）
const removable = eda.sys_Window.addEventListener('focus', () => {
  console.log('窗口获得焦点');
});

// 2. 检查返回的可移除对象，其中的 type 字段记录了监听的事件类型
console.log('监听注册成功：', removable !== undefined, '，事件类型：', removable.type);

// 3. 模拟一次获得焦点事件，回调同步触发
window.dispatchEvent(new Event('focus'));

// 4. 注销监听，恢复原状
eda.sys_Window.removeEventListener(removable);
console.log('监听已注销');
```

### getcurrenttheme

# SYS\_Window.getCurrentTheme() method

Get Current theme

## Signature

```typescript
public getCurrentTheme(): Promise<ESYS_Theme>;
```


## Returns

Promise&lt;[ESYS\_Theme](../enums/ESYS_Theme.md)<!-- -->&gt;

Current theme

## Remarks

Get the current EDA theme, \*\*light\*\* or \*\*dark\*\*

## Example


```javascript
// 1. 获取当前主题（异步方法，需要 await）
const theme = await eda.sys_Window.getCurrentTheme();

// 2. 展示结果
console.log('当前主题：', theme === 'light' ? '浅色（light）' : '深色（dark）');
```

### geturlanchor

# SYS\_Window.getUrlAnchor() method

Get the URL anchor

## Signature

```typescript
public getUrlAnchor(): string;
```


## Returns

string

URL anchor value

## Example


```javascript
// 1. 备份当前完整地址（用于演示后还原）
const originalHref = location.href;

// 2. 写入一个示例锚点（地址栏会临时变成示例锚点）
eda.sys_Window.urlPushState(location.href.split('#')[0] + '#嘉立创示例_锚点');

// 3. 读取锚点（返回的是编码后的字符串，解码后展示）
const anchor = decodeURIComponent(eda.sys_Window.getUrlAnchor());
console.log('当前锚点：', anchor);

// 4. 还原原地址，保证编辑器锚点状态不受影响
eda.sys_Window.urlReplaceState(originalHref);
console.log('地址已还原');
```

### geturlparam

# SYS\_Window.getUrlParam() method

Get URL parameter

## Signature

```typescript
public getUrlParam(key: string): string | null;
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

Parameter name


</td></tr>
</tbody></table>



## Returns

string \| null

Parameter value

## Example


```javascript
// 1. 备份当前完整地址（用于演示后还原）
const originalHref = location.href;

// 2. 用 URL 对象追加示例参数并写入地址栏
const url = new URL(location.href);
url.searchParams.set('嘉立创示例_参数', '演示值');
eda.sys_Window.urlPushState(url.href);

// 3. 读取刚写入的参数，以及一个不存在的参数
console.log('参数值：', eda.sys_Window.getUrlParam('嘉立创示例_参数'));
console.log('不存在的参数返回：', eda.sys_Window.getUrlParam('嘉立创示例_不存在'));

// 4. 还原原地址
eda.sys_Window.urlReplaceState(originalHref);
console.log('地址已还原');
```

### getviewportsize

# SYS\_Window.getViewportSize() method

Get the current viewport size of the page

## Signature

```typescript
public getViewportSize(): { width: number; height: number };
```


## Returns

\{ width: number; height: number \}

Viewport width and height (in pixels)

## Remarks

ADD since EDA v3.2.162

## Example


```javascript
// 1. 获取视口大小（同步方法，直接取值）
const size = eda.sys_Window.getViewportSize();

// 2. 展示宽高
console.log('视口宽：', size.width, 'px，视口高：', size.height, 'px');
```

### hidestartpagequickstartitems

# SYS\_Window.hideStartPageQuickStartItems() method

Hide start page quick start items

## Signature

```typescript
public hideStartPageQuickStartItems(items: Array<ESYS_StartPageQuickStartItem>): Promise<boolean>;
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

items


</td><td>

Array&lt;[ESYS\_StartPageQuickStartItem](../enums/ESYS_StartPageQuickStartItem.md)<!-- -->&gt;


</td><td>

Array of quick start items to hide


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether all items were hidden successfully (`false` is returned if unknown items or already-hidden items exist)

## Remarks

Hide the specified items in the quick start module of the start page

Note 1: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

Note 2: This API is dedicated to the private deployment edition. Calling it in other editions will always `throw Error` ADD since EDA v3.2.162

### hidestartpagesupportfloatbaritems

# SYS\_Window.hideStartPageSupportFloatBarItems() method

Hide the start page support information floating components

## Signature

```typescript
public hideStartPageSupportFloatBarItems(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether Hide successful

## Remarks

Hide the floating components on the right side of the start page (WeChat, customer service, phone, feedback)

Note 1: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

Note 2: This API is dedicated to the private deployment edition. Calling it in other editions will always `throw Error` ADD since EDA v3.2.162

### open

# SYS\_Window.open() method

Open a resource window

## Signature

```typescript
public open(url: string, target?: ESYS_WindowOpenTarget): void;
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

URL or path of the resource to load


</td></tr>
<tr><td>

target


</td><td>

[ESYS\_WindowOpenTarget](../enums/ESYS_WindowOpenTarget.md)


</td><td>

_(Optional)_ Context target


</td></tr>
</tbody></table>



## Returns

void

## Example


```javascript
// 1. 在新标签页打开目标地址（同步方法，无返回值）
eda.sys_Window.open('http://localhost:49620/health', '_blank');

// 2. 打开的标签页由用户自行关闭
console.log('已在新标签页打开资源窗口');
```

### openui

# SYS\_Window.openUI() method

Open UI window

## Signature

```typescript
public openUI(uiName: string, args?: Record<string, any>): Promise<void>;
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

UI name


</td></tr>
<tr><td>

args


</td><td>

Record&lt;string, any&gt;


</td><td>

_(Optional)_ Optional parameter object


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

Non-public API usage notice: This API is provided as-is without additional documentation for parameters. Parameters may be changed in a breaking manner in any version without notice.

## Example


```javascript
// 1. 打开指定名称的内置 UI 窗口（异步方法，需要 await；这里用占位名称演示调用方式）
await eda.sys_Window.openUI('嘉立创示例_UI窗口');

// 2. 调用完成（未知 uiName 静默无效，不抛错）
console.log('openUI 调用完成');
```

### removeeventlistener

# SYS\_Window.removeEventListener() method

Remove Event listener

## Signature

```typescript
public removeEventListener(removableObject: ISYS_WindowEventListenerRemovableObject): void;
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

Window event listener can remove object


</td></tr>
</tbody></table>



## Returns

void

## Example


```javascript
// 1. 先注册一个 blur 监听，拿到可移除对象（removeEventListener 的入参）
let fired = 0;
const removable = eda.sys_Window.addEventListener('blur', () => {
  fired++;
});
console.log('已注册 blur 监听，事件类型：', removable.type);

// 2. 移除监听
eda.sys_Window.removeEventListener(removable);

// 3. 再触发一次失去焦点事件，验证回调不再执行
window.dispatchEvent(new Event('blur'));
console.log('移除后回调触发次数：', fired);
```

### urlpushstate

# SYS\_Window.urlPushState() method

Append new URL history stack information

## Signature

```typescript
public urlPushState(url: string): void;
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

## Example


```javascript
// 1. 备份当前完整地址
const originalHref = location.href;

// 2. 追加一条带示例锚点的新历史记录
eda.sys_Window.urlPushState(location.href.split('#')[0] + '#嘉立创示例_新状态');

// 3. 验证地址栏已更新为新的锚点
console.log('追加后的锚点：', decodeURIComponent(eda.sys_Window.getUrlAnchor()));

// 4. 还原地址栏
eda.sys_Window.urlReplaceState(originalHref);
console.log('地址已还原');
```

### urlreplacestate

# SYS\_Window.urlReplaceState() method

Modify the current URL history stack information

## Signature

```typescript
public urlReplaceState(url: string): void;
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

## Example


```javascript
// 1. 备份当前完整地址
const originalHref = location.href;

// 2. 把当前历史记录的地址改写为带示例锚点的地址
eda.sys_Window.urlReplaceState(location.href.split('#')[0] + '#嘉立创示例_替换状态');

// 3. 验证改写生效（getUrlAnchor 返回编码后的锚点，解码后展示）
console.log('改写后的锚点：', decodeURIComponent(eda.sys_Window.getUrlAnchor()));

// 4. 改回原地址（replaceState 不新增历史记录，此处完全还原）
eda.sys_Window.urlReplaceState(originalHref);
console.log('地址已还原');
```
