# ISCH\_PrimitiveText class

Text primitive

## Signature

```typescript
class ISCH_PrimitiveText implements ISCH_Primitive
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

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_AlignMode()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: alignment mode

</td></tr>
<tr><td>

[getState\_Bold()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: whether it is bold

</td></tr>
<tr><td>

[getState\_Content()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: text content

</td></tr>
<tr><td>

[getState\_FontName()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: font name

</td></tr>
<tr><td>

[getState\_FontSize()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: font size

</td></tr>
<tr><td>

[getState\_Italic()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: whether it is italic

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: rotation angle

</td></tr>
<tr><td>

[getState\_TextColor()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: text color

</td></tr>
<tr><td>

[getState\_UnderLine()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: whether it is underlined

</td></tr>
<tr><td>

[getState\_X()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: X coordinate

</td></tr>
<tr><td>

[getState\_Y()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Get the property state: Y coordinate

</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_AlignMode(alignMode)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: alignment mode

</td></tr>
<tr><td>

[setState\_Bold(bold)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is bold

</td></tr>
<tr><td>

[setState\_Content(content)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: text content

</td></tr>
<tr><td>

[setState\_FontName(fontName)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: font name

</td></tr>
<tr><td>

[setState\_FontSize(fontSize)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: font size

</td></tr>
<tr><td>

[setState\_Italic(italic)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is italic

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: rotation angle

</td></tr>
<tr><td>

[setState\_TextColor(textColor)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: text color

</td></tr>
<tr><td>

[setState\_UnderLine(underLine)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is underlined

</td></tr>
<tr><td>

[setState\_X(x)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: X coordinate

</td></tr>
<tr><td>

[setState\_Y(y)](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Y coordinate

</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveText.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveText.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitiveText>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_初版');

// 3. 切换异步模式，累计两处修改（改文字 + 换红色）
const asyncText = text.toAsync();
asyncText.setState_Content('嘉立创示例_V2');
asyncText.setState_TextColor('#FF0000');

// 4. 一次性提交到画布
await asyncText.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('content:', '嘉立创示例_初版', '→', refetched.getState_Content());
console.log('textColor:', '#FF0000', '→', refetched.getState_TextColor());
```

### getstate_alignmode

# ISCH\_PrimitiveText.getState\_AlignMode() method

Get the property state: alignment mode

## Signature

```typescript
function getState_AlignMode(): ESCH_PrimitiveTextAlignMode;
```

## Returns

[ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md)

Alignment mode

## Example

```javascript
// 1. 创建一个右下对齐的测试文本（第 11 参是对齐模式，9 = RIGHT_BOTTOM）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_对齐', 0, null, null, null, false, false, false, 9);

// 2. 读取对齐模式
const alignMode = text.getState_AlignMode();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('alignMode:', alignMode);
```

### getstate_bold

# ISCH\_PrimitiveText.getState\_Bold() method

Get the property state: whether it is bold

## Signature

```typescript
function getState_Bold(): boolean;
```

## Returns

boolean

Whether it is bold

## Example

```javascript
// 1. 创建一个加粗的测试文本（第 8 参是是否加粗）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_重点', 0, null, null, null, true);

// 2. 读取是否加粗
const bold = text.getState_Bold();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('bold:', bold);
```

### getstate_content

# ISCH\_PrimitiveText.getState\_Content() method

Get the property state: text content

## Signature

```typescript
function getState_Content(): string;
```

## Returns

string

Text content

## Example

```javascript
// 1. 创建一个测试文本（SCH 坐标单位 10mil，第 3 参是文字内容）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_标题');

// 2. 读取文字内容
const content = text.getState_Content();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('content:', content);
```

### getstate_fontname

# ISCH\_PrimitiveText.getState\_FontName() method

Get the property state: font name

## Signature

```typescript
function getState_FontName(): string | null;
```

## Returns

string \| null

Font name

## Example

```javascript
// 1. 创建一个指定 Arial 字体的测试文本（第 6 参是字体名称）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_字体', 0, null, 'Arial');

// 2. 读取字体名称
const fontName = text.getState_FontName();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('fontName:', fontName);
```

### getstate_fontsize

# ISCH\_PrimitiveText.getState\_FontSize() method

Get the property state: font size

## Signature

```typescript
function getState_FontSize(): number | null;
```

## Returns

number \| null

Font size

## Example

```javascript
// 1. 创建一个字号 20 的测试文本（第 7 参是字体大小）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_大标题', 0, null, null, 20);

// 2. 读取字体大小
const fontSize = text.getState_FontSize();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('fontSize:', fontSize);
```

### getstate_italic

# ISCH\_PrimitiveText.getState\_Italic() method

Get the property state: whether it is italic

## Signature

```typescript
function getState_Italic(): boolean;
```

## Returns

boolean

Whether it is italic

## Example

```javascript
// 1. 创建一个斜体的测试文本（第 9 参是是否斜体）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_注释', 0, null, null, null, false, true);

// 2. 读取是否斜体
const italic = text.getState_Italic();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('italic:', italic);
```

