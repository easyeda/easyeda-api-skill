# SCH\_PrimitiveText class

Schematic &amp; symbol / text primitive class

## Signature

```typescript
export class SCH_PrimitiveText implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(x, y, content, rotation, textColor, fontName, fontSize, bold, italic, underLine, alignMode)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Create Text


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Delete Text


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get Text


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get Text


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get all Text


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Get all Text primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** Modify Text


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveText.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Text

## Signature

```typescript
public create(x: number, y: number, content: string, rotation?: number, textColor?: string | null, fontName?: string | null, fontSize?: number | null, bold?: boolean, italic?: boolean, underLine?: boolean, alignMode?: ESCH_PrimitiveTextAlignMode): Promise<ISCH_PrimitiveText | undefined>;
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
<tr><td>

y


</td><td>

number


</td><td>

Y coordinate


</td></tr>
<tr><td>

content


</td><td>

string


</td><td>

Text content


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle. Options: `0` `90` `180` `270`


</td></tr>
<tr><td>

textColor


</td><td>

string \| null


</td><td>

_(Optional)_ Text color, `null` indicates the default


</td></tr>
<tr><td>

fontName


</td><td>

string \| null


</td><td>

_(Optional)_ Font name, `null` indicates the default


</td></tr>
<tr><td>

fontSize


</td><td>

number \| null


</td><td>

_(Optional)_ Font size. `null` indicates the default


</td></tr>
<tr><td>

bold


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is bold


</td></tr>
<tr><td>

italic


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is italic


</td></tr>
<tr><td>

underLine


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is underlined


</td></tr>
<tr><td>

alignMode


</td><td>

[ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md)


</td><td>

_(Optional)_ Alignment mode


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

Text primitive object

## Example


```javascript
// 1. 生成随机坐标，避免与画布上已有的文本重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段完整样式的文本：旋转 90 度、红色、Arial 字体、字号 20、加粗、带下划线、居中对齐（CENTER = 5）
const text = await eda.sch_PrimitiveText.create(
  x,
  y,
  '嘉立创示例_设计说明',
  90,
  '#FF0000',
  'Arial',
  20,
  true,
  false,
  true,
  5
);

// 3. 创建类保留现场，不删除图元；读回各属性确认样式已生效
console.log('primitiveId:', text.getState_PrimitiveId());
console.log('primitiveType:', text.getState_PrimitiveType());
console.log('position:', text.getState_X(), text.getState_Y());
console.log('content:', text.getState_Content());
console.log('rotation:', text.getState_Rotation());
console.log('textColor:', text.getState_TextColor());
console.log('fontName:', text.getState_FontName());
console.log('fontSize:', text.getState_FontSize());
console.log('bold:', text.getState_Bold());
console.log('italic:', text.getState_Italic());
console.log('underLine:', text.getState_UnderLine());
console.log('alignMode:', text.getState_AlignMode());
```

### delete

# SCH\_PrimitiveText.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Text

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>;
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

primitiveIds


</td><td>

