# SYS\_ShortcutKey class

System / shortcut key class

## Signature

```typescript
class SYS_ShortcutKey
```

## Remarks

Register and manage system shortcut keys

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[get(id)](./SYS_ShortcutKey.md)

</td><td>

</td><td>

**_(BETA)_** 获取快捷键数据

</td></tr>
<tr><td>

[getAll()](./SYS_ShortcutKey.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有快捷键数据

</td></tr>
<tr><td>

[getShortcutKeys(includeSystem)](./SYS_ShortcutKey.md)

</td><td>

</td><td>

**_(BETA)_** Query shortcut key list

</td></tr>
<tr><td>

[register(id, props)](./SYS_ShortcutKey.md)

</td><td>

</td><td>

**_(BETA)_** 注册快捷键

</td></tr>
<tr><td>

[registerShortcutKey(shortcutKey, title, callbackFn, documentType, scene)](./SYS_ShortcutKey.md)

</td><td>

</td><td>

**_(BETA)_** Register shortcut key

</td></tr>
<tr><td>

[unregister(id)](./SYS_ShortcutKey.md)

</td><td>

</td><td>

**_(BETA)_** 反注册快捷键

</td></tr>
<tr><td>

[unregisterShortcutKey(shortcutKey)](./SYS_ShortcutKey.md)

</td><td>

</td><td>

**_(BETA)_** Unregister a shortcut key

</td></tr>
</tbody></table>

---

## 方法详情

### get

# SYS\_ShortcutKey.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取快捷键数据

## Signature

```typescript
function get(id: string): ISYS_ShortcutKeyDataWithUserDefinedShortcutKey | undefined;
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

快捷键 ID，如需获取其它扩展注册的快捷键，请在前缀处拼接扩展 UUID，格式为：`<扩展 UUID>.<快捷键 ID>`

</td></tr>
</tbody></table>

## Returns

[ISYS\_ShortcutKeyDataWithUserDefinedShortcutKey](../interfaces/ISYS_ShortcutKeyDataWithUserDefinedShortcutKey.md) \| undefined

获取到的快捷键数据

## Remarks

本接口允许获取其它扩展的快捷键数据，仅需按格式拼接快捷键 ID

本接口无法获取系统快捷键数据

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error` ADD since EDA v4.2

### getall

# SYS\_ShortcutKey.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有快捷键数据

## Signature

```typescript
function getAll(): Record<string, ISYS_ShortcutKeyDataWithUserDefinedShortcutKey>;
```

## Returns

Record&lt;string, [ISYS\_ShortcutKeyDataWithUserDefinedShortcutKey](../interfaces/ISYS_ShortcutKeyDataWithUserDefinedShortcutKey.md)<!-- -->&gt;

获取到的快捷键数据

## Remarks

本接口将会获取本扩展的所有快捷键数据

本接口无法获取系统快捷键数据

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error` ADD since EDA v4.2

### getshortcutkeys

# SYS\_ShortcutKey.getShortcutKeys() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> since EDA v4.2

Query shortcut key list

## Signature

```typescript
function getShortcutKeys(
	includeSystem?: boolean,
): Promise<
	Array<{
		shortcutKey: TSYS_ShortcutKeys;
		title: string;
		documentType: Array<ESYS_ShortcutKeyEffectiveEditorRange>;
		scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>;
	}>
>;
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

includeSystem

</td><td>

boolean

</td><td>

_(Optional)_ Whether Contain system shortcut key

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;{ shortcutKey: [TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)<!-- -->; title: string; documentType: Array&lt;[ESYS\_ShortcutKeyEffectiveEditorRange](../enums/ESYS_ShortcutKeyEffectiveEditorRange.md)<!-- -->&gt;; scene: Array&lt;[ESYS\_ShortcutKeyEffectiveEditorScene](../enums/ESYS_ShortcutKeyEffectiveEditorScene.md)<!-- -->&gt; }&gt;&gt;

Shortcut key list

## Example

```javascript
// 1. 只查非系统快捷键（扩展注册的），列表精简便于观察
const custom = await eda.sys_ShortcutKey.getShortcutKeys();
console.log('非系统快捷键数量：', custom.length);

// 2. 连同系统快捷键一起查（用于完整键位冲突检测）
const all = await eda.sys_ShortcutKey.getShortcutKeys(true);
console.log('含系统快捷键总数：', all.length);

// 3. 观察单条数据结构：shortcutKey 是键位数组，title 是名称，
// documentType 是生效页面，scene 是生效场景
const sample = all[0];
console.log('首条快捷键：', JSON.stringify(sample));
```

### register

# SYS\_ShortcutKey.register() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

注册快捷键

## Signature

```typescript
function register(id: string, props: ISYS_ShortcutKeyDataWithCallFn): boolean;
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

快捷键 ID，将会自动拼接上扩展 UUID 作为前缀

</td></tr>
<tr><td>

props

</td><td>

[ISYS\_ShortcutKeyDataWithCallFn](../interfaces/ISYS_ShortcutKeyDataWithCallFn.md)

</td><td>

快捷键数据

</td></tr>
</tbody></table>

## Returns

boolean

注册是否成功

## Remarks

此处注册快捷键时传入的 `shortcutKey` 仅为默认快捷键，用户可以在设置中修改

如若该快捷键与系统快捷键冲突，系统快捷键将会优先生效

如果需要修改已注册的快捷键信息，可以直接调用本接口，并在 `props` 中传入完整的需要修改的快捷键数据

本接口无法修改系统快捷键

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error` ADD since EDA v4.2

### registershortcutkey

# SYS\_ShortcutKey.registerShortcutKey() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> since EDA v4.2

Register shortcut key

## Signature

```typescript
function registerShortcutKey(
	shortcutKey: TSYS_ShortcutKeys,
	title: string,
	callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>,
	documentType?: Array<ESYS_ShortcutKeyEffectiveEditorRange>,
	scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>,
): Promise<boolean>;
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

shortcutKey

</td><td>

[TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)

</td><td>

Shortcut key. If the array contains multiple elements, it is parsed as a combined shortcut key and sorted by rules before being stored in the cache

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

Shortcut key title, the friendly name of the shortcut key

</td></tr>
<tr><td>

callbackFn

</td><td>

(shortcutKey: [TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;

</td><td>

Callback function

</td></tr>
<tr><td>

documentType

</td><td>

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorRange](../enums/ESYS_ShortcutKeyEffectiveEditorRange.md)<!-- -->&gt;

</td><td>

_(Optional)_

</td></tr>
<tr><td>

scene

</td><td>

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorScene](../enums/ESYS_ShortcutKeyEffectiveEditorScene.md)<!-- -->&gt;

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Register whether the operation is successful

## Example

```javascript
// 1. 注册冷门组合键 Ctrl+Alt+Shift+F9，避免占用常用键位
// documentType 传 2（原理图图页）与 4（PCB）；scene 传 4（画布绘制）
const ok = await eda.sys_ShortcutKey.registerShortcutKey(
	['CONTROL', 'ALT', 'SHIFT', 'F9'],
	'嘉立创示例_演示快捷键',
	(shortcutKey) => {
		// 用户实际按键时才触发，自动化测试不按键，此处仅演示回调写法
		console.log('快捷键被按下：', JSON.stringify(shortcutKey));
	},
	[2, 4],
	[4]
);
console.log('注册快捷键返回：', ok);

// 2. 查询验证：新注册的快捷键出现在非系统快捷键列表中
const list = await eda.sys_ShortcutKey.getShortcutKeys();
const found = list.some(item => item.title === '嘉立创示例_演示快捷键');
console.log('已注册到快捷键列表：', found);

// 3. 反注册还原键位，保证案例可重复运行且不残留全局快捷键
const removed = await eda.sys_ShortcutKey.unregisterShortcutKey(['CONTROL', 'ALT', 'SHIFT', 'F9']);
console.log('反注册还原返回：', removed);
```

### unregister

# SYS\_ShortcutKey.unregister() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

反注册快捷键

## Signature

```typescript
function unregister(id: string): boolean;
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

快捷键 ID，如需反注册其它扩展注册的快捷键，请在前缀处拼接扩展 UUID，格式为：`<扩展 UUID>.<快捷键 ID>`

</td></tr>
</tbody></table>

## Returns

boolean

反注册是否成功

## Remarks

本接口允许反注册其它扩展的快捷键，仅需按格式拼接快捷键 ID

本接口无法反注册系统快捷键

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error` ADD since EDA v4.2

### unregistershortcutkey

# SYS\_ShortcutKey.unregisterShortcutKey() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> since EDA v4.2

Unregister a shortcut key

## Signature

```typescript
function unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;
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

shortcutKey

</td><td>

[TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)

</td><td>

Shortcut key. The order of the passed-in elements is not distinguished; it will be sorted automatically and the matching shortcut key will be queried

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the unregistration operation was successful

## Example

```javascript
// 1. 先注册一个演示快捷键作为操作对象
await eda.sys_ShortcutKey.registerShortcutKey(
	['CONTROL', 'ALT', 'F9'],
	'嘉立创示例_待移除快捷键',
	() => {}
);

// 2. 反注册：故意打乱键序传入，验证不区分排列顺序的匹配规则
const ok = await eda.sys_ShortcutKey.unregisterShortcutKey(['F9', 'ALT', 'CONTROL']);
console.log('反注册返回：', ok);

// 3. 复查快捷键列表，确认演示键位已被移除
const list = await eda.sys_ShortcutKey.getShortcutKeys();
const still = list.some(item => item.title === '嘉立创示例_待移除快捷键');
console.log('反注册后仍在列表中：', still);
```
