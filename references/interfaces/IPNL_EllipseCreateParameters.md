# IPNL\_EllipseCreateParameters interface

椭圆图元创建参数

## Signature

```typescript
interface IPNL_EllipseCreateParameters
```

## Remarks

坐标为笛卡尔坐标系（Y 轴向上为正），单位与画布一致（px）

`centerX` / `centerY` 为椭圆心坐标，`radiusX` / `radiusY` 为长短半径，与参考点无关；两者相等即为正圆

`rotation` 绕椭圆心逆时针旋转（度），旋转时椭圆心保持不动

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

[centerX](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

椭圆心 X 坐标

</td></tr>
<tr><td>

[centerY](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

椭圆心 Y 坐标（笛卡尔向上为正）

</td></tr>
<tr><td>

[fillColor?](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 填充颜色，不传用编辑器默认样式

</td></tr>
<tr><td>

[layer?](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

_(Optional)_ 目标图层，不传落在当前绘制层

</td></tr>
<tr><td>

[primitiveLock?](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否锁定，不传为不锁定

</td></tr>
<tr><td>

[radiusX](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

X 轴半径（px）

</td></tr>
<tr><td>

[radiusY](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

Y 轴半径（px），与 radiusX 相等即为正圆

</td></tr>
<tr><td>

[rotation?](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度（度，绕椭圆心逆时针为正），不传为 0

</td></tr>
<tr><td>

[strokeColor?](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 描边颜色，不传用编辑器默认样式

</td></tr>
<tr><td>

[strokeWidth?](./IPNL_EllipseCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 描边宽度，不传用编辑器默认样式

</td></tr>
</tbody></table>

---

## 属性详情

### centerx

# IPNL\_EllipseCreateParameters.centerX property

椭圆心 X 坐标

## Signature

```typescript
centerX: number;
```

### centery

# IPNL\_EllipseCreateParameters.centerY property

椭圆心 Y 坐标（笛卡尔向上为正）

## Signature

```typescript
centerY: number;
```

### fillcolor

# IPNL\_EllipseCreateParameters.fillColor property

填充颜色，不传用编辑器默认样式

## Signature

```typescript
fillColor?: string;
```

### layer

# IPNL\_EllipseCreateParameters.layer property

目标图层，不传落在当前绘制层

## Signature

```typescript
layer?: EPNL_LayerId;
```

### primitivelock

# IPNL\_EllipseCreateParameters.primitiveLock property

是否锁定，不传为不锁定

## Signature

```typescript
primitiveLock?: boolean;
```

### radiusx

# IPNL\_EllipseCreateParameters.radiusX property

X 轴半径（px）

## Signature

```typescript
radiusX: number;
```

### radiusy

# IPNL\_EllipseCreateParameters.radiusY property

Y 轴半径（px），与 radiusX 相等即为正圆

## Signature

```typescript
radiusY: number;
```

### rotation

# IPNL\_EllipseCreateParameters.rotation property

旋转角度（度，绕椭圆心逆时针为正），不传为 0

## Signature

```typescript
rotation?: number;
```

### strokecolor

# IPNL\_EllipseCreateParameters.strokeColor property

描边颜色，不传用编辑器默认样式

## Signature

```typescript
strokeColor?: string;
```

### strokewidth

# IPNL\_EllipseCreateParameters.strokeWidth property

描边宽度，不传用编辑器默认样式

## Signature

```typescript
strokeWidth?: number;
```
