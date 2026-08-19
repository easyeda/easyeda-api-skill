# PCB\_PrimitiveString class

PCB &amp; 封装 / 文本图元类

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

**_(BETA)_** 创建文本


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** 删除文本


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** 获取文本


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** 获取文本


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有文本


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有文本的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveString.md)


</td><td>


</td><td>

**_(BETA)_** 修改文本


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveString.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建文本

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

层


</td></tr>
<tr><td>

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

text


</td><td>

string


</td><td>

文本内容


</td></tr>
<tr><td>

fontFamily


</td><td>

string


</td><td>

字体，需要预先导入嘉立创 EDA


</td></tr>
<tr><td>

fontSize


</td><td>

number


</td><td>

字号


</td></tr>
<tr><td>

lineWidth


</td><td>

number


</td><td>

线宽


</td></tr>
<tr><td>

alignMode


</td><td>

[EPCB\_PrimitiveStringAlignMode](../enums/EPCB_PrimitiveStringAlignMode.md)


</td><td>

对齐模式


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

旋转角度


</td></tr>
<tr><td>

reverse


</td><td>

boolean


</td><td>

是否反相


</td></tr>
<tr><td>

expansion


</td><td>

number


</td><td>

反相扩展


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

是否镜像


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| undefined&gt;

文本图元对象

### delete

# PCB\_PrimitiveString.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除文本

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

文本的图元 ID 或文本图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveString.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文本

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

文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| undefined&gt;

文本图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveString.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文本

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

文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md)<!-- -->&gt;&gt;

文本图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveString.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有文本

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

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md)<!-- -->&gt;&gt;

文本图元对象数组

### getallprimitiveid

# PCB\_PrimitiveString.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有文本的图元 ID

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

_(Optional)_ 层


</td></tr>
<tr><td>

primitiveLock


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;string&gt;&gt;

文本的图元 ID 数组

### modify

# PCB\_PrimitiveString.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改文本

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

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: undefined \| [EPCB\_LayerId.TOP](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.TOP\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SILKSCREEN](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_SOLDER\_MASK](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.BOTTOM\_ASSEMBLY](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DOCUMENT](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.MECHANICAL](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.INNER\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_1](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_2](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_3](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_4](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_5](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_6](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_7](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_8](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_9](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_10](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_11](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_12](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_13](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_14](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_15](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_16](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_17](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_18](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_19](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_20](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_21](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_22](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_23](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_24](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_25](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_26](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_27](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_28](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_29](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.CUSTOM\_30](../enums/EPCB_LayerId.md) \| [EPCB\_LayerId.DRILL\_DRAWING](../enums/EPCB_LayerId.md)<!-- -->; x?: undefined \| number; y?: undefined \| number; text?: undefined \| string; fontFamily?: undefined \| string; fontSize?: undefined \| number; lineWidth?: undefined \| number; alignMode?: undefined \| [EPCB\_PrimitiveStringAlignMode.LEFT\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.LEFT\_MIDDLE](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.LEFT\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.CENTER\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_TOP](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_MIDDLE](../enums/EPCB_PrimitiveStringAlignMode.md) \| [EPCB\_PrimitiveStringAlignMode.RIGHT\_BOTTOM](../enums/EPCB_PrimitiveStringAlignMode.md)<!-- -->; rotation?: undefined \| number; reverse?: undefined \| false \| true; expansion?: undefined \| number; mirror?: undefined \| false \| true; primitiveLock?: undefined \| false \| true }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| undefined&gt;

文本图元对象
