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

## Example


```javascript
// 1. 打开两个内联框架窗口（自建 fixture，演示按 ID 定向关闭）
await eda.sys_IFrame.openIFrame('/extension.json', 300, 200, '嘉立创示例_窗口A', { title: '嘉立创示例 窗口A' });
await eda.sys_IFrame.openIFrame('/extension.json', 300, 200, '嘉立创示例_窗口B', { title: '嘉立创示例 窗口B' });
console.log('已打开两个窗口：嘉立创示例_窗口A / 嘉立创示例_窗口B');

// 2. 按 ID 关闭指定窗口
const closedById = await eda.sys_IFrame.closeIFrame('嘉立创示例_窗口A');
console.log('按 ID 关闭窗口 A 结果：', closedById);

// 3. 不传 id，关闭本扩展打开的全部剩余窗口（清理窗口 B，还原界面）
const closedAll = await eda.sys_IFrame.closeIFrame();
console.log('关闭全部剩余窗口结果：', closedAll);

// 4. 对已不存在的窗口再关闭一次，验证幂等语义（返回 true 而非 false）
const closedAgain = await eda.sys_IFrame.closeIFrame('嘉立创示例_窗口A');
console.log('重复关闭已关窗口结果：', closedAgain);
```

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

## Example


```javascript
// 1. 打开一个内联框架窗口（自建 fixture）
const opened = await eda.sys_IFrame.openIFrame('/extension.json', 320, 200, '嘉立创示例_隐藏演示', {
  title: '嘉立创示例 隐藏演示窗口',
});
console.log('打开结果：', opened);

// 2. 隐藏该窗口（窗口从界面消失，但未被销毁）
const hidden = await eda.sys_IFrame.hideIFrame('嘉立创示例_隐藏演示');
console.log('隐藏结果：', hidden);

// 3. 对已隐藏的窗口再次隐藏，验证幂等语义（返回 true）
const hideAgain = await eda.sys_IFrame.hideIFrame('嘉立创示例_隐藏演示');
console.log('重复隐藏结果：', hideAgain);

// 4. 对不存在的窗口 ID 隐藏，结果导向返回 false（不抛错）
const hideMissing = await eda.sys_IFrame.hideIFrame('嘉立创示例_不存在的窗口');
console.log('不存在的窗口 ID →', hideMissing);

// 5. 关闭隐藏状态的窗口还原界面（隐藏的窗口可直接关闭）
const closed = await eda.sys_IFrame.closeIFrame('嘉立创示例_隐藏演示');
console.log('关闭隐藏窗口结果：', closed);
```

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

## Example


```javascript
// 1. 打开一个带标题和最大化/最小化按钮的内联框架窗口（自建 ID 便于后续定位）
const opened = await eda.sys_IFrame.openIFrame('/extension.json', 360, 240, '嘉立创示例_窗口', {
  title: '嘉立创示例 内联框架窗口',
  minimizeButton: true,
  maximizeButton: true,
  grayscaleMask: false,
});
console.log('打开结果：', opened);

// 2. 关闭刚才打开的窗口还原界面（自建自删，保证案例可重复运行）
const closed = await eda.sys_IFrame.closeIFrame('嘉立创示例_窗口');
console.log('关闭结果：', closed);
```

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

## Example


```javascript
// 1. 打开一个内联框架窗口（自建 fixture）
const opened = await eda.sys_IFrame.openIFrame('/extension.json', 320, 200, '嘉立创示例_显示演示', {
  title: '嘉立创示例 显示演示窗口',
});
console.log('打开结果：', opened);

// 2. 先隐藏窗口，制造"待恢复"状态
await eda.sys_IFrame.hideIFrame('嘉立创示例_显示演示');
console.log('已隐藏窗口，准备恢复显示');

// 3. 显示该窗口（从隐藏状态恢复，界面重新可见）
const shown = await eda.sys_IFrame.showIFrame('嘉立创示例_显示演示');
console.log('显示结果：', shown);

// 4. 对已显示的窗口再次显示，验证幂等语义（返回 true）
const showAgain = await eda.sys_IFrame.showIFrame('嘉立创示例_显示演示');
console.log('重复显示结果：', showAgain);

// 5. 对不存在的窗口 ID 显示，结果导向返回 false（不抛错）
const showMissing = await eda.sys_IFrame.showIFrame('嘉立创示例_不存在的窗口');
console.log('不存在的窗口 ID →', showMissing);

// 6. 关闭窗口还原界面
const closed = await eda.sys_IFrame.closeIFrame('嘉立创示例_显示演示');
console.log('关闭结果：', closed);
```
