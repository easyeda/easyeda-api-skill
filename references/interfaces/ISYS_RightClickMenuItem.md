# ISYS\_RightClickMenuItem interface

Right-click menu item

## Signature

```typescript
export interface ISYS_RightClickMenuItem 
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

[icon?](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Menu item icon


</td></tr>
<tr><td>

[id](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

string


</td><td>

Menu item ID, cannot be repeated


</td></tr>
<tr><td>

[menuItems?](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

Array&lt;[ISYS\_RightClickMenuItem](./ISYS_RightClickMenuItem.md) \| null&gt;


</td><td>

_(Optional)_ Sub-menu item


</td></tr>
<tr><td>

[registerFn?](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Registration method name (the method needs to be exported in the extension entry file)


</td></tr>
<tr><td>

[title?](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Menu item title


</td></tr>
</tbody></table>

---

## 属性详情

### icon

# ISYS\_RightClickMenuItem.icon property

Menu item icon

## Signature

```typescript
icon?: string;
```

### id

# ISYS\_RightClickMenuItem.id property

Menu item ID, cannot be repeated

## Signature

```typescript
id: string;
```

### menuitems

# ISYS\_RightClickMenuItem.menuItems property

Sub-menu item

## Signature

```typescript
menuItems?: Array<ISYS_RightClickMenuItem | null>;
```

### title

# ISYS\_RightClickMenuItem.title property

Menu item title

## Signature

```typescript
title?: string;
```


---

## 方法详情

### registerfn

# ISYS\_RightClickMenuItem.registerFn property

Registration method name (the method needs to be exported in the extension entry file)

## Signature

```typescript
registerFn?: string;
```
