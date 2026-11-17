# ILIB\_DeviceAssociationItem interface

Device associated symbol, footprint property

## Signature

```typescript
interface ILIB_DeviceAssociationItem
```

## Remarks

器件支持绑定\*\*多个\*\*符号与\*\*多个\*\*封装，其中主符号 / 主封装用于默认显示， 备选项可在画布内切换。完整的多绑定信息见 [symbols](./ILIB_DeviceAssociationItem.md) 与 [footprints](./ILIB_DeviceAssociationItem.md)<!-- -->。

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

[footprint?](./ILIB_DeviceAssociationItem.md)

</td><td>

</td><td>

\{ uuid: string; libraryUuid: string \}

</td><td>

_(Optional)_ 主封装

</td></tr>
<tr><td>

[footprints?](./ILIB_DeviceAssociationItem.md)

</td><td>

</td><td>

Array&lt;[ILIB\_DeviceFootprintAssociationItem](./ILIB_DeviceFootprintAssociationItem.md)<!-- -->&gt;

</td><td>

_(Optional)_ 绑定的全部封装

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

{ type: [ELIB\_SymbolType](../enums/ELIB_SymbolType.md)<!-- -->; uuid: string; libraryUuid: string }

</td><td>

主符号

</td></tr>
<tr><td>

[symbols?](./ILIB_DeviceAssociationItem.md)

</td><td>

</td><td>

Array&lt;[ILIB\_DeviceSymbolAssociationItem](./ILIB_DeviceSymbolAssociationItem.md)<!-- -->&gt;

</td><td>

_(Optional)_ 绑定的全部符号

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

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [footprints](./ILIB_DeviceAssociationItem.md) 替代

主封装

## Signature

```typescript
footprint?: { uuid: string; libraryUuid: string };
```

### footprints

# ILIB\_DeviceAssociationItem.footprints property

绑定的全部封装

## Signature

```typescript
footprints?: Array<ILIB_DeviceFootprintAssociationItem>;
```

## Remarks

可为空（器件不绑定封装）；含主封装与备选封装，备选封装可为\*\*纯文本\*\*。 主封装为其中 [isPrimary](./ILIB_DeviceFootprintAssociationItem.md) 为 `true` 的项

ADD since EDA v5

### footprintuuid

# ILIB\_DeviceAssociationItem.footprintUuid property

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [footprints](./ILIB_DeviceAssociationItem.md) 替代

封装 UUID

## Signature

```typescript
footprintUuid: string;
```

### images

# ILIB\_DeviceAssociationItem.images property

## Signature

```typescript
images?: Array<string>;
```

### symbol

# ILIB\_DeviceAssociationItem.symbol property

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [symbols](./ILIB_DeviceAssociationItem.md) 替代

主符号

## Signature

```typescript
symbol: {
	type: ELIB_SymbolType;
	uuid: string;
	libraryUuid: string;
}
```

### symbols

# ILIB\_DeviceAssociationItem.symbols property

绑定的全部符号

## Signature

```typescript
symbols?: Array<ILIB_DeviceSymbolAssociationItem>;
```

## Remarks

至少一项，含主符号与备选符号；备选符号可为\*\*纯文本\*\*（只给 `name`<!-- -->）， 纯文本在原理图画布内切换时保留纯文本、不会被自动解析为 UUID。 主符号为其中 [isPrimary](./ILIB_DeviceSymbolAssociationItem.md) 为 `true` 的项

ADD since EDA v5

### symboltype

# ILIB\_DeviceAssociationItem.symbolType property

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [symbols](./ILIB_DeviceAssociationItem.md) 替代

符号类型

## Signature

```typescript
symbolType: ELIB_SymbolType;
```

### symboluuid

# ILIB\_DeviceAssociationItem.symbolUuid property

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [symbols](./ILIB_DeviceAssociationItem.md) 替代

符号 UUID

## Signature

```typescript
symbolUuid: string;
```
