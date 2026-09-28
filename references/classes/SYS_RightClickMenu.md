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
</tbody></table>

---

## 方法详情

### changemenu

# SYS\_RightClickMenu.changeMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

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
