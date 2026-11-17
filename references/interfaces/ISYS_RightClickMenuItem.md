# ISYS\_RightClickMenuItem interface

Right-click menu item

## Signature

```typescript
interface ISYS_RightClickMenuItem
```

## Remarks

本结构同时用于 EDA 框架、原理图画布、PCB 画布三处右键菜单，三处语义一致

传入 `null` 代表一条分隔符

若只传入 `id` 而省略其它属性，则保留该菜单项在 EDA 中的原始标题、图标、快捷键与动作，用于调整已有菜单项的顺序

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

[action?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

[TSYS\_RightClickMenuItemAction](../types/TSYS_RightClickMenuItemAction.md)

</td><td>

_(Optional)_ 菜单项被点击后执行的动作，支持扩展命令与 EDA 内部命令

</td></tr>
<tr><td>

[checked?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 菜单项是否显示勾选标记，缺省为不显示

</td></tr>
<tr><td>

[enabled?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 菜单项是否可用，`false` 时置灰不可点击，缺省为可用

</td></tr>
<tr><td>

[hotkeyText?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 菜单项右侧显示的快捷键文案，仅作展示，不会真正注册快捷键（PCB/原理图域支持；EDA 框架域即 sys\_RightClickMenu 的底部面板暂不支持展示）

</td></tr>
<tr><td>

[icon?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 菜单项图标

</td></tr>
<tr><td>

[iconConfig?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

[TSYS\_RightClickMenuItemIcon](../types/TSYS_RightClickMenuItemIcon.md)

</td><td>

_(Optional)_ 菜单项图标，支持 EDA 内置图标与调用方传入的图标

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

[keepMenuOpen?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 点击后是否保持菜单打开，缺省为点击后关闭

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

_(Optional)_ 注册方法名称（需要在扩展入口文件导出该方法）

</td></tr>
<tr><td>

[title?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ Menu item title

</td></tr>
<tr><td>

[visible?](./ISYS_RightClickMenuItem.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 菜单项是否可见，`false` 时隐藏，缺省为可见

</td></tr>
</tbody></table>

---

## 属性详情

### action

# ISYS\_RightClickMenuItem.action property

菜单项被点击后执行的动作，支持扩展命令与 EDA 内部命令

## Signature

```typescript
action?: TSYS_RightClickMenuItemAction;
```

## Remarks

ADD since EDA v5

### checked

# ISYS\_RightClickMenuItem.checked property

菜单项是否显示勾选标记，缺省为不显示

## Signature

```typescript
checked?: boolean;
```

## Remarks

ADD since EDA v5

### enabled

# ISYS\_RightClickMenuItem.enabled property

菜单项是否可用，`false` 时置灰不可点击，缺省为可用

## Signature

```typescript
enabled?: boolean;
```

## Remarks

ADD since EDA v5

### hotkeytext

# ISYS\_RightClickMenuItem.hotkeyText property

菜单项右侧显示的快捷键文案，仅作展示，不会真正注册快捷键（PCB/原理图域支持；EDA 框架域即 sys\_RightClickMenu 的底部面板暂不支持展示）

## Signature

```typescript
hotkeyText?: string;
```

## Remarks

ADD since EDA v5

### icon

# ISYS\_RightClickMenuItem.icon property

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [ISYS\_RightClickMenuItem.iconConfig](./ISYS_RightClickMenuItem.md) 替代

菜单项图标

## Signature

```typescript
icon?: string;
```

### iconconfig

# ISYS\_RightClickMenuItem.iconConfig property

菜单项图标，支持 EDA 内置图标与调用方传入的图标

## Signature

```typescript
iconConfig?: TSYS_RightClickMenuItemIcon;
```

## Remarks

ADD since EDA v5

### id

# ISYS\_RightClickMenuItem.id property

Menu item ID, cannot be repeated

## Signature

```typescript
id: string;
```

### keepmenuopen

# ISYS\_RightClickMenuItem.keepMenuOpen property

点击后是否保持菜单打开，缺省为点击后关闭

## Signature

```typescript
keepMenuOpen?: boolean;
```

## Remarks

ADD since EDA v5

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

### visible

# ISYS\_RightClickMenuItem.visible property

菜单项是否可见，`false` 时隐藏，缺省为可见

## Signature

```typescript
visible?: boolean;
```

## Remarks

ADD since EDA v5


---

## 方法详情

### registerfn

# ISYS\_RightClickMenuItem.registerFn property

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [ISYS\_RightClickMenuItem.action](./ISYS_RightClickMenuItem.md) 替代

注册方法名称（需要在扩展入口文件导出该方法）

## Signature

```typescript
registerFn?: string;
```
