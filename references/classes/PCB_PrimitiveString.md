# PCB\_PrimitiveString class

PCB &amp; 封装 / 文本图元类

## Signature

```typescript
declare class PCB_PrimitiveString implements IPCB_PrimitiveAPI 
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
create(layer: TPCB_LayersOfImage, x: number, y: number, text: string, fontFamily: string, fontSize: number, lineWidth: number, alignMode: EPCB_PrimitiveStringAlignMode, rotation: number, reverse: boolean, expansion: number, mirror: boolean, primitiveLock: boolean): Promise<IPCB_PrimitiveString | undefined>;
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
delete(primitiveIds: string | IPCB_PrimitiveString | Array<string> | Array<IPCB_PrimitiveString>): Promise<boolean>;
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
get(primitiveIds: string): Promise<IPCB_PrimitiveString | undefined>;
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
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveString>>;
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
getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveString>>;
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
getAllPrimitiveId(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;
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
modify(primitiveId: string | IPCB_PrimitiveString, property: {
        layer?: TPCB_LayersOfImage;
        x?: number;
        y?: number;
        text?: string;
        fontFamily?: string;
        fontSize?: number;
        lineWidth?: number;
        alignMode?: EPCB_PrimitiveStringAlignMode;
        rotation?: number;
        reverse?: boolean;
        expansion?: number;
        mirror?: boolean;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveString | undefined>;
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

{ layer?: [TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)<!-- -->; x?: number; y?: number; text?: string; fontFamily?: string; fontSize?: number; lineWidth?: number; alignMode?: [EPCB\_PrimitiveStringAlignMode](../enums/EPCB_PrimitiveStringAlignMode.md)<!-- -->; rotation?: number; reverse?: boolean; expansion?: number; mirror?: boolean; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveString](./IPCB_PrimitiveString.md) \| undefined&gt;

文本图元对象
