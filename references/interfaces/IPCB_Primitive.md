# IPCB\_Primitive interface

PCB 图元

## 签名

```typescript
interface IPCB_Primitive 
```

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


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

## 签名

```typescript
create: () => IPCB_Primitive | Promise<IPCB_Primitive>;
```

### done

# IPCB\_Primitive.done property

## 签名

```typescript
done: () => IPCB_Primitive | Promise<IPCB_Primitive>;
```

### getstate_primitiveid

# IPCB\_Primitive.getState\_PrimitiveId property

## 签名

```typescript
getState_PrimitiveId: () => string;
```

### getstate_primitivetype

# IPCB\_Primitive.getState\_PrimitiveType property

## 签名

```typescript
getState_PrimitiveType: () => EPCB_PrimitiveType;
```

### isasync

# IPCB\_Primitive.isAsync property

## 签名

```typescript
isAsync: () => boolean;
```

### reset

# IPCB\_Primitive.reset property

## 签名

```typescript
reset: () => IPCB_Primitive | Promise<IPCB_Primitive>;
```

### toasync

# IPCB\_Primitive.toAsync property

## 签名

```typescript
toAsync: () => IPCB_Primitive;
```

### tosync

# IPCB\_Primitive.toSync property

## 签名

```typescript
toSync: () => IPCB_Primitive;
```
