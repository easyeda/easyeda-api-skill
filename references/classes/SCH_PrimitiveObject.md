# SCH\_PrimitiveObject class

原理图 &amp; 符号 / 二进制内嵌对象图元类

## Signature

```typescript
declare class SCH_PrimitiveObject implements ISCH_PrimitiveAPI 
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

[create(content, startX, startY, width, height, rotation, mirror, fileName)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 创建二进制内嵌对象


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 删除二进制内嵌对象


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取二进制内嵌对象


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取二进制内嵌对象


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有二进制内嵌对象


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有二进制内嵌对象的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 修改二进制内嵌对象


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveObject.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建二进制内嵌对象

## Signature

```typescript
create(content: File | string, startX: number, startY: number, width?: number, height?: number, rotation?: number, mirror?: boolean, fileName?: string): Promise<ISCH_PrimitiveObject | undefined>;
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

File \| string


</td><td>

对象内容


</td></tr>
<tr><td>

startX


</td><td>

number


</td><td>

起点坐标 X


</td></tr>
<tr><td>

startY


</td><td>

number


</td><td>

起点坐标 Y


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

_(Optional)_ 宽


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

_(Optional)_ 高


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ 旋转角度


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否镜像


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ 文件名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;ISCH\_PrimitiveObject \| undefined&gt;

二进制内嵌对象图元对象

### delete

# SCH\_PrimitiveObject.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除二进制内嵌对象

## Signature

```typescript
delete(primitiveIds: string | ISCH_PrimitiveObject | Array<string> | Array<ISCH_PrimitiveObject>): Promise<boolean>;
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

string \| ISCH\_PrimitiveObject \| Array&lt;string&gt; \| Array&lt;ISCH\_PrimitiveObject&gt;


</td><td>

二进制内嵌对象的图元 ID 或二进制内嵌对象图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# SCH\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取二进制内嵌对象

## Signature

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveObject | undefined>;
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

二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;ISCH\_PrimitiveObject \| undefined&gt;

二进制内嵌对象图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取二进制内嵌对象

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveObject>>;
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

二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;ISCH\_PrimitiveObject&gt;&gt;

二进制内嵌对象图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveObject.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有二进制内嵌对象

## Signature

```typescript
getAll(): Promise<Array<ISCH_PrimitiveObject>>;
```


## Returns

Promise&lt;Array&lt;ISCH\_PrimitiveObject&gt;&gt;

二进制内嵌对象图元对象数组

### getallprimitiveid

# SCH\_PrimitiveObject.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有二进制内嵌对象的图元 ID

## Signature

```typescript
getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

二进制内嵌对象的图元 ID 数组

### modify

# SCH\_PrimitiveObject.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改二进制内嵌对象

## Signature

```typescript
modify(primitiveId: string | ISCH_PrimitiveObject, property: {
        content?: File | string;
        startX?: number;
        startY?: number;
        width?: number;
        height?: number;
        rotation?: number;
        mirror?: boolean;
        fileName?: string;
    }): Promise<ISCH_PrimitiveObject | undefined>;
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

string \| ISCH\_PrimitiveObject


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

\{ content?: File \| string; startX?: number; startY?: number; width?: number; height?: number; rotation?: number; mirror?: boolean; fileName?: string; \}


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;ISCH\_PrimitiveObject \| undefined&gt;

二进制内嵌对象图元对象，`undefined` 表示修改失败