### getstate_primitiveid

# ISCH\_PrimitiveText.getState\_PrimitiveId() method

Get the property state: primitive ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

Primitive ID

## Example

```javascript
// 1. 创建一个测试文本
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_文本');

// 2. 读取图元 ID
const primitiveId = text.getState_PrimitiveId();

// 3. 用 ID 从画布重取实例，验证 ID 有效
const refetched = await eda.sch_PrimitiveText.get(primitiveId);

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetched content:', refetched.getState_Content());
```

### getstate_primitivetype

# ISCH\_PrimitiveText.getState\_PrimitiveType() method

Get the property state: primitive type

## Signature

```typescript
function getState_PrimitiveType(): ESCH_PrimitiveType;
```

## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

Primitive type

## Example

```javascript
// 1. 创建一个测试文本
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_文本');

// 2. 读取图元类型
const primitiveType = text.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_rotation

# ISCH\_PrimitiveText.getState\_Rotation() method

Get the property state: rotation angle

## Signature

```typescript
function getState_Rotation(): number;
```

## Returns

number

Rotation angle

## Example

```javascript
// 1. 创建一个旋转 90° 的测试文本（第 4 参是旋转角，SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_竖排', 90);

// 2. 读取旋转角度
const rotation = text.getState_Rotation();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('rotation:', rotation);
```

### getstate_textcolor

# ISCH\_PrimitiveText.getState\_TextColor() method

Get the property state: text color

## Signature

```typescript
function getState_TextColor(): string | null;
```

## Returns

string \| null

Text color

## Example

```javascript
// 1. 创建一个红色文字的测试文本（第 5 参是文字颜色）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_警示', 0, '#FF0000');

// 2. 读取文字颜色
const textColor = text.getState_TextColor();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('textColor:', textColor);
```

### getstate_underline

# ISCH\_PrimitiveText.getState\_UnderLine() method

Get the property state: whether it is underlined

## Signature

```typescript
function getState_UnderLine(): boolean;
```

## Returns

boolean

Whether it is underlined

## Example

```javascript
// 1. 创建一个带下划线的测试文本（第 10 参是是否下划线）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_强调', 0, null, null, null, false, false, true);

// 2. 读取是否加下划线
const underLine = text.getState_UnderLine();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('underLine:', underLine);
```

### getstate_x

# ISCH\_PrimitiveText.getState\_X() method

Get the property state: X coordinate

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

X coordinate

## Example

```javascript
// 1. 创建一个测试文本（SCH 坐标单位 10mil，1mm ≈ 3.937 单位）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_文本');

// 2. 读取定位点 X 坐标
const x = text.getState_X();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('x:', x);
```

### getstate_y

# ISCH\_PrimitiveText.getState\_Y() method

Get the property state: Y coordinate

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

Y coordinate

## Example

```javascript
// 1. 创建一个测试文本（SCH 坐标单位 10mil，1mm ≈ 3.937 单位）
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_文本');

