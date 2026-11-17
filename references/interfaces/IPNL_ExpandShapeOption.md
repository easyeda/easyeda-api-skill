# IPNL\_ExpandShapeOption interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

形状扩展参数

## Signature

```typescript
interface IPNL_ExpandShapeOption
```

## Remarks

收缩或扩展的幅度与方式合成一份参数；方向由方式决定，数值为距离或缩放比例。缩到 1px 以下或扩到 4500px 以上的图元会被跳过而不报错

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

[deleteOriginal?](./IPNL_ExpandShapeOption.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 是否删除原图元，不传为保留

</td></tr>
<tr><td>

[targetLayer?](./IPNL_ExpandShapeOption.md)

</td><td>

</td><td>

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

**_(ALPHA)_** _(Optional)_ 结果图元落到的图层，不传沿用原图层

</td></tr>
<tr><td>

[type](./IPNL_ExpandShapeOption.md)

</td><td>

</td><td>

[EPNL\_ExpandShapeType](../enums/EPNL_ExpandShapeType.md)

</td><td>

**_(ALPHA)_** 扩展方式

</td></tr>
<tr><td>

[value](./IPNL_ExpandShapeOption.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 扩展距离（px，向内收缩 / 向外扩展时使用）或缩放比例（按比例缩放时使用，1 表示原尺寸）

</td></tr>
</tbody></table>

---

## 属性详情

### deleteoriginal

# IPNL\_ExpandShapeOption.deleteOriginal property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否删除原图元，不传为保留

## Signature

```typescript
deleteOriginal?: boolean;
```

### targetlayer

# IPNL\_ExpandShapeOption.targetLayer property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

结果图元落到的图层，不传沿用原图层

## Signature

```typescript
targetLayer?: EPNL_LayerId;
```

### type

# IPNL\_ExpandShapeOption.type property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

扩展方式

## Signature

```typescript
type: EPNL_ExpandShapeType;
```

### value

# IPNL\_ExpandShapeOption.value property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

扩展距离（px，向内收缩 / 向外扩展时使用）或缩放比例（按比例缩放时使用，1 表示原尺寸）

## Signature

```typescript
value: number;
```
