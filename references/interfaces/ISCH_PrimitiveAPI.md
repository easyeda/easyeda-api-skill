# ISCH\_PrimitiveAPI interface

原理图图元接口

## Signature

```typescript
interface ISCH_PrimitiveAPI 
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

[create](./ISCH_PrimitiveAPI.md)


</td><td>


</td><td>

(...args: any\[\]) =&gt; [ISCH\_Primitive](./ISCH_Primitive.md) \| undefined \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt; \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md) \| undefined&gt;


</td><td>


</td></tr>
<tr><td>

[delete](./ISCH_PrimitiveAPI.md)


</td><td>


</td><td>

(primitiveIds: string \| any \| Array&lt;string&gt; \| Array&lt;any&gt;) =&gt; boolean \| Promise&lt;boolean&gt;


</td><td>


</td></tr>
<tr><td>

[get](./ISCH_PrimitiveAPI.md)


</td><td>


</td><td>

{ (primitiveIds: string): [ISCH\_Primitive](./ISCH_Primitive.md) \| undefined \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md) \| undefined&gt;; (primitiveIds: Array&lt;string&gt;): Array&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt;&gt;; }


</td><td>


</td></tr>
<tr><td>

[getAll](./ISCH_PrimitiveAPI.md)


</td><td>


</td><td>

(...args: any\[\]) =&gt; Array&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt;&gt;


</td><td>


</td></tr>
<tr><td>

[getAllPrimitiveId](./ISCH_PrimitiveAPI.md)


</td><td>


</td><td>

(...args: any\[\]) =&gt; Array&lt;string&gt; \| Promise&lt;Array&lt;string&gt;&gt;


</td><td>


</td></tr>
<tr><td>

[modify](./ISCH_PrimitiveAPI.md)


</td><td>


</td><td>

(primitiveId: string \| any, ...args: any\[\]) =&gt; [ISCH\_Primitive](./ISCH_Primitive.md) \| undefined \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt; \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md) \| undefined&gt;


</td><td>


</td></tr>
</tbody></table>

---

## 属性详情

### create

# ISCH\_PrimitiveAPI.create property

## Signature

```typescript
create: (...args: any[]) => ISCH_Primitive | undefined | Promise<ISCH_Primitive> | Promise<ISCH_Primitive | undefined>;
```

### delete

# ISCH\_PrimitiveAPI.delete property

## Signature

```typescript
delete: (primitiveIds: string | any | Array<string> | Array<any>) => boolean | Promise<boolean>;
```

### get

# ISCH\_PrimitiveAPI.get property

## Signature

```typescript
get: {
        (primitiveIds: string): ISCH_Primitive | undefined | Promise<ISCH_Primitive | undefined>;
        (primitiveIds: Array<string>): Array<ISCH_Primitive> | Promise<Array<ISCH_Primitive>>;
    };
```

### getall

# ISCH\_PrimitiveAPI.getAll property

## Signature

```typescript
getAll: (...args: any[]) => Array<ISCH_Primitive> | Promise<Array<ISCH_Primitive>>;
```

### getallprimitiveid

# ISCH\_PrimitiveAPI.getAllPrimitiveId property

## Signature

```typescript
getAllPrimitiveId: (...args: any[]) => Array<string> | Promise<Array<string>>;
```

### modify

# ISCH\_PrimitiveAPI.modify property

## Signature

```typescript
modify: (primitiveId: string | any, ...args: any[]) => ISCH_Primitive | undefined | Promise<ISCH_Primitive> | Promise<ISCH_Primitive | undefined>;
```
