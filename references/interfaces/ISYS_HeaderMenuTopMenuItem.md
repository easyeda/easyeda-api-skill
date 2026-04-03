# ISYS\_HeaderMenuTopMenuItem interface

顶部一级菜单项

## 签名

```typescript
interface ISYS_HeaderMenuTopMenuItem 
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

_（可选）_ 子菜单项


</td></tr>
<tr><td>

[registerFn?](./ISYS_HeaderMenuTopMenuItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 注册方法名称（需要在扩展入口文件导出该方法）


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

## 签名

```typescript
id: string;
```

### menuitems

# ISYS\_HeaderMenuTopMenuItem.menuItems property

子菜单项

## 签名

```typescript
menuItems?: Array<ISYS_HeaderMenuSub1MenuItem | null>;
```

### title

# ISYS\_HeaderMenuTopMenuItem.title property

菜单项标题

## 签名

```typescript
title: string;
```


---

## 方法详情

### registerfn

# ISYS\_HeaderMenuTopMenuItem.registerFn property

注册方法名称（需要在扩展入口文件导出该方法）

## 签名

```typescript
registerFn?: string;
```
