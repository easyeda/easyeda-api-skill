# ILIB\_SymbolPinGeometry interface

符号引脚几何

## Signature

```typescript
interface ILIB_SymbolPinGeometry
```

## Remarks

坐标为符号自身坐标系，单位为 10 mil，原点位于符号锚点

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

[direction](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)

</td><td>

引脚电气方向

</td></tr>
<tr><td>

[length](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

number

</td><td>

引脚长度（从本体边缘到连接点）

</td></tr>
<tr><td>

[pinId](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

string

</td><td>

引脚 ID（符号内唯一）

</td></tr>
<tr><td>

[pinName](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

string

</td><td>

引脚名

</td></tr>
<tr><td>

[pinNumber](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

string

</td><td>

引脚号

</td></tr>
<tr><td>

[rotation](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

number

</td><td>

引脚朝向角度

</td></tr>
<tr><td>

[side](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

[ELIB\_SymbolPinSide](../enums/ELIB_SymbolPinSide.md)

</td><td>

引脚所在边

</td></tr>
<tr><td>

[x](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

number

</td><td>

连接点 X 坐标（导线接入位置）

</td></tr>
<tr><td>

[y](./ILIB_SymbolPinGeometry.md)

</td><td>

</td><td>

number

</td><td>

连接点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### direction

# ILIB\_SymbolPinGeometry.direction property

引脚电气方向

## Signature

```typescript
direction: ESCH_PrimitivePinType;
```

## Remarks

与引脚图元使用同一套枚举 [ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)<!-- -->，两者取值完全一致

### length

# ILIB\_SymbolPinGeometry.length property

引脚长度（从本体边缘到连接点）

## Signature

```typescript
length: number;
```

### pinid

# ILIB\_SymbolPinGeometry.pinId property

引脚 ID（符号内唯一）

## Signature

```typescript
pinId: string;
```

### pinname

# ILIB\_SymbolPinGeometry.pinName property

引脚名

## Signature

```typescript
pinName: string;
```

### pinnumber

# ILIB\_SymbolPinGeometry.pinNumber property

引脚号

## Signature

```typescript
pinNumber: string;
```

### rotation

# ILIB\_SymbolPinGeometry.rotation property

引脚朝向角度

## Signature

```typescript
rotation: number;
```

## Remarks

取值为 `0` / `90` / `180` / `270`<!-- -->，与引脚图元的 `rotation` 字段含义一致； 需要语义化的方位判断时改用 [side](./ILIB_SymbolPinGeometry.md)

### side

# ILIB\_SymbolPinGeometry.side property

引脚所在边

## Signature

```typescript
side: ELIB_SymbolPinSide;
```

## Remarks

由 [rotation](./ILIB_SymbolPinGeometry.md) 归并得到，可据此决定引出线方向，无需自行比较引脚坐标与包围盒

### x

# ILIB\_SymbolPinGeometry.x property

连接点 X 坐标（导线接入位置）

## Signature

```typescript
x: number;
```

### y

# ILIB\_SymbolPinGeometry.y property

连接点 Y 坐标

## Signature

```typescript
y: number;
```
