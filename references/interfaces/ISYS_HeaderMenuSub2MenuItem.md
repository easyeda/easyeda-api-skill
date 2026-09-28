# ISYS\_HeaderMenuSub2MenuItem interface

Top-level tertiary menu item

## Signature

```typescript
interface ISYS_HeaderMenuSub2MenuItem
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

[icon?](./ISYS_HeaderMenuSub2MenuItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ Menu item icon

</td></tr>
<tr><td>

[id](./ISYS_HeaderMenuSub2MenuItem.md)

</td><td>

</td><td>

string

</td><td>

Menu item ID, cannot be repeated

</td></tr>
<tr><td>

[registerFn?](./ISYS_HeaderMenuSub2MenuItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ Registration method name (the method needs to be exported in the extension entry file)

</td></tr>
<tr><td>

[shortcutKey?](./ISYS_HeaderMenuSub2MenuItem.md)

</td><td>

</td><td>

[TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md)

</td><td>

_(Optional)_ 局部快捷键

</td></tr>
<tr><td>

[title](./ISYS_HeaderMenuSub2MenuItem.md)

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

# ISYS\_HeaderMenuSub2MenuItem.icon property

Menu item icon

## Signature

```typescript
icon?: string;
```

### id

# ISYS\_HeaderMenuSub2MenuItem.id property

Menu item ID, cannot be repeated

## Signature

```typescript
id: string;
```

### shortcutkey

# ISYS\_HeaderMenuSub2MenuItem.shortcutKey property

局部快捷键

## Signature

```typescript
shortcutKey?: TSYS_ShortcutKeys;
```

## Remarks

ADD since EDA v5.0

### title

# ISYS\_HeaderMenuSub2MenuItem.title property

Menu item title

## Signature

```typescript
title: string;
```


---

## 方法详情

### registerfn

# ISYS\_HeaderMenuSub2MenuItem.registerFn property

Registration method name (the method needs to be exported in the extension entry file)

## Signature

```typescript
registerFn?: string;
```
