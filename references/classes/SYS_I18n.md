# SYS\_I18n class

System / multilingual class

## Signature

```typescript
export class SYS_I18n 
```

## Remarks

Use the multilingual system to display multilingual text


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[addLanguageChangedEventListener(id, callFn, onlyOnce)](./SYS_I18n.md)


</td><td>


</td><td>

Add a language change event listener


</td></tr>
<tr><td>

[getAllSupportedLanguages()](./SYS_I18n.md)


</td><td>


</td><td>

Query all supported languages


</td></tr>
<tr><td>

[getCurrentLanguage()](./SYS_I18n.md)


</td><td>


</td><td>

Get Current language environment


</td></tr>
<tr><td>

[importMultilingual(language, source)](./SYS_I18n.md)


</td><td>


</td><td>

Import multilingual


</td></tr>
<tr><td>

[importMultilingualLanguage(namespace, language, source)](./SYS_I18n.md)


</td><td>


</td><td>

Import multilingual: specify namespace and language


</td></tr>
<tr><td>

[importMultilingualNamespace(namespace, source)](./SYS_I18n.md)


</td><td>


</td><td>

Import multilingual: specify namespace


</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./SYS_I18n.md)


</td><td>


</td><td>

Query whether the event listener exists


</td></tr>
<tr><td>

[isLanguageSupported(language)](./SYS_I18n.md)


</td><td>


</td><td>

Check whether the language is supported


</td></tr>
<tr><td>

[removeEventListener(id)](./SYS_I18n.md)


</td><td>


</td><td>

Remove Event listener


</td></tr>
<tr><td>

[text(tag, namespace, language, args)](./SYS_I18n.md)


</td><td>


</td><td>

Output language text


</td></tr>
</tbody></table>

---

## 方法详情

### addlanguagechangedeventlistener

# SYS\_I18n.addLanguageChangedEventListener() method

Add a language change event listener

## Signature

```typescript
public addLanguageChangedEventListener(id: string, callFn: (newLanguage: string, lastLanguage: string) => void | Promise<void>, onlyOnce: boolean): void;
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

Event ID, used to prevent duplicate event registration


</td></tr>
<tr><td>

callFn


</td><td>

(newLanguage: string, lastLanguage: string) =&gt; void \| Promise&lt;void&gt;


</td><td>

The callback function triggered when the event fires


</td></tr>
<tr><td>

onlyOnce


</td><td>

boolean


</td><td>


</td></tr>
</tbody></table>



## Returns

void

### getallsupportedlanguages

# SYS\_I18n.getAllSupportedLanguages() method

Query all supported languages

## Signature

```typescript
public getAllSupportedLanguages(): Array<string>;
```


## Returns

Array&lt;string&gt;

List of all supported languages

### getcurrentlanguage

# SYS\_I18n.getCurrentLanguage() method

Get Current language environment

## Signature

```typescript
public getCurrentLanguage(): Promise<string>;
```


## Returns

Promise&lt;string&gt;

Language

## Remarks

The languages that can be obtained are limited by the languages currently supported by EDA. Languages supported by other APIs need to explicitly specify the `language` parameter to be used

### importmultilingual

# SYS\_I18n.importMultilingual() method

Import multilingual

## Signature

```typescript
public importMultilingual(language: string, source: ISYS_LanguageKeyValuePairs): boolean;
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

language


</td><td>

string


</td><td>

Language


</td></tr>
<tr><td>

source


</td><td>

[ISYS\_LanguageKeyValuePairs](../types/ISYS_LanguageKeyValuePairs.md)


</td><td>

The multilingual data object to import


</td></tr>
</tbody></table>



## Returns

boolean

Import whether it is successful

## Remarks

Note: This API is only valid for extensions. Calling it in a standalone script environment will always `throw Error`

### importmultilinguallanguage

# SYS\_I18n.importMultilingualLanguage() method

Import multilingual: specify namespace and language

## Signature

```typescript
public importMultilingualLanguage(namespace: string, language: string, source: ISYS_LanguageKeyValuePairs): boolean;
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

namespace


</td><td>

string


</td><td>

Namespace


</td></tr>
<tr><td>

language


</td><td>

string


</td><td>

Language


</td></tr>
<tr><td>

source


</td><td>

[ISYS\_LanguageKeyValuePairs](../types/ISYS_LanguageKeyValuePairs.md)


</td><td>

The multilingual data object to import


</td></tr>
</tbody></table>



## Returns

boolean

Import whether it is successful

### importmultilingualnamespace

# SYS\_I18n.importMultilingualNamespace() method

Import multilingual: specify namespace

## Signature

```typescript
public importMultilingualNamespace(namespace: string, source: ISYS_MultilingualLanguagesData): boolean;
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

namespace


</td><td>

string


</td><td>

Namespace


</td></tr>
<tr><td>

source


</td><td>

[ISYS\_MultilingualLanguagesData](../interfaces/ISYS_MultilingualLanguagesData.md)


</td><td>

The multilingual data object to import


</td></tr>
</tbody></table>



## Returns

boolean

Import whether it is successful

### iseventlisteneralreadyexist

# SYS\_I18n.isEventListenerAlreadyExist() method

Query whether the event listener exists

## Signature

```typescript
public isEventListenerAlreadyExist(id: string): boolean;
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

Event ID


</td></tr>
</tbody></table>



## Returns

boolean

Whether the event listener exists

### islanguagesupported

# SYS\_I18n.isLanguageSupported() method

Check whether the language is supported

## Signature

```typescript
public isLanguageSupported(language: string): boolean;
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

language


</td><td>

string


</td><td>

Language


</td></tr>
</tbody></table>



## Returns

boolean

Whether it is supported

### removeeventlistener

# SYS\_I18n.removeEventListener() method

Remove Event listener

## Signature

```typescript
public removeEventListener(id: string): boolean;
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

Event ID


</td></tr>
</tbody></table>



## Returns

boolean

Whether Remove Specify event listener

### text

# SYS\_I18n.text() method

Output language text

## Signature

```typescript
public text(tag: string, namespace?: string, language?: string, ...args: Array<any>): string;
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

tag


</td><td>

string


</td><td>

Text tag, corresponding to the key in the multilingual file key-value pairs


</td></tr>
<tr><td>

namespace


</td><td>

string


</td><td>

_(Optional)_ Text namespace. In the extension runtime environment, it defaults to the extension UUID; otherwise, it is the system default namespace


</td></tr>
<tr><td>

language


</td><td>

string


</td><td>

_(Optional)_ Language. `undefined` is the current display language of EDA


</td></tr>
<tr><td>

args


</td><td>

Array&lt;any&gt;


</td><td>

Arguments for replacing placeholders in the language text


</td></tr>
</tbody></table>



## Returns

string

Language text

## Remarks

Placeholders in the `${1}` format can be used to represent parameters;

Language priority: current display language &gt; system default language &gt; the first language in the data set that contains the text tag &gt; the text tag
