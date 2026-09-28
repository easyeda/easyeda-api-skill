# SYS\_FontManager class

System / font manager class

## Signature

```typescript
class SYS_FontManager
```

## Remarks

Configure the list of system fonts that EasyEDA Pro is allowed to use

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[addFont(fontName)](./SYS_FontManager.md)

</td><td>

</td><td>

Add Font to font list

</td></tr>
<tr><td>

[deleteFont(fontName)](./SYS_FontManager.md)

</td><td>

</td><td>

Delete the specified font from the font list

</td></tr>
<tr><td>

[getFontsList()](./SYS_FontManager.md)

</td><td>

</td><td>

Get the currently configured font list

</td></tr>
</tbody></table>

---

## 方法详情

### addfont

# SYS\_FontManager.addFont() method

Add Font to font list

## Signature

```typescript
function addFont(fontName: string): Promise<boolean>;
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

fontName

</td><td>

string

</td><td>

Font name

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Add Whether the operation is successful

## Example

```javascript
// 1. 添加一个字体到字体列表
const added = await eda.sys_FontManager.addFont('嘉立创示例_测试字体');

// 2. 确认字体已进入列表
const fonts = await eda.sys_FontManager.getFontsList();

// 3. 清理测试字体，恢复原有配置
await eda.sys_FontManager.deleteFont('嘉立创示例_测试字体');

console.log('添加结果：', added);
console.log('已进入字体列表：', fonts.includes('嘉立创示例_测试字体'));
```

### deletefont

# SYS\_FontManager.deleteFont() method

Delete the specified font from the font list

## Signature

```typescript
function deleteFont(fontName: string): Promise<boolean>;
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

fontName

</td><td>

string

</td><td>

Font name

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example

```javascript
// 1. 准备一个待删除的测试字体
await eda.sys_FontManager.addFont('嘉立创示例_测试字体');

// 2. 从字体列表删除该字体
const deleted = await eda.sys_FontManager.deleteFont('嘉立创示例_测试字体');

// 3. 确认字体已不在列表中
const fonts = await eda.sys_FontManager.getFontsList();

console.log('删除结果：', deleted);
console.log('已不在字体列表：', !fonts.includes('嘉立创示例_测试字体'));
```

### getfontslist

# SYS\_FontManager.getFontsList() method

Get the currently configured font list

## Signature

```typescript
function getFontsList(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

Font list

## Example

```javascript
// 1. 获取当前已配置的字体列表
const fonts = await eda.sys_FontManager.getFontsList();

// 2. 输出字体数量与全部字体名
console.log('字体数量：', fonts.length);
console.log('字体列表：', fonts.join('、'));
```
