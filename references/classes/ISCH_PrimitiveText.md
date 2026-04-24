# ISCH\_PrimitiveText class

文本图元

## Signature

```typescript
declare class ISCH_PrimitiveText implements ISCH_Primitive 
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_AlignMode()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：对齐模式


</td></tr>
<tr><td>

[getState\_Bold()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：是否加粗


</td></tr>
<tr><td>

[getState\_Content()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：文本内容


</td></tr>
<tr><td>

[getState\_FontName()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：字体名称


</td></tr>
<tr><td>

[getState\_FontSize()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：字体大小


</td></tr>
<tr><td>

[getState\_Italic()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：是否斜体


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_TextColor()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：文本颜色


</td></tr>
<tr><td>

[getState\_UnderLine()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：是否加下划线


</td></tr>
<tr><td>

[getState\_X()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：坐标 X


</td></tr>
<tr><td>

[getState\_Y()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

获取属性状态：坐标 Y


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_AlignMode(alignMode)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：对齐模式


</td></tr>
<tr><td>

[setState\_Bold(bold)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否加粗


</td></tr>
<tr><td>

[setState\_Content(content)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：文本内容


</td></tr>
<tr><td>

[setState\_FontName(fontName)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：字体名称


</td></tr>
<tr><td>

[setState\_FontSize(fontSize)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：字体大小


</td></tr>
<tr><td>

[setState\_Italic(italic)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否斜体


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_TextColor(textColor)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：文本颜色


</td></tr>
<tr><td>

[setState\_UnderLine(underLine)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否加下划线


</td></tr>
<tr><td>

[setState\_X(x)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 X


</td></tr>
<tr><td>

[setState\_Y(y)](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 Y


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveText.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveText.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<ISCH_PrimitiveText>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;

文本图元对象

### getstate_alignmode

# ISCH\_PrimitiveText.getState\_AlignMode() method

获取属性状态：对齐模式

## Signature

```typescript
getState_AlignMode(): ESCH_PrimitiveTextAlignMode;
```


## Returns

[ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md)

对齐模式

### getstate_bold

# ISCH\_PrimitiveText.getState\_Bold() method

获取属性状态：是否加粗

## Signature

```typescript
getState_Bold(): boolean;
```


## Returns

boolean

是否加粗

### getstate_content

# ISCH\_PrimitiveText.getState\_Content() method

获取属性状态：文本内容

## Signature

```typescript
getState_Content(): string;
```


## Returns

string

文本内容

### getstate_fontname

# ISCH\_PrimitiveText.getState\_FontName() method

获取属性状态：字体名称

## Signature

```typescript
getState_FontName(): string | null;
```


## Returns

string \| null

字体名称

### getstate_fontsize

# ISCH\_PrimitiveText.getState\_FontSize() method

获取属性状态：字体大小

## Signature

```typescript
getState_FontSize(): number | null;
```


## Returns

number \| null

字体大小

### getstate_italic

# ISCH\_PrimitiveText.getState\_Italic() method

获取属性状态：是否斜体

## Signature

```typescript
getState_Italic(): boolean;
```


## Returns

boolean

是否斜体

### getstate_primitiveid

# ISCH\_PrimitiveText.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveText.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_rotation

# ISCH\_PrimitiveText.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
getState_Rotation(): number;
```


## Returns

number

旋转角度

### getstate_textcolor

# ISCH\_PrimitiveText.getState\_TextColor() method

获取属性状态：文本颜色

## Signature

```typescript
getState_TextColor(): string | null;
```


## Returns

string \| null

文本颜色

### getstate_underline

# ISCH\_PrimitiveText.getState\_UnderLine() method

获取属性状态：是否加下划线

## Signature

```typescript
getState_UnderLine(): boolean;
```


## Returns

boolean

是否加下划线

### getstate_x

# ISCH\_PrimitiveText.getState\_X() method

获取属性状态：坐标 X

## Signature

```typescript
getState_X(): number;
```


## Returns

number

坐标 X

### getstate_y

# ISCH\_PrimitiveText.getState\_Y() method

获取属性状态：坐标 Y

## Signature

```typescript
getState_Y(): number;
```


## Returns

number

坐标 Y

### isasync

# ISCH\_PrimitiveText.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# ISCH\_PrimitiveText.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<ISCH_PrimitiveText>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;

文本图元对象

### setstate_alignmode

# ISCH\_PrimitiveText.setState\_AlignMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：对齐模式

## Signature

```typescript
setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode): ISCH_PrimitiveText;
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

alignMode


</td><td>

[ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md)


</td><td>

对齐模式


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_bold

# ISCH\_PrimitiveText.setState\_Bold() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否加粗

## Signature

```typescript
setState_Bold(bold: boolean): ISCH_PrimitiveText;
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

bold


</td><td>

boolean


</td><td>

是否加粗


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_content

# ISCH\_PrimitiveText.setState\_Content() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：文本内容

## Signature

```typescript
setState_Content(content: string): ISCH_PrimitiveText;
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

content


</td><td>

string


</td><td>

文本内容


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_fontname

# ISCH\_PrimitiveText.setState\_FontName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：字体名称

## Signature

```typescript
setState_FontName(fontName: string | null): ISCH_PrimitiveText;
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

string \| null


</td><td>

字体名称


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_fontsize

# ISCH\_PrimitiveText.setState\_FontSize() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：字体大小

## Signature

```typescript
setState_FontSize(fontSize: number | null): ISCH_PrimitiveText;
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

fontSize


</td><td>

number \| null


</td><td>

字体大小


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_italic

# ISCH\_PrimitiveText.setState\_Italic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否斜体

## Signature

```typescript
setState_Italic(italic: boolean): ISCH_PrimitiveText;
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

italic


</td><td>

boolean


</td><td>

是否斜体


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_rotation

# ISCH\_PrimitiveText.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：旋转角度

## Signature

```typescript
setState_Rotation(rotation: number): ISCH_PrimitiveText;
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

rotation


</td><td>

number


</td><td>

旋转角度


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_textcolor

# ISCH\_PrimitiveText.setState\_TextColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：文本颜色

## Signature

```typescript
setState_TextColor(textColor: string | null): ISCH_PrimitiveText;
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

textColor


</td><td>

string \| null


</td><td>

文本颜色


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_underline

# ISCH\_PrimitiveText.setState\_UnderLine() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否加下划线

## Signature

```typescript
setState_UnderLine(underLine: boolean): ISCH_PrimitiveText;
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

underLine


</td><td>

boolean


</td><td>

是否加下划线


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_x

# ISCH\_PrimitiveText.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 X

## Signature

```typescript
setState_X(x: number): ISCH_PrimitiveText;
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

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### setstate_y

# ISCH\_PrimitiveText.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 Y

## Signature

```typescript
setState_Y(y: number): ISCH_PrimitiveText;
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

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### toasync

# ISCH\_PrimitiveText.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): ISCH_PrimitiveText;
```


## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象

### tosync

# ISCH\_PrimitiveText.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): ISCH_PrimitiveText;
```


## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

文本图元对象
