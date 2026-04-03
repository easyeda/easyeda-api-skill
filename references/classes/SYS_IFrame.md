# SYS\_IFrame class

系统 / 内联框架窗口类

## 签名

```typescript
declare class SYS_IFrame 
```

## 备注


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

关闭内联框架窗口

## 签名

```typescript
closeIFrame(id?: string): Promise<boolean>;
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

_（可选）_ 内联框架窗口 ID，如若传入 `undefined`<!-- -->，将关闭由本扩展打开的所有内联框架窗口


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

关闭指定 ID 的内联框架窗口

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### hideiframe

# SYS\_IFrame.hideIFrame() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

隐藏内联框架窗口

## 签名

```typescript
hideIFrame(id?: string): Promise<boolean>;
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

_（可选）_ 内联框架窗口 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

本接口为结果导向的： 如若未找到指定内联框架窗口，接口将会返回 `false`<!-- -->； 如若在执行操作前该内联框架窗口已处于隐藏状态，接口将会返回 `true`

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### openiframe

# SYS\_IFrame.openIFrame() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

打开内联框架窗口

## 签名

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

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

_（可选）_ 内联框架窗口的宽度


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

_（可选）_ 内联框架窗口的高度


</td></tr>
<tr><td>

id


</td><td>

string


</td><td>

_（可选）_ 内联框架窗口 ID，用于关闭内联框架窗口


</td></tr>
<tr><td>

props


</td><td>

{ maximizeButton?: boolean; minimizeButton?: boolean; minimizeStyle?: 'collapsed' \| 'constricted'; buttonCallbackFn?: (button: 'close' \| 'minimize' \| 'maximize') =&gt; void \| Promise&lt;void&gt;; onBeforeCloseCallFn?: () =&gt; boolean \| undefined \| Promise&lt;boolean \| undefined&gt;; grayscaleMask?: boolean; title?: string; }


</td><td>

_（可选）_ 其它参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

本接口仅扩展包允许调用，用户需要在扩展包内包含用于内联的 HTML 文件；

本接口调用后将会打开一个 Dialog 窗口，该 Dialog 窗口的标题为 HTML 文件的 `<title>`<!-- -->，标题栏有关闭按钮；

正文部分为内联框架，`width` 和 `height` 均为正文部分内联框架的宽高；

内联框架需要展示 `htmlFileName` 的内容，该 HTML 从扩展包内获取，并已在安装时被存储至 IndexedDB 中

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### showiframe

# SYS\_IFrame.showIFrame() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

显示内联框架窗口

## 签名

```typescript
showIFrame(id?: string): Promise<boolean>;
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

_（可选）_ 内联框架窗口 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

本接口为结果导向的： 如若未找到指定内联框架窗口，接口将会返回 `false`<!-- -->； 如若在执行操作前该内联框架窗口已处于显示状态，接口将会返回 `true`

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
