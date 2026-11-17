# IPCB\_PrimitiveSummary interface

图元摘要

## Signature

```typescript
interface IPCB_PrimitiveSummary
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

[bbox](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

[IPCB\_BBox](./IPCB_BBox.md)

</td><td>

包围盒

</td></tr>
<tr><td>

[componentId?](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 所属器件 ID

</td></tr>
<tr><td>

[designator?](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 所属器件位号

</td></tr>
<tr><td>

[layerId](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

number

</td><td>

图层 ID

</td></tr>
<tr><td>

[locked](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

boolean

</td><td>

是否锁定

</td></tr>
<tr><td>

[net](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

string

</td><td>

网络名称

</td></tr>
<tr><td>

[primitiveId](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

string

</td><td>

图元 ID

</td></tr>
<tr><td>

[type](./IPCB_PrimitiveSummary.md)

</td><td>

</td><td>

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

</td><td>

图元类型

</td></tr>
</tbody></table>

---

## 属性详情

### bbox

# IPCB\_PrimitiveSummary.bbox property

包围盒

## Signature

```typescript
bbox: IPCB_BBox;
```

### componentid

# IPCB\_PrimitiveSummary.componentId property

所属器件 ID

## Signature

```typescript
componentId?: string;
```

### designator

# IPCB\_PrimitiveSummary.designator property

所属器件位号

## Signature

```typescript
designator?: string;
```

### layerid

# IPCB\_PrimitiveSummary.layerId property

图层 ID

## Signature

```typescript
layerId: number;
```

### locked

# IPCB\_PrimitiveSummary.locked property

是否锁定

## Signature

```typescript
locked: boolean;
```

### net

# IPCB\_PrimitiveSummary.net property

网络名称

## Signature

```typescript
net: string;
```

### primitiveid

# IPCB\_PrimitiveSummary.primitiveId property

图元 ID

## Signature

```typescript
primitiveId: string;
```

### type

# IPCB\_PrimitiveSummary.type property

图元类型

## Signature

```typescript
type: EPCB_PrimitiveType;
```
