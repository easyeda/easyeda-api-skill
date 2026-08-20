# PCB\_PrimitiveString class

PCB &amp; footprint / text primitive class

## Signature

```typescript
export class PCB_PrimitiveString implements IPCB_PrimitiveAPI 
```
**Implements:** [IPCB\_PrimitiveAPI](../interfaces/IPCB_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(layer, x, y, text, fontFamily, fontSize, lineWidth, alignMode, rotation, reverse, expansion, mirror, primitiveLock)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** Create Text


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** Delete Text


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** Get Text


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** Get Text


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** Get all Text


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** Get all Text primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** Modify Text


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveString.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Text

## Signature

```typescript
public create(layer: TPCB_LayersOfImage, x: number, y: number, text: string, fontFamily: string, fontSize: number, lineWidth: number, alignMode: EPCB_PrimitiveStringAlignMode, rotation: number, reverse: boolean, expansion: number, mirror: boolean, primitiveLock: boolean): Promise<IPCB_PrimitiveString | undefined>;
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

layer


</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)


</td><td>

Layer


</td></tr>
<tr><td>

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

text


</td><td>

string


</td><td>

Text content


</td></tr>
<tr><td>

fontFamily


</td><td>

string


</td><td>

Font. It needs to be imported into EasyEDA in advance


</td></tr>
<tr><td>

fontSize


</td><td>

number


</td><td>

Font size


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

Line width


</td></tr>
<tr><td>

alignMode


</td><td>

[EPCB\_PrimitiveStringAlignMode](../enums/EPCB_PrimitiveStringAlignMode.md)


</td><td>

Alignment mode


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

Rotation angle


</td></tr>
<tr><td>

reverse


</td><td>

boolean


</td><td>

Whether it is inverted


</td></tr>
<tr><td>

expansion


</td><td>

number


</td><td>

Inverted expansion


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

Whether it is mirrored


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| undefined&gt;

Text primitive object

## Example


```javascript
// 1. 生成随机放置坐标，避免与画布上已有的文本重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);

// 2. 在顶层丝印层（3）创建文本：默认字体、字号 45、线宽 6、左下对齐（3）、不旋转、不反相、不镜像、不锁定
const text = await eda.pcb_PrimitiveString.create(3, x, y, '嘉立创示例_版本V1.0', 'default', 45, 6, 3, 0, false, 0, false, false);

// 3. 创建类保留现场，不删除图元
console.log('primitiveId:', text.getState_PrimitiveId());
console.log('primitiveType:', text.getState_PrimitiveType());
console.log('layer:', text.getState_Layer());
console.log('text:', text.getState_Text());
console.log('fontSize:', text.getState_FontSize());
```

### delete

# PCB\_PrimitiveString.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Text

## Signature

```typescript
public delete(primitiveIds: string | IPCB_PrimitiveString | Array<string> | Array<IPCB_PrimitiveString>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md)<!-- -->&gt;


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
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const text1 = await eda.pcb_PrimitiveString.create(3, x, y, '嘉立创示例_删除A', 'default', 45, 6, 3, 0, false, 0, false, false);
const text2 = await eda.pcb_PrimitiveString.create(3, x, y + 500, '嘉立创示例_删除B', 'default', 45, 6, 3, 0, false, 0, false, false);

// 2. 记录删除前的文本数量
const beforeCount = (await eda.pcb_PrimitiveString.getAll()).length;

// 3. 以 ID 数组形式批量删除两个文本
const deleted = await eda.pcb_PrimitiveString.delete([text1.getState_PrimitiveId(), text2.getState_PrimitiveId()]);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.pcb_PrimitiveString.getAll()).length;

console.log('deleted:', deleted);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# PCB\_PrimitiveString.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Text

## Signature

```typescript
public get(primitiveIds: string): Promise<IPCB_PrimitiveString | undefined>;
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

Promise&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| undefined&gt;

Text primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两个测试文本（随机坐标避免重合），内容不同便于区分
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const text1 = await eda.pcb_PrimitiveString.create(3, x, y, '嘉立创示例_文本A', 'default', 45, 6, 3, 0, false, 0, false, false);
const text2 = await eda.pcb_PrimitiveString.create(3, x, y + 500, '嘉立创示例_文本B', 'default', 60, 6, 3, 0, false, 0, false, false);

// 2. 传单个 ID 字符串，返回单个文本对象
const single = await eda.pcb_PrimitiveString.get(text1.getState_PrimitiveId());

// 3. 传 ID 数组，返回文本对象数组
const arr = await eda.pcb_PrimitiveString.get([text1.getState_PrimitiveId(), text2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveString.delete([text1.getState_PrimitiveId(), text2.getState_PrimitiveId()]);

console.log('single text:', single.getState_Text());
console.log('array length:', arr.length);
console.log('text2 fontSize:', arr[1].getState_FontSize());
```

