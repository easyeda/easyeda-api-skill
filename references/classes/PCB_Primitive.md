# PCB\_Primitive class

PCB &amp; 封装 / 图元类

## 签名

```typescript
declare class PCB_Primitive 
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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取图元的 BBox

## 签名

```typescript
getPrimitivesBBox(primitiveIds: Array<string | IPCB_Primitive>): Promise<{
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

Array&lt;string \| [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)<!-- -->&gt;


</td><td>

图元 ID 数组或图元对象数组


</td></tr>
</tbody></table>



## 返回值

Promise&lt;{ minX: number; minY: number; maxX: number; maxY: number; } \| undefined&gt;

图元的 BBox，如若图元不存在或没有 BBox，将会返回 `undefined` 的结果
