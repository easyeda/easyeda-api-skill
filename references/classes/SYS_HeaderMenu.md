# SYS\_HeaderMenu class

系统 / 顶部菜单类

## Signature

```typescript
declare class SYS_HeaderMenu 
```

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[insertHeaderMenus(headerMenus)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

导入顶部菜单数据


</td></tr>
<tr><td>

[insertSystemHeaderMenuItem(env, id, props)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

**_(BETA)_** 在指定位置插入系统顶部菜单项


</td></tr>
<tr><td>

[removeHeaderMenus()](./SYS_HeaderMenu.md)


</td><td>


</td><td>

移除顶部菜单数据


</td></tr>
<tr><td>

[removeSystemHeaderMenuItem(id, props)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

**_(BETA)_** 移除系统顶部菜单项


</td></tr>
<tr><td>

[replaceHeaderMenus(headerMenus)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

替换顶部菜单数据


</td></tr>
</tbody></table>

---

## 方法详情

### insertheadermenus

# SYS\_HeaderMenu.insertHeaderMenus() method

导入顶部菜单数据

## Signature

```typescript
insertHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

headerMenus


</td><td>

[ISYS\_HeaderMenus](../interfaces/ISYS_HeaderMenus.md)


</td><td>

顶部菜单数据


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

### insertsystemheadermenuitem

# SYS\_HeaderMenu.insertSystemHeaderMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

在指定位置插入系统顶部菜单项

## Signature

```typescript
insertSystemHeaderMenuItem(env: ESYS_HeaderMenuEnvironment, id: Array<string>, props: {
        title: string;
        registerFn?: string;
        menuItems?: Array<ISYS_HeaderMenuSub1MenuItem | ISYS_HeaderMenuSub2MenuItem | null>;
        insertDividerBefore?: boolean;
        insertDividerAfter?: boolean;
        insertBefore?: string;
        crossDividerWhenInsert?: boolean;
    }): Promise<string | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

env


</td><td>

[ESYS\_HeaderMenuEnvironment](../enums/ESYS_HeaderMenuEnvironment.md)


</td><td>

环境


</td></tr>
<tr><td>

id


</td><td>

Array&lt;string&gt;


</td><td>

菜单项 ID 树，将会按照数组顺序按层级匹配菜单项，并将数组最后一位作为插入的菜单项的 ID


</td></tr>
<tr><td>

props


</td><td>

{ title: string; registerFn?: string; menuItems?: Array&lt;[ISYS\_HeaderMenuSub1MenuItem](../interfaces/ISYS_HeaderMenuSub1MenuItem.md) \| [ISYS\_HeaderMenuSub2MenuItem](../interfaces/ISYS_HeaderMenuSub2MenuItem.md) \| null&gt;; insertDividerBefore?: boolean; insertDividerAfter?: boolean; insertBefore?: string; crossDividerWhenInsert?: boolean; }


</td><td>

其它参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

顶部菜单项的 ID 数组，分隔线是否插入并不会影响操作结果的返回值

## Remarks

系统顶部菜单一旦新增无法有效删除，需要重启嘉立创 EDA 软件才可以恢复

本接口需要在系统已有的系统一级菜单下新增子菜单，无法新增和修改一级菜单，`id` 数组请至少传递 `2` 个值

本接口将会强制新建的系统顶部菜单的 ID 包含扩展 UUID，例如输入的 `id = 'example'`<!-- -->，将会被自动重写为 `e143d88179874e7f851cc890cd22fc71|example`<!-- -->，后续如需移除该菜单，请输入重写后的名称

本接口不能在 \*\*高级\*\* 菜单下新增任何子菜单

本接口新增的子菜单将默认排列在原菜单的结尾，除非指定了 `props.insertBefore` 参数

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知

### removeheadermenus

# SYS\_HeaderMenu.removeHeaderMenus() method

移除顶部菜单数据

## Signature

```typescript
removeHeaderMenus(): void;
```


## Returns

void

### removesystemheadermenuitem

# SYS\_HeaderMenu.removeSystemHeaderMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

移除系统顶部菜单项

## Signature

```typescript
removeSystemHeaderMenuItem(id: Array<string>, props?: {
        removeTheBeforeDivider?: boolean;
        removeTheAfterDivider?: boolean;
    }): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

id


</td><td>

Array&lt;string&gt;


</td><td>

菜单项 ID 树，将会按照数组顺序按层级匹配菜单项，并移除数组最后一位对应的菜单项


</td></tr>
<tr><td>

props


</td><td>

\{ removeTheBeforeDivider?: boolean; removeTheAfterDivider?: boolean; \}


</td><td>

_(Optional)_ 其它参数，是否移除菜单项之前、之后的分隔线


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

移除操作是否成功，菜单已移除但分隔线未找到也会返回 `true` 的结果

## Remarks

一旦菜单被移除，需要重启嘉立创 EDA 软件才可以恢复

本接口无法移除  接口导入的系统顶部菜单项

本接口无法移除第一级菜单，`id` 数组请至少传递 `2` 个值

本接口无法移除 \*\*高级\*\* 菜单下的任何子菜单

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知

### replaceheadermenus

# SYS\_HeaderMenu.replaceHeaderMenus() method

替换顶部菜单数据

## Signature

```typescript
replaceHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

headerMenus


</td><td>

[ISYS\_HeaderMenus](../interfaces/ISYS_HeaderMenus.md)


</td><td>

顶部菜单数据


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

本接口相当于同时执行了 [移除](./SYS_HeaderMenu.md) 和 [导入](./SYS_HeaderMenu.md) 操作
