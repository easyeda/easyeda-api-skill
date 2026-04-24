# SYS\_Environment class

系统 / 运行环境类

## Signature

```typescript
declare class SYS_Environment 
```

## Remarks

获取嘉立创 EDA 专业版运行环境参数

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

获取编辑器编译日期


</td></tr>
<tr><td>

[getEditorCurrentVersion()](./SYS_Environment.md)


</td><td>


</td><td>

获取编辑器当前版本


</td></tr>
<tr><td>

[getUserInfo()](./SYS_Environment.md)


</td><td>


</td><td>

获取用户信息


</td></tr>
<tr><td>

[isClient()](./SYS_Environment.md)


</td><td>


</td><td>

是否处于客户端环境


</td></tr>
<tr><td>

[isEasyEDAProEdition()](./SYS_Environment.md)


</td><td>


</td><td>

是否为 EasyEDA Pro 版本


</td></tr>
<tr><td>

[isHalfOfflineMode()](./SYS_Environment.md)


</td><td>


</td><td>

是否为半离线模式


</td></tr>
<tr><td>

[isJLCEDAProEdition()](./SYS_Environment.md)


</td><td>


</td><td>

是否为 嘉立创EDA 专业版本


</td></tr>
<tr><td>

[isOfflineMode()](./SYS_Environment.md)


</td><td>


</td><td>

是否为全离线模式


</td></tr>
<tr><td>

[isOnlineMode()](./SYS_Environment.md)


</td><td>


</td><td>

是否为在线模式


</td></tr>
<tr><td>

[isProPrivateEdition()](./SYS_Environment.md)


</td><td>


</td><td>

是否为私有化部署版本


</td></tr>
<tr><td>

[isWeb()](./SYS_Environment.md)


</td><td>


</td><td>

是否处于浏览器环境


</td></tr>
</tbody></table>

---

## 方法详情

### geteditorcomplieddate

# SYS\_Environment.getEditorCompliedDate() method

获取编辑器编译日期

## Signature

```typescript
getEditorCompliedDate(): string;
```


## Returns

string

编辑器编译日期

### geteditorcurrentversion

# SYS\_Environment.getEditorCurrentVersion() method

获取编辑器当前版本

## Signature

```typescript
getEditorCurrentVersion(): string;
```


## Returns

string

编辑器当前版本

### getuserinfo

# SYS\_Environment.getUserInfo() method

获取用户信息

## Signature

```typescript
getUserInfo(): {
        username?: string;
        nickname?: string;
        avatar?: string;
        uuid?: string;
        customerCode?: string;
    };
```


## Returns

\{ username?: string; nickname?: string; avatar?: string; uuid?: string; customerCode?: string; \}

用户信息

### isclient

# SYS\_Environment.isClient() method

是否处于客户端环境

## Signature

```typescript
isClient(): boolean;
```


## Returns

boolean

是否处于客户端环境

### iseasyedaproedition

# SYS\_Environment.isEasyEDAProEdition() method

是否为 EasyEDA Pro 版本

## Signature

```typescript
isEasyEDAProEdition(): boolean;
```


## Returns

boolean

是否为 EasyEDA Pro 版本

### ishalfofflinemode

# SYS\_Environment.isHalfOfflineMode() method

是否为半离线模式

## Signature

```typescript
isHalfOfflineMode(): boolean;
```


## Returns

boolean

是否为半离线模式

### isjlcedaproedition

# SYS\_Environment.isJLCEDAProEdition() method

是否为 嘉立创EDA 专业版本

## Signature

```typescript
isJLCEDAProEdition(): boolean;
```


## Returns

boolean

是否为嘉立创EDA 专业版本

### isofflinemode

# SYS\_Environment.isOfflineMode() method

是否为全离线模式

## Signature

```typescript
isOfflineMode(): boolean;
```


## Returns

boolean

是否为全离线模式

### isonlinemode

# SYS\_Environment.isOnlineMode() method

是否为在线模式

## Signature

```typescript
isOnlineMode(): boolean;
```


## Returns

boolean

是否为在线模式

### isproprivateedition

# SYS\_Environment.isProPrivateEdition() method

是否为私有化部署版本

## Signature

```typescript
isProPrivateEdition(): boolean;
```


## Returns

boolean

是否为私有化部署版本

### isweb

# SYS\_Environment.isWeb() method

是否处于浏览器环境

## Signature

```typescript
isWeb(): boolean;
```


## Returns

boolean

是否处于浏览器环境
