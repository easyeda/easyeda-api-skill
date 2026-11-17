# ILIB\_DeviceFootprintAssociationItem interface

器件关联封装项

## Signature

```typescript
interface ILIB_DeviceFootprintAssociationItem
```

## Remarks

一个器件可绑定多个封装，其中\*\*主封装\*\*用于转 PCB 时的默认封装，其余为\*\*备选封装\*\*， 可在 PCB 画布内切换。

\*\*两种绑定形态\*\*与 [ILIB\_DeviceSymbolAssociationItem](./ILIB_DeviceSymbolAssociationItem.md) 一致：

- \*\*库内绑定\*\*：同时给出 [uuid](./ILIB_DeviceFootprintAssociationItem.md) 与 [libraryUuid](./ILIB_DeviceFootprintAssociationItem.md)<!-- -->； - \*\*纯文本绑定\*\*：只给出 [name](./ILIB_DeviceFootprintAssociationItem.md)<!-- -->， 名称将在需要时按优先库路径匹配库内同名封装。

原理图内器件的纯文本封装在\*\*转 PCB\*\* 时按优先库路径自动匹配。

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

[isPrimary?](./ILIB_DeviceFootprintAssociationItem.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否为主封装

</td></tr>
<tr><td>

[libraryUuid?](./ILIB_DeviceFootprintAssociationItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 封装所属库 UUID

</td></tr>
<tr><td>

[name?](./ILIB_DeviceFootprintAssociationItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 封装名称

</td></tr>
<tr><td>

[uuid?](./ILIB_DeviceFootprintAssociationItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 封装 UUID

</td></tr>
</tbody></table>

---

## 属性详情

### isprimary

# ILIB\_DeviceFootprintAssociationItem.isPrimary property

是否为主封装

## Signature

```typescript
isPrimary?: boolean;
```

## Remarks

一个器件至多一个主封装；多项同时为 `true` 时以数组首个为准

ADD since EDA v5

### libraryuuid

# ILIB\_DeviceFootprintAssociationItem.libraryUuid property

封装所属库 UUID

## Signature

```typescript
libraryUuid?: string;
```

## Remarks

与 `uuid` 成对出现

ADD since EDA v5

### name

# ILIB\_DeviceFootprintAssociationItem.name property

封装名称

## Signature

```typescript
name?: string;
```

## Remarks

库内绑定时可省略（由 `uuid` 确定）；纯文本绑定时必填，用于按优先库路径匹配同名封装

ADD since EDA v5

### uuid

# ILIB\_DeviceFootprintAssociationItem.uuid property

封装 UUID

## Signature

```typescript
uuid?: string;
```

## Remarks

省略表示该项为\*\*纯文本绑定\*\*，此时必须给出 [name](./ILIB_DeviceFootprintAssociationItem.md)

ADD since EDA v5
