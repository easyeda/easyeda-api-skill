# ISCH\_SourcePinGeometryItem interface

引脚几何信息

## Signature

```typescript
interface ISCH_SourcePinGeometryItem
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

[bodyBBox](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

\{ minX: number; minY: number; maxX: number; maxY: number; \}

</td><td>

引脚所属部件的本体包围盒（源数据坐标，已含该器件的旋转与镜像）

</td></tr>
<tr><td>

[direction](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)

</td><td>

引脚电气方向

</td></tr>
<tr><td>

[length](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

number

</td><td>

引脚长度（从本体边缘到连接点）

</td></tr>
<tr><td>

[pinId](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

string

</td><td>

引脚 ID

</td></tr>
<tr><td>

[pinName](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

string

</td><td>

引脚名

</td></tr>
<tr><td>

[pinNumber](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

string

</td><td>

引脚号

</td></tr>
<tr><td>

[side](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

[ESCH\_SourcePinSide](../enums/ESCH_SourcePinSide.md)

</td><td>

引脚所在边

</td></tr>
<tr><td>

[x](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

number

</td><td>

连接点 X 坐标

</td></tr>
<tr><td>

[y](./ISCH_SourcePinGeometryItem.md)

</td><td>

</td><td>

number

</td><td>

连接点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### bodybbox

# ISCH\_SourcePinGeometryItem.bodyBBox property

引脚所属部件的本体包围盒（源数据坐标，已含该器件的旋转与镜像）

## Signature

```typescript
bodyBBox: {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}
```

## Remarks

供避让、标签放置与引出线方向判断使用；不含引脚自身伸出部分

### direction

# ISCH\_SourcePinGeometryItem.direction property

引脚电气方向

## Signature

```typescript
direction: ESCH_PrimitivePinType;
```

## Remarks

与符号的 `Pin Type` 属性一一对应；无法判定时为 `Undefined`

### length

# ISCH\_SourcePinGeometryItem.length property

引脚长度（从本体边缘到连接点）

## Signature

```typescript
length: number;
```

### pinid

# ISCH\_SourcePinGeometryItem.pinId property

引脚 ID

## Signature

```typescript
pinId: string;
```

## Remarks

形如 `<器件图元 ID>-<模板引脚 ID>`<!-- -->，与 [SCH\_SourcePrimitiveComponent.get()](../classes/SCH_SourcePrimitiveComponent.md) 返回的 `pins[].pinId` 编码一致， 可直接作为 [SCH\_SourcePrimitiveWire.removePinWires()](../classes/SCH_SourcePrimitiveWire.md) 的入参

### pinname

# ISCH\_SourcePinGeometryItem.pinName property

引脚名

## Signature

```typescript
pinName: string;
```

### pinnumber

# ISCH\_SourcePinGeometryItem.pinNumber property

引脚号

## Signature

```typescript
pinNumber: string;
```

### side

# ISCH\_SourcePinGeometryItem.side property

引脚所在边

## Signature

```typescript
side: ESCH_SourcePinSide;
```

## Remarks

调用方据此决定引出线方向

### x

# ISCH\_SourcePinGeometryItem.x property

连接点 X 坐标

## Signature

```typescript
x: number;
```

## Remarks

即导线应接入的位置，与 [SCH\_SourcePrimitiveComponent.get()](../classes/SCH_SourcePrimitiveComponent.md) 返回的 `pins[].x` 一致

### y

# ISCH\_SourcePinGeometryItem.y property

连接点 Y 坐标

## Signature

```typescript
y: number;
```
