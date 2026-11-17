# SCH\_PrimitiveGenericPort class

原理图 &amp; 符号 / 网络端口图元类

## Signature

```typescript
class SCH_PrimitiveGenericPort implements ISCH_PrimitiveAPI
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

[create(x, y, value, rotation, width, height, ioType, harnessType, strokeWidth, strokeStyle, strokeColor, fillColor, fontColor, fontFamily, fontSize, textAlign)](./SCH_PrimitiveGenericPort.md)

</td><td>

</td><td>

**_(BETA)_** 创建网络端口

</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveGenericPort.md)

</td><td>

</td><td>

**_(BETA)_** 删除网络端口

</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveGenericPort.md)

</td><td>

</td><td>

**_(BETA)_** 获取网络端口

</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveGenericPort.md)

</td><td>

</td><td>

**_(BETA)_** 获取网络端口

</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveGenericPort.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有网络端口

</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveGenericPort.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有网络端口的图元 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveGenericPort.md)

</td><td>

</td><td>

**_(BETA)_** 修改网络端口

</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveGenericPort.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建网络端口

## Signature

```typescript
function create(
	x: number,
	y: number,
	value: string,
	rotation?: number,
	width?: number | null,
	height?: number | null,
	ioType?: ESCH_PrimitiveGenericPortIoType | null,
	harnessType?: string | null,
	strokeWidth?: number | null,
	strokeStyle?: ESCH_PrimitiveGenericPortStrokeStyle | null,
	strokeColor?: string | null,
	fillColor?: string | null,
	fontColor?: string | null,
	fontFamily?: string | null,
	fontSize?: number | null,
	textAlign?: ESCH_PrimitiveGenericPortTextAlign | null,
): Promise<ISCH_PrimitiveGenericPort | undefined>;
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

value

</td><td>

string

</td><td>

网络名称

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_(Optional)_ 旋转角度，可选 `0` `90` `180` `270`

</td></tr>
<tr><td>

width

</td><td>

number \| null

</td><td>

_(Optional)_ 端口宽度，`null` 表示默认

</td></tr>
<tr><td>

height

</td><td>

number \| null

</td><td>

_(Optional)_ 端口高度，`null` 表示默认

</td></tr>
<tr><td>

ioType

</td><td>

[ESCH\_PrimitiveGenericPortIoType](../enums/ESCH_PrimitiveGenericPortIoType.md) \| null

</td><td>

_(Optional)_ 端口方向，`null` 表示默认

</td></tr>
<tr><td>

harnessType

</td><td>

string \| null

</td><td>

_(Optional)_ 线束类型，为用户自定义字符串，`null` 或空字符串表示无线束

</td></tr>
<tr><td>

strokeWidth

</td><td>

number \| null

</td><td>

_(Optional)_ 线宽，`null` 表示默认

</td></tr>
<tr><td>

strokeStyle

</td><td>

[ESCH\_PrimitiveGenericPortStrokeStyle](../enums/ESCH_PrimitiveGenericPortStrokeStyle.md) \| null

</td><td>

_(Optional)_ 线型，`null` 表示默认

</td></tr>
<tr><td>

strokeColor

</td><td>

string \| null

</td><td>

_(Optional)_ 线颜色，`null` 表示默认

</td></tr>
<tr><td>

fillColor

</td><td>

string \| null

</td><td>

_(Optional)_ 填充颜色，`null` 表示默认

</td></tr>
<tr><td>

fontColor

</td><td>

string \| null

</td><td>

_(Optional)_ 字体颜色，`null` 表示默认

</td></tr>
<tr><td>

fontFamily

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

textAlign

</td><td>

[ESCH\_PrimitiveGenericPortTextAlign](../enums/ESCH_PrimitiveGenericPortTextAlign.md) \| null

</td><td>

_(Optional)_ 文本对齐方式，`null` 表示默认

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md) \| undefined&gt;

网络端口图元对象  cli - 画布图元创建需前端已打开对应图页；Source API 暂未提供对应 add 接口

## Remarks

ADD since EDA v5

### delete

# SCH\_PrimitiveGenericPort.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除网络端口

## Signature

```typescript
function delete(primitiveIds: string | ISCH_PrimitiveGenericPort | Array<string> | Array<ISCH_PrimitiveGenericPort>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md)<!-- -->&gt;

</td><td>

网络端口的图元 ID 或网络端口图元对象

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

删除操作是否成功

## Remarks

ADD since EDA v5

### get

# SCH\_PrimitiveGenericPort.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取网络端口

## Signature

```typescript
function get(primitiveIds: string): Promise<ISCH_PrimitiveGenericPort | undefined>;
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

网络端口的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md) \| undefined&gt;

网络端口图元对象，`undefined` 表示获取失败

## Remarks

ADD since EDA v5

### get_1

# SCH\_PrimitiveGenericPort.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取网络端口

## Signature

```typescript
function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveGenericPort>>;
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

网络端口的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md)<!-- -->&gt;&gt;

网络端口图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象 ADD since EDA v5

### getall

# SCH\_PrimitiveGenericPort.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有网络端口

## Signature

```typescript
function getAll(): Promise<Array<ISCH_PrimitiveGenericPort>>;
```

## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md)<!-- -->&gt;&gt;

网络端口图元对象数组

## Remarks

ADD since EDA v5

### getallprimitiveid

# SCH\_PrimitiveGenericPort.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有网络端口的图元 ID

## Signature

```typescript
function getAllPrimitiveId(): Promise<Array<string>>;
```

## Returns

Promise&lt;Array&lt;string&gt;&gt;

网络端口的图元 ID 数组

## Remarks

ADD since EDA v5

### modify

# SCH\_PrimitiveGenericPort.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改网络端口

## Signature

```typescript
function modify(
	primitiveId: string | ISCH_PrimitiveGenericPort,
	property: ISCH_PrimitiveGenericPortProps,
): Promise<ISCH_PrimitiveGenericPort | undefined>;
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

string \| [ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md)

</td><td>

网络端口的图元 ID 或网络端口图元对象

</td></tr>
<tr><td>

property

</td><td>

[ISCH\_PrimitiveGenericPortProps](../interfaces/ISCH_PrimitiveGenericPortProps.md)

</td><td>

修改参数

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISCH\_PrimitiveGenericPort](./ISCH_PrimitiveGenericPort.md) \| undefined&gt;

网络端口图元对象

## Remarks

ADD since EDA v5
