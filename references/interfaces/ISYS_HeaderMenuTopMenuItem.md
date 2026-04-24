# ISYS\_HeaderMenuTopMenuItem interface

顶部一级菜单项

## Signature

```typescript
interface ISYS_HeaderMenuTopMenuItem 
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

菜单项 ID，不可重复


</td></tr>
<tr><td>

[menuItems?](./ISYS_HeaderMenuTopMenuItem.md)


</td><td>


</td><td>

Array&lt;[ISYS\_HeaderMenuSub1MenuItem](./ISYS_HeaderMenuSub1MenuItem.md) \| null&gt;


</td><td>

_(Optional)_ 子菜单项


</td></tr>
<tr><td>

[registerFn?](./ISYS_HeaderMenuTopMenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 注册方法名称（需要在扩展入口文件导出该方法）


</td></tr>
<tr><td>

[title](./ISYS_HeaderMenuTopMenuItem.md)


</td><td>


</td><td>

string


</td><td>

菜单项标题


</td></tr>
</tbody></table>

---

## 属性详情

### id

# ISYS\_HeaderMenuTopMenuItem.id property

菜单项 ID，不可重复

## Signature

```typescript
id: string;
```

### menuitems

# ISYS\_HeaderMenuTopMenuItem.menuItems property

子菜单项

## Signature

```typescript
menuItems?: Array<ISYS_HeaderMenuSub1MenuItem | null>;
```

### title

# ISYS\_HeaderMenuTopMenuItem.title property

菜单项标题

## Signature

```typescript
title: string;
```


---

## 方法详情

### registerfn

# ISYS\_HeaderMenuTopMenuItem.registerFn property

注册方法名称（需要在扩展入口文件导出该方法）

## Signature

```typescript
registerFn?: string;
```
