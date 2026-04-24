# ILIB\_DeviceSearchItem interface

搜索到的器件属性

## Signature

```typescript
interface ILIB_DeviceSearchItem 
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[classification?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ 器件分类


</td></tr>
<tr><td>

[description?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 描述


</td></tr>
<tr><td>

[footprint?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}


</td><td>

_(Optional)_ 关联封装


</td></tr>
<tr><td>

[footprintName?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 关联封装名称


</td></tr>
<tr><td>

[footprintUuid](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

关联封装 UUID


</td></tr>
<tr><td>

[imageUuid?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 关联图片 UUID


</td></tr>
<tr><td>

[jlcInventory?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 嘉立创库存


</td></tr>
<tr><td>

[jlcLibraryCategory?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

[ELIB\_DeviceJlcLibraryCategory](../enums/ELIB_DeviceJlcLibraryCategory.md)


</td><td>

_(Optional)_ 嘉立创库类别


</td></tr>
<tr><td>

[jlcPrice?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 嘉立创价格


</td></tr>
<tr><td>

[lcscInventory?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 立创商城库存


</td></tr>
<tr><td>

[lcscPrice?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 立创商城价格


</td></tr>
<tr><td>

[libraryUuid](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[manufacturer?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 制造商


</td></tr>
<tr><td>

[manufacturerId?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 制造商编号


</td></tr>
<tr><td>

[model3D?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}


</td><td>

_(Optional)_ 关联 3D 模型


</td></tr>
<tr><td>

[model3DName?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 关联 3D 模型名称


</td></tr>
<tr><td>

[model3DUuid](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

关联 3D 模型 UUID


</td></tr>
<tr><td>

[name](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

器件名称


</td></tr>
<tr><td>

[ordinal](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

排序


</td></tr>
<tr><td>

[otherProperty?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

\{ \[key: string\]: boolean \| number \| string \| undefined; \}


</td><td>

_(Optional)_ 其它属性


</td></tr>
<tr><td>

[supplier?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 供应商


</td></tr>
<tr><td>

[supplierId?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 供应商编号


</td></tr>
<tr><td>

[symbol](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}


</td><td>

关联符号


</td></tr>
<tr><td>

[symbolName](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

关联符号名称


</td></tr>
<tr><td>

[symbolUuid](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

关联符号 UUID


</td></tr>
<tr><td>

[uuid](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

器件 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_DeviceSearchItem.classification property

器件分类

## Signature

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_DeviceSearchItem.description property

描述

## Signature

```typescript
description?: string;
```

### footprint

# ILIB\_DeviceSearchItem.footprint property

关联封装

## Signature

```typescript
footprint?: {
        name: string;
        uuid: string;
        libraryUuid: string;
    };
```

### footprintname

# ILIB\_DeviceSearchItem.footprintName property

> Warning: This API is now obsolete.
>
> 请使用 [footprint](./ILIB_DeviceSearchItem.md) 替代

关联封装名称

## Signature

```typescript
footprintName?: string;
```

### footprintuuid

# ILIB\_DeviceSearchItem.footprintUuid property

> Warning: This API is now obsolete.
>
> 请使用 [footprint](./ILIB_DeviceSearchItem.md) 替代

关联封装 UUID

## Signature

```typescript
footprintUuid: string;
```

### imageuuid

# ILIB\_DeviceSearchItem.imageUuid property

关联图片 UUID

## Signature

```typescript
imageUuid?: string;
```

### jlcinventory

# ILIB\_DeviceSearchItem.jlcInventory property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

嘉立创库存

## Signature

```typescript
jlcInventory?: number;
```

### jlclibrarycategory

# ILIB\_DeviceSearchItem.jlcLibraryCategory property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

嘉立创库类别

## Signature

```typescript
jlcLibraryCategory?: ELIB_DeviceJlcLibraryCategory;
```

### jlcprice

# ILIB\_DeviceSearchItem.jlcPrice property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

嘉立创价格

## Signature

```typescript
jlcPrice?: number;
```

### lcscinventory

# ILIB\_DeviceSearchItem.lcscInventory property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

立创商城库存

## Signature

```typescript
lcscInventory?: number;
```

### lcscprice

# ILIB\_DeviceSearchItem.lcscPrice property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

立创商城价格

## Signature

```typescript
lcscPrice?: number;
```

### libraryuuid

# ILIB\_DeviceSearchItem.libraryUuid property

所属库 UUID

## Signature

```typescript
libraryUuid: string;
```

### manufacturer

# ILIB\_DeviceSearchItem.manufacturer property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

制造商

## Signature

```typescript
manufacturer?: string;
```

### manufacturerid

# ILIB\_DeviceSearchItem.manufacturerId property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

制造商编号

## Signature

```typescript
manufacturerId?: string;
```

### model3d

# ILIB\_DeviceSearchItem.model3D property

关联 3D 模型

## Signature

```typescript
model3D?: {
        name: string;
        uuid: string;
        libraryUuid: string;
    };
```

### model3dname

# ILIB\_DeviceSearchItem.model3DName property

> Warning: This API is now obsolete.
>
> 请使用 [model3D](./ILIB_DeviceSearchItem.md) 替代

关联 3D 模型名称

## Signature

```typescript
model3DName?: string;
```

### model3duuid

# ILIB\_DeviceSearchItem.model3DUuid property

> Warning: This API is now obsolete.
>
> 请使用 [model3D](./ILIB_DeviceSearchItem.md) 替代

关联 3D 模型 UUID

## Signature

```typescript
model3DUuid: string;
```

### name

# ILIB\_DeviceSearchItem.name property

器件名称

## Signature

```typescript
name: string;
```

### ordinal

# ILIB\_DeviceSearchItem.ordinal property

排序

## Signature

```typescript
ordinal: number;
```

### otherproperty

# ILIB\_DeviceSearchItem.otherProperty property

其它属性

## Signature

```typescript
otherProperty?: {
        [key: string]: boolean | number | string | undefined;
    };
```

### supplier

# ILIB\_DeviceSearchItem.supplier property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

供应商

## Signature

```typescript
supplier?: string;
```

### supplierid

# ILIB\_DeviceSearchItem.supplierId property

> Warning: This API is now obsolete.
>
> 在 `otherProperty` 中替代

供应商编号

## Signature

```typescript
supplierId?: string;
```

### symbol

# ILIB\_DeviceSearchItem.symbol property

关联符号

## Signature

```typescript
symbol: {
        name: string;
        uuid: string;
        libraryUuid: string;
    };
```

### symbolname

# ILIB\_DeviceSearchItem.symbolName property

> Warning: This API is now obsolete.
>
> 请使用 [symbol](./ILIB_DeviceSearchItem.md) 替代

关联符号名称

## Signature

```typescript
symbolName: string;
```

### symboluuid

# ILIB\_DeviceSearchItem.symbolUuid property

> Warning: This API is now obsolete.
>
> 请使用 [symbol](./ILIB_DeviceSearchItem.md) 替代

关联符号 UUID

## Signature

```typescript
symbolUuid: string;
```

### uuid

# ILIB\_DeviceSearchItem.uuid property

器件 UUID

## Signature

```typescript
uuid: string;
```
