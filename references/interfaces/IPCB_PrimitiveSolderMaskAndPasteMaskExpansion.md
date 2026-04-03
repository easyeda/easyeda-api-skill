# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion interface

阻焊/助焊扩展

## 签名

```typescript
interface IPCB_PrimitiveSolderMaskAndPasteMaskExpansion 
```

## 备注

本参数设置包含以下三类情况：

1. 当图元为顶层/底层贴片焊盘时，允许设置对应层的阻焊/助焊扩展，其余设置不生效

2. 当图元为通孔焊盘时，允许设置顶层/底层的阻焊扩展，助焊扩展的设置不生效

3. 当图元为过孔时，允许设置顶层/底层的阻焊扩展，助焊扩展的设置不生效，如若为盲孔，则视其暴露层生效其阻焊扩展设置

助焊扩展在一般情况下仅用于钢网生产等特定用途，不了解其作用请安心地忽略其参数设置

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

[bottomPasteMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 底层助焊扩展


</td></tr>
<tr><td>

[bottomSolderMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 底层阻焊扩展


</td></tr>
<tr><td>

[topPasteMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 顶层助焊扩展


</td></tr>
<tr><td>

[topSolderMask?](./IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md)


</td><td>


</td><td>

number


</td><td>

_（可选）_ 顶层阻焊扩展


</td></tr>
</tbody></table>

---

## 属性详情

### bottompastemask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.bottomPasteMask property

底层助焊扩展

## 签名

```typescript
bottomPasteMask?: number;
```

### bottomsoldermask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.bottomSolderMask property

底层阻焊扩展

## 签名

```typescript
bottomSolderMask?: number;
```

### toppastemask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.topPasteMask property

顶层助焊扩展

## 签名

```typescript
topPasteMask?: number;
```

### topsoldermask

# IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion.topSolderMask property

顶层阻焊扩展

## 签名

```typescript
topSolderMask?: number;
```
