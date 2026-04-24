# ISCH\_Primitive interface

原理图图元

## Signature

```typescript
interface ISCH_Primitive 
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

[create](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; [ISCH\_Primitive](./ISCH_Primitive.md) \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt;


</td><td>


</td></tr>
<tr><td>

[done](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; [ISCH\_Primitive](./ISCH_Primitive.md) \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt;


</td><td>


</td></tr>
<tr><td>

[getState\_PrimitiveId](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; string


</td><td>


</td></tr>
<tr><td>

[getState\_PrimitiveType](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; [ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)


</td><td>


</td></tr>
<tr><td>

[isAsync](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; boolean


</td><td>


</td></tr>
<tr><td>

[reset](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; [ISCH\_Primitive](./ISCH_Primitive.md) \| Promise&lt;[ISCH\_Primitive](./ISCH_Primitive.md)<!-- -->&gt;


</td><td>


</td></tr>
<tr><td>

[toAsync](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; [ISCH\_Primitive](./ISCH_Primitive.md)


</td><td>


</td></tr>
<tr><td>

[toSync](./ISCH_Primitive.md)


</td><td>


</td><td>

() =&gt; [ISCH\_Primitive](./ISCH_Primitive.md)


</td><td>


</td></tr>
</tbody></table>

---

## 属性详情

### create

# ISCH\_Primitive.create property

## Signature

```typescript
create: () => ISCH_Primitive | Promise<ISCH_Primitive>;
```

### done

# ISCH\_Primitive.done property

## Signature

```typescript
done: () => ISCH_Primitive | Promise<ISCH_Primitive>;
```

### getstate_primitiveid

# ISCH\_Primitive.getState\_PrimitiveId property

## Signature

```typescript
getState_PrimitiveId: () => string;
```

### getstate_primitivetype

# ISCH\_Primitive.getState\_PrimitiveType property

## Signature

```typescript
getState_PrimitiveType: () => ESCH_PrimitiveType;
```

### isasync

# ISCH\_Primitive.isAsync property

## Signature

```typescript
isAsync: () => boolean;
```

### reset

# ISCH\_Primitive.reset property

## Signature

```typescript
reset: () => ISCH_Primitive | Promise<ISCH_Primitive>;
```

### toasync

# ISCH\_Primitive.toAsync property

## Signature

```typescript
toAsync: () => ISCH_Primitive;
```

### tosync

# ISCH\_Primitive.toSync property

## Signature

```typescript
toSync: () => ISCH_Primitive;
```
