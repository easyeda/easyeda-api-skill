# IPCB\_Stackup interface

物理叠层数据

## Signature

```typescript
interface IPCB_Stackup
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

[layers](./IPCB_Stackup.md)

</td><td>

</td><td>

Array&lt;[IPCB\_StackupLayer](./IPCB_StackupLayer.md)<!-- -->&gt;

</td><td>

叠层列表，按 `zIndex` 从顶层到底层排列

</td></tr>
<tr><td>

[totalThickness](./IPCB_Stackup.md)

</td><td>

</td><td>

number

</td><td>

板厚合计

</td></tr>
<tr><td>

[unit](./IPCB_Stackup.md)

</td><td>

</td><td>

string

</td><td>

长度单位

</td></tr>
</tbody></table>

---

## 属性详情

### layers

# IPCB\_Stackup.layers property

叠层列表，按 `zIndex` 从顶层到底层排列

## Signature

```typescript
layers: Array<IPCB_StackupLayer>;
```

### totalthickness

# IPCB\_Stackup.totalThickness property

板厚合计

## Signature

```typescript
totalThickness: number;
```

### unit

# IPCB\_Stackup.unit property

长度单位

## Signature

```typescript
unit: string;
```
