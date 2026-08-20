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
