# SCH\_PrimitiveAttribute class

原理图 &amp; 符号 / 属性图元类

## 签名

```typescript
declare class SCH_PrimitiveAttribute implements ISCH_PrimitiveAPI 
```
**实现自：**[ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

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

### get

# SCH\_PrimitiveAttribute.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取属性

## 签名

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveAttribute | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

primitiveIds


</td><td>

string


</td><td>

属性的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

属性图元对象，`undefined` 表示获取失败

### get_1

# SCH\_PrimitiveAttribute.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取属性

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveAttribute>>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

primitiveIds


</td><td>

Array&lt;string&gt;


</td><td>

属性的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md)<!-- -->&gt;&gt;

属性图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# SCH\_PrimitiveAttribute.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有属性

## 签名

```typescript
getAll(parentPrimitiveId?: string): Promise<Array<ISCH_PrimitiveAttribute>>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

parentPrimitiveId


</td><td>

string


</td><td>

_（可选）_ 父图元 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md)<!-- -->&gt;&gt;

属性图元对象数组

## 备注

不传递父图元 ID 将拿到图页中的所有属性图元

### getallprimitiveid

# SCH\_PrimitiveAttribute.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有属性的图元 ID

## 签名

```typescript
getAllPrimitiveId(parentPrimitiveId?: string): Promise<Array<string>>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

parentPrimitiveId


</td><td>

string


</td><td>

_（可选）_ 父图元 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;string&gt;&gt;

属性的图元 ID 数组

## 备注

不传递父图元 ID 将拿到图页中的所有属性图元

### modify

# SCH\_PrimitiveAttribute.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改属性

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveAttribute, property: {
        x?: number | null;
        y?: number | null;
        rotation?: number | null;
        color?: string | null;
        fontName?: string | null;
        fontSize?: number | null;
        bold?: boolean | null;
        italic?: boolean | null;
        underLine?: boolean | null;
        alignMode?: ESCH_PrimitiveTextAlignMode | null;
        fillColor?: string | null;
        key?: string;
        value?: string;
        keyVisible?: boolean | null;
        valueVisible?: boolean | null;
    }): Promise<ISCH_PrimitiveAttribute | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


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

{ x?: number \| null; y?: number \| null; rotation?: number \| null; color?: string \| null; fontName?: string \| null; fontSize?: number \| null; bold?: boolean \| null; italic?: boolean \| null; underLine?: boolean \| null; alignMode?: [ESCH\_PrimitiveTextAlignMode](../enums/ESCH_PrimitiveTextAlignMode.md) \| null; fillColor?: string \| null; key?: string; value?: string; keyVisible?: boolean \| null; valueVisible?: boolean \| null; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_PrimitiveAttribute](./ISCH_PrimitiveAttribute.md) \| undefined&gt;

属性图元对象
