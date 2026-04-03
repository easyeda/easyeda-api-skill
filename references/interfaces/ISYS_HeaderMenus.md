# ISYS\_HeaderMenus interface

顶部菜单项

## 签名

```typescript
interface ISYS_HeaderMenus 
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

[blank?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 空白页


</td></tr>
<tr><td>

[footprint?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 封装


</td></tr>
<tr><td>

[home?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 主页


</td></tr>
<tr><td>

[panel?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 面板


</td></tr>
<tr><td>

[panelView?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 面板预览


</td></tr>
<tr><td>

[pcb?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ PCB


</td></tr>
<tr><td>

[pcbView?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ PCB 预览（包括 2D、3D 预览）


</td></tr>
<tr><td>

[sch?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 原理图


</td></tr>
<tr><td>

[schematic?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 原理图


</td></tr>
<tr><td>

[symbol?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 符号（包括 CBB 符号）


</td></tr>
</tbody></table>

---

## 属性详情

### blank

# ISYS\_HeaderMenus.blank property

空白页

## 签名

```typescript
blank?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### footprint

# ISYS\_HeaderMenus.footprint property

封装

## 签名

```typescript
footprint?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### home

# ISYS\_HeaderMenus.home property

主页

## 签名

```typescript
home?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### panel

# ISYS\_HeaderMenus.panel property

面板

## 签名

```typescript
panel?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### panelview

# ISYS\_HeaderMenus.panelView property

面板预览

## 签名

```typescript
panelView?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### pcb

# ISYS\_HeaderMenus.pcb property

PCB

## 签名

```typescript
pcb?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### pcbview

# ISYS\_HeaderMenus.pcbView property

PCB 预览（包括 2D、3D 预览）

## 签名

```typescript
pcbView?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### sch

# ISYS\_HeaderMenus.sch property

> 警告：此 API 现已弃用。
>
> 请使用 `schematic` 替代 `sch`

原理图

## 签名

```typescript
sch?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### schematic

# ISYS\_HeaderMenus.schematic property

原理图

## 签名

```typescript
schematic?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### symbol

# ISYS\_HeaderMenus.symbol property

符号（包括 CBB 符号）

## 签名

```typescript
symbol?: Array<ISYS_HeaderMenuTopMenuItem>;
```
