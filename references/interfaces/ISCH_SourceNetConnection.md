# ISCH\_SourceNetConnection interface

网络连接点

## Signature

```typescript
interface ISCH_SourceNetConnection
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

[designator?](./ISCH_SourceNetConnection.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 位号（仅器件连接点携带）

</td></tr>
<tr><td>

[pinNumber?](./ISCH_SourceNetConnection.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 引脚号（仅器件引脚连接点携带）

</td></tr>
<tr><td>

[primitiveId](./ISCH_SourceNetConnection.md)

</td><td>

</td><td>

string

</td><td>

图元 ID

</td></tr>
<tr><td>

[type?](./ISCH_SourceNetConnection.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 连接点类型，如 `NetFlag`<!-- -->（仅网络符号连接点携带）

</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_SourceNetConnection.designator property

位号（仅器件连接点携带）

## Signature

```typescript
designator?: string;
```

### pinnumber

# ISCH\_SourceNetConnection.pinNumber property

引脚号（仅器件引脚连接点携带）

## Signature

```typescript
pinNumber?: string;
```

### primitiveid

# ISCH\_SourceNetConnection.primitiveId property

图元 ID

## Signature

```typescript
primitiveId: string;
```

### type

# ISCH\_SourceNetConnection.type property

连接点类型，如 `NetFlag`<!-- -->（仅网络符号连接点携带）

## Signature

```typescript
type?: string;
```
