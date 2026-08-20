# SYS\_Storage class

System / storage class

## Signature

```typescript
export class SYS_Storage 
```

## Remarks

APIs that can perform extension user configuration storage and browser local storage operations


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[clearExtensionAllUserConfigs()](./SYS_Storage.md)


</td><td>


</td><td>

Clear all user configurations of the extension


</td></tr>
<tr><td>

[deleteExtensionUserConfig(key)](./SYS_Storage.md)


</td><td>


</td><td>

Delete Extension user configuration


</td></tr>
<tr><td>

[getExtensionAllUserConfigs()](./SYS_Storage.md)


</td><td>


</td><td>

Get all user configurations of the extension


</td></tr>
<tr><td>

[getExtensionUserConfig(key)](./SYS_Storage.md)


</td><td>


</td><td>

Get Extension user configuration


</td></tr>
<tr><td>

[setExtensionAllUserConfigs(configs)](./SYS_Storage.md)


</td><td>


</td><td>

Set all user configurations of the extension


</td></tr>
<tr><td>

[setExtensionUserConfig(key, value)](./SYS_Storage.md)


</td><td>


</td><td>

Set Extension user configuration


</td></tr>
</tbody></table>

---

## 方法详情

### clearextensionalluserconfigs

# SYS\_Storage.clearExtensionAllUserConfigs() method

Clear all user configurations of the extension

## Signature

```typescript
public clearExtensionAllUserConfigs(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This will delete all user configuration information of the current extension. Please operate with caution

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### deleteextensionuserconfig

# SYS\_Storage.deleteExtensionUserConfig() method

Delete Extension user configuration

## Signature

```typescript
public deleteExtensionUserConfig(key: string): Promise<boolean>;
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

Configuration item


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### getextensionalluserconfigs

# SYS\_Storage.getExtensionAllUserConfigs() method

Get all user configurations of the extension

## Signature

```typescript
public getExtensionAllUserConfigs(): Record<string, any>;
```


## Returns

Record&lt;string, any&gt;

All user configuration information of the extension

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### getextensionuserconfig

# SYS\_Storage.getExtensionUserConfig() method

Get Extension user configuration

## Signature

```typescript
public getExtensionUserConfig(key: string): any | undefined;
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

Configuration item


</td></tr>
</tbody></table>



## Returns

any \| undefined

The value corresponding to the configuration item. `undefined` is returned if it does not exist

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### setextensionalluserconfigs

# SYS\_Storage.setExtensionAllUserConfigs() method

Set all user configurations of the extension

## Signature

```typescript
public setExtensionAllUserConfigs(configs: Record<string, any>): Promise<boolean>;
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

configs


</td><td>

Record&lt;string, any&gt;


</td><td>

All user configurations of the extension


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This will overwrite all user configuration information of the current extension. Please operate with caution

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### setextensionuserconfig

# SYS\_Storage.setExtensionUserConfig() method

Set Extension user configuration

## Signature

```typescript
public setExtensionUserConfig(key: string, value: any): Promise<boolean>;
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

Configuration item


</td></tr>
<tr><td>

value


</td><td>

any


</td><td>

Value


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This API is also used to create a new extension user configuration. If it does not exist when setting, it will be created automatically

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`
