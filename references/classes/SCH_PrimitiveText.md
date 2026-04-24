# SCH\_PrimitiveText class

原理图 &amp; 符号 / 文本图元类

## Signature

```typescript
declare class SCH_PrimitiveText implements ISCH_PrimitiveAPI 
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

**_(BETA)_** 创建文本


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 删除文本


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 获取文本


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 获取文本


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有文本


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有文本的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveText.md)


</td><td>


</td><td>

**_(BETA)_** 修改文本


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveText.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建文本

## Signature

```typescript
create(x: number, y: number, content: string, rotation?: number, textColor?: string | null, fontName?: string | null, fontSize?: number | null, bold?: boolean, italic?: boolean, underLine?: boolean, alignMode?: ESCH_PrimitiveTextAlignMode): Promise<ISCH_PrimitiveText | undefined>;
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
<tr><td>

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
<tr><td>

content


</td><td>

string


</td><td>

文本内容


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度，可选 `0` `90` `180` `270`


</td></tr>
<tr><td>

textColor


</td><td>

string \| null


</td><td>

_(Optional)_ 文本颜色，`null` 表示默认


</td></tr>
<tr><td>

fontName


</td><td>

string \| null


</td><td>

_(Optional)_ 字体名称，`null` 表示默认


</td></tr>
<tr><td>

fontSize


</td><td>

number \| null


</td><td>

_(Optional)_ 字体大小，`null` 表示默认


</td></tr>
<tr><td>

bold


</td><td>

boolean


</td><td>

_(Optional)_ 是否加粗


</td></tr>
<tr><td>

italic


</td><td>

boolean


</td><td>

_(Optional)_ 是否斜体


</td></tr>
<tr><td>

underLine


</td><td>

boolean


</td><td>

_(Optional)_ 是否加下划线


</td></tr>
<tr><td>

alignMode


</td><td>

[ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md)


</td><td>

_(Optional)_ 对齐模式，`0` 左顶，`1` 中顶，`2` 右顶，`3` 左中，`4` 中中，`5` 右中，`6` 左底，`7` 中底，`8` 右底


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

文本图元对象

### delete

# SCH\_PrimitiveText.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除文本

## Signature

```typescript
delete(primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>;
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

文本的图元 ID 或文本图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveText.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文本

## Signature

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>;
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

文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

文本图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveText.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文本

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>;
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

文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;&gt;

文本图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveText.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有文本

## Signature

```typescript
getAll(): Promise<Array<ISCH_PrimitiveText>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md)<!-- -->&gt;&gt;

文本图元对象数组

### getallprimitiveid

# SCH\_PrimitiveText.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有文本的图元 ID

## Signature

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

文本的图元 ID 数组

### modify

# SCH\_PrimitiveText.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改文本

## Signature

```typescript
modify(primitiveId: string | ISCH_PrimitiveText, property: {
        x?: number;
        y?: number;
        content?: string;
        rotation?: number;
        textColor?: string | null;
        fontName?: string | null;
        fontSize?: number | null;
        bold?: boolean;
        italic?: boolean;
        underLine?: boolean;
        alignMode?: ESCH_PrimitiveTextAlignMode;
    }): Promise<ISCH_PrimitiveText | undefined>;
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

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: number; y?: number; content?: string; rotation?: number; textColor?: string \| null; fontName?: string \| null; fontSize?: number \| null; bold?: boolean; italic?: boolean; underLine?: boolean; alignMode?: [ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md)<!-- -->; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveText](./ISCH_PrimitiveText.md) \| undefined&gt;

文本图元对象
