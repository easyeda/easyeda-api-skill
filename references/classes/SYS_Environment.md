# SYS\_Environment class

System / runtime environment class

## Signature

```typescript
class SYS_Environment
```

## Remarks

Get the runtime environment parameters of EasyEDA Pro

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[getEditorCompliedDate()](./SYS_Environment.md)

</td><td>

</td><td>

Get the editor compiled date

</td></tr>
<tr><td>

[getEditorCurrentVersion(onlySemantic)](./SYS_Environment.md)

</td><td>

</td><td>

Get the current version of the editor

</td></tr>
<tr><td>

[getUserInfo()](./SYS_Environment.md)

</td><td>

</td><td>

Get user information

</td></tr>
<tr><td>

[isClient()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is in the client environment

</td></tr>
<tr><td>

[isEasyEDAProEdition()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is the EasyEDA Pro edition

</td></tr>
<tr><td>

[isEditorCurrentVersionGreaterThanOrEqual(version)](./SYS_Environment.md)

</td><td>

</td><td>

判断传入版本是否高于或等于编辑器当前版本

</td></tr>
<tr><td>

[isEditorCurrentVersionLessThanOrEqual(version)](./SYS_Environment.md)

</td><td>

</td><td>

判断传入版本是否低于或等于编辑器当前版本

</td></tr>
<tr><td>

[isHalfOfflineMode()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is half-offline mode

</td></tr>
<tr><td>

[isJLCEDAProEdition()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is the EasyEDA Pro edition

</td></tr>
<tr><td>

[isOfflineMode()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is fully-offline mode

</td></tr>
<tr><td>

[isOnlineMode()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is online mode

</td></tr>
<tr><td>

[isProPrivateEdition()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is the private deployment edition

</td></tr>
<tr><td>

[isWeb()](./SYS_Environment.md)

</td><td>

</td><td>

Whether it is in the browser environment

</td></tr>
</tbody></table>

---

## 方法详情

### geteditorcomplieddate

# SYS\_Environment.getEditorCompliedDate() method

Get the editor compiled date

## Signature

```typescript
function getEditorCompliedDate(): string;
```

## Returns

string

Editor compiled date

## Example

```javascript
// 1. 读取编辑器编译日期（同步返回字符串）
const compliedDate = eda.sys_Environment.getEditorCompliedDate();

// 2. 输出编译日期（如 2024-06-01，具体以当前环境为准）
console.log('编辑器编译日期：', compliedDate);
```

### geteditorcurrentversion

# SYS\_Environment.getEditorCurrentVersion() method

Get the current version of the editor

## Signature

```typescript
function getEditorCurrentVersion(onlySemantic?: boolean): string;
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

onlySemantic

</td><td>

boolean

</td><td>

_(Optional)_ Whether to only return the semantic version number. ADD since EDA v3.2.176, ADD since EDA v4.1.13

</td></tr>
</tbody></table>

## Returns

string

Current version of the editor

## Example

```javascript
// 1. 读取编辑器版本号（同步返回字符串）
const version = eda.sys_Environment.getEditorCurrentVersion();

// 2. 输出版本号（如 2.2.36，具体以当前环境为准）
console.log('编辑器当前版本：', version);
```

### getuserinfo

# SYS\_Environment.getUserInfo() method

Get user information

## Signature

```typescript
function getUserInfo(): {
	username?: string;
	nickname?: string;
	avatar?: string;
	uuid?: string;
	customerCode?: string;
};
```

## Returns

\{ username?: string; nickname?: string; avatar?: string; uuid?: string; customerCode?: string \}

User information

## Example

```javascript
// 1. 读取当前用户信息（同步返回对象）
const userInfo = eda.sys_Environment.getUserInfo();

// 2. 输出用户信息（uuid 是账号的唯一标识，可作为业务数据的关联键）
console.log('用户名：', userInfo?.username);
console.log('昵称：', userInfo?.nickname);
console.log('用户 uuid：', userInfo?.uuid);
console.log('客户编号：', userInfo?.customerCode);
```

### isclient

# SYS\_Environment.isClient() method

Whether it is in the client environment

## Signature

```typescript
function isClient(): boolean;
```

## Returns

boolean

Whether it is in the client environment

## Example

```javascript
// 1. 判断当前是否为客户端环境（同步返回布尔值）
const isClient = eda.sys_Environment.isClient();

// 2. 输出判断结果（桌面客户端为 true，网页版为 false）
console.log('是否客户端环境：', isClient);
```

### iseasyedaproedition

# SYS\_Environment.isEasyEDAProEdition() method

Whether it is the EasyEDA Pro edition

## Signature

```typescript
function isEasyEDAProEdition(): boolean;
```

## Returns

boolean

Whether it is the EasyEDA Pro edition

## Example

```javascript
// 1. 判断是否为 EasyEDA Pro 国际版（同步返回布尔值）
const isEasyEDAPro = eda.sys_Environment.isEasyEDAProEdition();

// 2. 输出判断结果（国际版为 true，嘉立创 EDA 专业版为 false）
console.log('是否 EasyEDA Pro 国际版：', isEasyEDAPro);
```

### iseditorcurrentversiongreaterthanorequal

# SYS\_Environment.isEditorCurrentVersionGreaterThanOrEqual() method

判断传入版本是否高于或等于编辑器当前版本

## Signature

```typescript
function isEditorCurrentVersionGreaterThanOrEqual(version: string): boolean;
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

version

</td><td>

string

</td><td>

传入的版本

</td></tr>
</tbody></table>

## Returns

boolean

传入版本是否高于或等于编辑器当前版本

## Example

```javascript
// 1. 判断传入版本是否高于或等于当前编辑器版本（同步返回布尔值）
const isGe = eda.sys_Environment.isEditorCurrentVersionGreaterThanOrEqual('4.1.13');

// 2. 输出判断结果
console.log('传入版本是否高于或等于当前版本：', isGe);
```

### iseditorcurrentversionlessthanorequal

# SYS\_Environment.isEditorCurrentVersionLessThanOrEqual() method

判断传入版本是否低于或等于编辑器当前版本

## Signature

```typescript
function isEditorCurrentVersionLessThanOrEqual(version: string): boolean;
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

version

</td><td>

string

</td><td>

传入的版本

</td></tr>
</tbody></table>

## Returns

boolean

传入版本是否低于或等于编辑器当前版本

## Example

```javascript
// 1. 判断传入版本是否低于或等于当前编辑器版本（同步返回布尔值）
const isLe = eda.sys_Environment.isEditorCurrentVersionLessThanOrEqual('4.1.13');

// 2. 输出判断结果
console.log('传入版本是否低于或等于当前版本：', isLe);
```

### ishalfofflinemode

# SYS\_Environment.isHalfOfflineMode() method

Whether it is half-offline mode

## Signature

```typescript
function isHalfOfflineMode(): boolean;
```

## Returns

boolean

Whether it is half-offline mode

## Example

```javascript
// 1. 判断是否为半离线模式（同步返回布尔值）
const isHalfOffline = eda.sys_Environment.isHalfOfflineMode();

// 2. 输出判断结果（半离线模式为 true）
console.log('是否半离线模式：', isHalfOffline);
```

### isjlcedaproedition

# SYS\_Environment.isJLCEDAProEdition() method

Whether it is the EasyEDA Pro edition

## Signature

```typescript
function isJLCEDAProEdition(): boolean;
```

## Returns

boolean

Whether it is the EasyEDA Pro edition

## Example

```javascript
// 1. 判断是否为嘉立创 EDA 专业版（同步返回布尔值）
const isJLCEDAPro = eda.sys_Environment.isJLCEDAProEdition();

// 2. 输出判断结果（嘉立创 EDA 专业版为 true）
console.log('是否嘉立创 EDA 专业版：', isJLCEDAPro);
```

### isofflinemode

# SYS\_Environment.isOfflineMode() method

Whether it is fully-offline mode

## Signature

```typescript
function isOfflineMode(): boolean;
```

## Returns

boolean

Whether it is fully-offline mode

## Example

```javascript
// 1. 判断是否为全离线模式（同步返回布尔值）
const isOffline = eda.sys_Environment.isOfflineMode();

// 2. 输出判断结果（全离线模式为 true）
console.log('是否全离线模式：', isOffline);
```

### isonlinemode

# SYS\_Environment.isOnlineMode() method

Whether it is online mode

## Signature

```typescript
function isOnlineMode(): boolean;
```

## Returns

boolean

Whether it is online mode

## Example

```javascript
// 1. 判断是否为在线模式（同步返回布尔值）
const isOnline = eda.sys_Environment.isOnlineMode();

// 2. 输出判断结果（在线模式为 true）
console.log('是否在线模式：', isOnline);
```

### isproprivateedition

# SYS\_Environment.isProPrivateEdition() method

Whether it is the private deployment edition

## Signature

```typescript
function isProPrivateEdition(): boolean;
```

## Returns

boolean

Whether it is the private deployment edition

## Example

```javascript
// 1. 判断是否为私有化部署版本（同步返回布尔值）
const isPrivateEdition = eda.sys_Environment.isProPrivateEdition();

// 2. 输出判断结果（私有化部署版为 true）
console.log('是否私有化部署版本：', isPrivateEdition);
```

### isweb

# SYS\_Environment.isWeb() method

Whether it is in the browser environment

## Signature

```typescript
function isWeb(): boolean;
```

## Returns

boolean

Whether it is in the browser environment

## Example

```javascript
// 1. 判断当前是否为浏览器环境（同步返回布尔值）
const isWeb = eda.sys_Environment.isWeb();

// 2. 输出判断结果（网页版为 true，桌面客户端为 false）
console.log('是否浏览器环境：', isWeb);
```
