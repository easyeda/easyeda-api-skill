# ILIB\_PanelLibraryItem interface

面板库属性

## 签名

```typescript
interface ILIB_PanelLibraryItem 
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

[classification?](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

[ILIB\_ClassificationIndex](./ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 分类


</td></tr>
<tr><td>

[description?](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
<tr><td>

[libraryType](./ILIB_PanelLibraryItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.PANEL\_LIBRARY](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

[libraryUuid](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[name](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

面板库名称


</td></tr>
<tr><td>

[uuid](./ILIB_PanelLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

面板库 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_PanelLibraryItem.classification property

分类

## 签名

```typescript
classification?: ILIB_ClassificationIndex | Array<string>;
```

### description

# ILIB\_PanelLibraryItem.description property

描述

## 签名

```typescript
description?: string;
```

### librarytype

# ILIB\_PanelLibraryItem.libraryType property

库类型

## 签名

```typescript
readonly libraryType: ELIB_LibraryType.PANEL_LIBRARY;
```

### libraryuuid

# ILIB\_PanelLibraryItem.libraryUuid property

所属库 UUID

## 签名

```typescript
libraryUuid: string;
```

### name

# ILIB\_PanelLibraryItem.name property

面板库名称

## 签名

```typescript
name: string;
```

### uuid

# ILIB\_PanelLibraryItem.uuid property

面板库 UUID

## 签名

```typescript
uuid: string;
```
