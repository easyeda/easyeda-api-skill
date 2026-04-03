# ILIB\_DeviceAssociationItem interface

器件关联符号、封装属性

## 签名

```typescript
interface ILIB_DeviceAssociationItem 
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

[footprint?](./ILIB_DeviceAssociationItem.md)


</td><td>


</td><td>

\{ uuid: string; libraryUuid: string; \}


</td><td>

_（可选）_ 封装


</td></tr>
<tr><td>

[footprintUuid](./ILIB_DeviceAssociationItem.md)


</td><td>


</td><td>

string


</td><td>

封装 UUID


</td></tr>
<tr><td>

[images?](./ILIB_DeviceAssociationItem.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[symbol](./ILIB_DeviceAssociationItem.md)


</td><td>


</td><td>

{ type: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->; uuid: string; libraryUuid: string; }


</td><td>

符号


</td></tr>
<tr><td>

[symbolType](./ILIB_DeviceAssociationItem.md)


</td><td>


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

符号类型


</td></tr>
<tr><td>

[symbolUuid](./ILIB_DeviceAssociationItem.md)


</td><td>


</td><td>

string


</td><td>

符号 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### footprint

# ILIB\_DeviceAssociationItem.footprint property

封装

## 签名

```typescript
footprint?: {
        uuid: string;
        libraryUuid: string;
    };
```

### footprintuuid

# ILIB\_DeviceAssociationItem.footprintUuid property

> 警告：此 API 现已弃用。
>
> 请使用 [footprint](./ILIB_DeviceSearchItem.md) 替代

封装 UUID

## 签名

```typescript
footprintUuid: string;
```

### images

# ILIB\_DeviceAssociationItem.images property

## 签名

```typescript
images?: Array<string>;
```

### symbol

# ILIB\_DeviceAssociationItem.symbol property

符号

## 签名

```typescript
symbol: {
        type: ELIB_SymbolType;
        uuid: string;
        libraryUuid: string;
    };
```

### symboltype

# ILIB\_DeviceAssociationItem.symbolType property

> 警告：此 API 现已弃用。
>
> 请使用 [symbol](./ILIB_DeviceSearchItem.md) 替代

符号类型

## 签名

```typescript
symbolType: ELIB_SymbolType;
```

### symboluuid

# ILIB\_DeviceAssociationItem.symbolUuid property

> 警告：此 API 现已弃用。
>
> 请使用 [symbol](./ILIB_DeviceSearchItem.md) 替代

符号 UUID

## 签名

```typescript
symbolUuid: string;
```
