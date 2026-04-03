# SCH\_Primitive class

原理图 &amp; 符号 / 图元类

## 签名

```typescript
declare class SCH_Primitive 
```

## 备注

图元的统一操作

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[getPrimitiveByPrimitiveId(id)](./SCH_Primitive.md)


</td><td>


</td><td>

获取指定 ID 的图元的所有属性


</td></tr>
<tr><td>

[getPrimitivesBBox(primitiveIds)](./SCH_Primitive.md)


</td><td>


</td><td>

**_(BETA)_** 获取图元的 BBox


</td></tr>
<tr><td>

[getPrimitiveTypeByPrimitiveId(id)](./SCH_Primitive.md)


</td><td>


</td><td>

**_(BETA)_** 获取指定 ID 的图元的图元类型


</td></tr>
</tbody></table>

---

## 方法详情

### getprimitivebyprimitiveid

# SCH\_Primitive.getPrimitiveByPrimitiveId() method

获取指定 ID 的图元的所有属性

## 签名

```typescript
getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;
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

id


</td><td>

string


</td><td>

图元 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md) \| undefined&gt;

图元的所有属性

### getprimitivesbbox

# SCH\_Primitive.getPrimitivesBBox() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取图元的 BBox

## 签名

```typescript
getPrimitivesBBox(primitiveIds: Array<string | ISCH_Primitive>): Promise<{
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    } | undefined>;
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

Array&lt;string \| [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;


</td><td>

图元 ID 数组或图元对象数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ minX: number; minY: number; maxX: number; maxY: number; } \| undefined&gt;

图元的 BBox，如若图元不存在或没有 BBox，将会返回 `undefined` 的结果

### getprimitivetypebyprimitiveid

# SCH\_Primitive.getPrimitiveTypeByPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取指定 ID 的图元的图元类型

## 签名

```typescript
getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;
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

id


</td><td>

string


</td><td>

图元 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md) \| undefined&gt;

图元类型
