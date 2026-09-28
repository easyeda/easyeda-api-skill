# SYS\_Storage class

System / storage class

## Signature

```typescript
class SYS_Storage
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
function clearExtensionAllUserConfigs(): Promise<boolean>;
```

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

This will delete all user configuration information of the current extension. Please operate with caution

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

## Example

```javascript
// 1. 备份当前全部配置（清空前必做）
const backup = eda.sys_Storage.getExtensionAllUserConfigs();

// 2. 写入一条演示配置，让清空操作有效果可见
await eda.sys_Storage.setExtensionUserConfig('嘉立创示例_待清除', '演示数据');

// 3. 清空全部配置
const cleared = await eda.sys_Storage.clearExtensionAllUserConfigs();

// 4. 复查：清空后配置条数应为 0
const after = eda.sys_Storage.getExtensionAllUserConfigs();

// 5. 把备份的原配置写回，还原存储现场
const restored = await eda.sys_Storage.setExtensionAllUserConfigs(backup);

console.log('清空结果：', cleared);
console.log('清空后配置条数：', Object.keys(after).length);
console.log('恢复备份结果：', restored);
```

### deleteextensionuserconfig

# SYS\_Storage.deleteExtensionUserConfig() method

Delete Extension user configuration

## Signature

```typescript
function deleteExtensionUserConfig(key: string): Promise<boolean>;
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

## Example

```javascript
// 1. 写入一条待删除的演示配置
await eda.sys_Storage.setExtensionUserConfig('嘉立创示例_临时项', '待删除数据');

// 2. 删除该配置
const deleted = await eda.sys_Storage.deleteExtensionUserConfig('嘉立创示例_临时项');

// 3. 复查：删除后再读取该 key，应为 undefined
const after = eda.sys_Storage.getExtensionUserConfig('嘉立创示例_临时项');

console.log('删除结果：', deleted);
console.log('删除后再读取：', after);
```

### getextensionalluserconfigs

# SYS\_Storage.getExtensionAllUserConfigs() method

Get all user configurations of the extension

## Signature

```typescript
function getExtensionAllUserConfigs(): Record<string, any>;
```

## Returns

Record&lt;string, any&gt;

All user configuration information of the extension

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

## Example

```javascript
// 1. 写入两条演示配置
await eda.sys_Storage.setExtensionUserConfig('嘉立创示例_单位', 'mil');
await eda.sys_Storage.setExtensionUserConfig('嘉立创示例_自动保存', true);

// 2. 读取全部用户配置
const configs = eda.sys_Storage.getExtensionAllUserConfigs();

// 3. 清理演示配置，还原存储现场
await eda.sys_Storage.deleteExtensionUserConfig('嘉立创示例_单位');
await eda.sys_Storage.deleteExtensionUserConfig('嘉立创示例_自动保存');

console.log('配置总条数：', Object.keys(configs).length);
console.log('演示配置单位：', configs['嘉立创示例_单位']);
console.log('演示配置自动保存：', configs['嘉立创示例_自动保存']);
```

### getextensionuserconfig

# SYS\_Storage.getExtensionUserConfig() method

Get Extension user configuration

## Signature

```typescript
function getExtensionUserConfig(key: string): any | undefined;
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

## Example

```javascript
// 1. 先写入一条演示配置
await eda.sys_Storage.setExtensionUserConfig('嘉立创示例_单位', 'mm');

// 2. 按 key 读取该配置
const value = eda.sys_Storage.getExtensionUserConfig('嘉立创示例_单位');

// 3. 读取不存在的 key，返回 undefined
const missing = eda.sys_Storage.getExtensionUserConfig('嘉立创示例_不存在的键');

// 4. 清理演示配置，还原存储现场
await eda.sys_Storage.deleteExtensionUserConfig('嘉立创示例_单位');

console.log('读取到的值：', value);
console.log('不存在的 key 返回：', missing);
```

### setextensionalluserconfigs

# SYS\_Storage.setExtensionAllUserConfigs() method

Set all user configurations of the extension

## Signature

```typescript
function setExtensionAllUserConfigs(configs: Record<string, any>): Promise<boolean>;
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

## Example

```javascript
// 1. 备份当前全部配置（整体覆盖前必做）
const backup = eda.sys_Storage.getExtensionAllUserConfigs();

// 2. 整体写入一份新配置，原有配置被覆盖
const ok = await eda.sys_Storage.setExtensionAllUserConfigs({
	嘉立创示例_单位: 'mil',
	嘉立创示例_检查更新: true,
});

// 3. 把备份的原配置写回，还原存储现场
const restored = await eda.sys_Storage.setExtensionAllUserConfigs(backup);

console.log('整体写入结果：', ok);
console.log('恢复备份结果：', restored);
console.log('备份配置条数：', Object.keys(backup).length);
```

### setextensionuserconfig

# SYS\_Storage.setExtensionUserConfig() method

Set Extension user configuration

## Signature

```typescript
function setExtensionUserConfig(key: string, value: any): Promise<boolean>;
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

## Example

```javascript
// 1. 写入一条新配置（key 不存在时自动新建）
const created = await eda.sys_Storage.setExtensionUserConfig('嘉立创示例_主题', '深色');

// 2. 用同一个 key 再次写入，覆盖旧值
const updated = await eda.sys_Storage.setExtensionUserConfig('嘉立创示例_主题', '浅色');

// 3. 清理演示配置，还原存储现场
await eda.sys_Storage.deleteExtensionUserConfig('嘉立创示例_主题');

console.log('新建配置结果：', created);
console.log('覆盖写入结果：', updated);
```
