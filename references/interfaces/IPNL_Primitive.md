# IPNL\_Primitive interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Panel 图元

## Signature

```typescript
interface IPNL_Primitive
```

## Remarks

`getState_PrimitiveId` 返回稳定标识（对应数据模型 `gId`<!-- -->），非编辑器展示编号 `id`<!-- -->。

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

[create](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; [IPNL\_Primitive](./IPNL_Primitive.md) \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[done](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; [IPNL\_Primitive](./IPNL_Primitive.md) \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[getState\_PrimitiveId](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; string

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[getState\_PrimitiveType](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; [EPNL\_PrimitiveType](../enums/EPNL_PrimitiveType.md)

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[isAsync](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; boolean

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[reset](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; [IPNL\_Primitive](./IPNL_Primitive.md) \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[toAsync](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; [IPNL\_Primitive](./IPNL_Primitive.md)

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[toSync](./IPNL_Primitive.md)

</td><td>

</td><td>

() =&gt; [IPNL\_Primitive](./IPNL_Primitive.md)

</td><td>

**_(ALPHA)_**

</td></tr>
</tbody></table>

---

## 属性详情

### create

# IPNL\_Primitive.create property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
create: () => IPNL_Primitive | Promise<IPNL_Primitive>;
```

### done

# IPNL\_Primitive.done property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
done: () => IPNL_Primitive | Promise<IPNL_Primitive>;
```

### getstate_primitiveid

# IPNL\_Primitive.getState\_PrimitiveId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
getState_PrimitiveId: () => string;
```

### getstate_primitivetype

# IPNL\_Primitive.getState\_PrimitiveType property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
getState_PrimitiveType: () => EPNL_PrimitiveType;
```

### isasync

# IPNL\_Primitive.isAsync property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
isAsync: () => boolean;
```

### reset

# IPNL\_Primitive.reset property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
reset: () => IPNL_Primitive | Promise<IPNL_Primitive>;
```

### toasync

# IPNL\_Primitive.toAsync property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
toAsync: () => IPNL_Primitive;
```

### tosync

# IPNL\_Primitive.toSync property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
toSync: () => IPNL_Primitive;
```