### get_1

# PCB\_PrimitiveString.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Text

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveString>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md)<!-- -->&gt;&gt;

Text primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# PCB\_PrimitiveString.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Text

## Signature

```typescript
public getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveString>>;
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

layer


</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)


</td><td>

_(Optional)_ Layer


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md)<!-- -->&gt;&gt;

Array of Text primitive objects

## Example


```javascript
// 1. 创建一个顶层丝印（3）测试文本作为过滤目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const text = await eda.pcb_PrimitiveString.create(3, x, y, '嘉立创示例_过滤目标', 'default', 45, 6, 3, 0, false, 0, false, false);
const textId = text.getState_PrimitiveId();

// 2. 不带参数：获取 PCB 上全部文本
const all = await eda.pcb_PrimitiveString.getAll();

// 3. 按层过滤：只取顶层丝印（3）的文本
const topSilk = await eda.pcb_PrimitiveString.getAll(3);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveString.delete([textId]);

console.log('total strings:', all.length);
console.log('top silkscreen strings:', topSilk.length);
console.log('marker string found:', topSilk.some(s => s.getState_PrimitiveId() === textId));
```

### getallprimitiveid

# PCB\_PrimitiveString.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Text primitive IDs

## Signature

```typescript
public getAllPrimitiveId(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;
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

layer


</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)


</td><td>

_(Optional)_ Layer


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is locked


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Text primitive IDs

## Example


```javascript
// 1. 创建一个顶层丝印（3）测试文本作为查找目标（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const text = await eda.pcb_PrimitiveString.create(3, x, y, '嘉立创示例_ID查找目标', 'default', 45, 6, 3, 0, false, 0, false, false);
const textId = text.getState_PrimitiveId();

// 2. 获取全部文本的图元 ID
const allIds = await eda.pcb_PrimitiveString.getAllPrimitiveId();

// 3. 按层过滤：只取顶层丝印（3）文本的图元 ID
const silkIds = await eda.pcb_PrimitiveString.getAllPrimitiveId(3);

// 4. 清理测试图元（查询类需要清理）
await eda.pcb_PrimitiveString.delete([textId]);

console.log('total string ids:', allIds.length);
console.log('top silkscreen string ids:', silkIds.length);
console.log('marker id in filtered list:', silkIds.includes(textId));
```

### modify

# PCB\_PrimitiveString.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Text

## Signature

