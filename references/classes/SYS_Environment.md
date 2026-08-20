# SYS\_Environment class

System / runtime environment class

## Signature

```typescript
export class SYS_Environment 
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
public getEditorCompliedDate(): string;
```


## Returns

string

Editor compiled date

### geteditorcurrentversion

# SYS\_Environment.getEditorCurrentVersion() method

Get the current version of the editor

## Signature

```typescript
public getEditorCurrentVersion(onlySemantic?: boolean): string;
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

### getuserinfo

# SYS\_Environment.getUserInfo() method

Get user information

## Signature

```typescript
public getUserInfo(): { username?: undefined | string; nickname?: undefined | string; avatar?: undefined | string; uuid?: undefined | string; customerCode?: undefined | string };
```


## Returns

\{ username?: undefined \| string; nickname?: undefined \| string; avatar?: undefined \| string; uuid?: undefined \| string; customerCode?: undefined \| string \}

User information

### isclient

# SYS\_Environment.isClient() method

Whether it is in the client environment

## Signature

```typescript
public isClient(): boolean;
```


## Returns

boolean

Whether it is in the client environment

### iseasyedaproedition

# SYS\_Environment.isEasyEDAProEdition() method

Whether it is the EasyEDA Pro edition

## Signature

```typescript
public isEasyEDAProEdition(): boolean;
```


## Returns

boolean

Whether it is the EasyEDA Pro edition

### ishalfofflinemode

# SYS\_Environment.isHalfOfflineMode() method

Whether it is half-offline mode

## Signature

```typescript
public isHalfOfflineMode(): boolean;
```


## Returns

boolean

Whether it is half-offline mode

### isjlcedaproedition

# SYS\_Environment.isJLCEDAProEdition() method

Whether it is the EasyEDA Pro edition

## Signature

```typescript
public isJLCEDAProEdition(): boolean;
```


## Returns

boolean

Whether it is the EasyEDA Pro edition

### isofflinemode

# SYS\_Environment.isOfflineMode() method

Whether it is fully-offline mode

## Signature

```typescript
public isOfflineMode(): boolean;
```


## Returns

boolean

Whether it is fully-offline mode

### isonlinemode

# SYS\_Environment.isOnlineMode() method

Whether it is online mode

## Signature

```typescript
public isOnlineMode(): boolean;
```


## Returns

boolean

Whether it is online mode

### isproprivateedition

# SYS\_Environment.isProPrivateEdition() method

Whether it is the private deployment edition

## Signature

```typescript
public isProPrivateEdition(): boolean;
```


## Returns

boolean

Whether it is the private deployment edition

### isweb

# SYS\_Environment.isWeb() method

Whether it is in the browser environment

## Signature

```typescript
public isWeb(): boolean;
```


## Returns

boolean

Whether it is in the browser environment
