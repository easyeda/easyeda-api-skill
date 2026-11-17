# SYS\_RightClickMenu class

System / right-click menu class

## Signature

```typescript
class SYS_RightClickMenu
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

[changeMenu(menuId, menuItems)](./SYS_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** Modify the right-click menu

</td></tr>
<tr><td>

[getMenu(target)](./SYS_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 获取右键菜单

</td></tr>
<tr><td>

[insertMenuItem(target, menuItem, position)](./SYS_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 插入菜单项

</td></tr>
<tr><td>

[removeMenuItem(target, menuItemId)](./SYS_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 删除菜单项

</td></tr>
<tr><td>

[replaceMenu(target, menuItems)](./SYS_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 完全覆盖右键菜单

</td></tr>
<tr><td>

[resetMenu(target)](./SYS_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 恢复默认右键菜单

</td></tr>
<tr><td>

[updateMenuItem(target, menuItemId, patch)](./SYS_RightClickMenu.md)

</td><td>

</td><td>

**_(BETA)_** 修改菜单项

</td></tr>
</tbody></table>

---

## 方法详情

### changemenu

# SYS\_RightClickMenu.changeMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> since EDA v5 请使用 [SYS\_RightClickMenu.replaceMenu()](./SYS_RightClickMenu.md) 替代

Modify the right-click menu

## Signature

```typescript
function changeMenu(
	menuId: string,
	menuItems: Array<ISYS_RightClickMenuItem | null>,
): Promise<void>;
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

menuId

</td><td>

string

</td><td>

Menu ID

</td></tr>
<tr><td>

menuItems

</td><td>

Array&lt;[ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) \| null&gt;

</td><td>

Menu items. `null` represents a separator

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Remarks

Currently, only right-click menu modifications for \*\*bottom menu device list item right-click\*\*, \*\*bottom menu symbol list item right-click\*\*, \*\*bottom menu footprint list item right-click\*\*, and \*\*bottom menu reuse block list item right-click\*\* are supported

If you want to reorder or remove some menu items, only the menu item IDs need to be passed in `menuItems`<!-- -->; other properties will remain unchanged automatically

To register a new right-click menu, the complete [ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) data needs to be passed in

This API forces the ID of the newly created right-click menu to include the extension UUID. For example, an input `id = 'example'` will be automatically rewritten to `e143d88179874e7f851cc890cd22fc71|example`

Note: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

Non-public API usage notice: This API is provided as-is without additional documentation for parameters. Parameters may be changed in a breaking manner in any version without notice.

## Example

```javascript
// 1. 打开底部库面板，便于右击列表项观察菜单变化
eda.sys_PanelControl.openBottomPanel('library');

// 2. 组合新的菜单项列表：内置项只传 id（保持原属性、原图标与快捷键），
// 末尾追加扩展自定义菜单项（完整数据，含二级菜单与点击回调）
const menuItems = [
	{ id: 'refresh' },
	null,
	{ id: 'editDevice' },
	{ id: 'easyEditDevice' },
	{ id: 'editSymbol' },
	{ id: 'linkSymbol' },
	{ id: 'editFootprint' },
	{ id: 'linkFootprint' },
	{ id: 'link3DModel' },
	null,
	{ id: 'modifyCategory' },
	null,
	{ id: 'libDelete' },
	null,
	{ id: 'saveAs' },
	{ id: 'symbolSaveAs' },
	{ id: 'footprintSaveAs' },
	{ id: 'saveAsLocal' },
	{ id: 'model3DSaveAs' },
	null,
	{ id: 'viewProductDetail' },
	{ id: 'viewDatasheet' },
	null,
	{ id: 'addOrRemoveFavorite' },
	{ id: 'addIntoBasicLibrary' },
	null,
	{
		id: '嘉立创示例_器件批量处理',
		title: '器件批量处理',
		menuItems: [
			{ id: '嘉立创示例_发送校验', title: '发送校验', registerFn: 'onDeviceCheck' },
			{ id: '嘉立创示例_导出BOM', title: '导出 BOM', registerFn: 'onDeviceExport' },
		],
	},
];

// 3. 注册到个人器件列表的右键菜单（真实扩展在入口文件导出
// onDeviceCheck / onDeviceExport 两个方法即可收到点击回调）
await eda.sys_RightClickMenu.changeMenu('componentLidTableContextMenuIdMenu_device_personal', menuItems);

// 4. 输出结果：在底部库面板右击个人器件列表的任意器件即可看到新菜单
console.log('右键菜单已修改，菜单项数量：', menuItems.length);
console.log('请在底部库面板右击个人器件列表的器件查看效果');
```

### getmenu

# SYS\_RightClickMenu.getMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取右键菜单

## Signature

```typescript
function getMenu(target: ESYS_RightClickMenuTarget): Promise<Array<ISYS_RightClickMenuItem | null>>;
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

[ESYS\_RightClickMenuTarget](../enums/ESYS_RightClickMenuTarget.md)

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

# SYS\_RightClickMenu.insertMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

插入菜单项

## Signature

```typescript
function insertMenuItem(
	target: ESYS_RightClickMenuTarget,
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

[ESYS\_RightClickMenuTarget](../enums/ESYS_RightClickMenuTarget.md)

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

# SYS\_RightClickMenu.removeMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除菜单项

## Signature

```typescript
function removeMenuItem(target: ESYS_RightClickMenuTarget, menuItemId: string): Promise<boolean>;
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

[ESYS\_RightClickMenuTarget](../enums/ESYS_RightClickMenuTarget.md)

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

# SYS\_RightClickMenu.replaceMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

完全覆盖右键菜单

## Signature

```typescript
function replaceMenu(
	target: ESYS_RightClickMenuTarget,
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

[ESYS\_RightClickMenuTarget](../enums/ESYS_RightClickMenuTarget.md)

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

与 `changeMenu` 的区别是：本接口以 [ESYS\_RightClickMenuTarget](../enums/ESYS_RightClickMenuTarget.md) 指定目标，不依赖内部的菜单 ID

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5

### resetmenu

# SYS\_RightClickMenu.resetMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

恢复默认右键菜单

## Signature

```typescript
function resetMenu(target: ESYS_RightClickMenuTarget): Promise<boolean>;
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

[ESYS\_RightClickMenuTarget](../enums/ESYS_RightClickMenuTarget.md)

</td><td>

目标右键菜单位置

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

是否恢复成功

## Remarks

撤销本扩展对指定位置右键菜单的全部改动，恢复到 EDA 默认菜单；其它扩展的改动不受影响

本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error` ADD since EDA v5

### updatemenuitem

# SYS\_RightClickMenu.updateMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改菜单项

## Signature

```typescript
function updateMenuItem(
	target: ESYS_RightClickMenuTarget,
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

[ESYS\_RightClickMenuTarget](../enums/ESYS_RightClickMenuTarget.md)

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
