# ISYS\_HeaderMenuSub2MenuItem interface

顶部三级菜单项

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

_(Optional)_ 菜单项图标


</td></tr>
<tr><td>

[id](./ISYS_HeaderMenuSub2MenuItem.md)


</td><td>


</td><td>

string


</td><td>

菜单项 ID，不可重复


</td></tr>
<tr><td>

[registerFn?](./ISYS_HeaderMenuSub2MenuItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 注册方法名称（需要在扩展入口文件导出该方法）


</td></tr>
<tr><td>

[title](./ISYS_HeaderMenuSub2MenuItem.md)


</td><td>


</td><td>

string


</td><td>

菜单项标题


</td></tr>
</tbody></table>

---

## 属性详情

### icon

# ISYS\_HeaderMenuSub2MenuItem.icon property

菜单项图标

## Signature

```typescript
icon?: string;
```

### id

# ISYS\_HeaderMenuSub2MenuItem.id property

菜单项 ID，不可重复

## Signature

```typescript
id: string;
```

### title

# ISYS\_HeaderMenuSub2MenuItem.title property

菜单项标题

## Signature

```typescript
title: string;
```


---

## 方法详情

### registerfn

# ISYS\_HeaderMenuSub2MenuItem.registerFn property

注册方法名称（需要在扩展入口文件导出该方法）

## Signature

```typescript
registerFn?: string;
```
