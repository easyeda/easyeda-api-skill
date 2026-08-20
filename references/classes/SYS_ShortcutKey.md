# SYS\_ShortcutKey class

System / shortcut key class

## Signature

```typescript
export class SYS_ShortcutKey 
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

**_(BETA)_** Get Shortcut key data


</td></tr>
<tr><td>

[getAll()](./SYS_ShortcutKey.md)


</td><td>


</td><td>

**_(BETA)_** Get all Shortcut key data


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

**_(BETA)_** Register shortcut key


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

**_(BETA)_** Unregister a shortcut key


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

Get Shortcut key data

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

Shortcut key ID. To get shortcut keys registered by other extensions, concatenate the extension UUID as a prefix. Format: `<extension UUID>.<shortcut key ID>`


</td></tr>
</tbody></table>



## Returns

[ISYS\_ShortcutKeyDataWithUserDefinedShortcutKey](../interfaces/ISYS_ShortcutKeyDataWithUserDefinedShortcutKey.md) \| undefined

The obtained shortcut key data

## Remarks

This API allows getting shortcut key data of other extensions. Simply concatenate the shortcut key ID in the specified format

This API cannot get system shortcut key data

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error` ADD since EDA v4.2

### getall

# SYS\_ShortcutKey.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Shortcut key data

## Signature

```typescript
public getAll(): Record<string, ISYS_ShortcutKeyDataWithUserDefinedShortcutKey>;
```


## Returns

Record&lt;string, [ISYS\_ShortcutKeyDataWithUserDefinedShortcutKey](../interfaces/ISYS_ShortcutKeyDataWithUserDefinedShortcutKey.md)<!-- -->&gt;

The obtained shortcut key data

## Remarks

This API will get all shortcut key data of this extension

This API cannot get system shortcut key data

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error` ADD since EDA v4.2

### getshortcutkeys

# SYS\_ShortcutKey.getShortcutKeys() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> since EDA v4.2

Query shortcut key list

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

_(Optional)_ Whether Contain system shortcut key


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;{ shortcutKey: [TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)<!-- -->; title: string; documentType: [ESYS\_ShortcutKeyEffectiveEditorRange](../enums/ESYS_ShortcutKeyEffectiveEditorRange.md)<!-- -->\[\]; scene: [ESYS\_ShortcutKeyEffectiveEditorScene](../enums/ESYS_ShortcutKeyEffectiveEditorScene.md)<!-- -->\[\] }&gt;&gt;

Shortcut key list

### register

# SYS\_ShortcutKey.register() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Register shortcut key

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

Shortcut key ID. The extension UUID will be automatically concatenated as a prefix


</td></tr>
<tr><td>

props


</td><td>

[ISYS\_ShortcutKeyDataWithCallFn](../interfaces/ISYS_ShortcutKeyDataWithCallFn.md)


</td><td>

Shortcut key data


</td></tr>
</tbody></table>



## Returns

boolean

Register whether it is successful

## Remarks

The `shortcutKey` passed in when registering a shortcut key here is only the default shortcut key. Users can modify it in settings

If the shortcut key conflicts with a system shortcut key, the system shortcut key will take precedence

To modify registered shortcut key information, you can call this API directly and pass the complete shortcut key data to be modified in `props`

This API cannot modify system shortcut keys

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error` ADD since EDA v4.2

### registershortcutkey

# SYS\_ShortcutKey.registerShortcutKey() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> since EDA v4.2

Register shortcut key

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

### unregister

# SYS\_ShortcutKey.unregister() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Unregister a shortcut key

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

Shortcut key ID. To unregister shortcut keys registered by other extensions, concatenate the extension UUID as a prefix. Format: `<extension UUID>.<shortcut key ID>`


</td></tr>
</tbody></table>



## Returns

boolean

Whether the unregistration was successful

## Remarks

This API allows unregistering shortcut keys of other extensions. Simply concatenate the shortcut key ID in the specified format

This API cannot unregister system shortcut keys

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error` ADD since EDA v4.2

### unregistershortcutkey

# SYS\_ShortcutKey.unregisterShortcutKey() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> since EDA v4.2

Unregister a shortcut key

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

Shortcut key. The order of the passed-in elements is not distinguished; it will be sorted automatically and the matching shortcut key will be queried


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the unregistration operation was successful
