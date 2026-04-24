# ISYS\_RightClickMenuItem interface

右键菜单项

## Signature

```typescript
interface ISYS_RightClickMenuItem 
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

_(Optional)_ 菜单项图标


</td></tr>
<tr><td>

[id](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

string


</td><td>

菜单项 ID，不可重复


</td></tr>
<tr><td>

[menuItems?](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

Array&lt;[ISYS\_RightClickMenuItem](./ISYS_RightClickMenuItem.md) \| null&gt;


</td><td>

_(Optional)_ 子菜单项


</td></tr>
<tr><td>

[registerFn?](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 注册方法名称（需要在扩展入口文件导出该方法）


</td></tr>
<tr><td>

[title?](./ISYS_RightClickMenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 菜单项标题


</td></tr>
</tbody></table>

---

## 属性详情

### icon

# ISYS\_RightClickMenuItem.icon property

菜单项图标

## Signature

```typescript
icon?: string;
```

### id

# ISYS\_RightClickMenuItem.id property

菜单项 ID，不可重复

## Signature

```typescript
id: string;
```

### menuitems

# ISYS\_RightClickMenuItem.menuItems property

子菜单项

## Signature

```typescript
menuItems?: Array<ISYS_RightClickMenuItem | null>;
```

### title

# ISYS\_RightClickMenuItem.title property

菜单项标题

## Signature

```typescript
title?: string;
```


---

## 方法详情

### registerfn

# ISYS\_RightClickMenuItem.registerFn property

注册方法名称（需要在扩展入口文件导出该方法）

## Signature

```typescript
registerFn?: string;
```
