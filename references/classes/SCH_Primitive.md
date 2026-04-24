# SCH\_Primitive class

原理图 &amp; 符号 / 图元类

## Signature

```typescript
declare class SCH_Primitive 
```

## Remarks

图元的统一操作

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


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

## Signature

```typescript
getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;
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

id


</td><td>

string


</td><td>

图元 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md) \| undefined&gt;

图元的所有属性

### getprimitivesbbox

# SCH\_Primitive.getPrimitivesBBox() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取图元的 BBox

## Signature

```typescript
getPrimitivesBBox(primitiveIds: Array<string | ISCH_Primitive>): Promise<{
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    } | undefined>;
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

Array&lt;string \| [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;


</td><td>

图元 ID 数组或图元对象数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ minX: number; minY: number; maxX: number; maxY: number; } \| undefined&gt;

图元的 BBox，如若图元不存在或没有 BBox，将会返回 `undefined` 的结果

### getprimitivetypebyprimitiveid

# SCH\_Primitive.getPrimitiveTypeByPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取指定 ID 的图元的图元类型

## Signature

```typescript
getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;
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

id


</td><td>

string


</td><td>

图元 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md) \| undefined&gt;

图元类型
