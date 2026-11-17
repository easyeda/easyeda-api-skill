# IPNL\_RectangleCreateParameters interface

矩形图元创建参数

## Signature

```typescript
interface IPNL_RectangleCreateParameters
```

## Remarks

`x`<!-- -->、`y`<!-- -->、`width`<!-- -->、`height` 为必填项，其余参数可选

坐标为笛卡尔坐标系（Y 轴向上为正），单位与画布一致（px）

`x` / `y` 为矩形参考点位置，参考点取编辑器属性面板的当前全局设置，缺省为左下角；`rotation` 绕参考点逆时针旋转，旋转时参考点保持不动

例：`{ x: 0, y: 150, width: 180, height: 90 }` 表示左下角在原点上方 150、左上角在原点上方 240

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

[fillColor?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 填充颜色，不传用编辑器默认样式

</td></tr>
<tr><td>

[height](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

高度

</td></tr>
<tr><td>

[layer?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

_(Optional)_ 目标图层，不传落在当前绘制层

</td></tr>
<tr><td>

[primitiveLock?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否锁定，不传为不锁定

</td></tr>
<tr><td>

[rotation?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度（度，绕 x / y 参考点逆时针为正），不传为 0

</td></tr>
<tr><td>

[rx?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 圆角 X 半径，不传为直角

</td></tr>
<tr><td>

[ry?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 圆角 Y 半径，不传为直角

</td></tr>
<tr><td>

[strokeColor?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 描边颜色，不传用编辑器默认样式

</td></tr>
<tr><td>

[strokeWidth?](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 描边宽度，不传用编辑器默认样式

</td></tr>
<tr><td>

[width](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

宽度

</td></tr>
<tr><td>

[x](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

参考点 X 坐标（缺省参考点为左下角，rotation=0 时即包围盒左下角）

</td></tr>
<tr><td>

[y](./IPNL_RectangleCreateParameters.md)

</td><td>

</td><td>

number

</td><td>

参考点 Y 坐标（笛卡尔向上为正；rotation=0 时即包围盒左下角 Y）

</td></tr>
</tbody></table>

---

## 属性详情

### fillcolor

# IPNL\_RectangleCreateParameters.fillColor property

填充颜色，不传用编辑器默认样式

## Signature

```typescript
fillColor?: string;
```

### height

# IPNL\_RectangleCreateParameters.height property

高度

## Signature

```typescript
height: number;
```

### layer

# IPNL\_RectangleCreateParameters.layer property

目标图层，不传落在当前绘制层

## Signature

```typescript
layer?: EPNL_LayerId;
```

### primitivelock

# IPNL\_RectangleCreateParameters.primitiveLock property

是否锁定，不传为不锁定

## Signature

```typescript
primitiveLock?: boolean;
```

### rotation

# IPNL\_RectangleCreateParameters.rotation property

旋转角度（度，绕 x / y 参考点逆时针为正），不传为 0

## Signature

```typescript
rotation?: number;
```

### rx

# IPNL\_RectangleCreateParameters.rx property

圆角 X 半径，不传为直角

## Signature

```typescript
rx?: number;
```

### ry

# IPNL\_RectangleCreateParameters.ry property

圆角 Y 半径，不传为直角

## Signature

```typescript
ry?: number;
```

### strokecolor

# IPNL\_RectangleCreateParameters.strokeColor property

描边颜色，不传用编辑器默认样式

## Signature

```typescript
strokeColor?: string;
```

### strokewidth

# IPNL\_RectangleCreateParameters.strokeWidth property

描边宽度，不传用编辑器默认样式

## Signature

```typescript
strokeWidth?: number;
```

### width

# IPNL\_RectangleCreateParameters.width property

宽度

## Signature

```typescript
width: number;
```

### x

# IPNL\_RectangleCreateParameters.x property

参考点 X 坐标（缺省参考点为左下角，rotation=0 时即包围盒左下角）

## Signature

```typescript
x: number;
```

### y

# IPNL\_RectangleCreateParameters.y property

参考点 Y 坐标（笛卡尔向上为正；rotation=0 时即包围盒左下角 Y）

## Signature

```typescript
y: number;
```
