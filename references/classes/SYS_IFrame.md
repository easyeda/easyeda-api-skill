# SYS\_IFrame class

系统 / 内联框架窗口类

## Signature

```typescript
declare class SYS_IFrame 
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

**_(BETA)_** 关闭内联框架窗口


</td></tr>
<tr><td>

[hideIFrame(id)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** 隐藏内联框架窗口


</td></tr>
<tr><td>

[openIFrame(htmlFileName, width, height, id, props)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** 打开内联框架窗口


</td></tr>
<tr><td>

[showIFrame(id)](./SYS_IFrame.md)


</td><td>


</td><td>

**_(BETA)_** 显示内联框架窗口


</td></tr>
</tbody></table>

---

## 方法详情

### closeiframe

# SYS\_IFrame.closeIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

关闭内联框架窗口

## Signature

```typescript
closeIFrame(id?: string): Promise<boolean>;
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

_(Optional)_ 内联框架窗口 ID，如若传入 `undefined`<!-- -->，将关闭由本扩展打开的所有内联框架窗口


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

关闭指定 ID 的内联框架窗口

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### hideiframe

# SYS\_IFrame.hideIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

隐藏内联框架窗口

## Signature

```typescript
hideIFrame(id?: string): Promise<boolean>;
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

_(Optional)_ 内联框架窗口 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

本接口为结果导向的： 如若未找到指定内联框架窗口，接口将会返回 `false`<!-- -->； 如若在执行操作前该内联框架窗口已处于隐藏状态，接口将会返回 `true`

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### openiframe

# SYS\_IFrame.openIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

打开内联框架窗口

## Signature

```typescript
openIFrame(htmlFileName: string, width?: number, height?: number, id?: string, props?: {
        maximizeButton?: boolean;
        minimizeButton?: boolean;
        minimizeStyle?: 'collapsed' | 'constricted';
        buttonCallbackFn?: (button: 'close' | 'minimize' | 'maximize') => void | Promise<void>;
        onBeforeCloseCallFn?: () => boolean | undefined | Promise<boolean | undefined>;
        grayscaleMask?: boolean;
        title?: string;
    }): Promise<boolean>;
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

需要加载的 HTML 文件在扩展包内的路径，从扩展根目录起始，例如 `/iframe/index.html`


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

_(Optional)_ 内联框架窗口的宽度


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

_(Optional)_ 内联框架窗口的高度


</td></tr>
<tr><td>

id


</td><td>

string


</td><td>

_(Optional)_ 内联框架窗口 ID，用于关闭内联框架窗口


</td></tr>
<tr><td>

props


</td><td>

{ maximizeButton?: boolean; minimizeButton?: boolean; minimizeStyle?: 'collapsed' \| 'constricted'; buttonCallbackFn?: (button: 'close' \| 'minimize' \| 'maximize') =&gt; void \| Promise&lt;void&gt;; onBeforeCloseCallFn?: () =&gt; boolean \| undefined \| Promise&lt;boolean \| undefined&gt;; grayscaleMask?: boolean; title?: string; }


</td><td>

_(Optional)_ 其它参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

本接口仅扩展包允许调用，用户需要在扩展包内包含用于内联的 HTML 文件；

本接口调用后将会打开一个 Dialog 窗口，该 Dialog 窗口的标题为 HTML 文件的 `<title>`<!-- -->，标题栏有关闭按钮；

正文部分为内联框架，`width` 和 `height` 均为正文部分内联框架的宽高；

内联框架需要展示 `htmlFileName` 的内容，该 HTML 从扩展包内获取，并已在安装时被存储至 IndexedDB 中

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### showiframe

# SYS\_IFrame.showIFrame() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

显示内联框架窗口

## Signature

```typescript
showIFrame(id?: string): Promise<boolean>;
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

_(Optional)_ 内联框架窗口 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

本接口为结果导向的： 如若未找到指定内联框架窗口，接口将会返回 `false`<!-- -->； 如若在执行操作前该内联框架窗口已处于显示状态，接口将会返回 `true`

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
