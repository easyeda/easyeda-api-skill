# ISYS\_HeaderMenuTopMenuItem interface

Top-level primary menu item

## Signature

```typescript
export interface ISYS_HeaderMenuTopMenuItem 
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

[id](./ISYS_HeaderMenuTopMenuItem.md)


</td><td>


</td><td>

string


</td><td>

Menu item ID, cannot be repeated


</td></tr>
<tr><td>

[menuItems?](./ISYS_HeaderMenuTopMenuItem.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuSub1MenuItem](./ISYS_HeaderMenuSub1MenuItem.md) \| null&gt;


</td><td>

_(Optional)_ Sub-menu item


</td></tr>
<tr><td>

[title](./ISYS_HeaderMenuTopMenuItem.md)


</td><td>


</td><td>

string


</td><td>

Menu item title


</td></tr>
</tbody></table>

---

## 属性详情

### id

# ISYS\_HeaderMenuTopMenuItem.id property

Menu item ID, cannot be repeated

## Signature

```typescript
id: string;
```

### menuitems

# ISYS\_HeaderMenuTopMenuItem.menuItems property

Sub-menu item

## Signature

```typescript
menuItems?: Array<ISYS_HeaderMenuSub1MenuItem | null>;
```

### title

# ISYS\_HeaderMenuTopMenuItem.title property

Menu item title

## Signature

```typescript
title: string;
```
