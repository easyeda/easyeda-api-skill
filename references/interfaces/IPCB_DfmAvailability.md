# IPCB\_DfmAvailability interface

DFM 可用性

## Signature

```typescript
interface IPCB_DfmAvailability
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

[available](./IPCB_DfmAvailability.md)

</td><td>

</td><td>

boolean

</td><td>

当前环境是否可执行 DFM 检查

</td></tr>
<tr><td>

[buildType](./IPCB_DfmAvailability.md)

</td><td>

</td><td>

'private' \| 'online' \| 'offline' \| 'unknown'

</td><td>

当前构建类型

</td></tr>
<tr><td>

[reason?](./IPCB_DfmAvailability.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 不可用原因

</td></tr>
</tbody></table>

---

## 属性详情

### available

# IPCB\_DfmAvailability.available property

当前环境是否可执行 DFM 检查

## Signature

```typescript
available: boolean;
```

### buildtype

# IPCB\_DfmAvailability.buildType property

当前构建类型

## Signature

```typescript
buildType: 'private' | 'online' | 'offline' | 'unknown';
```

### reason

# IPCB\_DfmAvailability.reason property

不可用原因

## Signature

```typescript
reason?: string;
```
