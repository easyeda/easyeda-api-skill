# PCB\_Primitive class

PCB &amp; 封装 / 图元类

## Signature

```typescript
declare class PCB_Primitive 
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

[getPrimitivesBBox(primitiveIds)](./PCB_Primitive.md)


</td><td>


</td><td>

**_(BETA)_** 获取图元的 BBox


</td></tr>
</tbody></table>

---

## 方法详情

### getprimitivesbbox

# PCB\_Primitive.getPrimitivesBBox() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取图元的 BBox

## Signature

```typescript
getPrimitivesBBox(primitiveIds: Array<string | IPCB_Primitive>): Promise<{
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

Array&lt;string \| [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;


</td><td>

图元 ID 数组或图元对象数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;{ minX: number; minY: number; maxX: number; maxY: number; } \| undefined&gt;

图元的 BBox，如若图元不存在或没有 BBox，将会返回 `undefined` 的结果
