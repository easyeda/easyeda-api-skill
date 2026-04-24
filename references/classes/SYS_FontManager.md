# SYS\_FontManager class

系统 / 字体管理类

## Signature

```typescript
declare class SYS_FontManager 
```

## Remarks

配置嘉立创 EDA 专业版允许调用的系统字体列表

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

添加字体到字体列表


</td></tr>
<tr><td>

[deleteFont(fontName)](./SYS_FontManager.md)


</td><td>


</td><td>

删除字体列表内的指定字体


</td></tr>
<tr><td>

[getFontsList()](./SYS_FontManager.md)


</td><td>


</td><td>

获取当前已经配置的字体列表


</td></tr>
</tbody></table>

---

## 方法详情

### addfont

# SYS\_FontManager.addFont() method

添加字体到字体列表

## Signature

```typescript
addFont(fontName: string): Promise<boolean>;
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

字体名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

添加操作是否成功

### deletefont

# SYS\_FontManager.deleteFont() method

删除字体列表内的指定字体

## Signature

```typescript
deleteFont(fontName: string): Promise<boolean>;
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

字体名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### getfontslist

# SYS\_FontManager.getFontsList() method

获取当前已经配置的字体列表

## Signature

```typescript
getFontsList(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

字体列表
