# PCB\_PrimitiveAttribute class

PCB &amp; 封装 / 属性图元类

## Signature

```typescript
declare class PCB_PrimitiveAttribute implements IPCB_PrimitiveAPI 
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

[delete(primitiveIds)](./PCB_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 删除属性


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取属性


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取属性


</td></tr>
<tr><td>

[getAll(parentPrimitiveId, layer, primitiveLock)](./PCB_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有属性


</td></tr>
<tr><td>

[getAllPrimitiveId(parentPrimitiveId, layer, primitiveLock)](./PCB_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有属性的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveAttribute.md)


</td><td>


</td><td>

**_(BETA)_** 修改文本


</td></tr>
</tbody></table>

---

## 方法详情

### delete

# PCB\_PrimitiveAttribute.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除属性

## Signature

```typescript
delete(primitiveIds: string | IPCB_PrimitiveAttribute | Array<string> | Array<IPCB_PrimitiveAttribute>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)<!-- -->&gt;


</td><td>

属性的图元 ID 或文本图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取属性

## Signature

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveAttribute | undefined>;
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

Promise&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md) \| undefined&gt;

属性图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveAttribute.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取属性

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveAttribute>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)<!-- -->&gt;&gt;

属性图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹��到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveAttribute.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有属性

## Signature

```typescript
getAll(parentPrimitiveId?: string, layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveAttribute>>;
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

_(Optional)_ 关联的父图元 ID


</td></tr>
<tr><td>

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

Promise&lt;Array&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)<!-- -->&gt;&gt;

属性图元对象数组

### getallprimitiveid

# PCB\_PrimitiveAttribute.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有属性的图元 ID

## Signature

```typescript
getAllPrimitiveId(parentPrimitiveId?: string, layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;
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

_(Optional)_ 关联的父图元 ID


</td></tr>
<tr><td>

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

属性的图元 ID 数组

### modify

# PCB\_PrimitiveAttribute.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改文本

## Signature

```typescript
modify(primitiveId: string | IPCB_PrimitiveAttribute, property: {
        layer?: TPCB_LayersOfImage;
        x?: number;
        y?: number;
        key?: string;
        value?: string;
        keyVisible?: boolean;
        valueVisible?: boolean;
        fontFamily?: string;
        fontSize?: number;
        lineWidth?: number;
        alignMode?: EPCB_PrimitiveStringAlignMode;
        rotation?: number;
        reverse?: boolean;
        expansion?: number;
        mirror?: boolean;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveAttribute | undefined>;
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

string \| [IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ layer?: [TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)<!-- -->; x?: number; y?: number; key?: string; value?: string; keyVisible?: boolean; valueVisible?: boolean; fontFamily?: string; fontSize?: number; lineWidth?: number; alignMode?: [EPCB\_PrimitiveStringAlignMode](../enums/EPCB_PrimitiveStringAlignMode.md)<!-- -->; rotation?: number; reverse?: boolean; expansion?: number; mirror?: boolean; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveAttribute](./IPCB_PrimitiveAttribute.md) \| undefined&gt;

文本图元对象
