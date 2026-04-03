# SYS\_FontManager class

系统 / 字体管理类

## 签名

```typescript
declare class SYS_FontManager 
```

## 备注

配置嘉立创 EDA 专业版允许调用的系统字体列表

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

## 签名

```typescript
addFont(fontName: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

fontName


</td><td>

string


</td><td>

字体名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

添加操作是否成功

### deletefont

# SYS\_FontManager.deleteFont() method

删除字体列表内的指定字体

## 签名

```typescript
deleteFont(fontName: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

fontName


</td><td>

string


</td><td>

字体名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### getfontslist

# SYS\_FontManager.getFontsList() method

获取当前已经配置的字体列表

## 签名

```typescript
getFontsList(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

字体列表
