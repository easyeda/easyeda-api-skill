# SYS\_IFrame class

System / iframe window class

## Signature

```typescript
export class SYS_IFrame 
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

[closeIFrame(id)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** Close iframe window


</td></tr>
<tr><td>

[hideIFrame(id)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** Hide iframe window


</td></tr>
<tr><td>

[isIFrameAlreadyExist(id)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** Whether the iframe already exists


</td></tr>
<tr><td>

[openIFrame(htmlFileName, width, height, id, props)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** Open iframe window


</td></tr>
<tr><td>

[showIFrame(id)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** Show iframe window


</td></tr>
</tbody></table>

---

## 方法详情

### closeiframe

# SYS\_IFrame.closeIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Close iframe window

## Signature

```typescript
public closeIFrame(id?: string): Promise<boolean>;
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

_(Optional)_ Iframe window ID. If not passed in, all iframe windows opened by this extension will be closed


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Close the iframe window with the specified ID

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### hideiframe

# SYS\_IFrame.hideIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Hide iframe window

## Signature

```typescript
public hideIFrame(id?: string): Promise<boolean>;
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

_(Optional)_ Iframe window ID. If not passed in, all iframe windows associated with the extension will be hidden


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API is result-oriented: If the specified iframe window is not found, the API returns `false`<!-- -->; if the iframe window was already hidden before the operation, the API returns `true`

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### isiframealreadyexist

# SYS\_IFrame.isIFrameAlreadyExist() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Whether the iframe already exists

## Signature

```typescript
public isIFrameAlreadyExist(id: string): Promise<boolean>;
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

Iframe ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether Exists

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error` ADD since EDA v4.2

### openiframe

# SYS\_IFrame.openIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open iframe window

## Signature

```typescript
public openIFrame(htmlFileName: string, width?: number, height?: number, id?: string, props?: { maximizeButton?: undefined | false | true; minimizeButton?: undefined | false | true; minimizeStyle?: undefined | 'collapsed' | 'constricted'; buttonCallbackFn?: undefined | ((button: 'close' | 'minimize' | 'maximize') => void | Promise<void>); onBeforeCloseCallFn?: undefined | (() => boolean | undefined | Promise<boolean | undefined>); grayscaleMask?: undefined | false | true; title?: undefined | string; x?: undefined | number; y?: undefined | number }): Promise<boolean>;
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

htmlFileName


</td><td>

string


</td><td>

The path of the HTML file to load within the extension package, starting from the extension root directory, e.g. `/iframe/index.html`


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

_(Optional)_ Width of the iframe window


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

_(Optional)_ Height of the iframe window


</td></tr>
<tr><td>

id


</td><td>

string


</td><td>

_(Optional)_ Iframe window ID, used to close the iframe window


</td></tr>
<tr><td>

props


</td><td>

{ maximizeButton?: undefined \| false \| true; minimizeButton?: undefined \| false \| true; minimizeStyle?: undefined \| 'collapsed' \| 'constricted'; buttonCallbackFn?: undefined \| ((button: 'close' \| 'minimize' \| 'maximize') =&gt; void \| Promise&lt;void&gt;); onBeforeCloseCallFn?: undefined \| (() =&gt; boolean \| undefined \| Promise&lt;boolean \| undefined&gt;); grayscaleMask?: undefined \| false \| true; title?: undefined \| string; x?: undefined \| number; y?: undefined \| number }


</td><td>

_(Optional)_ Other parameters


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API can only be called by extension packages. Users need to include an HTML file for embedding in the extension package;

After this API is called, a Dialog window will open. The title of the Dialog window is the `<title>` of the HTML file, and the title bar has a close button;

The body is an iframe. `width` and `height` are the width and height of the iframe in the body;

The iframe needs to display the content of `htmlFileName`<!-- -->. This HTML is obtained from the extension package and has been stored in IndexedDB during installation

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### showiframe

# SYS\_IFrame.showIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Show iframe window

## Signature

```typescript
public showIFrame(id?: string): Promise<boolean>;
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

_(Optional)_ Iframe window ID. If not passed in, all iframe windows associated with the extension will be shown


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API is result-oriented: If the specified iframe window is not found, the API returns `false`<!-- -->; if the iframe window was already in the shown state before the operation, the API returns `true`

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`
