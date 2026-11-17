# SCH\_RightClickMenu class

原理图 / 右键菜单类

## Signature

```typescript
class SCH_RightClickMenu
```

## Remarks

用于在原理图画布的各处右键菜单中插入、修改、删除菜单项

本类只能操作原理图画布内的右键菜单；EDA 框架自身的右键菜单请使用 `eda.sys_RightClickMenu`<!-- -->，PCB 画布请使用 `eda.pcb_RightClickMenu`

菜单项结构复用 [ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md)<!-- -->，三处右键菜单语义一致

所有方法均需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[getMenu(target)](./SCH_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 获取右键菜单

</td></tr>
<tr><td>

[insertMenuItem(target, menuItem, position)](./SCH_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 插入菜单项

</td></tr>
<tr><td>

[removeMenuItem(target, menuItemId)](./SCH_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 删除菜单项

</td></tr>
<tr><td>

[replaceMenu(target, menuItems)](./SCH_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 完全覆盖右键菜单

</td></tr>
<tr><td>

[resetMenu(target)](./SCH_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 恢复默认右键菜单

</td></tr>
<tr><td>

[updateMenuItem(target, menuItemId, patch)](./SCH_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 修改菜单项

</td></tr>
</tbody></table>

---

## 方法详情

### getmenu

# SCH\_RightClickMenu.getMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取右键菜单

## Signature

```typescript
function getMenu(target: ESCH_RightClickMenuTarget): Promise<Array<ISYS_RightClickMenuItem | null>>;
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

target

</td><td>

[ESCH\_RightClickMenuTarget](../enums/ESCH_RightClickMenuTarget.md)

</td><td>

目标右键菜单位置

</td></tr>
</tbody></table>

## Returns

Promise&lt;Array&lt;[ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) \| null&gt;&gt;

该位置的完整菜单项列表，位置不存在时返回空数组

## Remarks

返回指定位置当前完整的右键菜单，包含 EDA 内置菜单项与其它扩展插入的菜单项

返回的菜单项均为完整数据：内置菜单项会带有其原始标题、图标、快捷键与动作，扩展可以据此决定把新菜单项插到哪个内置菜单项之前或之后

数组中的 `null` 代表一条分隔符

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5

### insertmenuitem

# SCH\_RightClickMenu.insertMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

插入菜单项

## Signature

```typescript
function insertMenuItem(
	target: ESCH_RightClickMenuTarget,
	menuItem: ISYS_RightClickMenuItem,
	position: ISYS_RightClickMenuItemPosition,
): Promise<boolean>;
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

target

</td><td>

[ESCH\_RightClickMenuTarget](../enums/ESCH_RightClickMenuTarget.md)

</td><td>

目标右键菜单位置

</td></tr>
<tr><td>

menuItem

</td><td>

[ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md)

</td><td>

待插入的菜单项

</td></tr>
<tr><td>

position

</td><td>

[ISYS\_RightClickMenuItemPosition](../interfaces/ISYS_RightClickMenuItemPosition.md)

</td><td>

插入位置

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

是否插入成功

## Remarks

在指定位置的右键菜单中插入一个菜单项，原有菜单项保持不变

若 `id` 与该菜单内已有菜单项重复，则插入失败并返回 `false`

新菜单项的 ID 会被自动加上扩展 UUID 前缀，避免与其它扩展冲突

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5

### removemenuitem

# SCH\_RightClickMenu.removeMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除菜单项

## Signature

```typescript
function removeMenuItem(target: ESCH_RightClickMenuTarget, menuItemId: string): Promise<boolean>;
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

target

</td><td>

[ESCH\_RightClickMenuTarget](../enums/ESCH_RightClickMenuTarget.md)

</td><td>

目标右键菜单位置

</td></tr>
<tr><td>

menuItemId

</td><td>

string

</td><td>

待删除的菜单项 ID：内置项传其 ID；本扩展插入的项传插入时的原始 ID（自动定位）或 getMenu 返回的带前缀 ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

是否删除成功，菜单项不存在时返回 `false`

## Remarks

从指定位置的右键菜单中移除一个菜单项，其子菜单项一同移除

既能删除扩展自己插入的菜单项，也能删除 EDA 内置菜单项

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5

### replacemenu

# SCH\_RightClickMenu.replaceMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

完全覆盖右键菜单

## Signature

```typescript
function replaceMenu(
	target: ESCH_RightClickMenuTarget,
	menuItems: Array<ISYS_RightClickMenuItem | null>,
): Promise<boolean>;
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

target

</td><td>

[ESCH\_RightClickMenuTarget](../enums/ESCH_RightClickMenuTarget.md)

</td><td>

目标右键菜单位置

</td></tr>
<tr><td>

menuItems

</td><td>

Array&lt;[ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) \| null&gt;

</td><td>

替换后的完整菜单项列表，`null` 代表分隔符

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

是否覆盖成功

## Remarks

用传入的菜单项列表整体替换指定位置的右键菜单，原有菜单项全部丢弃

若希望保留某个内置菜单项，在列表中传入只带 `id` 的菜单项即可，其原始标题、图标、快捷键与动作会保持不变

数组中的 `null` 代表一条分隔符

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5

### resetmenu

# SCH\_RightClickMenu.resetMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

恢复默认右键菜单

## Signature

```typescript
function resetMenu(target: ESCH_RightClickMenuTarget): Promise<boolean>;
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

target

</td><td>

[ESCH\_RightClickMenuTarget](../enums/ESCH_RightClickMenuTarget.md)

</td><td>

目标右键菜单位置

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

是否恢复成功

## Remarks

撤销本扩展对指定位置右键菜单的全部改动，恢复到原理图默认菜单；其它扩展的改动不受影响

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5

### updatemenuitem

# SCH\_RightClickMenu.updateMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改菜单项

## Signature

```typescript
function updateMenuItem(
	target: ESCH_RightClickMenuTarget,
	menuItemId: string,
	patch: Partial<Omit<ISYS_RightClickMenuItem, 'id'>>,
): Promise<boolean>;
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

target

</td><td>

[ESCH\_RightClickMenuTarget](../enums/ESCH_RightClickMenuTarget.md)

</td><td>

目标右键菜单位置

</td></tr>
<tr><td>

menuItemId

</td><td>

string

</td><td>

待修改的菜单项 ID：内置项传其 ID；本扩展插入的项传插入时的原始 ID（自动定位）或 getMenu 返回的带前缀 ID

</td></tr>
<tr><td>

patch

</td><td>

Partial&lt;Omit&lt;[ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md)<!-- -->, 'id'&gt;&gt;

</td><td>

需要修改的属性，未传入的属性保持不变

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

是否修改成功，菜单项不存在时返回 `false`

## Remarks

修改指定位置右键菜单中某个菜单项的部分属性，未传入的属性保持原值

既能修改扩展自己插入的菜单项，也能修改 EDA 内置菜单项；修改内置菜单项时仅影响显示与可用性，不会改变其原有动作

菜单项 ID 不允许修改，若 `patch` 内包含 `id` 将被忽略

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5
