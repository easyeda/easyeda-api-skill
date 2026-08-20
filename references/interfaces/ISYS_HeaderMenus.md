# ISYS\_HeaderMenus interface

Header menu item

## Signature

```typescript
export interface ISYS_HeaderMenus 
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

[blank?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Blank page


</td></tr>
<tr><td>

[footprint?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Footprint


</td></tr>
<tr><td>

[home?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Home


</td></tr>
<tr><td>

[panel?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Panel


</td></tr>
<tr><td>

[panelLibrary?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Panel library


</td></tr>
<tr><td>

[panelView?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Panel preview


</td></tr>
<tr><td>

[pcb?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ PCB


</td></tr>
<tr><td>

[pcbView?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ PCB preview (including 2D and 3D preview)


</td></tr>
<tr><td>

[sch?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ 原理图


</td></tr>
<tr><td>

[schematic?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Schematic


</td></tr>
<tr><td>

[simulationSchematicNgspice?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Simulation schematic: Ngspice


</td></tr>
<tr><td>

[simulationSchematicNGspice?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ 仿真原理图：Ngspice


</td></tr>
<tr><td>

[simulationSchematicSimulIDE?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Simulation schematic: SimulIDE


</td></tr>
<tr><td>

[symbol?](./ISYS_HeaderMenus.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuTopMenuItem](./ISYS_HeaderMenuTopMenuItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Symbol (including CBB symbols)


</td></tr>
</tbody></table>

---

## 属性详情

### blank

# ISYS\_HeaderMenus.blank property

Blank page

## Signature

```typescript
blank?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### footprint

# ISYS\_HeaderMenus.footprint property

Footprint

## Signature

```typescript
footprint?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### home

# ISYS\_HeaderMenus.home property

Home

## Signature

```typescript
home?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### panel

# ISYS\_HeaderMenus.panel property

Panel

## Signature

```typescript
panel?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### panellibrary

# ISYS\_HeaderMenus.panelLibrary property

Panel library

## Signature

```typescript
panelLibrary?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### panelview

# ISYS\_HeaderMenus.panelView property

Panel preview

## Signature

```typescript
panelView?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### pcb

# ISYS\_HeaderMenus.pcb property

PCB

## Signature

```typescript
pcb?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### pcbview

# ISYS\_HeaderMenus.pcbView property

PCB preview (including 2D and 3D preview)

## Signature

```typescript
pcbView?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### sch

# ISYS\_HeaderMenus.sch property

> Warning: This API is now obsolete.
>
> 请使用 `schematic` 替代

原理图

## Signature

```typescript
sch?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### schematic

# ISYS\_HeaderMenus.schematic property

Schematic

## Signature

```typescript
schematic?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### simulationschematicngspice

# ISYS\_HeaderMenus.simulationSchematicNGspice property

> Warning: This API is now obsolete.
>
> 请使用 `simulationSchematicNgspice` 替代

仿真原理图：Ngspice

## Signature

```typescript
simulationSchematicNGspice?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### simulationschematicsimulide

# ISYS\_HeaderMenus.simulationSchematicSimulIDE property

Simulation schematic: SimulIDE

## Signature

```typescript
simulationSchematicSimulIDE?: Array<ISYS_HeaderMenuTopMenuItem>;
```

### symbol

# ISYS\_HeaderMenus.symbol property

Symbol (including CBB symbols)

## Signature

```typescript
symbol?: Array<ISYS_HeaderMenuTopMenuItem>;
```
