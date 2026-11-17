# IPCB\_StackupLayer interface

物理叠层单层数据

## Signature

```typescript
interface IPCB_StackupLayer
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

[isKeepIsland](./IPCB_StackupLayer.md)

</td><td>

</td><td>

boolean

</td><td>

是否保留孤岛

</td></tr>
<tr><td>

[kind](./IPCB_StackupLayer.md)

</td><td>

</td><td>

'copper' \| 'dielectric' \| 'other'

</td><td>

层类别

</td></tr>
<tr><td>

[layerId](./IPCB_StackupLayer.md)

</td><td>

</td><td>

number

</td><td>

图层 ID

</td></tr>
<tr><td>

[layerName](./IPCB_StackupLayer.md)

</td><td>

</td><td>

string

</td><td>

图层名称

</td></tr>
<tr><td>

[layerType](./IPCB_StackupLayer.md)

</td><td>

</td><td>

string

</td><td>

图层类型

</td></tr>
<tr><td>

[lossTangent](./IPCB_StackupLayer.md)

</td><td>

</td><td>

number

</td><td>

介质损耗角正切

</td></tr>
<tr><td>

[material](./IPCB_StackupLayer.md)

</td><td>

</td><td>

string

</td><td>

材料

</td></tr>
<tr><td>

[permittivity](./IPCB_StackupLayer.md)

</td><td>

</td><td>

number

</td><td>

介电常数

</td></tr>
<tr><td>

[thickness](./IPCB_StackupLayer.md)

</td><td>

</td><td>

number

</td><td>

厚度

</td></tr>
<tr><td>

[zIndex](./IPCB_StackupLayer.md)

</td><td>

</td><td>

number

</td><td>

叠层顺序（从顶层到底层递增）

</td></tr>
</tbody></table>

---

## 属性详情

### iskeepisland

# IPCB\_StackupLayer.isKeepIsland property

是否保留孤岛

## Signature

```typescript
isKeepIsland: boolean;
```

### kind

# IPCB\_StackupLayer.kind property

层类别

## Signature

```typescript
kind: 'copper' | 'dielectric' | 'other';
```

### layerid

# IPCB\_StackupLayer.layerId property

图层 ID

## Signature

```typescript
layerId: number;
```

### layername

# IPCB\_StackupLayer.layerName property

图层名称

## Signature

```typescript
layerName: string;
```

### layertype

# IPCB\_StackupLayer.layerType property

图层类型

## Signature

```typescript
layerType: string;
```

### losstangent

# IPCB\_StackupLayer.lossTangent property

介质损耗角正切

## Signature

```typescript
lossTangent: number;
```

### material

# IPCB\_StackupLayer.material property

材料

## Signature

```typescript
material: string;
```

### permittivity

# IPCB\_StackupLayer.permittivity property

介电常数

## Signature

```typescript
permittivity: number;
```

### thickness

# IPCB\_StackupLayer.thickness property

厚度

## Signature

```typescript
thickness: number;
```

### zindex

# IPCB\_StackupLayer.zIndex property

叠层顺序（从顶层到底层递增）

## Signature

```typescript
zIndex: number;
```
