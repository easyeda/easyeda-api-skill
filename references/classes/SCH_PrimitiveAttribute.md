# SCH\_PrimitiveAttribute class

Schematic &amp; symbol / property primitive class

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

**_(BETA)_** Create a net label


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** Get Property


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** Get Property


</td></tr>
<tr><td>

[getAll(parentPrimitiveId)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** Get all Property


</td></tr>
<tr><td>

[getAllPrimitiveId(parentPrimitiveId)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** Get all Property primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** Modify Property


</td></tr>
</tbody></table>

---

## 方法详情

### createnetlabel

# SCH\_PrimitiveAttribute.createNetLabel() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a net label

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

net


</td><td>

string


</td><td>

Net name


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

Net label attribute primitive

## Remarks

ADD since EDA v4

### get

# SCH\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Property

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

Property primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

Attribute primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 放置一个测试器件（属性图元随器件生成，无法单独创建）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();

// 2. 取出器件的属性图元 ID
const attrIds = await eda.sch_PrimitiveAttribute.getAllPrimitiveId(compId);

// 3. 传单个 ID 字符串，返回单个属性对象
const single = await eda.sch_PrimitiveAttribute.get(attrIds[0]);

// 4. 传 ID 数组，返回属性对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveAttribute.get([attrIds[0], attrIds[1]]);

// 5. 清理测试器件（属性图元随器件一起删除）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('single key:', single.getState_Key());
console.log('array length:', arr.length);
console.log('second key:', arr[1].getState_Key());
```

### get_1

# SCH\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Property

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

Property primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md)<!-- -->&gt;&gt;

Property primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveAttribute.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Property

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

_(Optional)_ Parent primitive ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md)<!-- -->&gt;&gt;

Array of Property primitive objects

## Remarks

If no parent primitive ID is passed, all attribute primitives in the sheet will be obtained

## Example


```javascript
// 1. 放置一个测试器件（属性图元随器件生成，无法单独创建）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();

// 2. 传父图元 ID，拿到该器件的全部属性
const compAttrs = await eda.sch_PrimitiveAttribute.getAll(compId);
const keys = compAttrs.map(a => a.getState_Key());

// 3. 不传参数，拿到当前图页上的所有属性图元
const allAttrs = await eda.sch_PrimitiveAttribute.getAll();

// 4. 清理测试器件（属性图元随器件一起删除）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('component attr count:', compAttrs.length);
console.log('keys:', keys.join(', '));
console.log('page total attrs:', allAttrs.length);
```

### getallprimitiveid

# SCH\_PrimitiveAttribute.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Property primitive IDs

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

_(Optional)_ Parent primitive ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Property primitive IDs

## Remarks

If no parent primitive ID is passed, all attribute primitives in the sheet will be obtained

## Example


```javascript
// 1. 放置一个测试器件（属性图元随器件生成，无法单独创建）
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();

// 2. 传父图元 ID，只拿该器件的属性图元 ID
const compAttrIds = await eda.sch_PrimitiveAttribute.getAllPrimitiveId(compId);

// 3. 不传参数，拿当前图页全部属性图元 ID（含器件属性与独立网络标签等）
const allIds = await eda.sch_PrimitiveAttribute.getAllPrimitiveId();

// 4. 清理测试器件（属性图元随器件一起删除）
await eda.sch_PrimitiveComponent.delete([compId]);

console.log('component attr ids:', compAttrIds.length);
console.log('page total attr ids:', allIds.length);
console.log('component ids all in page list:', compAttrIds.every(id => allIds.includes(id)));
```

### modify

# SCH\_PrimitiveAttribute.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Property

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

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: undefined \| null \| number; y?: undefined \| null \| number; rotation?: undefined \| null \| number; color?: undefined \| null \| string; fontName?: undefined \| null \| string; fontSize?: undefined \| null \| number; bold?: undefined \| null \| false \| true; italic?: undefined \| null \| false \| true; underLine?: undefined \| null \| false \| true; alignMode?: undefined \| null \| [ESCH\_PrimitiveTextAlignMode.LEFT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.LEFT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.CENTER\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_TOP](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_MIDDLE](../enums/ESCH_PrimitiveTextAlignMode.md) \| [ESCH\_PrimitiveTextAlignMode.RIGHT\_BOTTOM](../enums/ESCH_PrimitiveTextAlignMode.md)<!-- -->; fillColor?: undefined \| null \| string; key?: undefined \| string; value?: undefined \| string; keyVisible?: undefined \| null \| false \| true; valueVisible?: undefined \| null \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

Attribute primitive object

## Example


```javascript
// 1. 放置一个测试器件并定位 Designator（编号）属性
const devices = await eda.lib_Device.search('');
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const comp = await eda.sch_PrimitiveComponent.create(devices[0], x, y);
const compId = comp.getState_PrimitiveId();
const attrIds = await eda.sch_PrimitiveAttribute.getAllPrimitiveId(compId);
const attrs = await eda.sch_PrimitiveAttribute.get(attrIds);
const designator = attrs.find(a => a.getState_Key() === 'Designator');

// 2. 读取修改前的位号
const before = designator.getState_Value();

// 3. 批量修改：位号改为 C900，同时加粗显示
await eda.sch_PrimitiveAttribute.modify(designator.getState_PrimitiveId(), { value: 'C900', bold: true });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = (await eda.sch_PrimitiveAttribute.get(attrIds)).find(a => a.getState_Key() === 'Designator');

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', designator.getState_PrimitiveId());
console.log('value:', before, '→', refreshed.getState_Value());
console.log('bold:', refreshed.getState_Bold());
```
