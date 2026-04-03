# ILIB\_DeviceSearchItem interface

搜索到的器件属性

## 签名

```typescript
interface ILIB_DeviceSearchItem 
```

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[classification?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 器件分类


</td></tr>
<tr><td>

[description?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
<tr><td>

[footprint?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}


</td><td>

_（可选）_ 关联封装


</td></tr>
<tr><td>

[footprintName?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 关联封装名称


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

_（可选）_ 关联图片 UUID


</td></tr>
<tr><td>

[jlcInventory?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 嘉立创库存


</td></tr>
<tr><td>

[jlcLibraryCategory?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

[ELIB\_DeviceJlcLibraryCategory](../enums/ELIB_DeviceJlcLibraryCategory.md)


</td><td>

_（可选）_ 嘉立创库类别


</td></tr>
<tr><td>

[jlcPrice?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 嘉立创价格


</td></tr>
<tr><td>

[lcscInventory?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 立创商城库存


</td></tr>
<tr><td>

[lcscPrice?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 立创商城价格


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

_（可选）_ 制造商


</td></tr>
<tr><td>

[manufacturerId?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 制造商编号


</td></tr>
<tr><td>

[model3D?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}


</td><td>

_（可选）_ 关联 3D 模型


</td></tr>
<tr><td>

[model3DName?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 关联 3D 模型名称


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

_（可选）_ 其它参数


</td></tr>
<tr><td>

[supplier?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 供应商


</td></tr>
<tr><td>

[supplierId?](./ILIB_DeviceSearchItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 供应商编号


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

## 签名

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_DeviceSearchItem.description property

描述

## 签名

```typescript
description?: string;
```

### footprint

# ILIB\_DeviceSearchItem.footprint property

关联封装

## 签名

```typescript
footprint?: {
        name: string;
        uuid: string;
        libraryUuid: string;
    };
```

### footprintname

# ILIB\_DeviceSearchItem.footprintName property

> 警告：此 API 现已弃用。
>
> 请使用 [footprint](./ILIB_DeviceSearchItem.md) 替代

关联封装名称

## 签名

```typescript
footprintName?: string;
```

### footprintuuid

# ILIB\_DeviceSearchItem.footprintUuid property

> 警告：此 API 现已弃用。
>
> 请使用 [footprint](./ILIB_DeviceSearchItem.md) 替代

关联封装 UUID

## 签名

```typescript
footprintUuid: string;
```

### imageuuid

# ILIB\_DeviceSearchItem.imageUuid property

关联图片 UUID

## 签名

```typescript
imageUuid?: string;
```

### jlcinventory

# ILIB\_DeviceSearchItem.jlcInventory property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

嘉立创库存

## 签名

```typescript
jlcInventory?: number;
```

### jlclibrarycategory

# ILIB\_DeviceSearchItem.jlcLibraryCategory property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

嘉立创库类别

## 签名

```typescript
jlcLibraryCategory?: ELIB_DeviceJlcLibraryCategory;
```

### jlcprice

# ILIB\_DeviceSearchItem.jlcPrice property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

嘉立创价格

## 签名

```typescript
jlcPrice?: number;
```

### lcscinventory

# ILIB\_DeviceSearchItem.lcscInventory property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

立创商城库存

## 签名

```typescript
lcscInventory?: number;
```

### lcscprice

# ILIB\_DeviceSearchItem.lcscPrice property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

立创商城价格

## 签名

```typescript
lcscPrice?: number;
```

### libraryuuid

# ILIB\_DeviceSearchItem.libraryUuid property

所属库 UUID

## 签名

```typescript
libraryUuid: string;
```

### manufacturer

# ILIB\_DeviceSearchItem.manufacturer property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

制造商

## 签名

```typescript
manufacturer?: string;
```

### manufacturerid

# ILIB\_DeviceSearchItem.manufacturerId property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

制造商编号

## 签名

```typescript
manufacturerId?: string;
```

### model3d

# ILIB\_DeviceSearchItem.model3D property

关联 3D 模型

## 签名

```typescript
model3D?: {
        name: string;
        uuid: string;
        libraryUuid: string;
    };
```

### model3dname

# ILIB\_DeviceSearchItem.model3DName property

> 警告：此 API 现已弃用。
>
> 请使用 [model3D](./ILIB_DeviceSearchItem.md) 替代

关联 3D 模型名称

## 签名

```typescript
model3DName?: string;
```

### model3duuid

# ILIB\_DeviceSearchItem.model3DUuid property

> 警告：此 API 现已弃用。
>
> 请使用 [model3D](./ILIB_DeviceSearchItem.md) 替代

关联 3D 模型 UUID

## 签名

```typescript
model3DUuid: string;
```

### name

# ILIB\_DeviceSearchItem.name property

器件名称

## 签名

```typescript
name: string;
```

### ordinal

# ILIB\_DeviceSearchItem.ordinal property

排序

## 签名

```typescript
ordinal: number;
```

### otherproperty

# ILIB\_DeviceSearchItem.otherProperty property

其它参数

## 签名

```typescript
otherProperty?: {
        [key: string]: boolean | number | string | undefined;
    };
```

### supplier

# ILIB\_DeviceSearchItem.supplier property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

供应商

## 签名

```typescript
supplier?: string;
```

### supplierid

# ILIB\_DeviceSearchItem.supplierId property

> 警告：此 API 现已弃用。
>
> 在 `otherProperty` 中替代

供应商编号

## 签名

```typescript
supplierId?: string;
```

### symbol

# ILIB\_DeviceSearchItem.symbol property

关联符号

## 签名

```typescript
symbol: {
        name: string;
        uuid: string;
        libraryUuid: string;
    };
```

### symbolname

# ILIB\_DeviceSearchItem.symbolName property

> 警告：此 API 现已弃用。
>
> 请使用 [symbol](./ILIB_DeviceSearchItem.md) 替代

关联符号名称

## 签名

```typescript
symbolName: string;
```

### symboluuid

# ILIB\_DeviceSearchItem.symbolUuid property

> 警告：此 API 现已弃用。
>
> 请使用 [symbol](./ILIB_DeviceSearchItem.md) 替代

关联符号 UUID

## 签名

```typescript
symbolUuid: string;
```

### uuid

# ILIB\_DeviceSearchItem.uuid property

器件 UUID

## 签名

```typescript
uuid: string;
```
