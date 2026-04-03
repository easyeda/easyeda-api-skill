# ISYS\_HeaderMenuSub2MenuItem interface

顶部三级菜单项

## 签名

```typescript
interface ISYS_HeaderMenuSub2MenuItem 
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

[icon?](./ISYS_HeaderMenuSub2MenuItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 菜单项图标


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

_（可选）_ 注册方法名称（需要在扩展入口文件导出该方法）


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

## 签名

```typescript
icon?: string;
```

### id

# ISYS\_HeaderMenuSub2MenuItem.id property

菜单项 ID，不可重复

## 签名

```typescript
id: string;
```

### title

# ISYS\_HeaderMenuSub2MenuItem.title property

菜单项标题

## 签名

```typescript
title: string;
```


---

## 方法详情

### registerfn

# ISYS\_HeaderMenuSub2MenuItem.registerFn property

注册方法名称（需要在扩展入口文件导出该方法）

## 签名

```typescript
registerFn?: string;
```
