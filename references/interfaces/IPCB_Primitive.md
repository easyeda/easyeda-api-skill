# IPCB\_Primitive interface

PCB 图元

## Signature

```typescript
interface IPCB_Primitive 
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

[create](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; [IPCB\_Primitive](./IPCB_Primitive.md) \| Promise&lt;[IPCB\_Primitive](./IPCB_Primitive.md)<!-- -->&gt;


</td><td>


</td></tr>
<tr><td>

[done](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; [IPCB\_Primitive](./IPCB_Primitive.md) \| Promise&lt;[IPCB\_Primitive](./IPCB_Primitive.md)<!-- -->&gt;


</td><td>


</td></tr>
<tr><td>

[getState\_PrimitiveId](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; string


</td><td>


</td></tr>
<tr><td>

[getState\_PrimitiveType](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; [EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)


</td><td>


</td></tr>
<tr><td>

[isAsync](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; boolean


</td><td>


</td></tr>
<tr><td>

[reset](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; [IPCB\_Primitive](./IPCB_Primitive.md) \| Promise&lt;[IPCB\_Primitive](./IPCB_Primitive.md)<!-- -->&gt;


</td><td>


</td></tr>
<tr><td>

[toAsync](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; [IPCB\_Primitive](./IPCB_Primitive.md)


</td><td>


</td></tr>
<tr><td>

[toSync](./IPCB_Primitive.md)


</td><td>


</td><td>

() =&gt; [IPCB\_Primitive](./IPCB_Primitive.md)


</td><td>


</td></tr>
</tbody></table>

---

## 属性详情

### create

# IPCB\_Primitive.create property

## Signature

```typescript
create: () => IPCB_Primitive | Promise<IPCB_Primitive>;
```

### done

# IPCB\_Primitive.done property

## Signature

```typescript
done: () => IPCB_Primitive | Promise<IPCB_Primitive>;
```

### getstate_primitiveid

# IPCB\_Primitive.getState\_PrimitiveId property

## Signature

```typescript
getState_PrimitiveId: () => string;
```

### getstate_primitivetype

# IPCB\_Primitive.getState\_PrimitiveType property

## Signature

```typescript
getState_PrimitiveType: () => EPCB_PrimitiveType;
```

### isasync

# IPCB\_Primitive.isAsync property

## Signature

```typescript
isAsync: () => boolean;
```

### reset

# IPCB\_Primitive.reset property

## Signature

```typescript
reset: () => IPCB_Primitive | Promise<IPCB_Primitive>;
```

### toasync

# IPCB\_Primitive.toAsync property

## Signature

```typescript
toAsync: () => IPCB_Primitive;
```

### tosync

# IPCB\_Primitive.toSync property

## Signature

```typescript
toSync: () => IPCB_Primitive;
```