// 2. 读取定位点 Y 坐标
const y = text.getState_Y();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('y:', y);
```

### isasync

# ISCH\_PrimitiveText.isAsync() method

Query whether the primitive is an async primitive

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

Whether Is async primitive

## Example

```javascript
// 1. 创建一个测试文本，创建后默认处于异步模式
const text = await eda.sch_PrimitiveText.create(400, 300, '嘉立创示例_文本');
const asyncOnCreate = text.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
text.toSync();
const asyncAfterToSync = text.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveText.delete([text.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# ISCH\_PrimitiveText.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<ISCH_PrimitiveText>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个黑色文字的测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_保留', 0, '#000000');

// 3. 切换异步模式，累计一处未提交的修改（文字内容 → 误改值）
const asyncText = text.toAsync();
asyncText.setState_Content('嘉立创示例_误改');

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncText.reset();

// 5. 从画布重新读取，文字内容仍是原值（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('content after reset:', refetched.getState_Content());
```

### setstate_alignmode

# ISCH\_PrimitiveText.setState\_AlignMode() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: alignment mode

## Signature

```typescript
function setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode): ISCH_PrimitiveText;
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

Alignment mode

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_对齐');

// 3. 切换异步模式，修改对齐模式
const asyncText = text.toAsync();
asyncText.setState_AlignMode(1);
await asyncText.done();

// 4. 从画布重新读取对齐模式（读回 5 = CENTER，按读回值确认效果；保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('alignMode:', 1, '→', refetched.getState_AlignMode());
```

### setstate_bold

# ISCH\_PrimitiveText.setState\_Bold() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is bold

## Signature

```typescript
function setState_Bold(bold: boolean): ISCH_PrimitiveText;
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

Whether it is bold

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个常规字重的测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_标题');

// 3. 切换异步模式，加粗
const asyncText = text.toAsync();
asyncText.setState_Bold(true);
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('bold:', false, '→', refetched.getState_Bold());
```

### setstate_content

# ISCH\_PrimitiveText.setState\_Content() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: text content

## Signature

```typescript
function setState_Content(content: string): ISCH_PrimitiveText;
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

Text content

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_初版');

// 3. 切换异步模式，改写文字内容
const asyncText = text.toAsync();
asyncText.setState_Content('嘉立创示例_定稿');
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('content:', '嘉立创示例_初版', '→', refetched.getState_Content());
```

### setstate_fontname

# ISCH\_PrimitiveText.setState\_FontName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: font name

## Signature

```typescript
function setState_FontName(fontName: string | null): ISCH_PrimitiveText;
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

Font name

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个默认字体的测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_标题');

// 3. 切换异步模式，换成 Arial 字体
const asyncText = text.toAsync();
asyncText.setState_FontName('Arial');
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('fontName:', text.getState_FontName(), '→', refetched.getState_FontName());
```

### setstate_fontsize

# ISCH\_PrimitiveText.setState\_FontSize() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: font size

## Signature

```typescript
function setState_FontSize(fontSize: number | null): ISCH_PrimitiveText;
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

Font size

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个默认字号的测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_标题');

// 3. 切换异步模式，把字号增大到 20
const asyncText = text.toAsync();
asyncText.setState_FontSize(20);
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('fontSize:', text.getState_FontSize(), '→', refetched.getState_FontSize());
```

### setstate_italic

# ISCH\_PrimitiveText.setState\_Italic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is italic

## Signature

```typescript
function setState_Italic(italic: boolean): ISCH_PrimitiveText;
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

Whether it is italic

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个常规字形的测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_注释');

// 3. 切换异步模式，改为斜体
const asyncText = text.toAsync();
asyncText.setState_Italic(true);
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('italic:', false, '→', refetched.getState_Italic());
```

### setstate_rotation

# ISCH\_PrimitiveText.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: rotation angle

## Signature

```typescript
function setState_Rotation(rotation: number): ISCH_PrimitiveText;
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

Rotation angle

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_横排');

// 3. 切换异步模式，旋转 90° 变竖排
const asyncText = text.toAsync();
asyncText.setState_Rotation(90);
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('rotation:', 0, '→', refetched.getState_Rotation());
```

### setstate_textcolor

# ISCH\_PrimitiveText.setState\_TextColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: text color

## Signature

```typescript
function setState_TextColor(textColor: string | null): ISCH_PrimitiveText;
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

Text color

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个黑色文字的测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_说明', 0, '#000000');

// 3. 切换异步模式，把文字换成红色警示色
const asyncText = text.toAsync();
asyncText.setState_TextColor('#FF0000');
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('textColor:', '#000000', '→', refetched.getState_TextColor());
```

### setstate_underline

# ISCH\_PrimitiveText.setState\_UnderLine() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is underlined

## Signature

```typescript
function setState_UnderLine(underLine: boolean): ISCH_PrimitiveText;
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

Whether it is underlined

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个无下划线的测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_V1.0');

// 3. 切换异步模式，加下划线
const asyncText = text.toAsync();
asyncText.setState_UnderLine(true);
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('underLine:', false, '→', refetched.getState_UnderLine());
```

### setstate_x

# ISCH\_PrimitiveText.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: X coordinate

## Signature

```typescript
function setState_X(x: number): ISCH_PrimitiveText;
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

X coordinate

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_文本');

// 3. 切换异步模式，把定位点 X 移到 x + 300
const asyncText = text.toAsync();
asyncText.setState_X(x + 300);
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('x:', x, '→', refetched.getState_X());
```

### setstate_y

# ISCH\_PrimitiveText.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Y coordinate

## Signature

```typescript
function setState_Y(y: number): ISCH_PrimitiveText;
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

Y coordinate

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（SCH 坐标单位 10mil）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_文本');

// 3. 切换异步模式，把定位点 Y 移到 y + 200
const asyncText = text.toAsync();
asyncText.setState_Y(y + 200);
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('y:', y, '→', refetched.getState_Y());
```

### toasync

# ISCH\_PrimitiveText.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): ISCH_PrimitiveText;
```

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（创建后默认已处于异步模式）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_文本');

// 3. 显式转换为异步图元（返回自身，可链式累计修改后提交）
const asyncText = text.toAsync();
asyncText.setState_Content('嘉立创示例_已更新');
await asyncText.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('isAsync after toAsync:', text.isAsync());
console.log('content:', '嘉立创示例_文本', '→', refetched.getState_Content());
```

### tosync

# ISCH\_PrimitiveText.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): ISCH_PrimitiveText;
```

## Returns

[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)

Text primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试文本重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试文本（创建后默认处于异步模式）
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_文本');

// 3. 转换为同步图元
const syncText = text.toSync();

// 4. 同步模式下把文字改为定稿内容，立即生效，无需 done()
syncText.setState_Content('嘉立创示例_定稿');

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveText.get(text.getState_PrimitiveId());

console.log('isAsync after toSync:', text.isAsync());
console.log('content:', '嘉立创示例_文本', '→', refetched.getState_Content());
```
