# SYS\_ShortcutKey class

系统 / 快捷键类

## Signature

```typescript
export class SYS_ShortcutKey 
```

## Remarks

注册与管理系统快捷键


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

**_(BETA)_** 查询快捷键列表


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

**_(BETA)_** 注册快捷键


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

**_(BETA)_** 反注册快捷键


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
public get(id: string): ISYS_ShortcutKeyDataWithUserDefinedShortcutKey | undefined;
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
public getAll(): Record<string, ISYS_ShortcutKeyDataWithUserDefinedShortcutKey>;
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

查询快捷键列表

## Signature

```typescript
public getShortcutKeys(includeSystem?: boolean): Promise<Array<{ shortcutKey: TSYS_ShortcutKeys; title: string; documentType: ESYS_ShortcutKeyEffectiveEditorRange[]; scene: ESYS_ShortcutKeyEffectiveEditorScene[] }>>;
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

_(Optional)_ 是否包含系统快捷键


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;{ shortcutKey: [TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)<!-- -->; title: string; documentType: [ESYS\_ShortcutKeyEffectiveEditorRange](../enums/ESYS_ShortcutKeyEffectiveEditorRange.md)<!-- -->\[\]; scene: [ESYS\_ShortcutKeyEffectiveEditorScene](../enums/ESYS_ShortcutKeyEffectiveEditorScene.md)<!-- -->\[\] }&gt;&gt;

快捷键列表

### register

# SYS\_ShortcutKey.register() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

注册快捷键

## Signature

```typescript
public register(id: string, props: ISYS_ShortcutKeyDataWithCallFn): boolean;
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

注册快捷键

## Signature

```typescript
public registerShortcutKey(shortcutKey: TSYS_ShortcutKeys, title: string, callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>, documentType?: Array<ESYS_ShortcutKeyEffectiveEditorRange>, scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>): Promise<boolean>;
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

快捷键，数组中包含多个元素则解析为组合快捷键，将按规则排序后存入缓存


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

快捷键标题，快捷键的友好名称


</td></tr>
<tr><td>

callbackFn


</td><td>

(shortcutKey: [TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;


</td><td>

回调函数


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

注册操作是否成功

### unregister

# SYS\_ShortcutKey.unregister() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

反注册快捷键

## Signature

```typescript
public unregister(id: string): boolean;
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

反注册快捷键

## Signature

```typescript
public unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;
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

快捷键，不区分传入的排列顺序，将自动排序并查询匹配的快捷键


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

反注册操作是否成功
