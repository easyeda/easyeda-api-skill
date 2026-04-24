# SYS\_ShortcutKey class

系统 / 快捷键类

## Signature

```typescript
declare class SYS_ShortcutKey 
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

[getShortcutKeys(includeSystem)](./SYS_ShortcutKey.md)


</td><td>


</td><td>

**_(BETA)_** 查询快捷键列表


</td></tr>
<tr><td>

[registerShortcutKey(shortcutKey, title, callbackFn, documentType, scene)](./SYS_ShortcutKey.md)


</td><td>


</td><td>

**_(BETA)_** 注册快捷键


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

### getshortcutkeys

# SYS\_ShortcutKey.getShortcutKeys() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

查询快捷键列表

## Signature

```typescript
getShortcutKeys(includeSystem?: boolean): Promise<Array<{
        shortcutKey: TSYS_ShortcutKeys;
        title: string;
        documentType: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>;
        scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>;
    }>>;
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

Promise&lt;Array&lt;{ shortcutKey: [TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)<!-- -->; title: string; documentType: Array&lt;[ESYS\_ShortcutKeyEffectiveEditorDocumentType](../enums/ESYS_ShortcutKeyEffectiveEditorDocumentType.md)<!-- -->&gt;; scene: Array&lt;[ESYS\_ShortcutKeyEffectiveEditorScene](../enums/ESYS_ShortcutKeyEffectiveEditorScene.md)<!-- -->&gt;; }&gt;&gt;

快捷键列表

### registershortcutkey

# SYS\_ShortcutKey.registerShortcutKey() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

注册快捷键

## Signature

```typescript
registerShortcutKey(shortcutKey: TSYS_ShortcutKeys, title: string, callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>, documentType?: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>, scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>): Promise<boolean>;
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

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorDocumentType](../enums/ESYS_ShortcutKeyEffectiveEditorDocumentType.md)<!-- -->&gt;


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

### unregistershortcutkey

# SYS\_ShortcutKey.unregisterShortcutKey() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

反注册快捷键

## Signature

```typescript
unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;
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