string \| [ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;


</td><td>

Text primitive ID or Text primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试文本（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const text1 = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_待删除A');
const text2 = await eda.sch_PrimitiveText.create(x, y + 300, '嘉立创示例_待删除B');

// 2. 记录删除前的文本数量
const beforeCount = (await eda.sch_PrimitiveText.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两个文本
const deleted1 = await eda.sch_PrimitiveText.delete(text1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitiveText.delete(text2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveText.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveText.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Text

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>;
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

primitiveIds


</td><td>

string


</td><td>

Text primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

Text primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 在画布空白处创建两个测试文本（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const text1 = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_文本A', 0, '#FF0000');
const text2 = await eda.sch_PrimitiveText.create(x, y + 300, '嘉立创示例_文本B', 0, '#0000FF');
const id1 = text1.getState_PrimitiveId();
const id2 = text2.getState_PrimitiveId();

// 2. 传单个 ID 字符串，返回单个文本对象
const single = await eda.sch_PrimitiveText.get(id1);

// 3. 传 ID 数组，返回文本对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveText.get([id1, id2]);

// 4. 清理测试文本（查询类需要清理）
await eda.sch_PrimitiveText.delete([id1, id2]);

console.log('single content:', single.getState_Content());
console.log('single color:', single.getState_TextColor());
console.log('array length:', arr.length);
console.log('textB content:', arr[1].getState_Content());
console.log('textB color:', arr[1].getState_TextColor());
```

### get_1

# SCH\_PrimitiveText.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Text

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>;
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

primitiveIds


</td><td>

Array&lt;string&gt;


</td><td>

Text primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;&gt;

Text primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveText.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Text

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveText>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;&gt;

Array of Text primitive objects

## Example


```javascript
// 1. 创建一个测试文本作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_查找目标', 0, '#FF0000');
const textId = text.getState_PrimitiveId();

// 2. 获取当前原理图页的全部文本
const all = await eda.sch_PrimitiveText.getAll();

// 3. 清理测试文本（查询类需要清理）
await eda.sch_PrimitiveText.delete([textId]);

console.log('total texts:', all.length);
console.log('marker text found:', all.some(t => t.getState_PrimitiveId() === textId));
console.log('marker content:', all.find(t => t.getState_PrimitiveId() === textId).getState_Content());
console.log('marker color:', all.find(t => t.getState_PrimitiveId() === textId).getState_TextColor());
```

### getallprimitiveid

# SCH\_PrimitiveText.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Text primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Text primitive IDs

## Example


```javascript
// 1. 创建一个测试文本作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_ID查找目标');
const textId = text.getState_PrimitiveId();

// 2. 获取全部文本的图元 ID
const allIds = await eda.sch_PrimitiveText.getAllPrimitiveId();

// 3. 清理测试文本（查询类需要清理）
await eda.sch_PrimitiveText.delete([textId]);

console.log('total text ids:', allIds.length);
console.log('marker id in list:', allIds.includes(textId));
```

### modify

# SCH\_PrimitiveText.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Text

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveText, property: { x?: undefined | number; y?: undefined | number; content?: undefined | string; rotation?: undefined | number; textColor?: undefined | null | string; fontName?: undefined | null | string; fontSize?: undefined | null | number; bold?: undefined | false | true; italic?: undefined | false | true; underLine?: undefined | false | true; alignMode?: undefined | ESCH_PrimitiveTextAlignMode.LEFT_TOP | ESCH_PrimitiveTextAlignMode.LEFT_MIDDLE | ESCH_PrimitiveTextAlignMode.LEFT_BOTTOM | ESCH_PrimitiveTextAlignMode.CENTER_TOP | ESCH_PrimitiveTextAlignMode.CENTER | ESCH_PrimitiveTextAlignMode.CENTER_BOTTOM | ESCH_PrimitiveTextAlignMode.RIGHT_TOP | ESCH_PrimitiveTextAlignMode.RIGHT_MIDDLE | ESCH_PrimitiveTextAlignMode.RIGHT_BOTTOM }): Promise<ISCH_PrimitiveText | undefined>;
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

primitiveId


</td><td>

string \| [ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: undefined \| number; y?: undefined \| number; content?: undefined \| string; rotation?: undefined \| number; textColor?: undefined \| null \| string; fontName?: undefined \| null \| string; fontSize?: undefined \| null \| number; bold?: undefined \| false \| true; italic?: undefined \| false \| true; underLine?: undefined \| false \| true; alignMode?: undefined \| [ESCH\_PrimitiveTextAlignMode.LEFT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

Text primitive object

## Example


```javascript
// 1. 创建待修改的测试文本：默认样式（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const text = await eda.sch_PrimitiveText.create(x, y, '嘉立创示例_原始文本');
const textId = text.getState_PrimitiveId();

// 2. 记录修改前的内容、颜色与字号
const beforeContent = text.getState_Content();
const beforeColor = text.getState_TextColor();
const beforeFontSize = text.getState_FontSize();

// 3. 批量修改：平移位置、内容更新、颜色改蓝、字号 20、加粗
await eda.sch_PrimitiveText.modify(textId, {
  x: x + 200,
  y: y + 100,
  content: '嘉立创示例_修改后的文本',
  textColor: '#0000FF',
  fontSize: 20,
  bold: true,
});

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitiveText.get(textId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', textId);
console.log('content:', beforeContent, '→', refreshed.getState_Content());
console.log('textColor:', beforeColor, '→', refreshed.getState_TextColor());
console.log('fontSize:', beforeFontSize, '→', refreshed.getState_FontSize());
console.log('bold:', refreshed.getState_Bold());
console.log('position:', x, y, '→', refreshed.getState_X(), refreshed.getState_Y());
```
