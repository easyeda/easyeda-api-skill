# IPNL\_PrimitiveCommonState interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板图元公共属性

## Signature

```typescript
interface IPNL_PrimitiveCommonState
```

## Remarks

覆盖面板图元的公共元数据与样式属性；`strokeStyle` / `displayStroke` / `displayFill` 仅对描边类图元有效，其他图元读取时为 `undefined`<!-- -->。 `hide` 是「是否生效」开关（影响导出与生产），`visible` 只是画布显隐，二者独立。 变换矩阵不单独暴露：它由几何字段 + `rotation` 派生，需要改变朝向时用 `rotation` 或 `PNL_EditControl` 的旋转 / 镜像接口。

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

[cover](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否遮盖

</td></tr>
<tr><td>

[displayFill?](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 是否显示填充

</td></tr>
<tr><td>

[displayStroke?](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** _(Optional)_ 是否显示描边

</td></tr>
<tr><td>

[hide](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否生效（`false` 时不参与导出与生产，画布上可能仍然可见；与 `visible` 是两个独立开关）

</td></tr>
<tr><td>

[isWhiteBackground](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否白底

</td></tr>
<tr><td>

[layer?](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

**_(ALPHA)_** _(Optional)_ 图层 ID；允许的图层随图元类型受白名单限制，见 `PNL_Layer` 类注释

</td></tr>
<tr><td>

[name](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 图元名称

</td></tr>
<tr><td>

[opacity](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 不透明度（0 - 1）

</td></tr>
<tr><td>

[primitiveLock](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否锁定

</td></tr>
<tr><td>

[rotation](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 旋转角度（度，逆时针为正），图元围绕参考点逆时针旋转，参考点保持不动

</td></tr>
<tr><td>

[scope](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

[EPNL\_PrintScope](../enums/EPNL_PrintScope.md)

</td><td>

**_(ALPHA)_** 打印范围（打印 / 遮盖作用域）

</td></tr>
<tr><td>

[strokeStyle?](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 描边样式编号

</td></tr>
<tr><td>

[transparencyPrint](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 打印透明度（0 - 1）

</td></tr>
<tr><td>

[transparencyWhite](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 白底透明度（0 - 1）

</td></tr>
<tr><td>

[visible](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可见

</td></tr>
<tr><td>

[zIndex?](./IPNL_PrimitiveCommonState.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** _(Optional)_ 层级，数值越大越靠前

</td></tr>
</tbody></table>

---

## 属性详情

### cover

# IPNL\_PrimitiveCommonState.cover property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否遮盖

## Signature

```typescript
cover: boolean;
```

### displayfill

# IPNL\_PrimitiveCommonState.displayFill property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否显示填充

## Signature

```typescript
displayFill?: boolean;
```

### displaystroke

# IPNL\_PrimitiveCommonState.displayStroke property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否显示描边

## Signature

```typescript
displayStroke?: boolean;
```

### hide

# IPNL\_PrimitiveCommonState.hide property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否生效（`false` 时不参与导出与生产，画布上可能仍然可见；与 `visible` 是两个独立开关）

## Signature

```typescript
hide: boolean;
```

### iswhitebackground

# IPNL\_PrimitiveCommonState.isWhiteBackground property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否白底

## Signature

```typescript
isWhiteBackground: boolean;
```

### layer

# IPNL\_PrimitiveCommonState.layer property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

图层 ID；允许的图层随图元类型受白名单限制，见 `PNL_Layer` 类注释

## Signature

```typescript
layer?: EPNL_LayerId;
```

### name

# IPNL\_PrimitiveCommonState.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

图元名称

## Signature

```typescript
name: string;
```

### opacity

# IPNL\_PrimitiveCommonState.opacity property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

不透明度（0 - 1）

## Signature

```typescript
opacity: number;
```

### primitivelock

# IPNL\_PrimitiveCommonState.primitiveLock property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否锁定

## Signature

```typescript
primitiveLock: boolean;
```

### rotation

# IPNL\_PrimitiveCommonState.rotation property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

旋转角度（度，逆时针为正），图元围绕参考点逆时针旋转，参考点保持不动

## Signature

```typescript
rotation: number;
```

### scope

# IPNL\_PrimitiveCommonState.scope property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

打印范围（打印 / 遮盖作用域）

## Signature

```typescript
scope: EPNL_PrintScope;
```

### strokestyle

# IPNL\_PrimitiveCommonState.strokeStyle property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

描边样式编号

## Signature

```typescript
strokeStyle?: number;
```

### transparencyprint

# IPNL\_PrimitiveCommonState.transparencyPrint property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

打印透明度（0 - 1）

## Signature

```typescript
transparencyPrint: number;
```

### transparencywhite

# IPNL\_PrimitiveCommonState.transparencyWhite property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

白底透明度（0 - 1）

## Signature

```typescript
transparencyWhite: number;
```

### visible

# IPNL\_PrimitiveCommonState.visible property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可见

## Signature

```typescript
visible: boolean;
```

### zindex

# IPNL\_PrimitiveCommonState.zIndex property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

层级，数值越大越靠前

## Signature

```typescript
zIndex?: number;
```
