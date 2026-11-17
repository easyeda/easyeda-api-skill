# ILIB\_DeviceAssociationItems interface

器件关联符号、封装

## Signature

```typescript
interface ILIB_DeviceAssociationItems
```

## Remarks

描述一个器件绑定的全部符号与封装。\*\*主符号 / 主封装\*\*与\*\*备选符号 / 备选封装\*\*在结构上不做区分， 由各项的 [isPrimary](./ILIB_DeviceSymbolAssociationItem.md) 标记； 备选项可以是纯文本（只给 `name`<!-- -->），备选符号的纯文本在原理图内切换时\*\*保留纯文本\*\*， 不会被自动解析为 UUID。

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

[footprints?](./ILIB_DeviceAssociationItems.md)

</td><td>

</td><td>

Array&lt;[ILIB\_DeviceFootprintAssociationItem](./ILIB_DeviceFootprintAssociationItem.md)<!-- -->&gt;

</td><td>

_(Optional)_ 关联封装列表

</td></tr>
<tr><td>

[symbols](./ILIB_DeviceAssociationItems.md)

</td><td>

</td><td>

Array&lt;[ILIB\_DeviceSymbolAssociationItem](./ILIB_DeviceSymbolAssociationItem.md)<!-- -->&gt;

</td><td>

关联符号列表

</td></tr>
</tbody></table>

---

## 属性详情

### footprints

# ILIB\_DeviceAssociationItems.footprints property

关联封装列表

## Signature

```typescript
footprints?: Array<ILIB_DeviceFootprintAssociationItem>;
```

## Remarks

可以为空（器件不绑定封装）；首个 `isPrimary` 为 `true` 的项（或数组首项）为主封装

ADD since EDA v5

### symbols

# ILIB\_DeviceAssociationItems.symbols property

关联符号列表

## Signature

```typescript
symbols: Array<ILIB_DeviceSymbolAssociationItem>;
```

## Remarks

至少一项；首个 `isPrimary` 为 `true` 的项（或数组首项）为主符号

ADD since EDA v5
