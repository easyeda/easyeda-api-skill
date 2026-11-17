# IPNL\_PrimitiveAPI interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Panel 图元接口

## Signature

```typescript
interface IPNL_PrimitiveAPI
```

## Remarks

入参 / 出参中的图元 ID 均为稳定标识（对应数据模型 `gId`<!-- -->），会话内不变、跨保存有效，不是编辑器展示编号 `id`<!-- -->。

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

[create](./IPNL_PrimitiveAPI.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; [IPNL\_Primitive](./IPNL_Primitive.md) \| undefined \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt; \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md) \| undefined&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[delete](./IPNL_PrimitiveAPI.md)

</td><td>

</td><td>

(primitiveIds: string \| any \| Array&lt;string&gt; \| Array&lt;any&gt;) =&gt; boolean \| Promise&lt;boolean&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[get](./IPNL_PrimitiveAPI.md)

</td><td>

</td><td>

{ (primitiveIds: string): [IPNL\_Primitive](./IPNL_Primitive.md) \| undefined \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md) \| undefined&gt;; (primitiveIds: Array&lt;string&gt;): Array&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt;&gt; }

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[getAll](./IPNL_PrimitiveAPI.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; Array&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt;&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[getAllPrimitiveId](./IPNL_PrimitiveAPI.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; Array&lt;string&gt; \| Promise&lt;Array&lt;string&gt;&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
<tr><td>

[modify](./IPNL_PrimitiveAPI.md)

</td><td>

</td><td>

(primitiveId: string \| any, ...args: any\[\]) =&gt; [IPNL\_Primitive](./IPNL_Primitive.md) \| undefined \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md)<!-- -->&gt; \| Promise&lt;[IPNL\_Primitive](./IPNL_Primitive.md) \| undefined&gt;

</td><td>

**_(ALPHA)_**

</td></tr>
</tbody></table>

---

## 属性详情

### create

# IPNL\_PrimitiveAPI.create property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
create: (...args: any[]) =>
	IPNL_Primitive | undefined | Promise<IPNL_Primitive> | Promise<IPNL_Primitive | undefined>;
```

### delete

# IPNL\_PrimitiveAPI.delete property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
delete: (primitiveIds: string | any | Array<string> | Array<any>) => boolean | Promise<boolean>;
```

### get

# IPNL\_PrimitiveAPI.get property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
get: { (primitiveIds: string): IPNL_Primitive | undefined | Promise<IPNL_Primitive | undefined>; (primitiveIds: Array<string>): Array<IPNL_Primitive> | Promise<Array<IPNL_Primitive>> };
```

### getall

# IPNL\_PrimitiveAPI.getAll property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
getAll: (...args: any[]) => Array<IPNL_Primitive> | Promise<Array<IPNL_Primitive>>;
```

### getallprimitiveid

# IPNL\_PrimitiveAPI.getAllPrimitiveId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
getAllPrimitiveId: (...args: any[]) => Array<string> | Promise<Array<string>>;
```

### modify

# IPNL\_PrimitiveAPI.modify property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

## Signature

```typescript
modify: (primitiveId: string | any, ...args: any[]) =>
	IPNL_Primitive | undefined | Promise<IPNL_Primitive> | Promise<IPNL_Primitive | undefined>;
```