```typescript
public modify(primitiveId: string | IPCB_PrimitiveString, property: { layer?: undefined | EPCB_LayerId.TOP | EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.TOP_SOLDER_MASK | EPCB_LayerId.TOP_ASSEMBLY | EPCB_LayerId.BOTTOM | EPCB_LayerId.BOTTOM_SILKSCREEN | EPCB_LayerId.BOTTOM_SOLDER_MASK | EPCB_LayerId.BOTTOM_ASSEMBLY | EPCB_LayerId.DOCUMENT | EPCB_LayerId.MECHANICAL | EPCB_LayerId.INNER_1 | EPCB_LayerId.INNER_2 | EPCB_LayerId.INNER_3 | EPCB_LayerId.INNER_4 | EPCB_LayerId.INNER_5 | EPCB_LayerId.INNER_6 | EPCB_LayerId.INNER_7 | EPCB_LayerId.INNER_8 | EPCB_LayerId.INNER_9 | EPCB_LayerId.INNER_10 | EPCB_LayerId.INNER_11 | EPCB_LayerId.INNER_12 | EPCB_LayerId.INNER_13 | EPCB_LayerId.INNER_14 | EPCB_LayerId.INNER_15 | EPCB_LayerId.INNER_16 | EPCB_LayerId.INNER_17 | EPCB_LayerId.INNER_18 | EPCB_LayerId.INNER_19 | EPCB_LayerId.INNER_20 | EPCB_LayerId.INNER_21 | EPCB_LayerId.INNER_22 | EPCB_LayerId.INNER_23 | EPCB_LayerId.INNER_24 | EPCB_LayerId.INNER_25 | EPCB_LayerId.INNER_26 | EPCB_LayerId.INNER_27 | EPCB_LayerId.INNER_28 | EPCB_LayerId.INNER_29 | EPCB_LayerId.INNER_30 | EPCB_LayerId.CUSTOM_1 | EPCB_LayerId.CUSTOM_2 | EPCB_LayerId.CUSTOM_3 | EPCB_LayerId.CUSTOM_4 | EPCB_LayerId.CUSTOM_5 | EPCB_LayerId.CUSTOM_6 | EPCB_LayerId.CUSTOM_7 | EPCB_LayerId.CUSTOM_8 | EPCB_LayerId.CUSTOM_9 | EPCB_LayerId.CUSTOM_10 | EPCB_LayerId.CUSTOM_11 | EPCB_LayerId.CUSTOM_12 | EPCB_LayerId.CUSTOM_13 | EPCB_LayerId.CUSTOM_14 | EPCB_LayerId.CUSTOM_15 | EPCB_LayerId.CUSTOM_16 | EPCB_LayerId.CUSTOM_17 | EPCB_LayerId.CUSTOM_18 | EPCB_LayerId.CUSTOM_19 | EPCB_LayerId.CUSTOM_20 | EPCB_LayerId.CUSTOM_21 | EPCB_LayerId.CUSTOM_22 | EPCB_LayerId.CUSTOM_23 | EPCB_LayerId.CUSTOM_24 | EPCB_LayerId.CUSTOM_25 | EPCB_LayerId.CUSTOM_26 | EPCB_LayerId.CUSTOM_27 | EPCB_LayerId.CUSTOM_28 | EPCB_LayerId.CUSTOM_29 | EPCB_LayerId.CUSTOM_30 | EPCB_LayerId.DRILL_DRAWING; x?: undefined | number; y?: undefined | number; text?: undefined | string; fontFamily?: undefined | string; fontSize?: undefined | number; lineWidth?: undefined | number; alignMode?: undefined | EPCB_PrimitiveStringAlignMode.LEFT_TOP | EPCB_PrimitiveStringAlignMode.LEFT_MIDDLE | EPCB_PrimitiveStringAlignMode.LEFT_BOTTOM | EPCB_PrimitiveStringAlignMode.CENTER_TOP | EPCB_PrimitiveStringAlignMode.CENTER | EPCB_PrimitiveStringAlignMode.CENTER_BOTTOM | EPCB_PrimitiveStringAlignMode.RIGHT_TOP | EPCB_PrimitiveStringAlignMode.RIGHT_MIDDLE | EPCB_PrimitiveStringAlignMode.RIGHT_BOTTOM; rotation?: undefined | number; reverse?: undefined | false | true; expansion?: undefined | number; mirror?: undefined | false | true; primitiveLock?: undefined | false | true }): Promise<IPCB_PrimitiveString | undefined>;
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

string \| [IPCB\_PrimitiveString](./IPCB_PrimitiveString.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MECHANICAL](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DRILL\_DRAWING](../enums/EPCB_LayerId.md)<!-- -->; x?: undefined \| number; y?: undefined \| number; text?: undefined \| string; fontFamily?: undefined \| string; fontSize?: undefined \| number; lineWidth?: undefined \| number; alignMode?: undefined \| [EPCB\_PrimitiveStringAlignMode.LEFT\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.LEFT\_MIDDLE](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.LEFT\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_MIDDLE](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md)<!-- -->; rotation?: undefined \| number; reverse?: undefined \| false \| true; expansion?: undefined \| number; mirror?: undefined \| false \| true; primitiveLock?: undefined \| false \| true }


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| undefined&gt;

Text primitive object

## Example


```javascript
// 1. 创建待修改的测试文本：顶层丝印（3），字号 45（随机坐标避免重合）
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
const text = await eda.pcb_PrimitiveString.create(3, x, y, '嘉立创示例_待修改', 'default', 45, 6, 3, 0, false, 0, false, false);
const textId = text.getState_PrimitiveId();

// 2. 读取修改前的内容与字号
const beforeText = text.getState_Text();
const beforeSize = text.getState_FontSize();

// 3. 批量修改：更换文字内容并把字号从 45 调大到 60
await eda.pcb_PrimitiveString.modify(textId, { text: '嘉立创示例_已更新', fontSize: 60 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.pcb_PrimitiveString.get(textId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', textId);
console.log('text:', beforeText, '→', refreshed.getState_Text());
console.log('fontSize:', beforeSize, '→', refreshed.getState_FontSize());
```
