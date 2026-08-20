# SYS\_FontManager class

System / font manager class

## Signature

```typescript
export class SYS_FontManager 
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
public addFont(fontName: string): Promise<boolean>;
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

### deletefont

# SYS\_FontManager.deleteFont() method

Delete the specified font from the font list

## Signature

```typescript
public deleteFont(fontName: string): Promise<boolean>;
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

### getfontslist

# SYS\_FontManager.getFontsList() method

Get the currently configured font list

## Signature

```typescript
public getFontsList(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Font list
