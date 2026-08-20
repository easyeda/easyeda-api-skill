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

## Example


```javascript
// 1. 注册语言切换监听（回调要等用户真实切换语言时才会触发）
eda.sys_I18n.addLanguageChangedEventListener(
  '嘉立创示例_语言监听',
  (newLanguage, lastLanguage) => {
    console.log('语言已切换：', lastLanguage, '→', newLanguage);
  },
  false,
);

// 2. 确认监听已注册
console.log('监听已注册：', eda.sys_I18n.isEventListenerAlreadyExist('嘉立创示例_语言监听'));

// 3. 移除监听，恢复原状（保证案例可重复运行）
console.log('已移除监听：', eda.sys_I18n.removeEventListener('嘉立创示例_语言监听'));
```

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

## Example


```javascript
// 1. 获取所有支持的语言代码
const languages = eda.sys_I18n.getAllSupportedLanguages();

// 2. 输出语言总数，并确认常用语言在列表中
console.log('支持的语言数量：', languages.length);
console.log(
  '常用语言受支持：',
  ['zh-Hans', 'zh-Hant', 'en', 'ja'].every((lang) => languages.includes(lang)),
);
```

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

## Example


```javascript
// 1. 获取当前显示语言
const current = await eda.sys_I18n.getCurrentLanguage();

// 2. 判断当前是否中文环境
console.log('当前语言：', current);
console.log('是否中文环境：', current.startsWith('zh'));
```

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

## Example


```javascript
// 1. 向默认命名空间导入简体中文文案（${1} 是占位符，取文案时传实际参数）
const imported = eda.sys_I18n.importMultilingual('zh-Hans', {
  '嘉立创示例_问候': '你好，${1}！欢迎回来',
});

// 2. 用 text() 按标签取回文案，占位符由参数替换
const message = eda.sys_I18n.text('嘉立创示例_问候', undefined, 'zh-Hans', '工程师');

console.log('导入结果：', imported);
console.log('取回文案：', message);
```

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

## Example


```javascript
// 1. 向命名空间导入繁体中文文案
const imported = eda.sys_I18n.importMultilingualLanguage('嘉立创示例_语言包', 'zh-Hant', {
  '示例_问候': '妳好，${1}',
});

// 2. 用 text() 指定命名空间和语言取回文案
const message = eda.sys_I18n.text('示例_问候', '嘉立创示例_语言包', 'zh-Hant', '用戶');

console.log('导入结果：', imported);
console.log('繁体文案：', message);
```

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

## Example


```javascript
// 1. 组装多语言数据：语言代码 → 键值对
const languagesData = {
  'zh-Hans': { '示例_问候': '你好，${1}' },
  en: { '示例_问候': 'Hello, ${1}' },
};

// 2. 一次性导入整个命名空间
const imported = eda.sys_I18n.importMultilingualNamespace('嘉立创示例_多语言', languagesData);

// 3. 同一标签分别取中英文文案
const zhText = eda.sys_I18n.text('示例_问候', '嘉立创示例_多语言', 'zh-Hans', '工程师');
const enText = eda.sys_I18n.text('示例_问候', '嘉立创示例_多语言', 'en', 'engineer');

console.log('导入结果：', imported);
console.log('中文文案：', zhText);
console.log('英文文案：', enText);
```

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

## Example


```javascript
// 1. 注册一个测试监听作为查询对象
eda.sys_I18n.addLanguageChangedEventListener('嘉立创示例_查询监听', () => {}, false);

// 2. 查询已注册与未注册的 ID
console.log('已注册的 ID 存在：', eda.sys_I18n.isEventListenerAlreadyExist('嘉立创示例_查询监听'));
console.log('未注册的 ID 存在：', eda.sys_I18n.isEventListenerAlreadyExist('嘉立创示例_未注册'));

// 3. 清理测试监听
eda.sys_I18n.removeEventListener('嘉立创示例_查询监听');
console.log('已清理测试监听');
```

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

## Example


```javascript
// 1. 检查受支持的语言代码
console.log('en 是否受支持：', eda.sys_I18n.isLanguageSupported('en'));
console.log('zh-Hans 是否受支持：', eda.sys_I18n.isLanguageSupported('zh-Hans'));

// 2. 检查不受支持的写法（zh-CN 不是 EDA 的语言代码风格）
console.log('zh-CN 是否受支持：', eda.sys_I18n.isLanguageSupported('zh-CN'));
```

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

## Example


```javascript
// 1. 先注册一个测试监听作为移除对象
eda.sys_I18n.addLanguageChangedEventListener('嘉立创示例_移除监听', () => {}, false);

// 2. 第一次移除：ID 存在，返回 true
console.log('第一次移除成功：', eda.sys_I18n.removeEventListener('嘉立创示例_移除监听'));

// 3. 第二次移除：ID 已不存在，返回 false
console.log('第二次移除成功：', eda.sys_I18n.removeEventListener('嘉立创示例_移除监听'));
```

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

## Example


```javascript
// 1. 先导入一份多语言数据作为取文本的数据源
eda.sys_I18n.importMultilingualNamespace('嘉立创示例_取文本', {
  'zh-Hans': { '示例_问候': '你好，${1}！今天是${2}' },
  en: { '示例_问候': 'Hello, ${1}! Today is ${2}' },
});

// 2. 指定语言取文案，占位符按参数顺序替换
const greeting = eda.sys_I18n.text('示例_问候', '嘉立创示例_取文本', 'en', 'Tom', 'Monday');

// 3. 不传语言则用 EDA 当前显示语言；缺参的占位符原样保留
const current = await eda.sys_I18n.getCurrentLanguage();
const localized = eda.sys_I18n.text('示例_问候', '嘉立创示例_取文本', undefined, '嘉立创');

// 4. 标签不存在时回退为标签本身
const missing = eda.sys_I18n.text('示例_不存在的标签', '嘉立创示例_取文本');

console.log('当前语言：', current);
console.log('英文文案：', greeting);
console.log('当前语言文案：', localized);
console.log('缺失标签回退：', missing);
```
