# SCH\_PrimitiveAttribute class

原理图 &amp; 符号 / 属性图元类

## Signature

```typescript
export class SCH_PrimitiveAttribute implements ISCH_PrimitiveAPI 
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

[createNetLabel(x, y, net)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 创建网络标签


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取属性


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取属性


</td></tr>
<tr><td>

[getAll(parentPrimitiveId)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有属性


</td></tr>
<tr><td>

[getAllPrimitiveId(parentPrimitiveId)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有属性的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 修改属性


</td></tr>
</tbody></table>

---

## 方法详情

### createnetlabel

# SCH\_PrimitiveAttribute.createNetLabel() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建网络标签

## Signature

```typescript
public createNetLabel(x: number, y: number, net: string): Promise<ISCH_PrimitiveAttribute | undefined>;
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

net


</td><td>

string


</td><td>

网络名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

网络标签属性图元

## Remarks

ADD since EDA v4

### get

# SCH\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取属性

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveAttribute | undefined>;
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

属性的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

属性图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取属性

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveAttribute>>;
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

属性的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md)<!-- -->&gt;&gt;

属性图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveAttribute.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有属性

## Signature

```typescript
public getAll(parentPrimitiveId?: string): Promise<Array<ISCH_PrimitiveAttribute>>;
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

parentPrimitiveId


</td><td>

string


</td><td>

_(Optional)_ 父图元 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md)<!-- -->&gt;&gt;

属性图元对象数组

## Remarks

不传递父图元 ID 将拿到图页中的所有属性图元

### getallprimitiveid

# SCH\_PrimitiveAttribute.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有属性的图元 ID

## Signature

```typescript
public getAllPrimitiveId(parentPrimitiveId?: string): Promise<Array<string>>;
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

parentPrimitiveId


</td><td>

string


</td><td>

_(Optional)_ 父图元 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

属性的图元 ID 数组

## Remarks

不传递父图元 ID 将拿到图页中的所有属性图元

### modify

# SCH\_PrimitiveAttribute.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改属性

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveAttribute, property: { x?: undefined | null | number; y?: undefined | null | number; rotation?: undefined | null | number; color?: undefined | null | string; fontName?: undefined | null | string; fontSize?: undefined | null | number; bold?: undefined | null | false | true; italic?: undefined | null | false | true; underLine?: undefined | null | false | true; alignMode?: undefined | null | ESCH_PrimitiveTextAlignMode.LEFT_TOP | ESCH_PrimitiveTextAlignMode.LEFT_MIDDLE | ESCH_PrimitiveTextAlignMode.LEFT_BOTTOM | ESCH_PrimitiveTextAlignMode.CENTER_TOP | ESCH_PrimitiveTextAlignMode.CENTER | ESCH_PrimitiveTextAlignMode.CENTER_BOTTOM | ESCH_PrimitiveTextAlignMode.RIGHT_TOP | ESCH_PrimitiveTextAlignMode.RIGHT_MIDDLE | ESCH_PrimitiveTextAlignMode.RIGHT_BOTTOM; fillColor?: undefined | null | string; key?: undefined | string; value?: undefined | string; keyVisible?: undefined | null | false | true; valueVisible?: undefined | null | false | true }): Promise<ISCH_PrimitiveAttribute | undefined>;
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

string \| [ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: undefined \| null \| number; y?: undefined \| null \| number; rotation?: undefined \| null \| number; color?: undefined \| null \| string; fontName?: undefined \| null \| string; fontSize?: undefined \| null \| number; bold?: undefined \| null \| false \| true; italic?: undefined \| null \| false \| true; underLine?: undefined \| null \| false \| true; alignMode?: undefined \| null \| [ESCH\_PrimitiveTextAlignMode.LEFT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md)<!-- -->; fillColor?: undefined \| null \| string; key?: undefined \| string; value?: undefined \| string; keyVisible?: undefined \| null \| false \| true; valueVisible?: undefined \| null \| false \| true }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

属性图元对象
