# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion interface

Solder mask / paste mask expansion

## Signature

```typescript
export interface IPCB_PrimitiveSolderMaskAndPasteMaskExpansion 
```

## Remarks

This parameter setting includes the following three cases:

1. When the primitive is a top/bottom layer SMD pad, the solder mask/paste mask expansion of the corresponding layer can be set; other settings have no effect

2. When the primitive is a through-hole pad, the solder mask expansion of the top/bottom layer can be set; paste mask expansion settings have no effect

3. When the primitive is a via, the solder mask expansion of the top/bottom layer can be set; paste mask expansion settings have no effect. If it is a blind via, its solder mask expansion setting takes effect according to its exposed layer

The paste mask expansion is generally only used for specific purposes such as stencil production. If you do not understand its function, feel free to ignore its parameter settings

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

[bottomPasteMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Bottom paste mask expansion


</td></tr>
<tr><td>

[bottomSolderMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Bottom solder mask expansion


</td></tr>
<tr><td>

[topPasteMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Top paste mask expansion


</td></tr>
<tr><td>

[topSolderMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Top solder mask expansion


</td></tr>
</tbody></table>

---

## 属性详情

### bottompastemask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.bottomPasteMask property

Bottom paste mask expansion

## Signature

```typescript
bottomPasteMask?: number;
```

### bottomsoldermask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.bottomSolderMask property

Bottom solder mask expansion

## Signature

```typescript
bottomSolderMask?: number;
```

### toppastemask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.topPasteMask property

Top paste mask expansion

## Signature

```typescript
topPasteMask?: number;
```

### topsoldermask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.topSolderMask property

Top solder mask expansion

## Signature

```typescript
topSolderMask?: number;
```
