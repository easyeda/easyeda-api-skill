# ILIB\_DeviceItem interface

器件属性

## 签名

```typescript
interface ILIB_DeviceItem 
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

[association](./ILIB_DeviceItem.md)


</td><td>


</td><td>

[ILIB\_DeviceAssociationItem](./ILIB_DeviceAssociationItem.md)


</td><td>

关联


</td></tr>
<tr><td>

[classification?](./ILIB_DeviceItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 器件分类


</td></tr>
<tr><td>

[description?](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
<tr><td>

[libraryType](./ILIB_DeviceItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.DEVICE](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

[libraryUuid](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[name](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

器件名称


</td></tr>
<tr><td>

[property](./ILIB_DeviceItem.md)


</td><td>


</td><td>

[ILIB\_DeviceExtendPropertyItem](./ILIB_DeviceExtendPropertyItem.md)


</td><td>

扩展属性


</td></tr>
<tr><td>

[uuid](./ILIB_DeviceItem.md)


</td><td>


</td><td>

string


</td><td>

器件 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### association

# ILIB\_DeviceItem.association property

关联

## 签名

```typescript
association: ILIB_DeviceAssociationItem;
```

### classification

# ILIB\_DeviceItem.classification property

器件分类

## 签名

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_DeviceItem.description property

描述

## 签名

```typescript
description?: string;
```

### librarytype

# ILIB\_DeviceItem.libraryType property

库类型

## 签名

```typescript
readonly libraryType: ELIB_LibraryType.DEVICE;
```

### libraryuuid

# ILIB\_DeviceItem.libraryUuid property

所属库 UUID

## 签名

```typescript
libraryUuid: string;
```

### name

# ILIB\_DeviceItem.name property

器件名称

## 签名

```typescript
name: string;
```

### property

# ILIB\_DeviceItem.property property

扩展属性

## 签名

```typescript
property: ILIB_DeviceExtendPropertyItem;
```

### uuid

# ILIB\_DeviceItem.uuid property

器件 UUID

## 签名

```typescript
uuid: string;
```
