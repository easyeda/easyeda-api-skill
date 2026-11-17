# IPNL\_MouseEventPayload interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

鼠标事件数据

## Signature

```typescript
interface IPNL_MouseEventPayload
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

[primitiveId?](./IPNL_MouseEventPayload.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** _(Optional)_ 命中的图元 ID，鼠标不在任何图元上时为 `undefined`

</td></tr>
<tr><td>

[primitiveType?](./IPNL_MouseEventPayload.md)

</td><td>

</td><td>

[EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

</td><td>

**_(ALPHA)_** _(Optional)_ 命中图元的类型，未命中时为 `undefined`

</td></tr>
<tr><td>

[x](./IPNL_MouseEventPayload.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 鼠标画布坐标 X（px）

</td></tr>
<tr><td>

[y](./IPNL_MouseEventPayload.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 鼠标画布坐标 Y（px，向上为正）

</td></tr>
</tbody></table>

---

## 属性详情

### primitiveid

# IPNL\_MouseEventPayload.primitiveId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

命中的图元 ID，鼠标不在任何图元上时为 `undefined`

## Signature

```typescript
primitiveId?: string;
```

### primitivetype

# IPNL\_MouseEventPayload.primitiveType property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

命中图元的类型，未命中时为 `undefined`

## Signature

```typescript
primitiveType?: EPNL_PrimitiveType;
```

### x

# IPNL\_MouseEventPayload.x property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

鼠标画布坐标 X（px）

## Signature

```typescript
x: number;
```

### y

# IPNL\_MouseEventPayload.y property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

鼠标画布坐标 Y（px，向上为正）

## Signature

```typescript
y: number;
```
