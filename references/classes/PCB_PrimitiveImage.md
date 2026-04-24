# PCB\_PrimitiveImage class

PCB &amp; 封装 / 图像图元类

## Signature

```typescript
declare class PCB_PrimitiveImage implements IPCB_PrimitiveAPI 
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

[create(x, y, complexPolygon, layer, width, height, rotation, horizonMirror, primitiveLock)](./PCB_PrimitiveImage.md)


</td><td>


</td><td>

创建图像


</td></tr>
<tr><td>

[delete(primitiveIds)](./PCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 删除图像


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 获取图像


</td></tr>
<tr><td>

[get(primitiveIds)](./PCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 获取图像


</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./PCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有图像


</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./PCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 获取所有图像的图元 ID


</td></tr>
<tr><td>

[modify(primitiveId, property)](./PCB_PrimitiveImage.md)


</td><td>


</td><td>

**_(BETA)_** 修改图像


</td></tr>
</tbody></table>

---

## 方法详情

### create

# PCB\_PrimitiveImage.create() method

创建图像

## Signature

```typescript
create(x: number, y: number, complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon, layer: TPCB_LayersOfImage, width?: number, height?: number, rotation?: number, horizonMirror?: boolean, primitiveLock?: boolean): Promise<IPCB_PrimitiveImage | undefined>;
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

BBox 左上点坐标 X


</td></tr>
<tr><td>

y


</td><td>

number


</td><td>

BBox 左上点坐标 Y


</td></tr>
<tr><td>

complexPolygon


</td><td>

[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md) \| Array&lt;[TPCB\_PolygonSourceArray](../types/TPCB_PolygonSourceArray.md)<!-- -->&gt; \| [IPCB\_Polygon](./IPCB_Polygon.md) \| [IPCB\_ComplexPolygon](./IPCB_ComplexPolygon.md)


</td><td>

图像源数据（复杂多边形），可以使用 [PCB\_MathPolygon.convertImageToComplexPolygon()](./PCB_MathPolygon.md) 方法将图像文件转换为复杂多边形数据


</td></tr>
<tr><td>

layer


</td><td>

[TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)


</td><td>

层


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

horizonMirror


</td><td>

boolean


</td><td>

_(Optional)_ 是否水平镜像


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

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| undefined&gt;

图像图元对象

## Remarks

如需创建彩色丝印图像，请使用 [二进制内嵌对象图元类](./PCB_PrimitiveObject.md)

### delete

# PCB\_PrimitiveImage.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除图像

## Signature

```typescript
delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;


</td><td>

图像的图元 ID 或图像图元对象


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### get

# PCB\_PrimitiveImage.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取图像

## Signature

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>;
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

图像的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| undefined&gt;

图像图元对象，`undefined` 表示获取失败

### get_1

# PCB\_PrimitiveImage.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取图像

## Signature

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>;
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

图像的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;&gt;

图像图元对象，空数组表示获取失败

## Remarks

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

### getall

# PCB\_PrimitiveImage.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有图像

## Signature

```typescript
getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveImage>>;
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

Promise&lt;Array&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)<!-- -->&gt;&gt;

图像图元对象数组

### getallprimitiveid

# PCB\_PrimitiveImage.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取所有图像的图元 ID

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

图像的图元 ID 数组

### modify

# PCB\_PrimitiveImage.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改图像

## Signature

```typescript
modify(primitiveId: string | IPCB_PrimitiveImage, property: {
        x?: number;
        y?: number;
        layer?: TPCB_LayersOfImage;
        width?: number;
        height?: number;
        rotation?: number;
        horizonMirror?: boolean;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveImage | undefined>;
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

string \| [IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md)


</td><td>

图元 ID


</td></tr>
<tr><td>

property


</td><td>

{ x?: number; y?: number; layer?: [TPCB\_LayersOfImage](../types/TPCB_LayersOfImage.md)<!-- -->; width?: number; height?: number; rotation?: number; horizonMirror?: boolean; primitiveLock?: boolean; }


</td><td>

修改参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveImage](./IPCB_PrimitiveImage.md) \| undefined&gt;

图像图元对象
