# ISYS\_HeaderMenuSub1MenuItem interface

Top-level secondary menu item

## Signature

```typescript
export interface ISYS_HeaderMenuSub1MenuItem 
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

[icon?](./ISYS_HeaderMenuSub1MenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Menu item icon


</td></tr>
<tr><td>

[id](./ISYS_HeaderMenuSub1MenuItem.md)


</td><td>


</td><td>

string


</td><td>

Menu item ID, cannot be repeated


</td></tr>
<tr><td>

[menuItems?](./ISYS_HeaderMenuSub1MenuItem.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuSub2MenuItem](./ISYS_HeaderMenuSub2MenuItem.md) \| null&gt;


</td><td>

_(Optional)_ Sub-menu item


</td></tr>
<tr><td>

[registerFn?](./ISYS_HeaderMenuSub1MenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Registration method name (the method needs to be exported in the extension entry file)


</td></tr>
<tr><td>

[title](./ISYS_HeaderMenuSub1MenuItem.md)


</td><td>


</td><td>

string


</td><td>

Menu item title


</td></tr>
</tbody></table>

---

## 属性详情

### icon

# ISYS\_HeaderMenuSub1MenuItem.icon property

Menu item icon

## Signature

```typescript
icon?: string;
```

### id

# ISYS\_HeaderMenuSub1MenuItem.id property

Menu item ID, cannot be repeated

## Signature

```typescript
id: string;
```

### menuitems

# ISYS\_HeaderMenuSub1MenuItem.menuItems property

Sub-menu item

## Signature

```typescript
menuItems?: Array<ISYS_HeaderMenuSub2MenuItem | null>;
```

### title

# ISYS\_HeaderMenuSub1MenuItem.title property

Menu item title

## Signature

```typescript
title: string;
```


---

## 方法详情

### registerfn

# ISYS\_HeaderMenuSub1MenuItem.registerFn property

Registration method name (the method needs to be exported in the extension entry file)

## Signature

```typescript
registerFn?: string;
```
