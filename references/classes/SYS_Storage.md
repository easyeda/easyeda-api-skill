# SYS\_Storage class

系统 / 存储类

## Signature

```typescript
declare class SYS_Storage 
```

## Remarks

可以进行扩展的用户配置存储、浏览器本地存储的操作接口


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

清除扩展所有用户配置


</td></tr>
<tr><td>

[deleteExtensionUserConfig(key)](./SYS_Storage.md)


</td><td>


</td><td>

删除扩展用户配置


</td></tr>
<tr><td>

[getExtensionAllUserConfigs()](./SYS_Storage.md)


</td><td>


</td><td>

获取扩展所有用户配置


</td></tr>
<tr><td>

[getExtensionUserConfig(key)](./SYS_Storage.md)


</td><td>


</td><td>

获取扩展用户配置


</td></tr>
<tr><td>

[setExtensionAllUserConfigs(configs)](./SYS_Storage.md)


</td><td>


</td><td>

设置扩展所有用户配置


</td></tr>
<tr><td>

[setExtensionUserConfig(key, value)](./SYS_Storage.md)


</td><td>


</td><td>

设置扩展用户配置


</td></tr>
</tbody></table>

---

## 方法详情

### clearextensionalluserconfigs

# SYS\_Storage.clearExtensionAllUserConfigs() method

清除扩展所有用户配置

## Signature

```typescript
clearExtensionAllUserConfigs(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

此举会删除当前扩展的所有用户配置信息，请谨慎操作

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### deleteextensionuserconfig

# SYS\_Storage.deleteExtensionUserConfig() method

删除扩展用户配置

## Signature

```typescript
deleteExtensionUserConfig(key: string): Promise<boolean>;
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

配置项


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### getextensionalluserconfigs

# SYS\_Storage.getExtensionAllUserConfigs() method

获取扩展所有用户配置

## Signature

```typescript
getExtensionAllUserConfigs(): {
        [key: string]: any;
    };
```


## Returns

\{ \[key: string\]: any; \}

扩展所有用户配置信息

## Remarks

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### getextensionuserconfig

# SYS\_Storage.getExtensionUserConfig() method

获取扩展用户配置

## Signature

```typescript
getExtensionUserConfig(key: string): any | undefined;
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

配置项


</td></tr>
</tbody></table>



## Returns

any \| undefined

配置项对应的值，不存在将返回 `undefined`

## Remarks

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### setextensionalluserconfigs

# SYS\_Storage.setExtensionAllUserConfigs() method

设置扩展所有用户配置

## Signature

```typescript
setExtensionAllUserConfigs(configs: {
        [key: string]: any;
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

configs


</td><td>

\{ \[key: string\]: any; \}


</td><td>

扩展所有用户配置


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

此举会覆盖当前扩展的所有用户配置信息，请谨慎操作

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

### setextensionuserconfig

# SYS\_Storage.setExtensionUserConfig() method

设置扩展用户配置

## Signature

```typescript
setExtensionUserConfig(key: string, value: any): Promise<boolean>;
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

配置项


</td></tr>
<tr><td>

value


</td><td>

any


</td><td>

值


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

新建扩展用户配置也使用本接口，在设置时如果不存在将会自动新建

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
