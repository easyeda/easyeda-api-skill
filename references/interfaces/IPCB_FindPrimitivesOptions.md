# IPCB\_FindPrimitivesOptions interface

空间查询入参

## Signature

```typescript
interface IPCB_FindPrimitivesOptions
```

## Remarks

至少传入一个过滤条件，否则返回 `INVALID_PARAM`

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

[bbox?](./IPCB_FindPrimitivesOptions.md)

</td><td>

</td><td>

[IPCB\_BBox](./IPCB_BBox.md)

</td><td>

_(Optional)_ 包围盒过滤

</td></tr>
<tr><td>

[cursor?](./IPCB_FindPrimitivesOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 分页游标

</td></tr>
<tr><td>

[layers?](./IPCB_FindPrimitivesOptions.md)

</td><td>

</td><td>

Array&lt;number&gt;

</td><td>

_(Optional)_ 图层 ID 过滤

</td></tr>
<tr><td>

[limit?](./IPCB_FindPrimitivesOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 单页数量上限，默认 `200`

</td></tr>
<tr><td>

[locked?](./IPCB_FindPrimitivesOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 锁定状态过滤

</td></tr>
<tr><td>

[net?](./IPCB_FindPrimitivesOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 网络名称过滤

</td></tr>
<tr><td>

[types?](./IPCB_FindPrimitivesOptions.md)

</td><td>

</td><td>

Array&lt;[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)<!-- -->&gt;

</td><td>

_(Optional)_ 图元类型过滤

</td></tr>
</tbody></table>

---

## 属性详情

### bbox

# IPCB\_FindPrimitivesOptions.bbox property

包围盒过滤

## Signature

```typescript
bbox?: IPCB_BBox;
```

### cursor

# IPCB\_FindPrimitivesOptions.cursor property

分页游标

## Signature

```typescript
cursor?: string;
```

### layers

# IPCB\_FindPrimitivesOptions.layers property

图层 ID 过滤

## Signature

```typescript
layers?: Array<number>;
```

### limit

# IPCB\_FindPrimitivesOptions.limit property

单页数量上限，默认 `200`

## Signature

```typescript
limit?: number;
```

### locked

# IPCB\_FindPrimitivesOptions.locked property

锁定状态过滤

## Signature

```typescript
locked?: boolean;
```

### net

# IPCB\_FindPrimitivesOptions.net property

网络名称过滤

## Signature

```typescript
net?: string;
```

### types

# IPCB\_FindPrimitivesOptions.types property

图元类型过滤

## Signature

```typescript
types?: Array<EPCB_PrimitiveType>;
```
