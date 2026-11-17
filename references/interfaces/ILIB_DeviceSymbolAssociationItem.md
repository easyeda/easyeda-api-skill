# ILIB\_DeviceSymbolAssociationItem interface

器件关联符号项

## Signature

```typescript
interface ILIB_DeviceSymbolAssociationItem
```

## Remarks

一个器件可绑定多个符号，其中\*\*主符号\*\*用于原理图默认显示，其余为\*\*备选符号\*\*， 可在原理图画布内切换。

\*\*两种绑定形态\*\*

- \*\*库内绑定\*\*：同时给出 [uuid](./ILIB_DeviceSymbolAssociationItem.md) 与 [libraryUuid](./ILIB_DeviceSymbolAssociationItem.md)<!-- -->，指向库中某个确定符号； - \*\*纯文本绑定\*\*：只给出 [name](./ILIB_DeviceSymbolAssociationItem.md)<!-- -->，不给出 `uuid`<!-- -->。 该名称将在需要时按设置内的\*\*优先库路径\*\*（见 ） 依次匹配库内同名符号，首个命中项即为实际符号。

是否为主符号由 [isPrimary](./ILIB_DeviceSymbolAssociationItem.md) 标记； 未显式标记时，数组首个可解析项视为主符号。

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

[isPrimary?](./ILIB_DeviceSymbolAssociationItem.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否为主符号

</td></tr>
<tr><td>

[libraryUuid?](./ILIB_DeviceSymbolAssociationItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 符号所属库 UUID

</td></tr>
<tr><td>

[name?](./ILIB_DeviceSymbolAssociationItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 符号名称

</td></tr>
<tr><td>

[type?](./ILIB_DeviceSymbolAssociationItem.md)

</td><td>

</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)

</td><td>

_(Optional)_ 符号类型

</td></tr>
<tr><td>

[uuid?](./ILIB_DeviceSymbolAssociationItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 符号 UUID

</td></tr>
</tbody></table>

---

## 属性详情

### isprimary

# ILIB\_DeviceSymbolAssociationItem.isPrimary property

是否为主符号

## Signature

```typescript
isPrimary?: boolean;
```

## Remarks

一个器件至多一个主符号；多项同时为 `true` 时以数组首个为准

ADD since EDA v5

### libraryuuid

# ILIB\_DeviceSymbolAssociationItem.libraryUuid property

符号所属库 UUID

## Signature

```typescript
libraryUuid?: string;
```

## Remarks

与 `uuid` 成对出现

ADD since EDA v5

### name

# ILIB\_DeviceSymbolAssociationItem.name property

符号名称

## Signature

```typescript
name?: string;
```

## Remarks

库内绑定时可省略（由 `uuid` 确定）；纯文本绑定时必填，用于按优先库路径匹配同名符号

ADD since EDA v5

### type

# ILIB\_DeviceSymbolAssociationItem.type property

符号类型

## Signature

```typescript
type?: ELIB_SymbolType;
```

## Remarks

ADD since EDA v5

### uuid

# ILIB\_DeviceSymbolAssociationItem.uuid property

符号 UUID

## Signature

```typescript
uuid?: string;
```

## Remarks

省略表示该项为\*\*纯文本绑定\*\*，此时必须给出 [name](./ILIB_DeviceSymbolAssociationItem.md)

ADD since EDA v5
