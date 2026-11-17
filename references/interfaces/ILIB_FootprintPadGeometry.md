# ILIB\_FootprintPadGeometry interface

封装焊盘几何

## Signature

```typescript
interface ILIB_FootprintPadGeometry
```

## Remarks

坐标为封装自身坐标系，单位为 mil，原点位于封装锚点； 旋转与尺寸均为焊盘自身参数，未叠加封装旋转

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

[bbox](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

[IPCB\_DocumentBBox](./IPCB_DocumentBBox.md)

</td><td>

焊盘自身包围盒

</td></tr>
<tr><td>

[height](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

number

</td><td>

高度

</td></tr>
<tr><td>

[holeDiameter?](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 钻孔直径

</td></tr>
<tr><td>

[holeType?](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

'ROUND' \| 'RECT' \| 'SLOT' \| 'ROUND\_RECT' \| 'HEXAGON' \| 'OCTAGON'

</td><td>

_(Optional)_ 孔类型，无孔时省略

</td></tr>
<tr><td>

[layerIds](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

Array&lt;number&gt;

</td><td>

层标识列表

</td></tr>
<tr><td>

[padId](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

string

</td><td>

焊盘 ID（封装内唯一）

</td></tr>
<tr><td>

[padNumber](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

string

</td><td>

焊盘编号，如 `1` / `A1`

</td></tr>
<tr><td>

[plated](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

boolean

</td><td>

是否金属化孔

</td></tr>
<tr><td>

[rotation](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

number

</td><td>

旋转角度

</td></tr>
<tr><td>

[shape](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

[ELIB\_FootprintPadShape](../enums/ELIB_FootprintPadShape.md)

</td><td>

焊盘形状

</td></tr>
<tr><td>

[slotSize?](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

\{ length: number; width: number \}

</td><td>

_(Optional)_ 槽孔尺寸

</td></tr>
<tr><td>

[type](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

[ELIB\_FootprintPadType](../enums/ELIB_FootprintPadType.md)

</td><td>

焊盘功能

</td></tr>
<tr><td>

[width](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

number

</td><td>

宽度（圆形的直径同样记录在此字段）

</td></tr>
<tr><td>

[x](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

number

</td><td>

中心点 X 坐标

</td></tr>
<tr><td>

[y](./ILIB_FootprintPadGeometry.md)

</td><td>

</td><td>

number

</td><td>

中心点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### bbox

# ILIB\_FootprintPadGeometry.bbox property

焊盘自身包围盒

## Signature

```typescript
bbox: IPCB_DocumentBBox;
```

## Remarks

已含旋转后的实际外廓，用于间距与重叠判断

### height

# ILIB\_FootprintPadGeometry.height property

高度

## Signature

```typescript
height: number;
```

### holediameter

# ILIB\_FootprintPadGeometry.holeDiameter property

钻孔直径

## Signature

```typescript
holeDiameter?: number;
```

## Remarks

仅通孔与定位孔携带

### holetype

# ILIB\_FootprintPadGeometry.holeType property

孔类型，无孔时省略

## Signature

```typescript
holeType?: 'ROUND' | 'RECT' | 'SLOT' | 'ROUND_RECT' | 'HEXAGON' | 'OCTAGON';
```

### layerids

# ILIB\_FootprintPadGeometry.layerIds property

层标识列表

## Signature

```typescript
layerIds: Array<number>;
```

## Remarks

通孔焊盘覆盖多层，表贴焊盘通常只有单层；取值与 `pcb_Layer` 的层 ID 一致

### padid

# ILIB\_FootprintPadGeometry.padId property

焊盘 ID（封装内唯一）

## Signature

```typescript
padId: string;
```

### padnumber

# ILIB\_FootprintPadGeometry.padNumber property

焊盘编号，如 `1` / `A1`

## Signature

```typescript
padNumber: string;
```

### plated

# ILIB\_FootprintPadGeometry.plated property

是否金属化孔

## Signature

```typescript
plated: boolean;
```

### rotation

# ILIB\_FootprintPadGeometry.rotation property

旋转角度

## Signature

```typescript
rotation: number;
```

### shape

# ILIB\_FootprintPadGeometry.shape property

焊盘形状

## Signature

```typescript
shape: ELIB_FootprintPadShape;
```

### slotsize

# ILIB\_FootprintPadGeometry.slotSize property

槽孔尺寸

## Signature

```typescript
slotSize?: { length: number; width: number };
```

## Remarks

仅槽孔携带，表示槽长与槽宽

### type

# ILIB\_FootprintPadGeometry.type property

焊盘功能

## Signature

```typescript
type: ELIB_FootprintPadType;
```

### width

# ILIB\_FootprintPadGeometry.width property

宽度（圆形的直径同样记录在此字段）

## Signature

```typescript
width: number;
```

### x

# ILIB\_FootprintPadGeometry.x property

中心点 X 坐标

## Signature

```typescript
x: number;
```

### y

# ILIB\_FootprintPadGeometry.y property

中心点 Y 坐标

## Signature

```typescript
y: number;
```
